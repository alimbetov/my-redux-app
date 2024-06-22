// counter1Reducer.js
import { INCREMENT_COUNTER1, DECREMENT_COUNTER1 } from './actions';

// Начальное состояние для первого счетчика
const initialState = {
  count: 0
};

// Редуктор для первого счетчика
const counter1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER1:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER1:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter1Reducer;
