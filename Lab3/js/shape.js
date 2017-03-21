function Shape()
{
    this.setFillColor = function (fillColor)
    {
        this.fillColor = "#" + fillColor;
    };
    this.getFillColor = function ()
    {
        return this.fillColor;
    };
    this.setBorderColor = function (borderColor)
    {
        this.borderColor = "#" + borderColor;
    };
    this.getBorderColor = function ()
    {
        return this.borderColor;
    };
}

Shape.prototype.draw = function ()
{
};

Shape.prototype.calculateArea = function ()
{
};

Shape.prototype.calculatePerimeter = function ()
{
};
