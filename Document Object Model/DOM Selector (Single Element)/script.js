// document.getElementById()

let val;

//Getting an Element
val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;

// Chainging style
document.getElementById('document-title').style.background = '#333';
document.getElementById('document-title').style.padding = '10px';
document.getElementById('ol').style.background = 'red';

console.log(val);