"use strict";

function player1CriticalFailure(player1){
	player1--;
	return player1;
}
function player2CriticalFailure(player2){
	player2--;
	return player2;
}
function player1Success(player1){
	player1++;
	return player1;
}
function player2Success(player2){
	player2++;
	return player1;
}
function player1CriticalSuccess(player1){
	player1 = player1 + 2;
	return player1;
}
function player2CiticalSuccess(player2){
	player2 = player2 + 2;
	return player2;
}

function player1FallenOffBoard(player1){
	if (player1 === 0) {
		player1 = 1;
	} 
	return player1;
}
function player2FallenOffBoard(player2){
	if (player2 === 0) {
		player2 = 1; 
	}
	return player2;
}
function description1(diceOutcome){
	console.log("You have encountered a small rock (player must roll 4 or higher to succeed.)");
	obstacleRock(diceOutcome);
}
function description2(diceOutcome){
	console.log("You have encountered a log (player must roll 8 or higher to succeed.)");
	obstacleLog(diceOutcome);
}
function description3(diceOutcome){
	console.log("You have encountered an open manhole (player must roll 12 or higher to succeed)");
	obstacleManhole(diceOutcome);
}
function description4(diceOutcome){
	console.log("You have encountered a chain link fence (player must roll 16 or higher to succeed)");
	obstacleFence(diceOutcome);
}
function description5(diceOutcome){
	console.log("You have encountered the final obstacle, a chain link fence but this one has barbed wire on top (player must roll 18 or higher to succeed)");
	obstacleBfence(diceOutcome);
}
function getSpace1Description(space1,diceOutcome){
	console.log("you are on space 1");
	if (space1 === 1) {
		description1(diceOutcome);
	} else if (space1 === 2){
		description2(diceOutcome);
	} else if (space1 === 3){
		description3(diceOutcome);
	} else if (space1 === 4){
		description4(diceOutcome);
	}
}
function getSpace2Description(space2,diceOutcome){
	console.log("you are on space 2");
	if (space2 === 1) {
		description1(diceOutcome);
	} else if (space2 === 2){
		description2(diceOutcome);
	} else if (space2 === 3){
		description3(diceOutcome);
	} else if (space2 === 4){
		description4(diceOutcome);
	}
}
function getSpace3Description(space3,diceOutcome){
	console.log("you are on space 3");
	if (space3 === 1) {
		description1(diceOutcome);
	} else if (space3 === 2){
		description2(diceOutcome);
	} else if (space3 === 3){
		description3(diceOutcome);
	} else if (space3 === 4){
		description4(diceOutcome);
	}
}
function getSpace4Description(space4,diceOutcome){
	console.log("you are on space 4");
	if (space4 === 1) {
		description1(diceOutcome);
	} else if (space4 === 2){
		description2(diceOutcome);
	} else if (space4 === 3){
		description3(diceOutcome);
	} else if (space4 === 4){
		description4(diceOutcome);
	}
}
function getSpace5Description(space5,diceOutcome){
	console.log("you are on space 5");
	if (space5 === 1) {
		description1(diceOutcome);
	} else if (space5 === 2){
		description2(diceOutcome);
	} else if (space5 === 3){
		description3(diceOutcome);
	} else if (space5 === 4){
		description4(diceOutcome);
	}
}
function getSpace6Description(space6,diceOutcome){
	console.log("you are on space 6");
	if (space6 === 1) {
		description1(diceOutcome);
	} else if (space6 === 2){
		description2(diceOutcome);
	} else if (space6 === 3){
		description3(diceOutcome);
	} else if (space6 === 4){
		description4(diceOutcome);
	}
}
function getSpace7Description(space7,diceOutcome){
	console.log("you are on space 7");
	if (space7 === 1) {
		description1(diceOutcome);
	} else if (space7 === 2){
		description2(diceOutcome);
	} else if (space7 === 3){
		description3(diceOutcome);
	} else if (space7 === 4){
		description4(diceOutcome);
	}
}
function getSpace8Description(space8,diceOutcome){
	console.log("you are on space 8");
	if (space8 === 1) {
		description1(diceOutcome);
	} else if (space8 === 2){
		description2(diceOutcome);
	} else if (space8 === 3){
		description3(diceOutcome);
	} else if (space8 === 4){
		description4(diceOutcome);
	}
}
function getSpace9Description(space9,diceOutcome){
	console.log("you are on space 9");
	if (space9 === 1) {
		description1(diceOutcome);
	} else if (space9 === 2){
		description2(diceOutcome);
	} else if (space9 === 3){
		description3(diceOutcome);
	} else if (space9 === 4){
		description4(diceOutcome);
	}
}
function getSpace10Description(space10,diceOutcome){
	console.log("you are on space 10");
	description5(diceOutcome);
}
function victory(){
	console.log("You have cleared the 10th and final obstacle and have won the game!");
}
function getPlayer1space(player1,space1,space2,space3,space4,space5,space6,space7,space8,space9,space10,diceOutcome){
	if (player1 === 1) {
		getSpace1Description(space1,diceOutcome);
	} else if (player1 === 2){
		getSpace2Description(space2,diceOutcome);
	} else if (player1 === 3){
		getSpace3Description(space3,diceOutcome);
	} else if (player1 === 4){
		getSpace4Description(space4,diceOutcome);
	} else if (player1 === 5){
		getSpace5Description(space5,diceOutcome);
	} else if (player1 === 6){
		getSpace6Description(space6,diceOutcome);
	} else if (player1 === 7){
		getSpace7Description(space7,diceOutcome);
	} else if (player1 === 8){
		getSpace8Description(space8,diceOutcome);
	} else if (player1 === 9){
		getSpace9Description(space9,diceOutcome);
	} else if (player1 === 10){
		getSpace10Description(space10,diceOutcome);
	} else if (player1 >= 11){
		victory();
	}
}
function getPlayer2space(player2,space1,space2,space3,space4,space5,space6,space7,space8,space9,space10,diceOutcome){
	if (player2 === 1) {
		getSpace1Description(space1,diceOutcome);
	} else if (player2 === 2){
		getSpace2Description(space2,diceOutcome);
	} else if (player2 === 3){
		getSpace3Description(space3,diceOutcome);
	} else if (player2 === 4){
		getSpace4Description(space4,diceOutcome);
	} else if (player2 === 5){
		getSpace5Description(space5,diceOutcome);
	} else if (player2 === 6){
		getSpace6Description(space6,diceOutcome);
	} else if (player2 === 7){
		getSpace7Description(space7,diceOutcome);
	} else if (player2 === 8){
		getSpace8Description(space8,diceOutcome);
	} else if (player2 === 9){
		getSpace9Description(space9,diceOutcome);
	} else if (player2 === 10){
		getSpace10Description(space10,diceOutcome);
	} else if (player2 >= 11){
		victory();
	}
}
function generateSpace1(){
	var space1; 
	space1 = Math.floor((Math.random()*4)+1);
	return space1;
}
function generateSpace2(){
	var space2; 
	space2 = Math.floor((Math.random()*4)+1);
	return space2;
}
function generateSpace3(){
	var space3; 
	space3 = Math.floor((Math.random()*4)+1);
	return space3;
}
function generateSpace4(){
	var space4; 
	space4 = Math.floor((Math.random()*4)+1);
	return space4;
}
function generateSpace5(){
	var space5; 
	space5 = Math.floor((Math.random()*4)+1);
	return space5;
}
function generateSpace6(){
	var space6; 
	space6 = Math.floor((Math.random()*4)+1);
	return space6;
}
function generateSpace7(){
	var space7; 
	space7 = Math.floor((Math.random()*4)+1);
	return space7;
}
function generateSpace8(){
	var space8; 
	space8 = Math.floor((Math.random()*4)+1);
	return space8;
}
function generateSpace9(){
	var space9; 
	space9 = Math.floor((Math.random()*4)+1);
	return space9;
}
function generateSpace10(){
	var space10;
	var finalSpaceDifficulty;
	finalSpaceDifficulty = 5;
	space10 = finalSpaceDifficulty;
	return space10;
}
function setPlayer1ToFirstSpace(){
	var player1;
	var valueSpace1;
	valueSpace1 = 1;
	player1 = valueSpace1;
	return player1;
}
function setPlayer2ToFirstSpace(){
	var player2;
	var valueSpace1;
	valueSpace1 = 1;
	player2 = valueSpace1;
	return player2;
}

