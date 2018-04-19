import { CellphoneDialogComponent } from './../cellphone-dialog/cellphone-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { Cellphone } from '../shared/index';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['cellphone.component.css']
})
export class CellphoneComponent {


  @Input()
  cellphone: Cellphone;

  constructor(
    private readonly _dialog: MatDialog,

  ) {}

  photoDetail() {
    this._dialog.open(CellphoneDialogComponent, {data: this.cellphone.model});
  }

}
