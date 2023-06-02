import { Module } from '@nestjs/common';
import { EkuruService } from './ekuru.service';
import { EkuruController } from './ekuru.controller';
import { Ekuru, EkuruSchema } from './entities/ekuru.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EkuruController],
  providers: [EkuruService],
  exports:[EkuruService],
  imports:[
    MongooseModule.forFeature([
      {
          name:Ekuru.name,
          schema:EkuruSchema,
      },
      
  ])
  ]

})
export class EkuruModule {}
