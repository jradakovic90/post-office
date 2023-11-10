import { Component, ComponentRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, DialogMode } from '../../interfaces/dialog-data';
import { ComponentHostDirective } from './component-host.directive';
import { DialogComponentBase } from './dialog-component-base';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy {
  ref: ComponentRef<DialogComponentBase> | undefined;
  mode = DialogMode;

  @ViewChild(ComponentHostDirective, { static: true }) contentHost!: ComponentHostDirective;

  $destroy = new Subject();

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.loadComponent();
  }

  ngOnDestroy(): void {
    this.$destroy.next(void 0);
    this.$destroy.complete();
  }

  cancel() {
    this.dialogRef.close();
  }

  edit() {
    this.ref?.instance?.makeEdit();
  }

  loadComponent() {
    const viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();
    this.ref = viewContainerRef.createComponent<DialogComponentBase>(this.data.component);
    this.ref.instance.data = this.data.data;
    this.ref.instance.mode = this.data.mode;
  }

  save() {
    this.ref?.instance?.save()?.pipe(takeUntil(this.$destroy)).subscribe((result) => {
        this.dialogRef.close(true);
    });
  }
}
