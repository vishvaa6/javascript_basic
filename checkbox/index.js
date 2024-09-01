const subscribe = document.getElementById("subscribe");
const paytym = document.getElementById("btn1");
const phonepe = document.getElementById("btn2");
const paypal = document.getElementById("btn3");
const submit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const payresult = document.getElementById("payresult");

submit.onclick = function(){

    if(subscribe.checked){
        subresult.textContent = `you are subscribed`;
    }
    else{
        subresult.textContent = `you are not subcribed`;
    }

    if(paytym.checked){
        payresult.textContent = "you selected paytym";
    }
    else if(phonepe.checked){
        payresult.textContent = "you selected phone pe";
    }
    else if(paypal.checked){
        payresult.textContent = "you selected paypal";
    }
    else{
        payresult.textContent = "you must select a payment method";
    }
}