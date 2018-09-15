import { createStore } from 'redux';

const reducer = (state = { isLogin: false, number: 1, huruf: '' }, action) => {
  switch (action.type) {
    case 'PLUS':
      return {
        ...state,
        number: state.number + 1
      };
    case 'MINUS':
      return {
        ...state,
        number: state.number - 1
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false
      };
    // case 'Change':
    //   Handlechange = () => {
    //     setState({
    //       huruf: target.value
    //     });
    //     return Handlechange();
    //   };
    default:
      return state;
  }
  //return state;
};
const store = createStore(reducer);

export default store;
