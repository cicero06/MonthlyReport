
const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")
const nonEnglishCharacters = ['ş','ç','ö','ğ','ü','ı']
const main = document.getElementById("main")
const sunrise= document.getElementById("sunrise")


let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function getDays(num){
        const whichDayWeAreIn = daysOfWeek.slice(num-1)
        daysOfWeek.unshift(whichDayWeAreIn)
}


let weatherStuation = ""

searchBtn.addEventListener("click", handleSearch)
function handleSearch(){
    
  
        document.getElementById("main").innerHTML = `
        <section class="temp" id="temp">
        </section>
        `
        const temp = document.getElementById("temp")
        temp.innerHTML = ""
    searchInput.value = searchInput.value.trim()
    var correctedSearchInput = searchInput.value.toLowerCase().split("").map(letter => {
        return letter === "ş" ? "s"
        : letter === "ç" ? "c"
        : letter === "ö" ? "o"
        : letter === "ğ" ? "g"
        : letter === "ü" ? "u"
        : letter === "ı" ? "i"
        : letter
    }).join("").slice(0,10)
        
    let latitude = ""
    let longitude = ""
    
    
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${correctedSearchInput}&count=1&language=en&format=json`)
    .then(res=> res.json())
    .then(data => {
        latitude= data.results[0].latitude
        longitude= data.results[0].longitude
        let userOptions = ""
        
        if(sunrise.checked){
            userOptions += sunrise.value + ","
        }
  
     
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode,${userOptions},apparent_temperature_max,apparent_temperature_min,precipitation_sum,rain_sum&current_weather=true&timezone=Europe%2FMoscow`
        
        fetch(url)
        .then(res=> res.json())
           
        .then(data => {
        console.log(data)
       
       const date = new Date(data.current_weather.time)
       const hours = date.getHours()
       
       let sunRiseSet =  "" 
       if(data.daily.sunrise){

            sunRiseSet = `
            <div class="flex">
            <div class = "flex">
            <p>05.00</p>
            <img src="./images/sunrise.png" >
            </div>
            <div class = "flex">
            <img src="./images/sunset.png" >
            <p>05.00</p>
            </div>
            </div>
            `
        }
     
       temp.innerHTML = `
        <div class="day">

            <div class="city-icon">
                <h2>${correctedSearchInput}</h2>
                <img src=${calculateWeatherStuation(data.current_weather.weathercode).path} alt="Rainy Weather">  
                
            </div>
            <p class="situation">${calculateWeatherStuation(data.current_weather.weathercode).weather} </p>
            <h3>${data.current_weather.temperature}°</h3>
            <p> <span class="keys">Time:</span>Today, ${hours}:00</p>
            <p> <span class="keys">windSpeed:</span> ${data.current_weather.windspeed} kmh</p>
            ${sunRiseSet}
        </div>
        `
        main.innerHTML += ` <section class="day-cards" id="day-cards">
        </section>`
        getDays(date.getDay())
        daysOfWeek = daysOfWeek.flat()
        for(let i = 1; i<7; i++){
            if(data.daily.sunrise){

                const sunrise = new Date(data.daily.sunrise[i]) 
                const sunset = new Date(data.daily.sunset[i]) 
                const sunRiseHours = sunrise.getHours()
                const sunSetHours = sunset.getHours()
                const sunRisemins = sunrise.getMinutes()
                const sunSetmins = sunset.getMinutes()

                sunRiseSet = `
                <div class="flex">
                <div class = "flex">
                <p>${sunRiseHours}: ${sunRisemins}</p>
                <img src="./images/sunrise.png" >
                </div>
                <div class = "flex">
                <img src="./images/sunset.png" >
                <p>${sunSetHours}: ${sunSetmins}</p>
                </div>
                </div>
                `
            }
            
            document.getElementById("day-cards").innerHTML += `
            <div class="day">

            <div class="city-icon">
                <h2>${correctedSearchInput}</h2>
                <img src=${calculateWeatherStuation(data.daily.weathercode[i]).path} alt="Rainy Weather">  
                
                </div>
                
               
                <p class="situation">${calculateWeatherStuation(data.daily.weathercode[i]).weather} </p>
              
              
            <h3>${data.daily.apparent_temperature_max[i]}°</h3>
            <p> <span class="keys">Time:</span>${daysOfWeek[i]}, ${data.daily.time[i]}</p>
            <p> <span class="keys">windSpeed:</span> ${data.current_weather.windspeed} kmh</p>
            ${sunRiseSet}
        </div>
            `
        }
    })



    })
}

const date = new Date("2023-06-02T23:00")


function calculateWeatherStuation(number){
    if(number>= 0 && number<4 ){
       return {weather: "Sunny", path: "./images/sun.png"}
    } else if(number >= 45 && number <50){
       return {weather: "Foggy", path: "./images/fog.png"}
    } else if(number >50 && number <58){
      return {weather: "Drizzle", path: "./images/drizzle.png"}
    } else if(number >60 && number <70){
       return {weather: "Rainny", path: "./images/rain.png"}
    } else if(number >70 && number <79){
       return {weather: "Snowy", path: "./images/snow.png"}
    } else if(number >= 80 ){
       return {weather: "Heavy Rain", path: "./images/storm.png"}
    }
}



// temperature_2m_max,temperature_2m_min,
// ,sunrise,sunset
// Full Link
// https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum&current_weather=true&timezone=Europe%2FMoscow

// new Date(data.current_weather.time).getDay()