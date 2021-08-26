<template>
  <div class="container">
      <HeaderNav />
      <h4>My Page</h4>
        <h4> {{userInfo.first_name}}  {{userInfo.last_name}}로그인 되었습니다.</h4>
        <h4> {{userInfo.name}} 로그인 되었습니다.</h4>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import HeaderNav from '@/components/HeaderNav.vue'
export default {
components: { HeaderNav 
},
computed : {
    ...mapState(['userInfo'])
}
}
</script>

<style>

</style>