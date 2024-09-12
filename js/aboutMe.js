const grid = document.querySelector(".grid")


function setup() { 
	createCanvas(innerWidth, innerHeight);
	strokeWeight(3);
	//stroke('coral');
	fill('rgba(100%, 0%, 100%, 0.5)');
	
	
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
	const colores=["green","coral","purple","yellow","pink","orange","brown"]
	const num = Math.floor((Math.random() * (6 - 0) + 0));
	const grid = document.querySelector(".grid")

	for(let i=0; i<100 ; i ++){
		
		let div = document.createElement("div");
		grid.appendChild(div)
		div.style.backgroundColor=colores[num]
	}
  }
  
  function draw() { 
	
	//get the pencil effect by using mouseX/Y and pmouseX/Y (previous) inbuilt positions connecting where the mouse current is and where it was
	//line(mouseX, mouseY, pmouseX, pmouseY);//line command takes 4 arguments starting x&y and ending x&y
	ellipse(mouseX, mouseY, 25, 25);
	  
  }

  function education(){
	const textAbout=document.getElementById("textAbout")
	const education =`Barchelotte Degree in Computer Science,UNAM`
	textAbout.textContent=education
	

  }

  function techStack(){
	const textAbout=document.getElementById("textAbout")
	const stack = `Html,css,js,React,Tailwindcss / Rails, Python, Java /Postgreslq,slq /Git,Threejs`
	textAbout.textContent=stack

  }

  function moreMe(){
	const textAbout=document.getElementById("textAbout")
	const textMore = `Help! Im a / designer /lover cat / lover plant / writter / scuba diving / swimming /trapped in a programmer body`
	textAbout.textContent= textMore
  }
