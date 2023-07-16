"use strict";

let login = document.querySelector("#l-form");
login.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, pass } = e.target;
  const mail = email.value;
  const pas = pass.value;
  console.log(mail);
  console.log(pas);
  const user = {
    name: "ali",
    age: 25,
    email: "test@test.com",
  };
  localStorage.setItem("user", JSON.stringify(user));
  // window.location.href = "../../home_page/index.html";
});
