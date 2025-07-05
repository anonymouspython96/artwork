import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importa stili globali
import '@/assets/scss/main.scss'

// Importa Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router).mount('#app')
