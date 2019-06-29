// component counter
import React from 'react';
import './Counter.css';
class Counter extends React.Component{
  render(){
  return(
    <div className ="container">
      <button onClick ={this.props.handleDecreasing}> -1 </button>
      <div className ="value">{this.props.value}</div>
      <button onClick ={this.props.handleIncrease}> +1 </button>
    </div>
  )
  }
}


export default Counter;