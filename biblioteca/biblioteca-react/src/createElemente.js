import { BooleanInput, Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin"

export const createSerie = (props) => {
    return (
        <Create title='CreateSerie' {...props}>
            <SimpleForm>
                <TextInput source="nome" />
                <NumberInput source="ano" />
                <NumberInput source="temporadas" />
                <TextInput source="genero" />
                <BooleanInput source="assistido" />
            </SimpleForm>
        </Create>)
}
export const createFilme = (props) => {
    return (
        <Create title='CreateFilme' {...props}>
            <SimpleForm>
                <TextInput source="nome" />
                <NumberInput source="ano" />
                <NumberInput source="duracao" />
                <TextInput source="genero" />
                <BooleanInput source="assistido" />
                <ReferenceInput source="adaptados" reference="livros">
                    <SelectInput optionText="id" /></ReferenceInput>
            </SimpleForm>
        </Create>)
}
export const createLivro = (props) => {
    return (
        <Create title='CreateLivro' {...props}>
            <SimpleForm>
                <TextInput source="nome" />
                <NumberInput source="edicao" />
                <TextInput source="genero" />
                <TextInput source="autor" />
                <BooleanInput source="lido" />
            </SimpleForm>
        </Create>)
}
export const createCurso = (props) => {
    return (
        <Create title='CreateCurso' {...props}>
            <SimpleForm>
                <TextInput source="materia" />
                <TextInput source="professor" />
                <NumberInput source="duracao" />
            </SimpleForm>
        </Create>)
}


