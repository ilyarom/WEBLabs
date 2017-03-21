function Square()
{
    Shape.apply(this, arguments);
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
}

Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function ()
{
    ctx.beginPath();
    ctx.fillStyle = this.getFillColor();
    ctx.fillRect(this.X1, this.Y1, this.X2 - this.X1, this.Y2 - this.Y1);
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.getBorderColor();
    ctx.strokeRect(this.X1, this.Y1, this.X2 - this.X1, this.Y2 - this.Y1);
};

Square.prototype.calculateArea = function ()
{
    return Math.round((this.X2 - this.X1) * (this.Y2 - this.Y1));
};

Square.prototype.calculatePerimeter = function ()
{
    return Math.round((2 * (this.X2 - this.X1)) + (2 * (this.Y2 - this.Y1)));
};