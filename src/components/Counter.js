// component counter
import {connect} from 'react-redux';
import React from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

import { setAdd,setSubtract,setReset } from '../actions/index';

class Counter extends React.Component{
  render(){
    const handleAdd = () =>{
      this.props.handleAdd();
    };
    const handleSubtract =()=>{ 
      this.props.handleSubtract();
    };
    const handleReset = () =>{
      this.props.handleReset();
    }

    return(
      <div className ="container">
        <div className ="counter">
          <button onClick ={handleSubtract}> -1 </button>
          <div className ="value">{this.props.count}</div>
          <button onClick ={handleAdd}> +1 </button>
        </div>
        <div className="reset">
          <button className="btn-reset" onClick ={handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}
Counter.protoType = {
  count :PropTypes.number,
  handleSubtract: PropTypes.function,
  handleAdd: PropTypes.function,
  handleReset: PropTypes.function
}
/*  //     STATE ////

mapStateToProps: connect state as props to the component 
(again, state from your Store is connected via props)
*/
const mapStateToProps = (state,/*OwnProps*/) =>{
  return({
		count: state.count,
  });
};

/*     ///// ACTIONS ////////

 mapDispatchToProps:  dispatching of actions as props,
 allowing us to call actions within the component */
const mapDispatchToProps = (dispatch,/*own props */) =>{
  return({
		handleAdd: () => dispatch(setAdd()),
		handleSubtract: () => dispatch(setSubtract()),
		handleReset: () => dispatch(setReset())
	});
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
