exports.makePositive = (total) => {
  return Math.sqrt(total * total);
};
exports.calculateChange = (cash, bill) => {
  return cash - bill ? cash - bill : 'no change required';
};
exports.happyHour = (price, time) => {
  return time >= 5 && time <= 8 ? price * 0.8 : price;
};
exports.addServiceCharge = (price) => {
  return Math.floor(price * 115) / 100;
};
