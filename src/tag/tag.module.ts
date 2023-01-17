import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Module } from '@nestjs/common';

@Module({
  providers: [TagService],
  controllers:[TagController],
})
export class TagModule {}
