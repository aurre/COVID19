<script>
// As a preference I would like to display my vue files in this order
export default {
  name: 'Home',
  methods: {
      goToStats: function() {
          this.$router.push('/statistics');
      }
  }
};
</script>

<template>
  <div id="app">
    <h1 class="title"> Welcome</h1>
    <h2 class="subtitle">click image below to continue</h2>
    <img class="box" alt="COVID19" src="../assets/covid19img.jpg" v-on:click="goToStats">
  </div>
</template>

<style scoped>
.box {
  transition: box-shadow .3s;
  border-radius:10px;
  border: 1px solid #ccc;
  background: #fff;
  height: 500px;
}
.box:hover {
  box-shadow: 0 0 32px rgba(255,0,0,.9);
}
.title {
    font-family: 'Paytone One', sans-serif;
    text-transform: uppercase;
}
.subtitle {
    font-family: 'Paytone One', sans-serif;
} 
</style>