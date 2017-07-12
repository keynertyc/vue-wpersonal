/**
 * Created by Keyner on 7/11/17.
 */
import Vue from 'vue';
import router from './router';
import i18n from './i18n';
import App from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App },
});
