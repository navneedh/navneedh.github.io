function createImpulse() {
	var path = document.createElement("path");
	path.setAttribute("class", "key-anim1");
	path.setAttribute("fill", "none");
	path.setAttribute("stroke-width","2px");
	path.setAttribute("stroke","rgba(0,0,0,0.5)")
	path.setAttribute("d","M40 40, 50 46")
	path.setAttribute("style", "animation: Drawpath 2.5s linear forwards, animation-delay: 3s, animation-iteration-count: 3;")

var element = document.getElementsByClassName("brain");
element[0].appendChild(path);
console.log(path)
}

createImpulse()
