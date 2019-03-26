import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common'

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

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpleadosComponent,
    EmpleadoDetalleComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    DatePipe
  ]
})
export class EmpleadosModule { }
