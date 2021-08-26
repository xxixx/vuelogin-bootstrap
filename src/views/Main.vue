<template>
  <div id="main" class="">
    <Nav />
    <img alt="background" src="../assets/coffee_bg.jpg">
    <Welcome msg="Welcome "/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Welcome from '@/components/Welcome.vue'


export default {
  name: 'Main',
  components: {
    Nav,
    Welcome
  }
}
</script>
<style>
img{
  width: 70%;
 margin-top: 100px;
 margin-bottom: 100px;

}
</style>
