import { DatabaseObject } from './Generic'

export type Comment = DatabaseObject & {
  body: string;
  imageId: number;
  parentCommentId?: number | null;
}
