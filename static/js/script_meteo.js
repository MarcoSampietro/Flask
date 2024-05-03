var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.wind-speed');
var pressure = document.querySelector('.pressure');
var visibility = document.querySelector('.visibility');
var sunrise = document.querySelector('.sunrise');
var sunset = document.querySelector('.sunset');
var button = document.querySelector('#submitButton');
var forecastButton = document.querySelector('#forecastButton');
var weatherCard = document.querySelector('#weatherCard');
var forecastDiv = document.querySelector('#forecastDiv');

button.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374&units=metric')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    var humidityValue = data['main']['humidity'];
    var windSpeedValue = data['wind']['speed'];
    var pressureValue = data['main']['pressure'];
    var visibilityValue = data['visibility'];
    var sunriseTime = new Date(data['sys']['sunrise'] * 1000).toLocaleTimeString('en-US');
    var sunsetTime = new Date(data['sys']['sunset'] * 1000).toLocaleTimeString('en-US');

    main.innerHTML = nameValue;
    desc.innerHTML = "Desc - " + descValue;
    temp.innerHTML = "Temp - " + tempValue + "°C";
    humidity.innerHTML = "Humidity - " + humidityValue + "%";
    windSpeed.innerHTML = "Wind Speed - " + windSpeedValue + " m/s";
    pressure.innerHTML = "Pressure - " + pressureValue + " hPa";
    visibility.innerHTML = "Visibility - " + visibilityValue + " meters";
    sunrise.innerHTML = "Sunrise - " + sunriseTime;
    sunset.innerHTML = "Sunset - " + sunsetTime;
    weatherCard.style.display = 'block';
    input.value = "";
  })
  .catch(err => {
    weatherCard.style.display = 'none';
    alert("Nome della città inesistente");
  });
});

forecastButton.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374&units=metric')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var forecastData = data['list'];
    var forecastHTML = "<p>Forecast for the next 5 days</p><ul>";
    for (var i = 0; i < forecastData.length; i += 8) {
      var forecastDateTime = new Date(forecastData[i]['dt'] * 1000);
      var forecastDate = forecastDateTime.toLocaleDateString('en-US');
      var forecastDesc = forecastData[i]['weather'][0]['description'];
      forecastHTML += "<li>" + forecastDate + ": " + forecastDesc + "</li>";
    }
    forecastHTML += "</ul>";
    forecastDiv.innerHTML = forecastHTML;
    forecastDiv.style.display = 'block';
  })
  .catch(err => {
    forecastDiv.innerHTML = "<p>No forecast available for this city</p>";
    forecastDiv.style.display = 'block';
  });
});