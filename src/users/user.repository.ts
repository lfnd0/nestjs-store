import { Injectable } from '@nestjs/common';
import UserDTO from 'src/dtos/userDTO';

@Injectable()
export class UserRepository {
  private users: UserDTO[] = [];

  async create(user: UserDTO): Promise<void> {
    this.users.push(user);
  }
  async list(): Promise<UserDTO[]> {
    return this.users;
  }
}
