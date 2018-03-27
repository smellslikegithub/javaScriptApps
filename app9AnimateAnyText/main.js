var collection = [];

function print(val){

	console.log(val);
}


$(document).ready(function(){


	$("#userText").on('keyup', function(){

		var value = $(this).val();
		$("#displayListHeading").text(value);
		
	});

	$("#mainButton").on('click',function(){

		var val = $("#userText").val();

		$("#displayList").text("");

		for(var i =0; i<val.length; i++){

			if(val[i] == " "){

				$("#displayList").append("<li>"+ val[i]+"&nbsp;"+"</li>");
			}
			else{

				$("#displayList").append("<li>"+ val[i] +"</li>");
			}
			
		}
	});


});