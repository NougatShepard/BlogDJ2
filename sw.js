/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","4f5e443b4af2458339bdd4d70228ae40"],["/about/index.html","977d8b969e3c9988df2ad828e7d7ecd8"],["/archives/2019/04/index.html","a7475f3b72a44319e45dac14ba32dd5c"],["/archives/2019/05/index.html","4b7fe6ff77398eb0a205fe1e1a44820a"],["/archives/2019/05/page/2/index.html","1581a76c1697d8fb033428490babbba1"],["/archives/2019/05/page/3/index.html","92aa397821ba203a70f296f9e6a6541e"],["/archives/2019/06/index.html","b1709b45a2e34ed4ab08241cc5ee826d"],["/archives/2019/index.html","63d68b2f16b70508a93f6488be4c09f0"],["/archives/2019/page/2/index.html","ad70bf2cf1138476ddce685375be1e7a"],["/archives/2019/page/3/index.html","0b99312cb83c86d3f5ebec55af08f16a"],["/archives/2019/page/4/index.html","e11f9761fa1c456f549b9e75b1b405b7"],["/archives/index.html","83e45314548714abebdb909aadab19ae"],["/archives/page/2/index.html","b1a893c85f1d7133f060d6b1c61f5e9c"],["/archives/page/3/index.html","1fb64194f25dc86f9b51ba0766d28388"],["/archives/page/4/index.html","15c18ae26df25b6ef20d02d7e6c40c9d"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","f16690c981b0aaf1d53044ae633b47bf"],["/categories/index.html","983123626982dde8032547fd1ef4cb66"],["/categories/つぶやき/index.html","367c3123bf4f31f132e208dd0e344028"],["/categories/アニメ/index.html","180479c875c018598ddaae46a2895e6d"],["/categories/インターネット/index.html","cd3aebcbed1b3c82639cc0ac14bd135b"],["/categories/中国に関する新聞記事/index.html","daae3fcb4db343f18e017cf7b0d87940"],["/categories/労働者保護法律/index.html","02f6f60c8f528557e949d55a16d2cfad"],["/categories/心理学に関する記事/index.html","02d311d77e58a014889cb4f480e3637c"],["/categories/日常生活/index.html","885ea8dee7710324f8836a89069eada9"],["/categories/日本のIT教育/index.html","3feaac2ed25fa0d6606cf26025bdae19"],["/categories/日本のIT現場/index.html","66b8e9a5fa1ef5588e0d09c740811097"],["/categories/日本のビジネスマーナ/index.html","a2c9f5c214459dd264a1e0cd4890d19f"],["/categories/日本の国内の人権状況/index.html","0e64cef32af84cc137937960e4c9064f"],["/categories/日本の経済新聞記事/index.html","a8ee3195e4a2c93021db3eb4a49db9b0"],["/categories/日本地理/index.html","9a0069cfdb3e4e4d4bc76cc280c39e1c"],["/categories/毎日ことば/index.html","552e246a5e406a47f7d2d4151d432f1d"],["/categories/环境/index.html","b4546c138b6766a8d3c2d11eceb9244e"],["/categories/過酷な現場/index.html","379e6c8d1a725d40d6e1ae22749d3670"],["/categories/金融/index.html","9e5b6c4037198f9b5405b6a5daee0877"],["/categories/食べ物文化/index.html","1b99f43181e17e2de79f4303bebf4406"],["/categories/食品工業に関する記事/index.html","9d824a9fc29c5ce3f1506ab63aa29d3b"],["/css/main.css","60216e9378b47ded1cda11894f238db5"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","3ccd8055e8e897d3f145ba1b80cb61d8"],["/js/src/affix.js","02a6d22ac359a5178bbb389b2ca9890f"],["/js/src/algolia-search.js","1ec169b39c7a4ea748c1345694f13d5e"],["/js/src/bootstrap.js","a85ae126a60d526fbefd1c4c325d5b2d"],["/js/src/china.js","4662f87bc2d77a677f855dec32ed03ec"],["/js/src/echarts.min.js","c76bb5153378c8043fbfeee805d03d3c"],["/js/src/exturl.js","ef15e69f9c746bfa2343acb35f6aab80"],["/js/src/footprint.js","d100f61db210952f35a7ead64a7bcdac"],["/js/src/hook-duoshuo.js","522e03d4f79ac296cd8908f3f3a3aa8e"],["/js/src/instantclick.min.js","cfb6da87428d9cb1782097639e0e11e5"],["/js/src/js.cookie.js","6c3b9facc674f1d1655de64c8c227f61"],["/js/src/motion.js","de90d806e594d1f048e078c0070e6989"],["/js/src/post-details.js","a9dd0b5cf91d24a6508aaa18720a24b5"],["/js/src/schemes/pisces.js","4fe240a23257430b0751c708a6f3cf2e"],["/js/src/scroll-cookie.js","1d1a492221ef562cc2dbe5aebf0bf10c"],["/js/src/scrollspy.js","734ba217f116499594e2a8c7ba8a2c14"],["/js/src/utils.js","9cebb0ba7655064854ad1e3525adf993"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","9c85b71fdeb65eb749c6f4b188cc5e0a"],["/lib/Han/dist/han.js","0e94a468759998b8fb81220724cd9d73"],["/lib/Han/dist/han.min.css","3e3bb4b2cfb82ef848729d22eb9011d6"],["/lib/Han/dist/han.min.js","231b576b2ec09f6cd872bd5e81c5d221"],["/lib/algolia-instant-search/instantsearch.min.css","ad5dfc42f99887d70821596267f14969"],["/lib/algolia-instant-search/instantsearch.min.js","e12eddc3644c7f65274b46fc3a2ec531"],["/lib/canvas-nest/canvas-nest.min.js","c8e577de2e15f38505ac7e48821dc878"],["/lib/canvas-ribbon/canvas-ribbon.js","98184b454fa9ed028209fb835ae1483f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7e85414bc24dd62c173328c631f15143"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","89e7edff2c1b9c001bcde0a467ae4edd"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","fe9f87fe7ea52b41f4be3b65a22182da"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","634dfc157d4863c27893f8d90b0aa4c0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f39236b90f45593e501ba7e1c97b5133"],["/lib/fancybox/source/jquery.fancybox.css","14eccb027d6e22d57e1ab4199d2c7916"],["/lib/fancybox/source/jquery.fancybox.js","fe8254ead563756571863b2db88536c9"],["/lib/fancybox/source/jquery.fancybox.pack.js","6542a8fdb3e017b84d81ad251f251a6b"],["/lib/fastclick/README.html","20b768ffb4284274fbb7f203f7db39a0"],["/lib/fastclick/lib/fastclick.js","0679446c7b1d8f99bcb605a21130c07c"],["/lib/fastclick/lib/fastclick.min.js","77405426e0328526a5b03ad044b05e84"],["/lib/font-awesome/css/font-awesome.css","e2998160abd4e176d3aca6c961b49864"],["/lib/font-awesome/css/font-awesome.min.css","e2998160abd4e176d3aca6c961b49864"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","6ecb59cf0ba36a8f27c08138cf27c719"],["/lib/jquery_lazyload/CONTRIBUTING.html","ad524923bb587db826e020e20afbe168"],["/lib/jquery_lazyload/README.html","263954aff5f8996131ba180f71701d0c"],["/lib/jquery_lazyload/jquery.lazyload.js","b6992b8ff0e26ac5e051d727e9b9323e"],["/lib/jquery_lazyload/jquery.scrollstop.js","ddc9edf4bee47e5d6f3e3571b6c0cd30"],["/lib/needsharebutton/font-embedded.css","85221e3d983a268167023c517d096b4c"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1b8834cf18076f04694b0bd3c26cc7c0"],["/lib/pace/pace-theme-barber-shop.min.css","3ed2fafbfdf1330492b3a6527203efdd"],["/lib/pace/pace-theme-big-counter.min.css","f0c428a6455433efb7f55acdea97a497"],["/lib/pace/pace-theme-bounce.min.css","7e5101526d2e1c87d61a91f57bb70f3c"],["/lib/pace/pace-theme-center-atom.min.css","22359d0883bbd7fa77fb3e5124ee1afe"],["/lib/pace/pace-theme-center-circle.min.css","7ee035762aff41e13bf929dd1fd574c4"],["/lib/pace/pace-theme-center-radar.min.css","72456fbd6c4a8c7f299ab69f530caba1"],["/lib/pace/pace-theme-center-simple.min.css","2ea4aa66b27173e165a5a864966c63e5"],["/lib/pace/pace-theme-corner-indicator.min.css","fcdcb3f8548d51dcb77eeac1fcd40821"],["/lib/pace/pace-theme-fill-left.min.css","a131fe6972153b9a04fe7736f3d095e2"],["/lib/pace/pace-theme-flash.min.css","8619600cafe2843405af2cfbc02a8fbf"],["/lib/pace/pace-theme-loading-bar.min.css","59f7e121f4451ec13eed57b5c44a19d3"],["/lib/pace/pace-theme-mac-osx.min.css","8e6794508fd88de6ab708eff6c6c2179"],["/lib/pace/pace-theme-minimal.min.css","598f1e65fcdb05843b73c517b5d8f6ff"],["/lib/pace/pace.min.js","30c75fec51c48fda1baf7b78eb2be29e"],["/lib/three/canvas_lines.min.js","183032fad68cc7f056fef96c67788e71"],["/lib/three/canvas_sphere.min.js","785e43b4f92f308e2224918d5c8fd4df"],["/lib/three/three-waves.min.js","0f366dfaf65ebfcede630b514077f7e4"],["/lib/three/three.min.js","c018650dff435baf40ad677b0bde29a0"],["/lib/ua-parser-js/dist/ua-parser.min.js","52d62dffaedcc0af73f6bd225ae4c9bd"],["/lib/ua-parser-js/dist/ua-parser.pack.js","15dc341954d7616703fa63c59846d3cd"],["/lib/velocity/velocity.js","60f73d67bb7a4ca9e779e66b5bf73ff2"],["/lib/velocity/velocity.min.js","862a784a5318580870fd9befeb8a11fa"],["/lib/velocity/velocity.ui.js","97c7cefd7315a138691412a7e92239b8"],["/lib/velocity/velocity.ui.min.js","d5299dadd80ed1806ef3e945fa4d1cb5"],["/links/index.html","2549ec1a2e796cb37ed4df0ee98e0eff"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","0a4311bd16d5f5a5160ea158b8692631"],["/page/3/index.html","68a0ccc7a6b91eb253482a4fc4d4c82f"],["/page/4/index.html","e93ccf86cc6ed7c928305f1d234265c1"],["/photos/index.html","9fccd6a510a85fead1f1b7c36156af96"],["/posts/191ddb73/index.html","1ad31184cb00620a5111dafadb466b28"],["/posts/1a195976/index.html","146c383c38ad17eb867b8270ecf4cbf4"],["/posts/2292f1af/index.html","1d6bcf386f45d66954c8032eee3e956c"],["/posts/2fc77d95/index.html","d7c3b7fd883f8f9578dcae14d4f5a3ab"],["/posts/2feacaf4/index.html","b2b3e27aaffee00adc3df168657cbd0b"],["/posts/37f2c331/index.html","4b1986de27f8204cdbd7ea727d355e9b"],["/posts/385f0de9/index.html","ec129cee4fcb0be2a17d577a99900992"],["/posts/3caecfa9/index.html","c1e84657fc2d4e6f2f430abc2ccedf3a"],["/posts/44414303/index.html","d97bf01d5c4c3f0abd653e02431ce8ec"],["/posts/456610d0/index.html","79ae9294ff4a4cdafb1e24b9eddefd8e"],["/posts/45e51894/index.html","47fc9fb9bd097429fa3a494180431d92"],["/posts/4f1131af/index.html","29cb550175b235a23b03219bb7db7b55"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","1dac7ae00cff0ec07e828bf4401b0b8e"],["/posts/517ebb95/index.html","29e8c755c7d8f7cec494aee61e085fd9"],["/posts/53bf1d9d/index.html","58a23f26b2e3861cb599198c11e1bad7"],["/posts/554c2ba0/index.html","77833165f0aebc14a7d686873267f03e"],["/posts/63556f52/index.html","859ceac157920a2379416d8a8be28c17"],["/posts/6d49ceec/index.html","4f191f25ee299bbde1f31869c0ce969e"],["/posts/6de7d9db/index.html","82133c801de2848a615ca2604a53ba59"],["/posts/6fda249f/index.html","95e2a5c0f065cc8e269af7ae2fff1a24"],["/posts/84b87417/index.html","3218c863e248615ddf76cf348105a360"],["/posts/8a60fcb8/index.html","b3ce483245376cdd6098cbaf6656c8c7"],["/posts/8b4c253/index.html","587b9d3ae9ecf6ccef4abb46eb1782a0"],["/posts/92912ddc/index.html","d31af8ac69f8f62ab4a2b415cd93a6b0"],["/posts/97e5bc9c/index.html","b50130c8a7eae8e6e3fc47e1950167d2"],["/posts/9a5c7b64/index.html","a6f9b59fe08f36f47a95bd78c4ff4a00"],["/posts/ac7d0231/index.html","e7e6f248f2f1b702b1833785f2f2776f"],["/posts/c311b112/index.html","7a60a942c52db364b3167750e18913b3"],["/posts/c620d4c2/index.html","3d5b103d178e0b45ebc330484793dbe0"],["/posts/cfc54393/index.html","0f5e469f875ab9faa47621e01208e72e"],["/posts/dc5155ff/index.html","498cb0249aea4d9d3cf823cb9d62c4ea"],["/posts/e1bd836e/index.html","e5bbb7ac31b1af5179a599587f51e7ad"],["/posts/e31c0293/index.html","eba9ccd8f6be64e30f9f4834447ec4dd"],["/posts/f5fc4461/index.html","c80878616426fcd0abb2cc0a879af89c"],["/posts/f8073739/index.html","1869e80fecda7f996da1a2d11c5250c2"],["/posts/f97ef43b/index.html","b863a610b93e01396a9b26b6f2108983"],["/posts/fa84d5fc/index.html","6de13b186976f715a2c167335e3cd014"],["/posts/fb1ab942/index.html","b27b1e6d0019c4790c40e95555e73bd2"],["/sw-register.js","11bc5dd4f813f9a7d3934583c240313f"],["/tags/J-pop/index.html","22329850ea7ff36b6e7c0f5acf05be86"],["/tags/index.html","e3bad895cc3c9f34095c9cb335647426"],["/tags/つぶやき/index.html","e985fc95a4e2b747851ce371e7301ab1"],["/tags/アニメ/index.html","35a6a03f9c0a19c506ae7fb634588173"],["/tags/インターネット/index.html","aeafcd7ee2a5d9de271509ccc5c91abb"],["/tags/チョコレート/index.html","cca154f0830d1195b11fd9dc3115fc1c"],["/tags/中国に関する新聞記事/index.html","f620b07479115121fa35ec422c6a3ebb"],["/tags/乳製品/index.html","bee7281cb3350ed169776b177c6aa4e2"],["/tags/労働者保護法律/index.html","00f50436ad5c9c1899f573509e8c98d2"],["/tags/心理学に関する記事/index.html","5e3c9d3fc144ec00d62908b750a8c7c4"],["/tags/日常生活/index.html","a0014b3fee0978558e60307eef0a8884"],["/tags/日本のIT教育/index.html","db5f78c946fb33a43d7282c2da74d8b8"],["/tags/日本のIT現場/index.html","5725ae2ea57a73d3ce02ae043829aa78"],["/tags/日本のビジネスマーナ/index.html","ed0e000d8d16a513cea607a0305b88de"],["/tags/日本の国内の人権状況/index.html","035f5204d4db4e33e433db269c72cca9"],["/tags/日本の経済新聞記事/index.html","4305eb60c2d1b0ce3d9458a70c8ae5d4"],["/tags/日本地理/index.html","5e278e63f3a8458424ac19348d66412e"],["/tags/毎日ことば/index.html","8de5cf14d7b86ef2220ac36b369f326c"],["/tags/环境/index.html","b2e13566ada9f28e03d51e2c517e23ad"],["/tags/過酷な現場/index.html","6a4a08972514e90913e921f5f9cb3c24"],["/tags/金融/index.html","529f503f323ffe62c403aecaf6bae7cf"],["/tags/食べ物文化/index.html","5ef11480a3aa112e19dc17df2ff4b39c"],["/tags/食品工業に関する記事/index.html","eeaef67e016b3adb84f5d704ce9632a7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
