import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage-angular';
// import {NgxIonicImageViewerModule} from 'ngx-ionic-image-viewer';
/*import { PhotoViewer } from '@ionic-native/photo-viewer';*/
import { AppVersion } from '@ionic-native/app-version/ngx';
import {DatePipe} from '@angular/common';
import { GeneralService } from 'src/app/services/general-service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
/*https://www.npmjs.com/package/ngx-ionic-image-viewer*/

// @ts-ignore
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({animated: false, swipeBackEnabled: false}),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [DatePipe, {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, AppVersion, GeneralService],
  bootstrap: [AppComponent],
})
export class AppModule {}
