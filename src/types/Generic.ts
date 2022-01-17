export type PostData<T> = Omit<T, 'id'>;

export type DatabaseObject = {
  id: number;
}
