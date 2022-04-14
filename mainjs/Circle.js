class Circle {
    constructor(radius) {
        // khai bao thuoc tinh
        this.radius = radius;
    }

    getRadius(){
        return this.radius
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    draw(){
        let c = document.getElementById("Mycanvas");
        let ctx =c.getContext("2d");
        ctx.beginPath();
        ctx.arc(200,105,this.radius,0,Math.PI*2);
        ctx.strokeStyle = "blue";
        ctx.stroke();
    }
}
let circle = new Circle(100);
let circle = circle.getRadius();
let area = circle.getArea();
circle.draw();
