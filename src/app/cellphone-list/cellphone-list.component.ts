import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { CellphoneListService, Phone } from '../shared/index';
import { MatDialog } from '@angular/material';
import { CellphoneDialogComponent } from '../cellphone-dialog/index';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  styleUrls: ['./cellphone.component.scss']
})
export class CellphoneListComponent implements OnInit {

  cellphones: Phone[] = [];
  cellphone: Phone;
  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private readonly _service: CellphoneListService,
    private readonly dialog: MatDialog,
  ) {
    this.form = fb.group({
      brand: null,
      model: null,
      price: null,
      release: null,
      photo: null,
    });
  }

  ngOnInit() {
    this._service.list()
      .subscribe(cellphone => {
        this.cellphones = cellphone;
        this.cellphone = new Phone();
      });
  }

  goToDetail(cellphone: Phone): void {
    this.dialog.open(CellphoneDialogComponent, { data: cellphone, width: '500px', height: '400px' })
      .afterClosed()
      .pipe(filter(response => !!response))
      .subscribe({
        next: response => Object.assign(cellphone, response),
      });
  }

  addOnList(): void {
    // Permite que a cada inserção, crie um novo objeto Cellphone sem modificar a referência para o `this.cellphone`.
    const newer = Object.assign(new Phone(), this.cellphone);
    this._service.add(newer)
      .subscribe(() => this.form.reset());
  }

  remove(cellphone: Phone): void {
    this._service.remove(cellphone);
  }

}
