import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 699.99 },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  create(product: { name: string; price: number }) {
    const newProduct = { id: this.products.length + 1, ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, product: { name?: string; price?: number }) {
    const existingProduct = this.findOne(id);
    if (existingProduct) {
      Object.assign(existingProduct, product);
    }
    return existingProduct;
  }

  delete(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
    return { deleted: true };
  }
}
