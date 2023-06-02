import { PartialType } from '@nestjs/mapped-types';
import { CreateEkuruDto } from './create-ekuru.dto';

export class UpdateEkuruDto extends PartialType(CreateEkuruDto) {}
