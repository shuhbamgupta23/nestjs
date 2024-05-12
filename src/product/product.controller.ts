import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schema/product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}
  @Post()
  createProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('seller') seller: string,
    @Body('description') description?: string,
  ): Promise<Product> {
    return this.ProductService.create(name, price, description, seller);
  }

  @Get()
  get(@Param('id') id: string): Promise<Product[]> {
    return this.ProductService.findAll(id);
  }
}
