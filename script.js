
const css = document.querySelector(".css1");
const css2 = document.querySelector(".css2");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");



color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

function changeBackground() {
   body.style.background = "linear-gradient(to right, " + color1.value  + ", " + color2.value + ")";
   css.textContent = "Color: " + color1.value + " " + color2.value;
   css2.textContent = "RGB: " + body.style.background;
}
