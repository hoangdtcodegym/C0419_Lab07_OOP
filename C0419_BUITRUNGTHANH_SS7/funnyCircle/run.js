function Circle(x, y, radius, vx, vy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

let radius = Math.floor(Math.random() * 80 + 80);
let x = getRandomhex();
let y = getRandomhex();
let ctx = document.getElementById("canvas").getContext("2d");

function creatCircle() {


    ctx.clearRect(0, 0, 5000, 5000);
    let circle = new Circle(x, y, radius);


    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function check() {

    if (x > 1000 || y > 1000) {
        x += 0.8;
        y -= 1.5;
    }
}

function run() {
    x += 0.8;
    y += 1.5;


}


function getRandomhex() {
    return Math.floor(Math.random() * 500)
}


function multiCircle(x) {
    for (i = 1; i <= x; i++) {
        creatCircle();
    }
}

setInterval(function () {
    creatCircle();
    run();
    check();
}, 10)