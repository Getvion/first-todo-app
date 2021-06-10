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
      console.log('pusto')
      console.log(value);
   } else {

      result.innerHTML += `<li>${value}</li>`
   }
};
