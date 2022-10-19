const cityInputElem = document.querySelector("input");
const btnSearch = document.getElementById('searchBtn');

btnSearch.addEventListener('click', fetchWeather)



function fetchWeather(event) {
  event.preventDefault();
  let cityName = cityInputElem.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`
  ).then((resp)=>{
    return resp.json();
  }).then((weather)=>{
    console.log(weather)
  })
}