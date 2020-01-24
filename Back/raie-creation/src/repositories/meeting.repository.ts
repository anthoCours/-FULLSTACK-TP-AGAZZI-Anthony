import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Meeting, MeetingRelations, Customer, Hairdresser} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CustomerRepository} from './customer.repository';
import {HairdresserRepository} from './hairdresser.repository';

export class MeetingRepository extends DefaultCrudRepository<
  Meeting,
  typeof Meeting.prototype.id,
  MeetingRelations
> {

  public readonly customer: BelongsToAccessor<Customer, typeof Meeting.prototype.id>;

  public readonly hairdresser: BelongsToAccessor<Hairdresser, typeof Meeting.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CustomerRepository') protected customerRepositoryGetter: Getter<CustomerRepository>, @repository.getter('HairdresserRepository') protected hairdresserRepositoryGetter: Getter<HairdresserRepository>,
  ) {
    super(Meeting, dataSource);
    this.hairdresser = this.createBelongsToAccessorFor('hairdresserMail', hairdresserRepositoryGetter,);
    this.customer = this.createBelongsToAccessorFor('customerMail', customerRepositoryGetter,);
  }
}
