document.addEventListener("DOMContentLoaded", function() {
    const dataInput = document.getElementById("dataInput");
    const converterBtn = document.getElementById("converterBtn");
    const resultado = document.getElementById("resultado");

    converterBtn.addEventListener("click", function() {
        const data = dataInput.value;
        const dataPorExtenso = converterDataParaExtenso(data);
        resultado.textContent = dataPorExtenso;
    });

    function converterDataParaExtenso(data) {
        const meses = [
            "janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
        ];

        const partes = data.split("/");
        if (partes.length !== 3) {
            return "Data inválida";
        }

        const dia = parseInt(partes[0]);
        const mes = parseInt(partes[1]);
        const ano = parseInt(partes[2]);

        if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
            return "Data inválida";
        }

        if (mes < 1 || mes > 12) {
            return "Mês inválido";
        }

        return `${dia} de ${meses[mes - 1]} de ${ano}`;
    }
});