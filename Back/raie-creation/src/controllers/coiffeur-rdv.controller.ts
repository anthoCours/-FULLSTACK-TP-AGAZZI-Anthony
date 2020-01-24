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
  Coiffeur,
  Rdv,
} from '../models';
import {CoiffeurRepository} from '../repositories';

export class CoiffeurRdvController {
  constructor(
    @repository(CoiffeurRepository) protected coiffeurRepository: CoiffeurRepository,
  ) { }

  @get('/coiffeurs/{id}/rdvs', {
    responses: {
      '200': {
        description: 'Array of Rdv\'s belonging to Coiffeur',
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
    return this.coiffeurRepository.rdvs(id).find(filter);
  }

  @post('/coiffeurs/{id}/rdvs', {
    responses: {
      '200': {
        description: 'Coiffeur model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rdv)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Coiffeur.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rdv, {
            title: 'NewRdvInCoiffeur',
            exclude: ['id'],
            optional: ['coiffeurId']
          }),
        },
      },
    }) rdv: Omit<Rdv, 'id'>,
  ): Promise<Rdv> {
    return this.coiffeurRepository.rdvs(id).create(rdv);
  }

  @patch('/coiffeurs/{id}/rdvs', {
    responses: {
      '200': {
        description: 'Coiffeur.Rdv PATCH success count',
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
    return this.coiffeurRepository.rdvs(id).patch(rdv, where);
  }

  @del('/coiffeurs/{id}/rdvs', {
    responses: {
      '200': {
        description: 'Coiffeur.Rdv DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Rdv)) where?: Where<Rdv>,
  ): Promise<Count> {
    return this.coiffeurRepository.rdvs(id).delete(where);
  }
}
