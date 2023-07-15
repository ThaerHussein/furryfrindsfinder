"use strict";

let login = document.querySelector("#log-btn");
login.addEventListener("click", (e) => {
  e.preventDefault();
  const user = {
    name: "ali",
    age: 25,
    email: "test@test.com",
  };
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = '../../home_page/index.html';
});
