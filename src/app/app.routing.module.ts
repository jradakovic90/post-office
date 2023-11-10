import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: 'post-office',
    loadChildren: () => import('./pages/post-office/post-office.module').then(m => m.PostOfficeModule)
  },
  {
    path: 'shipment',
    loadChildren: () => import('./pages/shipment/shipment.module').then(m => m.ShipmentModule)
  },
  {
    path: 'package',
    loadChildren: () => import('./pages/package/package.module').then(m => m.PackageModule)
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }