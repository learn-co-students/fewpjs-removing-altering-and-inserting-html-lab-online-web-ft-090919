let e = document.getElementById("main");
e.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
document.body.appendChild(newHeader);

newHeader.innerHTML = "Doug is the champion";
// const testVar = "hi";

// /* Enter the code to remove the node element here */
// document.querySelector("main#main").remove();

// /* Create your new element here and assign it to newHeader */
// const newHeader = document.createElement("h1");
// newHeader.id = "victory";
// newHeader.innerHTML = "Flatiron School is the champion!";
// newHeader.className = "victory";
