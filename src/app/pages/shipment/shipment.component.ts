import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ColumnSettingsModel, TablePaginationSettingsModel } from 'src/app/shared/components/dynamic-table/interfaces/table-settings.model';
import { MatSort } from '@angular/material/sort';
import { ShipmentDialogComponent } from './components/shipment-dialog/shipment-dialog.component';
import { DialogMode } from 'src/app/shared/interfaces/dialog-data';
import { ShipmentService } from './shipment.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ToastrService } from 'ngx-toastr';
import { ShipmentTableModel } from './interfaces/shipment-table.model';
import { ShipmentModel } from './interfaces/shipment.model';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {
  dataSource = new MatTableDataSource<ShipmentTableModel>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  columnDefinition: ColumnSettingsModel[] = [];
  tablePaginationSettings: TablePaginationSettingsModel = <TablePaginationSettingsModel>{};

  constructor(private shipmentService: ShipmentService, private dialogService: DialogService, private toastr: ToastrService) {
    this.tablePaginationSettings.enablePagination = true;
    this.tablePaginationSettings.pageSize = 5;
    this.tablePaginationSettings.pageSizeOptions = [5, 10, 15];
    this.tablePaginationSettings.showFirstLastButtons = true;
    this.columnDefinition = [
      {
        'name': 'type',
        'displayName': 'Type'
      },
      {
        'name': 'delivered',
        'displayName': 'Delivered'
      },
      {
        'name': 'weight',
        'displayName': 'Weight'
      },
      {
        'name': 'office',
        'displayName': 'Office'
      },
      {
        'name': 'action',
        'displayName': 'Action'
      }
    ];
  }

  ngOnInit() {
    this.getShipments();

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyAction(element) {
    if (element[1] == "delete") {
      this.deleteShipment(element[0].id)
    } else if (element[1] == "edit") {
      this.editShipment(element[0])
    }
  }

  getShipments(): void {
    this.shipmentService.getShipments().subscribe(shipments => {
      console.log(shipments, "shipments")
      let shipmentTable = this.createTableModel(shipments);
      this.dataSource = new MatTableDataSource<ShipmentTableModel>(shipmentTable);
    });
  }

  //TODO createTableModel i mapSourceToTargetshould be in some model
  createTableModel(shipmentModelList: ShipmentModel[]): ShipmentTableModel[] {
    return shipmentModelList.map((sourceItem) => this.mapSourceToTarget(sourceItem));
  }

  mapSourceToTarget(shipmentModel: ShipmentModel): ShipmentTableModel {
    return {
      id: shipmentModel.id,
      type: shipmentModel.type.name,
      delivered: shipmentModel.delivered,
      weight: shipmentModel.weight.desc,
      office: shipmentModel.office.name
    };
  }

  addShipment() {
    this.dialogService.open(ShipmentDialogComponent, "Add Shipment", 500, { mode: 'add' }, DialogMode.Add).subscribe(success => {
      if (success) {
        this.toastr.success("Shipment created Successfully");
        this.getShipments();
      }
    });
  }

  editShipment(element: any) {
    this.dialogService.open(ShipmentDialogComponent, "Shipment Info", 500, { id: element.id }, DialogMode.DefaultView, 'Update Shipment').subscribe(success => {
      if (success) {
        this.toastr.success("Shipment updated Successfully");
        this.getShipments();
      }
    });
  }

  deleteShipment(id: string) {
    this.shipmentService.deleteShipment(id).subscribe((res) => {
      this.toastr.success(res.toString());
      this.getShipments();
    });
  }
}

