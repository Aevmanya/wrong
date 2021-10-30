var mouseEvent= "empty";
var lpx, lpy;canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");
width= 2;
color= "black";
var mwidth= screen.width;
new_width= screen.width - 70;
var mheight= screen.height;
new_height= screen.height - 300;
if(mwidth<992){
 document.getElementById("myCanvas").width=new_width;
 document.getElementById("myCanvas").height= new_height;
 document.body.style.overflow= "hidden";
}
canvas.addEventListener("touchstart", mytouchstart);
function mytouchstart(e){
color= document.getElementById("colori").value;
width= document.getElementById("width").value;
lpx= e.touches[0].clientX-canvas.offsetLeft;
lpy= e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e){
c_p_x= e.touches[0].clientX-canvas.offsetLeft;
c_p_y= e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath()
ctx.strokeStyle= color;
ctx.lineWidth= width;
ctx.moveTo(lpx,lpy);
ctx.lineTo(c_p_x,c_p_y);
ctx.stroke();
lpx= c_p_x;
lpy= c_p_y;
}
canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
color= document.getElementById("colori").value;
width= document.getElementById("width").value;
mouseEvent= "mouseDown";
}
canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e){
mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
c_p_x = e.clientX-canvas.offsetLeft;
c_p_y = e.clientY-canvas.offsetTop;
color= document.getElementById("colori").value;
if(mouseEvent=="mouseDown"){
ctx.beginPath()
ctx.strokeStyle= color;
ctx.lineWidth= width;
ctx.moveTo(lpx,lpy);
ctx.lineTo(c_p_x, c_p_y);
ctx.stroke();
}
lpx= c_p_x;
lpy= c_p_y;
}
function clear_area(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}