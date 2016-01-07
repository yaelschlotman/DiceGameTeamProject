main();

function main(){
	
	var player1Score = 0;
	var player2Score = 0;

	var boardLevels = [];
	var numberOfLevels = 10;

	var level;
	var currentLevel;

	for(var obstacle = 0; obstacle < numberOfLevels-1; obstacle++){
		boardLevels[obstacle] = Math.floor((Math.random() * 20) + 1);
	}
	boardLevels[numberOfLevels] = 5;

	while(!endGame(player1Score, player2Score)){

		var currentPlayer = 1;

		player1Score = playerRoll(boardLevels, player1Score, currentPlayer);

		var currentPlayer = 2;

		player2Score = playerRoll(boardLevels, player2Score, currentPlayer);
	}
	alert("The game has ended");
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
	alert("Player " + currentPlayer + ", you rolled a " + playerRoll + " and you needed a " + obstacleLimit);

	if(playerRoll > obstacleLimit){
		currentScore = currentScore + 1;
		alert(currentPlayer + ", you moved forward! Your current level is " + currentScore);
		return currentScore;

	}
	else{
		alert(currentPlayer + ", you failed to move forward! Your current level is " + currentScore);
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

function endGame(player1Score, player2Score){
	if (player1Score === 5){
		alert("Player 1 won the game");
		return true;
	}
	else if(player2Score === 5){
		alert("Player 2 won the game");
		return true;
	}
	else{
		return false;
	}
}

