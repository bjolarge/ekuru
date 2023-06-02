import { IsBoolean, IsString, IsNumber, IsDate, IsNotEmpty, IsObject, IsOptional } from "class-validator";
export class CreateEkuruDto {
    @IsDate()
    @IsNotEmpty()
    travelDate:Date;
    
    @IsNumber()
    @IsNotEmpty()
    availableWeight:number;
    
    @IsNumber()
    @IsNotEmpty()
    travellerFee:number;

}
