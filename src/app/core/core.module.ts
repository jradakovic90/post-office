import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule, HomeComponent ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }
