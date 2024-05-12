import { Body, Controller, Post } from '@nestjs/common';
import { SellerService } from './seller.service';
import { Seller } from './schema/seller.schema';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Post()
  create(
    @Body('name') name: string,
    @Body('age') age: number,
  ): Promise<Seller> {
    return this.sellerService.create(name, age);
  }
}
