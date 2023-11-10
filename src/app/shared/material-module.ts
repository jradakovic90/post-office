import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    declarations: [],
    imports: [
        MatTableModule,
        MatButtonModule,
        MatSelectModule,
        MatToolbarModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatCardModule,
        MatMenuModule,
        MatChipsModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatFormFieldModule
    ],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatSelectModule,
        MatToolbarModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatCardModule,
        MatMenuModule,
        MatChipsModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatFormFieldModule
    ],
    providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
      ]
})
export class MaterialModule { }
