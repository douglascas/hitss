import { Component, OnInit, ViewChild } from '@angular/core';
import { CellphoneListService, Cellphone } from '../shared/index';
import { MatDialog } from '@angular/material';
import { CellphoneDialogComponent } from '../cellphone-dialog/index';
import { tap, filter } from 'rxjs/operators';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  styleUrls: ['./cellphone.component.scss']
})
export class CellphoneListComponent implements OnInit {

  cellphones: Cellphone[] = [];

  cellphone: Cellphone;

  @ViewChild('ngForm')
  ngForm: NgForm;

  constructor(
    private readonly _service: CellphoneListService,
    private readonly dialog: MatDialog,
    private readonly router: Router,

  ) { }

  ngOnInit() {
    this._service.list().subscribe(cellphone => {
      this.cellphones = cellphone;
      this.cellphone = new Cellphone();
    });
  }

  goToDetail(cellphone: Cellphone) {
    this.dialog.open(CellphoneDialogComponent, { data: cellphone, width: '500px', height: '500px' })
      .afterClosed()
      .pipe(filter(response => !!response))
      .subscribe({
        next: (response) => Object.assign(cellphone, response),
      })
      ;
  }

  addOnList(): void {
    // Permite que a cada inserção, crie um novo objeto Cellphone sem modificar a referência para o `this.cellphone`.
    const newer = Object.assign(new Cellphone(), this.cellphone);
    this._service.add(newer)
      .subscribe(() => this.ngForm.reset());
  }


}
