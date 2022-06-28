//////////
// for Egypt
// const lat = "21.099875";
// const lon = "25.923059";
//////////
// for الشرقية
// const lat = "30";
// const lon = "31";
//////////
// for ابو كبير
// const lat = "30.72086";
// const lon = "31.67165";
///////////////////////////////
const apiKey = "c1c290e3ea8a3eccee77b60cedf52fde";
const rootEl1 = document.getElementById("root1");
const rootEl2 = document.getElementById("root2");
const rootEl3 = document.getElementById("root3");
const getWeather = () => {
  const lat = "30.72086";
  const lon = "31.67165";
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  )
    .then((responsev) => {
      return responsev.json();
    })
    .then((data) => {
      return {
        temp: data.main.temp,
        weather: data.weather[0].description,
        wind: data.wind.speed,
      };
    }); //28.09
};
getWeather().then((data) => {
  rootEl1.innerHTML = `${data.temp} <sup class="unit">o</sup>`;
  rootEl2.innerHTML = data.weather;
  rootEl3.innerHTML = `${data.wind} <span class="unit">km/s</span>`;
});
