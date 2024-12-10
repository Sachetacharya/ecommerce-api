import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [
    { id: 1, userId: 1, productId: 1, quantity: 2 },
    { id: 2, userId: 2, productId: 2, quantity: 1 },
  ];

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    return this.orders.find((order) => order.id === id);
  }

  create(order: { userId: number; productId: number; quantity: number }) {
    const newOrder = { id: this.orders.length + 1, ...order };
    this.orders.push(newOrder);
    return newOrder;
  }

  update(id: number, order: { userId?: number; productId?: number; quantity?: number }) {
    const existingOrder = this.findOne(id);
    if (existingOrder) {
      Object.assign(existingOrder, order);
    }
    return existingOrder;
  }

  delete(id: number) {
    this.orders = this.orders.filter((order) => order.id !== id);
    return { deleted: true };
  }
}
