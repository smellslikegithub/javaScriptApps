var globalChoice = "null";

function cellClicked(id){

	document.getElementById(id).style.background = globalChoice;
}

function saveChoice(id){

	globalChoice = id;

}

function resetColors(){

	globalChoice = "null";

	for(var i=1; i<=15; i++){
		document.getElementById(i).style.background = "white";

	}
}

