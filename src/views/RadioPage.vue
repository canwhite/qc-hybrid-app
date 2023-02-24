<!--
 * @Author: liyafei liyafei@csii.com.cn
 * @Date: 2023-02-24 15:43:13
 * @LastEditors: liyafei liyafei@csii.com.cn
 * @LastEditTime: 2023-02-24 17:36:26
 * @FilePath: /qc-hybrid-app/src/views/RadioPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow-y: auto;
    background: rgb(216, 129, 129);
  }
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Radio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">
        Radio content
        <div style="height:900px;">
          页面滚动测试
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';

</script>