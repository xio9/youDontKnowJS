'use strict';

const adv = document.querySelector('.adv');
const books = document.querySelectorAll('.book');
const body = document.body;
const elems = document.querySelectorAll('li');

const newElem = document.createElement('li');
newElem.textContent = 'Книга 3. this и Прототипы Объектов';

const chapter = document.createElement('li');
chapter.textContent = 'Глава 8: За пределами ES6';
chapter.classList.add('lox');

console.log(elems);

console.log(books);

books[2].before(books[0]);
books[4].after(books[3]);
books[5].after(books[2]);

elems[3].after(elems[6]);
elems[6].after(elems[8]);
elems[9].after(elems[2]);

elems[47].after(elems[55]);
elems[50].after(elems[48]);
elems[53].after(elems[51]);

elems[40].replaceWith(newElem);

elems[25].append(chapter);

adv.style.display = 'none';
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// 25