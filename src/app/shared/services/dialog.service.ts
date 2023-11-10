import { Injectable, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentBase } from '../components/dialog/dialog-component-base';
import { DialogComponent } from '../components/dialog/dialog.component';
import { DialogData, DialogMode } from '../interfaces/dialog-data';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  open(component: Type<DialogComponentBase>, title: string, width: number, data: any, mode: DialogMode, titleOnUpdate: string | undefined = undefined) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: `${width}px`,
      data: { title: title, component, data, titleOnUpdate, mode } as DialogData
    });

    return dialogRef.afterClosed();
  }
}
