import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componente Padre
import { SucursalesComponent } from './sucursales.component';

// Componente Hijo
import { SucursalDetalleComponent } from './sucursal-detalle/sucursal-detalle.component';

// Rutas
import { SucursalesRoutingModule } from './sucursales-routing.module';

@NgModule({
  declarations: [
    SucursalesComponent,
    SucursalDetalleComponent
  ],
  imports: [
    CommonModule,
    SucursalesRoutingModule
  ]
})
export class SucursalesModule { }
