let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let anne = document.getElementById("year");
let mois = document.getElementById("month");
let jour = document.getElementById("day");

setInterval(()=>{
	let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") +currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") +currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") +currentTime.getSeconds();
},1000)


let date = new Date()

var monthNames = ["January", "February", "March", "April", "May", "June", 
	  "July", "August", "September", "October", "November", "December"];
var monthName = monthNames[date.getMonth()];

var dayList = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday"];
var daySelected = dayList[date.getDay()];

year.innerHTML = date.getFullYear();
month.innerHTML = monthName;
day.innerHTML = daySelected;
dayNumber.innerHTML = date.getDate();

function appartlisting(){
	window.location.href = "Appartmentlistings.html";
}

function homeListing(){
	window.location.href = "homeListing.html";
}

function cottageListing(){
	window.location.href = "cottageListing.html";
}