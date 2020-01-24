import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Coiffeur, CoiffeurRelations, Rdv} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {RdvRepository} from './rdv.repository';

export class CoiffeurRepository extends DefaultCrudRepository<
  Coiffeur,
  typeof Coiffeur.prototype.id,
  CoiffeurRelations
> {

  public readonly rdvs: HasManyRepositoryFactory<Rdv, typeof Coiffeur.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('RdvRepository') protected rdvRepositoryGetter: Getter<RdvRepository>,
  ) {
    super(Coiffeur, dataSource);
    this.rdvs = this.createHasManyRepositoryFactoryFor('rdvs', rdvRepositoryGetter,);
    this.registerInclusionResolver('rdvs', this.rdvs.inclusionResolver);
  }
}
