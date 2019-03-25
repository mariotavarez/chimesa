import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componente Padre
import { PerfilesComponent } from './perfiles.component';

// Componente Hijo
import { PerfilDetalleComponent } from './perfil-detalle/perfil-detalle.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Perfiles'
    },
    component: PerfilesComponent
  },
  {
    path: 'perfil-detalle/:id',
    data: {
      title: 'Detalle del Perfil'
    },
    component: PerfilDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule {}
