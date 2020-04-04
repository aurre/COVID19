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
    <h1> Welcome, click image below to continue </h1>
    <img class="box" alt="CoVID19" src="../assets/covid19img.jpg" v-on:click="goToStats">
  </div>
</template>

<style scoped>
.box {
  transition: box-shadow .3s;
  border-radius:10px;
  border: 1px solid #ccc;
  background: #fff;
}
.box:hover {
  box-shadow: 0 0 32px rgba(255,0,0,.9);
}
</style>