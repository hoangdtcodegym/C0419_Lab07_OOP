function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function creatCircle() {

    let ctx = document.getElementById("canvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let x = getRandomhex();
    let y = getRandomhex();
    let circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.stroke();
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

}, 300);