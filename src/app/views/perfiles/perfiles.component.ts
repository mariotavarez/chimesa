import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

// Interfaces
import { PerfilesInterface } from '../../interfaces/perfiles.interface';

// Forms
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styles: []
})
export class PerfilesComponent implements OnInit {

  // Llamar propiedades del modal
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('perfilModal') public perfilModal: ModalDirective;

  // Perfil Interface que se utilizara para el biding del formulario
  public perfil: PerfilesInterface = {
    id$: '',
    nombre: ''
  };

  // Para realizar las validaciones del formulario de perfiles
  formPerfil: FormGroup;

  constructor() {
    // Inicializa las validaciones
    this.formPerfil = new FormGroup({
      'id$': new FormControl(''),
      'nombre': new FormControl(this.perfil.nombre, [Validators.required, Validators.minLength(3)])
    });

    // Setear la informacion en los campos
    this.formPerfil.setValue(this.perfil);


  }

  ngOnInit() {
  }

  guardarPerfil(){
    // console.log(`${this.perfil.nombre}`);
    console.log(this.formPerfil.value);
    console.log(this.formPerfil);

    this.formPerfil.reset(this.perfil);
  }
}
