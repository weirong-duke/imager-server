import { DatabaseObject } from './Generic'

export type Image = DatabaseObject & {
  data: string;
  name: string;
  size: number;
}
