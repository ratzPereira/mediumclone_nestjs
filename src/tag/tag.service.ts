import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class TagService {
  findAll() {
    return ['Oi', 'Ola'];
  }
}
