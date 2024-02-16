let btnLogin = document.querySelector(".btn");
let valPass = document.querySelector(".pass");
let user = document.querySelector(".user");

let funcClick = () => {
  localStorage.setItem("pass", valPass.value);
  valPass.value = "";
  user.value = "";
};

btnLogin.addEventListener("click", funcClick);
