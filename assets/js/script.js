function createImpulse() {
	var path = document.createElement("path");
	path.setAttribute("class", "tester");
	path.setAttribute("fill", "none");
	path.setAttribute("stroke-width","2px");
	path.setAttribute("stroke","rgba(200,10,10,0.5)")
	path.setAttribute("d","M40 40, 50 46")

var element = document.getElementsByClassName("brain");
element[0].appendChild(path);
console.log(path)
}
