import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BibliotecadbDataSource} from '../datasources';
import {Curso, CursoRelations} from '../models';

export class CursoRepository extends DefaultCrudRepository<
  Curso,
  typeof Curso.prototype.id,
  CursoRelations
> {
  constructor(
    @inject('datasources.bibliotecadb') dataSource: BibliotecadbDataSource,
  ) {
    super(Curso, dataSource);
  }
}
