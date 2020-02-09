const formContainer = document.querySelector(".js-form"),
  nameInput = formContainer.querySelector(".js-userName"),
  nameSubmit = formContainer.querySelector("button"),
  toDoform = document.querySelector(".js-toDoForm");

const message = document.querySelector(".message");
let userName = localStorage.getItem("userName");

function welcomeMessage() {
  event.preventDefault();
  localStorage.setItem("userName", nameInput.value);
  userName = localStorage.getItem("userName");

  userCheck();
}

function userCheck() {
  if (userName === null) {
    formContainer.classList.remove("hide");
    toDoform.classList.add("hide");
  } else {
    formContainer.classList.add("hide");
    message.classList.remove("hide");
    toDoform.classList.remove("hide");
    message.innerHTML = `${userName}님 어서오세요.`;
  }
}

function init() {
  formContainer.addEventListener("submit", welcomeMessage);
  userCheck();
}
init();
