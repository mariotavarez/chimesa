import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('empleadosModal') public perfilModal: ModalDirective;
  constructor() { }

  ngOnInit() {
  }

}
