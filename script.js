particlesJS("particles-js", {

particles:{

number:{value:80},

size:{value:3},

move:{speed:2}

}

});


function openProject(id){

let title="";

let desc="";


if(id==1){

title="Trail Card Inc";

desc="Worked on Health Cloud, integrations, Apex, LWC, deployment, API integrations.";

}


if(id==2){

title="Sobeys Inc";

desc="Implemented Salesforce CPQ, pricing rules, quote templates, integrations.";

}


if(id==3){

title="Waste Management";

desc="Developed integrations, Apex, Visualforce, data model.";

}


if(id==4){

title="Carrier Inc";

desc="Built community cloud portal, integrations, SFCC backend.";

}


document.getElementById("modal").style.display="block";

document.getElementById("modal-title").innerHTML=title;

document.getElementById("modal-desc").innerHTML=desc;

}


function closeModal(){

document.getElementById("modal").style.display="none";

}