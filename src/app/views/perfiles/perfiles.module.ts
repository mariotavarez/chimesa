import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Componente Padre
import { PerfilesComponent } from './perfiles.component';

// Componente Hijo
import { PerfilDetalleComponent } from './perfil-detalle/perfil-detalle.component';

// Rutas
import { PerfilesRoutingModule } from './perfiles-routing.module';

@NgModule({
  declarations: [
    PerfilesComponent,
    PerfilDetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerfilesRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class PerfilesModule { }
