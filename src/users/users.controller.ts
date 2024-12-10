import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  createUser(@Body() user: { name: string; email: string }) {
    return this.usersService.create(user);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() user: { name?: string; email?: string },
  ) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
