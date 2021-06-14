'use strict';

const input = document.querySelector('#input'),
   btn = document.querySelector('#btn'),
   result = document.querySelector('#list');

let todos = [];

btn.addEventListener('click', addTodo);

input.addEventListener('keyup', function (event) {
   if (event.keyCode == 13) {
      addTodo();
   }
});

function addTodo() {
   let x = input.value;
   todos.push(x);
   let value = '';

   for (const todo of todos) {
      value = todo;
   }
   if (value !== '') {
      result.innerHTML += `<li class="list-item">${value}</li>`;
   }
   cleanInput();
};

function cleanInput() {
   input.value = '';
};

let removeChildOfList = document.querySelector('#list');
removeChildOfList.addEventListener('click', function (event) {
   removeChildOfList.removeChild(event.target);
});
