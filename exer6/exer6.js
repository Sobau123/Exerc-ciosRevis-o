let Salario = 500;
let aumento = "";
let total = "";

if (Salario >= 100) {
    if (Salario <= 280) {
        aumento = (Salario * 20) / 100;
        total = Number(Salario) + Number(aumento);
        console.log(`Seu aumento vai ser de R$ ${aumento} e seu total de R$ ${total}`)
        return;
    }
    if (Salario > 280 && Salario <= 700) {
        aumento += (Salario * 15) / 100;
        total = Number(Salario) + Number(aumento);
        console.log(`Seu aumento vai ser de R$ ${aumento} e seu total de R$ ${total}`)
        return;
    }
    if (Salario > 700 && Salario <= 1500) {
        aumento = (Salario * 10) / 100;
        total = Number(Salario) + Number(aumento);
        console.log(`Seu aumento vai ser de R$ ${aumento} e seu total de R$ ${total}`)
        return;
    }
    if (Salario > 1500) {
        aumento = (Salario * 5) / 100;
        total = Number(Salario) + Number(aumento);
        console.log(`Seu aumento vai ser de R$ ${aumento} e seu total de R$ ${total}`)
        return;
    }
}