function rollDice(){
	var diceOutcome;
	diceOutcome = Math.floor((Math.random() * 20) + 1);
	return diceOutcome;
}

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
function obstacleLog(diceOutcome){
	console.log("you rolled a " + diceOutcome);

	if(diceOutcome === 1){
		if (gameturn%2 === 0){
			player1 = player1CriticalFailure(player1); 
			console.log("You go back one space");
			return player1;
		} else {
			player2 = player2CriticalFailure(player2);
			console.log("You go back one space");
			return player2; 
		}
	}
	else if(diceOutcome === 20){
		if (gameturn%2 === 0){
			player1 = player1CriticalSuccess(player1);
			console.log("You go forward two spaces");
			return player1; 

		} else {
			player2 = player2CriticalSuccess(player2);			
			console.log("You go forward two spaces");
			return player2; 
		}

	}else if(diceOutcome >= 4){
		if (gameturn%2 === 0){
			player1 = player1Success(player1);
			console.log("You go forward one space");
			return player1; 
		} else {
			player2 = player2Success(player2); 
			console.log("You go forward one space");
			return player2;
		}
	}else{
		console.log("You fail the obstacle and stay put");
	}
}

function obstacleRock(diceOutcome){
	console.log("you rolled a " + diceOutcome);

	if(diceOutcome === 1){
		if (gameturn%2 === 0){
			player1 = player1CriticalFailure(player1); 
			console.log("You go back one space");
			return player1;
		} else {
			player2 = player2CriticalFailure(player2);
			console.log("You go back one space");
			return player2; 
		}
	}
	else if(diceOutcome === 20){
		if (gameturn%2 === 0){
			player1 = player1CriticalSuccess(player1);
			console.log("You go forward two spaces");
			return player1; 

		} else {
			player2 = player2CriticalSuccess(player2);			
			console.log("You go forward two spaces");
			return player2; 
		}

	}else if(diceOutcome >= 8){
		if (gameturn%2 === 0){
			player1 = player1Success(player1);
			console.log("You go forward one space");
			return player1; 
		} else {
			player2 = player2Success(player2); 
			console.log("You go forward one space");
			return player2;
		}
	}else{
		console.log("You fail the obstacle and stay put");
	}
}

