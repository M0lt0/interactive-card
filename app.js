const form = document.querySelector("form");
const holderName = document.querySelector(".card-holder-name");
const serialNum = document.querySelector(".serial-num");
const expDate = document.querySelector(".card-exp-date");
const pin = document.querySelector(".pin");
const error = document.querySelector(".error");
const confirm = document.querySelector(".confirm");
//inputs
const allInput = document.querySelectorAll("input");
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const cardInputs = document.querySelector(".inputs");
const exMonth = document.querySelector("#ex-month");
const exYear = document.querySelector("#ex-year");
const cvc = document.querySelector("#cvc");
// display
const inputView = document.querySelector(".data-sec");
const submittedView = document.querySelector(".submitted");

//
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const errorMessage1 = document.querySelector(".error1");
  const errorMessage2 = document.querySelector(".error2");
  const errorMessage3 = document.querySelector(".error3");
  if (nameInput.value.trim() == "" && nameInput.value.trim() !== String) {
    nameInput.style.border = "2px solid red";
    errorMessage1.style.display = "";
    errorMessage1.textContent = "please enter your name";
    console.log(nameInput.value);
  } else if (
    numberInput.value.trim() == "" &&
    numberInput.value.trim() !== Number
  ) {
    numberInput.style.border = "2px solid red";
    errorMessage2.style.display = "";
    errorMessage2.textContent = "please enter numbers only";
  } else if (exMonth.value.trim() == "" && exMonth.value.trim() !== Number) {
    exMonth.style.border = "2px solid red";
    errorMessage3.textContent = "please enter numbers only";
    errorMessage3.style.display = "";
  } else if (exYear.value.trim() == "" && exYear.value.trim() !== Number) {
    exYear.style.border = "2px solid red";
    errorMessage3.textContent = "please enter numbers only";
    errorMessage3.style.display = "";
  } else if (cvc.value.trim() == "" && cvc.value.trim() !== Number) {
    cvc.style.border = "2px solid red";
    errorMessage3.textContent = "please enter numbers only";
    errorMessage3.style.display = "";
  } else {
    nameInput.style.border = "2px solid green";
    numberInput.style.border = "2px solid green ";
    cardInputs.style.border = "2px solid green ";
    exMonth.style.border = "2px solid green ";
    exYear.style.border = "2px solid green ";
    inputView.style.display = "none";
    submittedView.style.display = "";
    holderName.textContent = nameInput.value;
    serialNum.textContent = numberInput.value;
    expDate.textContent = `${exMonth.value} / ${exYear.value}`;
    pin.textContent = cvc.value;
  }
});
