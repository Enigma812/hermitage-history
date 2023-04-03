import { Floor } from './floor';

export interface Interior {
  id: string;
  name: string;
  path: string;
  img: string;
  imgMobile: string;
  floors: Floor[];
}
