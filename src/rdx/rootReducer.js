// rootReducer.js
import { combineReducers } from 'redux';
import counter1Reducer from './counter1Reducer';
import counter2Reducer from './counter2Reducer';

// Объединение всех редукторов в один корневой редуктор
const rootReducer = combineReducers({
  counter1: counter1Reducer,
  counter2: counter2Reducer
});

export default rootReducer;
