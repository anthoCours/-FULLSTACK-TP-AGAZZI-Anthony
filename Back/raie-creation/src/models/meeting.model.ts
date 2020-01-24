import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Customer} from './customer.model';
import {Hairdresser} from './hairdresser.model';

@model()
export class Meeting extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;


  @belongsTo(() => Customer)
  customerMail: string;

  @belongsTo(() => Hairdresser)
  hairdresserMail: string;

  constructor(data?: Partial<Meeting>) {
    super(data);
  }
}

export interface MeetingRelations {
  // describe navigational properties here
}

export type MeetingWithRelations = Meeting & MeetingRelations;
