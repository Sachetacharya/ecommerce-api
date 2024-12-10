import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  getAllProducts() {
    return this.productsService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  createProduct(@Body() product: { name: string; price: number }) {
    return this.productsService.create(product);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() product: { name?: string; price?: number },
  ) {
    return this.productsService.update(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
