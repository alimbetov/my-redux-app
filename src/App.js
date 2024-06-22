// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter1, decrementCounter1, incrementCounter2, decrementCounter2 } from './rdx/actions';

const App = () => {
  // Получаем текущее состояние счетчиков из store
  const count1 = useSelector(state => state.counter1.count);
  const count2 = useSelector(state => state.counter2.count);

  // Получаем функцию dispatch для отправки действий
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter 1: {count1}</h1>
      {/* Кнопки для управления первым счетчиком */}
      <button onClick={() => dispatch(incrementCounter1())}>Increment Counter 1</button>
      <button onClick={() => dispatch(decrementCounter1())}>Decrement Counter 1</button>

      <h1>Counter 2: {count2}</h1>
      {/* Кнопки для управления вторым счетчиком */}
      <button onClick={() => dispatch(incrementCounter2())}>Increment Counter 2</button>
      <button onClick={() => dispatch(decrementCounter2())}>Decrement Counter 2</button>
    </div>
  );
};

export default App;
