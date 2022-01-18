import { Admin, EditGuesser, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { createCurso, createFilme, createLivro, createSerie } from "./createElemente";
import { CursoList } from "./cursoList";
import { FilmeList } from "./filmeList";
import { LivroList } from "./livroList";
import { SeriesEdit, SeriesList } from "./serieList";

const dataProvider = lb4Provider("http://localhost:3000");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="livros" list={LivroList} edit={EditGuesser} create={createLivro} />
    <Resource name="filmes" list={FilmeList} edit={EditGuesser} create={createFilme} />
    <Resource name="series" list={SeriesList} edit={SeriesEdit} create={createSerie} />
    <Resource name="cursos" list={CursoList} edit={EditGuesser} create={createCurso} />
  </Admin>
);
export default App;
