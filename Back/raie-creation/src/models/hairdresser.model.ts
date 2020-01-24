import {Entity, model, property} from '@loopback/repository';

@model()
export class Hairdresser extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  mail: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  surname: string;

  @property({
    type: 'string',
    required: true,
  })
  phoneNumber: string;


  constructor(data?: Partial<Hairdresser>) {
    super(data);
  }
}

export interface HairdresserRelations {
  // describe navigational properties here
}

export type HairdresserWithRelations = Hairdresser & HairdresserRelations;
