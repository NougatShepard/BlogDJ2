/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","201e3d4bef1751bb2b34695bc8a0fcc4"],["/about/index.html","20fdd4d57d95128d60de590318c7926e"],["/archives/2019/04/index.html","7edd70a1338ecea70537d4125e7df890"],["/archives/2019/05/index.html","947b6b7455b994c4b738e6c6a3b8cb06"],["/archives/2019/05/page/2/index.html","265a8dd2af6357071a13b6522aaee283"],["/archives/2019/05/page/3/index.html","054023a22d486d44c45e87eda2d21f0d"],["/archives/2019/06/index.html","7e92b3bbd66963d60ed28ea2b2943d86"],["/archives/2019/index.html","cebd386be0d5d35ec46f144d23e11da6"],["/archives/2019/page/2/index.html","5ae316dc05a6a687a5e3d438bf226f15"],["/archives/2019/page/3/index.html","b2b0f300bd2d97104836cec262e9938f"],["/archives/2019/page/4/index.html","dd56e72e1342018bc5a1032f6b42cc51"],["/archives/index.html","af7cf04919564d22dee14a7eaa38cc18"],["/archives/page/2/index.html","863956f58848f5da65468e95d7fbee65"],["/archives/page/3/index.html","77c92390db6a0690a591822d6e8a2bb0"],["/archives/page/4/index.html","240cba724cb8fbc1de4ef832570a8f7a"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","14c72bcd6e152b81589ffff3c9cc073f"],["/categories/index.html","b1412d17a3c975bfeb34ed2d8d13ef85"],["/categories/つぶやき/index.html","84f5b68946ba024d0eedc14095dd8111"],["/categories/アニメ/index.html","b9cac9a67f88e3fd5c9765b46036fbc2"],["/categories/インターネット/index.html","c23529470b65ae45d251c53d9fdf7eea"],["/categories/中国に関する新聞記事/index.html","53af6b749447f3523e822258a14c4bdc"],["/categories/労働者保護法律/index.html","c8a44165c5ff1b4d3ed32d2ee1f62868"],["/categories/心理学に関する記事/index.html","a9b6ee68865bdb53884fa270414fc7e5"],["/categories/日常生活/index.html","06ba874c40b65002cbb150cb5d01c854"],["/categories/日本のIT教育/index.html","138aaccab2f1695ef611d2b4c565360d"],["/categories/日本のIT現場/index.html","0a1fbdd326df7f22ed6a11e7813fa71a"],["/categories/日本のビジネスマーナ/index.html","fbea1e841e0a44f90d594dc7591e2e02"],["/categories/日本の国内の人権状況/index.html","09a64635d41537d882cfc3aafbf08fb9"],["/categories/日本の経済新聞記事/index.html","209d10f219689140b116505940d5ab39"],["/categories/日本地理/index.html","129e9b42ea487b90fd6494039c8ca093"],["/categories/环境/index.html","060eaaf5e8f353da2d3681f910ae6823"],["/categories/過酷な現場/index.html","86f3ddae03245bab9a959ce50724ea18"],["/categories/金融/index.html","082edce52e72d2356dad598e55a3d01a"],["/categories/食べ物文化/index.html","97956e9199dc84c38e04b721cba8668a"],["/categories/食品工業に関する記事/index.html","1ee390bd1de068173dea427c71216d91"],["/css/main.css","c0f81baf7c353b031339dbbe173e8f0f"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","0bfbe588e64b7559b1a526b21d58023e"],["/js/src/affix.js","1af9313589be9bda9a059d36d08b502a"],["/js/src/algolia-search.js","83ba4ef0a28f847865e8c1078fa68922"],["/js/src/bootstrap.js","ad23ad94ff82b10d59fce31f3c47f01c"],["/js/src/china.js","f8da2f6d9456d5de8e6b92260b49745d"],["/js/src/echarts.min.js","06c7c7709a3d2dd0da8d576a98c52684"],["/js/src/exturl.js","982944f5b4566b8fc0e47a4068f12796"],["/js/src/footprint.js","434a5f9f544d07d8e34d2a5a6f0ed7c8"],["/js/src/hook-duoshuo.js","3b46bed29459581897c29211808458a3"],["/js/src/instantclick.min.js","2b46a41c81fa1654f0e4a6fe9410e75c"],["/js/src/js.cookie.js","94b8e42f8fb3b39820fbffe47a138406"],["/js/src/motion.js","5d87545da0e0c6e0aa8408703ccdba80"],["/js/src/post-details.js","ba809f717d87faf2231b93b7e360a316"],["/js/src/schemes/pisces.js","1cf5d5ac5be4cf0d5a26324b0d6a4a44"],["/js/src/scroll-cookie.js","2762dc7d5f35da5de188b6e38b38c392"],["/js/src/scrollspy.js","1ef06155a796690e85e66303c1a6f937"],["/js/src/utils.js","acd1fd33e608de0643557d52cd6b4832"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c497d1a34014c44ee09e4cffedc024ae"],["/lib/Han/dist/han.js","afdbfa77db3c6a4e83f1cc3e07b084c7"],["/lib/Han/dist/han.min.css","ab30dd750e95ade5d6b10fc48b530596"],["/lib/Han/dist/han.min.js","9ca7f0875d0283b1c795fd839b3c910d"],["/lib/algolia-instant-search/instantsearch.min.css","c64b596c73da6a208c6710c6a478663f"],["/lib/algolia-instant-search/instantsearch.min.js","6a31433d1d7df805f6bae308acee9820"],["/lib/canvas-nest/canvas-nest.min.js","fcbf1497e0156fb36820db66cc4a721d"],["/lib/canvas-ribbon/canvas-ribbon.js","425fbc68632933aa43d02ccd0b832c25"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d5577f1377f6b574db21be0d86f2bfb5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9e715e6bf2b0fd9f572820bef966c4f7"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","311ccf54216c84a059b78327b1e4ea79"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","65c3ece095af39aeaf23d2e9385bf88d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f21987d57c29b705da10999d42cffd7b"],["/lib/fancybox/source/jquery.fancybox.css","71b08104fa3400235b4e4ba5c17bf18b"],["/lib/fancybox/source/jquery.fancybox.js","a7cc2565cb1568839b0e9652822aba33"],["/lib/fancybox/source/jquery.fancybox.pack.js","0ee5969bad101d538e337c785854962a"],["/lib/fastclick/README.html","f1d149ee1264633799efeae1ad3d7774"],["/lib/fastclick/lib/fastclick.js","49ee4b8ecfbfc8b2a0d82c5a1bbd4958"],["/lib/fastclick/lib/fastclick.min.js","8155460d1ba2ba7acf4d82c60dbf2760"],["/lib/font-awesome/css/font-awesome.css","8284a89f9918a5f6f8479036e7c17ca7"],["/lib/font-awesome/css/font-awesome.min.css","8284a89f9918a5f6f8479036e7c17ca7"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","a26b0b547cc8beb7a2cacb1afd7e6143"],["/lib/jquery_lazyload/CONTRIBUTING.html","6a9f4067367b9e2c9d683897a1870e60"],["/lib/jquery_lazyload/README.html","2a0639a5d0d419a19226cfb4ddc36f85"],["/lib/jquery_lazyload/jquery.lazyload.js","54a3e1970af35c57e7bd4233301c41be"],["/lib/jquery_lazyload/jquery.scrollstop.js","e1caa7206ced0589522c32158550132f"],["/lib/needsharebutton/font-embedded.css","5b9a152ede106242c442d03d7e37791b"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","94fca2377ce66f5993e88e5a663ddf4a"],["/lib/pace/pace-theme-barber-shop.min.css","7f7b4fa4f179d7826d2fe75fb1412305"],["/lib/pace/pace-theme-big-counter.min.css","653c06bab1998f06a5ae8f460d7f7b97"],["/lib/pace/pace-theme-bounce.min.css","a9deaf28b9c96a337fa40112fa365aab"],["/lib/pace/pace-theme-center-atom.min.css","f02b932256a8dd8a084b66effabdd26c"],["/lib/pace/pace-theme-center-circle.min.css","97a177da671bd5a499766e6a6c286ee0"],["/lib/pace/pace-theme-center-radar.min.css","6ec7c0f73c9ff3962cdc6e62a1d2875c"],["/lib/pace/pace-theme-center-simple.min.css","efe463de5421547ac95674597cef1851"],["/lib/pace/pace-theme-corner-indicator.min.css","5528e3c899d546a253bfdf1097d19dd8"],["/lib/pace/pace-theme-fill-left.min.css","b5c00f8198d9ace6d0a3db7952749604"],["/lib/pace/pace-theme-flash.min.css","b06bdca57fad08175df3812f5883acb4"],["/lib/pace/pace-theme-loading-bar.min.css","da705864b174b0c4e24c178a11ab5335"],["/lib/pace/pace-theme-mac-osx.min.css","468c6f330472267fefe551a36741e5d3"],["/lib/pace/pace-theme-minimal.min.css","82d6e8684ec3aa7b94d18cb4a5d21a2a"],["/lib/pace/pace.min.js","9dbbe345a987ffc3bd06dcfe6779fbbd"],["/lib/three/canvas_lines.min.js","929e7587484fa031df3d6a0716d67b5c"],["/lib/three/canvas_sphere.min.js","988aaea544368f6f9281d499cba6f10a"],["/lib/three/three-waves.min.js","6274f8195c8d233da6aa6f47c3472e3d"],["/lib/three/three.min.js","ff3a8abd87096cd8b298d795cc74afe4"],["/lib/ua-parser-js/dist/ua-parser.min.js","2a49bf9dc513e51bc9fbef6564d02617"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5ae7e573e9e7624ce09e9317a3c7c691"],["/lib/velocity/velocity.js","ed4cbffdaa6041408e1883a0aeda40f1"],["/lib/velocity/velocity.min.js","a38e8dfa5fbea9bc06d7e51507a18a0a"],["/lib/velocity/velocity.ui.js","608612938ddd7b84796015381f465d8e"],["/lib/velocity/velocity.ui.min.js","5a689d85854c0438f195c4e0ceaed794"],["/links/index.html","147563350e42591ce1bfdf6dd1543703"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","1f1c71edaab8decd21bfeb49bb193fa0"],["/page/3/index.html","aec9975093ef1b2a5732ef56a181fb86"],["/page/4/index.html","ab4f36827d8fd87e57992bca3da5d564"],["/photos/index.html","8cb7871e70486080337a65d616517140"],["/posts/191ddb73/index.html","d26b90013dc2021a328df004ffbdf3ad"],["/posts/1a195976/index.html","9894533d43deffb49ed9f50cb4bc0ae1"],["/posts/2292f1af/index.html","940cfccbd848585377c583c3a2842524"],["/posts/2fc77d95/index.html","207a555640fe4d2cdc891ea87b20f9fe"],["/posts/2feacaf4/index.html","5d9d83eee9945d31c1e613d1f5d7ca4d"],["/posts/37f2c331/index.html","2d13fb120c3f5b5a485641af3f1b58a2"],["/posts/385f0de9/index.html","464b4bb4a270810d72263a696d1d7f12"],["/posts/3caecfa9/index.html","5fbd0426744969ac7e69fc6b8008c2a5"],["/posts/44414303/index.html","58e830951bbac5e61a261e8eaa1903b1"],["/posts/456610d0/index.html","79e6dcdb58584c8b18c0cdbbce01c855"],["/posts/45e51894/index.html","dece5ad4574ba114d487a251d0801615"],["/posts/4f1131af/index.html","5314f8f0df169107fb70aaba77f48628"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","326a1f28cee1e4a635f48ba914cc5d3d"],["/posts/517ebb95/index.html","9a2362827e67617cf343c669830dc45c"],["/posts/53bf1d9d/index.html","02bde965c9a21c966e0f1fe281fbd43e"],["/posts/554c2ba0/index.html","487bf5d638258973b6b051bcbf8808c7"],["/posts/63556f52/index.html","d206a958f0d3c702dd9ddb8554a4d296"],["/posts/6d49ceec/index.html","7c93cdafb64b8717be6e14d195d527e3"],["/posts/6de7d9db/index.html","2b9fbb566f2aab39d4306765e707d854"],["/posts/6fda249f/index.html","e7327b6311fac3a99a417c90009fb7d1"],["/posts/84b87417/index.html","a9606b3fcc3cce43b9d07735bd953e13"],["/posts/8a60fcb8/index.html","940e11e24bdc26f09029e43b840cf4df"],["/posts/92912ddc/index.html","c1fee3fb1e3d6dccf492be3b8954a670"],["/posts/97e5bc9c/index.html","f841bcac3747285f28d7936d3e2f2660"],["/posts/9a5c7b64/index.html","40dd8e6d4887686a237d0e7e0d55555b"],["/posts/c311b112/index.html","bdddb831cb27b7c969c2edacb434d6d9"],["/posts/c620d4c2/index.html","2cb4e9aa564c0228878d8d05dd6c9197"],["/posts/cfc54393/index.html","ec76253d01fcefbe7e085113134a3e9e"],["/posts/dc5155ff/index.html","c79b20e05158a66021a167fdeafeb541"],["/posts/e1bd836e/index.html","0eca4118706d14dcd5065b038ef4afc1"],["/posts/e31c0293/index.html","c0cb02341c6d08f8cc25414c01b994f2"],["/posts/f5fc4461/index.html","9d9413b821733d27b4f5a0ae5410d4fb"],["/posts/f8073739/index.html","5ecd3f522241264947d0644d5e8c1c4b"],["/posts/f97ef43b/index.html","caf9d447c106c160a567e98653b84294"],["/posts/fa84d5fc/index.html","caa42edaa577e4e6f60a9838865817b6"],["/posts/fb1ab942/index.html","64a3b8c31e5edd4a98079c23fffecc05"],["/sw-register.js","f41844c50525eeca06b1293a0bbb8cc3"],["/tags/J-pop/index.html","5a5967c2e6bce20a1b2d44cdf4094e47"],["/tags/index.html","6a505a7dc72be4128b0cac51d05b2770"],["/tags/つぶやき/index.html","22b39497f53b99001145f3baa41e3a36"],["/tags/アニメ/index.html","5f223583be759da85d3789461165e696"],["/tags/インターネット/index.html","5e4467d12b14f30ccde0f49e7f14d886"],["/tags/チョコレート/index.html","bd6f66574d816788b3d65c08bd319190"],["/tags/中国に関する新聞記事/index.html","3262ba704b999ac792d2780d79ef4ad3"],["/tags/乳製品/index.html","eaace77b20746f5f4dd2ce7404c2ed3c"],["/tags/労働者保護法律/index.html","694bb44fcd112af474c3690412ae528e"],["/tags/心理学に関する記事/index.html","2aaeb6efc40789f94d5636619a2013b8"],["/tags/日常生活/index.html","5774ea1ec0eec53908415f8adcdd3aff"],["/tags/日本のIT教育/index.html","f3f422e9722d787d7ddf1a251e6a3577"],["/tags/日本のIT現場/index.html","03ed02bf54f11ac567d60aee0ccdd111"],["/tags/日本のビジネスマーナ/index.html","07ba858a730b4dfc264595a7e6f21efb"],["/tags/日本の国内の人権状況/index.html","251ed8b99d61a078d130aaf7c7abab36"],["/tags/日本の経済新聞記事/index.html","15fd08ddb78dc657068b65926bae65ec"],["/tags/日本地理/index.html","630e4e46f9b6b688543d41695bf387bb"],["/tags/环境/index.html","2abf83016562b1ee52ed3e33b6c6e653"],["/tags/過酷な現場/index.html","c2d1ac59c615b18c615ac4bb0b47626a"],["/tags/金融/index.html","0187c141b2410987f77fdcdf46459cc9"],["/tags/食べ物文化/index.html","66e20a68a0b509848af4af8d22fb1101"],["/tags/食品工業に関する記事/index.html","6680a708cb0ead9808ea1b89f6e36583"]];
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
