class GuessingGame {
    constructor() {
        this.lowBorder = 0;
        this.highBorder = 0;
    }

    setRange(min, max) {
        this.lowBorder = min;
        this.highBorder = max;
    }

    guess() {
        this.lastGuess = Math.round(((this.lowBorder + this.highBorder) / 2));
        return this.lastGuess;
    }

    lower() {
        this.highBorder = this.lastGuess;
    }

    greater() {
        this.lowBorder = this.lastGuess;
    }
}

module.exports = GuessingGame;
