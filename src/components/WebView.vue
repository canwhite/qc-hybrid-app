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
import {onMounted,onUnmounted,ref} from "vue";
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonContent} from '@ionic/vue';
import {Subject} from "rxjs";
const props = defineProps(["url"]);
const subject$ = ref(new Subject());
const subs = ref([]);
const htmlref = ref();

//如果离开当前页面，销毁订单
onUnmounted(()=>{
    subs.value.forEach((item)=>{
        item?.unsubscribe();
    })
})


//trigger
const sub =  subject$.value.subscribe((res)=>{
    // console.log("res",res);
    //camera triggger 
    if(res?.type === "camera"){
        //todo
        console.log("object", res?.type);
        takePicture();
    }
    //camera callback
    if(res?.type === "cameraCb"){
        //往回传
        htmlref.value.contentWindow?.postMessage(res,"*");
    }

    //todo...
    //keyboard trigger 


    //keyboard callback





});


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
    type:"cameraCb",
    value:imageUrl
  })
};



//在这里边做一些监听事
onMounted(()=>{
    //先监听message 


})

//完成load之后的提醒
const haveLoad = ()=>{
    if(window){
        window.addEventListener('message', function (messageEvent) {
            if (event.origin === 'http://42.194.146.195:8888'){
                var data = messageEvent.data;
                subject$.value.next(data);
            }else{
                //todo
                console.log("origin is error");
            }
        }, false);
    }
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

