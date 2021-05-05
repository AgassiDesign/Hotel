import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
window.moment = require('moment');
import VueCookies from 'vue-cookies';
//Enable Debug and Tools
// https://012.vuejs.org/api/global-api.html
Vue.config.debug = true;
Vue.config.devTools = true;
Vue.config.productionTip = false;

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = '/wp-json/';
window.axios = axios;
Vue.use(VueAxios, axios);
Vue.use(VueCookies);

new Vue({
    render: (h) => h(App),
}).$mount('#app-container');
