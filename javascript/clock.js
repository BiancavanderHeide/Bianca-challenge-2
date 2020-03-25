function setCurrentTime(){ 
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var day = today.getDate();
	var year = today.getFullYear();
	var seconds = today.getSeconds();
	
	//als de seconden, minuten of uren onder de 10 zijn, dan komt er een 0 voor
	if (seconds<10){
		seconds='0'+seconds;
	}
	if (minutes<10){
		minutes='0'+minutes;
	}
	if (hours<10){
		hours='0'+hours;
	}

	var x = window.matchMedia("(min-width: 768px)")
	if (x.matches) { // If media query matches

		var time = hours + '\n' +  minutes; //00 komt onder 00
		document.getElementById('clock').innerHTML = time;

		var month = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
		var date = day + ' ' + month[today.getMonth()] + ' ' + year; //dag maand jaar
		document.getElementById('date').innerHTML = date;
	} else {
		var time = hours + '\n' +  minutes; //00 komt onder 00
		document.getElementById('clock').innerHTML = time; 

		var month = today.getMonth()+1;
		var date = day + '-' + month + '-' + year; // 0-0-0000
		document.getElementById('date').innerHTML = date;
	}

	var x = window.matchMedia("(min-width: 1080px)")
	if (x.matches) { // If media query matches

		var time = hours + ':' + minutes + ':' + seconds; //00:00:00
		document.getElementById('clock').innerHTML = time;

		var weekday =  ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];

		var month = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
		var date = weekday[today.getDay()] + ' ' + day + ' ' + month[today.getMonth()] + ' ' + year; //dag maand jaar
		document.getElementById('date').innerHTML = date;
	}

	var x = window.matchMedia("(min-width: 1920px)")
	if (x.matches) { // If media query matches		
	    var season = ['Lente', 'Zomer', 'Herst', 'Winter'];
	    if(month == 2, 3, 4){ //maart, april, mei
	    	var weer = 'Lente';
	    } else if(month == 5, 6, 7){ //juni, juli, augustus
	    	var weer = 'Zomer';
	    } else if(month == 8, 9, 10){ //september, oktober, november
	    	var weer = 'Herst';
	    } else if(month == 11, 0, 1){ //december, januari, februari
	    	var weer = 'Winter';
	    }
	   document.getElementById('season').innerHTML = weer;   
	}

	if (hours >= 19 || hours < 6){
	  // als de tijd na 19.00 uur is of voor 6.00 uur, dan class nacht
	  document.body.className =  'night';}
	else{
	  // anders gebruik class dag
	  document.body.className = 'day';}	
}

setInterval(setCurrentTime, 1000);
setCurrentTime();