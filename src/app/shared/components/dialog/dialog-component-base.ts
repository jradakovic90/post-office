import { FormGroup } from "@angular/forms";
import { Observable } from 'rxjs';
import { DialogMode } from "../../interfaces/dialog-data";

export abstract class DialogComponentBase {
  mode: DialogMode = DialogMode.DefaultView;
  data: any;

  form: FormGroup | undefined;

  abstract save(): Observable<any> | undefined;

  abstract createForm(): void;

  makeEdit() {
    this.mode = DialogMode.Update;
    this.createForm();
  }
}
