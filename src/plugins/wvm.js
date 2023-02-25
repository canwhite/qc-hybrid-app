/* eslint-disable no-unused-vars */
/** rn的操作封装 */
import {BehaviorSubject} from 'rxjs';

export const ionicMessageHandle = (htmlref, navigation) => {
  const xbs$ = new BehaviorSubject({});


  const handleMessage = (messageEvent)=>{
    var data = messageEvent.data;
    xbs$.next(data);

  }

  const postMessage = (data) => {
    htmlref?.contentWindow?.postMessage(JSON.stringify(data),"*");
  };

  const initPlatformWithParams = (data= {}) => {
    let msg = {
      type: 'ionic',
      value: data,
    };
    postMessage(msg);
  };

  const appBack = () => {
    //生成一个随机数，无痕返回
    navigation?.back();
  };
  return () => {
    return {
        onMessage:()=> window.addEventListener('message', handleMessage, false),
        removeMessage:()=>window.removeEventListener("message",handleMessage,false),
        postMessage:(data)=> postMessage(data),
        initPlatformWithParams: initPlatformWithParams,
        appBack: appBack,
        value$: xbs$,
    };
  };
};
