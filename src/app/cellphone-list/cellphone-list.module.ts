import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellphoneListComponent } from './cellphone-list.component';
import { CellphoneComponent } from './cellphone.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [CellphoneListComponent],
  declarations: [CellphoneListComponent, CellphoneComponent],
})
export class CellphoneListModule { }
