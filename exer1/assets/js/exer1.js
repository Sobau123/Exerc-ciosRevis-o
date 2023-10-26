document.addEventListener('DOMContentLoaded', function () {

    const pessoas = [
        { altura: 1.70, sexo: 'M' },
        { altura: 1.65, sexo: 'F' },
        { altura: 1.80, sexo: 'M' },
        { altura: 1.62, sexo: 'F' },
        { altura: 1.75, sexo: 'M' },
        { altura: 1.68, sexo: 'F' },
        { altura: 1.72, sexo: 'M' },
        { altura: 1.60, sexo: 'F' },
        { altura: 1.78, sexo: 'M' },
        { altura: 1.63, sexo: 'F' },
        { altura: 1.74, sexo: 'M' },
        { altura: 1.67, sexo: 'F' },
        { altura: 1.76, sexo: 'M' },
        { altura: 1.61, sexo: 'F' },
        { altura: 1.73, sexo: 'M' }
    ];


    function calcularInformacoes() {
        let maiorAltura = Number.MIN_VALUE;
        let menorAltura = Number.MAX_VALUE;
        let somaAlturaMulheres = 0;
        let numHomens = 0;

        for (const pessoa of pessoas) {
            const altura = pessoa.altura;
            const sexo = pessoa.sexo;

            if (altura > maiorAltura) {
                maiorAltura = altura;
            }
            if (altura < menorAltura) {
                menorAltura = altura;
            }

            if (sexo === 'F') {
                somaAlturaMulheres += altura;
            }

            if (sexo === 'M') {
                numHomens++;
            }
        }
        
        document.getElementById('maiorAltura').textContent = maiorAltura.toFixed(2);
        document.getElementById('menorAltura').textContent = menorAltura.toFixed(2);
        document.getElementById('mediaAlturaMulheres').textContent = (somaAlturaMulheres / (pessoas.length - numHomens)).toFixed(2);
        document.getElementById('numHomens').textContent = numHomens;
    }
    
    const calcularButton = document.getElementById('calcularButton');
    calcularButton.addEventListener('click', calcularInformacoes);
});