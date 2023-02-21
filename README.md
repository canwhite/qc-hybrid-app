## qc-hybrid-app
用ionic提供了一个壳儿，   
然后h5原生通信部分交给capacitor、jsbridge。   
webview是用ionic的ion-content和iframe搭配实现，   
通过iframe的交互和单个模块沟通。


# init

```
npm install -g @ionic/cli@latest
ionic start myApp blank --type vue
cd myApp
```

# ts => js

**this project had been changed** 

1.Remove TypeScript dependencies:
```
npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-typescript @vue/eslint-config-typescript
```

2.Change all .ts files to .js. In a blank Ionic Vue app, this should only be router/index.ts and main.ts.

3.Remove @vue/typescript/recommended and @typescript-eslint/no-explicit-any: ‘off’, from .eslintrc.js.

4.Remove Array<RouteRecordRaw> from router/index.js.

5.Delete the shims-vue.d.ts file.

6.Remove lang="ts" from the script tags in any of your Vue components that have them. In a blank Ionic Vue app, this should only be App.vue and views/Home.vue.


# build

1.add Capacitor to your project
```
ionic integrations enable capacitor
```
2.Next, build the project, then add your platform of choice:

```
ionic build
ionic cap add ios
ionic cap add android
```

3.We use the standard native IDEs (Xcode and Android Studio) to open, build, and run the iOS and Android projects:
```
ionic cap open ios
ionic cap open android
```

# update

```
ionic cap sync
```
  
# custom plugin

[custom plugin](https://github.com/canwhite/qc-capacitor-plugin)


# bridge
[jsbridge](https://juejin.cn/post/6844903885555892232)    
[jsbridge-example](https://github.com/canwhite/jsbridge-example)



# electron

```
cnpm i @capacitor-community/electron
ionic build
ionic cap add @capacitor-community/electron
PS1:
然后一直卡在：Adding Electron platform;
如果看到已经有electron文件夹了，ctrl + c退出;
将electron文件夹下原来的node_modules删除
cd electron
PS2：change src/index.ts to src/index.js
cnpm i
npm run electron:start

```


# ps
webview
是content和iframe搭配,自己封装一个   
ionic默认的webview也是如此

```
<template>  
    <ion-content :fullscreen="true">
        <iframe 
            ref="htmlref"
            scrolling="no" 
            allowfullscreen 
            :src="props.url"
            @load = "haveLoad">
        </iframe>
    </ion-content>
</template>

```