// ---- Calculette sans eval qui marche presque (pb sur ==) ----

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".op");
const display = document.querySelector("#display");
const total = document.querySelector("#total");
const clear = document.querySelector("#clear");
const result = document.querySelector("#compute");

let input = "";
let memory = 0;
memoryOperation = "";


for (let num of number) {
      num.addEventListener('click', updateElement);
}

for (let symbol of operator) {
      symbol.addEventListener('click', updateElement);
}

clear.addEventListener("click", updateElement);

result.addEventListener("click", updateElement);


function updateElement () {
      let key = this.innerText;
      if (parseFloat(key) > 0 ) {
            input = input + key.toString();
            display.innerText = input;
      } else {
            if (key == "+" || "-" || "*" || "/") {
                  input = input + key.toString();
                  display.innerText = input;
                  if (memory == 0) {
                        memory = parseFloat(input);
                        memoryOperation = key;
                        total.innerText = memory;
                        input = key + "";
                        display.innerText = input;
                  } else {
                        memory = doTheMaths(memory, parseFloat(input), memoryOperation);
                        total.innerText = memory;
                        memoryOperation = key;
                        input = key + "";
                        display.innerText = input;
                  }      
            } else {
                  if (key == "=") {
                        if (memory == 0) {
                              memory = parseFloat(input);
                              total.innerText = memory;
                              input = "";
                              display.innerText = input;
                        } else {
                              memory = doTheMaths(memory, parseFloat(input), memoryOperation);
                              total.innerText = memory;
                              memoryOperation = "";
                              input = "";
                              display.innerText = input;
                        }      
                  }
            }
            if (key == "C") {
                  memory = 0;
                  input = "";
                  display.innerText = input;
                  total.innerText = "";
            }
      }
}

function doTheMaths(nb1, nb2, operation) {
      nb1 = parseFloat(nb1);
      nb2 = parseFloat(nb2);
      if (operation == "+") {
            return (nb1 + nb2);
            }
      if (operation == "-") {
            return (nb1 - nb2);
            }
      if (operation == "*") {
            return (nb1 * nb2);
            }
      if (operation == "/") {
            return (nb1 / nb2);
            }
}


