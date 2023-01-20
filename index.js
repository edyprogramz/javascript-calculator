document.getElementById("sum").onclick = function(){

    x = document.getElementById("x").value
    x = Number(x)
    y = document.getElementById("y").value
    y = Number(y)
    
    document.getElementById("btn").innerHTML = x + y

    
}
document.getElementById("sub").onclick = function(){

    x = document.getElementById("x").value
    x = Number(x)
    y = document.getElementById("y").value
    y = Number(y)
    
    document.getElementById("btn").innerHTML = x - y

    
}
document.getElementById("div").onclick = function(){

    x = document.getElementById("x").value
    x = Number(x)
    y = document.getElementById("y").value
    y = Number(y)
    
    document.getElementById("btn").innerHTML = x / y
    
}
document.getElementById("mul").onclick = function(){

    x = document.getElementById("x").value
    x = Number(x)
    y = document.getElementById("y").value
    y = Number(y)
    
    document.getElementById("btn").innerHTML = x * y

    
}