import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Interfaces
import { EmpleadosInterface } from '../../interfaces/empleados.interface';

// Forms
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

// Services
import { ValidationsService } from './../../services/validations.service';

import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {

  // Llamar propiedades del modal
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('empleadosModal') public perfilModal: ModalDirective;

  // Empleados Interface que se utilizara para el biding del formulario
  public empleados: EmpleadosInterface = {
    id$: '',
    nombre: '',
    perfil: '',
    sucursal: '',
    telefono: '',
    correo: '',
    status: '',
    fechaDeIngreso: this.getDate(),
    fechaDeBaja: this.getDate()
  };

  // Para realizar las validaciones del formulario de empleados
  formEmpleados: FormGroup;

  date: any;
  constructor(private validationServices: ValidationsService, public datepipe: DatePipe) {
    // Inicializa las validaciones
    this.formEmpleados = new FormGroup({
      'id$': new FormControl(this.empleados.id$),
      'nombre': new FormControl(this.empleados.nombre, [Validators.required, Validators.minLength(3)]),
      'perfil': new FormControl(this.empleados.perfil, this.validationServices.validaSelect),
      'sucursal': new FormControl(this.empleados.sucursal, this.validationServices.validaSelect),
      'telefono': new FormControl(this.empleados.telefono, [Validators.required]),
      'correo': new FormControl(this.empleados.correo, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$')]),
      'status': new FormControl(this.empleados.status),
      'fechaDeIngreso': new FormControl(this.empleados.fechaDeIngreso),
      'fechaDeBaja': new FormControl(this.empleados.fechaDeBaja, this.validarFechaBaja)
    });
  }



  ngOnInit() {
    // this.validarFechaBaja();
  }

  getDate() {
    const date = new Date();
    const newDate = this.datepipe.transform(date, 'yyyy-MM-dd');
    return newDate;
  }

  guardarEmpleados() {
    console.log(this.formEmpleados.value);
  }

  validarFechaBaja(): { [s: string]: boolean } {
    // console.log(this);
    // let forma: any = this;
    // const fechaIngreso = forma.controls['fechaDeIngreso'].value;
    // // const fechaBaja = control.value;

    // console.log(fechaIngreso);
    // console.log(fechaBaja);
    console.log(this.formEmpleados.controls['fechaDeIngreso'].value);

    // Si viene vacio el valor del control entonces confirmara que no es valido
    // if (control.value === '') {
    //   return {
    //     validaSelect: true
    //   };
    // }
    // Si no viene vacio el valor del control entonces es valido
    return null;
  }

}
