module.exports = {
  calculateChange: (cash, bill) => {
    /* Your table has finished their meal, you've given them the bill
          and they have put their money on the table. Work out what change you need to 
          give your customers back. 
          
          Assume the amount of cash the customer gives you will always be enough.

          If you've been given the exact change, return "no change required"
          */
    return cash - bill ? cash - bill : 'no change required';
  },
  happyHour: (price, time) => {
    /* The restauraunt isn't selling enough drinks, so the manager has decided to start
         offering happy hour drinks. 
         
         Every day, between the times of 5 and 8 (including these times), all drinks will be 20% off their normal price.

         Write a function that returns the cost of a customers drink depending on the time of day.

         You can assume that time and price will always be numbers.
      */
    return time >= 5 && time <= 8 ? price * 0.8 : price;
  },
  addServiceCharge: price => {
    /* 
        It's your first day on the job and the till isn't working, oh no!

        Given to price of a meal, you need add the restaurants service charge, which
        is 15%, and return the total.

        The total should always be rounded down to two decimal places
      */

    return Math.floor(price * 115) / 100;
  }
};
