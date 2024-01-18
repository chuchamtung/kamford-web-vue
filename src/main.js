import './assets/min.1.9.6.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './vue-router/index'
//import store from './store'
//createApp(App).use(router).use(ElementPlus).mount('#app')
const app = createApp(App)
app.directive('title', {
    mounted(el){
        document.title = el.dataset.title
    }
})
app.use(router).mount('#app')

