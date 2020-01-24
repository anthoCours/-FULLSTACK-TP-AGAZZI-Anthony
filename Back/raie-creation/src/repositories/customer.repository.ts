import {DefaultCrudRepository} from '@loopback/repository';
import {Customer, CustomerRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.mail,
  CustomerRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Customer, dataSource);
  }
}
