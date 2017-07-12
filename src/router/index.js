/**
 * Created by Keyner on 7/11/17.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import Home from '@/components/Home';

Vue.use(VueRouter);
Vue.use(Meta);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});
