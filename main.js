var mouseevent = "empty";
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width= 2;
canvas.addEventListener("down", my_down);  
function my_down(e)
    {

        color = document.getElementById("c").value;
        width = document.getElementById("width").value;
        radius = document.getElementById("r").value;
        mouseEvent = "mouseDown";
    }

canvas.addEventListener("move", my_move);
function my_move(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

canvas.addEventListener("up", my_up);
function my_up(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mo", my_mo);
    function my_mo(e)
    {
        mouseEvent = "mo";
    }

function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
