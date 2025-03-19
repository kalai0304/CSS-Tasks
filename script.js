function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay-text").style.cursor = "pointer";
}
function off() {
  document.getElementById("overlay").style.display = "none";
}
// theme change
let set = true;
const theme = document.getElementById("main");

function changeTheme() {
  if (set) {
    const element = document.getElementById("changeIcon");
    element.classList.remove("bi-sun-fill");
    element.classList.add("bi-moon-fill");

    theme.classList.add("darktheme");

    set = false;
  } else {
    const element = document.getElementById("changeIcon");
    element.classList.remove("bi-moon-fill");
    element.classList.add("bi-sun-fill");

    theme.classList.remove("darktheme");

    set = true;
  }
}
