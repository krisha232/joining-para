function get()
{
    var Input = [];
    for (var i = 1; i <= 6; i++)
    {
        Input.push(document.getElementById(i).value);
    }
 
    document.getElementById("s1").innerHTML=Input.join(". ");
}

function get2()
{
    var Input2 = [];
    for (var y = 1; y <= 6; y++)
    {
        Input2.push(document.getElementById("a" + y).value);
    }
 
    document.getElementById("s2").innerHTML=Input2.join(". ");
}