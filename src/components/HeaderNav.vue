<template>
  <div id="">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mypage">Mypage</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <div v-if="isLogin==false"> <router-link to="/login">Login</router-link> |</div>
     
    </div>
   
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed : {
        ...mapState(['isLogin' , 'loginError' , 'userInfo'])
    },
    methods : {
        // ...mapActions(['logout'])
    }
}
</script>
<style lang="scss">

</style>