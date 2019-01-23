import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/vuex'
import axios from 'axios'
import rem from '@/common/rem'
import comStyle from '@/common/common.css'
import toastCss from '@/common/toast.css'
import loadCss from '@/common/loading.css'

import myMode from '@/components/myMode'
import myConfirm from '@/components/myConfirm'
import myTitle from '@/components/myTitle'

import Toast from '@/tool/toast'
import Loading from '@/tool/loading'

Vue.config.productionTip = false
Vue.component('myMode', myMode)
Vue.component('myConfirm', myConfirm)
Vue.component('myTitle', myTitle)

Vue.prototype.$axios = axios
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')