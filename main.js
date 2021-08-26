var Canvas= document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");

var Enabled=true;
function Radius_windowalert(){
if(Enabled == true){window.alert("Enter the radius you want for your circle in the radius input box please");}
Enabled=false;
}

var mouse_event="empty";
var last_pos_x,last_pos_y;
var color="black";
var radius=35;
var width_of_line="5";

Canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
radius=document.getElementById("radius").value;
mouse_event="mousedown";
}
Canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouse_event="mouseup";
}
Canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseleave";
}
Canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
var current_pos_x= e.clientX - Canvas.offsetLeft;
var current_pos_y= e.clientY - Canvas.offsetTop;

if (mouse_event == "mousedown"){
console.log("Current position of x and y coordinates = ");
console.log("x = "+ current_pos_x + "y = "  + current_pos_y);

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_pos_x ,current_pos_y ,radius ,0,2 * Math.PI);
ctx.stroke();
}
last_pos_x = current_pos_x;
last_pos_y = current_pos_y;
}
function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
