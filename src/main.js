import {
    createApp
} from 'vue'
import router from './router'
import store from './store'
import './style.css'
import App from './App.vue'
import "swiper/css";
import "swiper/css/navigation";

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')