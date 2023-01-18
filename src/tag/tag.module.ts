import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [TagService],
  controllers: [TagController],
  imports: [TypeOrmModule.forFeature([TagEntity])],
})
export class TagModule {}
