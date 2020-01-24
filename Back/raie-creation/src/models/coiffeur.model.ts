import {Entity, model, property, hasMany} from '@loopback/repository';
import {Rdv} from './rdv.model';

@model()
export class Coiffeur extends Entity {
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
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  mdp: string;

  @hasMany(() => Rdv)
  rdvs: Rdv[];

  constructor(data?: Partial<Coiffeur>) {
    super(data);
  }
}

export interface CoiffeurRelations {
  // describe navigational properties here
}

export type CoiffeurWithRelations = Coiffeur & CoiffeurRelations;
