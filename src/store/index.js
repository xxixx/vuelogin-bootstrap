import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo : null ,
    alluser : [
      {id :1, name: 'Tera', email : '1@a.com', password : '11111111'},
      {id : 2, name :'Kim', email : '1@a.com', password : '11111111'}
      ],
      isLogin : false,
      loginError : false
  },
  mutations: {
    loginSuccess(state, payload){
      state.isLogin = true,
      state.loginError = false
      state.userInfo = payload

  },
  loginError(state){
    state.isLogin = false,
    state.loginError = true
  },
  logout(state){
    state.userInfo = null 
    state.loginError = false
    state.isLogin = false
  }
},
  actions: {
          login({state, commit},loginObj){
              
                  let selectedUser = null;
                  state.alluser.forEach(user =>{
                      if (user.email === loginObj.email) selectedUser = user
                  })
                
                  selectedUser === null
                  if (selectedUser === null || selectedUser.password !== loginObj.password)
                    commit ("loginError")
                   else {
                      commit("loginSuccess" ,selectedUser)
                      router.push('./')
              }
            },
              logout({commit}) {
                commit('logout')
                // router.push('/dashboard')
              }
            
      
  }


})
