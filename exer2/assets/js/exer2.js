let sumAgeOtimo = 0;
let countOtimo = 0;
let countRegular = 0;
let countTotal = 0;
let countBom = 0;

function submitSurvey() {
  const age = parseInt(document.getElementById("age").value);
  const opinion = parseInt(document.getElementById("opinion").value);

  if (opinion === 3) {
    sumAgeOtimo += age;
    countOtimo++;
  } else if (opinion === 1) {
    countRegular++;
  } else if (opinion === 2) {
    countBom++;
  }

  countTotal++;

  document.getElementById("avgAgeOtimo").textContent = countOtimo > 0 ? (sumAgeOtimo / countOtimo).toFixed(2) : '-';
  document.getElementById("countRegular").textContent = countRegular;
  document.getElementById("percentageBom").textContent = ((countBom / countTotal) * 100).toFixed(2) + "%";
}