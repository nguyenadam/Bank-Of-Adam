import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire'

Vue.config.productionTip = false
Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

/*

accounts
  firebaseid - account number
  amount
  transactions
    transactionID
    timestamp
    amount
    from account
    to account


users
  accounts reference
  name
  profile pic
  date created
  stuff
  

*/