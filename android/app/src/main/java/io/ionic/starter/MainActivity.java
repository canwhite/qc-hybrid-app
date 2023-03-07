package io.ionic.starter;

import com.getcapacitor.BridgeActivity;

import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.TextView;

//点击继承类BridgeActivity，然后在内部找到Bridge，然后在Bridge里就可以找到webview
//不用再自己新建继承，在那个地方改就可以
public class MainActivity extends BridgeActivity {}
