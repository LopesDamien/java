var tab = [-2, 1, 4];

function additionne(x) {
  return x + 2;
}


function affiche() {
  let x = prompt("Entrez une valeur:");
  var premierElement = tab[0];
  alert(additionne(premierElement));
  var dernierElement = tab[tab.length - 1];
  alert(additionne(dernierElement));
}

document.getElementById("bouton").addEventListener("click", affiche);
