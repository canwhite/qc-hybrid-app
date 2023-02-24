<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>首页</ion-title>
      </ion-toolbar>
      <ion-content>
         <web-view :url ="url"/>
      </ion-content>
    </ion-header>
  </ion-page>
</template>

<script setup>
import { IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import { ref} from 'vue';
const url = ref("http://42.194.146.195:8888/test");

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
