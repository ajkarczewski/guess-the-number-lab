const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    do {
      this.prevGuesses.push(this.playerGuess())
      this.render()
  
    } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
  },

  getGuess: function() {
      let playerChoice

      playerChoice = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))

      while (playerChoice > this.biggestNumber || playerChoice < this.smallestNum || isNaN(playerChoice)) parseInt(prompt(`Please enter a valid number`))

      return playerChoice

      } 
        
  } 

//* Ask to review do while loops *

/*
    - Hint: this is an excellent use for a while loop (or even a do...while loop!)
5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
    - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
    - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
    - Hints:
        - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may not have built your program to use any, that's ok if that's the case!)
        - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
        - The list of previous guesses can be generated using the array `join` method.
6. The `play` method should end (`return`) when the guess matches `secretNum`.*/
