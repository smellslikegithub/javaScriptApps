var start,end,diff;

var misHit = 0;
var playCounter = 0;
var levelPLays = 5;
var scoreAvg = 0;

var levels = [1];
var scores = [-1];
var levelMishits = [-1];

function randomTimeInMseconds(){

	var time = Math.round((Math.random() *(10 - 2) +2));
	//console.log(time);
	return time*1000;

}

function setPosition(){

	

		var x = (Math.random() * ($("#gameMonitorId").width() - 50)).toFixed();
    	var y = (Math.random() * ($("#gameMonitorId").height() - 50)).toFixed();

		$("#gameCubeId").css({

			'left' : x+'px',
			'top' :  y+'px'
		});

		$("#gameCubeId").show();


}

function game(){

	playCounter = playCounter +1;

	if(playCounter == levelPLays){

		scores[0] = scoreAvg/levelPLays;
		levelMishits[0] = misHit;

		alert("The average for level 1 = " + scores[0] + "Total mishit = "+ levelMishits[0]);
		return;

	}
	start = +new Date();
	setPosition();

}


$(document).ready(function(){


	$("#gameCubeId").on('click', function(e){
		e.stopPropagation();
		end = +new Date();
		diff = end-start;
		$("#gameCubeId").hide();
		$("#timeInMs").html(diff + "ms");

		scoreAvg = scoreAvg + diff;
		timeoutID = window.setTimeout(game, parseInt(randomTimeInMseconds()));

	});

	

	$("#gameMonitorId").on('click', function(e){
		e.stopPropagation();
		misHit = misHit + 1;
	 	$("#mishitsId").html(misHit);
	});



});

