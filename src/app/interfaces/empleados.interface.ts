export interface EmpleadosInterface {
    id$?: string;
    nombre: string;
    perfil: string;
    sucursal: string;
    telefono: string;
    correo: string;
    clientes?: [];
    status: string;
    fechaDeIngreso: string;
    fechaDeBaja: string;
    actualizacion?: [{
        fecha?: string,
        usuario?: string
    }];

}
