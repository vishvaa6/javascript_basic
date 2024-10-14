const textbox = document.getElementById("num");
const celtof = document.getElementById("check1");
const fahtocel = document.getElementById("check2");
const result = document.getElementById("result");
let temp;

function convert(){

    if(celtof.checked){
        temp = Number(textbox.value);
        temp = temp * 9/5 +32;
        result.textContent = temp.toFixed(1) + "℉"

    }
    else if(fahtocel.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (9/5);
        result.textContent = temp.toFixed(1) + "℃"

    }
    else{
        result.textContent = "Select Unit";
    }
}