import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Rdv,
  Client,
} from '../models';
import {RdvRepository} from '../repositories';

export class RdvClientController {
  constructor(
    @repository(RdvRepository)
    public rdvRepository: RdvRepository,
  ) { }

  @get('/rdvs/{id}/client', {
    responses: {
      '200': {
        description: 'Client belonging to Rdv',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Client)},
          },
        },
      },
    },
  })
  async getClient(
    @param.path.number('id') id: typeof Rdv.prototype.id,
  ): Promise<Client> {
    return this.rdvRepository.client(id);
  }
}
