const ul  = document.getElementById("todo");
const newelem = document.createElement('li');
newelem.textContent=" WE ARE CREATING IT DYNAMICALLY BY JS";
const li2 = newelem.cloneNode(true)// this clones a node but node the text content if we write true in its peranthisis it clones the text also
// now we can also add this to our main method using a specific method
ul.append(newelem);
ul.prepend(li2);