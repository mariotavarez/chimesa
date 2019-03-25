export interface ConceptosInterface {
    id$?: string;
    nombre: string;
    precio: string;
    unidadMedicion: string;
    actualizacion: [
        {
            fecha?: Date,
            usuario?: string
        }
    ];
}
