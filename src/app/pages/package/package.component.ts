import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnSettingsModel, TablePaginationSettingsModel } from 'src/app/shared/components/dynamic-table/interfaces/table-settings.model';
import { ShipmentService } from '../shipment/shipment.service';
import { PackageModel } from './interfaces/package.model';
import { ShipmentModel } from '../shipment/interfaces/shipment.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  dataSource = new MatTableDataSource<PackageModel>();


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  columnDefinition: ColumnSettingsModel[] = [];
  tablePaginationSettings: TablePaginationSettingsModel = <TablePaginationSettingsModel>{};
  idFilter = new FormControl('');
  deliveredFilter = new FormControl('');
  officeNameFilter = new FormControl('');
  weightFilter = new FormControl('');

  constructor(private shipmentService: ShipmentService) {
    this.tablePaginationSettings.enablePagination = true;
    this.tablePaginationSettings.pageSize = 5;
    this.tablePaginationSettings.pageSizeOptions = [5, 10, 15];
    this.tablePaginationSettings.showFirstLastButtons = true;
    this.columnDefinition = [
      {
        'name': 'officeName',
        'displayName': 'Office Name'
      },
      {
        'name': 'delivered',
        'displayName': 'Delivered'

      },
      {
        'name': 'weight',
        'displayName': 'Weight'
      }
    ];

  }

  getPackages(): void {
    this.shipmentService.getShipments().subscribe(shipments => {
      const filteredShipments = shipments.filter(shipment => shipment.type.id === 1);
      let shipmentTable = this.createTableModel(filteredShipments);
      this.dataSource = new MatTableDataSource<PackageModel>(shipmentTable);
    });
  }

  //TODO search by status should be dropdown and it should send the value to the filter when clicked
  //TODO search by post office should be dropdown and it should send the id to the filter when clicked 
  //TODO search by weight should be dropdown and it should send the weight to the filter when clicked 
  //TODO createTableModel i mapSourceToTarget should be in some model

  createTableModel(shipmentModelList: ShipmentModel[]): PackageModel[] {
    return shipmentModelList.map((sourceItem) => this.mapSourceToTarget(sourceItem));
  }

  mapSourceToTarget(shipmentModel: ShipmentModel): PackageModel {
    return {
      shipmentId: shipmentModel.id,
      officeName: shipmentModel.office.name,
      delivered: shipmentModel.delivered,
      weight: shipmentModel.weight.desc
    };
  }

  ngOnInit() {
    this.getPackages();

    this.idFilter.valueChanges
      .subscribe(
        id => {
          this.dataSource.filter = id.trim().toLowerCase();
        }
      )

    this.weightFilter.valueChanges
      .subscribe(
        weight => {
          this.dataSource.filter = weight.trim().toLowerCase();
        }
      )

    this.deliveredFilter.valueChanges
      .subscribe(
        delivered => {
          this.dataSource.filter = delivered.trim().toLowerCase();
        }
      )

    this.officeNameFilter.valueChanges
      .subscribe(
        office => {
          this.dataSource.filter = office.trim().toLowerCase();
        }
      )

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}