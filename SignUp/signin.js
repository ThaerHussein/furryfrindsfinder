"use strict";

const form = document.getElementById("s-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = e.target;
  const name = data.fullname.value;
  const email = data.email.value;
  const username = data.username.value;
  const address = data.address.value;
  const password = data.password.value;
  const phone = data.phone.value;
  console.log(name, email, username, address, phone, password);
  
});
