module.exports = {
  countReservations: tables => {
    /* 
      The restauraunt is just about to open and you've been asked to count the number of tables that have
      been reserved.

      given an array 'tables' or boolean values, where true is a reservation. return the number of tables
      that have been reserved/
    */
    return tables.filter(table => table).length;
  },
  createKidsMenu: menu => {
    /*
        You've been asked to create a new kids menu of suitable dishes you already sell. Thankfully, all
        the dishes you need to include start with the word 'kids'.

        Given the current menu (an array of strings), go through of all the values, filter out the strings 
        that start with 'kids' and return the new array.

        Assume that the strings in menu will always be lower case.
      */
    return menu.filter(item => item.includes('kids'));
  },
  longestWait: tables => {
    /*
      It's a busy evening in the restauraunt, and lot's of tables are waiting for their food.

      Given an array of tables, return the index of the table that has been waiting the longest.

      If there are multiple tables that been waiting the longest amount of time, return the index
      of the first table in the array.
    */
    return tables.indexOf(Math.max(...tables));
  },
  splittingTheBill: amounts => {
    /*
      One of the table have decided they want to split the bill evenly between themselves, but all have
      different amounts of change.

      They ask you to work out how much they each owe, and then let them now how much they owe or need back.

      Given an array of amounts, find the average, and then return an array of num
      ********UNFINISHED*********
    */
  }
};
