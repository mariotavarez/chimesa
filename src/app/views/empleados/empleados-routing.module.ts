import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componente Padre
import { EmpleadosComponent } from './empleados.component';

// Componente Hijo
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Empleados'
    },
    component: EmpleadosComponent
  },
  {
    path: 'empleado-detalle/:id',
    data: {
      title: 'Detalle del empleado'
    },
    component: EmpleadoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule {}
