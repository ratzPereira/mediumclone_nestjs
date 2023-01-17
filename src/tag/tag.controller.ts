import { TagService } from './tag.service';
import { Controller, Get } from '@nestjs/common';

@Controller('api/tags')
export class TagController {

    constructor(private tagService: TagService){}
  @Get('')
  findAll() {
    return this.tagService.findAll();
  }
}
