const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

function trafficLights(){
    setTimeout(()=>{
        red.style.backgroundColor = "red";
        green.style.backgroundColor = "transparent";
    },0)
    setTimeout(()=>{
        yellow.style.backgroundColor = "yellow";
        red.style.backgroundColor = "transparent";
    },10000)
    setTimeout(()=>{
        green.style.backgroundColor = "green";
        yellow.style.backgroundColor = "transparent";
    },12000)
}
trafficLights();
setInterval(trafficLights,27000);