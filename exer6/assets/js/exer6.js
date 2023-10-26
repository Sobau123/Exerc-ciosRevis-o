function Contas(){
    let Salario = document.querySelector('#inSalario');
    let outAumento = document.querySelector('#outAumento')
    let aumento = "";

    if(Salario.value >= 100){
        if(Salario.value <= 280){
            aumento = (Salario.value * 20) / 100;
            alert('Seu aumento vai ser '[aumento])
            return;
        }
        if(Salario.value > 280 && Salario.value <= 700){
            aumento += (Salario.value * 15) / 100;
            alert('Seu aumento vai ser '[aumento])
            return;
        }
        if(Salario.value > 700 && Salario.value <= 1500){
            aumento = (Salario.value * 10) / 100;
            alert('Seu aumento vai ser '[aumento])
            return;
        }
        if(Salario.value > 1500){
            aumento = (Salario.value * 5) / 100;
            alert('Seu aumento vai ser '[aumento])
            return;
        }


    }

}

let btMostrarAumento = document.querySelector('#btMostrarAumento');
btMostrarAumento.addEventListener('click', function(){
    Contas();
})