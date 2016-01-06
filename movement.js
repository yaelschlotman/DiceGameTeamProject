"use strict";

//var playerOneTurn = false;

//var playerTwoTurn = false;

//var gameWon = false;





function rollDice(){
	return Math.floor((Math.random() * 20) + 1);
}


obstacleLog();


function playerOneTurn(){
	var playerOneTurn = true;
	console.log("Player 1's Turn");
	return playerOneTurn;
}

function playerTwoTurn(){
	var playerTwoTurn = true;
	console.log("Player 2's turn");
	return playerOneTurn;
}

/*while(!gameWon){
	//Game();          run game
}*/



function initiateGame(){
	//generate board game;
}

initiateGame();


function Game(){

	//initiate player 1 turn;
/*	while(playerOneTurn){
		run game for player One
	}
	while(playerTwoTurn){
		run game for player Two
	}
	*/
}



function obstacleLog(){

	var outcome = rollDice();
	console.log("you rolled a " + outcome);

	if(outcome === 1){
		//moveBackward();
		console.log("Go back one space");
	}
	else if(outcome === 20){
		//moveForward();
		//moveForward();
		console.log("Go forward two spaces");
	}

	else if(outcome >= 4){
		//moveForward();
		console.log("Go forward one space");
	}
	else{
		console.log("stay put");
	}
}

function obstacleRock(){

	var outcome = rollDice();
	console.log(outcome);

	if(outcome === 1){
				//moveBackward();
				console.log("Go back one space");
			}
			else if(outcome === 20){
		//moveForward();
		//moveForward();
		console.log("Go forward two spaces");
	}


	else if(outcome >= 8){
		//moveForward();
		console.log("Go forward one space");
	}
	else{
		console.log("stay put");
	}

}

function obstacleManhole(){

	var outcome = rollDice();
	console.log(outcome);

	if(rollDice() === 1){
		//moveBackward();
		console.log("Go back one space");
	}
	else if(rollDice() === 20){
		//moveForward();
		//moveForward();
		console.log("Go forward two spaces");
	}

	else if(rollDice() >= 12){
		//moveForward();
		console.log("Go forward one space");
	}
	else{
		console.log("stay put");
	}

}

function obstacleFence(){


	var outcome = rollDice();
	console.log(outcome);

	if(outcome === 1){
		//moveBackward();
		console.log("Go back one space");
	}
	else if(outcome === 20){
		//moveForward();
		//moveForward();
		console.log("Go forward two spaces");
	}

	else if(outcome >= 16){
		//moveForward();
		console.log("Go forward one space");
	}
	else{
		console.log("stay put");
	}

}

function obstacleBfence(){

	var outcome = rollDice();
	console.log(outcome);

	if(outcome === 1){
		//moveBackward();
		console.log("Go back one space");
	}
	else if(outcome=== 20){
		//moveForward();
		//moveForward();
		console.log("Go forward two spaces");
	}

	else if(outcome >= 18){
		//moveForward();
		console.log("Go forward one space");
	}
	else{
		console.log("stay put");
	}
}


/*

function moveForward(getPosition){
	var currentPosition = getPosition;
	return currentPosition++;
}

var currentPosition = 1;

moveForward(getPosition);

function getPosition(currentPosition){
	return currentPosition;
}



if(player1Score == 10){
	console.log("Player 1 wins!");
}

if(player2Score == 10){
	console.log("Player 2 wins!");
}

*/}}