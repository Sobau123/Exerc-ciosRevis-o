let pessoas = [
  { idade: 17, peso: 65 , sexo: 'M' },
  { idade: 16, peso: 49 , sexo: 'F' },
  { idade: 18, peso: 54 , sexo: 'M' },
  { idade: 15, peso: 82 , sexo: 'F' },
  { idade: 20, peso: 65 , sexo: 'M' },
  { idade: 30, peso: 57 , sexo: 'F' },
  { idade: 24, peso: 96 , sexo: 'M' },
  { idade: 27, peso: 61 , sexo: 'F' },
  { idade: 42, peso: 79 , sexo: 'M' },
  { idade: 57, peso: 76 , sexo: 'F' },
];  

let totalHomens = 0;
let totalMulheres = 0;
let somaIdadesHomens = 0;
let somaPesosMulheres = 0;

for (let pessoa of pessoas) {
    if (pessoa.sexo === 'M') {
        totalHomens++;
        somaIdadesHomens += pessoa.idade;
    } else if (pessoa.sexo === 'F') {
        totalMulheres++;
        somaPesosMulheres += pessoa.peso;
    }    
}

let mediaIdadesHomens = totalHomens / somaIdadesHomens
let mediaPesosMulheres = totalMulheres / somaPesosMulheres;

console.log(`Total de homens: ${totalHomens}`);
console.log(`Total de mulheres: ${totalMulheres}`);
console.log(`Média de idades dos homens: ${mediaIdadesHomens.toFixed(2)}`);
console.log(`Média de pesos das mulheres: ${mediaPesosMulheres.toFixed(2)}`);