import readlineSync from 'readline-sync';

export const input = (msg) => readlineSync.question(msg);

export const output = (msg) => {
  console.log(msg);
};
