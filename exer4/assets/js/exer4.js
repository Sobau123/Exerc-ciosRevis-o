function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const soma = num1 + num2;
    const produto = num1 * num2;
    const divisao = num1 / num2;
    const resto = num1 % num2;

    const table = document.getElementById("resultadoTable");
    table.innerHTML = `
        <tr>
            <th>Operação</th>
            <th>Resultado</th>
        </tr>
        <tr>
            <td>Soma</td>
            <td>${soma}</td>
        </tr>
        <tr>
            <td>Produto</td>
            <td>${produto}</td>
        </tr>
        <tr>
            <td>Divisão</td>
            <td>${divisao}</td>
        </tr>
        <tr>
            <td>Resto</td>
            <td>${resto}</td>
        </tr>
    `;
}