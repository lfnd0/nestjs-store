import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import ResponseDTO from 'src/dtos/response.dto';
import ProductDTO from './dtos/product.dto';
import { ProductEntity } from './product.entity';
import ProductRepository from './product.repository';
import { v4 as uuidV4 } from 'uuid';
import { ProductList } from './dtos/product.list.dto';
import { ProductUpdate } from './dtos/product.update.dto';

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

  @Put('/:id')
  async putProduct(
    @Param('id') id: string,
    @Body() productData: ProductUpdate,
  ): Promise<ResponseDTO> {
    const result = await this.productsRepository.update(id, productData);

    return {
      status: 204,
      message: 'Updated product',
      data: result,
    }
  }

  @Delete('/:id')
  async removeProduct(@Param('id') id: string): Promise<ResponseDTO> {
    const result = await this.productsRepository.delete(id);

    return {
      status: 200,
      message: 'Deleted product',
      data: result,
    }
  }
}
