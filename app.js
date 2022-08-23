const serialNum = document.querySelector(".serial-num");
const holderName = document.querySelector(".card-holder-nam");
const expDate = document.querySelector(".card-exp-dat");
const pin = document.querySelector(".pin");
//inputs
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const exMonth = document.querySelector("#ex-month");
const exYear = document.querySelector("#ex-year");
const cvc = document.querySelector("#cvc");
// confirm
const confirmation = document.querySelector(".confirm");

function nameValidation() {
  if (nameInput.textContent !== String) {
    nameInput.style.border = "2px solid  red";
    alert("please enter your name !");
  } else {
    holderName.textContent = nameInput.textContent;
  }
}
function cardNumberValidation() {
  if (numberInput.textContent !== Number) {
    numberInput.style.border = "2px solid  red";
    alert("please enter card number !");
  } else {
    serialNum.textContent = numberInput.textContent;
  }
}
function dateValidation() {
  if (exMonth !== Number) {
    exMonth.style.border = "2px solid  red";
    alert("please enter month !");
  } else {
    expDate.textContent = exMonth.textContent;
  }
  if (exYear !== Number) {
    exYear.style.border = "2px solid  red";
    alert("please enter year !");
  } else {
    expDate.textContent = exYear.textContent;
  }
}
function cvcValidation() {
  if (cvc !== Number) {
    cvc.style.border = "2px solid  red";
    alert("please enter your valid cvc !");
  } else {
    pin.textContent = cvc;
  }
}
confirmation.addEventListener("click", () => {
  nameValidation();
  cardNumberValidation();
  dateValidation();
  cvcValidation();
});
