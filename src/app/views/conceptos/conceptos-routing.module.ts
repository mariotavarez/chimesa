import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componente Padre
import { ConceptosComponent } from './conceptos.component';

// Componente Hijo
import { ConceptoDetalleComponent } from './concepto-detalle/concepto-detalle.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Conceptos'
    },
    component: ConceptosComponent
  },
  {
    path: 'concepto-detalle/:id',
    data: {
      title: 'Detalle del concepto'
    },
    component: ConceptoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConceptosRoutingModule {}
