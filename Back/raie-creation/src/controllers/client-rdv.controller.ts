import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Client,
  Rdv,
} from '../models';
import {ClientRepository} from '../repositories';

export class ClientRdvController {
  constructor(
    @repository(ClientRepository) protected clientRepository: ClientRepository,
  ) { }

  @get('/clients/{id}/rdvs', {
    responses: {
      '200': {
        description: 'Array of Rdv\'s belonging to Client',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Rdv)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Rdv>,
  ): Promise<Rdv[]> {
    return this.clientRepository.rdvs(id).find(filter);
  }

  @post('/clients/{id}/rdvs', {
    responses: {
      '200': {
        description: 'Client model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rdv)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Client.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rdv, {
            title: 'NewRdvInClient',
            exclude: ['id'],
            optional: ['clientId']
          }),
        },
      },
    }) rdv: Omit<Rdv, 'id'>,
  ): Promise<Rdv> {
    return this.clientRepository.rdvs(id).create(rdv);
  }

  @patch('/clients/{id}/rdvs', {
    responses: {
      '200': {
        description: 'Client.Rdv PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rdv, {partial: true}),
        },
      },
    })
    rdv: Partial<Rdv>,
    @param.query.object('where', getWhereSchemaFor(Rdv)) where?: Where<Rdv>,
  ): Promise<Count> {
    return this.clientRepository.rdvs(id).patch(rdv, where);
  }

  @del('/clients/{id}/rdvs', {
    responses: {
      '200': {
        description: 'Client.Rdv DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Rdv)) where?: Where<Rdv>,
  ): Promise<Count> {
    return this.clientRepository.rdvs(id).delete(where);
  }
}
