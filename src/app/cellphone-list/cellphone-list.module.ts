import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CellphoneListComponent } from './cellphone-list.component';
import { CellphoneComponent } from './cellphone.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatIconModule, MatGridListModule, MatButtonModule } from '@angular/material';
import { CellphoneDetailComponent } from './cellphone-detail.component';
import { CellphoneDialogComponent } from '../cellphone-dialog/index';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    MatGridListModule,
  ],
  exports: [CellphoneListComponent],
  declarations: [CellphoneListComponent, CellphoneComponent, CellphoneDetailComponent],
  entryComponents: [CellphoneDialogComponent]
})
export class CellphoneListModule { }

