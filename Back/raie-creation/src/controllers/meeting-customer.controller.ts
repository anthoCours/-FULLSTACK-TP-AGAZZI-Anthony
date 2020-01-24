import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Meeting,
  Customer,
} from '../models';
import {MeetingRepository} from '../repositories';

export class MeetingCustomerController {
  constructor(
    @repository(MeetingRepository)
    public meetingRepository: MeetingRepository,
  ) { }

  @get('/meetings/{id}/customer', {
    responses: {
      '200': {
        description: 'Customer belonging to Meeting',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Customer)},
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.string('id') id: typeof Meeting.prototype.id,
  ): Promise<Customer> {
    return this.meetingRepository.customer(id);
  }
}
