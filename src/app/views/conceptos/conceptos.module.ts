import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Componente Padre
import { ConceptosComponent } from './conceptos.component';

// Componente Hijo
import { ConceptoDetalleComponent } from './concepto-detalle/concepto-detalle.component';

// Rutas
import { ConceptosRoutingModule } from './conceptos-routing.module';

@NgModule({
  declarations: [
    ConceptosComponent,
    ConceptoDetalleComponent
  ],
  imports: [
    CommonModule,
    ConceptosRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class ConceptosModule { }
