import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(
    name: string,
    price: number,
    description: string,
    seller: string,
  ): Promise<ProductDocument> {
    const newProduct = this.productModel.create({
      name,
      price,
      description,
      seller,
    });
    return newProduct;
  }

  async findAll(id: string): Promise<ProductDocument> {
    return this.productModel.findById(id);
  }
}
