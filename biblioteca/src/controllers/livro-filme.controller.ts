import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Livro,
  Filme,
} from '../models';
import {LivroRepository} from '../repositories';

export class LivroFilmeController {
  constructor(
    @repository(LivroRepository) protected livroRepository: LivroRepository,
  ) { }

  @get('/livros/{id}/filmes', {
    responses: {
      '200': {
        description: 'Array of Livro has many Filme',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Filme)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Filme>,
  ): Promise<Filme[]> {
    return this.livroRepository.filmes(id).find(filter);
  }

  @post('/livros/{id}/filmes', {
    responses: {
      '200': {
        description: 'Livro model instance',
        content: {'application/json': {schema: getModelSchemaRef(Filme)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Livro.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filme, {
            title: 'NewFilmeInLivro',
            exclude: ['id'],
            optional: ['adaptado']
          }),
        },
      },
    }) filme: Omit<Filme, 'id'>,
  ): Promise<Filme> {
    return this.livroRepository.filmes(id).create(filme);
  }

  @patch('/livros/{id}/filmes', {
    responses: {
      '200': {
        description: 'Livro.Filme PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filme, {partial: true}),
        },
      },
    })
    filme: Partial<Filme>,
    @param.query.object('where', getWhereSchemaFor(Filme)) where?: Where<Filme>,
  ): Promise<Count> {
    return this.livroRepository.filmes(id).patch(filme, where);
  }

  @del('/livros/{id}/filmes', {
    responses: {
      '200': {
        description: 'Livro.Filme DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Filme)) where?: Where<Filme>,
  ): Promise<Count> {
    return this.livroRepository.filmes(id).delete(where);
  }
}
