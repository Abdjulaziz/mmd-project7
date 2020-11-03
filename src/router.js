import Vue from 'vue';
import Router from 'vue-router';
import Helseboxen from './components/Helseboxen.vue';
import HelseboxenImmun from './components/HelseboxenImmun.vue';
import HelseboxenCustom from './components/HelseboxenCustom.vue';
import HelseboxenQuiz from './components/HelseboxenQuiz.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helseboxen',
      component: Helseboxen,
    },
    {
      path: '/helseboxenimmun',
      name: 'helseboxenimmun',
      component: HelseboxenImmun,
    },
    {
      path: '/helseboxencustom',
      name: 'helseboxecustom',
      component: HelseboxenCustom,
    },
    {
      path: '/helseboxenquiz',
      name: 'helseboxenquiz',
      component: HelseboxenQuiz,
    },
  ],
});
