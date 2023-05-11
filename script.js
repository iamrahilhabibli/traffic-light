const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");

const redLightDuration = 0;
const yellowLightDuration = 10000;
const greenLightDuration = 12000;
const totalDuration = 27000;

let previousIntervalId = null;

function trafficLights() {
  setTimeout(() => {
    redLight.style.backgroundColor = "red";
    greenLight.style.backgroundColor = "";
  }, redLightDuration);

  setTimeout(() => {
    yellowLight.style.backgroundColor = "yellow";
    redLight.style.backgroundColor = "";
  }, yellowLightDuration);

  setTimeout(() => {
    greenLight.style.backgroundColor = "green";
    yellowLight.style.backgroundColor = "";
  }, greenLightDuration);

  previousIntervalId = setInterval(trafficLights, totalDuration);

  if (previousIntervalId !== null) {
    clearInterval(previousIntervalId);
  }
}

trafficLights();
