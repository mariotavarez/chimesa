import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    PerfilesRoutingModule
  ]
})
export class PerfilesModule { }
