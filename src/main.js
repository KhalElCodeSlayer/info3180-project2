import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'



const store = createStore({
    state() {
      return{
        token: '',
        csrf_token: ''
      }
    },
    mutations: {
      update_token(state, token) {
        state.token = token
      },
      update_csrf_token(state, token) {
        state.csrf_token = token
      }
    }
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
