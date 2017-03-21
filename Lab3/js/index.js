var currentShape;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function Clear() 
{
    document.getElementById("arg1").style.visibility = "hidden";
    document.getElementById("arg2").style.visibility = "hidden";
    document.getElementById("arg3").style.visibility = "hidden";
    document.getElementById("arg4").style.visibility = "hidden";
    document.getElementById("arg5").style.visibility = "hidden";
    document.getElementById("arg6").style.visibility = "hidden";
    document.getElementById("arg1_label").style.visibility = "hidden";
    document.getElementById("arg2_label").style.visibility = "hidden";
    document.getElementById("arg3_label").style.visibility = "hidden";
    document.getElementById("arg4_label").style.visibility = "hidden";
    document.getElementById("arg5_label").style.visibility = "hidden";
    document.getElementById("arg6_label").style.visibility = "hidden";
    document.getElementById("button").style.visibility = "hidden";
    document.getElementById("arg3_label").innerHTML = "X2";
    ctx.clearRect(0, 0, 700, 500);
}


document.getElementById("circle").onclick = function()
{
    document.getElementById("arg1").style.visibility = "visible";
    document.getElementById("arg2").style.visibility = "visible";
    document.getElementById("arg3").style.visibility = "visible";
    document.getElementById("arg1_label").style.visibility = "visible";
    document.getElementById("arg2_label").style.visibility = "visible";
    document.getElementById("arg3_label").style.visibility = "visible";
    document.getElementById("button").style.visibility = "visible";
    document.getElementById("arg3_label").innerHTML = "Radius";
    document.getElementById("arg7_label").style.visibility = "visible";
    document.getElementById("arg8_label").style.visibility = "visible";
    document.getElementById("arg7").style.visibility = "visible";
    document.getElementById("arg8").style.visibility = "visible";
    currentShape = "circle";
};

document.getElementById("square").onclick = function()
{
    document.getElementById("arg1").style.visibility = "visible";
    document.getElementById("arg2").style.visibility = "visible";
    document.getElementById("arg3").style.visibility = "visible";
    document.getElementById("arg4").style.visibility = "visible";
    document.getElementById("arg1_label").style.visibility = "visible";
    document.getElementById("arg2_label").style.visibility = "visible";
    document.getElementById("arg3_label").style.visibility = "visible";
    document.getElementById("arg4_label").style.visibility = "visible";
    document.getElementById("button").style.visibility = "visible";
    document.getElementById("arg7_label").style.visibility = "visible";
    document.getElementById("arg8_label").style.visibility = "visible";
    document.getElementById("arg7").style.visibility = "visible";
    document.getElementById("arg8").style.visibility = "visible";
    currentShape = "square";
};

document.getElementById("triangle").onclick = function()
{
    document.getElementById("arg1").style.visibility = "visible";
    document.getElementById("arg2").style.visibility = "visible";
    document.getElementById("arg3").style.visibility = "visible";
    document.getElementById("arg4").style.visibility = "visible";
    document.getElementById("arg5").style.visibility = "visible";
    document.getElementById("arg6").style.visibility = "visible";
    document.getElementById("arg7").style.visibility = "visible";
    document.getElementById("arg8").style.visibility = "visible";
    document.getElementById("arg1_label").style.visibility = "visible";
    document.getElementById("arg2_label").style.visibility = "visible";
    document.getElementById("arg3_label").style.visibility = "visible";
    document.getElementById("arg4_label").style.visibility = "visible";
    document.getElementById("arg5_label").style.visibility = "visible";
    document.getElementById("arg6_label").style.visibility = "visible";
    document.getElementById("arg7_label").style.visibility = "visible";
    document.getElementById("arg8_label").style.visibility = "visible";
    document.getElementById("button").style.visibility = "visible";
    currentShape = "triangle";
};

function DrawInfo(shape)
{
    ctx.font="25px Arial";
    ctx.fillText("Area: "+shape.calculateArea(), 500, 300);  
    ctx.fillText("Perimeter: "+shape.calculatePerimeter(), 500, 400);
}

document.getElementById("button").onclick = function()
{
    Clear();
    if (currentShape == "circle")
    {
        var circle = new Circle();
        circle.setX(document.getElementById("arg1").value);
        circle.setY(document.getElementById("arg2").value);
        circle.setRadius(document.getElementById("arg3").value);
        circle.setFillColor(document.getElementById("arg7").value);
        circle.setBorderColor(document.getElementById("arg8").value);
        circle.draw();
        DrawInfo(circle);
    }
    else if (currentShape == "square")
    {
        var square = new Square();
        square.setX1(document.getElementById("arg1").value);
        square.setY1(document.getElementById("arg2").value);
        square.setX2(document.getElementById("arg3").value);
        square.setY2(document.getElementById("arg4").value);
        square.setFillColor(document.getElementById("arg7").value);
        square.setBorderColor(document.getElementById("arg8").value);
        square.draw();
        DrawInfo(square);
    }
    else if (currentShape == "triangle")
    {
        var triangle = new Triangle();
        triangle.setX1(document.getElementById("arg1").value);
        triangle.setY1(document.getElementById("arg2").value);
        triangle.setX2(document.getElementById("arg3").value);
        triangle.setY2(document.getElementById("arg4").value);
        triangle.setX3(document.getElementById("arg5").value);
        triangle.setY3(document.getElementById("arg6").value);
        triangle.setFillColor(document.getElementById("arg7").value);
        triangle.setBorderColor(document.getElementById("arg8").value);
        triangle.draw();
        DrawInfo(triangle);
    }
};