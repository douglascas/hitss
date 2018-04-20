import { Component, OnInit, ViewChild } from '@angular/core';
import { CellphoneListService, Cellphone } from '../shared/index';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CellphoneDialogComponent } from '../cellphone-dialog/index';
import { tap } from 'rxjs/operators';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  styleUrls: ['./cellphone.component.css']
})
export class CellphoneListComponent implements OnInit {

  cellphones: Cellphone[] = [];

  cellphone: Cellphone;

  @ViewChild('ngForm')
  ngForm: NgForm;

  constructor(
    private readonly _service: CellphoneListService,

  ) { }

  ngOnInit() {
    this._service.list().subscribe(cellphone => {
      this.cellphones = cellphone;
      this.cellphone = new Cellphone();
    });
  }

  goToDetail(cellphone: Cellphone) {
    console.log(cellphone);
  }

  addOnList() {
    // Permite que a cada inserção, crie um novo objeto Cellphone.
    const newer = Object.assign(new Cellphone(), this.cellphone);
    this._service.add(newer).subscribe(() => this.ngForm.reset());
  }

}
