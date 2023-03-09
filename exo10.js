maDiv = document.getElementById("jeje");


maDiv.addEventListener("mouseover", Survole);
maDiv.addEventListener("mouseout", SurvolePas);

maDiv.addEventListener("click", Click);


function Survole(evenement){
    evenement.target.innerHTML = "Tu me survole";
    evenement.target.className = "classS";
}

function SurvolePas(evenement){
    evenement.target.innerHTML = "Je ne suis pas survolé";
    evenement.target.className = "classSP";
}

function Click(evenement){
    evenement.target.innerHTML = "Je me suis fais cliqué dessus ";
    evenement.target.className = "classC";
}
