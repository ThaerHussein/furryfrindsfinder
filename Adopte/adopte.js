"use strict";
let user = localStorage.getItem("user");
console.log(user);
if (user) {
  let logOut = document.querySelector("#lo");
  let adopte = document.querySelector('#adopte')
  let profile = document.querySelector('#profile')
  logOut.style.display = "block";
  adopte.style.display = "block";
  profile.style.display = "block";
}

let logOut = document.querySelector("#lo");
logOut.addEventListener("click", () => {
  localStorage.removeItem("user");
});
