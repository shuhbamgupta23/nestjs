import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Get()
  get(): Promise<User[]> {
    return this.userServices.get();
  }

  @Post()
  create(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('DOB') DOB: Date,
  ) {
    return this.userServices.create(name, email, DOB);
  }
}
