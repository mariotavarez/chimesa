import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

// Navigation
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sucursal-detalle',
  templateUrl: './sucursal-detalle.component.html',
  styles: []
})
export class SucursalDetalleComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('sucursalModal') public perfilModal: ModalDirective;

  constructor( private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap.get('id'));
  }

}
