import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import './permission';

if(process.env.NODE_ENV === 'development'){
  require('../mock');
}

new Vue({
  components:{
    App
  },
  render(h){
    return h('App')
  },
  router,
  store
}).$mount('#app');