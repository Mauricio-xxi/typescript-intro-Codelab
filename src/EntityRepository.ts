export interface Entity {
  id: string;
}

export interface EntityRepository<T extends Entity, U extends T & Entity> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<U>;
  post(entity: Omit<U, 'id'>): Promise<U>;
  patch(entity: Partial<U>): Promise<U>;
  put(id: string, entity: Omit<U, 'id'>): Promise<U>;
  delete(id: string): Promise<void>;
}
