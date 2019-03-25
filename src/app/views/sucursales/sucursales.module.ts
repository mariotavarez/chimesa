import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

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
    SucursalesRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class SucursalesModule { }
