function Triangle()
{
    Shape.apply(this, arguments);
    this.X1;
    this.Y1;
    this.X2;
    this.Y2;
    this.X3;
    this.Y3;
    this.setX1 = function (x)
    {
        this.X1 = x;
    };
    this.setY1 = function (y)
    {
        this.Y1 = y;
    };
    this.setX2 = function (x)
    {
        this.X2 = x;
    };
    this.setY2 = function (y)
    {
        this.Y2 = y;
    };
    this.setX3 = function (x)
    {
        this.X3 = x;
    };
    this.setY3 = function (y)
    {
        this.Y3 = y;
    };
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.draw = function ()
{
    ctx.beginPath();
    ctx.strokeStyle = this.getBorderColor();
    ctx.fillStyle = this.getFillColor();
    ctx.moveTo(this.X1,this.Y1);
    ctx.lineTo(this.X2, this.Y2);
    ctx.lineTo(this.X3, this.Y3);
    ctx.lineTo(this.X1, this.Y1);
    ctx.lineWidth = 5;
    ctx.fill();
    ctx.stroke();
};

Triangle.prototype.calculatePerimeter = function ()
{
    return (Math.sqrt(Math.pow((this.X1 - this.X2), 2) + Math.pow((this.Y1 - this.Y2), 2)) + Math.sqrt(Math.pow((this.X2 - this.X3), 2) + Math.pow((this.Y2 - this.Y3), 2)) + Math.sqrt(Math.pow((this.X1 - this.X3), 2) + Math.pow((this.Y1 - this.Y2), 2)));
};

Triangle.prototype.calculateArea = function ()
{
    var halfPerimeter = this.calculatePerimeter() * 0.5;
    return Math.sqrt(halfPerimeter*(halfPerimeter -  Math.sqrt(Math.pow((this.X1 - this.X2), 2) + Math.pow((this.Y1 - this.Y2), 2)))*
            (halfPerimeter - Math.sqrt(Math.pow((this.X2 - this.X3), 2) + Math.pow((this.Y2 - this.Y3), 2)))*
            (halfPerimeter -  Math.sqrt(Math.pow((this.X1 - this.X3), 2) + Math.pow((this.Y1 - this.Y2), 2))));
};