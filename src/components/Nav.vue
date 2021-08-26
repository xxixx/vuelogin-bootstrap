<template>
  <nav class="main-navbar navbar navbar-light navbar-expand-md bg-secondary">
        <div class="container-fluid mobile"><a class="navbar-brand" href="#">Brand</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <ul class="navbar-nav d-flex flex-row loginstat">
                <li v-if="isLogin ==false" class="nav-item"><a class="nav-link active text-white" href="#"><router-link to="/login">Login</router-link></a></li>
                <li v-if="isLogin ==true" class="nav-item"><a class="nav-link text-white mx-3" href="#">{{userInfo.name}}</a></li>
                 <li v-if="isLogin ==true"  class="nav-item"><a class="nav-link active text-white" href="#"><router-link to="/mypage">Mypage</router-link></a></li>
                 <!-- <li v-if="isLogin ==true" class="nav-item"><a @click="logout" class="nav-link active text-white" href="#"><router-link to="/">Logout</router-link></a></li> -->
                  <li v-if="isLogin ==true" class="nav-item"><a @click="$store.dispatch('logout')" class="nav-link active text-white" href="#"><router-link to="/login">Logout</router-link></a></li>
                 <!--click="$store.dispatch('logout')"  사용시 ...mapActions 등록안해도 됨 
                 또는 mutations을 사용할수도 있다. @click="$store.commit('logout')" -->
               
            </ul>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav navbar-collapse-mobile ">
                    
                   <li class="nav-item"><a class="nav-link" href="#"><router-link to="/">Home</router-link> </a></li>
                   
                    <li v-if="isLogin ==false" class="nav-item"><a class="nav-link" href="#"><router-link to="/login">Login</router-link></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><router-link to="/dashboard">Dashboard</router-link></a></li>
                    <li v-if="isLogin ==true" class="nav-item"><a class="nav-link" href="#"><router-link to="/mypage">My page</router-link></a></li>
                  
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed : {
        ...mapState(['isLogin' , 'loginError' , 'userInfo'])
    },
    methods : {
        // ...mapActions(['logout'])
    }
}
</script>

<style>
/* ul li a{
    color: rgb(75, 72, 72);
    text-decoration:none
    ;
}ul li a:hover{
    color: white;
    
    ;
} */
</style>