import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const app = createApp(App)

const store = createStore({
    state () {
      return {
        token: '',
        user: ''
      }
    }
})

app.use(router)
app.use(store)
app.mount('#app')
