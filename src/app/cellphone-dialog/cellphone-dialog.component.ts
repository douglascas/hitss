import { Component, OnInit, Inject } from '@angular/core';
import { CellphoneListService, Cellphone } from '../shared/index';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-cellphone-dialog',
  templateUrl: './cellphone-dialog.component.html',
})
export class CellphoneDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cellphone,
    private readonly _dialog: MatDialogRef<CellphoneDialogComponent>,
  ) { }

  close() {
    this._dialog.close();
  }

}
