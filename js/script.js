//debugger;

const form = document.getElementById("form");
const formCard = document.getElementById("formCard");
const resultCard = document.getElementById("resultCard");
const totalPerPerson = document.getElementById("totalPerPerson");
const charityElement = document.getElementById("charity");
const close = document.getElementById("close");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const antal = Number(form["antal"].value);
  const total = Number(form["total"].value);
  const dricks = Number(form["dricks"].value);

  form.reset();

  const resultTotal = total + dricks;
  const costPerPersonNotFloored = resultTotal / antal;

  let charity = Math.floor(resultTotal * 0.02);

  if (charity < 1) {
    charity = 1;
  }

  const finalCostPerPerson = costPerPersonNotFloored + charity / antal;

  totalPerPerson.innerText = finalCostPerPerson + " kr";
  charityElement.innerText = charity + " kr";

  resultCard.style.display = "block";
  formCard.style.display = "none";

  console.log("resultTotal", resultTotal);
  console.log("charity", charity);
  console.log("finalCostPerPerson", finalCostPerPerson);
});

close.addEventListener("click", (event) => {
  resultCard.style.display = "none";
  formCard.style.display = "block";
});
