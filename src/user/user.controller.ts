import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IUser, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body() user:Omit<IUser, 'id'>) {
    return this.userService.createUser({ username: user.username, password: user.password });
  }

  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() user: Omit<IUser, 'id'>) {
    console.log("id", id);
    return this.userService.updateUser(id, user);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: number){
    return this.userService.deleteUser(id);
  }
}
