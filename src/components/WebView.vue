<template>  
    <!-- ionic用ion-content和iframe作为webview组合       -->
    <ion-content  :fullscreen="true">
        <iframe 
            ref="htmlref"
            scrolling="no" 
            allowfullscreen
            :src="props.url"
            @load = "haveLoad">
        </iframe>
    </ion-content>
</template>
<script setup> 
import { onMounted, onUnmounted, ref } from "vue";
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonContent} from '@ionic/vue';
// import {Subject} from "rxjs";
import {useRouter} from "vue-router";
import {ionicMessageHandle} from "../plugins/wvm.js";
import {parseJsonStringToObject} from "../plugins/utils.js"
const props = defineProps(["url"]);
const subject$ = ref();
const subs = ref([]);
const htmlref = ref();
const router = useRouter();
const useMessage = ionicMessageHandle(htmlref.value,router);
const {appBack,onMessage, postMessage ,removeMessage,initPlatformWithParams,value$} = useMessage();

subject$.value = value$;

//trigger
const sub =  subject$.value.subscribe((res)=>{
    // console.log("res",res);
    //camera triggger 
    const str = `${res}`;
    const obj = parseJsonStringToObject(str);


    if(obj?.type === "camera"){
        //todo
        console.log("object", res?.type);
        takePicture();
    }
    //camera callback
    if(obj?.type === "cameraCb"){
        //往回传
        // htmlref.value.contentWindow?.postMessage(JSON.stringify(res),"*");
        postMessage(res);
    }
    if(obj?.type === "back"){
        appBack();
    }

  //todo...
  //keyboard trigger 


  //keyboard callback





});

//如果离开当前页面，销毁订单
onUnmounted(()=>{
    
    removeMessage();
    sub.unsubscribe();

})




subs.value.push(sub);

//action handle
const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  const imageUrl = image.webPath;
  //callback
  subject$.value.next({
    type: "cameraCb",
    value: imageUrl
  })
};



//在这里边做一些监听事
onMounted(() => {
  //先监听message 


})

//完成load之后的提醒
const haveLoad = ()=>{
    /** 
    if(window){
        window.addEventListener('message', function (messageEvent) {
            var data = messageEvent.data;
            subject$.value.next(data);

        }, false);

        htmlref.value?.contentWindow?.postMessage(JSON.stringify({
            type :"ionic",
            value:{}
        }),"*");

    }
    */
   onMessage();
   initPlatformWithParams();


}
</script>


<style>
iframe {
    width:100%;
    height:100%;
    border:none;
    overflow: hidden;
}
</style>

