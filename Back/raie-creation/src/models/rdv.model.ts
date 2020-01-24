import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Client} from './client.model';
import {Coiffeur} from './coiffeur.model';

@model()
export class Rdv extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @belongsTo(() => Client)
  clientId: number;

  @belongsTo(() => Coiffeur)
  coiffeurId: number;

  constructor(data?: Partial<Rdv>) {
    super(data);
  }
}

export interface RdvRelations {
  // describe navigational properties here
}

export type RdvWithRelations = Rdv & RdvRelations;
