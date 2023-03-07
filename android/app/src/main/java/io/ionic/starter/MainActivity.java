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

public class MainActivity extends BridgeActivity {
    //外置一个webview
    private  WebView webview;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //挂载视图内容
        setContentView(R.layout.activity_main);

        //先挂载好webview
        webview = (WebView) findViewById(R.id.web_view);
                //设置允许弹框
                webview.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
                webview.getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
                //当从一个网页跳转到另一个网页时，
                //我们希望目标网页仍然在当前webview显示
                webview.setWebViewClient(new WebViewClient());
        //设置属性
        webview.getSettings().setJavaScriptEnabled(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            // 在API 21及以上版本中，需要使用以下代码才能支持HTTP：
            webview.enableSlowWholeDocumentDraw();
            webview.loadUrl("http://192.168.10.61:8081/");
            //webview.loadUrl("file:///android_asset/public/index.html");
        }
        
    }
}
