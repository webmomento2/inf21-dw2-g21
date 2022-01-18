import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BibliotecadbDataSource} from '../datasources';
import {Serie, SerieRelations} from '../models';

export class SerieRepository extends DefaultCrudRepository<
  Serie,
  typeof Serie.prototype.id,
  SerieRelations
> {
  constructor(
    @inject('datasources.bibliotecadb') dataSource: BibliotecadbDataSource,
  ) {
    super(Serie, dataSource);
  }
}
