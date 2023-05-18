import {Injectable} from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import {MainService} from './main.service';
import {Constant} from '../shared/constants/constant.class';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos = [];

  constructor(private mainService: MainService, private storage: Storage) {
  }

  public async addNewToGallery() {
    // Take a photo
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Camera, // automatically take a new photo with the camera
      quality: 100 // highest quality (0 to 100)
    });

    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);
    // @ts-ignore
    this.photos.unshift(savedImageFile);
  }

  public async addNewToGalleryAsyncUpload(schoolId) {
    // Take a photo
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Camera, // automatically take a new photo with the camera
      quality: 100 // highest quality (0 to 100)
    });

    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);
    const blob = await this.toBlod(capturedPhoto);
    const formData = new FormData();
    formData.append('files', blob as any);
    /*this.mainService.uploadArticleImage(formData, schoolId).subscribe(res => {
      savedImageFile.webUrl = res.jsonData.source;
      savedImageFile.webFileName = res.jsonData.filename;
    }, error => {
    });*/
    // @ts-ignore
    this.photos.unshift(savedImageFile);
  }

  public async choosePhotoFromGallery() {
    console.log('choosePhotoFromGallery');
    // Take a photo
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Photos, // automatically take a new photo with the camera
      quality: 100 // highest quality (0 to 100)
    });
    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);
    // @ts-ignore
    this.photos.unshift(savedImageFile);
  }

  public async chooseAvatar(userInfo) {
    // console.log(userInfo);
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Photos, // automatically take a new photo with the camera
      quality: 100 // highest quality (0 to 100)
    });
    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePictureCrop(capturedPhoto);

    //const blob = await this.toBlod(capturedPhoto);
    const base64Response = await fetch(savedImageFile.data);
    const blob = await base64Response.blob();

    const formData = new FormData();
    //savedImageFile.data.replace('data:image/png;base64,', '')
    formData.append('files', blob as any);

    //this.student.schoolId, this.student.userId
    if (userInfo.userType === 12) {
      /*this.mainService.uploadStudentAvatar(formData, userInfo.schoolId, userInfo.id).subscribe(res => {
        savedImageFile.webUrl = res.jsonData.source;
        userInfo.avatar = res.jsonData.source;
        this.storage.set(Constant.STORAGE_USERINFO, userInfo).then((res3) => {
        });
      }, error => {
      });*/
    } else {
      /*this.mainService.uploadAvatar(formData, userInfo.schoolId, userInfo.userId).subscribe(res => {
        savedImageFile.webUrl = res.jsonData.source;
        userInfo.avatar = res.jsonData.source;
        this.storage.set(Constant.STORAGE_USERINFO, userInfo).then((res3) => {
        });
      }, error => {
      });*/
    }


    // @ts-ignore
    return savedImageFile;
  }

  private compressImage(src, newX, newY) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        console.log(img.width, img.height);
        if (img.width < img.height) {
          newY = newX * img.height / img.width;
        } else {
          newX = newY * img.width / img.height;
        }
        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, newX, newY);
        console.log(newX, newY);
        const data = ctx.canvas.toDataURL();
        res(data);
      };
      img.onerror = error => rej(error);
    });
  }

  private cropImage(src, newX, newY) {
    const aspectRatio = 1;
    return new Promise((res, rej) => {
      const inputImage = new Image();
      inputImage.src = src;

      //console.log(inputImage);
      inputImage.onload = () => {
        const inputWidth = inputImage.naturalWidth;
        const inputHeight = inputImage.naturalHeight;

        // get the aspect ratio of the input image
        const inputImageAspectRatio = inputWidth / inputHeight;

        // if it's bigger than our target aspect ratio
        let outputWidth = inputWidth;
        let outputHeight = inputHeight;
        if (inputImageAspectRatio > aspectRatio) {
          outputWidth = inputHeight * aspectRatio;
        } else if (inputImageAspectRatio < aspectRatio) {
          outputHeight = inputWidth / aspectRatio;
        }
        console.log(outputWidth, outputHeight);

        // calculate the position to draw the image at
        const outputX = (outputWidth - inputWidth) * 0.5;
        const outputY = (outputHeight - inputHeight) * 0.5;

        // create a canvas that will present the output image
        const outputImage = document.createElement('canvas');

        // set it to the same size as the image
        outputImage.width = outputWidth;
        outputImage.height = outputHeight;

        // draw our image at position 0, 0 on the canvas
        const ctx = outputImage.getContext('2d');
        ctx.drawImage(inputImage, outputX, outputY);
        const data1 = ctx.canvas.toDataURL();
        // console.log(data1);
        const inputImage2 = new Image();
        inputImage2.src = data1;
        inputImage2.onload = () => {
          const elem = document.createElement('canvas');
          elem.width = newX;
          elem.height = newY;
          const ctx2 = elem.getContext('2d');
          ctx2.drawImage(inputImage2, 0, 0, newX, newY);
          const data2 = ctx2.canvas.toDataURL();
          res(data2);
        };
      };
      inputImage.onerror = error => rej(error);
    });
  }

  private async savePicture(photo: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    let base64Data: any = await this.readAsBase64(photo);

    //base64Data = this.compressImage(base64Data, 200, 200);
    await this.compressImage(base64Data, 800, 800).then(compressed => {
      base64Data = compressed;
    })
    console.log(base64Data);
    const fileName = new Date().getTime() + '.jpg';
    return {
      filepath: fileName,
      data: base64Data,
      webviewPath: photo.webPath,
      webUrl: '',
      webFileName: ''
    };
  }

  private async savePictureCrop(photo: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    let base64Data: any = await this.readAsBase64(photo);
    //base64Data = this.compressImage(base64Data, 200, 200);
    await this.cropImage(base64Data, 450, 450).then(compressed => {
      base64Data = compressed;
    })
    const fileName = new Date().getTime() + '.jpeg';
    return {
      filepath: fileName,
      data: base64Data,
      webviewPath: photo.webPath,
      webUrl: '',
      webFileName: ''
    };
  }

  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    return await this.convertBlobToBase64(blob) as string;
  }

  private async toBlod(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const response = await fetch(photo.webPath!);
    return await response.blob();
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public async choosePhotoFromGalleryAnUpload(schoolId) {
    // Take a photo
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Photos, // automatically take a new photo with the camera
      quality: 100 // highest quality (0 to 100)
    });
    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);
    const blob = await this.toBlod(capturedPhoto);
    const formData = new FormData();
    formData.append('files', blob as any);
    /*this.mainService.uploadArticleImage(formData, schoolId).subscribe(res => {
      savedImageFile.webUrl = res.jsonData.source;
      savedImageFile.webFileName = res.jsonData.filename;
    }, error => {
    });*/
    // @ts-ignore
    this.photos.unshift(savedImageFile);
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}
