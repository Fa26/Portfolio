function setup() { 
	createCanvas(innerWidth, innerHeight);
	strokeWeight(2);
	
	// noStroke();
	// fill(0, 102);//transparent
  
  } 
  
  function draw() { 
	//get the pencil effect by using mouseX/Y and pmouseX/Y (previous) inbuilt positions connecting where the mouse current is and where it was
	line(mouseX, mouseY, pmouseX, pmouseY);//line command takes 4 arguments starting x&y and ending x&y
	// ellipse(mouseX, mouseY, 20, 20);
	  
  }
