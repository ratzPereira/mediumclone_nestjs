import { TagModule } from '@app/tag/tag.module';
import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig'

@Module({
  imports: [TagModule, TypeOrmModule.forRoot(ormconfig) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
