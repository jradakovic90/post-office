import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {ResizableModule} from 'angular-resizable-element';
import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationComponent } from '../core/navigation/navigation/navigation.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ComponentHostDirective } from './components/dialog/component-host.directive';

@NgModule({
    declarations: [NavigationComponent, DynamicTableComponent, DialogComponent, ComponentHostDirective],
    imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule,
      FlexLayoutModule,
      ResizableModule,
        ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }),],
    providers: [],
    exports: [NavigationComponent, MaterialModule, ReactiveFormsModule, FlexLayoutModule, DynamicTableComponent],
})
export class SharedModule { }
