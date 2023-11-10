import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ColumnSettingsModel, TablePaginationSettingsModel } from 'src/app/shared/components/dynamic-table/interfaces/table-settings.model';
import { MatSort } from '@angular/material/sort';
import { PostOfficeService } from './post-office.service';
import { PostOfficeModel } from './interfaces/post-office.model';
import { DialogMode } from 'src/app/shared/interfaces/dialog-data';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { PostOfficeDialogComponent } from './components/post-office-dialog/post-office-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-office',
  templateUrl: './post-office.component.html',
  styleUrls: ['./post-office.component.scss']
})
export class PostOfficeComponent implements OnInit {
  dataSource = new MatTableDataSource<PostOfficeModel>();


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  columnDefinition: ColumnSettingsModel[] = [];
  tablePaginationSettings: TablePaginationSettingsModel = <TablePaginationSettingsModel>{};

  constructor(private postOfficeService: PostOfficeService, private dialogService: DialogService, private toastr: ToastrService) {
    this.tablePaginationSettings.enablePagination = true;
    this.tablePaginationSettings.pageSize = 5;
    this.tablePaginationSettings.pageSizeOptions = [5, 10, 15];
    this.tablePaginationSettings.showFirstLastButtons = true;
    this.columnDefinition = [
      {
        'name': 'name',
        'displayName': 'Name'
      },
      {
        'name': 'PLZ',
        'displayName': 'PLZ'

      },
      {
        'name': 'action',
        'displayName': 'Action'
      }
    ];
  }

  ngOnInit() {
    this.getPostOffices();

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyAction(element) {
    if (element[1] == "delete") {
      this.deletePostOffice(element[0].id)
    } else if (element[1] == "edit") {
      this.editPostOffice(element[0])
    }
  }

  getPostOffices(): void {
    this.postOfficeService.getPostOffices().subscribe(offices => {
      this.dataSource = new MatTableDataSource<PostOfficeModel>(offices);
    });
  }

  addPostOffice() {
    this.dialogService.open(PostOfficeDialogComponent, "Add Post Office", 500, { mode: 'add' }, DialogMode.Add).subscribe(success => {
      if (success) {
        this.toastr.success("Post Office created Successfully");
        this.getPostOffices();
      }
    });
  }

  editPostOffice(element: any) {
    this.dialogService.open(PostOfficeDialogComponent, "Post Office Info", 500, { id: element.id }, DialogMode.DefaultView, 'Update Post Office').subscribe(success => {
      if (success) {
        this.toastr.success("Post Office updated Successfully");
        this.getPostOffices();
      }
    });
  }

  deletePostOffice(id: string) {
    this.postOfficeService.deletePostOffice(id).subscribe((res) => {
      this.toastr.success(res.toString());
      this.getPostOffices();
    });
  }
}

