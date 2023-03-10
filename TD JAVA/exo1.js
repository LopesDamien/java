function calculerRectangle() {
    var longueur = prompt("Entrez la longueur :");
    var largeur = prompt("Entrez la largeur :");
    var perimetre = 2 * longueur + largeur;
    var aire = longueur * largeur;
    alert("Le périmètre est : " + perimetre + "\nL'aire est : " + aire);
}
