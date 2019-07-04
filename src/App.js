import React from 'react';
import Counter from './components/Counter';
import './App.css'
class App extends React.Component{
  render(){
    return(
    <div className ="app-container">
      <h2>Counter</h2>
      <Counter/>
    </div>
    )
  }
}
export default App;
