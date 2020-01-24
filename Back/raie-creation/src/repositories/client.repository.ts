import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Client, ClientRelations, Rdv} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {RdvRepository} from './rdv.repository';

export class ClientRepository extends DefaultCrudRepository<
  Client,
  typeof Client.prototype.id,
  ClientRelations
> {

  public readonly rdvs: HasManyRepositoryFactory<Rdv, typeof Client.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('RdvRepository') protected rdvRepositoryGetter: Getter<RdvRepository>,
  ) {
    super(Client, dataSource);
    this.rdvs = this.createHasManyRepositoryFactoryFor('rdvs', rdvRepositoryGetter,);
    this.registerInclusionResolver('rdvs', this.rdvs.inclusionResolver);
  }
}
