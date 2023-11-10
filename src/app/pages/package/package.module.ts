import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './package.component';
import { SharedModule } from 'src/app/shared/shared-module';
import { PackageRoutingModule } from './package.routing.module';

@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [CommonModule, SharedModule, PackageRoutingModule],
  providers: [],
  exports: [
    PackageComponent
  ]
})

export class PackageModule { }