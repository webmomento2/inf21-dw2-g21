import {Entity, model, property} from '@loopback/repository';

@model()
export class Curso extends Entity {
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
  materia: string;

  @property({
    type: 'string',
    required: true,
  })
  professor: string;

  @property({
    type: 'number',
  })
  duracao?: number;


  constructor(data?: Partial<Curso>) {
    super(data);
  }
}

export interface CursoRelations {
  // describe navigational properties here
}

export type CursoWithRelations = Curso & CursoRelations;
