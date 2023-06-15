import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EkuruModule } from './ekuru/ekuru.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EkuruModule,
    MongooseModule.forRoot(`mongodb://localhost:27017/${process.env.DB_NAME}`),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
