import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Navigation
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Forms
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Interfaces
import { SucursalesInterface } from '../../../interfaces/sucursales.interface';

@Component({
  selector: 'app-sucursal-detalle',
  templateUrl: './sucursal-detalle.component.html',
  styles: []
})
export class SucursalDetalleComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('sucursalModal') public perfilModal: ModalDirective;

  // Sucursal Interface que se utolizara para el biding del formulario
  public sucursal: SucursalesInterface = {
    id$: '',
    nombre: '',
    telefono: '',
    correo: '',
    status: '',
    responsable: '',
    direccion: ''
  };

  // Para realizar las validaciones del formulario de sucursales
  formSucursales: FormGroup;

  // Para realizar las validaciones del formulario modal de sucursales
  formSucursalesModal: FormGroup;

  constructor(private activeRoute: ActivatedRoute) {

    this.formSucursales = new FormGroup({
      'id$': new FormControl(''),
      'nombre': new FormControl(''),
      'telefono': new FormControl(''),
      'correo': new FormControl(''),
      'status': new FormControl(''),
      'responsable': new FormControl(''),
      'direccion': new FormControl(''),
    });

    this.formSucursalesModal = new FormGroup({
      'id$': new FormControl(''),
      'nombre': new FormControl(''),
      'telefono': new FormControl(''),
      'correo': new FormControl(''),
      'status': new FormControl(''),
      'responsable': new FormControl(''),
      'direccion': new FormControl(''),
    });

  }

  ngOnInit() {
    // console.log(this.activeRoute.snapshot.paramMap.get('id'));
    this.formSucursales.valueChanges.subscribe(
      data => {
        console.log(data);
      }
    );
    this.formSucursalesModal.valueChanges.subscribe(
      data => {
        console.log(data);
      }
    );
  }

  guardaSucursalModal() {
    console.log(this.formSucursalesModal.value);
  }

}
