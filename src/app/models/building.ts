import { Interior } from './interior';

export interface Building {
  id: string;
  title: string;
  path: string;
  img: string;
  imgMobile: string;
  interiors: Interior[];
}
