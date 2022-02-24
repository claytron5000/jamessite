const canvas = document.getElementById("canvas");

window.requestAnimationFrame(redraw);

function redraw() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	if (canvas) {
		canvas.setAttribute("width", width - 2);
		canvas.setAttribute("height", height - 4);
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "rgb(8, 5, 5)";
		ctx.beginPath();
		ctx.moveTo(width, 0);
		ctx.lineTo(0, height);
		ctx.lineTo(0, 0);
		ctx.fill();
	}
	window.requestAnimationFrame(redraw);
}
