"use strict";
var playera;
var playerb;
var playerAscore;
var playerBscore;
var showPlayerA
var addPlayerPoint
function initScore(){
	var baseScore;
	baseScore = 1;
	return baseScore;
}
function addPoint(){
	var score;
	score = +1;
	return score;
}
function playerProgress(){
    var origScore;
    var newMove;
    var newScore;
    origScore = playerAscore;
    newMove = addPlayerPoint;
    newScore = origScore + newMove;
    return newScore;
}
function moveBack(){
	var negMove;
    negMove = -2;
    return negMove;
}
addPlayerPoint = addPoint();
console.log("add", addPlayerPoint);
playera = initScore();
console.log("Player 1 Space:", playera);
playerb = initScore();
console.log("Player 2 Space:", playerb);
playerAscore= playera + addPoint();
console.log ("Player 1 Current Position", playerAscore)
playerBscore= playerb + addPoint();
console.log ("Player 2 Current Position", playerBscore);
showPlayerA = playerProgress();
console.log("Player 1 Position", showPlayerA);