import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './rdx/store';
import { incrementCounter1, decrementCounter1, incrementCounter2, decrementCounter2 } from './rdx/actions';

// Подписка на изменения состояния
store.subscribe(() => {
  console.log('State updated:', store.getState());
});

// Отправка действий для изменения состояния первого счетчика
store.dispatch(incrementCounter1()); // Счетчик 1 увеличивается на 1
store.dispatch(decrementCounter1()); // Счетчик 1 уменьшается на 1

// Отправка действий для изменения состояния второго счетчика
store.dispatch(incrementCounter2()); // Счетчик 2 увеличивается на 1
store.dispatch(decrementCounter2()); // Счетчик 2 уменьшается на 1


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

