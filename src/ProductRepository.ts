import { Entity, EntityRepository } from './EntityRepository';

interface Product extends Entity {
  productName: string;
}

interface DetailedProduct extends Product {
  price: number;
  description: string;
}

export class ProductRepository
  implements EntityRepository<Product, DetailedProduct>
{
  async getAll(): Promise<Product[]> {
    return fetch('https://api.example.com/products').then((res) => res.json());
  }

  async getById(id: string): Promise<DetailedProduct> {
    return fetch(`https://api.example.com/products/${id}`).then((res) =>
      res.json()
    );
  }

  async post(product: Omit<DetailedProduct, 'id'>): Promise<DetailedProduct> {
    return fetch('https://api.example.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then((res) => res.json());
  }

  async patch(product: Partial<DetailedProduct>): Promise<DetailedProduct> {
    return fetch(`https://api.example.com/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then((res) => res.json());
  }

  async put(
    id: string,
    product: Omit<DetailedProduct, 'id'>
  ): Promise<DetailedProduct> {
    return fetch(`https://api.example.com/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then((res) => res.json());
  }

  async delete(id: string): Promise<void> {
    return fetch(`https://api.example.com/products/${id}`, {
      method: 'DELETE',
    }).then(() => {});
  }
}
