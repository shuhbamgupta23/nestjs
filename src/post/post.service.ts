import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument } from './schema/post.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<PostDocument>,
  ) {}

  async get(): Promise<PostDocument[]> {
    return await this.postModel.find();
  }

  async create(
    name: string,
    description: string,
    user: string,
  ): Promise<PostDocument> {
    return this.postModel.create({ name, description, user });
  }
}
