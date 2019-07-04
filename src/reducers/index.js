
const initialState = {
  count:0,
};

export const reducer =(state = initialState,action) => {
  switch(action.type){
    case 'ADD':
        return {
          count: state.count + 1
        };
    case 'SUBTRACT':
        return {
          count: state.count - 1
        };
    default:   
        return state;
  }
}

export default reducer;