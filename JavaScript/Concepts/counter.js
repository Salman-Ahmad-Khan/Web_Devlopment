let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let operator = btn.innerText;
    addAndSubtract(operator);
  });
});

function addAndSubtract(operator) {
  let result;
  let output = document.querySelector("#output");

  if (operator == "+") {
    result = Number(output.innerText) + 1;
  } else {
    result = Number(output.innerText) - 1;
  }
  if (result < 0) {
    result = 0;
  }
  output.innerText = result;
}
