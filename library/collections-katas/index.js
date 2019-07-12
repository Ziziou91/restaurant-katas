exports.countReservations = (tables) => {
  return tables.filter(({ hasReserved }) => hasReserved).length;
};

exports.createKidsMenu = (menu) => {
  return menu.filter((item) => item.includes('kids'));
};

exports.longestWait = (tables) => {
  return tables.indexOf(Math.max(...tables));
};

exports.splittingTheBill = (tables) => {
  return tables.map(({ bill, noOfCustomers }) => {
    return Math.ceil(bill / noOfCustomers);
  });
};

exports.checkForAllergies = (guests) => {
  return guests.some(({ allergies }) => allergies.length);
};

exports.wasEveryoneVegatarian = (tables) => {
  return tables.every(({ dishTypes }) => dishTypes.includes('veggie'));
  // The owner of the restaurant needs to check if every table on in the restaurant had at least one vegatarian customer
};

exports.collectOrders = (food, orders) => {
  // the chef needs to grab the last order from the end of a list of orders
  // grab the last order from the end of an array
};
