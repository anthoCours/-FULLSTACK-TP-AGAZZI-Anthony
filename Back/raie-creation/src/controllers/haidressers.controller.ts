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
import {Hairdresser} from '../models';
import {HairdresserRepository} from '../repositories';

export class HaidressersController {
  constructor(
    @repository(HairdresserRepository)
    public hairdresserRepository : HairdresserRepository,
  ) {}

  @post('/hairdressers', {
    responses: {
      '200': {
        description: 'Hairdresser model instance',
        content: {'application/json': {schema: getModelSchemaRef(Hairdresser)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hairdresser, {
            title: 'NewHairdresser',
            
          }),
        },
      },
    })
    hairdresser: Hairdresser,
  ): Promise<Hairdresser> {
    return this.hairdresserRepository.create(hairdresser);
  }

  @get('/hairdressers/count', {
    responses: {
      '200': {
        description: 'Hairdresser model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Hairdresser)) where?: Where<Hairdresser>,
  ): Promise<Count> {
    return this.hairdresserRepository.count(where);
  }

  @get('/hairdressers', {
    responses: {
      '200': {
        description: 'Array of Hairdresser model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Hairdresser, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Hairdresser)) filter?: Filter<Hairdresser>,
  ): Promise<Hairdresser[]> {
    return this.hairdresserRepository.find(filter);
  }

  @patch('/hairdressers', {
    responses: {
      '200': {
        description: 'Hairdresser PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hairdresser, {partial: true}),
        },
      },
    })
    hairdresser: Hairdresser,
    @param.query.object('where', getWhereSchemaFor(Hairdresser)) where?: Where<Hairdresser>,
  ): Promise<Count> {
    return this.hairdresserRepository.updateAll(hairdresser, where);
  }

  @get('/hairdressers/{id}', {
    responses: {
      '200': {
        description: 'Hairdresser model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Hairdresser, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Hairdresser)) filter?: Filter<Hairdresser>
  ): Promise<Hairdresser> {
    return this.hairdresserRepository.findById(id, filter);
  }

  @patch('/hairdressers/{id}', {
    responses: {
      '204': {
        description: 'Hairdresser PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hairdresser, {partial: true}),
        },
      },
    })
    hairdresser: Hairdresser,
  ): Promise<void> {
    await this.hairdresserRepository.updateById(id, hairdresser);
  }

  @put('/hairdressers/{id}', {
    responses: {
      '204': {
        description: 'Hairdresser PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() hairdresser: Hairdresser,
  ): Promise<void> {
    await this.hairdresserRepository.replaceById(id, hairdresser);
  }

  @del('/hairdressers/{id}', {
    responses: {
      '204': {
        description: 'Hairdresser DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.hairdresserRepository.deleteById(id);
  }
}
