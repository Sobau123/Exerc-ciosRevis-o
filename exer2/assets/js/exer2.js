let mediaIdadeOtimo = 0;
let countOtimo = 0;
let qtdeRegular = 0;
let countTotal = 0;
let countBom = 0;

function submitSurvey() {
  const idade = parseInt(document.getElementById("idade").value);
  const opinion = parseInt(document.getElementById("opinion").value);

  if (opinion === 3) {
    mediaIdadeOtimo += idade;
    countOtimo++;
  } else if (opinion === 1) {
    qtdeRegular++;
  } else if (opinion === 2) {
    countBom++;
  }

  countTotal++;

  document.getElementById("mediaIdadeOtimo").textContent = countOtimo > 0 ? (mediaIdadeOtimo / countOtimo).toFixed(2) : '-';
  document.getElementById("qtdeRegular").textContent = qtdeRegular;
  document.getElementById("percentageBom").textContent = ((countBom / countTotal) * 100).toFixed(2) + "%";
}