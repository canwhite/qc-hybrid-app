<!--
 * @Author: liyafei liyafei@csii.com.cn
 * @Date: 2023-02-24 15:25:05
 * @LastEditors: liyafei liyafei@csii.com.cn
 * @LastEditTime: 2023-02-24 16:03:36
 * @FilePath: /qc-hybrid-app/src/components/Example.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="playCircle" />
          <ion-label>Listen now</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio" href="/radio">
          <ion-icon :icon="radio" />
          <ion-label>Radio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/library">
          <ion-icon :icon="library" />
          <ion-label>Library</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
  import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

  import { playCircle, radio, library, search } from 'ionicons/icons';
  
  // export default {
  //   components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
  //   data() {
  //     return {
  //       playCircle,
  //       radio,
  //       library,
  //       search,
  //     };
  //   },
  // };
</script>