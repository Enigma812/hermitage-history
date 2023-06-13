import { Interior } from './interior';

export interface Building {
  id: string;
  title: string;
  path: string;
  link?: string;
  img: string;
  imgMobile: string;
  interiors: Interior[];
}
