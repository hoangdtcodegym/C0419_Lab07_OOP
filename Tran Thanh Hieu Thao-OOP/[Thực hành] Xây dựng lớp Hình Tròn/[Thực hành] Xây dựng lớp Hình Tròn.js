let Circle= function (radius) {

    this.radius=radius;
     
    this.getRadius=function () {
        return radius;
    }
    this.getArea=function () {
        return Math.PI*radius*radius;
    }

};
let circle =new Circle(2);
let radius =circle.getRadius();
let dientich=circle.getArea();
alert("ban kinh la:"+radius+"dien tich la:"+dientich);

let circle2= new Circle(5);
let radius2 =circle2.getRadius();
let dientich2=circle2.getArea();
alert("ban kinh la:"+radius2+"dien tich la:"+dientich2);