
//call whole thing as function at the end

//global variables 

var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');


function timer(){
	var currentDate = new Date();
	var clockHours = currentDate.getHours();
	var clockMinutes = ('0' + currentDate.getMinutes()).slice(-2);
	var clockSeconds = ('0' + currentDate.getSeconds()).slice(-2);


	hours.textContent = clockHours;
	minutes.textContent = clockMinutes;
	seconds.textContent = clockSeconds;
	
	var percentSeconds = clockSeconds / 60 * 100;


	console.log(percentSeconds);



	var timerBar = document.querySelector('#progress-bar');
	timerBar.style.width = percentSeconds + '%';


	
}
setInterval(timer, 1000);

//convert current time to string of six numbers and add hex hash
function colorClock(){
	var currentDate = new Date();
	var hoursStr = ('0' + currentDate.getHours()).toString(16).slice(-2);
	var minutesStr = ('0' + currentDate.getMinutes()).toString(16).slice(-2);
	var secondsStr = ('0' + currentDate.getSeconds()).toString(16).slice(-2); 
	var intToHex = [ hoursStr, minutesStr, secondsStr ];


document.body.style.backgroundColor = '#' + hoursStr + minutesStr + secondsStr;
console.log(intToHex);
/*
document.querySelector('.hex-code1').textContent = ('#' + hoursStr);
document.querySelector('.hex-code2').textContent = ( minutesStr);
document.querySelector('.hex-code3').textContent = ( secondsStr); 

/*document.getElementById("hover1").addEventListener("mouseover", hoursStr) ;
} */
}
	
setInterval(colorClock, 1000);






// connect background color hex to current time 
//document.body.style.backgroundColor = "#133e3b";
	










//var current date = new date ;
//var hours percent = mathfloor.currentdate.gethours() /24) * 100
























