export interface SucursalesInterface {
    id$?: string,
    nombre: string,
    telefono: string,
    direccion: string,
    actualizacion: [
        {
            fecha?: Date,
            usuario?: string
        }
    ],
    responsable: string,
    correo: string,
    status: string
}
