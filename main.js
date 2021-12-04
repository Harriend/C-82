var mouseEvent="empty";
var lastPosOfX,lastPosOfY;

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){

mouseEvent= "mouseleave";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){

    mouseEvent="mouseUP";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){

currentPosOfX=e.clientX - canvas.offsetLeft;
currentPosOfY=e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(lastPosOfX, lastPosOfY);
    ctx.lineTo(currentPosOfX, currentPosOfY);
    ctx.stroke();
}
    lastPosOfX = currentPosOfX;
    lastPosOfY = currentPosOfY;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}