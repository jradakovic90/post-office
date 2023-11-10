import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostOfficeComponent } from './post-office.component';

const routes: Routes = [
  { path: '', component: PostOfficeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostOfficeRoutingModule { }