function Primo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function calcularSomas(numeros) {
    let somaPares = 0;
    let somaPrimos = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            somaPares += numeros[i];
        }

        if (Primo(numeros[i])) {
            somaPrimos += numeros[i];
        }
    }
    console.log('Soma dos números pares: ' + somaPares);
    console.log('Soma dos números primos: ' + somaPrimos);
}

let numeros = [10,12,6,7,20,14,9,2,4,27];

calcularSomas(numeros);