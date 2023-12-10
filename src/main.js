import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(bootstrap).mount('#app')
