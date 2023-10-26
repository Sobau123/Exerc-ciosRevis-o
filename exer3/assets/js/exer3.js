function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}

let somaPares = 0;
let somaPrimos = 0;

const numeroInput = document.getElementById("numero");
const adicionarButton = document.getElementById("adicionar");
const paresResult = document.getElementById("paresResult");
const primosResult = document.getElementById("primosResult");

adicionarButton.addEventListener("click", function () {
    const numero = parseFloat(numeroInput.value);
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            somaPares += numero;
        }
        if (isPrime(numero)) {
            somaPrimos += numero;
        }

        paresResult.textContent = `Soma dos números pares: ${somaPares}`;
        primosResult.textContent = `Soma dos números primos: ${somaPrimos}`;

        numeroInput.value = '';
    }
});