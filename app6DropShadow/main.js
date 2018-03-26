var globalRadius = 5;
function clickMe(){

	globalRadius= globalRadius+10;
	
	var box_shadow = globalRadius+"px "+globalRadius+"px "+"5px " + "#A6A6A6"; 
	box_shadow =  String(box_shadow);
	document.getElementById("picHolderId").style.boxShadow = box_shadow;
	console.log(box_shadow);
}