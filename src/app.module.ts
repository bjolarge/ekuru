import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EkuruModule } from './ekuru/ekuru.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EkuruModule,
    MongooseModule.forRoot('mongodb+srv://adebisi:oBl9SyqxKGEboqYw@sendmedb.mdupyr4.mongodb.net/?retryWrites=true&w=majority'),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
