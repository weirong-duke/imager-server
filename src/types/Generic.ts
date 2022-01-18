export type PostData<T> = Omit<T, 'id'>;

export type DatabaseObject = {
  createdAt: string;
  id: number;
}
