"use strict";

let login = document.querySelector("#log-btn");
login.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("ali");
  const user = {
    name: "ali",
    age: 25,
    email: "test@test.com",
  };
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = 'http://127.0.0.1:5500/home_page/index.html';
});
