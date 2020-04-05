
<script>
export default {
  name: 'Statistics',
}
</script>

<template>
  <div>
    <h1 class="title">Totals</h1>
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
         <b-card no-body>
    <b-tabs class="title" card>
      <b-tab no-body title="Total Confirmed">
        <b-card-tex>TBD</b-card-tex>
        <b-card-footer></b-card-footer>
      </b-tab>

      <b-tab no-body title="Total Deaths">
        <b-card-text>TBD</b-card-text>
        <b-card-footer></b-card-footer>
      </b-tab>

      <b-tab no-body title="Countries/Regions">
      <b-card-text>TBD</b-card-text>
        <b-card-footer></b-card-footer>
      </b-tab>
    </b-tabs>
  </b-card>
      </b-row>
  </b-container>
  </div>
</template>

<style scoped>
.title {
    font-family: 'Paytone One', sans-serif;
    text-transform: uppercase;
}
</style>