import {Entity, model, property, hasMany} from '@loopback/repository';
import {Filme} from './filme.model';

@model()
export class Livro extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
  })
  edicao?: number;

  @property({
    type: 'string',
    required: true,
  })
  genero: string;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;

  @property({
    type: 'boolean',
  })
  lido?: boolean;

  @hasMany(() => Filme, {keyTo: 'adaptado'})
  filmes: Filme[];

  constructor(data?: Partial<Livro>) {
    super(data);
  }
}

export interface LivroRelations {
  // describe navigational properties here
}

export type LivroWithRelations = Livro & LivroRelations;
