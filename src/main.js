/*
 * @Author: liyafei liyafei@csii.com.cn
 * @Date: 2023-02-23 18:42:45
 * @LastEditors: liyafei liyafei@csii.com.cn
 * @LastEditTime: 2023-02-24 15:31:04
 * @FilePath: /qc-hybrid-app/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import WebView from  "@/components/WebView.vue";



const app = createApp(App).use(IonicVue).use(router);

app.component("web-view",WebView);//全局注册一下,直接使用吧
  
router.isReady().then(() => {
  app.mount('#app');
});