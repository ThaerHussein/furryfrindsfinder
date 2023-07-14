"use strict";
let user = localStorage.getItem("user");
console.log(user);
if (user) {
  let logOut = document.querySelector("#logout");
  let adopte = document.querySelector('#adopte')
  let profile = document.querySelector('#profile')
  logForm.style.display = "none";
  signForm.style.display = "none";
  logOut.style.display = "block";
  adopte.style.display = "block";
  profile.style.display = "block";
}

let logOut = document.querySelector("#logout");
logOut.addEventListener("click", () => {
  localStorage.removeItem("user");
});
