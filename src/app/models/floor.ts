import { Room } from './room';

export interface Floor {
  id: string;
  path: string;
  isActive: boolean;
  img: string;
  imgHover: string;
  rooms: Room[];
}
