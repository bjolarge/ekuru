
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose";
@Schema()
export class Ekuru extends Document {
@Prop()
travelDate:Date;
@Prop({min:0})
availableWeight:Number;
@Prop()
travellerFee: number
}
export const EkuruSchema = SchemaFactory.createForClass(Ekuru);
