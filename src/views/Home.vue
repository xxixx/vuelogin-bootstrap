<template>
  <div class="home">
    <HeaderNav />
    <img alt="background" src="../assets/coffee_bg.jpg">
    <Welcome msg="Welcome "/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: 'Main',
  components: {
    Welcome,
    HeaderNav
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
