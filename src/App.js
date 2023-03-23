import React from "react";
import Form from './components/form';
import Weather from './components/weather-now';

const API_KEY = "c4ce291b65cd242874702ebdd9ba7f94"

class App extends React.Component { 

  state = {
    list: []
  }

  gettingWeatherNow = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);

    this.setState ({
      city: data.name,
      list: [ {
        dt_txt: (new Date()).toString(),
        dt: data.dt,
        temp: data.main.temp,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        error: ""
      },
  ]})
}

  gettingWeather5Day = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);

    this.setState ({
      city: data.city.name,
      list:  
        data.list.map(st => {
          return {
            dt_txt: st.dt_txt,
            dt: st.dt,
            temp: st.main.temp,
            humidity: st.main.humidity,
            speed: st.wind.speed,
          }
        }
      ),
    })
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    var period = e.target.elements.period.value;
    if (period === "forecast") {
        await this.gettingWeather5Day(e);
      } else {
        await this.gettingWeatherNow(e);
      }
  }

  render() {
      return (
          <div>
              <p align="center" ><b>Погода на 5 дней</b></p>
              <p align="center">Выберите город и ...даты? Как сформулировать...</p>
              <Form weatherMethod={this.gettingWeather} />

              {this.state.list.map(st => 
                 <div key={st.dt}>
                 <Weather
                 dt_txt = {st.dt_txt}
                 temp = {st.temp}
                 country = {st.country}
                 humidity = {st.humidity}
                 speed = {st.speed}
                 />
                </div>
                 )}
            

          </div>
      );
  }
}


export default App;