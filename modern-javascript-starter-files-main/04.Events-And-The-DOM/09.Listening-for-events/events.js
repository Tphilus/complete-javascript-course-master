const headerImage = document.querySelector("#headerImage");

function changeImage() {
  headerImage.computedStyleMap.width = "50%";
  //   alert("clicked");
}

function hi() {
  alert("hi");
}

headerImage.addEventListener("click", changeImage);
// headerImage.addEventListener("click", hi);
