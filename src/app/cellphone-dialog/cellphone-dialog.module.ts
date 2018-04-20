import { NgModule } from '@angular/core';
import { CellphoneDialogComponent } from './cellphone-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [CellphoneDialogComponent],
  entryComponents: [CellphoneDialogComponent]
})
export class CellphoneDialogModule { }
