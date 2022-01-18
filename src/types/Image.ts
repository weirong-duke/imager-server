import { DatabaseObject } from './Generic'
import { Comment } from './Comment'

export type Image = DatabaseObject & {
  comments: Comment[];
  data: string;
  details?: string;
  fileName: string;
  lastCommentDate: string;
  name?: string;
  size: number;
}
