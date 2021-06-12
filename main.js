'use strict';

const input = document.querySelector('#input'),
   btn = document.querySelector('#btn'),
   result = document.querySelector('#list');


btn.addEventListener('click', cleanInput);

let todos = [];
function cleanInput() {
   let x = input.value;
   input.value = '';
   todos.push(x);

   addTodo();
};

function addTodo() {
   let value = '';
   for (const todo of todos) {
      value = todo;
   }
   if (value == '') {
   } else {
      result.innerHTML += `<li class="list-item">${value}</li>`;
   }

   let removeChildOfList = document.querySelector('#list');

   removeChildOfList.addEventListener('click', function (event) {
      removeChildOfList.removeChild(event.target);
   });
};
