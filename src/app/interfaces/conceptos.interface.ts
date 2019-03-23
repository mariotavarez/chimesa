export interface ConceptosInterface {
    id$?: string,
    nombre: string,
    actualizacion: [
        {
            fecha?: Date,
            usuario?: string
        }
    ]
}
