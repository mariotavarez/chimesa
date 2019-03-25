import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styles: []
})
export class ConceptosComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('conceptoModal') public perfilModal: ModalDirective;

  constructor() { }

  ngOnInit() {
  }

}
