import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componente Padre
import { SucursalesComponent } from './sucursales.component';

// Componente Hijo
import { SucursalDetalleComponent } from './sucursal-detalle/sucursal-detalle.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sucursales'
    },
    component: SucursalesComponent
  },
  {
    path: 'sucursal-detalle/:id',
    data: {
      title: 'Detalle de la sucursal'
    },
    component: SucursalDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule {}
