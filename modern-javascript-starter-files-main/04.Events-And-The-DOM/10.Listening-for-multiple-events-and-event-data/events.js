const headerImage = document.querySelector("#headerImage");
function changeImage() {
  headerImage.setAttribute("src", "burger2.jpg");
}
headerImage.addEventListener("click", changeImage);

const addButtons = document.querySelectorAll(".add");
function addToFavourites(e) {
  console.log(e.target.parentNode.children[2].innerText);
  // alert("added");
}

addButtons.forEach(function (button) {
  button.addEventListener("click", addToFavourites);
});
