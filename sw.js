/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","c2fc609291ffde91af7c759e3f7498e2"],["/about/index.html","9eb6cac2d5e41b84804cbaa8b32ace2d"],["/archives/2019/04/index.html","c05166a357e68b133839e186c1f10302"],["/archives/2019/05/index.html","1667b74f1ea0dc2529c09a04d5831385"],["/archives/2019/05/page/2/index.html","7f279d39d29d53266bb42e341e874f15"],["/archives/2019/05/page/3/index.html","bb0f1fd8a09993dcb81521804636dc15"],["/archives/2019/06/index.html","99b48f254f45bd7bf9190f2f526fe381"],["/archives/2019/index.html","f2c17fc42777015c45de9f11207496e2"],["/archives/2019/page/2/index.html","3c03c5a33048dda4ae5ec0c3ade20048"],["/archives/2019/page/3/index.html","25a5330a5d9345810ca4995e0c59c6b7"],["/archives/2019/page/4/index.html","065b555372d081e7b0917d5bc53e2d29"],["/archives/index.html","c9949eef29baab826be6ac9a315f9ae5"],["/archives/page/2/index.html","235de7d7f717e751cf4b867354de0228"],["/archives/page/3/index.html","44fdd5779cad35a475acb73cb10eebb2"],["/archives/page/4/index.html","42def29074455e956aad9a4b6b0d2cd0"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","cdc981c528bc42ac860a7a8171781f87"],["/categories/index.html","68ac86da6df42d1ee544d4be0727aa93"],["/categories/つぶやき/index.html","9072fef66cf3f2ec65c40fd45de9a550"],["/categories/アニメ/index.html","6c3211346b248bbc1185ac1560ae5395"],["/categories/インターネット/index.html","9312d23ef69ffe6f5e9457bed2e59cb6"],["/categories/中国に関する新聞記事/index.html","2bffa0bea674748b454407f65aab9757"],["/categories/労働者保護法律/index.html","47c751ed4576fd056c92840b4961f32e"],["/categories/心理学に関する記事/index.html","3295d7ebb55a7f958b6d4c5b99394a74"],["/categories/日常生活/index.html","3941f3542b2504ce5164de03b7145229"],["/categories/日本のIT教育/index.html","bb4ca5917ac0e3f5797c479230507fbc"],["/categories/日本のIT現場/index.html","d04329e68eca8b05a1002c09d9d6794a"],["/categories/日本のビジネスマーナ/index.html","975978e0ee64a10e0f6ed6e1d5cee14e"],["/categories/日本の国内の人権状況/index.html","4c911b4c07e0e7f97c90bf27cba7e8e6"],["/categories/日本の経済新聞記事/index.html","a72a143414351d6363d439b321ac938b"],["/categories/环境/index.html","f6485177424c0a0ca430131d4d6c99f9"],["/categories/過酷な現場/index.html","e9956c460272404040ae68dfc762d89d"],["/categories/金融/index.html","9fdef603731f56b48bcd1815fff90017"],["/categories/食べ物文化/index.html","b862d3c6611b45303bf8da5cf80481ea"],["/categories/食品工業に関する記事/index.html","6a251e2f975a2f4c5c47002c6299d289"],["/css/main.css","a233da234daa0dd6ac821ed791432eca"],["/games/index.html","5aba66b05830cf98a5b1018c59eaa31b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","4fdffe87d128cf02805fe752d074c4c4"],["/js/src/affix.js","aa89a039765dbde418a300ef37d49e70"],["/js/src/algolia-search.js","74f75be6b88202444f25812dcb083c72"],["/js/src/bootstrap.js","ab28d7ec99da4fd1ad2353db623b3c85"],["/js/src/china.js","ac6358feb448e08054aacc61decd723a"],["/js/src/echarts.min.js","c94d0bd7927c4862def75e5db9eaba36"],["/js/src/exturl.js","be86c900dca3186800da1afc2e6c24ae"],["/js/src/footprint.js","c03d66a8eb335afa4cecc86952858b00"],["/js/src/hook-duoshuo.js","d04b3b2e892ae44ecf27257515855db9"],["/js/src/instantclick.min.js","c96ef8daf9c8132d2e487f6c29e7ce99"],["/js/src/js.cookie.js","b842418333324a01f0c85e330b999a41"],["/js/src/motion.js","371689267e934e29ad546be772ebc7fd"],["/js/src/post-details.js","90e7cca1f854c2f30e02e1f3c5c89ffd"],["/js/src/schemes/pisces.js","cf0b6d46f43ac86cbec8498d9baf983d"],["/js/src/scroll-cookie.js","bc8cb67a449341c35e2d99784dfcee58"],["/js/src/scrollspy.js","ea27c2bb22846d0ff97b00ddd2382185"],["/js/src/utils.js","46687c15d989071b233dfb97e09e6706"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","e2cad8ae83ad57459d520543f6c77ba5"],["/lib/Han/dist/han.js","41cf61c6de55ea26acbd75ea076f6af2"],["/lib/Han/dist/han.min.css","829684853aa27e94557c79fb66b874af"],["/lib/Han/dist/han.min.js","541944b75ac941571db8f533ef11b8d3"],["/lib/algolia-instant-search/instantsearch.min.css","5e0c2e37dd39031986530b2602a24240"],["/lib/algolia-instant-search/instantsearch.min.js","bffc266e85b590b3d36177a348e43934"],["/lib/canvas-nest/canvas-nest.min.js","c41129d3f9b57c7884b565635d6306a6"],["/lib/canvas-ribbon/canvas-ribbon.js","49dc8e615ac15c90b940768df6d21a9b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","85fc7a0277b9295b934c8eceba7e8c5b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","bc24d168d1bd0437c2d9ba3808d7625b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","405e731ad4142d1562ffbc6e3b631d01"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ba6fbb41c5fcd0fa1478559cd7c53e7d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","04074f5573cb6140981c2766e1e9ca00"],["/lib/fancybox/source/jquery.fancybox.css","9b475b1f71765ef2f519b3ec07e7ccbf"],["/lib/fancybox/source/jquery.fancybox.js","9b9f940ea35e82a36959a7d90172ff31"],["/lib/fancybox/source/jquery.fancybox.pack.js","2acca60f82c6af8e4ae1c98a49a2aef1"],["/lib/fastclick/README.html","f9b2f2844f19b52da09d8094763a82ea"],["/lib/fastclick/lib/fastclick.js","840f59c1e36998635451141993b0752a"],["/lib/fastclick/lib/fastclick.min.js","fc0687dd6daee03e76f34118466e669a"],["/lib/font-awesome/css/font-awesome.css","5160739d8a3c96b7e6ec05b14c510be9"],["/lib/font-awesome/css/font-awesome.min.css","0dfe18e286b0e6d8dc5e40e6409070f0"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","3e884641c2ae6d8771aa3677f3306082"],["/lib/jquery_lazyload/CONTRIBUTING.html","6fd9d9be63e7dc89a2646640c9728df7"],["/lib/jquery_lazyload/README.html","b37530d2823a5713a780c1f53e615867"],["/lib/jquery_lazyload/jquery.lazyload.js","d32a43e1ee8d15b4fac63132be5ef12e"],["/lib/jquery_lazyload/jquery.scrollstop.js","0e570e9dd58289654e1e718da56f2eaa"],["/lib/needsharebutton/font-embedded.css","118d86579a2bf38a3a6f80efd692a1f7"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","a4f9a29f03272f4e00718c9acc8e5431"],["/lib/pace/pace-theme-barber-shop.min.css","349043294514a4b1cd961f33d597fa40"],["/lib/pace/pace-theme-big-counter.min.css","096609de8446d96a31a910695e7e9397"],["/lib/pace/pace-theme-bounce.min.css","fa33e9c938971515aafe1adad0c380e3"],["/lib/pace/pace-theme-center-atom.min.css","0dc90a200e90ccec618fbe8ba5bc71ae"],["/lib/pace/pace-theme-center-circle.min.css","4c7c1f8342b3835408fe27fab4834a42"],["/lib/pace/pace-theme-center-radar.min.css","4da587ba01b773faffe3ea355c98605b"],["/lib/pace/pace-theme-center-simple.min.css","dff49e375eb2185eb1e6fd42ff14ccd5"],["/lib/pace/pace-theme-corner-indicator.min.css","9fe16698d800017e38f7fe7edebc9c21"],["/lib/pace/pace-theme-fill-left.min.css","dbd57cc0b4d5a1d25393f473cb04c3b4"],["/lib/pace/pace-theme-flash.min.css","3ebfc46a978f6e8db8239aaccd844b27"],["/lib/pace/pace-theme-loading-bar.min.css","fadc809a2339db1bb157a723db06f805"],["/lib/pace/pace-theme-mac-osx.min.css","f5bf00e80b4ce058d0a83713b4ab28fc"],["/lib/pace/pace-theme-minimal.min.css","2ea8f400a83a024bee8b5de70a757dac"],["/lib/pace/pace.min.js","6683bccc0cd6375b0ea0b5d9a1eb9b4c"],["/lib/three/canvas_lines.min.js","8127e63bb1446ab55471357e3fed782c"],["/lib/three/canvas_sphere.min.js","c0a73c64c8011a6de12665cd797624d6"],["/lib/three/three-waves.min.js","77be8b8c24e13b2ce341b60e527a24cf"],["/lib/three/three.min.js","6570afeab85e6980596227d7c0fd25fc"],["/lib/ua-parser-js/dist/ua-parser.min.js","cf1eaeaa2eba8b744bf346b341b2c684"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1946a7abb1f8e8634fdc50c883369bf2"],["/lib/velocity/velocity.js","1a6733b3628382c851bce3acd253699a"],["/lib/velocity/velocity.min.js","59db57d592e08e87a3d8aadcb0e8dc86"],["/lib/velocity/velocity.ui.js","a28d70b807e7221637f2f002682ffacc"],["/lib/velocity/velocity.ui.min.js","9b2be7175f057d1c8e9c80f36f8cf732"],["/links/index.html","93f21138d37027fc11cde195b55a5375"],["/movies/index.html","1a66e59af3fc62ab0985a26cb5e99026"],["/page/2/index.html","80f7817a1302c180076ff6479b0df269"],["/page/3/index.html","09be731ef45df9fe6fe780222b5edee1"],["/page/4/index.html","dc7ec9d0b47f7d664a804d089a154028"],["/photos/index.html","226db35f9f3e6e5e4ac755b4dd05ab26"],["/posts/191ddb73/index.html","74309d788cd8a1e8a768a013341fc18c"],["/posts/1a195976/index.html","7acf1bf05651f7717bfbe995eb132efb"],["/posts/2292f1af/index.html","275d3803f10dafe19aa947b82a3e9c5d"],["/posts/2fc77d95/index.html","cc6a6ffa3c0823033a586ff181d68b4e"],["/posts/2feacaf4/index.html","029b71d7d91a926af3b077df85a08a87"],["/posts/37f2c331/index.html","d9b52a403b9bef5b6da0856e726466ec"],["/posts/385f0de9/index.html","2a92b04b92b0c7e373b1529db5ac4287"],["/posts/44414303/index.html","854ac2bf1350d02649c52799dcc01898"],["/posts/456610d0/index.html","b722957a5c7d237c1282c2bb70b34b44"],["/posts/45e51894/index.html","dbfced63fe8357d80287e59986795a29"],["/posts/4f1131af/index.html","588de79487ebe50ccf2b33a7fb2d43b4"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","346f3c745440f0577ecf6014ac48191d"],["/posts/517ebb95/index.html","d29b518e6091c634b59d32bcb0cd5a11"],["/posts/53bf1d9d/index.html","da3feea19110f18994dc5ba9a714918c"],["/posts/554c2ba0/index.html","09b4c5cb3f0c9229180882000c80ed68"],["/posts/63556f52/index.html","8117ad74fbf9b764762211c2c29d3a8c"],["/posts/6d49ceec/index.html","51b95b62409804106b2ff98725b18855"],["/posts/6de7d9db/index.html","083d76398c05651c1b36229a6b9c3570"],["/posts/6fda249f/index.html","b74cd09fb6b13ebec3cb7df7d40717f0"],["/posts/84b87417/index.html","539d1e49fdc11a9edd828797ca83869d"],["/posts/97e5bc9c/index.html","19573719006713d08ec98b434d4fcb4c"],["/posts/c311b112/index.html","b3ac6c70aba07a7730e529fe325e01a5"],["/posts/c620d4c2/index.html","58ae489a80956d21640d5c3abe0669a3"],["/posts/cfc54393/index.html","964025b8757950dec5e4d9514a464000"],["/posts/dc5155ff/index.html","5d70de3af365ae63c4ffdfa45c8bfefc"],["/posts/e1bd836e/index.html","43761acca3c4ca9ce64f13d7e078f016"],["/posts/e31c0293/index.html","611f9f40bffb440aee12623691333fe9"],["/posts/f5fc4461/index.html","fe1d422e2fe7c9772c36a2e9f4763ab9"],["/posts/f8073739/index.html","cfc90d50166223aab7af8f97f0e10380"],["/posts/f97ef43b/index.html","d6edfc4681338b49add13fab85dc2f3e"],["/posts/fa84d5fc/index.html","c88e6848ea00121d42549a3df6682105"],["/sw-register.js","6e93209c7f3e1444d0887589d4fcd3c3"],["/tags/index.html","eef6bf34675f13d977019549c7e826fc"],["/tags/つぶやき/index.html","20b4e0a1530f462efd964c68473ef94a"],["/tags/アニメ/index.html","1e8e48dbf9b154a5f04f57883235de84"],["/tags/インターネット/index.html","ace45c5b67101802a75f721a386c1dfd"],["/tags/チョコレート/index.html","f89d7412ddb3eefeea5d226d70e3fce6"],["/tags/中国に関する新聞記事/index.html","f21611bc72bff407cb675b032bb6e898"],["/tags/乳製品/index.html","7fafec8214c9bc8316dcf4b35d6613c0"],["/tags/労働者保護法律/index.html","46b916cb9fd6d910369ec38422186641"],["/tags/心理学に関する記事/index.html","1ff6411a0c08a05dbf504836f9432b44"],["/tags/日常生活/index.html","b39abc5504327112c0e97ab50aee29ad"],["/tags/日本のIT教育/index.html","49bc05ef8f3bdfe8e277194b6a8e635e"],["/tags/日本のIT現場/index.html","a77fc10bcdf0642fc3165985f24b541f"],["/tags/日本のビジネスマーナ/index.html","57f583df0ffa03c5f53902b0efbff46b"],["/tags/日本の国内の人権状況/index.html","ab51464b570567dd586c4b01d73ac223"],["/tags/日本の経済新聞記事/index.html","c9d5548e0427d9815e9d344318c25781"],["/tags/环境/index.html","4e9115a9e2793ad332d0a76d4d0e0413"],["/tags/過酷な現場/index.html","5ba5a155faab0c7012ab68d1fb52159f"],["/tags/金融/index.html","32cde9666c7172464df345cb3ba81d41"],["/tags/食べ物文化/index.html","d2b8fff4e5a3ba78736041c52cbea41b"],["/tags/食品工業に関する記事/index.html","aac8b473f26a5fdf39ad8feab3874c6a"]];
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
