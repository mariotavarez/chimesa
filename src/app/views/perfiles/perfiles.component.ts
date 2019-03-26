import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
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

  // Perfil Interface para doble binding
  public perfil: PerfilesInterface = {
    id$: '',
    nombre: ''
  };

  formPerfil: FormGroup;

  constructor() {
    this.formPerfil = new FormGroup({
      'nombre': new FormControl('Spiderman'),
      'apellido': new FormControl('Spiderman'),
      'correo': new FormControl('Spiderman'),
    });
  }

  ngOnInit() {
  }

  guardarPerfil(){
    // console.log(`${this.perfil.nombre}`);
    console.log(this.formPerfil.value);
    console.log(this.formPerfil);
  }
}
