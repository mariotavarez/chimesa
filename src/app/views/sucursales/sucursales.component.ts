import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Interfaces
import { SucursalesInterface } from '../../interfaces/sucursales.interface';

// Forms
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { ValidationsService } from './../../services/validations.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styles: []
})
export class SucursalesComponent implements OnInit {

  // Llamar propiedades del modal
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

  constructor( private validationServices: ValidationsService) {
    this.formSucursales = new FormGroup({
      'id$': new FormControl(this.sucursal.id$),
      'nombre': new FormControl(this.sucursal.nombre, [Validators.required, Validators.minLength(3)]),
      'telefono': new FormControl(this.sucursal.telefono, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'correo': new FormControl(this.sucursal.correo, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      'status': new FormControl(this.sucursal.status, this.validarStatus),
      'responsable': new FormControl(this.sucursal.responsable, this.validationServices.validaSelect),
      'direccion': new FormControl(this.sucursal.direccion, [Validators.required]),
    });
  }

  ngOnInit() {
  }

  guardarSucursales(){
    // console.log(this.formSucursales.value);
    // console.log(this.formSucursales);
    console.log(this.formSucursales.get('status'));
    
  }

  // Valida que se haya seleccionado un estatus
  validarStatus(control: FormControl): { [s: string]: boolean } {

    if (control.value !== 'Activo' && control.value !== 'Inactivo') {
      console.log('No selecciono');
      return {
        validarStatus: true
      };
    }

    return null;
  }

}
