import React from 'react';
import Counter from './components/Counter';
import './App.css'
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.handleDecreasing = this.handleDecreasing.bind(this); 
    this.handleIncrease = this.handleIncrease.bind(this);
  }
  handleDecreasing(){
    this.setState({value:this.state.value -1});
  }
  handleIncrease(){
    this.setState({value:this.state.value +1});
  }

  render(){
    return(
    <div className ="container">
      <Counter 
      value ={this.state.value}
      handleDecreasing ={this.handleDecreasing}  
      handleIncrease ={this.handleIncrease}
      />
    </div>
    )
  }
}
export default App;
