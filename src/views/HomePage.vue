<!--
 * @Author: liyafei liyafei@csii.com.cn
 * @Date: 2023-02-26 21:12:42
 * @LastEditors: liyafei liyafei@csii.com.cn
 * @LastEditTime: 2023-03-07 17:14:12
 * @FilePath: /qc-hybrid-app/src/views/HomePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- eslint-disable no-unused-vars -->
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>搜索列表</ion-title>
      </ion-toolbar>
      <ion-searchbar class="search-btn" @Change="changeFn" animated="true" placeholder="请输入您想查询的资讯"></ion-searchbar>
     
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-button style="width: 100%" @click="gotoWv">
        weview  
      </ion-button>
      <ion-list>
        <ion-item v-for="(item, index) in filteredItems" :key="index">
          {{ item }}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>

import { IonPage, IonHeader, IonContent,IonSearchbar,IonList, IonItem, IonTitle, IonToolbar,IonButton} from '@ionic/vue';
import {useRouter} from "vue-router";
const router = useRouter();
// import { ref} from 'vue';
// const url = ref("http://192.168.10.61:5173/test1/");
const gotoWv = ()=>{
  
  router.push({path:"webview"})


}
const filteredItems = ['苹果', '香蕉', '梨']

const changeFn =(a)=>{
  console.log('搜索框值改变',a.target.value);
}


</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
ion-searchbar.search-btn {
    --background: #19422d;
    --color: #fff;
    --placeholder-color: #fff;
    --icon-color: #fff;
    --clear-button-color: #fff;

    --border-radius: 40px;
  }
.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding:20px;
  width: 100%;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
