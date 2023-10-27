let totalHomens = 0;
let totalMulheres = 0;
let somaIdadesHomens = 0;
let somaPesosMulheres = 0;

function adicionarPessoa() {
  const idade = parseInt(document.getElementById('idade').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const sexo = document.getElementById('sexo').value.toLowerCase();

  if (sexo === 'm') {
    totalHomens++;
    somaIdadesHomens += idade;
  } else if (sexo === 'f') {
    totalMulheres++;
    somaPesosMulheres += peso;
  }

  document.getElementById('totalHomens').textContent = totalHomens;
  document.getElementById('totalMulheres').textContent = totalMulheres;
  document.getElementById('mediaIdadesHomens').textContent = totalHomens > 0 ? (somaIdadesHomens / totalHomens).toFixed(2) : '0';
  document.getElementById('mediaPesosMulheres').textContent = totalMulheres > 0 ? (somaPesosMulheres / totalMulheres).toFixed(2) : '0';

  // Limpar os campos de entrada
  document.getElementById('idade').value = '';
  document.getElementById('peso').value = '';
  document.getElementById('sexo').value = '';
}
