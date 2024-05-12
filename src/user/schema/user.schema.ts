import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PostDocument } from 'src/post/schema/post.schema';

export type UserDocument = User & Document;
@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    required: true,
  })
  name: string;
  @Prop({
    required: true,
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
      },
      message: (props): string =>
        `${props.value} is not a valid email address!`,
    },
  })
  email: string;
  @Prop({
    required: true,
  })
  DOB: Date;
  Post: PostDocument[];
}

export const UserSchema = SchemaFactory.createForClass(User);
