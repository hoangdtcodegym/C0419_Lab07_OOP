let CV = document.getElementById("myCanvas");
let ctx = CV.getContext("2d");
let Vchieudai=5;
let Vchieurong=3;
let tapve= new Rectangle();
tapve.Update(90,80);
let x=2;
let y=3;
let ChuVi=tapve.TinhChuVi();
let DienTich=tapve.TinhDienTich();

document.getElementById("ketqua").innerHTML="Chu vi hình chữ nhật là:"+" "+ChuVi+
    "<br/>"+"Diện tích hình chữ nhật là:"+" "+DienTich;

function Rectangle(chieudai,chieurong) {
    this.Chieudai= chieudai;
    this.Chieurong=chieurong;
    this.Update =function (chieudai,chieurong) {
        this.Chieudai=chieudai;
        this.Chieurong=chieurong;
    }
    this.TinhChuVi = function () {
        return 2*(this.Chieudai+ this.Chieurong);
    }
    this.TinhDienTich =function () {
        return this.Chieurong*this.Chieudai;
    }
    this.HinhChuNhat =function (x,y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+this.Chieudai,y);
        ctx.lineTo(x+this.Chieudai,y+this.Chieurong);
        ctx.lineTo(x,y+this.Chieurong);
        ctx.lineTo(x,y);
        ctx.fillStyle="rgb(0,16,213)";
        ctx.fill();
    }
}
function chuyendong() {
   ctx.clearRect(0,0,CV.width,CV.height);
   x +=Vchieudai;
   y +=Vchieurong;
   if (x >710 || x <0 ) Vchieudai =-Vchieudai;
   if (y >322 || y <0 ) Vchieurong =-Vchieurong;
       tapve.HinhChuNhat(x,y);
       chay();
   }
function chay() {
       setTimeout(chuyendong,20);
   }
   chay();