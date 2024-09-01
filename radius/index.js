let radius;
let circum;
let pi = 3.14;


document.getElementById("submit").onclick = function(){
   radius = document.getElementById("text").value;
   radius = Number(radius);
   circum = 2 * pi * radius;
    document.getElementById("h2").textContent = circum;
}