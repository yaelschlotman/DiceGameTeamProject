"use strict";
function getUserInput(Message){
	var userData;
	userData = window.prompt(Message);
	return userData;
}

function populatePlayersArray(numberOfPlayers,players){
    var playerName;
    while (numberOfPlayers !== players.length){
	    playerName = getUserInput("Enter name:");
	    players.push(playerName);
	}
	return players;
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
    console.log(currentPlayer + ", you rolled a " + playerRoll + " and you needed a " + obstacleThreshold);

    if(playerRoll === 20){
        currentScore += 2;
        alert(currentPlayer + ", you have achieved a critical success, you move forward 2 spaces!");
        console.log (currentPlayer + ", you have achieved a critical success, you move forward 2 spaces!");
        return currentScore;
    }
    else if(playerRoll === 1 && currentScore > 0){
        currentScore = currentScore - 1;
        alert(currentPlayer + ", you have critically failed, you move back 1 space.");
        console.log (currentPlayer + ", you have critically failed, you move back 1 space.");
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

function getCurrentObstacle(obstacleThreshold){
    if (obstacleThreshold > 15){
        return "fence";
    }
    else if (obstacleThreshold > 10){
        return "manhole";
    }
    else if (obstacleThreshold > 5){
        return "rock";
    }
    else{
        return "stump";
    }
}

function getObstacleThreshold(obstacleName){
    if (obstacleName === "fence"){
        return 16;
    }
    else if (obstacleName === "manhole"){
        return 12;
    }
    else if (obstacleName === "rock"){
        return 8;
    }
    else if (obstacleName === "stump"){
        return 4;
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
        console.log (players[0] + " won the game");
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

function main(){
    var player1Score;
    var player2Score;
    var boardLevels = [];
    var numberOfLevels;
    var obstacle;
    var currentPlayer;
    var players = [];
    var numberOfPlayers;

    numberOfPlayers = 2;
   
    players = populatePlayersArray(numberOfPlayers,players)


    player1Score = 0;
    player2Score = 0;
    numberOfLevels = getUserInput("How many levels do you want to play?");
    
    for(obstacle = 0; obstacle < numberOfLevels; obstacle++){
        boardLevels[obstacle] = Math.floor((Math.random() * 20) + 1);
    }

    while(!endGame(player1Score, player2Score,numberOfLevels,players)){

        currentPlayer = players[0];

        player1Score = playerRoll(boardLevels, player1Score, currentPlayer);

        currentPlayer = players[1];

        player2Score = playerRoll(boardLevels, player2Score, currentPlayer);
    }
}

