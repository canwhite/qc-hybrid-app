<!-- eslint-disable no-unused-vars -->
<template>
  <div>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>首页</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- <web-view :url ="url"/> -->
    <div class="flex-box"> </div>
      <ion-button style="width: 100%" @click="gotoWv">
        weview  
      </ion-button>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { IonHeader, IonPage, IonTitle, IonToolbar,IonButton} from '@ionic/vue';
import {useRouter} from "vue-router";
const router = useRouter();
// import { ref} from 'vue';
// const url = ref("http://192.168.10.61:5173/test1/");
const gotoWv = ()=>{
  
  router.push({path:"webview"})


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
