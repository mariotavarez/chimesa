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

// Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Toastr
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SucursalesComponent,
    SucursalDetalleComponent
  ],
  imports: [
    CommonModule,
    SucursalesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class SucursalesModule { }
