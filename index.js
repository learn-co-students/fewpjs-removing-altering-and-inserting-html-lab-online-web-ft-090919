document.getElementById('main').remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory";

newHeader.innerHTML = "Marco is the champion";

document.body.append(newHeader);
