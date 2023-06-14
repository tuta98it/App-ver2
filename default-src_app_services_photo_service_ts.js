"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_photo_service_ts"],{

/***/ 1957:
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.service */ 1557);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);





class PhotoService {
  constructor(mainService, storage) {
    this.mainService = mainService;
    this.storage = storage;
    this.photos = [];

    this.convertBlobToBase64 = blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsDataURL(blob);
    });
  }

  addNewToGallery() {
    var _this = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Take a photo
      // Take a photo
      const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Camera,
        quality: 100 // highest quality (0 to 100)

      }); // Save the picture and add it to photo collection

      const savedImageFile = yield _this.savePicture(capturedPhoto); // @ts-ignore

      _this.photos.unshift(savedImageFile);
    })();
  }

  addNewToGalleryAsyncUpload(schoolId) {
    var _this2 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Take a photo
      // Take a photo
      const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Camera,
        quality: 100 // highest quality (0 to 100)

      }); // Save the picture and add it to photo collection

      const savedImageFile = yield _this2.savePicture(capturedPhoto);
      const blob = yield _this2.toBlod(capturedPhoto);
      const formData = new FormData();
      formData.append('files', blob);
      /*this.mainService.uploadArticleImage(formData, schoolId).subscribe(res => {
        savedImageFile.webUrl = res.jsonData.source;
        savedImageFile.webFileName = res.jsonData.filename;
      }, error => {
      });*/
      // @ts-ignore

      _this2.photos.unshift(savedImageFile);
    })();
  }

  choosePhotoFromGallery() {
    var _this3 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log('choosePhotoFromGallery');
      // Take a photo
      // Take a photo
      const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos,
        quality: 100 // highest quality (0 to 100)

      }); // Save the picture and add it to photo collection

      const savedImageFile = yield _this3.savePicture(capturedPhoto); // @ts-ignore

      _this3.photos.unshift(savedImageFile);
    })();
  }

  chooseAvatar(userInfo) {
    var _this4 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(userInfo);
      // Take a photo
      const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos,
        quality: 100 // highest quality (0 to 100)

      }); // Save the picture and add it to photo collection

      const savedImageFile = yield _this4.savePictureCrop(capturedPhoto); //const blob = await this.toBlod(capturedPhoto);

      const base64Response = yield fetch(savedImageFile.data);
      const blob = yield base64Response.blob();
      const formData = new FormData(); //savedImageFile.data.replace('data:image/png;base64,', '')

      formData.append('files', blob); //this.student.schoolId, this.student.userId

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
      } // @ts-ignore


      return savedImageFile;
    })();
  }

  compressImage(src, newX, newY) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        // console.log(img.width, img.height);
        if (img.width < img.height) {
          newY = newX * img.height / img.width;
        } else {
          newX = newY * img.width / img.height;
        }

        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, newX, newY); // console.log(newX, newY);

        const data = ctx.canvas.toDataURL();
        res(data);
      };

      img.onerror = error => rej(error);
    });
  }

  cropImage(src, newX, newY) {
    const aspectRatio = 1;
    return new Promise((res, rej) => {
      const inputImage = new Image();
      inputImage.src = src; //console.log(inputImage);

      inputImage.onload = () => {
        const inputWidth = inputImage.naturalWidth;
        const inputHeight = inputImage.naturalHeight; // get the aspect ratio of the input image

        const inputImageAspectRatio = inputWidth / inputHeight; // if it's bigger than our target aspect ratio

        let outputWidth = inputWidth;
        let outputHeight = inputHeight;

        if (inputImageAspectRatio > aspectRatio) {
          outputWidth = inputHeight * aspectRatio;
        } else if (inputImageAspectRatio < aspectRatio) {
          outputHeight = inputWidth / aspectRatio;
        } // console.log(outputWidth, outputHeight);
        // calculate the position to draw the image at


        const outputX = (outputWidth - inputWidth) * 0.5;
        const outputY = (outputHeight - inputHeight) * 0.5; // create a canvas that will present the output image

        const outputImage = document.createElement('canvas'); // set it to the same size as the image

        outputImage.width = outputWidth;
        outputImage.height = outputHeight; // draw our image at position 0, 0 on the canvas

        const ctx = outputImage.getContext('2d');
        ctx.drawImage(inputImage, outputX, outputY);
        const data1 = ctx.canvas.toDataURL(); // console.log(data1);

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

  savePicture(photo) {
    var _this5 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Convert photo to base64 format, required by Filesystem API to save
      let base64Data = yield _this5.readAsBase64(photo); //base64Data = this.compressImage(base64Data, 200, 200);

      yield _this5.compressImage(base64Data, 800, 800).then(compressed => {
        base64Data = compressed;
      }); // console.log(base64Data);

      const fileName = new Date().getTime() + '.jpg';
      return {
        filepath: fileName,
        data: base64Data,
        webviewPath: photo.webPath,
        webUrl: '',
        webFileName: ''
      };
    })();
  }

  savePictureCrop(photo) {
    var _this6 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Convert photo to base64 format, required by Filesystem API to save
      let base64Data = yield _this6.readAsBase64(photo); //base64Data = this.compressImage(base64Data, 200, 200);

      yield _this6.cropImage(base64Data, 450, 450).then(compressed => {
        base64Data = compressed;
      });
      const fileName = new Date().getTime() + '.jpeg';
      return {
        filepath: fileName,
        data: base64Data,
        webviewPath: photo.webPath,
        webUrl: '',
        webFileName: ''
      };
    })();
  }

  readAsBase64(photo) {
    var _this7 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Fetch the photo, read as a blob, then convert to base64 format
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const response = yield fetch(photo.webPath);
      const blob = yield response.blob();
      return yield _this7.convertBlobToBase64(blob);
    })();
  }

  toBlod(photo) {
    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Fetch the photo, read as a blob, then convert to base64 format
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const response = yield fetch(photo.webPath);
      return yield response.blob();
    })();
  } // eslint-disable-next-line @typescript-eslint/member-ordering


  choosePhotoFromGalleryAnUpload(schoolId) {
    var _this8 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Take a photo
      // Take a photo
      const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos,
        quality: 100 // highest quality (0 to 100)

      }); // Save the picture and add it to photo collection

      const savedImageFile = yield _this8.savePicture(capturedPhoto);
      const blob = yield _this8.toBlod(capturedPhoto);
      const formData = new FormData();
      formData.append('files', blob);
      /*this.mainService.uploadArticleImage(formData, schoolId).subscribe(res => {
        savedImageFile.webUrl = res.jsonData.source;
        savedImageFile.webFileName = res.jsonData.filename;
      }, error => {
      });*/
      // @ts-ignore

      _this8.photos.unshift(savedImageFile);
    })();
  }

}

PhotoService.ɵfac = function PhotoService_Factory(t) {
  return new (t || PhotoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage));
};

PhotoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PhotoService,
  factory: PhotoService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb())
});



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_photo_service_ts.js.map