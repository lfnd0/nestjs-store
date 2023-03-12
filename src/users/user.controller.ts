import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import ResponseDTO from 'src/dtos/response.dto';
import UserDTO from './dtos/user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { v4 as uuidV4 } from 'uuid';
import { UserList } from './dtos/user.list.dto';
import UserUpdate from './dtos/user.update.dto';

@Controller('/users')
export class UserController {
  constructor(private usersRepository: UserRepository) {}

  @Post()
  async postUser(@Body() user: UserDTO): Promise<ResponseDTO> {
    const userEntity = new UserEntity();

    userEntity.id = uuidV4();
    userEntity.name = user.name;
    userEntity.email = user.email;
    userEntity.password = user.password;

    this.usersRepository.create(userEntity);

    return {
      status: 201,
      data: new UserList(userEntity.id, userEntity.name),
      message: 'User created',
    };
  }

  @Get()
  async getUsers(): Promise<UserList[]> {
    const users = await this.usersRepository.list();

    const result = users.map((user: UserEntity) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    });

    return result;
  }

  @Put('/:id')
  async putUser(
    @Param('id') id: string,
    @Body() userData: UserUpdate,
  ): Promise<ResponseDTO> {
    const result = await this.usersRepository.update(id, userData);

    return {
      status: 204,
      message: 'Updated user',
      data: result,
    };
  }
}
