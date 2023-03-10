import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async create(user: UserEntity): Promise<void> {
    this.users.push(user);
  }

  async list(): Promise<UserEntity[]> {
    return this.users;
  }

  async searchEmail(email: string): Promise<boolean> {
    const hasUserEmail = this.users.find(
      (userEmail: UserEntity) => userEmail.email === email,
    );

    if (hasUserEmail) {
      return true;
    }
    return false;

    // return hasUserEmail !== undefined;
  }

  async searchId(id: string): Promise<boolean> {
    const hasUserId = this.users.find((userId: UserEntity) => userId.id === id);

    if (hasUserId) {
      return true;
    }
    return false;
  }

  async update(id: string, userData: Partial<UserEntity>): Promise<UserEntity> {
    const hasUser = this.getUserById(id);

    Object.entries(userData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      hasUser[key] = value;
    });

    return hasUser;
  }

  async delete(id: string): Promise<UserEntity> {
    const hasUser = this.getUserById(id);

    this.users = this.users.filter((user: UserEntity) => {
      return user.id !== id;
    });

    return hasUser;
  }

  private getUserById(id: string): UserEntity {
    const hasUser = this.users.find((user: UserEntity) => {
      return user.id === id;
    });

    if (!hasUser) {
      throw new Error(`User don't already exists`);
    }

    return hasUser;
  }
}
