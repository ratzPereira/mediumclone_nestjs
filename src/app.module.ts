import { TagModule } from '@app/tag/tag.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig'

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig.options), TagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
