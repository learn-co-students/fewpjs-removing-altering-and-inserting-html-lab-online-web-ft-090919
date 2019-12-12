// Write your code here!
let main = document.getElementById('main');
main.remove();

const header = document.createElement('header');

header.innerHTML = "<h1 id='victory'>Kenneth is the champion</h1>"

document.body.appendChild(header);

const newHeader = document.getElementById('victory');
