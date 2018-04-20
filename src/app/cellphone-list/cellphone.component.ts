import { CellphoneDialogComponent } from './../cellphone-dialog/cellphone-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { Cellphone, CellphoneListService } from '../shared/index';
import { Router } from '@angular/router';

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
    private readonly _service: CellphoneListService,
    private readonly router: Router,
  ) {}

  photoDetail(): void {
    this._dialog.open(CellphoneDialogComponent, {data: this.cellphone.model, maxHeight: '400px', maxWidth: '400px'});
  }

  remove(): void {
    this._service.remove(this.cellphone);
      // .subscribe(() => this.router.navigate(['..']));
  }

  goToDetail() {
    this.router.navigate(['/detail/', this.cellphone.code]);
  }

}
