'use strict';

const logo = document.querySelector('.logo');

function handlerSuccess() {
  const messageElement = document.createElement('div');

  messageElement.className = 'message';
  messageElement.innerHTML = 'Promise was resolved!';
}

function handlerError() {
  const messageElement = document.createElement('div');

  messageElement.className = 'message error-message';
  messageElement.innerHTML = 'Promise was rejected!';
}

const promise1 = new Promise((resolve, reject) => {
  resolve('click', logo);
  reject(new Error('error'));
});

const promise2 = new Promise((resolve, reject) => {
  resolve('click', logo);
  setTimeout(() => reject(new Error('error')), 3000);
});

promise1.then(handlerSuccess(), handlerError());
promise2.then(handlerSuccess(), handlerError());
