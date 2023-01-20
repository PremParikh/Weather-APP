const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1009e58f5fmshfc6e4d67a15c284p12562fjsn07bccf53d6f4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      temp.innerHTML = response.temp;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      sunset.innerHTML = response.sunset;
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      sunrise.innerHTML = response.sunrise;
      max_temp.innerHTML = response.max_temp;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  //using prevent default page can't be reloaded and getting a searched value
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Toronto");
