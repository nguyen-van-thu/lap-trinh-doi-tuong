class Rectangle {
    constructor(width,height) {
        this.a = width;
        this.b = height;
    }
    getArea() {
        let area = (this.a + this.b) * 2
        return area;
    }
    draw() {
        let c = document.getElementById("canvasMy");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, this.a, this.b);
        ctx.stroke();
    }
}
let retangle = new Rectangle(200,100);
retangle.draw();
let a = retangle.getArea();
console.log(a);
