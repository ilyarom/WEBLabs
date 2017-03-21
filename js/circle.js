function Circle()
{
    Shape.apply(this, arguments);
    this.setRadius = function (radius)
    {
        this.radius = radius;
    };
    this.setX = function (x)
    {
        this.posX = x;
    };
    this.setY = function (y)
    {
        this.posY = y;
    };
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function ()
{
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.getFillColor();
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();
};

Circle.prototype.calculateArea = function ()
{
    return Math.round(Math.PI * this.radius * this.radius);
};

Circle.prototype.calculatePerimeter = function ()
{
    return Math.round(2 * Math.PI * this.radius);
};