import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Rdv, RdvRelations, Client, Coiffeur} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ClientRepository} from './client.repository';
import {CoiffeurRepository} from './coiffeur.repository';

export class RdvRepository extends DefaultCrudRepository<
  Rdv,
  typeof Rdv.prototype.id,
  RdvRelations
> {

  public readonly client: BelongsToAccessor<Client, typeof Rdv.prototype.id>;

  public readonly coiffeur: BelongsToAccessor<Coiffeur, typeof Rdv.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ClientRepository') protected clientRepositoryGetter: Getter<ClientRepository>, @repository.getter('CoiffeurRepository') protected coiffeurRepositoryGetter: Getter<CoiffeurRepository>,
  ) {
    super(Rdv, dataSource);
    this.coiffeur = this.createBelongsToAccessorFor('coiffeur', coiffeurRepositoryGetter,);
    this.registerInclusionResolver('coiffeur', this.coiffeur.inclusionResolver);
    this.client = this.createBelongsToAccessorFor('client', clientRepositoryGetter,);
    this.registerInclusionResolver('client', this.client.inclusionResolver);
  }
}
