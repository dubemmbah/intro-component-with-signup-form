"use strict";

function validateEmailInput(email) {
  if (typeof email !== "string" || email.indexOf("@") === -1) return false;

  const [localPart, domain] = email.split("@");

  if (localPart.length === 0 || domain.length < 3) return false;

  const domainExtension = domain.split(".");

  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1].length < 2
  )
    return false;

  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const btnSubmit = document.querySelector(".btn-submit");
  const message = document.querySelector(".message");

  const inputElements = [
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput,
  ];

  console.log(firstNameInput);
  console.log(btnSubmit);

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    displayErrorMessage(firstNameInput);
    displayErrorMessage(lastNameInput);
    displayErrorMessage(emailInput);
    displayErrorMessage(passwordInput);

    if (!allInputsValid(inputElements)) {
      console.log("All inputs valid");

      // Clear input values
      firstNameInput.value =
        lastNameInput.value =
        emailInput.value =
        passwordInput.value =
          "";

      // Blur fields
      firstNameInput.blur();
      lastNameInput.blur();
      emailInput.blur();
      passwordInput.blur();

      message.style.animation = "messageAnimation 5s ease-in 0.75s";
    } else {
      console.log("Some invalid inputs");
    }
    // console.log(allInputsValid(inputElements));
  });

  function displayErrorMessage(inputElement) {
    const errorMessage = inputElement
      .closest(".input-wrapper")
      .querySelector(".error-msg");

    const errorInput = inputElement;

    // if (errorInput === emailInput) {
    //   errorInput.setAttribute("placeholder", "email@example.com");
    //   if (!validateEmailInput(errorInput.value)) {
    //     errorMessage.style.display = "flex";
    //     errorInput.classList.add("error");
    //     return;
    //   }
    // }

    if (errorInput === emailInput) {
      if (!validateEmailInput(errorInput.value)) {
        errorMessage.style.display = "flex";
        errorInput.classList.add("error");
        errorInput.classList.add("error-input");
        errorInput.placeholder = "email@example.com";
        return;
      } else {
        errorInput.classList.remove("error-input");
        errorInput.placeholder = "Email address";
      }
    }

    if (inputElement.value === "") {
      errorMessage.style.display = "flex";
      errorInput.classList.add("error");
    } else {
      errorMessage.style.display = "none";
      errorInput.classList.remove("error");
    }
  }

  function allInputsValid(elements) {
    // if (elements.forEach((el) => el.classList.contains("error"))) {
    //   // return true;
    //   console.log("I have the error class");
    // } else {
    //   // return false;
    //   console.log("Unavailable");
    // }
    return elements.some((el) => el.classList.contains("error"));
  }
});
