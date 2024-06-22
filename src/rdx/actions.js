// actions.js

// Определяем типы действий для первого счетчика
export const INCREMENT_COUNTER1 = 'INCREMENT_COUNTER1';
export const DECREMENT_COUNTER1 = 'DECREMENT_COUNTER1';

// Определяем типы действий для второго счетчика
export const INCREMENT_COUNTER2 = 'INCREMENT_COUNTER2';
export const DECREMENT_COUNTER2 = 'DECREMENT_COUNTER2';

// Создаем функции для создания действий для первого счетчика
export const incrementCounter1 = () => ({ type: INCREMENT_COUNTER1 });
export const decrementCounter1 = () => ({ type: DECREMENT_COUNTER1 });

// Создаем функции для создания действий для второго счетчика
export const incrementCounter2 = () => ({ type: INCREMENT_COUNTER2 });
export const decrementCounter2 = () => ({ type: DECREMENT_COUNTER2 });
