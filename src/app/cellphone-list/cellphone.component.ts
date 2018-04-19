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

}
