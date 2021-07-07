let thermostat =  new Thermostat()

thermostat.temp();
thermostat.up();
thermostat.currentEnergyUsage();
thermostat.reset();

let temperature = document.getElementById("temperature")
temperature.innerHTML = thermostat.temp();

let up = document.getElementById('up')
up.addEventListener('click', () => {
  thermostat.up();
  temperature.innerHTML = thermostat.temp();
  powerUsage.innerHTML = thermostat.currentEnergyUsage();
});

let down = document.getElementById('down')
down.addEventListener('click', () => {
  thermostat.down();
  temperature.innerHTML = thermostat.temp();
  powerUsage.innerHTML = thermostat.currentEnergyUsage();
});

let off = document.getElementById('off')
off.addEventListener('click', () => {
  thermostat.turnOffPSM();
  off.classList.add('selected');
  on.classList.remove('selected');
});

let on = document.getElementById('on')
on.addEventListener('click', () => {
  thermostat.turnOnPSM();
  on.classList.add('selected');
  off.classList.remove('selected');
});

let reset = document.getElementById('reset')
reset.addEventListener('click', () =>{
  thermostat.reset();
  temperature.innerHTML = thermostat.temp();
  powerUsage.innerHTML = thermostat.currentEnergyUsage();
});

let powerUsage = document.getElementById("energy-usage")
powerUsage.innerHTML = thermostat.currentEnergyUsage();

const displayWeather = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      document.querySelector('#current-temperature').innerText = data.main.temp;
    })
}
displayWeather('London');

document.querySelector('#select-city').addEventListener('submit', (event) => {
  event.preventDefault();
  const city = document.querySelector('#current-city').value;

  displayWeather(city);
})
