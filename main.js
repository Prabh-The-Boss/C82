var mouseevent="empty" ;
var last_x,last_y
canvas=document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d") ;
color="black" ;
lw=3 ;
canvas.addEventListener("mousedown",my_mousedown) ;

function my_mousedown(e){
    color=document.getElementById("draw_color").value ;
    lw=document.getElementById("line_width").value ;
    mouseevent="mousedown" ;
    console.log("mousedown key has been pressed")
}

canvas.addEventListener("mouseup",my_mouseup) ;

function my_mouseup(e){
    mouseevent="mouseup" ;
    console.log("mouseup key has been pressed") ;
}

canvas.addEventListener("mouseleave",my_mouseleave) ;

function my_mouseleave(e){
    mouseevent="mouseleave" ;
    console.log("mouseleave key has been pressed") ;
}

canvas.addEventListener("mousemove",my_mousemove) ;

function my_mousemove(e){
current_x=e.clientX-canvas.offsetLeft ;
current_y=e.clientY-canvas.offsetTop ;
if (mouseevent=="mousedown"){
    ctx.beginPath() ;
    ctx.strokeStyle=color ;
    ctx.lineWidth=lw ;
    console.log("the Last position of X and Y:") ;
    console.log("x="+last_x+" ,y="+last_y) ;
    ctx.moveTo(last_x,last_y) ;
    console.log("the current position of X and Y:") ;
    console.log("x="+current_x+" ,y="+current_y) ;
    ctx.lineTo(current_x,current_y) ;
}
last_x=current_x ;
last_y=current_y ;
}

function clear_canvas(e){
    ctx.clearRect(0,0,canvas.width,canvas.height) ;
}
