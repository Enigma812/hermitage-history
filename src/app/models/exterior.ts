import { Collection } from './collection';

export interface Exterior {
  id: string;
  title: string;
  description: string;
  path: string;
  collections: Collection[];
}
