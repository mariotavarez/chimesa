import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styles: []
})
export class PerfilesComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('perfilModal') public perfilModal: ModalDirective;

  constructor() { }

  ngOnInit() {
  }

}
