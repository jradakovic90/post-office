import { Type } from "@angular/core";
import { DialogComponentBase } from "../components/dialog/dialog-component-base";

export interface DialogData {
  title: string;
  component: Type<DialogComponentBase>;
  data: any;
  titleOnUpdate?: string;
  mode: DialogMode
}

export enum DialogMode {
  Add,
  Update,
  DefaultView
}
