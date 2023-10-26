function Contas(){
    let Salario = document.querySelector('#inSalario');
    let aumento = "";
    let total = "";

    if(Salario.value >= 100){
        if(Salario.value <= 280){
            aumento = (Salario.value * 20) / 100;
            total = Number(Salario.value) + Number(aumento);
            alert(`Seu aumento vai ser de R$ ${aumento} e seu total de R$ ${total}`)
            return;
        }
        if(Salario.value > 280 && Salario.value <= 700){
            aumento += (Salario.value * 15) / 100;
            total = Number(Salario.value) + Number(aumento);
            alert(`Seu aumento vai ser de R$ ${aumento} e seu total de R$ ${total}`)
            return;
        }
        if(Salario.value > 700 && Salario.value <= 1500){
            aumento = (Salario.value * 10) / 100;
            total = Number(Salario.value) + Number(aumento);
            alert(`Seu aumento vai ser de R$ ${aumento} e seu total de R$ ${total}`)
            return;
        }
        if(Salario.value > 1500){
            aumento = (Salario.value * 5) / 100;
            total = Number(Salario.value) + Number(aumento);
            alert(`Seu aumento vai ser de R$ ${aumento} e seu total de R$ ${total}`)
            return;
        }


    }

}

let btMostrarAumento = document.querySelector('#btMostrarAumento');
btMostrarAumento.addEventListener('click', function(){
    Contas();
})