// eslint-disable-next-line import/prefer-default-export
export const getRandomIntInclusive = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

export const getRandomElement = (coll) => coll[Math.floor(Math.random() * coll.length)];
