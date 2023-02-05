import { Body, Controller, Get, Post } from '@nestjs/common';
import ResponseDTO from 'src/dtos/response.dto';
import ProductDTO from './dtos/product.dto';
import ProductRepository from './product.repository';

@Controller('/products')
export default class ProductController {
  constructor(private productsRepository: ProductRepository) {}

  @Post()
  async postProduct(@Body() product: ProductDTO): Promise<ResponseDTO> {
    this.productsRepository.create(product);

    return {
      status: 201,
      message: 'Product created',
    };
  }

  @Get()
  async getProducts(): Promise<ProductDTO[]> {
    return this.productsRepository.list();
  }
}
