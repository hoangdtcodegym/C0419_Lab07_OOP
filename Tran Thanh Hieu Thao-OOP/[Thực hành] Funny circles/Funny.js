
let CV=document.getElementById("myCanvas");
let ctx =CV.getContext("2d");
let sohinhtron =190;
let vx = [];
let vy = [];
let mangtoadoX = [];
let mangtoadoY = [];
let mangtoadoRadius = [];
let color = [];
let Duongtron = new duongtron();

for (let i = 0; i < sohinhtron; i++) {
    mangtoadoX[i] = Math.floor(Math.random() * 1500);
    mangtoadoY[i] = Math.floor(Math.random() * 600);
    mangtoadoRadius[i] = Math.floor(Math.random() * 90);
    color[i]= getRandomColor();
    vx[i]=Math.floor(Math.random() * 10 +2);
    vy[i]=Math.floor(Math.random() * 15 +2);
}
function duongtron (x,y,radius,color) {
    this.toadoX  = x;
    this.toadoY  = y;
    this.bankinh = radius;
    this.color   = color;
    this.taohinh = function (x,y,radius,color) {
        ctx.beginPath();
        ctx.arc(x,y,radius,0,2*Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath()
    }
}
function getRandomHex() {
    return Math.floor(Math.random()*255);
}
function getRandomColor() {
    let red=getRandomHex();
    let blue=getRandomHex();
    let green=getRandomHex();
    return "rgb(" + red +"," + blue +"," +green +")";
}
function dichuyen() {
    ctx.clearRect(0, 0, CV.width, CV.height);
    for (let i = 0; i < sohinhtron; i++) {
        mangtoadoX[i] += vx[i];
        mangtoadoY[i] += vy[i];
        if (mangtoadoX[i] > 1500  || mangtoadoX[i] < 0) vx[i] = -vx[i];
        if (mangtoadoY[i] > 600 || mangtoadoY[i] < 0) vy[i] = -vy[i];
        Duongtron.taohinh(mangtoadoX[i], mangtoadoY[i], mangtoadoRadius[i],color[i]);
    }
    Start();
}
function Start() {
    setTimeout(dichuyen,20);
}
Start();


