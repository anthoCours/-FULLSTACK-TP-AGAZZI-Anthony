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
  Coiffeur,
} from '../models';
import {RdvRepository} from '../repositories';

export class RdvCoiffeurController {
  constructor(
    @repository(RdvRepository)
    public rdvRepository: RdvRepository,
  ) { }

  @get('/rdvs/{id}/coiffeur', {
    responses: {
      '200': {
        description: 'Coiffeur belonging to Rdv',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Coiffeur)},
          },
        },
      },
    },
  })
  async getCoiffeur(
    @param.path.number('id') id: typeof Rdv.prototype.id,
  ): Promise<Coiffeur> {
    return this.rdvRepository.coiffeur(id);
  }
}
