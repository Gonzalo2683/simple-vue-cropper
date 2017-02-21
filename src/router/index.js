import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import Gonza from 'components/Gonza';
import Main from 'components/Main';


Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/gonzo',
      component: Gonza,
    },
  ],
});
