// counter2Reducer.js
import { INCREMENT_COUNTER2, DECREMENT_COUNTER2 } from './actions';

// Начальное состояние для второго счетчика
const initialState = {
  count: 0
};

// Редуктор для второго счетчика
const counter2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER2:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER2:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter2Reducer;
