// SUM
export const setAdd = (/*arguments*/) =>(
  {
    type: 'ADD'
  }
);
// SUBTRACT
export const setSubtract = (/*arguments*/) =>(
  {
    type: 'SUBTRACT'
  }
);
export const setReset = () =>(
  {
    type: 'RESET'
  }
);

// Redux also suggest defining constants for
// your action types.
export const add = {
  ADD: 'ADD'
 };

export const subtract = {
  SUBTRACT: 'SUBTRACT'
 };

 export const reset = {
  RESET: 'RESET'
 };