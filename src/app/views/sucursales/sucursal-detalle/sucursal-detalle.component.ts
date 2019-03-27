import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Navigation
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Forms
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Interfaces
import { SucursalesInterface } from '../../../interfaces/sucursales.interface';

// Data
import { SUCURSALES } from '../../../data/sucursales.data';

// Toastr
import { ToastrService } from 'ngx-toastr';

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
  public sucursalData: SucursalesInterface[] = [];


  // Para realizar las validaciones del formulario de sucursales
  formSucursales: FormGroup;

  // Para realizar las validaciones del formulario modal de sucursales
  formSucursalesModal: FormGroup;

  constructor(private activeRoute: ActivatedRoute) {}
  
  ngOnInit() {

    this.sucursalData = SUCURSALES.slice(0);

    this.recorrerData();

    this.formSucursales = new FormGroup({
      'id$': new FormControl(this.sucursal.id$),
      'nombre': new FormControl(this.sucursal.nombre),
      'telefono': new FormControl(this.sucursal.telefono),
      'correo': new FormControl(this.sucursal.correo),
      'status': new FormControl(this.sucursal.status),
      'responsable': new FormControl(this.sucursal.responsable),
      'direccion': new FormControl(this.sucursal.direccion)
    });
  
    this.formSucursalesModal = new FormGroup({
      'id$': new FormControl(this.sucursal.id$),
      'nombre': new FormControl(this.sucursal.nombre),
      'telefono': new FormControl(this.sucursal.telefono),
      'correo': new FormControl(this.sucursal.correo),
      'status': new FormControl(this.sucursal.status),
      'responsable': new FormControl(this.sucursal.responsable),
      'direccion': new FormControl(this.sucursal.direccion)
    });
  
    
    
    // console.log(this.activeRoute.snapshot.paramMap.get('id'));
    
  }

  guardaSucursalModal() {
    console.log('Data Sucursal', this.formSucursales.value);
    console.log('Data Sucursal Modal', this.formSucursalesModal.value);
    this.sucursal = this.formSucursalesModal.value;
    console.log('Nombre', this.sucursal);
    this.toastr.success('data salvada');
    
  }

  recorrerData() {
    this.sucursalData.forEach( data =>{
     this.sucursal = data;
    });
  }

}
