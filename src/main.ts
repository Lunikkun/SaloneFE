import VueCookies  from 'vue-cookies';
import { inject } from 'vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
 

const app = createApp(App).use(VueCookies)
app.use(createPinia())
app.use(router)
app.mount('#app')
