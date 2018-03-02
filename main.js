//draw game guideline function 
function drawGrid() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');

    //horizontal guidelines
    ctx.beginPath();
    ctx.moveTo(0, 125);
    ctx.lineTo(400, 125);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 275);
    ctx.lineTo(400, 275);
    ctx.stroke();

    //vertical guidelines

    ctx.beginPath();
    ctx.moveTo(125, 0);
    ctx.lineTo(125, 400);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(275, 0);
    ctx.lineTo(275, 400);
    ctx.stroke();
}
//draw player mouse movements
function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };
    if (canvas.getContext) {
        drawGrid();
    }

    canvas.addEventListener('mousemove', function(e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    }, false);

    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = "black";

    canvas.addEventListener('mousedown', function(e) {
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);
    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);

    var onPaint = function() {
        ctx.beginPath();
        ctx.moveTo(last_mouse.x, last_mouse.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.closePath();
        ctx.stroke();
    }


}
//reset canvas to clear 
function clearCanvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (canvas.getContext) {
        drawGrid();
    }
}
window.onload = draw;