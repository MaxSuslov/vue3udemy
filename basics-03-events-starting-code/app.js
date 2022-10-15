const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: ''
    };
  },
  methods: {
    add(num) {
      return (this.counter = this.counter + num);
    },
    reduce(num) {
      return (this.counter = this.counter - num);
    },
    setName(event) {
      return (this.yourName = event.target.value);
    }
  }
});

app.mount('#events');
