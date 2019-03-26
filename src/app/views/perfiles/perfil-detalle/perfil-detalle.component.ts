import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Interfaces
import { PerfilesInterface } from './../../../interfaces/perfiles.interface';

// Forms
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Navigation
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-perfil-detalle',
  templateUrl: './perfil-detalle.component.html',
  styles: []
})
export class PerfilDetalleComponent implements OnInit {

  // Llamar prodades del modal
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('perfilModal') public perfilModal: ModalDirective;

  public perfil: PerfilesInterface = {
    id$: '',
    nombre: ''
  };

  formPerfil: FormGroup;

  constructor( private activeRoute: ActivatedRoute ) {
    this.formPerfil = new FormGroup({
      'id$': new FormControl(this.perfil.id$),
      'nombre': new FormControl(this.perfil.nombre, [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap.get('id'));
  }

}
