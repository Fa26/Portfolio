const grid = document.querySelector(".grid")


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

	createBoard();
  } 


  function createBoard(){
	const grid = document.querySelector(".grid")

	for(let i=0; i<100 ; i ++){
		let div = document.createElement("div");
		grid.appendChild(div)
	}
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
	const stack = `Html,css,js,React / Rails, Python, Java /Postgreslq /Git,Threejs`
	textAbout.style.fontSize="1.7rem"
	textAbout.textContent=stack

  }

  function moreMe(){
	const textAbout=document.getElementById("textAbout")
	const textMore = `Help! Im a / designer /lover cat / lover plant / writter / scuba diving / swimming /trapped in a programmer body`
	textAbout.textContent= textMore
  }
