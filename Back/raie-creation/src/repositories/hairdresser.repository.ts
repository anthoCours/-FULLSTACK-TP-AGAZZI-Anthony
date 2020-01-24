import {DefaultCrudRepository} from '@loopback/repository';
import {Hairdresser, HairdresserRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HairdresserRepository extends DefaultCrudRepository<
  Hairdresser,
  typeof Hairdresser.prototype.mail,
  HairdresserRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Hairdresser, dataSource);
  }
}
