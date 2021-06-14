// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Dialog } from 'vant';
import { Field } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Step, Steps } from 'vant';
import echarts from 'echarts'
import { Icon } from 'vant';

Vue.use(Icon);
Vue.prototype.$echarts = echarts
Vue.use(Step);
Vue.use(Steps);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Field);
// 全局注册
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
