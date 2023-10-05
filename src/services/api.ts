import { faker } from '@faker-js/faker';
import { iUser } from '../models/User';
import { iMessage } from '../models/Message';

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

export const createMessage = (id: number, user: iUser, avatar: iUser) => ({
  id,
  text: faker.lorem.sentence(),
  date: '2200',
  user: faker.datatype.boolean() ? user : avatar,
});

export const getMessages = async (user: iUser, avatar: iUser) => {
  const array = Array.from(Array(faker.number.int(100)).keys());

  return array.map((value: number, index: number) => {
    return createMessage(index, user, avatar);
  });
};
