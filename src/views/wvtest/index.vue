<!-- eslint-disable vue/multi-word-component-names -->
<template> 
    <ion-page>
        <web-view :url ="url"/>
    </ion-page>
</template>
<script setup>
import { IonPage} from '@ionic/vue';
import {ref} from "vue";
const url = ref("http://192.168.10.61:5173/test1/");




</script>