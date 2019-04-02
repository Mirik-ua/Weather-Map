import React, { Component } from 'react';
import './App.css';
import Form from './Component/Form/Form'
import Print from './Component/Print/Print'

const API_KEY = "4c16d9e0949615a65aac8b7f0c343237"

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      city: undefined,
      country: undefined,
      temp: undefined,
      pressure: undefined,
      wind: undefined
    }
  }

  gettingWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json()
      console.log(data)

      this.setState({
        city:     data.name,
        country:  data.sys.country,
        temp:     data.main.temp,
        description: data.weather[0].description,
        pressure:  data.main.pressure,
        wind:   data.wind.speed
      })
    }
  }

  render(){
    return(
      <div className="wrapperForm">
        <div className="mainBlock">
          <Form WeatherForm={this.gettingWeather} />
        </div>
        <div className="printWeather">
          <Print
            city={this.state.city}
            country={this.state.country}
            temp={this.state.temp}
            des={this.state.description}
            pressure={this.state.pressure}
            wind={this.state.wind}
          />
        </div>
      </div>
    );
  }
}

export default App;
