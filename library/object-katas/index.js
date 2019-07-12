exports.calculateTakings = (tables) => tables.reduce((takings, { bill }) => takings + bill, 0);

exports.countGuests = (guests) => guests.reduce((guestCount, { length }) => guestCount + length, 0);

exports.createSpecialsMenu = ({ starter, main, dessert }) => {
  return `Today's specials: starter - ${starter}, main - ${main}, dessert - ${dessert}`;
};
