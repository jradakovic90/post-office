import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnSettingsModel, TablePaginationSettingsModel } from './interfaces/table-settings.model';

@Component({
    selector: 'app-dynamic-table',
    templateUrl: './dynamic-table.component.html',
    styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, AfterViewInit, OnChanges {

    columnNames: string[] = [];

    @Input() columnDefinition: ColumnSettingsModel[];

    @Input() paginationConfig?: TablePaginationSettingsModel;

    @Input() rowData: MatTableDataSource<{}>;

    @Input() canEdit: boolean = false;

    @Input() canDelete: boolean = false;

    @Output() isActionClicked = new EventEmitter<any>();

    dataSource: MatTableDataSource<{}>;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @Output() getSelectedRows = new EventEmitter();

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    ngOnChanges() {
        this.dataSource = this.rowData
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    ngOnInit() {
        for (const column of this.columnDefinition) {
            this.columnNames.push(column.name);
        }
        this.dataSource = this.rowData;
    }

    edit(element: any) {
        this.isActionClicked.emit([element, "edit"]);
    }

    delete(element: any) {
        this.isActionClicked.emit([element, "delete"]);
    }
}