/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","40346307cedb50ac2527c8e815fa9e4c"],["/about/index.html","89476bc2b4aff5c45d9bfa6446e501f9"],["/archives/2019/04/index.html","0494a6fea02e329b7c80bbd29b3be2ec"],["/archives/2019/05/index.html","d6a028c8bcda13dc54a8fe5ed025f7c9"],["/archives/2019/05/page/2/index.html","f957a756acec1c3835cce6a7fe0d1794"],["/archives/2019/05/page/3/index.html","b818f242cd1940f3400d05ac0244a8fc"],["/archives/2019/06/index.html","91ae11124b947b2bedc7cc665f540a4d"],["/archives/2019/07/index.html","8d22ad6ab00223f1c73fbecbde01640d"],["/archives/2019/index.html","06f36a8f584aeb01511551a09f399b4e"],["/archives/2019/page/2/index.html","a0c3fec379a86b5e1b34579936f8dd1f"],["/archives/2019/page/3/index.html","5b17601698f43e29d155dc448a0cb413"],["/archives/2019/page/4/index.html","7bad304df36b6e079ac58b755b730a85"],["/archives/2019/page/5/index.html","f1d7db4cdf77fe06b2bb83d459ceefe4"],["/archives/index.html","4a375884b482b7e3cae527056f4753a2"],["/archives/page/2/index.html","61ae9dd3f37ab21e2e0f2709e5f05dc2"],["/archives/page/3/index.html","1aaaee2be52a2e2b0c2ed34afb8c6d08"],["/archives/page/4/index.html","261c4dfcd81f24a77922019de92b9244"],["/archives/page/5/index.html","b9bfb92dbaa4f9ec10eaedbb0e9b528a"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","f06bb153c8b65fcf0c0c3d6784b71839"],["/categories/index.html","c78271752cd4b45584adbcb80874b284"],["/categories/ことば/index.html","bd8fe582385bce5df05a666f67f34500"],["/categories/つぶやき/index.html","3dbd50540cd7e01ba7bd941b48f094e3"],["/categories/アニメ/index.html","f1918f77bcf429aeff5defbd858bd1d1"],["/categories/インターネット/index.html","340e940f9cc05643dea8525ecf7f5a04"],["/categories/中国に関する新聞記事/index.html","ba2e903278d6a6410c2dea029f483785"],["/categories/労働者保護法律/index.html","90fefcb7c72166e9aac3f0dd75c6c113"],["/categories/心理学に関する記事/index.html","98094a5fdc53f79fd6342aa49067df4c"],["/categories/日常生活/index.html","7e6c937feedac8434d3fad7bf9ca4049"],["/categories/日本のIT教育/index.html","f61cb70917a5ef09461e5f0cf6f84000"],["/categories/日本のIT現場/index.html","22458e090f16dc6f05efe775e7097d6a"],["/categories/日本のビジネスマーナ/index.html","6225dcaa825143afb0f426afaacfb92f"],["/categories/日本の国内の人権状況/index.html","d3b333569207ad3df4a1fad225d8f7c1"],["/categories/日本の経済新聞記事/index.html","2e8205f7613be2167aca8304258145bd"],["/categories/日本地理/index.html","9f9e3fa8fb9d11720a0f31cb695df932"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","2a23ae302bdd9fd4752f5f8bb5b48e61"],["/categories/過酷な現場/index.html","ee25c9b3a9cdba4930427e0bcb06663d"],["/categories/金融/index.html","df7ddf85d682c4a55b98b5ff5bab9182"],["/categories/食べ物文化/index.html","67746ac305257f571a5add327a5687a5"],["/categories/食品工業に関する記事/index.html","40301cb7d90e30ae5d07376564e12b57"],["/css/main.css","f81f630bae776f75651a82a658df627f"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","176e2ad518f0a12c50a33e3e7b5e0886"],["/js/src/affix.js","2125818bbd54c7f7ede4d26921cd8654"],["/js/src/algolia-search.js","6ea84040807893bd3202d55294cb40cc"],["/js/src/bootstrap.js","253ef00f1dadce204d568bcae5785cc5"],["/js/src/china.js","ee34da70ce6d5ad9ce653598769693d2"],["/js/src/echarts.min.js","7e3f927a681ab9ea9966a648a25b93ba"],["/js/src/exturl.js","dbdbb671073d9089a324c46e8253ad36"],["/js/src/footprint.js","bea5d47067e30e4583b4af740f5855c7"],["/js/src/hook-duoshuo.js","475acea57403f1e3cf9c260159c996e1"],["/js/src/instantclick.min.js","0f5ed00ccaf5f57085a8e12db680360c"],["/js/src/js.cookie.js","d53fc057f62b140b09a25cfd94fc1042"],["/js/src/motion.js","631f1018e10be16438e3dbc13ef07d15"],["/js/src/post-details.js","c05dbcfe0eaa0ba25281388cb6076f46"],["/js/src/schemes/pisces.js","d8848c33225461d0d4fd58880a465aee"],["/js/src/scroll-cookie.js","3e62da2fe2de14b98a708853c8dd3faf"],["/js/src/scrollspy.js","ad6eb4c782dec7c75d9cba39c92dd4ce"],["/js/src/utils.js","ab02e932866357423c871f654e3ffe61"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","48870e5ee0d76880ac2f06faae7da7a1"],["/lib/Han/dist/han.js","c0e81629ae15001b46d7d2730cf11cdd"],["/lib/Han/dist/han.min.css","d214a93b6ee106b7187bb916a462db15"],["/lib/Han/dist/han.min.js","255fc700d3aa6876e338ea8676a70029"],["/lib/algolia-instant-search/instantsearch.min.css","7f81cbf0cdf8245d6ed04455bdc4badf"],["/lib/algolia-instant-search/instantsearch.min.js","d3ba11efff4d90269f59388303793dfe"],["/lib/canvas-nest/canvas-nest.min.js","a820584beac09e896f0f954ff1aad7cf"],["/lib/canvas-ribbon/canvas-ribbon.js","07ca9ef7ee6c914b625cac3625938e80"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","185e0f175761b24b38133ba62ca6f3e5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","faaca4d9ed3ad39b2d5e957afd60f554"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a3a1c8bd14eaa18420ef5f11b47b5112"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7cd595dc3fb8926e711f8caf389127bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d3ff518226de241eb718bb7af195a609"],["/lib/fancybox/source/jquery.fancybox.css","6d17ceb1482f5b8d86abeeafc471bf78"],["/lib/fancybox/source/jquery.fancybox.js","4f92acbcd4ed693ef932a25806fee346"],["/lib/fancybox/source/jquery.fancybox.pack.js","40553e0d4d2c7de2640e3cf211d9d883"],["/lib/fastclick/README.html","ad1f0bc352c56d03e4c5ebe9cf6f7231"],["/lib/fastclick/lib/fastclick.js","2c50df5a3e3fa5e75dc6aca11129055c"],["/lib/fastclick/lib/fastclick.min.js","1352e257919fcba5bccd832cf3a48b9d"],["/lib/font-awesome/css/font-awesome.css","6d26852db17c65e8104dd6e4b4ccea21"],["/lib/font-awesome/css/font-awesome.min.css","6d26852db17c65e8104dd6e4b4ccea21"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","c460e79d77f2aa8e6f0f4770c56dc047"],["/lib/jquery_lazyload/CONTRIBUTING.html","6f489d88b7b3ce49f9f6761391d526c5"],["/lib/jquery_lazyload/README.html","ad28499cc1602b03a50bb565a9491cb7"],["/lib/jquery_lazyload/jquery.lazyload.js","efc5f8acfc616aab36d597358693d146"],["/lib/jquery_lazyload/jquery.scrollstop.js","27effefc378f0bf189a716291517b6b8"],["/lib/needsharebutton/font-embedded.css","133e08355ec6d25b55e8395d400d2d45"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","d064be8dff8f4dfdce5717930b913b06"],["/lib/pace/pace-theme-barber-shop.min.css","b4112c436d6b728a0a17f112f8ab66ff"],["/lib/pace/pace-theme-big-counter.min.css","d8daf74463ac26d70183d5c3758ee979"],["/lib/pace/pace-theme-bounce.min.css","024963e558fac1c31f666588f917b2ba"],["/lib/pace/pace-theme-center-atom.min.css","418216d4ba0e8c554a274ac138beac7a"],["/lib/pace/pace-theme-center-circle.min.css","eec273979d34303a7b28dcb9e2fc1f13"],["/lib/pace/pace-theme-center-radar.min.css","21697663b34301a00543a7c8fbf7331f"],["/lib/pace/pace-theme-center-simple.min.css","001bc7d3d54d37bb6dc447efdd6d045f"],["/lib/pace/pace-theme-corner-indicator.min.css","201cfb993f833e9be3289f41ede3f83b"],["/lib/pace/pace-theme-fill-left.min.css","6adc651d2e74b805d2dfdf91e0f99765"],["/lib/pace/pace-theme-flash.min.css","c70df7fb23aa787818240b3f590e1604"],["/lib/pace/pace-theme-loading-bar.min.css","1d469e410217f528e8d19f1e782e36a0"],["/lib/pace/pace-theme-mac-osx.min.css","f0d458164ed677c7fc1ca6ff8eea1dd4"],["/lib/pace/pace-theme-minimal.min.css","5e69e681d522f25121a8b80201daf010"],["/lib/pace/pace.min.js","a7d61fd3cd81426ed6768c108980f384"],["/lib/three/canvas_lines.min.js","3675ff1c3b6df5a9b7c0b4416434ebdc"],["/lib/three/canvas_sphere.min.js","b7fdaf72206409848080eb2182955ea0"],["/lib/three/three-waves.min.js","ac3a365340f02e63368c3f3e4f37710e"],["/lib/three/three.min.js","117c73bfffabe28339d860a85b78310e"],["/lib/ua-parser-js/dist/ua-parser.min.js","24848dffd90589856a7d9ec60452e6e8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","82a24f8642d47478686c02e10e5a4151"],["/lib/velocity/velocity.js","6b4d60ed639114dab6f8fc286145d4c5"],["/lib/velocity/velocity.min.js","1d4b7735e7be321aba5d9a6200dd0580"],["/lib/velocity/velocity.ui.js","a5dd66cd2eeb511664ebf5a9b1b16ee6"],["/lib/velocity/velocity.ui.min.js","a357e1f815fe8310aca7ed13ca4ba126"],["/links/index.html","20ca47758e13c9cdd570dff2caf69ef9"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","0b1923d9450470411c3bedd70554045a"],["/page/3/index.html","661084dafcf74344090935e80e0f85de"],["/page/4/index.html","5d833620f100b1683afa796bf7e8494c"],["/page/5/index.html","7a4962b16e5bbf06003338720e8a8ec1"],["/photos/index.html","bdb731e96be8d59e56c74847bb28006e"],["/posts/191ddb73/index.html","7c5077c4ead67a73e981e10b9b877dcf"],["/posts/1a195976/index.html","20665ef075452e0aff4ab493b99b610f"],["/posts/2292f1af/index.html","60589fcdfad609a23cdd20b6a524da01"],["/posts/29d57d6/index.html","9da2b7619698353e3ea9cc9e89f269f2"],["/posts/2fc77d95/index.html","1d898553061fda6f0c802d107d33057f"],["/posts/2feacaf4/index.html","902087be9c9b0dc13a158bf5c5e23c6a"],["/posts/37f2c331/index.html","ab347e7c1e3796a3891749e765154850"],["/posts/385f0de9/index.html","2e3cf756328dd86157f6909b4dd67b4a"],["/posts/3caecfa9/index.html","40b6c268151a3c8af4d7c61321e3d99f"],["/posts/44414303/index.html","89acc800ff1ab848d594245d1c656b9d"],["/posts/456610d0/index.html","4b23a4cc6849d4c78aa3d95584c0d3c3"],["/posts/45e51894/index.html","71e1c952ac8e4fe3d5929a4d82ec4cae"],["/posts/4f1131af/index.html","aaaa69982cb608c129f8e6767dfc88d3"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","e5bbe140097e922755b53be9447a59e5"],["/posts/517ebb95/index.html","63cc5654e0582d02443e7714f9bd93a3"],["/posts/53bf1d9d/index.html","d232fff821e3f35ee86348501f2dbe23"],["/posts/554c2ba0/index.html","186bf9fb9ede66d5278a84013ac1794c"],["/posts/63556f52/index.html","7948de671e0e23d9a50482fd838a2e6b"],["/posts/6d49ceec/index.html","598f46de295346639d386ec8ef122675"],["/posts/6de7d9db/index.html","c22d54d75551e7d7089a49b55c634af8"],["/posts/6fda249f/index.html","d941c96416c5c1e3dc326b90b99c1c0d"],["/posts/759a6740/index.html","ff49adb13a19bd9d02ed62d9cf463fa0"],["/posts/84b87417/index.html","091f6d8f799d7ec0005c3a77725d2ab8"],["/posts/8a60fcb8/index.html","59c186b431ba29bf06b5962927194188"],["/posts/8b4c253/index.html","58ced529c345523cc9b54004d779327b"],["/posts/92912ddc/index.html","47d57b7a734caeb9f3fa1aad887f6c7f"],["/posts/97e5bc9c/index.html","56ea9632396b749ee16cd432f90dc8cd"],["/posts/9a5c7b64/index.html","a40c15f3c11b4512207c20a82f373332"],["/posts/9cf9c275/index.html","2e69eca6d581f913cb6c45d11ecc2347"],["/posts/ac7d0231/index.html","dfaf0b395bf613876a8e12c9e260b06e"],["/posts/c311b112/index.html","90d58d9ff3fcd821f18ca1d4056fdcea"],["/posts/c620d4c2/index.html","49146f17e3e22d0b141577ea39604064"],["/posts/cfc54393/index.html","a105488adcb7640fb1a3a64bd1d88ba9"],["/posts/dc5155ff/index.html","d35aeb9e234c8e3427a6f4d9ae5b2a48"],["/posts/e1bd836e/index.html","d9c3d6aba735eeab45bd3b33c39042df"],["/posts/e31c0293/index.html","02235ce025f4e7fd06f76f4abca268bd"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","464fbcbdffb954b4bec13267537b81bd"],["/posts/f8073739/index.html","c22b03e5368b5e534ecef2d69b53c907"],["/posts/f97ef43b/index.html","feccf307537d77d0b4cda5269cf65dbf"],["/posts/fa84d5fc/index.html","fb785a86e000ad60b441e8a462a5c9a9"],["/posts/fb1ab942/index.html","4fddcd17890e92a152d718ad51f3983e"],["/sw-register.js","dc391a0ceea2069b3f3646c8c381af77"],["/tags/J-pop/index.html","1ccf21d026457f64696bebf4da5bf054"],["/tags/index.html","3d1c1c8b0f56a506a424cf9a55ad5015"],["/tags/ことば/index.html","c3df1f4c2336375c4f2faf571155ad94"],["/tags/つぶやき/index.html","5cd5f783dc324ad272a78659c29c114d"],["/tags/アニメ/index.html","ee2569ece35ac17056351d398ec13a60"],["/tags/インターネット/index.html","f11e9be65355d775664c0c8860d03391"],["/tags/チョコレート/index.html","a174ec0ae6cdde6260d227ffa09e0500"],["/tags/中国に関する新聞記事/index.html","f21abfc44ba682c47ac6a9c1ea44f3ea"],["/tags/乳製品/index.html","df1f24e60b31fc1183e282d890c54c99"],["/tags/労働者保護法律/index.html","514813216934fc24a2efc04e71d36c35"],["/tags/心理学に関する記事/index.html","4055389691f4c18f3ded69516775f088"],["/tags/日常生活/index.html","5da0ea53d46b8ef4c4e67dcbabb3af6c"],["/tags/日本のIT教育/index.html","c3dc500356ef22556dfcb4e0ab3fd89a"],["/tags/日本のIT現場/index.html","93db51243bc394c53f78161c9742f997"],["/tags/日本のビジネスマーナ/index.html","ecdbc96da807000ed1a5e60cecf62ec8"],["/tags/日本の国内の人権状況/index.html","2ac423a146ead8a45ba623bb73b68cac"],["/tags/日本の経済新聞記事/index.html","18502cbc2fc47989579985905417c11a"],["/tags/日本地理/index.html","7b5e8a03bc996462d625ca7e77665537"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","3f407ce4c0564b1ef1ca6e1917a04b5c"],["/tags/過酷な現場/index.html","074a7851ed96a65b94bd32a470a83495"],["/tags/金融/index.html","86b3538651d7be9ddb018752bd625e32"],["/tags/食べ物文化/index.html","9faa766d7f1804dd63d37ddb4bdae393"],["/tags/食品工業に関する記事/index.html","fba55eafb0983e39590346b9ea38b367"]];
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
