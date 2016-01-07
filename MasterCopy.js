
var numberOfPlayers;
var numberOfSpaces;
var boardSpaces = [];
var players = [];
var obstacleThresholds = [];

function getUserInput(Message){
	var userData
	userData = window.prompt(Message)
	return userData
}
function populatePlayersArray(numberOfPlayers,players){
    var playerName;
    while (numberOfPlayers !== players.length){
	    playerName = window.prompt("Enter Name.");
	    players.push(playerName);
	}
	return players
}
function populateBoardSpaceArray(numberOfSpaces,boardSpaces)
    var spaceNumber;
    while (numberOfSpaces !== boardSpaces.length){
        spaceNumber = 1;
        boardSpaces.push(spaceNumber);
        spaceNumber++;
    }
    return boardSpaces
}
function populateObstacleThresholdArray(numberOfSpaces,obstacleThresholds){
    var randomThreshold
    while (numberOfSpaces !== obstacleThresholds.length){
        randomThreshold = Math.floor((Math.random() * 16) + 4);
        obstacleThresholds.push(randomThreshold)
    }
}

function askUserForNumberOfPlayers (){
    var Message;
    var numberOfPlayers
    Message = "How many players?"
    numberOfPlayers = getUserInput(Message)
    return numberOfPlayers
}
function askUserForNumberOfSpaces (){
    var Message;
    var numberOfSpaces
    Message = "How many spaces to play to?"
    numberOfSpaces = getUserInput(Message)
    return numberOfSpaces
}

function rollDice(){
	var diceOutcome
	diceOutcome = Math.floor((Math.random() * 20) + 1);
	return diceOutcome;
}
