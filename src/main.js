import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueKonva from 'vue-konva'
import JsonCSV from 'vue-json-csv'

Vue.use(VueKonva)
Vue.use(BootstrapVue)
Vue.component('downloadCsv', JsonCSV)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
