    let Circle =    function (radius) {
        this.radius = radius;
        this.getRadius = function () {
            return radius;
        }
        this.getArea = function () {
            return Math.PI*radius*radius;
        }

    };
let circle = new Circle(3);
let radius = circle.getRadius();
let area = circle.getArea();
alert("Radius: "+  radius +"    area : "+  area);