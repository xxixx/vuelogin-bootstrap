<template>
<div>
  <h4>login</h4>
       <div class="container border rounded-0 login-con" position="" top="50%">
        <div>
            <div v-if="isLogin" class="alert alert-success" role="alert" style="background: var(--bs-success);color: var(--bs-white);"><span><strong>Alert</strong> 로그인 되었습니다.</span></div>
            <div v-if="loginError" class="alert alert-success" role="alert" style="background: var(--bs-orange);color: var(--bs-white);"><span><strong>Alert</strong> 이메일을 입력하세요.</span></div>
            <div class="input-group"><input v-model="email" class="form-control" type="text" placeholder="email"></div>
            <div class="input-group"><input v-model="password" class="form-control mt-2" type="text" placeholder="password" mt-2=""></div>
            <a @click="login({email:email, password:password})" class="btn btn-success d-block mt-3" role="button">Login</a>
               


        </div>
    </div>
</div>
</template>

<script>
import{ mapState,mapActions } from 'vuex'
export default {
    data(){
      return{
            email : null,
            password : null,
           }  
    },
    //computed/////////////////////////////////////
    computed: {
                ...mapState(['isLogin', 'loginError'])
    },

    ///////////////////////////////////////////////
    // methods
    methods: {
              ...mapActions(['login'])
    /////////
    }
}
</script>

<style>

</style>