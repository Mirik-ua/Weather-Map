import React,{Component} from 'react'
import FormCss from './Form.css'

export default class Form extends Component{
  render(){
    return(
      <div>
        <h2>Weather Map</h2>
        <form onSubmit={this.props.WeatherForm}>
          <label>Find you city : </label>
          <input type='text' name="city"/>
          <button>Click</button>
        </form>

      </div>
    )
  }
}
