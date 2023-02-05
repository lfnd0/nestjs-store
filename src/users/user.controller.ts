import { Body, Controller, Get, Post } from '@nestjs/common';
import ResponseDTO from 'src/dtos/responseDTO';
import UserDTO from 'src/dtos/userDTO';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private usersRepository: UserRepository) {}

  @Post()
  async createUser(
    @Body()
    user: UserDTO,
  ): Promise<ResponseDTO> {
    this.usersRepository.create(user);

    return {
      status: 201,
      message: 'User created',
    };
  }

  @Get()
  async listUsers(): Promise<UserDTO[]> {
    return this.usersRepository.list();
  }
}
