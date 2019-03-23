import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
