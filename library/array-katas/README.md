# countReservations

A restauraunt is just about to open and you've been asked to count the number of tables are are reserved.

• Given an array of `table` objects with an `hasReserved` property and a `tableNo` property, find the total number of tables that have a `hasReserved` value of `true`

# createKidsMenu

You've been asked to create a new kids menu of suitable dishes you already sell. Thankfully, all the dishes you need to include in the menu start with the word 'kids'.

• Given the `currentMenu` (an array of strings), go through of all the itmes in the array and collect all the strings that start with 'kids' and return the new array.

• You can assume that all the strings in the menu array will always be lower case.

# longestWait

It's a busy evening in the restauraunt, and lots of tables are waiting for their food.

• Given an array of tables, return the time of the table that has been waiting for the longest.

# splittingTheBill

Some of the tables have decided they want to split the bill evenly between themselves.

Each table has a `bill` property, indicating the total amount required by all the guests and a `noOfGuests` property indicating the number of guests at a table.

• You need to work out how much they each owe, by dividing the bill by the noOfGuests. In order to ensure that the diligent waiter gets a tip, each person agrees to round the amount they owe up to the nearest pound

# checkForAllergies

You receive a list of all the customers for a table in the restaurant. You need to check the list of customers to see if at least one of them has an allergy.

• Your function will take an array of customer objects for a table, each with a name property and an allergies property.

• If the customer has no allergies then the array will be empty otherwise it will contain strings describing the allergies. If at least one of the customers in the array has an allergy then the function should return `true` overall. Otherwise, if none of the customers has an allergy, the function should return `false` overall
