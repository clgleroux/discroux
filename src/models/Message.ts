import { iUser } from './User';

export interface iMessage {
  id: number;
  text: string;
  date: string;
  user: iUser;
}
