let el = document.getElementsByClassName("container");
const appendHTML = document.createElement('container');


console.log(el);

for (let current = 20; current < 50; current = current + 1) {
    if (current % 7 == 0) {
        const textNode = document.createTextNode(current+'  ');
        appendHTML.appendChild(textNode);
        document.body.append(appendHTML);
        //break;
    }
  }
  // → 21

 

