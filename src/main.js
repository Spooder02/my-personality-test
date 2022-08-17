import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import navi from './components/nav.vue'
import card from '@/components/card.vue'
import ptlist from '@/views/personality-tests.vue'
import lifestylept from '@/views/lifestyle-personality.vue'
import surveyguide from '@/components/surveyguide.vue'
import Form from '@/components/form.vue'
import lifestylepttest from '@/views/lifestyle-personality-test.vue'
Vue.component('navi', navi)
Vue.component('card', card)
Vue.component('ptlist', ptlist)
Vue.component('lifestylept', lifestylept)
Vue.component('surveyguide', surveyguide)
Vue.component('forms', Form)
Vue.component('lifestylepttest', lifestylepttest)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
