function generatePassword(passlength, inputelement) {
  const capitalCheck = inputelement.capital;
  const smallCheck = inputelement.small;
  const numberCheck = inputelement.number;
  const symbolCheck = inputelement.symbol;

  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+-=";

  if (!capitalCheck) {
    uppercaseChars = "";
  }
  if (!smallCheck) {
    lowercaseChars = "";
  }
  if (!numberCheck) {
    numbers = "";
  }
  if (!symbolCheck) {
    symbols = "";
  }

  const allChars = lowercaseChars + uppercaseChars + numbers + symbols;
  let password = "";

  for (let i = 0; i < passlength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  if (numbers.length > 0 && symbols.length > 0 && password.length > 8) {
    document.getElementById("passwordLength").style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "white";
  }
  return password;
}

function displaypass(passlength, generatedPassword) {
  let windowlength = document.getElementById("length");
  let generatedPasswordElement = document.getElementById("generatedPassword");

  if (passlength !== 0) {
    generatedPasswordElement.textContent = `${generatedPassword} `;
    windowlength.textContent = ` ${passlength}`;
  } else {
    generatedPasswordElement.textContent = `Please Enter number to generate password`;
  }
}

function generateAndLogPassword() {
  const passwordLengthInput = document.getElementById("passwordLength");
  let passlength = Number(passwordLengthInput.value);

  let inputelement = {
    capital: document.getElementsByTagName("input")[1].checked,
    small: document.getElementsByTagName("input")[2].checked,
    number: document.getElementsByTagName("input")[3].checked,
    symbol: document.getElementsByTagName("input")[4].checked,
  };

  let generatedPassword = generatePassword(passlength, inputelement);
  displaypass(passlength, generatedPassword);
}

function checkboxCheck() {
  let checkboxes = document.getElementsByTagName("input");
  let checkedCount = 0;
  for (let i = 1; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCount++;
    }
  }
  if (checkedCount === 0) {
    checkboxes[4].checked = true;
  }
}

window.onload = function () {
  // Call the function when needed
  generateAndLogPassword();

  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  };
};
