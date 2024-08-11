var today= new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();


today = mm + '/' + dd + '/' + yyyy;
var todayDate= document.getElementById("dateNow").innerHTML(today)


function setup() { 
	createCanvas(innerWidth, innerHeight);
	strokeWeight(3);
	
	
	// noStroke();
	// fill(0, 102);//transparent
  
  } 
  
  function draw() { 
	//get the pencil effect by using mouseX/Y and pmouseX/Y (previous) inbuilt positions connecting where the mouse current is and where it was
	line(mouseX, mouseY, pmouseX, pmouseY);//line command takes 4 arguments starting x&y and ending x&y
	//ellipse(mouseX, mouseY, 20, 20);
	  
  }
