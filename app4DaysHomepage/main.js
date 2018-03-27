function findDay(){

	var date = new Date();
	var day = date.getDay();

	var dateToString = String(date);

	var days= ["Sunday" , "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var buttonsIds= ["day0","day1","day2","day3","day4","day5","day6",];

	document.getElementById("day").innerHTML = "The Day Is " +days[day];
	document.getElementById("dateTime").innerHTML = dateToString.substring(4,25);
	document.getElementById(buttonsIds[day]).style.border = "1px solid";
}