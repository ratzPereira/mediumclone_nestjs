import { Controller, Get } from '@nestjs/common';

@Controller('api/tags')
export class TagController {
  @Get('')
  findAll() {
    return ['Oi', 'Ola'];
  }
}
