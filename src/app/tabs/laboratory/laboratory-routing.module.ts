import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratoryPage } from './laboratory.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryPageRoutingModule {}
