import { Datagrid, Edit, EditButton, List, NumberField, NumberInput, SimpleForm, TextField, TextInput } from "react-admin";

export const CursoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="materia" />
            <TextField source="professor" />
            <NumberField source="duracao" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CursoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="materia" />
            <TextInput source="professor" />
            <NumberInput source="duracao" />
        </SimpleForm>
    </Edit>
);
