import { Component, Input } from '@angular/core';
import { CellphoneListService, Phone } from '../shared/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cellphone-detail',
  templateUrl: './cellphone-detail.component.html',
})
export class CellphoneDetailComponent {

  @Input()
  cellphone: Phone;

  constructor(
    private readonly _service: CellphoneListService,
    private readonly router: Router,
  ) { }

  goBack(): void {
    this.router.navigate(['../..']);
  }

}
