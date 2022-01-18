import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {BibliotecadbDataSource} from '../datasources';
import {Filme, FilmeRelations, Livro} from '../models';
import {LivroRepository} from './livro.repository';

export class FilmeRepository extends DefaultCrudRepository<
  Filme,
  typeof Filme.prototype.id,
  FilmeRelations
> {

  public readonly livro: BelongsToAccessor<Livro, typeof Filme.prototype.id>;

  constructor(
    @inject('datasources.bibliotecadb') dataSource: BibliotecadbDataSource, @repository.getter('LivroRepository') protected livroRepositoryGetter: Getter<LivroRepository>,
  ) {
    super(Filme, dataSource);
    this.livro = this.createBelongsToAccessorFor('livro', livroRepositoryGetter,);
    this.registerInclusionResolver('livro', this.livro.inclusionResolver);
  }
}
