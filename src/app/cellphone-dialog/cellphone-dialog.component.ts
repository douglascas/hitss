import { Component, OnInit, Inject } from '@angular/core';
import { CellphoneListService, Cellphone } from '../shared/index';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-cellphone-dialog',
  templateUrl: './cellphone-dialog.component.html',
  styleUrls: ['cellphone-dialog.component.scss']
})
export class CellphoneDialogComponent {

  cellphone: Cellphone;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cellphone,
    private readonly _service: CellphoneListService,
    private readonly _dialog: MatDialogRef<CellphoneDialogComponent>,
  ) {
    this.cellphone = Object.assign(new Cellphone(), data);
  }

  save() {
    this._service.update(this.data, this.cellphone);
    this.close(this.cellphone);
  }

  close(cellphone?: Cellphone) {
    this._dialog.close(cellphone);
  }

}
