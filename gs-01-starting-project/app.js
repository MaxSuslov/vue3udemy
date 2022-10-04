const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  // .value is a built-in property on JS input elements. We can extract if from the user input.
  const enteredValue = inputEl.value;
  // .createElement is a standard JS method
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  // just append() would also work
  listEl.appendChild(listItemEl);
  // clear the input!
  inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);
