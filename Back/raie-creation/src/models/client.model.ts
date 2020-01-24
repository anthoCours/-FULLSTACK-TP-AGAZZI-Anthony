import {Entity, model, property, hasMany} from '@loopback/repository';
import {Rdv} from './rdv.model';

@model()
export class Client extends Entity {
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
  prenom: string;

  @property({
    type: 'string',
    required: true,
  })
  mdp: string;

  @property({
    type: 'string',
    required: true,
  })
  sexe: string;

  @hasMany(() => Rdv)
  rdvs: Rdv[];

  constructor(data?: Partial<Client>) {
    super(data);
  }
}

export interface ClientRelations {
  // describe navigational properties here
}

export type ClientWithRelations = Client & ClientRelations;
