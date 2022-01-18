import { BooleanField, Datagrid, Edit, EditButton, List, NumberField, SimpleForm, TextField,TextInput ,NumberInput,BooleanInput} from "react-admin";

export const LivroList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="nome" />
            <NumberField source="edicao" />
            <TextField source="genero" />
            <TextField source="autor" />
            <BooleanField source="lido" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const LivroEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <NumberInput source="edicao" />
            <TextInput source="genero" />
            <TextInput source="autor" />
            <BooleanInput source="lido" />
        </SimpleForm>
    </Edit>
);