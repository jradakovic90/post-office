import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogMode } from 'src/app/shared/interfaces/dialog-data';
import { DialogComponentBase } from 'src/app/shared/components/dialog/dialog-component-base';
import { Observable } from 'rxjs';
import { ShipmentService } from '../../shipment.service';
import { ShipmentModel, ShipmentTypeModel, ShipmentWeightModel } from '../../interfaces/shipment.model';
import { StaticDataClass } from '../../utilities/static-data-class.component';
import { PostOfficeModel } from 'src/app/pages/post-office/interfaces/post-office.model';
import { PostOfficeService } from 'src/app/pages/post-office/post-office.service';

@Component({
  selector: 'app-shipment-dialog',
  templateUrl: './shipment-dialog.component.html',
  styleUrls: ['./shipment-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShipmentDialogComponent
  extends DialogComponentBase
  implements OnInit {
  dialogMode = DialogMode;
  shipment!: ShipmentModel;

  types: ShipmentTypeModel[] = StaticDataClass.types;
  weights: ShipmentWeightModel[] = StaticDataClass.weights;
  statuses: boolean[] = [false, true]

  offices: PostOfficeModel[] = [];

  constructor(
    private ShipmentService: ShipmentService, private postOfficeService: PostOfficeService,
    private fb: FormBuilder,
  ) {
    super();
  }

  ngOnInit() {
    this.getPostOffices();
    if (this.mode !== DialogMode.Add) {
      this.loadShipment(this.data.id);
    } else {
      this.createForm();
    }
  }

  getPostOffices(): void {
    this.postOfficeService.getPostOffices().subscribe(offices => {
      this.offices = offices;
    });
  }

  createForm() {
    this.form = this.fb.group({
      id: this.data?.id ?? '',
      type: [
        {
          value: this.shipment?.type.name ?? '',
          disabled: this.mode === DialogMode.DefaultView
        },
        Validators.required,
      ],
      origin: [
        {
          value: this.shipment?.origin ?? '',
          disabled: this.mode === DialogMode.DefaultView
        },
        Validators.required,
      ],
      destination: [
        {
          value: this.shipment?.destination ?? '',
          disabled: this.mode === DialogMode.DefaultView
        },
        Validators.required,
      ],
      delivered: [
        {
          value: this.shipment?.delivered ?? '',
          disabled: this.mode === DialogMode.DefaultView
        },
        Validators.required,
      ],
      weight: [
        {
          value: this.shipment?.weight.desc ?? '',
          disabled: this.mode === DialogMode.DefaultView
        },
        Validators.required,
      ],
      office: [
        {
          value: this.shipment?.office.name ?? '',
          disabled: this.mode === DialogMode.DefaultView
        },
        Validators.required,
      ]
    });

  }

  private loadShipment(id: string) {
    this.ShipmentService.getShipment(id).subscribe((data: any) => {
      this.shipment = data;

      this.createForm();
    });
  }

  //TODO there are bugs that need to be tested(cases). 
  //TODO while edit save button should be disabled if there are no values in all fields and if there were no changes compared to the original values

  private createObjectToSend() {
    let objectToSend: any;
    let form = this.form?.getRawValue()
    if (this.mode === DialogMode.Add) {
      objectToSend = {
        type: form.type,
        origin: form.origin,
        destination: form.destination,
        delivered: form.delivered,
        weight: form.weight,
        office: form.office,
      };
    } else if (this.mode === DialogMode.Update) {
      objectToSend = {
        id: this.data.id,
        type: form.type,
        origin: form.origin,
        destination: form.destination,
        delivered: form.delivered,
        weight: form.weight,
        office: form.office,
      };
    }
    return objectToSend;
  }

  save(): Observable<any> | undefined {
    let objectToSend = this.createObjectToSend();

    if (this.mode === this.dialogMode.Add) {
      return this.ShipmentService.addShipment(objectToSend);
    } else {
      return this.ShipmentService.editShipment(objectToSend);
    }
  }
}