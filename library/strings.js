module.exports = {
  dontTakeCheque: payment => {
    /*
            The table you have been serving have finished their meals and are ready to pay. You have been given specific
            instructions that the restaurant can take any payment method BUT cheque.

            Given a string 'payment', return a boolean false if 'payment' contains 'cheque', and true if it doesn't

            dontTakeCheque('cash card buttons') // true
            dontTake cheque('cash charming personality cheque') // false
        */
  },
  repeatTheDish: (dish, n) => {
    /*
        The restauraunts head chef is very paticular about how orders are written out. Instead of just writing the name of the dish
        and the number ordered, they insist each dish is written out in full.

        Given a string 'dish' and a number 'n', return a new string which repeats 'dish' exactly 'n' times.

        repeatTheDish('jambalaya', 4) // 'jambalayajambalayajambalayajambalaya'
        repeatTheDish('Spaghetti alla puttanesca', 2) // 'Spaghetti alla puttanescaSpaghetti alla puttanesca'
      */
  },
  removeCapitals: dish => {
    /*
      You are working on the restaurants new website and you have been asked to add all the items on the menus. The code that creates the online menu is very picky,
      and won't allow strings that contain capital letter.

      Given a string 'dish', return a new string with all of the capital letters removed.

      You can assume the only punctuation will be spaces.

      removeCapitals('Fish and Chips') // 'ish and hips'
      removeCapitals('Stroganoff') // 'troganoff'

    */
  }
};
