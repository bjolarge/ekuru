import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EkuruModule } from './ekuru/ekuru.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EkuruModule,
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
