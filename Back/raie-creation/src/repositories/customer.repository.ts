import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Customer, CustomerRelations, Meeting} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {MeetingRepository} from './meeting.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.mail,
  CustomerRelations
> {

  public readonly meeting: BelongsToAccessor<Meeting, typeof Customer.prototype.mail>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MeetingRepository') protected meetingRepositoryGetter: Getter<MeetingRepository>,
  ) {
    super(Customer, dataSource);
    this.meeting = this.createBelongsToAccessorFor('meeting', meetingRepositoryGetter,);
    this.registerInclusionResolver('meeting', this.meeting.inclusionResolver);
  }
}
