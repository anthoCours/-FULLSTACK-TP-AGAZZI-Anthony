import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Rdv} from '../models';
import {RdvRepository} from '../repositories';

export class RdvController {
  constructor(
    @repository(RdvRepository)
    public rdvRepository : RdvRepository,
  ) {}

  @post('/rdvs', {
    responses: {
      '200': {
        description: 'Rdv model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rdv)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rdv, {
            title: 'NewRdv',
            exclude: ['id'],
          }),
        },
      },
    })
    rdv: Omit<Rdv, 'id'>,
  ): Promise<Rdv> {
    return this.rdvRepository.create(rdv);
  }

  @get('/rdvs/count', {
    responses: {
      '200': {
        description: 'Rdv model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Rdv)) where?: Where<Rdv>,
  ): Promise<Count> {
    return this.rdvRepository.count(where);
  }

  @get('/rdvs', {
    responses: {
      '200': {
        description: 'Array of Rdv model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Rdv, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Rdv)) filter?: Filter<Rdv>,
  ): Promise<Rdv[]> {
    return this.rdvRepository.find(filter);
  }

  @patch('/rdvs', {
    responses: {
      '200': {
        description: 'Rdv PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rdv, {partial: true}),
        },
      },
    })
    rdv: Rdv,
    @param.query.object('where', getWhereSchemaFor(Rdv)) where?: Where<Rdv>,
  ): Promise<Count> {
    return this.rdvRepository.updateAll(rdv, where);
  }

  @get('/rdvs/{id}', {
    responses: {
      '200': {
        description: 'Rdv model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Rdv, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Rdv)) filter?: Filter<Rdv>
  ): Promise<Rdv> {
    return this.rdvRepository.findById(id, filter);
  }

  @patch('/rdvs/{id}', {
    responses: {
      '204': {
        description: 'Rdv PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rdv, {partial: true}),
        },
      },
    })
    rdv: Rdv,
  ): Promise<void> {
    await this.rdvRepository.updateById(id, rdv);
  }

  @put('/rdvs/{id}', {
    responses: {
      '204': {
        description: 'Rdv PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rdv: Rdv,
  ): Promise<void> {
    await this.rdvRepository.replaceById(id, rdv);
  }

  @del('/rdvs/{id}', {
    responses: {
      '204': {
        description: 'Rdv DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rdvRepository.deleteById(id);
  }
}
