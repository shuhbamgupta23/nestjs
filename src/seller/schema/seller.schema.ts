import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SellerDocument = Seller & Document;
@Schema({
  timestamps: true,
})
export class Seller {
  @Prop({
    required: true,
  })
  name: string;
  @Prop({
    required: true,
  })
  age: number;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
