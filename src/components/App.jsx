import React from 'react';
import $ from 'jquery';

var module = (function () {
  var privateVariable = 'I am private';
  function privateFunction() {
    console.log(privateVariable);
  }
  return {
    publicMethod: function () {
      privateFunction();
    },
  };
})();

module.publicMethod(); // "I am private"
console.log(module.privateVariable); // undefined

(function ($) {
  // Код, использующий jQuery, переданный как параметр $
  $(document).ready(function () {
    console.log('DOM is ready');
  });
})($);

export const App = () => {
  return <div>React homework template</div>;
};
