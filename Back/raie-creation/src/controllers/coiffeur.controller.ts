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
import {Coiffeur} from '../models';
import {CoiffeurRepository} from '../repositories';

export class CoiffeurController {
  constructor(
    @repository(CoiffeurRepository)
    public coiffeurRepository : CoiffeurRepository,
  ) {}

  @post('/coiffeurs', {
    responses: {
      '200': {
        description: 'Coiffeur model instance',
        content: {'application/json': {schema: getModelSchemaRef(Coiffeur)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coiffeur, {
            title: 'NewCoiffeur',
            exclude: ['id'],
          }),
        },
      },
    })
    coiffeur: Omit<Coiffeur, 'id'>,
  ): Promise<Coiffeur> {
    return this.coiffeurRepository.create(coiffeur);
  }

  @get('/coiffeurs/count', {
    responses: {
      '200': {
        description: 'Coiffeur model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Coiffeur)) where?: Where<Coiffeur>,
  ): Promise<Count> {
    return this.coiffeurRepository.count(where);
  }

  @get('/coiffeurs', {
    responses: {
      '200': {
        description: 'Array of Coiffeur model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Coiffeur, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Coiffeur)) filter?: Filter<Coiffeur>,
  ): Promise<Coiffeur[]> {
    return this.coiffeurRepository.find(filter);
  }

  @patch('/coiffeurs', {
    responses: {
      '200': {
        description: 'Coiffeur PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coiffeur, {partial: true}),
        },
      },
    })
    coiffeur: Coiffeur,
    @param.query.object('where', getWhereSchemaFor(Coiffeur)) where?: Where<Coiffeur>,
  ): Promise<Count> {
    return this.coiffeurRepository.updateAll(coiffeur, where);
  }

  @get('/coiffeurs/{id}', {
    responses: {
      '200': {
        description: 'Coiffeur model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Coiffeur, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Coiffeur)) filter?: Filter<Coiffeur>
  ): Promise<Coiffeur> {
    return this.coiffeurRepository.findById(id, filter);
  }

  @patch('/coiffeurs/{id}', {
    responses: {
      '204': {
        description: 'Coiffeur PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coiffeur, {partial: true}),
        },
      },
    })
    coiffeur: Coiffeur,
  ): Promise<void> {
    await this.coiffeurRepository.updateById(id, coiffeur);
  }

  @put('/coiffeurs/{id}', {
    responses: {
      '204': {
        description: 'Coiffeur PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() coiffeur: Coiffeur,
  ): Promise<void> {
    await this.coiffeurRepository.replaceById(id, coiffeur);
  }

  @del('/coiffeurs/{id}', {
    responses: {
      '204': {
        description: 'Coiffeur DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.coiffeurRepository.deleteById(id);
  }
}
