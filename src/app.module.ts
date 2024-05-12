import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/amazon'),
    ProductModule,
    SellerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
