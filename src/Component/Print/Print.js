import React,{Component} from 'react'

export default class Print extends Component{
  render(){
    return(
      <div>
        {
          this.props.city &&
          <div>
            <h2>Location : {this.props.city}, {this.props.country}</h2>
            <hr/>
            <p>Temperature : {this.props.temp} <sup> C<sup>o</sup></sup>{this.props.des}</p>
            <p>Pressure : {this.props.pressure}</p>
            <p>Wind speed : {this.props.wind} mph</p>
          </div>
        }
      </div>
    )
  }
}
