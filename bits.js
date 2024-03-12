const c = document.getElementById('output');
const ctx = c.getContext("2d");
const stride = 2;
const width = 200;
const height = 200;
const loop_length = Math.sqrt(width^2 + height^2);

c.width = width * stride;
c.height = height * stride;

let clock = 0;

const clear = () => {
	ctx.globalAlpha = 1;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, width*stride, height*stride);
}


const findAlphaSins = (i, j) => {
	r1 = Math.abs(Math.sin(10*(i+clock)/100));
	r2 = Math.abs(Math.sin(10*(j+clock)/100));
	ctx.globalAlpha = r1 * r2;
}

const findAlphaExp = (x, y) => {
    ctx.globalAlpha = (x+clock ^ y+clock) % 9;
}

const findAlphaExp2 = (i, j) => {
    ctx.globalAlpha = (i ^ j) % 9 ? 1 : 0;
}

const render = () => {
	for(let i = 0; i < width; i++) {
		for(let j = 0; j < height; j++) {
			
			findAlphaExp(i, j);
			// findAlphaExp2(i, j);
			// findAlphaSins(i, j);

			ctx.fillStyle = "green";
			ctx.fillRect(i*stride, j*stride, stride, stride);
		}
	}
}

setInterval(()=>{
	clear();
	render();
	clock += 1;
}, 100);
