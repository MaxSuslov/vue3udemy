const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Learn Vue!',
      courseGoalB: 'Master Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      // calculate a random number between 0 and 1
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');
