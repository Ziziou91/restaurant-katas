# calculateTakings

It's getting busy and the restaurant needs to work out the total takings from tonight's tables

• Write a function `calculateTakings` that goes through an array of table objects to find the total of all the bills.

```js
calculateTakings([{ tableNo: 10, bill: 34.5 }]); // should return 34.5
```

```js
calculateTakings([{ tableNo: 10, bill: 34.5 }, { tableNo: 13, bill: 19 }, { tableNo: 13, bill: 20 }]); // should return 73.5;
```

# countGuests

The manager of the restaurant wants to get an idea of how busy the night is by finding the total number of all the guests at each table.

• Write a function that takes an array of guest arrays, storing the names of the guests at a given table, and find the total number of all the guests dining at the restaurant.

```js
countGuests([]); // should return  0
```

```js
countGuests([['harry', 'sally']]); // should return  2
```

```js
countGuests([['harry', 'sally'], ['bob', 'alice', 'harpreet'], ['jonny', 'natalia', 'paul', 'anat']]); // should return 9;
```

# 
