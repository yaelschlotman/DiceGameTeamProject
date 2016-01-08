"use strict";
function getUserInput(Message){
	var userData;
	userData = window.prompt(Message);
	return userData;
}

function populatePlayersArray(numberOfPlayers,playerNames){
    var nameInput;
    while (numberOfPlayers !== playerNames.length){
	    nameInput = getUserInput("Enter name:");
	    playerNames.push(nameInput);
	}
	return playerNames;
}

function getCurrentObstacle(obstacleThreshold){
    if (obstacleThreshold > 15){
        return "mountain";
    }
    else if (obstacleThreshold > 10){
        return "river";
    }
    else if (obstacleThreshold > 5){
        return "boulder";
    }
    else{
        return "stump";
    }
}

function getObstacleThreshold(obstacleName){
    if (obstacleName === "mountain"){
        return 16;
    }
    else if (obstacleName === "river"){
        return 12;
    }
    else if (obstacleName === "boulder"){
        return 8;
    }
    else if (obstacleName === "stump"){
        return 4;
    }
}

function rollDice(){
    var diceOutcome;
    diceOutcome = Math.floor((Math.random() * 20) + 1);
    return diceOutcome;
}

function playerRoll(boardLevels, currentScore, currentPlayer){
    var playerRoll;
    var currentObstacle;
    var obstacleThreshold;
    var currentScore;

    playerRoll = rollDice();
    currentObstacle = getCurrentObstacle(boardLevels[currentScore]);
    obstacleThreshold = getObstacleThreshold(currentObstacle);

    alert(currentPlayer + ", you have encountered a " + currentObstacle + ", and you will need to roll a " + obstacleThreshold + " to get past it."  + " Click \"OK\" to roll.");
    console.log(currentPlayer + ", you have encountered a " + currentObstacle + ", and you will need to roll a " + obstacleThreshold + " to get past it."  + " Click \"OK\" to roll.");
    alert(currentPlayer + ", you rolled a " + playerRoll + " and you needed a " + obstacleThreshold + ".");
    console.log(currentPlayer + ", you rolled a " + playerRoll + " and you needed a " + obstacleThreshold + ".");

    if(playerRoll === 20){
        currentScore += 2;
        alert(currentPlayer + ", you have achieved a critical success, you move forward 2 spaces! Your current level is " + currentScore + ".");
        console.log (currentPlayer + ", you have achieved a critical success, you move forward 2 spaces! Your current level is " + currentScore + ".");
        return currentScore;
    }
    else if(playerRoll === 1 && currentScore > 0){
        currentScore = currentScore - 1;
        alert(currentPlayer + ", you have critically failed, you move back 1 space. Your current level is " + currentScore + ".");
        console.log (currentPlayer + ", you have critically failed, you move back 1 space. Your current level is " + currentScore + ".");
        return currentScore;
    }
    else if(playerRoll >= obstacleThreshold){
        currentScore = currentScore + 1;
        alert(currentPlayer + ", you moved forward! Your current level is " + currentScore + ".");
        console.log (currentPlayer + ", you moved forward! Your current level is " + currentScore + ".");
        return currentScore;
    }
    else{
        alert(currentPlayer + ", you failed to move forward! Your current level is " + currentScore + ".");
        console.log (currentPlayer + ", you failed to move forward! Your current level is " + currentScore + ".");
        return currentScore;
    }
}
function endGame(player1Score, player2Score,numberOfLevels,players){
    if (player1Score >= numberOfLevels && player2Score >= numberOfLevels){
    	alert("The game has ended in a tie!");
    	console.log ("The game has ended in a tie!");
    	return true;
    }

    else if (player1Score >= numberOfLevels){
        alert(players[0] + " won the game!");
        console.log (players[0] + " won the game!");
        return true;
    }
    else if(player2Score >= numberOfLevels){
        alert(players[1] + " won the game!");
        console.log(players[1] + " won the game!");
        return true;
    }
    else{
        return false;
    }
}

function populateBoardArray(numberOfLevels){
    var obstacle;
    var boardLevels = [];
    for(obstacle = 0; obstacle < numberOfLevels; obstacle++){
        boardLevels[obstacle] = Math.floor((Math.random() * 20) + 1);
    }
    return boardLevels;
}

function main(){
    var player1Score;
    var player2Score;
    var boardLevels = [];
    var numberOfLevels;
    var currentPlayer;
    var playerNames = [];
    var numberOfPlayers;

    numberOfPlayers = 2;
   
    playerNames = populatePlayersArray(numberOfPlayers,playerNames);

    player1Score = 0;
    player2Score = 0;
    numberOfLevels = getUserInput("How many levels do you want to play?");

    while (isNaN(numberOfLevels)){
        alert("User input error.");
        numberOfLevels = getUserInput("How many levels do you want to play?");
    }

    boardLevels = populateBoardArray(numberOfLevels);
        
    while(!endGame(player1Score, player2Score,numberOfLevels,playerNames)){

        currentPlayer = playerNames[0];

        player1Score = playerRoll(boardLevels, player1Score, currentPlayer);

        currentPlayer = playerNames[1];

        player2Score = playerRoll(boardLevels, player2Score, currentPlayer);
    }
}

