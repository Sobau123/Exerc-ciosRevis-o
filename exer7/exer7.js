function dataPorExtenso(dataString) {
    let partes = dataString.split('/');
    
    let dia = parseInt(partes[0], 10);
    let mes = parseInt(partes[1], 10);
    let ano = parseInt(partes[2], 10);

    let meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    
    let nomeMes = meses[mes - 1];
    
    let dataExtenso = dia + ' de ' + nomeMes + ' de ' + ano;
    
    return dataExtenso;
}

let dataEntrada = "19/01/2006";// <-- Colocar a data aqui
let resultado = dataPorExtenso(dataEntrada);
console.log(resultado);
