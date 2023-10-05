import { faker } from '@faker-js/faker';

const delay = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const getUser = async () => {
  const array = Array.from(Array(20).keys());

  await delay(1000);

  return array.map((id: number) => ({
    id,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    music: faker.music.songName(),
  }));
};
