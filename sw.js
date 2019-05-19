/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","0e4303f629139701e480330b2c73319d"],["/about/index.html","2037497dad9877f87d67473aecddbd5d"],["/archives/2019/04/index.html","36fcc7bad4dd2c6f0e738a311c1336e5"],["/archives/2019/05/index.html","bcfc1e4065a83571d5d47cb7ac734de7"],["/archives/2019/05/page/2/index.html","803f816b4722e4cc3bca443f26bd9f4e"],["/archives/2019/index.html","be8a2b8d9fb01523b35a0ad89925d607"],["/archives/2019/page/2/index.html","86b91f94fe3aa76065a313f82c5a1af0"],["/archives/2019/page/3/index.html","65b8687ffa31b894340e5a8e39a5d566"],["/archives/index.html","84a565c3883d450fde24691cf5dd6a92"],["/archives/page/2/index.html","a2db5b07e465dacb2ba3e729b0bbfc74"],["/archives/page/3/index.html","5a54a377f5cff924d79e34611cbae97d"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","39866580b7b02cd2deab24da46154be6"],["/categories/index.html","cc2e180b44f808ad477f353476934b4d"],["/categories/つぶやき/index.html","3238f67b7f4327f3d39f3ac671227b2a"],["/categories/インターネット/index.html","4fb53841a810ba08e981cd5f328b2911"],["/categories/中国に関する新聞記事/index.html","c28d407ab5f88e6a9d53bad47894abb3"],["/categories/労働者保護法律/index.html","1b1dee64f3587e968a8e65136fec879d"],["/categories/日常生活/index.html","34f68dbdcb8391e4397bba902d1932a8"],["/categories/日本のIT教育/index.html","19fe3005b6d6465ad66b0902c3d5fd2b"],["/categories/日本のIT現場/index.html","695853993ff211ffe85489f38b83126d"],["/categories/日本のビジネスマーナ/index.html","07be2d26a3277643d460269b4436e033"],["/categories/日本の国内の人権状況/index.html","ddf34549b7c5506d9dd365677f47baee"],["/categories/日本の経済新聞記事/index.html","4daad0ec01df4ba6417059af9dd67190"],["/categories/环境/index.html","6d2f779fbf151088cb1e12a5adf222bd"],["/categories/過酷な現場/index.html","dc5d38fc710297d20e3ab767d05b0802"],["/categories/金融/index.html","4adba72047725cdffaf9ed24dcc538c2"],["/categories/食べ物文化/index.html","eaf7c342f30e5c54ea4abfbf435690ab"],["/css/main.css","59dac650ce25324b44d30add419b9c5a"],["/games/index.html","4b22810dd45c469d9cec49e451df7e21"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","5c8f8b287a01d1ddd0ef4c55946921f9"],["/js/src/affix.js","64a94ac1bf1a20c93b79ae85b4f1422e"],["/js/src/algolia-search.js","0beaa4f69ebc0cad1117e3e832d7993f"],["/js/src/bootstrap.js","5e6166efc94751536f2281ec3aa7223c"],["/js/src/china.js","563411f470739be901ae593ca232ba87"],["/js/src/echarts.min.js","b3b3766f447897cdadf4a4b9179672c7"],["/js/src/exturl.js","9f09ad7a4c84270860d225d86ab809b6"],["/js/src/footprint.js","2783208a92060903bf00a3ae8d055a1c"],["/js/src/hook-duoshuo.js","69ce3b2589fbef1bc27b59285c6eef3d"],["/js/src/instantclick.min.js","6c4b22e40473660c6255f59594ca6e5f"],["/js/src/js.cookie.js","cfea3412b1989ceff8c4bdde4926be30"],["/js/src/motion.js","37aab01e4cdfef48c69693c527ee4e0b"],["/js/src/post-details.js","b511c6c6718a7f2a6b6c85668c49dd8a"],["/js/src/schemes/pisces.js","7d8479fd61d527607cc702d13dea06a4"],["/js/src/scroll-cookie.js","f7dc61bdb7b61241b7d22278c4d8688a"],["/js/src/scrollspy.js","c6b746fb2c9d080fc6d2dce658b155b9"],["/js/src/utils.js","f9781b25c115f0d4dfb0f809d1954e2a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","34510cc351adffa647278d9dfb9c36d7"],["/lib/Han/dist/han.js","9d97b3d74b69a3c93049a380d59a6465"],["/lib/Han/dist/han.min.css","a166eccfcc75f2c5a83039b5fa33af4a"],["/lib/Han/dist/han.min.js","f6810d3d126c69856975e8f4bb2f6099"],["/lib/algolia-instant-search/instantsearch.min.css","ba9d10d74cf246a5c3a901819998dd02"],["/lib/algolia-instant-search/instantsearch.min.js","7e905753efe191a14bd280f5cd58d6ca"],["/lib/canvas-nest/canvas-nest.min.js","ea3a975fa4d91b3da73cbc5db9bf6f9c"],["/lib/canvas-ribbon/canvas-ribbon.js","75a6c8539b2cb2541fe33a023a326ebb"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","90f240406597786005d65f61e309f220"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a9e66dc8aa6c3a2b4be9b4f2dbb7ce56"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","cea86943c384837ceb7ace1e617b5e40"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b23b79845a1ea1d2d61faa269a187f0a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d0795c18dd6f944bf225ac71b0d3b07f"],["/lib/fancybox/source/jquery.fancybox.css","461103ff4a504983ef034e0a06650720"],["/lib/fancybox/source/jquery.fancybox.js","d4d2e2375bee262fe129d65556a6a1cb"],["/lib/fancybox/source/jquery.fancybox.pack.js","1ed07ec40fc673e3eb8beff77a3515e0"],["/lib/fastclick/README.html","87c4f362dcb6ffa2e4953f88a21f1a0d"],["/lib/fastclick/lib/fastclick.js","f2bd1925301e1c848fbe9f70f5adf204"],["/lib/fastclick/lib/fastclick.min.js","1cdd6f02551b7dcbd83dadf9b3fdcc6e"],["/lib/font-awesome/css/font-awesome.css","8d2dd775bbeb4e337a69c19a0610d266"],["/lib/font-awesome/css/font-awesome.min.css","a7ffc81a3af1a73ecf9924a547b17159"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","6a94b43237f9a5babb342dfde2ddcf46"],["/lib/jquery_lazyload/CONTRIBUTING.html","c8520e308ac7ec0430d118cb77347a2a"],["/lib/jquery_lazyload/README.html","c96cf8984d665463b9d3538a3b497f2c"],["/lib/jquery_lazyload/jquery.lazyload.js","68388b5c79586942f883a1c952282ab5"],["/lib/jquery_lazyload/jquery.scrollstop.js","c89409f8c9cc5c5d869b3297d29b08e2"],["/lib/needsharebutton/font-embedded.css","9e67d2594164488a5ba1f304095d45d4"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","ca39d15ac870323e081a24e29d818228"],["/lib/pace/pace-theme-barber-shop.min.css","57b8e44d0f57df09e95e072f4c7e9c1b"],["/lib/pace/pace-theme-big-counter.min.css","e7e73cc289d7aca519dd5afed19780af"],["/lib/pace/pace-theme-bounce.min.css","dfa9025c9ede542283b29fa604fc6822"],["/lib/pace/pace-theme-center-atom.min.css","f29d93f57cbdc9e26f373dcd786dbabf"],["/lib/pace/pace-theme-center-circle.min.css","b8118acab522cf0a801b0e6dd1694f16"],["/lib/pace/pace-theme-center-radar.min.css","2b4bd8e11f13b6aca92eaa31c98df9bd"],["/lib/pace/pace-theme-center-simple.min.css","5f3d6044239149eb78fa7fb8ae31a88d"],["/lib/pace/pace-theme-corner-indicator.min.css","7ed4389c136142351825982dec538f74"],["/lib/pace/pace-theme-fill-left.min.css","159ee3ccc012450a22ad544a14122fea"],["/lib/pace/pace-theme-flash.min.css","3fef166414ad728bd4c025bd75e684eb"],["/lib/pace/pace-theme-loading-bar.min.css","5f85011e830e4aa129b5c56814050ca3"],["/lib/pace/pace-theme-mac-osx.min.css","ef1c87cc4eb5a794f945542316d59c9e"],["/lib/pace/pace-theme-minimal.min.css","895d5e0c43eceecce888010d3c82f539"],["/lib/pace/pace.min.js","7ee0661c5260bf8cbd38663a650a14e1"],["/lib/three/canvas_lines.min.js","360c348fbd27130ab28c8df6501d5780"],["/lib/three/canvas_sphere.min.js","57e9df4b3d581d1137096d06ec76ffa1"],["/lib/three/three-waves.min.js","b49501368a90f3c323e33b2e737865b3"],["/lib/three/three.min.js","bc4d285b9e652dddcc100b536b170e7e"],["/lib/ua-parser-js/dist/ua-parser.min.js","00a1f0e5b928dc7753ab351458e7c0bd"],["/lib/ua-parser-js/dist/ua-parser.pack.js","99e0a58f3573903b30ce53c78cde1602"],["/lib/velocity/velocity.js","88bbaed7f685884a3b8b42515cfb02c0"],["/lib/velocity/velocity.min.js","c92dfd1557955d267f4ade1553e740c2"],["/lib/velocity/velocity.ui.js","a90def91e62ba166eefde5aa0ad64e3b"],["/lib/velocity/velocity.ui.min.js","13211315e52a88be0b1110636e60832d"],["/links/index.html","234173304289d404d90527d97479bd11"],["/movies/index.html","4c748a0f8ca2f18ebb4df5e186795a30"],["/page/2/index.html","bd50b39bace3264af49e33eb9c981231"],["/page/3/index.html","f3b0dec943faed6221f68d9f2bf83ffd"],["/photos/index.html","0174c8c28cd805b19f492a7b42583980"],["/posts/191ddb73/index.html","7549edb5c53e7a9e16e87d09a40a95fe"],["/posts/1a195976/index.html","958e810db16c0f7178f0f7ec2fa2281d"],["/posts/2fc77d95/index.html","4404d46b7072cccf673cc2aaac8d4615"],["/posts/2feacaf4/index.html","ceff7d24947b415820a52084624ea7da"],["/posts/37f2c331/index.html","37ba0597dfaa87d6e587e261b8e1e172"],["/posts/385f0de9/index.html","7f66bc11138021a04ccf86697d553d1f"],["/posts/44414303/index.html","55673b45b21bfdcfb3353285ea792540"],["/posts/456610d0/index.html","881b963aa0d831cf4b92274e43c993b7"],["/posts/45e51894/index.html","c80223c5b76378e884b6d48dd0a872d3"],["/posts/4f1131af/index.html","ad46474b686f9feb5f564844c42d69a2"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","875b05250a2122a386629b7e24909e92"],["/posts/53bf1d9d/index.html","2b1e64fc675aa0c2a5ef569b429afe1f"],["/posts/554c2ba0/index.html","16000b111c13b5fda72b676a98cc6d36"],["/posts/63556f52/index.html","f0f17751c1ffa4e7375b32c212899f3e"],["/posts/6d49ceec/index.html","511f44b0dec8727275e46bdfdd85cc30"],["/posts/6de7d9db/index.html","7b6375dfc00146fe3d30e757e7f0e7f9"],["/posts/97e5bc9c/index.html","7beb784f593166019017cc147f8a6524"],["/posts/c311b112/index.html","ac24271babcb8bf4927eeff962cbac4b"],["/posts/c620d4c2/index.html","5506f0a419aa6f5d958fe0e6cc9c071c"],["/posts/cfc54393/index.html","a36452d2c8c311e2e618eaa98e1f4695"],["/posts/f8073739/index.html","75a5cf63781bb2082650c5e4e79ac9ec"],["/posts/f97ef43b/index.html","e6fb04369f9058fcfd9d210452f0b701"],["/posts/fa84d5fc/index.html","13ba0dd3edb94d8e09ba8d3c001f46c4"],["/sw-register.js","0c25be33d56248ad4703abbf6ffc9776"],["/tags/index.html","d3188dacc877a87b34fa890e4a735cfb"],["/tags/つぶやき/index.html","3ad63c3aaa1bd5f41894b5a3337010a0"],["/tags/インターネット/index.html","302cd1c6d9f376d1f0865f0747d4ed0a"],["/tags/チョコレート/index.html","c1a1a85d8e6e6368272d582aea057cce"],["/tags/中国に関する新聞記事/index.html","d61e93f1017ff98aef48f1b084cfccb6"],["/tags/乳製品/index.html","1a7264dea890c5939afa23c6bd111168"],["/tags/労働者保護法律/index.html","e898dc31b4fcddcfaf49241efc370ea1"],["/tags/日常生活/index.html","ae62c78e6104e1411d43a8db1bdec7a8"],["/tags/日本のIT教育/index.html","f92d688ec5726706e87551ad1471a95a"],["/tags/日本のIT現場/index.html","d3f16d69ef093d7c2047036a5436a658"],["/tags/日本のビジネスマーナ/index.html","c9fceb2561a9dd72f4de3be40e8837c0"],["/tags/日本の国内の人権状況/index.html","9b1b81f43652e9a0bc09927e0ca6778e"],["/tags/日本の経済新聞記事/index.html","0cddc801eb8d5a20f0cfc559f4b3e9ba"],["/tags/环境/index.html","de40bde1051b83d0af499432cf42f05c"],["/tags/過酷な現場/index.html","e4bee1639d8f2ae1e5a021639ac63b08"],["/tags/金融/index.html","a8b98a11e32d2cec719551b7f3375680"],["/tags/食べ物文化/index.html","f71310781ee3103329c1261a5d2a5d2f"]];
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
