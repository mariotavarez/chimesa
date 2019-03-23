import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ConceptosRoutingModule
  ]
})
export class ConceptosModule { }
