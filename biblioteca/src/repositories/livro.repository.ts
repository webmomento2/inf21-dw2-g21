import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {BibliotecadbDataSource} from '../datasources';
import {Livro, LivroRelations, Filme} from '../models';
import {FilmeRepository} from './filme.repository';

export class LivroRepository extends DefaultCrudRepository<
  Livro,
  typeof Livro.prototype.id,
  LivroRelations
> {

  public readonly filmes: HasManyRepositoryFactory<Filme, typeof Livro.prototype.id>;

  constructor(
    @inject('datasources.bibliotecadb') dataSource: BibliotecadbDataSource, @repository.getter('FilmeRepository') protected filmeRepositoryGetter: Getter<FilmeRepository>,
  ) {
    super(Livro, dataSource);
    this.filmes = this.createHasManyRepositoryFactoryFor('filmes', filmeRepositoryGetter,);
    this.registerInclusionResolver('filmes', this.filmes.inclusionResolver);
  }
}
