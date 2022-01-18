import {Entity, model, property} from '@loopback/repository';

@model()
export class Serie extends Entity {
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
    type: 'number',
  })
  temporadas?: number;

  @property({
    type: 'string',
    required: true,
  })
  genero?: string;

  @property({
    type: 'boolean',
  })
  assistido?: boolean;


  constructor(data?: Partial<Serie>) {
    super(data);
  }
}

export interface SerieRelations {
  // describe navigational properties here
}

export type SerieWithRelations = Serie & SerieRelations;
