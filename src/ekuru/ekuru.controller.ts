import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EkuruService } from './ekuru.service';
import { CreateEkuruDto } from './dto/create-ekuru.dto';
import { UpdateEkuruDto } from './dto/update-ekuru.dto';

@Controller('ekuru')
export class EkuruController {
  constructor(private readonly ekuruService: EkuruService) {}

  @Post()
  createtravellerdetails(@Body()createTravellerDto:CreateEkuruDto){
      //createTravellerDto.travellerId = user._id
  return this.ekuruService.createtraveller(createTravellerDto);
  }
  @Get()
  getalltravellers(){
    return this.ekuruService.findalltravellers();
  }

}
