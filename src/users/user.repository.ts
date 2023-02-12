import { Injectable } from '@nestjs/common';
import UserDTO from './dtos/user.dto';

@Injectable()
export class UserRepository {
  private users: UserDTO[] = [];

  async create(user: UserDTO): Promise<void> {
    this.users.push(user);
  }

  async list(): Promise<UserDTO[]> {
    return this.users;
  }

  async searchEmail(email: string): Promise<boolean> {
    const hasUserEmail = this.users.find(
      (userEmail: UserDTO) => userEmail.email === email,
    );

    if (hasUserEmail) {
      return true;
    }
    return false;

    // return hasUserEmail !== undefined;
  }
}
