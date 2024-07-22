console.log("hola proyectos")


var react = document.getElementById("react");
var img = document.getElementById("imagenBackground")
var des= document.getElementById("des")
var linkUrl=document.getElementById("github")


react.onclick = function(){handleReact()}

const handleReact  =() =>{
    des.innerHTML="Juego creado ccon react para"
    linkUrl.href=`https://www.youtube.com/watch?v=l9wpSHhgJSs&list=RDrK_uMh-WSFI&index=2`;
   
    img.style.backgroundImage="url('./img/girl.jpg')"
    
}
