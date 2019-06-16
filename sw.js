/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","6aa4c364c9a62a4659c7d8f0520d2a78"],["/about/index.html","1a9746aab884d27ca87b112deb9a5627"],["/archives/2019/04/index.html","15f51a2fa9c51a32dc5e085715831d37"],["/archives/2019/05/index.html","15395ff78d187523661bf06431814b01"],["/archives/2019/05/page/2/index.html","ba970de7b72bd997218e7af1547050e5"],["/archives/2019/05/page/3/index.html","251ad1abae05dc93cb852d6bc5694c51"],["/archives/2019/06/index.html","83dea3b96d1f40508228142c0857a3ab"],["/archives/2019/index.html","c52256d961dae03f1af83f6d8505d2ef"],["/archives/2019/page/2/index.html","afa8c9733f51acd43181481502faca10"],["/archives/2019/page/3/index.html","0c842109072cbb07d5c6b2292a1c1d05"],["/archives/2019/page/4/index.html","41ea9e2dde32123561d306e21d0580cd"],["/archives/index.html","6b2a51fe90e946b5a2bd02d3b7087cd2"],["/archives/page/2/index.html","f697c8e0b2e422dd46d0f523b64dbcff"],["/archives/page/3/index.html","0f9ae8899d42b61475aa5b14cfb364ba"],["/archives/page/4/index.html","1f136fb21407f218c7cc3ab0da6bc8bb"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","8e40f0a987e3c5e35b711d4b7d8c5daf"],["/categories/つぶやき/index.html","4da4d298293a02ab33d3ffa1bbe3dd57"],["/categories/アニメ/index.html","28455919b1304bdf02b0948e493e4d10"],["/categories/インターネット/index.html","e4d6c46605d244945fad77f97e6fd07f"],["/categories/中国に関する新聞記事/index.html","9bcb9d60b68d027a00d97c8eb0bc7c9f"],["/categories/労働者保護法律/index.html","94deb05a733a0e63395d9597c47693c3"],["/categories/心理学に関する記事/index.html","bcc168b00f771e572754ae0a4b6b4b84"],["/categories/日常生活/index.html","35cd215d3c492965ace318979c7947bc"],["/categories/日本のIT教育/index.html","dec7c8ca1e7055025687258747c394f0"],["/categories/日本のIT現場/index.html","068e24e88d1141aab775d004d7ba174f"],["/categories/日本のビジネスマーナ/index.html","2be5e5812c8e0dad6f672f90073027da"],["/categories/日本の国内の人権状況/index.html","36946c85464e42ae64da7a746933d932"],["/categories/日本の経済新聞記事/index.html","e4d260db0fa5ce8b92113aa9644f487b"],["/categories/日本地理/index.html","5f3bc66064478a2b3e30b4210d6b8efb"],["/categories/环境/index.html","c26f96bcf5590b5b2fb0add03c0424d6"],["/categories/過酷な現場/index.html","73ae3fab6d7a75736e63d2fde9848937"],["/categories/金融/index.html","5dd068a3d3efbd0fbc9372755c8d5cc2"],["/categories/食べ物文化/index.html","c17003a2670c62404a556a96307d4932"],["/categories/食品工業に関する記事/index.html","4aa5d9aafa6d1ab513dd10ab25434a69"],["/css/main.css","f1fa7c890973b4c527ac1bd32e78a19e"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","deb5238bc619185328cefa945351a15b"],["/js/src/affix.js","c64c4bb10fe87e8dfa84994d7e6fc512"],["/js/src/algolia-search.js","397968534a157374dd841ba97dc57a58"],["/js/src/bootstrap.js","2477747a68a096d3477708fe5aa46055"],["/js/src/china.js","a80f914ce656ab63e425da80bbf756dc"],["/js/src/echarts.min.js","0e92781c17e28382fba495d63190092d"],["/js/src/exturl.js","1f0f90ecb5e9d44d2da2061861f203c3"],["/js/src/footprint.js","0bea9a949ec7a974c4d96672f4f9dc2a"],["/js/src/hook-duoshuo.js","638df1d759f6617bfcc5c6180aef8f90"],["/js/src/instantclick.min.js","682e1edb4e7930d86aa4b7b79b5855b8"],["/js/src/js.cookie.js","eff463f25ea7c32499182f804fad441c"],["/js/src/motion.js","3f97358370b018279e5d29a2c30c336a"],["/js/src/post-details.js","92d11deb85ee8a4855e85ff5019f5682"],["/js/src/schemes/pisces.js","94a7671fc6b6368b9b230ba0670ceeb9"],["/js/src/scroll-cookie.js","9a87ea2089697348d2b8a9fba12b50ec"],["/js/src/scrollspy.js","137abddf1ef9dc482179e1db7ebaa6e9"],["/js/src/utils.js","9874b1291b5ffd3f6cbd135bd34748c0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","5f3b49d91bc997bfc89016a41d168ddf"],["/lib/Han/dist/han.js","ee6885eb0c236d97853a66235fd8c21a"],["/lib/Han/dist/han.min.css","0332a1ed0f97ff60693b116a6c9280ae"],["/lib/Han/dist/han.min.js","aa3f922381114c4238ecf6a8ca6d5042"],["/lib/algolia-instant-search/instantsearch.min.css","f6c489b4a4d57167e89e4a1af74a1d0b"],["/lib/algolia-instant-search/instantsearch.min.js","89551f0af2dce85d7856a2682aeac060"],["/lib/canvas-nest/canvas-nest.min.js","b24c667381dafa2a5426177e6386cd68"],["/lib/canvas-ribbon/canvas-ribbon.js","ad4ee29559abf8a9eed6b6e7a05de3de"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7fd25bb60a4319efdc3055a0835ce080"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","16ec7b97f814d29d658f064bacb56d9e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","157779a27309c87d8529000812b6380b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","026a16f6baf49f2f834eb9e17ae875ac"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","785173c01a3935d0d9e5a0f657f695ba"],["/lib/fancybox/source/jquery.fancybox.css","18336897a1e6975d661c122a25fcb302"],["/lib/fancybox/source/jquery.fancybox.js","61e6ac3b3dab974f33a885a77a0e3747"],["/lib/fancybox/source/jquery.fancybox.pack.js","9e0ba44d87d7aeb3602bff2dea5bcb87"],["/lib/fastclick/README.html","5e0e5505b5b0ecd17fbaca4338030824"],["/lib/fastclick/lib/fastclick.js","0a77941dfc9729bf89f8a389817e2356"],["/lib/fastclick/lib/fastclick.min.js","a3da66d4d52e84eae2fe942438557b40"],["/lib/font-awesome/css/font-awesome.css","9bc5359b577658b92e2b1ae6fbb2504f"],["/lib/font-awesome/css/font-awesome.min.css","9bc5359b577658b92e2b1ae6fbb2504f"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","50c48325780b011d334c76f7da9c129d"],["/lib/jquery_lazyload/CONTRIBUTING.html","8ebd5f5f75ccf7f899e11874842d76df"],["/lib/jquery_lazyload/README.html","52ceea039a787ce3683d1b7470888934"],["/lib/jquery_lazyload/jquery.lazyload.js","bffed488380f75800f6a2b1a5bcd128d"],["/lib/jquery_lazyload/jquery.scrollstop.js","daa0ce1fb2933d17fe1c5cd40ede4899"],["/lib/needsharebutton/font-embedded.css","ebba14e9af1e52c669419e1ab51074f2"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","a849a0ae19dda719de0c79ecc1565d25"],["/lib/pace/pace-theme-barber-shop.min.css","31891cbfa42cb8d737a407b1d8aebe79"],["/lib/pace/pace-theme-big-counter.min.css","53ca468958fa8da7b9ad26fe58de72fa"],["/lib/pace/pace-theme-bounce.min.css","f0ed0ba550f2fda404f5efb1717e0f83"],["/lib/pace/pace-theme-center-atom.min.css","7bbf10627c534f31a39b852603581a83"],["/lib/pace/pace-theme-center-circle.min.css","152f1462f2e17cde8c33967bb57df7d0"],["/lib/pace/pace-theme-center-radar.min.css","ac5de42b87b5e5d28f8cef469b31a4fe"],["/lib/pace/pace-theme-center-simple.min.css","2c3cea3ceb58656971d9789efea59f9d"],["/lib/pace/pace-theme-corner-indicator.min.css","434792d11654d3f4d503cb15ff084cb0"],["/lib/pace/pace-theme-fill-left.min.css","e76229022980168e03fd9019792d8a43"],["/lib/pace/pace-theme-flash.min.css","cfc2a2a07e67d3a9f7739331f1aebe9d"],["/lib/pace/pace-theme-loading-bar.min.css","d3b26dc7b4316f081ff78077a3fa43fd"],["/lib/pace/pace-theme-mac-osx.min.css","c386f98349b9533c7763ec76c8c88b8c"],["/lib/pace/pace-theme-minimal.min.css","2abd37505953f32cdeea214fd80ed31f"],["/lib/pace/pace.min.js","1f0840cea77e1c2c7f093454bc28c77e"],["/lib/three/canvas_lines.min.js","284295f640b802d0fed4d7c4478bf62c"],["/lib/three/canvas_sphere.min.js","83ea4f11244ad1cbf3a8a6e544653391"],["/lib/three/three-waves.min.js","a907ba8e1d4e204f3911c05fb157a66a"],["/lib/three/three.min.js","0e0e82ee1c0e269842ca8666123e1040"],["/lib/ua-parser-js/dist/ua-parser.min.js","2d3f09589bc850690f36120cc10574ba"],["/lib/ua-parser-js/dist/ua-parser.pack.js","109fdaf3aa26255e07fd2224537237c6"],["/lib/velocity/velocity.js","4e18fb24bf849014f2e8fb1be1568e69"],["/lib/velocity/velocity.min.js","24429157f5e4b2d368a406c4ea62a027"],["/lib/velocity/velocity.ui.js","dd709afd137cebbf0442497275cd5de1"],["/lib/velocity/velocity.ui.min.js","ab50f5bacda8f1e3cfa7438fd8969091"],["/links/index.html","0ef83c2a360b33abeb2f5e480f9bae75"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","3b19de26d00926fb9b721586975d71da"],["/page/3/index.html","8e27b9ace5afa4d33c6b4fe10aaf8fc4"],["/page/4/index.html","9f7f2d574920e0374d79ccecc3082abb"],["/photos/index.html","e3da6e1652e4809d3be7957be1c380a1"],["/posts/191ddb73/index.html","3aab1ba657297ab05b1423e8ff3e25f2"],["/posts/1a195976/index.html","ca59aa53b4a8f27ea11c9dfaff148ed6"],["/posts/2292f1af/index.html","486707587fe919cb3735f3e613b74ed6"],["/posts/2fc77d95/index.html","166ab7f20eef90bd7cb333bc57645032"],["/posts/2feacaf4/index.html","6817d74e956fc84607dcbf2aac3e2d17"],["/posts/37f2c331/index.html","2e7fbfda93be77632770289437a1d393"],["/posts/385f0de9/index.html","48e3572e83ea441dc3eb07a87e4580fd"],["/posts/3caecfa9/index.html","482078ffeb1ba88624014711c308df50"],["/posts/44414303/index.html","126b2136f2aef78fef93703376d9ef53"],["/posts/456610d0/index.html","0fdaf2f58f850c9346310302ee24adda"],["/posts/45e51894/index.html","0cad0e05156b3131593efca20c84d8d8"],["/posts/4f1131af/index.html","6a057ccf41f403a06abb531a5d86aec9"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","b05fa9f2096e68c06dbfc0030df005ba"],["/posts/517ebb95/index.html","861c2cef4dc66e758adaced745a169c2"],["/posts/53bf1d9d/index.html","39f2571e60ad394c448a81dff226ef7d"],["/posts/554c2ba0/index.html","c28b95179ac2e3ccb84d56aea67628ff"],["/posts/63556f52/index.html","18c81c3e42729029a22fb6edb7f18597"],["/posts/6d49ceec/index.html","6b0e5bb2269ebedfac00d3f89efe20b1"],["/posts/6de7d9db/index.html","c69154a641f04c3f674666abe8593fd8"],["/posts/6fda249f/index.html","38c6bb8e19a4169c6d41af78e7c1d63d"],["/posts/84b87417/index.html","2500e6c673b58e289e2e86296787a30b"],["/posts/92912ddc/index.html","9dfe0fa323d239fa951987c4b4202bb2"],["/posts/97e5bc9c/index.html","e9cd407bf0292622c7b004f67ff66227"],["/posts/9a5c7b64/index.html","1a40b9d08e2f399fba7af47491f18e3a"],["/posts/c311b112/index.html","f2e6580598b916a6481586a766c03de2"],["/posts/c620d4c2/index.html","149b40655036494c83f231481487e4bf"],["/posts/cfc54393/index.html","a215ae6a320391023c02b68e447c03e6"],["/posts/dc5155ff/index.html","f03caf45cfe9a914b9969c36d1d447d6"],["/posts/e1bd836e/index.html","a1d0e00a83c8e121790f2f77e2bdb704"],["/posts/e31c0293/index.html","97a998c6b71939dab4410459070624a2"],["/posts/f5fc4461/index.html","d33db329dcd228ae3b4c809c477ea989"],["/posts/f8073739/index.html","811a6787953214315a4f493ba972d580"],["/posts/f97ef43b/index.html","1ee1fb0459a1fb81e231dc346a4b019e"],["/posts/fa84d5fc/index.html","de326d9b6241b83b8137f3d910d194ef"],["/sw-register.js","160e2f9bba12aec4965752042cde0515"],["/tags/index.html","6182d4420e18bf8046a430a888cf20aa"],["/tags/つぶやき/index.html","2c7d505927d88f14f840f6fe5b874d76"],["/tags/アニメ/index.html","705595e41162328c735dc949c4d5495a"],["/tags/インターネット/index.html","ee1a39abd430a0486f778c85075a8e1c"],["/tags/チョコレート/index.html","c94c83c4819578b5fd22f967aff0fc02"],["/tags/中国に関する新聞記事/index.html","c2bbe90c588810fdb2b848b07b240d94"],["/tags/乳製品/index.html","c81dd403085996f54f26a5d969d13a6f"],["/tags/労働者保護法律/index.html","e7abe31041c7c4ffb6d170b56a46f778"],["/tags/心理学に関する記事/index.html","13799e6a8908cc4a0b2ac550f7c8bf94"],["/tags/日常生活/index.html","a49e84d9bb9c6da15f8775bf5664b84c"],["/tags/日本のIT教育/index.html","1acce4f2c07c99bc492125ef273fb201"],["/tags/日本のIT現場/index.html","f1ed2ad0147e9883b6f8519b26d067b8"],["/tags/日本のビジネスマーナ/index.html","4c4ddcdd10c72f72c96c9dbc455ed2d7"],["/tags/日本の国内の人権状況/index.html","54915c4375799b62ea943e24cb1d5588"],["/tags/日本の経済新聞記事/index.html","68e0c660d6c0b6a676fd7f76651d9503"],["/tags/日本地理/index.html","6663aedc4457c45081657481d6dd10ec"],["/tags/环境/index.html","45b2b0a63d42c36be3727f2791435bba"],["/tags/過酷な現場/index.html","22885e6365af63a0954a146a3bfa3cd6"],["/tags/金融/index.html","90c0bd616f7a66c3e40729dfccf2e6c6"],["/tags/食べ物文化/index.html","eceefb56b90cd33b7dfd529ed6d7f689"],["/tags/食品工業に関する記事/index.html","42b4e49be5b903e055cf7a2620a9118b"]];
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
