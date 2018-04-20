import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CellphoneDialogComponent } from './cellphone-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
  ],
  declarations: [CellphoneDialogComponent],
  entryComponents: [CellphoneDialogComponent]
})
export class CellphoneDialogModule { }
