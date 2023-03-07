package io.ionic.starter;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
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
        //设置属性
        webview.getSettings().setJavaScriptEnabled(true);
        //设置允许弹框
        webview.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        //当从一个网页跳转到另一个网页时，
        //我们希望目标网页仍然在当前webview显示
//        webview.setWebViewClient(new WebViewClient());
        webview.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                // Handle URL schemes here
                return super.shouldOverrideUrlLoading(view, url);
            }
        });

        webview.loadUrl("file:///android_asset/index.html");
        //webview.loadUrl("https://blog.csdn.net/nuanpang/article/details/125568722");





    }
}
