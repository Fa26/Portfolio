

function setup() { 
	createCanvas(innerWidth, innerHeight);
	strokeWeight(3);
	//stroke('coral');
	colorMode(HSB);
	
	
	// noStroke();
	 fill(0, 102);//transparent
	 const edu = document.getElementById("edu").addEventListener("click",()=>{
		education()
	})
	const teck = document.getElementById("tech").addEventListener("click",()=>{
		techStack()
	})
	const more = document.getElementById("more").addEventListener("click",()=>{
		moreMe()
	})
  } 
  
  function draw() { 
	
	//get the pencil effect by using mouseX/Y and pmouseX/Y (previous) inbuilt positions connecting where the mouse current is and where it was
	line(mouseX, mouseY, pmouseX, pmouseY);//line command takes 4 arguments starting x&y and ending x&y
	//ellipse(mouseX, mouseY, 20, 20);
	  
  }

  function education(){
	const textAbout=document.getElementById("textAbout")
	const education =`Barchelotte Degree in Computer Science,UNAM`
	textAbout.textContent=education
	

  }

  function techStack(){
	const textAbout=document.getElementById("textAbout")
	const stack = `My favourite Stack:`
	textAbout.textContent=stack

  }

  function moreMe(){
	const textAbout=document.getElementById("textAbout")
	const textMore = `Help! Im a  designer \ lover cat \ lover plant \ writter \ trapped in a programmer body`
	textAbout.textContent= textMore
  }
