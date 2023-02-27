import {
    createApp
} from 'vue'
import router from './router'
import store from './store'
import './style.css'
import App from './App.vue'
import "swiper/css";
import "swiper/css/navigation";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVhVwwOAjvLWAhZ5wxuKNiHAZGheBqXCQ",
  authDomain: "vuecommerce-77179.firebaseapp.com",
  projectId: "vuecommerce-77179",
  storageBucket: "vuecommerce-77179.appspot.com",
  messagingSenderId: "853722595159",
  appId: "1:853722595159:web:e150ff9039ee7f58700812",
  measurementId: "G-HEQ0VVY4PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')