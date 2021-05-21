canvas = document.getElementById("mycanvas");
color="blue";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(475 , 190 , 50 ,0 , 2 * Math.PI );
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(600 , 190 , 50 ,0 , 2 * Math.PI );
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(725, 190 , 50 ,0 , 2 * Math.PI );
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(536 , 250 , 50 ,0 , 2 * Math.PI );
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(663 , 250 , 50 ,0 , 2 * Math.PI );
ctx.stroke();
canvas.addEventListner("mousedown", mousedown);
function mousedown(e)
{
    color = document.getElementById("color").nodeValue;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X =" + mouse_x + " ,Y =" + mouse_y);
    circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}