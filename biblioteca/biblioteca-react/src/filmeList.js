import { BooleanField, Datagrid, EditButton, List, NumberField, ReferenceField, SelectInput, TextField, TextInput, NumberInput, BooleanInput, SimpleForm, Edit, ReferenceInput } from "react-admin";

export const FilmeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="nome" />
            <NumberField source="ano" />
            <NumberField source="duracao" />
            <TextField source="genero" />
            <BooleanField source="assistido" />
            <ReferenceField source="adaptados" reference="livros">
                <SelectInput source="id" /></ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const FilmeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <NumberInput source="ano" />
            <TextInput source="duracao" />
            <TextInput source="genero" />
            <BooleanInput source="assistido" />
            <ReferenceInput source="adaptados" reference="livros">
                <SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);