import { Body, Controller, Get, Post } from '@nestjs/common';
import ResponseDTO from 'src/dtos/response.dto';
import ProductDTO from './dtos/product.dto';
import { ProductEntity } from './product.entity';
import ProductRepository from './product.repository';
import { v4 as uuidV4 } from 'uuid';
import { ProductList } from './dtos/product.list.dto';

@Controller('/products')
export default class ProductController {
  constructor(private productsRepository: ProductRepository) {}

  @Post()
  async postProduct(@Body() product: ProductDTO): Promise<ResponseDTO> {
    const productEntity = new ProductEntity();

    productEntity.id = uuidV4();
    productEntity.userId = product.userId;
    productEntity.name = product.name;
    productEntity.price = product.price;
    productEntity.description = product.description;
    productEntity.amountAvailable = product.amountAvailable;
    productEntity.category = product.category;
    productEntity.characteristics = product.characteristics;
    productEntity.images = product.images;
    productEntity.created_at = product.created_at;
    productEntity.updated_at = product.updated_at;

    this.productsRepository.create(productEntity);

    return {
      status: 201,
      data: new ProductList(productEntity.id, productEntity.name),
      message: 'Product created',
    };
  }

  @Get()
  async getProducts(): Promise<ProductDTO[]> {
    return this.productsRepository.list();
  }
}
