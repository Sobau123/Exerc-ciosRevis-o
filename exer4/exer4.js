let num1 = 6;
let num2 = 4;

function calcularOperacoes() {
    let soma = num1 + num2;
    let produto = num1 * num2;
    let divisao = num1 / num2;
    let restoDivisao = num1 % num2;

    // Imprimir resultados na tabela
    console.log("\nOperação\t\tResultado\n");
    console.log("Soma:\t\t\t" + soma);
    console.log("Produto:\t\t" + produto);
    console.log("Divisão:\t\t" + divisao);
    console.log("Resto:\t\t\t" + restoDivisao);
}
calcularOperacoes();