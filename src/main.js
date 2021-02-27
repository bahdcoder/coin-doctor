import Vue from 'vue'
import App from './App.vue'
import Cryptoicon from 'vue-cryptoicon'
import icon from 'vue-cryptoicon/src/icons'

Cryptoicon.add(icon)

Vue.use(Cryptoicon)

import './tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
