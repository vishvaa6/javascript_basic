const increase = document.getElementById("increase-btn");
const reset = document.getElementById("reset-btn");
const decrease = document.getElementById("decrease-btn");
const label = document.getElementById("labelcount");
let count = 0;

increase.onclick = function(){
count++;
label.textContent = count;
}
decrease.onclick = function(){
count--;
label.textContent = count;
}
reset.onclick = function(){
count = 0;
label.textContent = count;
}