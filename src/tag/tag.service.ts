import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['Oi', 'Ola'];
  }
}
