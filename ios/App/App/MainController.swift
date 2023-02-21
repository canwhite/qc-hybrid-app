import Capacitor
import WebKit

class MainController: CAPBridgeViewController, WKNavigationDelegate {

    var myWebView: WKWebView?

    override func viewDidLoad() {
        super.viewDidLoad()

        // 创建一个 WKWebView 对象，并将其添加到视图控制器的视图中
        let webConfiguration = WKWebViewConfiguration()
        myWebView = WKWebView(frame: .zero, configuration: webConfiguration)
        myWebView?.navigationDelegate = self
        if let myWebView = myWebView {
            view.addSubview(myWebView)
        }

        // 加载应用程序的 index.html 文件
        if let url = Bundle.main.url(forResource: "public/index", withExtension: "html") {
            let request = URLRequest(url: url)
            myWebView?.load(request)
        }
    }

    // 实现 WKNavigationDelegate 协议中的方法，以便在 WebView 完成加载后进行处理
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print("WebView did finish loading.")
    }

    
}
