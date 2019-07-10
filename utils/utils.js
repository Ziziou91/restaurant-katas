const createRandomItemGenerator = (items) => {
  return () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };
};

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const createRandomLetter = createRandomItemGenerator(characters.split(''));

exports.createRandomString = (length, charGenerator) => Array.from({ length }, charGenerator);
