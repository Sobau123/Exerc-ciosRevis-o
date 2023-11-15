let pessoas = [
    { altura: 1.70, sexo: 'M' },
    { altura: 1.65, sexo: 'F' },
    { altura: 1.80, sexo: 'M' },
    { altura: 1.55, sexo: 'F' },
    { altura: 1.89, sexo: 'M' },
    { altura: 1.63, sexo: 'F' },
    { altura: 1.90, sexo: 'M' },
    { altura: 1.67, sexo: 'F' },
    { altura: 1.69, sexo: 'M' },
    { altura: 1.46, sexo: 'F' },
    { altura: 1.94, sexo: 'M' },
    { altura: 1.53, sexo: 'F' },
    { altura: 1.88, sexo: 'M' },
    { altura: 1.58, sexo: 'F' },
    { altura: 2.00, sexo: 'M' },
];

let maiorAltura = Number.MIN_VALUE;
let menorAltura = Number.MAX_VALUE;
let somaAlturaMulheres = 0;
let numeroHomens = 0;
let qtdePessoas = 15;

for (let pessoa of pessoas) {
    if (pessoa.altura > maiorAltura) {
        maiorAltura = pessoa.altura;
    }
    if (pessoa.altura < menorAltura) {
        menorAltura = pessoa.altura;
    }
    if (pessoa.sexo === 'F') {
        somaAlturaMulheres += pessoa.altura;
    } else if (pessoa.sexo === 'M') {
        numeroHomens++;
    }
}
let mediaAlturaMulheres = somaAlturaMulheres / qtdePessoas;

console.log('Maior altura:', maiorAltura);
console.log('Menor altura:', menorAltura);
console.log('Média de altura das mulheres:', mediaAlturaMulheres.toFixed(2));
console.log('Número de homens:', numeroHomens);