<!--
 * @Author: liyafei liyafei@csii.com.cn
 * @Date: 2023-03-07 16:44:16
 * @LastEditors: liyafei liyafei@csii.com.cn
 * @LastEditTime: 2023-03-07 18:31:09
 * @FilePath: /qc-hybrid-app/src/views/login/loginPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
/* eslint-disable */ 
<template>
  <ion-page>
    <form @submit.prevent="handleLogin">
      <ion-card>
        <ion-item>
          <h3>欢迎登录</h3>
        </ion-item>
        <ion-item>
          <ion-label position="floating">账号</ion-label>
          <ion-input v-model="form.username" id="username" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">密码</ion-label>
          <ion-input v-model="form.password" type="password" id="password" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-button type="submit" shape="round">
            登录
            <ion-icon slot="end" :icon="logIn"></ion-icon>
          </ion-button>
        </ion-item>
        <ion-item>
          <ion-button type="button" shape="round" @click="gotoOut">
            注册
            <ion-icon slot="end" :icon="personAdd"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-card>
    </form>
  </ion-page>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { IonPage, IonCard, IonItem, IonLabel, IonButton, IonInput, alertController, IonIcon } from '@ionic/vue'
import { logIn, personAdd } from 'ionicons/icons';
// import { mapActions, mapGetters } from "vuex"
import {  reactive } from 'vue'
import {useRouter} from "vue-router";
const router = useRouter();



const form = reactive({
  username: '',
  password: ''
})
//const { username, password } = toRefs(form)
const handleLogin = async () => {
  console.log('登录',form)
  const errorAlert = await alertController.create({
    header: 'Failed',
    subHeader: 'Sign in Failed',
    message: '暂无接口',
    buttons: ['OK'],
  })
  await errorAlert.present()
}

const gotoOut = () => {
  console.log('注册')
  router.push({path:"home"})
}

</script>
