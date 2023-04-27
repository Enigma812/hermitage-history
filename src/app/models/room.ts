import { Collection } from './collection';

export interface Room {
  id: string;
  path: string;
  prev?: string;
  next?: string;
  upToFloor?: boolean;
  downToFloor?: boolean;
  map: string;
  name: string;
  status: string;
  description: string;
  collections: Collection[];
}
