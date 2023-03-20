import { Injectable } from '@nestjs/common';
import ProductDTO from './dtos/product.dto';
import { ProductEntity } from './product.entity';

@Injectable()
export default class ProductRepository {
  private products: ProductEntity[] = [];

  async create(product: ProductEntity): Promise<void> {
    this.products.push(product);
  }

  async list(): Promise<ProductDTO[]> {
    return this.products;
  }

  async update(id: string, productData: Partial<ProductEntity>): Promise<ProductEntity> {
    const hasProduct = this.getProductById(id);

    Object.entries(productData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      hasProduct[key] = value;
    });

    return hasProduct;
  }

  async delete(id: string): Promise<ProductEntity> {
    const hasProduct = this.getProductById(id);

    this.products = this.products.filter((product: ProductEntity) => {
      return product.id !== id;
    });

    return hasProduct;
  }

  private getProductById(id: string): ProductEntity {
    const hasProduct = this.products.find((product: ProductEntity) => {
      return product.id === id;
    });

    if(!hasProduct) {
      throw new Error(`Product don't already exists`)
    }

    return hasProduct;
  }
}
