import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Filme,
  Livro,
} from '../models';
import {FilmeRepository} from '../repositories';

export class FilmeLivroController {
  constructor(
    @repository(FilmeRepository)
    public filmeRepository: FilmeRepository,
  ) { }

  @get('/filmes/{id}/livro', {
    responses: {
      '200': {
        description: 'Livro belonging to Filme',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Livro)},
          },
        },
      },
    },
  })
  async getLivro(
    @param.path.number('id') id: typeof Filme.prototype.id,
  ): Promise<Livro> {
    return this.filmeRepository.livro(id);
  }
}
