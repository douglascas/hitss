import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CellphoneListComponent } from './cellphone-list.component';
import { CellphoneComponent } from './cellphone.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatIconModule, MatButtonModule, MatCardModule, MatExpansionModule } from '@angular/material';
import { CellphoneDetailComponent } from './cellphone-detail.component';
import { CellphoneDialogComponent } from '../cellphone-dialog/index';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
  ],
  exports: [CellphoneListComponent],
  declarations: [
    CellphoneListComponent,
    CellphoneComponent,
    CellphoneDetailComponent
  ],
  entryComponents: [CellphoneDialogComponent]
})
export class CellphoneListModule { }

