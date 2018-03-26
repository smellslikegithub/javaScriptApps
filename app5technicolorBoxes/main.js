var effect1 = false;
var effect2 = false;


function turnEffect1On(){

	effect1 = true;
	
}

function turnEffect2On(){

	effect1 = false;
	effect2 = true;
	console.log(effect2);
}



$(document).ready(function(){

	

	function randomColor() {
		return '#' + Math.random().toString(16).slice(2,8); //convert int to hex
	};


	
	$(".smallBoxes").on("mouseenter", function(){

		if(effect1 == true || effect2 == true){
			$(this).css("background-color", randomColor());

			$(this).css("box-shadow", "0 0 10px white");

		}
		
	});

	$(".smallBoxes").on("mouseleave", function(){

		if(effect1 == true){
			$(this).css("box-shadow", "none");

		}

		else if(effect2 == true){
			$(this).css("background-color", "white");
			$(this).css("box-shadow", "white");


		}
		

	
	});


	
});