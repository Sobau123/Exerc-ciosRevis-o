let pessoas = [
  { idade: 1.70, opiniao: 1 },
  { idade: 1.65, opiniao: 1 },
  { idade: 1.80, opiniao: 3 },
  { idade: 1.55, opiniao: 2 },
  { idade: 1.89, opiniao: 3 },
  { idade: 1.63, opiniao: 3 },
  { idade: 1.90, opiniao: 2 },
  { idade: 1.67, opiniao: 2 },
  { idade: 1.69, opiniao: 1 },
  { idade: 1.46, opiniao: 1 },
  { idade: 1.94, opiniao: 1 },
  { idade: 1.53, opiniao: 3 },
  { idade: 1.88, opiniao: 3 },
  { idade: 1.58, opiniao: 1 },
  { idade: 2.00, opiniao: 2 },
];

let somaIdadesOtimo = 0;
let qtdOtimo = 0;
let qtdRegular = 0;
let qtdTotal = 15;

for (let pessoa of pessoas) {
    if (pessoa.opiniao === 3) {
        somaIdadesOtimo += pessoa.idade;
        qtdOtimo++;
    }
    if (pessoa.opiniao === 1) {
        qtdRegular++;
    }
    if (pessoa.opiniao === 2){
        porcentagemBom = (qtdTotal - qtdRegular - qtdOtimo) / qtdTotal * 100;
    }
}

let mediaIdadesOtimo = somaIdadesOtimo / qtdOtimo;

console.log(`Média das idades dos que responderam ótimo: ${mediaIdadesOtimo}`);
console.log(`Quantidade de pessoas que responderam regular: ${qtdRegular}`);
console.log(`Porcentagem de pessoas que responderam bom: ${porcentagemBom.toFixed(0)}%`);