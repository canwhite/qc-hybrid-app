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


    }
}
