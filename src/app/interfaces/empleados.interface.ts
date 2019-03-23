export interface EmpleadosInterface {
    id$?: string,
    nombre: string,
    idPerfil: string,
    idSucursal: string,
    telefono: string,
    correo: string,
    clientes: [],
    status: string,
    fechaDeIngreso: Date,
    actualizacion: [{
        fecha?: Date,
        usuario?: string
    }],
    fechaDeBaja: Date

}
