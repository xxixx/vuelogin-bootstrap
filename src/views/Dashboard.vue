<template>
  <div class="container">
      <HeaderNav />
      <h4> welcome</h4>
        <h4 v-if="isLogin ==true">{{userInfo.name}} 로그인 되었습니다.</h4>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import {mapState} from 'vuex'
export default {
   computed : {
        ...mapState(['isLogin' , 'loginError' , 'userInfo'])
    },
components: { HeaderNav }

}
</script>

<style>

</style>