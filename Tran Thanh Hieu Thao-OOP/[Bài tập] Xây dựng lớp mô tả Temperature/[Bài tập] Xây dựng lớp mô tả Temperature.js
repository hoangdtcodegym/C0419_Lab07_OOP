function Temperature(DoC) {
    this.nhietdoC=DoC;
    this.chuyendoidoF = function () {
        return (9*this.nhietdoC/5)+32;
    }
    this.chuyendoidoKevin = function () {
        return 273.15+this.nhietdoC
    }
}
let Chuyendoi = new Temperature(25);
let ChuyendoF = Chuyendoi.chuyendoidoF();
let ChuyendoK = Chuyendoi.chuyendoidoKevin();
 document.getElementById("ketqua").innerHTML = "25 độ C bằng:"+" "+ChuyendoF +" "+"độ F"+"<br/>"+
                                                        "25 độ C bằng:"+" "+ChuyendoK +" "+"độ K"