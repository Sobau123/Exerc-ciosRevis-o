// Incompleto 
// Falta Terminar

let pessoas = [];
let idade = [];
let peso = [];
let sexo = ['M', 'F'];

function calcularInformacoes(){
    let inIdade = document.querySelector("#inIdade");
    let inPeso = document.querySelector("#inPeso");
    let inSexo = document.querySelector("#inSexo");
    let outLista = document.querySelector("#outLista");
    let TotalHomens = 0;
    let TotalMulheres = 0;

    idade.push(inIdade.value);
    peso.push(inPeso.value);
    sexo.push(inSexo.value);

    let lista = "";
    for (let i=0; i<pessoas.length; i++){
        lista += (i+1)+" - "+idade[i]+peso[i]+sexo[i]+"\n";
    }
    outLista.textContent = lista;
    inIdade.value="";
    inIdade.focus();
    inPeso="";
    inPeso.focus();
    inSexo.value="";
    inSexo.focus();





}

let btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularInformacoes);