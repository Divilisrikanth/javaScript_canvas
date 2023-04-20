const canvas=document.getElementById("mycircle")

canvas.width = window.innerWidth;
canvas.height=window.innerHeight;

 const context =canvas.getContext("2d")

 let mouse={
     x:undefined,
     y:undefined,
 };
 let hex =["0","1","2","3","4","5","6","7","8","9","A","B","c","D","E","F"];
 function randomColor(){
    let color="#";
     for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
     }
     return color;
 }
 canvas.addEventListener("click",(e)=>{
     mouse.x=e.x;
     mouse.y=e.y;
     console.log(mouse)
     context.beginPath()
     context.arc(mouse.x,mouse.y,50,0,2*Math.PI);
     context.stroke() 
     context.fillStyle=randomColor();
     context.fill()
     
});


