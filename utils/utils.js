module.exports = {
  createRandomString: len => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < len; i++) {
      result += characters[Math.floor(Math.random() * charactersLength)];
    }
    return result;
  }
};
