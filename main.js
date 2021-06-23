'use strict';

const input = document.querySelector('#input'),
   btn = document.querySelector('#btn'),
   result = document.querySelector('#list'),
   rewardTextGood = document.querySelector('.reward--good'),
   rewardTextBad = document.querySelector('.reward--bad');


let todos = [];

input.addEventListener('keyup', function (event) {
   if (event.keyCode == 13) {
      doOnClick();
   }
});

btn.addEventListener('click', doOnClick);

function doOnClick() {
   addTodo();
   cleanInput();
}

function addTodo() {
   let x = input.value;
   todos.push(x);
   let value = '';
   for (const todo of todos) {
      value = todo;
   }
   if (value !== '') {
      result.innerHTML += `<li class="list-item">${value}</li>`;
      giveReward();
   }
}

let removeChildOfList = document.querySelector('#list');
removeChildOfList.addEventListener('click', function (event) {
   removeChildOfList.removeChild(event.target);
});

function cleanInput() {
   input.value = '';
}

function giveReward() {
   const reward = Math.random();

   switch (true) {
      case (reward <= 0.6):
         classChangeGood();
         break;

      case (reward >= 0.9):
         classChangeBad();
         break;
   }
}

function classChangeGood() {
   rewardTextGood.classList.add('visible');
   setTimeout(function () {
      rewardTextGood.classList.remove('visible');
   }, 2000);
}

function classChangeBad() {
   rewardTextBad.classList.add('visible');
   setTimeout(function () {
      rewardTextBad.classList.remove('visible');
   }, 2000);
}

