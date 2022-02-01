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
      this.prevGuesses.push(this.getGuess())
      this.render()
  
    } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
  },

  getGuess: function() {
      let playerChoice

      playerChoice = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))

      while (playerChoice > this.biggestNumber || playerChoice < this.smallestNum || isNaN(playerChoice)) parseInt(prompt(`Please enter a valid number`))

      return playerChoice

      }, 

      render: function() {
        let msg

        if(this.prevGuesses[this.prevGuesses.length -1] === this.secretNum) {
          msg = `Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? "guesses" : "guess"}!`
        } else {
          msg = `Your guess is too ${
            this.prevGuesses[this.prevGuesses.length -1] > this.secretNum ? "high" : "low"
          }\nPrevious guesses: ${this.prevGuesses.join(", ")}`
        }


        alert(msg)

      }
        
  } 

  game.play()

