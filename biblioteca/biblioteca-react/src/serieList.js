import { BooleanField, BooleanInput, Datagrid, Edit, EditButton, List, NumberField, NumberInput, SimpleForm, TextField, TextInput } from "react-admin";

export const SeriesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="nome" />
            <NumberField source="ano" />
            <NumberField source="temporadas" />
            <TextField source="genero" />
            <BooleanField source="assistido" />
            <EditButton />

        </Datagrid>
    </List>
);

export const SeriesEdit = props => (
    <Edit {...props}>
        <SimpleForm>

            <TextInput source="nome" />
            <NumberInput source="ano" />
            <NumberInput source="temporadas" />
            <TextInput source="genero" />
            <BooleanInput source="assistido" />
        </SimpleForm>
    </Edit>
);
