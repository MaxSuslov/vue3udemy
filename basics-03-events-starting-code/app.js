const app = Vue.createApp({
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    add() {
      return this.counter++;
    },
    reduce() {
      return (this.counter = this.counter - 1);
    }
  }
});

app.mount('#events');
