import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'requests',
        loadChildren: () => import('./requests/requests.module').then(m => m.RequestsPageModule)
      },
      {
        path: 'laboratory',
        loadChildren: () => import('./laboratory/laboratory.module').then(m => m.LaboratoryPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
      },
      {
        path: '',
        redirectTo: '/main/laboratory',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/laboratory',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
