import { Body, Controller, Get, Post } from '@nestjs/common';
import ResponseDTO from 'src/dtos/response.dto';
import UserDTO from './dtos/user.dto';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private usersRepository: UserRepository) {}

  @Post()
  async postUser(@Body() user: UserDTO): Promise<ResponseDTO> {
    this.usersRepository.create(user);

    return {
      status: 201,
      message: 'User created',
    };
  }

  @Get()
  async getUsers(): Promise<UserDTO[]> {
    return this.usersRepository.list();
  }
}
