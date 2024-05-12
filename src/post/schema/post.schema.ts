import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({
  timestamps: true,
})
export class Post {
  @Prop({
    required: true,
  })
  name: string;
  @Prop()
  description: string;
  @Prop({
    default: 0,
  })
  isDeleted: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: mongoose.Types.ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(Post);
