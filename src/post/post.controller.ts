import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDocument } from './schema/post.schema';

@Controller('post')
export class PostController {
  constructor(private readonly PostService: PostService) {}

  @Get()
  get(): Promise<PostDocument[]> {
    return this.PostService.get();
  }

  @Post()
  create(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('user') user: string,
  ): Promise<PostDocument> {
    return this.PostService.create(name, description, user);
  }
}
