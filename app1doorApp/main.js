
var tries = 0;
var jackpotDoor;

function generateRandom(){

	var min = 1;
	var max = 3;
	jackpotDoor =  Math.round(Math.random() * (max - min) + min);
	console.log("jackpot number = " + jackpotDoor);
}


function doorHover(id){

	document.getElementById(id).style.background="blue";

}

function doorHoverAway(id){

	document.getElementById(id).style.background="none";

}



function locateJackpot(id){
	console.log("jackpot number = " + jackpotDoor);
	
	id = parseInt(id);
	if(tries <2){

		if(jackpotDoor == id){

			console.log("YOU WON, YOU GOT JACKPOT");
			document.getElementById("resultBox").innerHTML = "YOU won Lucky... Dude!!!"
			tries = 99;
		}

		else{

			console.log("FAILED.. SORRY.. 1 More try!!!");
			document.getElementById("resultBox").innerHTML = "FAILED.. SORRY.. 1 More try!!!"
		}

	
	}
	else{

		console.log("Game OVER");
		if(tries > 99){
			document.getElementById("resultBox").innerHTML = "Game OVER.. You already won greedy!";
		}
		else{

			document.getElementById("resultBox").innerHTML = "Game OVER.. Better Luck Next time";
		}
		
	}

	tries = tries+1;
	

}
