import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared-module';
import { ShipmentModule } from './pages/shipment/shipment.module';
import { PackageModule } from './pages/package/package.module';
import { PostOfficeModule } from './pages/post-office/post-office.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, FormsModule, SharedModule, PostOfficeModule, ShipmentModule, PackageModule
  ],
  exports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
