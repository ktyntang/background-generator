
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const btn = document.querySelector("button");
let leftSide = true;

window.addEventListener("load",function(){
	css.textContent = getComputedStyle(body).backgroundImage;
})

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function changeColor() {
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	(leftSide == true) ? (color1.value = "#" + randomColor) : (color2.value = "#" + randomColor);
	leftSide = !leftSide;
	setGradient()
  }
  
btn.addEventListener("click", changeColor);
  