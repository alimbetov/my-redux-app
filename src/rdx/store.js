// store.js
import { createStore } from 'redux';
import rootReducer from './rootReducer';

// Создаем store и передаем ему корневой редуктор
const store = createStore(rootReducer);

export default store;
