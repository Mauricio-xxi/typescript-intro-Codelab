import { Entity, EntityRepository } from './EntityRepository';

interface User extends Entity {
  username: string;
}

interface DetailedUser extends User {
  email: string;
  name: string;
}
export class UserRepository implements EntityRepository<User, DetailedUser> {
  async getAll(): Promise<User[]> {
    return fetch('https://api.example.com/users').then((res) => res.json());
  }

  async getById(id: string): Promise<DetailedUser> {
    return fetch(`https://api.example.com/users/${id}`).then((res) =>
      res.json()
    );
  }

  async post(user: Omit<DetailedUser, 'id'>): Promise<DetailedUser> {
    return fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  }

  async patch(user: Partial<DetailedUser>): Promise<DetailedUser> {
    return fetch(`https://api.example.com/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  }

  async put(
    id: string,
    entity: Omit<DetailedUser, 'id'>
  ): Promise<DetailedUser> {
    return fetch(`https://api.example.com/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entity),
    }).then((res) => res.json());
  }

  async delete(id: string): Promise<void> {
    return fetch(`https://api.example.com/users/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }
}
