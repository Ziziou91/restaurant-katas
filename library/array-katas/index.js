exports.countReservations = (tables) => {
  return tables.filter((table) => table).length;
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
