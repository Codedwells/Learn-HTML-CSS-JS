const list = document.getElementById('languages');

// Adding an element to the DOM
let cpp = document.createElement('li');
cpp.id = 'cpp';
cpp.textContent = 'C ++';
list.appendChild(cpp)


const h3 = document.getElementsByClassName('beginning')[0];
h3.setAttribute('id','heading')

h3.removeAttribute('id')
console.log(h3)