function obstacleManhole(diceOutcome){
	console.log("you rolled a " + diceOutcome);

	if(diceOutcome === 1){
		if (gameturn%2 === 0){
			player1 = player1CriticalFailure(player1); 
			console.log("You go back one space");
			return player1;
		} else {
			player2 = player2CriticalFailure(player2);
			console.log("You go back one space");
			return player2; 
		}
	}
	else if(diceOutcome === 20){
		if (gameturn%2 === 0){
			player1 = player1CriticalSuccess(player1);
			console.log("You go forward two spaces");
			return player1; 

		} else {
			player2 = player2CriticalSuccess(player2);			
			console.log("You go forward two spaces");
			return player2; 
		}

	}else if(diceOutcome >= 12){
		if (gameturn%2 === 0){
			player1 = player1Success(player1);
			console.log("You go forward one space");
			return player1; 
		} else {
			player2 = player2Success(player2); 
			console.log("You go forward one space");
			return player2;
		}
	}else{
		console.log("You fail the obstacle and stay put");
	}
}

function obstacleFence(diceOutcome){
	console.log("you rolled a " + diceOutcome);

	if(diceOutcome === 1){
		if (gameturn%2 === 0){
			player1 = player1CriticalFailure(player1); 
			console.log("You go back one space");
			return player1;
		} else {
			player2 = player2CriticalFailure(player2);
			console.log("You go back one space");
			return player2; 
		}
	}
	else if(diceOutcome === 20){
		if (gameturn%2 === 0){
			player1 = player1CriticalSuccess(player1);
			console.log("You go forward two spaces");
			return player1; 

		} else {
			player2 = player2CriticalSuccess(player2);			
			console.log("You go forward two spaces");
			return player2; 
		}

	}else if(diceOutcome >= 16){
		if (gameturn%2 === 0){
			player1 = player1Success(player1);
			console.log("You go forward one space");
			return player1; 
		} else {
			player2 = player2Success(player2); 
			console.log("You go forward one space");
			return player2;
		}
	}else{
		console.log("You fail the obstacle and stay put");
	}
}

function obstacleBfence(diceOutcome){
	console.log("you rolled a " + diceOutcome);

	if(diceOutcome === 1){
		if (gameturn%2 === 0){
			player1 = player1CriticalFailure(player1); 
			console.log("You go back one space");
			return player1;
		} else {
			player2 = player2CriticalFailure(player2);
			console.log("You go back one space");
			return player2; 
		}
	}
	else if(diceOutcome === 20){
		if (gameturn%2 === 0){
			player1 = player1CriticalSuccess(player1);
			console.log("You go forward two spaces");
			return player1; 

		} else {
			player2 = player2CriticalSuccess(player2);			
			console.log("You go forward two spaces");
			return player2; 
		}

	}else if(diceOutcome >= 18){
		if (gameturn%2 === 0){
			player1 = player1Success(player1);
			console.log("You go forward one space");
			return player1; 
		} else {
			player2 = player2Success(player2); 
			console.log("You go forward one space");
			return player2;
		}
	}else{
		console.log("You fail the obstacle and stay put");
	}
}
function gameplay(){
	var space1;
	var space2;
	var space3; 
	var space4; 
	var space5; 
	var space6; 
	var space7; 
	var space8; 
	var space9; 
	var space10;
	var player1; 
	var player2; 
	var diceOutcome;
	var gameTurn;

	space1 = generateSpace1();
	space2 = generateSpace2();
	space3 = generateSpace3();
	space4 = generateSpace4();
	space5 = generateSpace5();
	space6 = generateSpace6();
	space7 = generateSpace7();
	space8 = generateSpace8();
	space9 = generateSpace9();
	space10 = generateSpace10();

	player1 = setPlayer1ToFirstSpace();
	player2 = setPlayer2ToFirstSpace();

	gameTurn = 0;

	while (player1 <= 10 || player2 <= 10){
		if (gameTurn%2 === 0){
			diceOutcome = rollDice();
			getPlayer1space(player1,space1,space2,space3,space4,space5,space6,space7,space8,space9,space10,diceOutcome);
			
		}else{
			diceOutcome = rollDice();
			getPlayer2space(player2,space1,space2,space3,space4,space5,space6,space7,space8,space9,space10,diceOutcome);
			
		}
		player1 = player1FallenOffBoard(player1);
		player2 = player2FallenOffBoard(player2);

		gameTurn++;
	}

}
gameplay()