<template>
  <div id="app">
    <Nav />
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/Nav.vue'
export default {
  components:{ Nav}
}
</script>
<style lang="scss">
@import 'style.css';

</style>
