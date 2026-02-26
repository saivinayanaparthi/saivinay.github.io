function openProject(name){

document.getElementById("modal").style.display="block";


if(name==="healthcare"){

document.getElementById("projectTitle").innerHTML="Healthcare Project";

document.getElementById("projectDesc").innerHTML=

"Built Apex, LWC, integrations, flows for healthcare system";

}


if(name==="insurance"){

document.getElementById("projectTitle").innerHTML="Insurance Project";

document.getElementById("projectDesc").innerHTML=

"Worked on Claims module, integrations and automation";

}



if(name==="banking"){

document.getElementById("projectTitle").innerHTML="Banking Project";

document.getElementById("projectDesc").innerHTML=

"Developed loan lifecycle using Apex and Lightning";

}



}



function closeProject(){

document.getElementById("modal").style.display="none";

}




/* NEW BACKGROUND ANIMATION */

const canvas = document.getElementById("bgCanvas");

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;


let particles=[];


for(let i=0;i<100;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

radius:Math.random()*2,

dx:Math.random()*1,

dy:Math.random()*1

});

}


function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);


ctx.fillStyle="gold";


particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

ctx.fill();


p.x+=p.dx;

p.y+=p.dy;


if(p.x>canvas.width) p.x=0;

if(p.y>canvas.height) p.y=0;

});


requestAnimationFrame(animate);

}


animate();