import { Injectable } from '@nestjs/common';
import ProductDTO from './dtos/product.dto';

@Injectable()
export default class ProductRepository {
  private products: ProductDTO[] = [];

  async create(product: ProductDTO): Promise<void> {
    this.products.push(product);
  }

  async list(): Promise<ProductDTO[]> {
    return this.products;
  }
}
