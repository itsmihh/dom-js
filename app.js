// DOM Manipulation


// Styling Elements
const title = document.querySelector('#main-heading');
title.style.color = 'red';

const listItems = document.querySelectorAll('.list-items');

for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
}

console.log(title);

// Creating Elements 
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// Adding Elements
// ul.append(li);

// Modifying the Text
// li.innerText = 'X-men';

// Modifying Attributes and Classes
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');
// console.log(title.getAttribute('id'));

// li.classList.add('list-items')
// li.classList.remove('list-items')
// console.log(li.classList.contains('list-items'));

// Remove Elements

// li.remove();

// ----------

// Transverse the DOM

//Parent Node Traversal
let ul = document.querySelector('ul')
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode)
// console.log(html.parentElement)

// Child Node Traversal

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'orange';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal

console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);


// Event Listeners

// element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn () {
    alert("I also love javascript")
};

buttonTwo.addEventListener("click", alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'lightblue';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor)


// Reveal Event

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');
    }
};

revealBtn.addEventListener('click', revealContent);


// Event Probagation

// window.addEventListener('click', function() {
//     console.log("Window");
// }, false);

// document.addEventListener('click', function() {
//     console.log("Document");
// }, false);

// document.querySelector(".div2").addEventListener('click', function(e) {
//     e.stopPropagation();
//     console.log("DIV 2");
// }, false);

// document.querySelector(".div1").addEventListener('click', function() {
//     console.log("DIV 1");
// }, false);

// document.querySelector(".button").addEventListener('click', function(e) {
//     e.preventDefault()
//     console.log(e.target.innerText = 'clicked!');
// }, false);



// Event Delegation
//It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector

// document.querySelector('#football').addEventListener('click', function(e) {
//     console.log('football is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgray'
//     }
// })


document.querySelector("#sports").addEventListener('click', function(e) {
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'green';
    }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');
sports.appendChild(newSport);