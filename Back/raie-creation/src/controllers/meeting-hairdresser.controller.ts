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
  Hairdresser,
} from '../models';
import {MeetingRepository} from '../repositories';

export class MeetingHairdresserController {
  constructor(
    @repository(MeetingRepository)
    public meetingRepository: MeetingRepository,
  ) { }

  @get('/meetings/{id}/hairdresser', {
    responses: {
      '200': {
        description: 'Hairdresser belonging to Meeting',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Hairdresser)},
          },
        },
      },
    },
  })
  async getHairdresser(
    @param.path.string('id') id: typeof Meeting.prototype.id,
  ): Promise<Hairdresser> {
    return this.meetingRepository.hairdresser(id);
  }
}
