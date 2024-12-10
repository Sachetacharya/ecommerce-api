import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Get()
  getAllOrders() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  getOrder(@Param('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @Post()
  createOrder(@Body() order: { userId: number; productId: number; quantity: number }) {
    return this.ordersService.create(order);
  }

  @Put(':id')
  updateOrder(
    @Param('id') id: number,
    @Body() order: { userId?: number; productId?: number; quantity?: number },
  ) {
    return this.ordersService.update(id, order);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: number) {
    return this.ordersService.delete(id);
  }
}
