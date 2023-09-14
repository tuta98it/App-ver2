import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SalesPage } from './sales.page';

@NgModule({
  declarations: [SalesPage],
  imports: [IonicModule.forRoot(),
     RouterModule.forChild([{ path: '', component: SalesPage }]),
     CommonModule
    ],
  exports: [SalesPage]
})
export class SalesModule { }
