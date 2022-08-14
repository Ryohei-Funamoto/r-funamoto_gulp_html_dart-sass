'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const test = document.querySelector('.js-test');

  test.addEventListener('mouseover', function () {
    test.style.backgroundColor = 'blue';
  });

  test.addEventListener('mouseleave', function () {
    test.style.backgroundColor = 'red';
  })
});