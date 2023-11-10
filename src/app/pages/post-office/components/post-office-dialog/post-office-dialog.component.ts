import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogMode } from 'src/app/shared/interfaces/dialog-data';
import { DialogComponentBase } from 'src/app/shared/components/dialog/dialog-component-base';
import { Observable } from 'rxjs';
import { PostOfficeService } from '../../post-office.service';
import { PostOfficeModel } from '../../interfaces/post-office.model';

@Component({
  selector: 'app-post-office-dialog',
  templateUrl: './post-office-dialog.component.html',
  styleUrls: ['./post-office-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostOfficeDialogComponent
  extends DialogComponentBase
  implements OnInit {
  dialogMode = DialogMode;
  postOffice!: PostOfficeModel;

  constructor(
    private postOfficeService: PostOfficeService,
    private fb: FormBuilder,
  ) {
    super();
  }

  ngOnInit() {
    if (this.mode !== DialogMode.Add) {
      this.loadPostOffice(this.data.id);
    } else {
      this.createForm();
    }
  }

  createForm() {
    this.form = this.fb.group({
      id: this.data?.id ?? '',
      name: [
        {
          value: this.postOffice?.name ?? '',
          disabled: this.mode === DialogMode.DefaultView
        },
        Validators.required,
      ],
      PLZ: [
        {
          value: this.postOffice?.PLZ ?? '',
          disabled: this.mode === DialogMode.DefaultView
        },
        Validators.required,
      ]
    });
  }


  private loadPostOffice(id: string) {
    this.postOfficeService.getPostOffice(id).subscribe((data: any) => {
      this.postOffice = data;
      this.createForm();
    });
  }

  private createObjectToSend() {
    let objectToSend: any;
    if (this.mode === DialogMode.Add) {
      objectToSend = {
        name: this.form?.get('name')?.value,
        PLZ: this.form?.get('PLZ')?.value,
      };
    } else if (this.mode === DialogMode.Update) {
      objectToSend = {
        id: this.data.id,
        name: this.form?.get('name')?.value,
        PLZ: this.form?.get('PLZ')?.value,
      };
    }
    return objectToSend;
  }

  save(): Observable<any> | undefined {
    let objectToSend = this.createObjectToSend();
    if (this.mode === this.dialogMode.Add) {
      return this.postOfficeService.addPostOffice(objectToSend);
    } else {
      return this.postOfficeService.editPostOffice(objectToSend);
    }
  }
}
