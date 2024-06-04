let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('num'));
let operators = Array.from(document.getElementsByClassName('op'));
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');
let currentOp = '';
let currentNum = '';
let shouldReset = false;

buttons.map( button => {
  button.addEventListener('click', () => {
    if (shouldReset) reset();
    display.value += button.innerText;
    currentNum += button.innerText;
  })
});

operators.map( operator => {
    operator.addEventListener('click', () => {
      if (currentOp !== '') evaluate();
      currentOp = operator.value;
      currentNum = '';
      display.value += operator.value; // Changed from operator.innerText
    })
  });

equals.addEventListener('click', () => {
  evaluate();
  shouldReset = true;
});

clear.addEventListener('click', () => {
  reset();
});

function evaluate() {
  display.value = eval(display.value);
  currentNum = display.value;
  currentOp = '';
}

function reset() {
  display.value = '';
  currentNum = '';
  currentOp = '';
  shouldReset = false;
}

let backspace = document.getElementById('backspace');

backspace.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
  currentNum = currentNum.slice(0, -1);
});