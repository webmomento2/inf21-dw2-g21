import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Livro} from './livro.model';

@model()
export class Filme extends Entity {
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
    required: true,
  })
  ano: number;

  @property({
    type: 'string',
  })
  duracao?: string;

  @property({
    type: 'string',
    required: true,
  })
  genero: string;

  @property({
    type: 'boolean',
  })
  assistido?: boolean;

  @belongsTo(() => Livro, {name: 'livro'})
  adaptado: number;

  constructor(data?: Partial<Filme>) {
    super(data);
  }
}

export interface FilmeRelations {
  // describe navigational properties here
}

export type FilmeWithRelations = Filme & FilmeRelations;
