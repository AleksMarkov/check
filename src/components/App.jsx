import React from 'react';

function outerFunction(...outerVariable) {
  const innerVariable = 'inner';
  console.log('outerarguments: ', arguments);
  function innerFunction(...innerParameter) {
    console.log('outerVariable:', outerVariable); // Доступ к переменной из внешнего лексического окружения
    console.log('innerVariable:', innerVariable); // Доступ к переменной из текущего лексического окружения
    console.log('innerParameter:', innerParameter); // Доступ к параметру функции
    console.log('innerarguments: ', arguments);
  }

  return innerFunction;
}

const func = outerFunction('outer', 'parameter', 'outer');
func('parameter', 'outer'); // Выводит: outerVariable: outer, innerVariable: inner, innerParameter: parameter

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
