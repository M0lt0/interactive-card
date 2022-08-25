const form = document.getElementById("form");
const serialNum = document.querySelector(".serial-num");
const holderName = document.querySelector(".card-holder-name");
const expDate = document.querySelector(".card-exp-date");
const pin = document.querySelector(".pin");
//inputs
const allInput = document.querySelectorAll("input");
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const exMonth = document.querySelector("#ex-month");
const exYear = document.querySelector("#ex-year");
const cvc = document.querySelector("#cvc");
// display
const inputView = document.querySelector(".data-sec");
const submittedView = document.querySelector(".submitted");
window.onload = submittedView.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validInputs();
  if (allInput.classList.contains("ok")) {
    inputView.style.display = "none";
    submittedView.style.display = "";
  } else {
    return;
  }
});

function isValid(name) {
  const regex = /^[a-zA-Z ]{2,20}$/;
  return regex.test(String(name).toLocaleLowerCase());
}
function isNumber(number) {
  const regex = /^[0-9]*\d$/;
  const long = 16;
  return regex.test(number);
}
function isMonth(month) {
  return month != 00 && month.length <= 2 && month <= 12;
}

function isYear(year) {
  return year != 00 && year.length <= 2 && year <= 30;
}

function isCvc(cvc) {
  return cvc != 00 && cvc.length == 3 && cvc < 999;
}

const validInputs = () => {
  let nameValue = nameInput.value.trim();
  let numberValue = numberInput.value.trim();
  let exMonthValue = exMonth.value.trim();
  let exYearValue = exYear.value.trim();
  let cvcValue = cvc.value.trim();

  if (
    nameValue == "" ||
    nameValue == undefined ||
    nameValue !== String ||
    nameValue !== isValid(nameValue)
  ) {
    nameInput.style.border = "2px solid red";
    nameInput.style.animation = "shakeme 0.5s ease-in-out 0s 2";
  }
  if (isValid(nameValue)) {
    nameInput.style.border = "2px solid green";
    holderName.textContent = nameValue;
    nameInput.classList.add("ok");
  }

  if (numberValue == "" || numberValue !== isNumber(nameValue)) {
    numberInput.style.border = "2px solid red";
    numberInput.style.animation = "shakeme 0.5s ease-in-out 0s 2";
  }
  if (isNumber(numberValue)) {
    numberInput.style.border = "2px solid green";
    serialNum.textContent = numberValue;
    serialNum.classList.add("ok");
  }

  if (exMonthValue == "" || exMonthValue !== isMonth(exMonthValue)) {
    exMonth.style.border = "2px solid red";
    exMonth.style.animation = "shakeme 0.5s ease-in-out 0s 2";
  }
  if (isMonth(exMonthValue)) {
    exMonth.style.border = "2px solid green";
    expDate.textContent = `${exMonthValue}/${exYearValue}`;
    exMonth.classList.add("ok");
  }

  if (exYearValue == "" || exYearValue !== isYear(exYearValue)) {
    exYear.style.border = "2px solid red";
    exYear.style.animation = "shakeme 0.5s ease-in-out 0s 2";
  }
  if (isYear(exYearValue)) {
    exYear.style.border = "2px solid green";
    exYear.classList.add("ok");
  }

  if (cvcValue == "" || cvcValue !== isCvc(cvcValue)) {
    cvc.style.border = "2px solid red";
    cvc.style.animation = "shakeme 0.5s ease-in-out 0s 2";
  }
  if (isCvc(cvcValue)) {
    cvc.style.border = "2px solid green";
    pin.textContent = cvcValue;
    cvc.classList.add("ok");
  }
};
