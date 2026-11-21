// You MUST use the function below to check if the username input is available
// Do not edit this function
function fakeUsernameCheck(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const taken = ["admin", "test", "guest"];
      const available = 
            !taken.includes(name.toLowerCase());
      // console.log(`available: ${available}`);
      resolve(available);
    }, 2000); // Waits 2 seconds to simulate a backend call
  });
}

// SOLUTION
// For full credit, test "admin", "test", and "guest" as the input. Your warning text should say that these are unavailable
// We suggest using exactly four global variables:
let form = document.querySelector("#signup-form");
let username = document.querySelector("#username");
let warning = document.querySelector("#warning");
let nextSteps = document.querySelector("#next-steps");


function showWarningEmpty() {
  // Once completed, a warning should be visible, and the text should read: "You can use letters, numbers, and symbols"
  warning.innerText = "You can use letters, numbers, and symbols";
  if (warning.classList.length > 0) {
    warning.classList.remove("hidden");
  }
}

function showChecking() {
  // Once completed, the "warning" text should say "Checking availability..."
  warning.innerText = "Checking availability...";
  warning.classList.remove("hidden");
}

function showWarningUnavailable() {
  // Once completed, the "warning" text should say "This username is not available"
  warning.innerText = "This username is not available";
  warning.classList.remove("hidden");
}

// Initially, the next-steps form (which collects additional information only if the user name is available) should be invisible. You should decide when it is made visible (and how). 
function showNextSteps() {
  nextSteps.classList.remove("hidden");
}

function hideNextSteps(){
  if (nextSteps.classList.length == 0) {
    nextSteps.classList.add("hidden");
  }
}


function hideWarning() {
  // Any warnings should be removed as soon as they are not needed (i.e., if the warning does not apply).
  warning.innerText = "";
  if (warning.classList.length == 0)
    warning.classList.add("hidden");
}

function checkEmpty(){
  let name = username.value;
  // Checks that the user entered something
  // If not, it should show the appropriate warning
  if (name.length == 0) {
    showWarningEmpty();
    hideNextSteps();
  }
};

// Create an function that uses the fakeUserNameCheck function to see if the username the person typed is available (We provide that line). If it is, show the rest of the form (the next steps) for the user to complete, otherwise provide a warning that it is unavailable.
async function checkName() {
  let name = username.value;
  let available = await fakeUsernameCheck(name);
  // this will return "True" if the name is available, "False" otherwise.
  if (available && name.length > 0) {
    hideWarning();
    showNextSteps();
  } else {
    showWarningUnavailable();
    hideNextSteps();
  }
}

// Add any event listeners here
document.addEventListener("DOMContentLoaded", function() {
  username.addEventListener("focus", function() {
    checkEmpty();
  });
  username.addEventListener("blur", function() {
    hideWarning();
  });
  username.addEventListener("input", function() {
    console.log("input changed");
    showChecking();
    checkEmpty();
    checkName();
  });
});
