import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentComponent } from './shipment.component';
import { SharedModule } from 'src/app/shared/shared-module';
import { ShipmentService } from './shipment.service';
import { ShipmentRoutingModule } from './shipment.routing.module';
import { ShipmentDialogComponent } from './components/shipment-dialog/shipment-dialog.component';

@NgModule({
  declarations: [
    ShipmentComponent, ShipmentDialogComponent
  ],
  imports: [CommonModule, SharedModule, ShipmentRoutingModule],
  providers: [ShipmentService],
  exports: [
    ShipmentComponent
  ]
})

export class ShipmentModule { }