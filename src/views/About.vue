<template>
  <div class="about">
       <HeaderNav />
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: 'About',
  components: {
    
    HeaderNav
  }
}
</script>
<style>

</style>

