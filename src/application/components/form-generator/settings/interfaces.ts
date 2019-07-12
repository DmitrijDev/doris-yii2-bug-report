export interface Schema {
    loading?: boolean,
    fields: SchemaDefaultField[],
}

export interface SchemaDefaultField {
    type?: string,
    class?: string,
    text?: string,
    label?: string,
    placeholder?:string
}

export interface SchemaErrorList extends SchemaDefaultField {
    count: number
}

export interface SchemaOptions {
    validateAfterLoad?: boolean,
    validateAfterChanged?: boolean
}
