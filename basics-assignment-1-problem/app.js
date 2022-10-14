const app = Vue.createApp({
  data() {
    return {
      name: 'MaxSus',
      age: 44,
      image:
        'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
    };
  },
  methods: {
    randomNum() {
      return Math.random();
    }
  }
});

app.mount('#assignment');
