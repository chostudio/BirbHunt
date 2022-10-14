class GameState {
    static MENU = new GameState('menu')
    static PLAYING = new GameState('playing')
    static GAME_OVER = new GameState('game_over')

    constructor(name) {
        this.name = name
    }
    toString() {
        return `GameState.${this.name}`
    }
}

var score;
var shots;
var birb = document.createElement("button");
var wave;
var startRetry = document.createElement("button");
var gameState = GameState.MENU






//functionality for the birds, points, etc.

//moving the birds

//cursor on click

//points
