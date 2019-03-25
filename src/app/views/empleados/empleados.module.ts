import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Componente Padre
import { EmpleadosComponent } from './empleados.component';

// Componente Hijo
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';

// Rutas
import { EmpleadosRoutingModule } from './empleados-routing.module';

@NgModule({
  declarations: [
    EmpleadosComponent,
    EmpleadoDetalleComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class EmpleadosModule { }
