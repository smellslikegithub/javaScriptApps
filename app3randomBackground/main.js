
function randomNumber(low, high){

	var random = Math.round(Math.random() * (high - low) + low);

	return random;
}


function randomColor(){

	var rgb = [];

	for(var i=0; i<3; i++){

		rgb.push( this.randomNumber(0,255));
	}

	
	var rgbColor = "rgb(" + rgb[0] +"," + rgb[1] +"," + rgb[2]+")";
	console.log(rgbColor);
	document.getElementById("body1").style.background = rgbColor;
}