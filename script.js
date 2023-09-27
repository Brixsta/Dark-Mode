const icon = document.querySelector("i");
const iconGroup = document.querySelector(".icon-group");
const container = document.querySelector(".container");
const imageContainer = document.querySelector(".image-container");
const name = document.querySelector(".name");
const date = document.querySelector(".date");
const valid = document.querySelector(".valid");
const number = document.querySelector(".number");
const title = document.querySelector(".title");
iconGroup.addEventListener("click", toggle);

// TOGGLE BUTTON IN TOP RIGHT
function toggle() {
  if (icon.className === "fa fa-star") {
    lightMode();
  } else {
    darkMode();
  }
}

// DARK MODE
function darkMode() {
  darkModeText();
  darkModeIcons();
  darkModeElements();
}

// LIGHT MODE
function lightMode() {
  lightModeText();
  lightModeIcons();
  lightModeElements();
}

// ******************** HELPER FUNCTIONS ********************
function lightModeIcons() {
  iconGroup.style.backgroundColor = "rgb(239, 239, 239)";
  icon.style.color = "rgb(95, 95, 95)";
}

function lightModeElements() {
  document.body.style.backgroundColor = "white";
  container.style.backgroundColor = "white";
}

function lightModeText() {
  icon.className = "fa fa-cog";
  name.style.color = "rgb(35, 35, 35)";
  date.style.color = "rgb(35, 35, 35)";
  number.style.color = "rgb(35, 35, 35)";
  valid.style.color = "rgb(35, 35, 35)";
  title.style.color = "rgb(35, 35, 35)";
}

function darkModeElements() {
  container.style.backgroundColor = "rgb(45,45,45)";
  document.body.style.backgroundColor = "rgb(15, 15, 15)";
}

function darkModeIcons() {
  icon.className = "fa fa-star";
  icon.style.color = "white";
  iconGroup.style.backgroundColor = "rgb(45,45,45)";
}

function darkModeText() {
  name.style.color = "rgba(200,200,200)";
  date.style.color = "rgba(200,200,200)";
  number.style.color = "rgba(200,200,200)";
  valid.style.color = "rgba(200,200,200)";
  title.style.color = "rgba(200,200,200)";
}
// *****************************************************
