<!--
 * @Author: liyafei liyafei@csii.com.cn
 * @Date: 2023-02-24 15:42:56
 * @LastEditors: liyafei liyafei@csii.com.cn
 * @LastEditTime: 2023-03-07 18:37:14
 * @FilePath: /qc-hybrid-app/src/views/SearchPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>我的</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button type="button" shape="round" @click="gotoOut">
        退出
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const gotoOut = () => {
  console.log('退出')
  router.push({ path: "/" })
}
</script>