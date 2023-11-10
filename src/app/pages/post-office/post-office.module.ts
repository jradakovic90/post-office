import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostOfficeComponent } from './post-office.component';
import { SharedModule } from 'src/app/shared/shared-module';
import { PostOfficeService } from './post-office.service';
import { PostOfficeRoutingModule } from './post-office.routing.module';
import { PostOfficeDialogComponent } from './components/post-office-dialog/post-office-dialog.component';

@NgModule({
  declarations: [
    PostOfficeComponent, PostOfficeDialogComponent
  ],
  imports: [CommonModule, SharedModule, PostOfficeRoutingModule],
  providers: [PostOfficeService],
  exports: [
    PostOfficeComponent
  ]
})

export class PostOfficeModule { }