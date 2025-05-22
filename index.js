//Desafio de Projeto - Classificador de Nível de Herói

let nomeHeroi = "Lord Voldemort"; // Nome do herói
let xpHeroi = 7500; // Pontos de experiência do herói
let nivelHeroi = ""; // Nível do herói, será definido na estrutura de decisão!!!! NÃO ALTERE AQUI!!!

console.log("Seja Bem-vindo herói: " + nomeHeroi+"!");
console.log("Atualmente você possui " + xpHeroi + " pontos de experiência.");
console.log("Vamos classificar seu nível de herói com base na sua experiência!");

//estrutura de decisão para definir o nível do herói
//Usando o if / if else para classificar o nível do herói
if (xpHeroi < 1000){
    nivelHeroi = "Ferro";
}else if ((xpHeroi > 1001) && (xpHeroi < 2000)){
    nivelHeroi = "Bronze";
}else if ((xpHeroi > 2001) && (xpHeroi < 5000)){
    nivelHeroi = "Prata";
}else if ((xpHeroi > 5001) && (xpHeroi < 7000)){
    nivelHeroi = "Ouro";
}else if ((xpHeroi > 7001) && (xpHeroi < 8000)){
    nivelHeroi = "Platina";
}else if ((xpHeroi > 8001) && (xpHeroi < 9000)){
    nivelHeroi = "Ascendente";
}else if ((xpHeroi > 9001) && (xpHeroi < 10000)){
    nivelHeroi = "Imortal";
}
else if (xpHeroi > 10001){
    nivelHeroi = "Radiante";
}

//Estrutura de decisão para apresentar o nível do herói
//Usando o switch para classificar o nível do herói
switch (nivelHeroi) {
    case "Ferro":
        console.log("O Herói de nome "+ nomeHeroi + " está no nível de Ferro!");
        break;
    case "Bronze":
        console.log("O Herói de nome "+ nomeHeroi + " está no nível de Bronze!");
        break;
    case "Prata":
        console.log("O Herói de nome "+ nomeHeroi + " está no nível de Prata!");
        break;
    case "Ouro":
        console.log("O Herói de nome "+ nomeHeroi + " está no nível de Ouro!");;
        break;
    case "Platina":
        console.log("O Herói de nome "+ nomeHeroi + " está no nível de Platina!");
        break;
    case "Ascendente":
        console.log("O Herói de nome "+ nomeHeroi + " está no nível de Ascendente!");
        break;
    case "Imortal":
        console.log("O Herói de nome "+ nomeHeroi + " está no nível de Imortal!");
        break;
    case "Radiante":
        console.log("O Herói de nome "+ nomeHeroi + " está no nível de Radiante!");
        break;
    default:
        console.log("Não foi possível classificar o nível do herói " + nomeHeroi + "!");
        break;
}

