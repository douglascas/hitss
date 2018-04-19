import { Component, OnInit } from '@angular/core';
import { CellphoneListService, Cellphone } from '../shared/index';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CellphoneDialogComponent } from '../cellphone-dialog/index';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
})
export class CellphoneListComponent implements OnInit {

  cellphones: Cellphone[] = [];

  constructor(
    private readonly _service: CellphoneListService,
    private readonly _dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._service.list().subscribe(cellphone => {
      this.cellphones = cellphone;
    });
  }

  goToDetail(cellphone: Cellphone) {
    console.log(cellphone);
    // this.routerLink="c/{{cellphone.model}}"
  }

  add() {
    this._dialog.open(CellphoneDialogComponent);
    // this.routerLink="c/{{cellphone.model}}"
  }

}
