import { faker } from '@faker-js/faker';
import { iUser } from '../models/User';

const delay = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const createUser = (id: number) => ({
  id,
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
  music: faker.music.songName(),
});

export const getUser = async () => {
  const array = Array.from(Array(20).keys());

  await delay(1000);

  return array.map(createUser);
};

export const createMessage = (
  id: number,
  user: iUser,
  avatar: iUser,
  previousDate: Date,
  today: Date
) => {
  faker.date.between({ from: '', to: '' });
  return {
    id,
    text: faker.lorem.sentence(),
    date: faker.date.between({ from: previousDate, to: today }),
    user: faker.datatype.boolean() ? user : avatar,
  };
};

export const getMessages = async (user: iUser, avatar: iUser) => {
  const array = Array.from(Array(faker.number.int(100)).keys());

  let previousDate = new Date('1999-12-28');

  const today = new Date();

  return array.map((value: number, index: number) => {
    const message = createMessage(index, user, avatar, previousDate, today);
    previousDate = message.date;
    return message;
  });
};
