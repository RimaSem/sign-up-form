const email = document.querySelector('input[type="email"]');
const emailError = document.querySelector(".email-error");

const psw1 = document.querySelector("#password");
const psw2 = document.querySelector("#confirm-password");
const pswError = document.querySelector(".psw-error");

const button = document.querySelector("button");

email.addEventListener("focusout", (e) => {
  if (!email.validity.valid && email.value) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

email.addEventListener("input", (e) => {
  if (!email.value || email.validity.valid) {
    emailError.style.display = "none";
  }
});

button.addEventListener("click", (e) => {
  if (psw1.value !== psw2.value) {
    pswError.style.display = "block";
    psw1.style.cssText = "border: 1px solid rgb(222, 2, 2); box-shadow: none;";
    psw2.style.cssText = "border: 1px solid rgb(222, 2, 2); box-shadow: none;";
    button.type = "button";
  } else {
    button.type = "submit";
    pswError.style.display = "none";
    psw1.removeAttribute("style");
    psw2.removeAttribute("style");
  }
});
