document.getElementById("myCanvas");
canvas.addEventListener("rectangle", my_rectangle);
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle ="red";
ctx.lineWidth=3;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
