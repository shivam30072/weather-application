

let weather = {
   apiKey : "36a77225654a218e9f2c9fb0f73dc00f",
   fetchweather : function (city){
     fetch
     ("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apiKey)
       .then((Response) => Response.json())
       .then((data) => this.displayweather(data));
   },

   displayweather : function(data){
      const { name } = data;
      const { description } = data.weather[0];
      const { speed } = data.wind;
      const { temp, humidity} = data.main;
      

      let city = document.querySelector(".city");
      let descriptions = document.querySelector(".description");
      let windSpeed = document.querySelector(".wind");
      let temper = document.querySelector(".temp");
      let humid = document.querySelector(".humidity");
      let wethr = document.querySelector(".weather");
     
      city.innerText = "Weather in " + name;
      descriptions.innerText = description;
      windSpeed.innerText = "wind speed:" + speed + "km/h";
      temper.innerText = temp + "°c";
      humid.innerText = "humidity:" + humidity + "%";
      document.body.style.background = "url('https://source.unsplash.com/random/?"+ name +"')"
      wethr.classList.remove("loading");
   },

   search : function(){
    let inputCity = document.querySelector(".input-src");
    this.fetchweather(inputCity.value);
   },
   
};

let searchButton = document.querySelector("#btn");
searchButton.addEventListener('click', function(){
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        weather.search();
    }
})

weather.fetchweather("delhi");
