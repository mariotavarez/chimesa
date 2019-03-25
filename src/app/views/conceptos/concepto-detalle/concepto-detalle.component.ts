import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

// Navigation
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-concepto-detalle',
  templateUrl: './concepto-detalle.component.html',
  styles: []
})
export class ConceptoDetalleComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('conceptoModal') public perfilModal: ModalDirective;

  constructor( private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap.get('id'));
  }

}
