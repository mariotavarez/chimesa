import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styles: []
})
export class SucursalesComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('sucursalModal') public perfilModal: ModalDirective;
  constructor() { }

  ngOnInit() {
  }

}
