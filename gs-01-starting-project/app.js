Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
  // we need to define which part of the page should be controlled by Vue app. In our case div#app contains all Vue-related code. In mount we use a string containing the CSS-like selector
}).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   // .value is a built-in property on JS input elements. We can extract if from the user input.
//   const enteredValue = inputEl.value;
//   // .createElement is a standard JS method
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   // just append() would also work
//   listEl.appendChild(listItemEl);
//   // clear the input!
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
