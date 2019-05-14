function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.setY = function (y) {
        this.y = y;
    }
}

function randomHex() {
    return Math.floor(Math.random() * 255)
}

function randomColor() {
    var red = randomHex();
    var green = randomHex();
    var blue = randomHex();
    return "rgb(" + red + "," + green + "," + blue + ")";
}
var cir = document.getElementById('myCanvas').getContext('2d');
var radius = Math.floor(Math.random() * 80);
var x = Math.floor(Math.random()*(1200-radius));
var y = Math.floor(Math.random()*(600-radius));
var color=randomColor();
function createCircle() {
        var circle = new Circle(x, y, radius);
        cir.beginPath();
        cir.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        cir.fillStyle = color;
        cir.fill();
}
function mutiCircle() {
    for (let i=0;i<30;i++){
        createCircle();
    }
}
var dx=2;
var dy=2;
setInterval(function () {
    x+=dx;
    y+=dy;
    cir.clearRect(0, 0, 1200, 600);
    createCircle();
    if (x<radius||x>1200-radius){
        dx=-dx;
    }
    if (y<radius||y>600-radius){
        dy=-dy
    }
},1);





