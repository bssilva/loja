import Vue from 'vue'
import App from './app/App.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import "./config/GlobalComponents";
import "./config/GlobalVariables";
import "./config/VueToasted"

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
