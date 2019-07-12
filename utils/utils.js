const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const randomDataSet = {
  name: [
    'mitch',
    'anat',
    'josh',
    'maddison',
    'lucy',
    'ruth',
    'anat',
    'paul',
    'natalia',
    'hannah',
    'ant',
    'alex',
    'tom',
    'izzi',
    'david',
  ],
  allergies: ['nuts', 'shell-fish', 'pepper', 'milk', 'eggs', 'wheat'],
  hasReserved: [true, false],
  alphabet: characters.split(''),
};

const createRandomString = (randomStrLen) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < randomStrLen; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
};

const createRandomNumber = (limit) => Math.ceil(Math.random() * limit);
const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

const getMultipleItems = (items, fixedLength) => {
  const arr = [];
  let loopDuration = typeof fixedLength === 'number' ? fixedLength : items.length;
  for (let i = 0; i < loopDuration; i++) {
    if (typeof fixedLength === 'number') arr.push(getRandomItem(items));
    else {
      const randomNum = Math.random();
      if (randomNum < 0.35) arr.push(items[i]);
    }
  }
  return arr;
};

const randomObjectGenerator = (objectShape) => {
  const typeTable = {
    single: (items) => getRandomItem(items),
    multiple: (items, fixedLength = 'random') => getMultipleItems(items, fixedLength),
    number: () => createRandomNumber(100),
  };
  return Object.entries(objectShape).reduce((randomItem, [key, dataType]) => {
    randomItem[key] = typeTable[dataType.number](randomDataSet[key], dataType.fixedNumber);
    return randomItem;
  }, {});
};

const randomListGenerator = (listLength, itemGenerator) => {
  return Array.from({ length: listLength }, itemGenerator);
};

console.log(
  randomListGenerator(10, () =>
    randomObjectGenerator({
      name: { number: 'single' },
      allergies: { number: 'multiple' },
    })
  )
);

module.exports = { randomListGenerator, randomObjectGenerator, createRandomString, createRandomNumber, getRandomItem };
