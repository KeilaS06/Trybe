// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.//
// faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.//
// e a peça passada for inválida, o programa deve retornar uma mensagem de erro.//


let peca = "rainha";

switch (peca.toLowerCase()) {
    case "rei": 
        console.log("Rei -> Uma casa apenas para qualquer direção.");
        break;
    case "bispo":
        console.log("Bispo-> Diagonal.");
        break;
    case "rainha":
        console.log("Rainha-> Diagonal e horizontal.");
        break;
    case "cavalo":
        console.log("Cavalo -> 'L' pode pular sobre as peças.");
        break; 
    case "torre":
        console.log("Torre -> Horizontal.");
        break;
    case "peão":
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log("Erro, peça inválida!");
        break;
};            



