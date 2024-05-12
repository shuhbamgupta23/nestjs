import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Seller } from './schema/seller.schema';

@Injectable()
export class SellerService {
  constructor(@InjectModel('Seller') private readonly sellerModel) {}

  async create(name: string, age: number): Promise<Seller> {
    const newSeller = this.sellerModel.create({ name, age });
    return newSeller;
  }
}
