import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async create(name: string, email: string, DOB: Date): Promise<UserDocument> {
    return this.userModel.create({ name, email, DOB });
  }

  async get(): Promise<UserDocument[]> {
    return this.userModel.find().populate('Post');
  }
}
