import { Injectable } from '@nestjs/common';
import { CreateEkuruDto } from './dto/create-ekuru.dto';
import { UpdateEkuruDto } from './dto/update-ekuru.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ekuru } from './entities/ekuru.entity';
import { Model } from 'mongoose';

@Injectable()
export class EkuruService {
  constructor(@InjectModel(Ekuru.name) private readonly travellerModel:Model<Ekuru>){}

  findalltravellers(){
      return this.travellerModel.find().exec();
  }
  async createtraveller(createTravellerDto:CreateEkuruDto){
        const traveller = new this.travellerModel(createTravellerDto);
        return traveller.save();
    }
}

 




