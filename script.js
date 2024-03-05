"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const btnSubmit = document.querySelector(".btn-submit");

  console.log(firstNameInput);
  console.log(btnSubmit);
  // const formValidation = function () {};

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    displayErrorMessage(firstNameInput);
    displayErrorMessage(lastNameInput);
    displayErrorMessage(emailInput);
    displayErrorMessage(passwordInput);
  });

  function displayErrorMessage(inputElement) {
    const errorMessage = inputElement
      .closest(".input-wrapper")
      .querySelector(".error-msg");

    if (inputElement.value === "") {
      errorMessage.style.display = "flex";
    } else {
      errorMessage.style.display = "none";
    }
  }
});
