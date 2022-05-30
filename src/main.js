import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDaNzbbEj7l8x7Xot6GyVioTHIu4Ns-3Lg',
  authDomain: 'test-bae5c.firebaseapp.com',
  projectId: 'test-bae5c',
  storageBucket: 'test-bae5c.appspot.com',
  messagingSenderId: '821445020089',
  appId: '1:821445020089:web:d3705f0a668096800ece68',
  measurementId: 'G-X2Z0NVNFKX'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)
export const auth = getAuth()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
