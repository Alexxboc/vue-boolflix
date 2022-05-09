import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')