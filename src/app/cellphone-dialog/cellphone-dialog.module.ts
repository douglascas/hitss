import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CellphoneDialogComponent } from './cellphone-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [CellphoneDialogComponent],
  entryComponents: [CellphoneDialogComponent]
})
export class CellphoneDialogModule { }
