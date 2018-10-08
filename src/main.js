import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'

import '../node_modules/nprogress/nprogress.css' //menambahkan loading nprogress

Vue.config.productionTip = false

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
