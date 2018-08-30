import { CellphoneDialogComponent } from '../cellphone-dialog/index';
import { MatDialog } from '@angular/material';
import { Component, Input } from '@angular/core';
import { Phone, CellphoneListService } from '../shared/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['cellphone.component.scss']
})
export class CellphoneComponent {

  @Input()
  cellphone: Phone;

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _service: CellphoneListService,
    private readonly router: Router,
  ) { }

  photoDetail(): void {
    this._dialog.open(CellphoneDialogComponent, { data: this.cellphone, maxHeight: '400px', maxWidth: '400px' });
  }

  remove(): void {
    this._service.remove(this.cellphone);
  }

  goToDetail() {
    this.router.navigate(['/detail/', this.cellphone.code]);
  }

}
