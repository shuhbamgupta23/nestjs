import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({
  timestamps: true,
})
export class Product {
  @Prop({
    required: true,
  })
  name: string;
  @Prop({
    required: true,
  })
  price: number;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true })
  seller: mongoose.Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
