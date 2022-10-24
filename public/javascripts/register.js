/*pegando as variáveis dos inputs e divs */
const form = document.getElementById("form");
const inputName = document.getElementById("name");
const dvBorderName = document.querySelector(".inputs-box-name");
const dvBorderEmail = document.querySelector(".inputs-box-email");
const dvBorderPassWord = document.querySelector(".inputs-box-passWord");
const inputPassword = document.getElementById("password");
const inputConfPassword = document.getElementById("confPassword");
const descriptionPassword = document.getElementById("description-password");
const dvBorderConfPassWord = document.querySelector(
  ".inputs-box-conf-passWord"
);
const inputemail = document.getElementById("email");

//função para validar nome
function validName(valid) {
  const msg = document.getElementById("msg-name");
  if (inputName.value === "") {
    dvBorderName.style.borderColor = "red";
  } else {
    dvBorderName.style.borderColor = "green";
  }
}

// função Regex para validar email
function validaEmail(email) {
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

//função Regex para validar senha
function validPassword(password) {
  let passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  return passwordRegex.test(password);
}

function confPassword(confPassword) {
  if (inputPassword.value !== inputConfPassword.value) {
    dvBorderConfPassWord.style.borderColor = "red";
    descriptionPassword.innerHTML = "";
  } else {
    dvBorderConfPassWord.style.borderColor = "green";
  }
}

//EventListener para o email
inputemail.addEventListener("keyup", () => {
  if (validaEmail(inputemail.value) !== true) {
    dvBorderEmail.style.borderColor = "red";
  } else {
    dvBorderEmail.style.borderColor = "green";
  }
});

inputPassword.addEventListener("input", () => {
  if (validPassword(inputPassword.value) !== true) {
    dvBorderPassWord.style.borderColor = "red";
    descriptionPassword.style.display = "block";
  } else {
    dvBorderPassWord.style.borderColor = "green";
    descriptionPassword.style.display = "none";
  }
});

inputConfPassword.addEventListener("input", confPassword);

inputName.addEventListener("keyup", validName);

form.addEventListener("submit", (event) => {
  // event.preventDefault();
  console.log("evento bloqueado");
});
