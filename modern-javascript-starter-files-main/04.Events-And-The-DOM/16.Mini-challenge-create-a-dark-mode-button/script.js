const button = document.querySelector("button");
const body = document.querySelector("body");

function toggleDarkMode() {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    button.innerHTML = "&#9789";
    button.style.color = "rgb(62, 62, 62)";
    return;
  }
  body.classList.add("dark");
  button.innerHTML = "&#9788";
  button.style.color = "aqua";
}
button.addEventListener("click", toggleDarkMode);
