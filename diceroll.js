"use strict";
function getUserInput(Message){
	var userData;
	userData = window.prompt(Message);
	return userData;
}

function rollDice(){
    return Math.floor((Math.random() * 20) + 1);
}

function playerRoll(boardLevels, currentScore, currentPlayer){
    var playerRoll =  rollDice();
    //alert(playerRoll + " is the player roll");
    var obstacleName = getObstacleName(boardLevels[currentScore]);
    var obstacleLimit = getObstacleLimit(obstacleName);
    var currentScore;

    alert("Player " + currentPlayer + ", you need to roll over a " +obstacleLimit + " to get past the " +obstacleName);
    console.log("Player " + currentPlayer + ", you need to roll over a " +obstacleLimit + " to get past the " +obstacleName);
    alert("Player " + currentPlayer + ", you rolled a " + playerRoll + " and you needed a " + obstacleLimit);
    console.log("Player " + currentPlayer + ", you rolled a " + playerRoll + " and you needed a " + obstacleLimit);


    if(playerRoll === 20){
        currentScore += 2;
        alert(currentPlayer + ", you have achieved a critical success, you move forward 2 spaces!");
        console.log (currentPlayer + ", you have achieved a critical success, you move forward 2 spaces!");
        return currentScore;
    }
    else if (playerRoll === 1 && currentScore > 0){
        currentScore = currentScore - 1;
        alert(currentPlayer + ", you have critically failed, you move back 1 space.");
        console.log (currentPlayer + ", you have critically failed, you move back 1 space.");
        return currentScore;
    }

    if(playerRoll > obstacleLimit){
        currentScore = currentScore + 1;
        alert(currentPlayer + ", you moved forward! Your current level is " + currentScore);
        console.log (currentPlayer + ", you moved forward! Your current level is " + currentScore);
        return currentScore;

    }
    else{
        alert(currentPlayer + ", you failed to move forward! Your current level is " + currentScore);
        console.log (currentPlayer + ", you failed to move forward! Your current level is " + currentScore);
        return currentScore;
    }
}

function getObstacleName(obstacle){
    if (obstacle > 15){
        return "fence";
    }
    else if (obstacle > 10){
        return "manhole";
    }
    else if (obstacle > 5){
        return "rock";
    }
    else{
        return "stump";
    }
}

function getObstacleLimit(obstacle){
    if (obstacle === "fence"){
        return 16;
    }
    else if (obstacle === "manhole"){
        return 12;
    }
    else if (obstacle === "rock"){
        return 8;
    }
    else if (obstacle === "stump"){
        return 4;
    }
}

function endGame(player1Score, player2Score,numberOfLevels){
    if (player1Score >= numberOfLevels){
        alert("Player 1 won the game");
        console.log ("Player 1 won the game");
        return true;
    }
    else if(player2Score >= numberOfLevels){
        alert("Player 2 won the game");
        console.log("Player 2 won the game");
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

    player1Score = 0;
    player2Score = 0;
    numberOfLevels = getUserInput("How many levels do you want to play?");

    for(obstacle = 0; obstacle < numberOfLevels; obstacle++){
        boardLevels[obstacle] = Math.floor((Math.random() * 20) + 1);
    }

    while(!endGame(player1Score, player2Score,numberOfLevels)){

        currentPlayer = 1;

        player1Score = playerRoll(boardLevels, player1Score, currentPlayer);

        currentPlayer = 2;

        player2Score = playerRoll(boardLevels, player2Score, currentPlayer);
    }
    alert("The game has ended");
    console.log("The game has ended");
}
main();
