import { iUser } from './User';

export interface iMessage {
  id: number;
  text: string;
  date: Date;
  user: iUser;
}
