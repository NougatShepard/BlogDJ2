/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","02be11b17aae8889b143202abcb5728e"],["/about/index.html","dc0e82e17119cac39a78b307434c1442"],["/archives/2019/04/index.html","0a70c6ca2eedf684bf1ccd8ff95794e8"],["/archives/2019/05/index.html","7185f951f760ba488c902592f10169bd"],["/archives/2019/05/page/2/index.html","72655043cc5be0d74d15d4dc1d91aa3f"],["/archives/2019/index.html","928e7422d4793fa1b1b63a5f36038f61"],["/archives/2019/page/2/index.html","3712368d2dad550555a6ba094eee8d63"],["/archives/index.html","d7e100663389a8643e873136a04d7959"],["/archives/page/2/index.html","9645be3253b142a06dfa6fd908424a65"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","c42a9fe192521d34b9113c40c8913d7f"],["/categories/index.html","c0a4183079afcf2e5eee43ddf11d30e5"],["/categories/つぶやき/index.html","6a95e2455d2c7190112d5c00ac05c366"],["/categories/インターネット/index.html","1dbb88125e04f66b234fc127c1ab1c87"],["/categories/中国に関する新聞記事/index.html","d90c6d0c08037b8013bcf2ca8be8b4b6"],["/categories/労働者保護法律/index.html","bf3b82316160a1c4e0ac8243a99494c5"],["/categories/日常生活/index.html","a3d106fbf5a9268acb15aa8b13471a04"],["/categories/日本のIT教育/index.html","f079d249d37f03912f2cd7c74db3e2ce"],["/categories/日本のIT現場/index.html","78935c696025780ff2430b2bf07405e8"],["/categories/日本のビジネスマーナ/index.html","1683ea3d4e1cd08751dd280bce9fe15a"],["/categories/日本の国内の人権状況/index.html","19d582e837fe7cc1be44e8f9e32f5ac8"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","bb2f7b2edb38dfa7337d75ff35c17ba3"],["/categories/食べ物文化/index.html","d9b3940cdeca50ff243808ec1e86a301"],["/css/main.css","2a89579f55152af0b6984ff5443471ca"],["/games/index.html","061c68bd4bd3d86161dfd72df1e0184f"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","070c6d3919f74cfb1813af700b7cbb1d"],["/js/src/affix.js","1c8986f8a8a4c3faf153a86cfe793f00"],["/js/src/algolia-search.js","720582604715939c2474eb7a97a23f5d"],["/js/src/bootstrap.js","16c915215d456db26bb3ac3ed3941d33"],["/js/src/china.js","edf2a4099b99a12137dcd9955628a621"],["/js/src/echarts.min.js","3c25a8063bf00413dbd9f10b3e617568"],["/js/src/exturl.js","a6bb3f8c714b48e39b6207b5533560a2"],["/js/src/footprint.js","4aae9317888c5e8c279455a929f16743"],["/js/src/hook-duoshuo.js","cb2c4b8fee99b69fab1d83c92f88c236"],["/js/src/instantclick.min.js","4492bcaf54fda3e1f6a78c4434763de7"],["/js/src/js.cookie.js","8563340f1e661af387326d808388eeec"],["/js/src/motion.js","8d4470b488354ca72a01da9a24d8f82e"],["/js/src/post-details.js","1b72400ce49765bfa5c57036f6000376"],["/js/src/schemes/pisces.js","502d43c0a9d748ff8a11761599698388"],["/js/src/scroll-cookie.js","836d3d4322c0ccc08e73c81876b33159"],["/js/src/scrollspy.js","92a18fc7d9d5ca692900904ac4bd9c73"],["/js/src/utils.js","73a3be1e2aa04f120566b89261bc221b"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","901dc6cf86b64e1ec84bbfa06bee749c"],["/lib/Han/dist/han.js","1b9f8972fd8dcdb6e06a9943685937dd"],["/lib/Han/dist/han.min.css","82fae8fed9c4d226429a5580f8c53bdb"],["/lib/Han/dist/han.min.js","86fa685c73ff3de9d49e9ef8a9480008"],["/lib/algolia-instant-search/instantsearch.min.css","26d97b2698991d0a5ae08be1c4517d08"],["/lib/algolia-instant-search/instantsearch.min.js","fe6eea11fa55a9b30e322fd9d09f96d5"],["/lib/canvas-nest/canvas-nest.min.js","17f80afbe64f50bc4abfd100fbe2f2b4"],["/lib/canvas-ribbon/canvas-ribbon.js","2148030c2845545425270a4460c27b4f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","fb67b26ea0a8b29a425589f5f8afbb0a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a57cc6fb255105e565d9c1c50ab5e1e9"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","114d4da922b9768bd58a0119f2d2fc2b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ba7e1d830c2766070861237523857548"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fb17cbd63afb41b3042783a04fae929d"],["/lib/fancybox/source/jquery.fancybox.css","ed0174e697c83e2850b49019de52aaf9"],["/lib/fancybox/source/jquery.fancybox.js","675e4473ec767ab27f101a5f6c02155e"],["/lib/fancybox/source/jquery.fancybox.pack.js","6bafa483deafb116eed6e3c42d78140b"],["/lib/fastclick/README.html","83fa6768b6a9a0beb0b18045d288d6ba"],["/lib/fastclick/lib/fastclick.js","9088746976ab4f84bcbedad4b6417889"],["/lib/fastclick/lib/fastclick.min.js","ab43b258c2b4bc306155f130dad8051f"],["/lib/font-awesome/css/font-awesome.css","faef0827ac9200d9ec9519bdb9350a7c"],["/lib/font-awesome/css/font-awesome.min.css","586586d3428dcd7dd24f7f83be60a1db"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","537a621b674d205b3194fa15f4396b29"],["/lib/jquery_lazyload/CONTRIBUTING.html","f79abc791b8e2993e86847d788ee8e60"],["/lib/jquery_lazyload/README.html","b6b87d91a81b4815bccaf64e3c7fdf2c"],["/lib/jquery_lazyload/jquery.lazyload.js","e49f75135c1e7cb7665c74f03b51f1ed"],["/lib/jquery_lazyload/jquery.scrollstop.js","b86b133860562414b1a078f81da99e81"],["/lib/needsharebutton/font-embedded.css","b13e6fdf3f2683130ec866093e3c1a34"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","be92667e8d8e10e75fe49e7eb7d8012a"],["/lib/pace/pace-theme-barber-shop.min.css","35ba7a8bf58a34488dfea0751a963039"],["/lib/pace/pace-theme-big-counter.min.css","ef3821eab5f3d208efb36de2405f3410"],["/lib/pace/pace-theme-bounce.min.css","65919dba814eb8a7e6512de3f81e2087"],["/lib/pace/pace-theme-center-atom.min.css","a72c5090a43faca745a69bd3b0c2f422"],["/lib/pace/pace-theme-center-circle.min.css","6df0250020cbf75810dde17cf5f7495c"],["/lib/pace/pace-theme-center-radar.min.css","ad780c7f3f26546c06c1631e6b6fc2e2"],["/lib/pace/pace-theme-center-simple.min.css","8b37a079ffbd6fa34b052742fa6ae9d6"],["/lib/pace/pace-theme-corner-indicator.min.css","62acc9c390d9dcd7fba928713a12fca0"],["/lib/pace/pace-theme-fill-left.min.css","8d2318d494b27713a39e1af9af52f396"],["/lib/pace/pace-theme-flash.min.css","c88014844bbb2b856edb447d898fa02b"],["/lib/pace/pace-theme-loading-bar.min.css","967e919df7a6614d7b8c2a964a249b8c"],["/lib/pace/pace-theme-mac-osx.min.css","245559ba68c3d8cbc6a0a77d1b4b2f98"],["/lib/pace/pace-theme-minimal.min.css","8f797894e04acab3398c0da94f1b53e9"],["/lib/pace/pace.min.js","c6215a881256357aed65ff790a5c3b65"],["/lib/three/canvas_lines.min.js","285fe873508c2f3404267ba7998ac2f5"],["/lib/three/canvas_sphere.min.js","f2a36a96a8ffdf6c6eb8ca5bbd2ca416"],["/lib/three/three-waves.min.js","1998b8aafd7c84675068142ac02bc2a7"],["/lib/three/three.min.js","7324c593a01db2d521b97d322a4ab727"],["/lib/ua-parser-js/dist/ua-parser.min.js","290c6206a8ca42b47b7609ee106145c2"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f23cb026a45c1e8f2639084afecd65a6"],["/lib/velocity/velocity.js","81773c917909bca97f81ac7fef60a80c"],["/lib/velocity/velocity.min.js","e6aa2657b2488c128157c949848b9ed5"],["/lib/velocity/velocity.ui.js","e83018d574b6ca42a2c10358b282b383"],["/lib/velocity/velocity.ui.min.js","654f2050f0bb7bf6e8ecf37ed800d70e"],["/links/index.html","d9ef3b336f2dc8fd9f9150a55bf91893"],["/movies/index.html","25eed8bfa6378cc5c6e792001756430c"],["/page/2/index.html","de3b484dc1112ae396dc25536ba15394"],["/photos/index.html","2844f4bddf77986ee0ab136c14221cf6"],["/posts/191ddb73/index.html","208c813b7cb83dc67bbd5a5e2d83c486"],["/posts/1a195976/index.html","1cdff7b67ead49b9490c470170f4c3fd"],["/posts/2fc77d95/index.html","9db3e531032114303bb2ac5dbd52ab48"],["/posts/2feacaf4/index.html","496bca6175392aaeeb2b03f0d5ed94fc"],["/posts/37f2c331/index.html","671b73e3d9dd8a5fcb19b8df9944b649"],["/posts/385f0de9/index.html","2658b3fce01d50e067528be9796b5d33"],["/posts/45e51894/index.html","a6a28423f81869702ee846fc49347e9f"],["/posts/4f1131af/index.html","606b851b0c40a8d6cb37b5fa68926ea3"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","47898cfffa3a5337a538d146368fdfd9"],["/posts/53bf1d9d/index.html","42b9bc97d7564959bec9e8ce92147a78"],["/posts/63556f52/index.html","5faa201a42316486b9a6d35932e5ca3b"],["/posts/6d49ceec/index.html","25062b08e5a3fee434cc06bafd401677"],["/posts/6de7d9db/index.html","646e9ec87005f84e5b7e5d01916d4854"],["/posts/c311b112/index.html","54d0839c7bdf1bde11fdd6e77382fe7c"],["/posts/c620d4c2/index.html","efcc59afb05f5f6064891cca8b18840b"],["/posts/f8073739/index.html","75d83ace26f991c60daede0e3bf537d6"],["/posts/f97ef43b/index.html","4ee80e0fbf00bc319c8a10a405bd9ebf"],["/posts/fa84d5fc/index.html","b880666522e39c3cf14dd3edd3c0573b"],["/sw-register.js","cea2b66fa4a03604014010528e87c941"],["/tags/index.html","06f36bc3fb941c8b528b481c9a275cf0"],["/tags/つぶやき/index.html","6ee8662d320ab8bc91e4dcc9768e760b"],["/tags/インターネット/index.html","e8c050d36223b42d3ec97d091dafa045"],["/tags/チョコレート/index.html","611d82a78c351c1f3f7871a6a160894f"],["/tags/中国に関する新聞記事/index.html","ed3a0804b72871d0d2a61dd88f344391"],["/tags/乳製品/index.html","cdca4cd3bc1af1c55a2f7636a009844c"],["/tags/労働者保護法律/index.html","2fad53dac62b3753318ae090bdeb157e"],["/tags/日常生活/index.html","cb832680e14f5ebf584ad016bd95da3c"],["/tags/日本のIT教育/index.html","ea74b4e5154d5d38cc4a68addf64dfc2"],["/tags/日本のIT現場/index.html","66095327be6f6a067585621518013a21"],["/tags/日本のビジネスマーナ/index.html","9a26f4b2b6c4bb87b8d07d94981452b7"],["/tags/日本の国内の人権状況/index.html","5d03cecf7ee926096e7c53aba9cd041a"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","3b86d2decd363b075c194b972a708b9e"],["/tags/食べ物文化/index.html","b99846674c9f5e95ef81594feacc2c2d"]];
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
