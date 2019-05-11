/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","f6165f09625e431f48af5838f8a801bd"],["/about/index.html","769e3cb89935a4e54693bf9143038f70"],["/archives/2019/04/index.html","fefb0cfbd890d74e5fb48aa838943a4c"],["/archives/2019/05/index.html","e9bd695ee6236c64a564614f92d14720"],["/archives/2019/05/page/2/index.html","8b493e2e39437c2263922f7ea4baedb8"],["/archives/2019/index.html","7bd8e94f5d39ca556d0df5c74c75a50a"],["/archives/2019/page/2/index.html","41560b8486707bbd111e50eb2f1bf757"],["/archives/index.html","d598ce2247a194c618f6ea97a0b42a25"],["/archives/page/2/index.html","d82b26c71e286ab5b59cf01281406e00"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","60c5c5b98a728e66dffce725271783a7"],["/categories/index.html","3da40ef71d564d541538e720bb2adbfc"],["/categories/つぶやき/index.html","3c499815073aa61e8b4d5ec6d5cb238e"],["/categories/インターネット/index.html","78b95ec4f0f28b7b515a1914798f0b2b"],["/categories/中国に関する新聞記事/index.html","f38992ec938cdddf597524367f4e98d4"],["/categories/労働者保護法律/index.html","f5b2196bc97a5f06278fded727631453"],["/categories/日本のIT教育/index.html","de221fe524978abc0ce63d9b24717594"],["/categories/日本のIT現場/index.html","35880510538210fba557146fccc49db8"],["/categories/日本のビジネスマーナ/index.html","010eff20cceec478f447ef56475ba615"],["/categories/日本の国内の人権状況/index.html","45f0357feda5d74837a37cdc5b823a24"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","e63a37969f6406e27e0fe8a0c15babc3"],["/categories/食べ物文化/index.html","0f0fb3e6c70feb04ca6cbd59dd3018f7"],["/css/main.css","a26c2cd55cd846cd5d49a32f3e299030"],["/games/index.html","1b5a91f665374faea3fce23d6e6a358f"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","bbc1969b804df4e814820c3c2e88b093"],["/js/src/affix.js","7aea101d966f6e681ec51ba9164ca85c"],["/js/src/algolia-search.js","1012faaf8173a1f2143060dc95d396a8"],["/js/src/bootstrap.js","08988e1e78df9a9ad326aa7fa4bbd10c"],["/js/src/china.js","31d57487b06652e54295acdc147f8d63"],["/js/src/echarts.min.js","215f2f51c29ccd7d7241f008eaea8d41"],["/js/src/exturl.js","26649f526ea978308f98b0e7cf57ab14"],["/js/src/footprint.js","e99e84f816977f5ec4471f7877bc1c02"],["/js/src/hook-duoshuo.js","c269fbdd484b195db819da047f32cc44"],["/js/src/instantclick.min.js","a252e13a9a880228b89dcb13c97703c9"],["/js/src/js.cookie.js","77a8786d377142d8e778bd84600cbb2a"],["/js/src/motion.js","0522fea7dbfc8a9d6cf77900ea530011"],["/js/src/post-details.js","1c65f1d4eefc13d6b1f16ac0f43d446d"],["/js/src/schemes/pisces.js","95e8747be3e7caa53b03583f2bcc2834"],["/js/src/scroll-cookie.js","5cb3bd30f1e722cfca98180d3c7ea8e7"],["/js/src/scrollspy.js","533ce8ced7c0917beb144429c669f276"],["/js/src/utils.js","3f419163761438a597eeff5f32f96794"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2c16861713eac3b8cb6e55f4c7f59666"],["/lib/Han/dist/han.js","cb204cc5e6e5d76f7a6b9d7c1f32d6ce"],["/lib/Han/dist/han.min.css","8bbee4aac9fa5f0686f19a18ac317a10"],["/lib/Han/dist/han.min.js","736bd5a6a5e9cc1bb3e591f8ca9bcc32"],["/lib/algolia-instant-search/instantsearch.min.css","aed12c757cee1b588d2457b8fb675128"],["/lib/algolia-instant-search/instantsearch.min.js","6845b8bbf9ec4e63144d6d63d3c6f2dd"],["/lib/canvas-nest/canvas-nest.min.js","698dbd351076ea9ac820553eaf36127c"],["/lib/canvas-ribbon/canvas-ribbon.js","e972f96a9e4c363a0448148cd2833ea8"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","3bcae49e021db97397bf177c0c0ea171"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","02981223e4e7544860e33844803c8ff7"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","edebfd7d274b8059981eff161cd1efae"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3e62f2596b66f2e9c7af62dd9973220d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f1bd8c9a8b375ac528c57e4ef7f4ed6d"],["/lib/fancybox/source/jquery.fancybox.css","c9e53f24c7c3d4341a31733a2ebe2484"],["/lib/fancybox/source/jquery.fancybox.js","8aa7f468ec6ca750b2f62f3e6006ff98"],["/lib/fancybox/source/jquery.fancybox.pack.js","f74ca359745f710c5d07e57eaa905b37"],["/lib/fastclick/README.html","76b75eba7bd80cda8ff979c8fedfcc64"],["/lib/fastclick/lib/fastclick.js","d81cbf330c68e67393046cc4e573b159"],["/lib/fastclick/lib/fastclick.min.js","81f67e6a50c64c881496d253447e133d"],["/lib/font-awesome/css/font-awesome.css","9766712dd431bdf7686e74c99365bf80"],["/lib/font-awesome/css/font-awesome.min.css","9766712dd431bdf7686e74c99365bf80"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","93dc187dcde146b68ee5847876031e23"],["/lib/jquery_lazyload/CONTRIBUTING.html","70edaa2d4170263c89a2ec2f8f2f16f5"],["/lib/jquery_lazyload/README.html","ad50adb5e31dc97997c707f870c0aa63"],["/lib/jquery_lazyload/jquery.lazyload.js","e6e242b9667f1893457badb11b1c95af"],["/lib/jquery_lazyload/jquery.scrollstop.js","a1b428b274631d36901bb691bb10e7f0"],["/lib/needsharebutton/font-embedded.css","28269677edcf3cda4dba42634b04de6d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","d81f9fdecce2bfc228cacca3e4c0d650"],["/lib/pace/pace-theme-barber-shop.min.css","b48bdc7402c69347433ddd79596fc763"],["/lib/pace/pace-theme-big-counter.min.css","cfb7a06eed75c072597c2303c9d0d185"],["/lib/pace/pace-theme-bounce.min.css","a2a1699cf24e03273caa2fe46ce8cebd"],["/lib/pace/pace-theme-center-atom.min.css","38a92d398240b8d3a3ce74b3292a1628"],["/lib/pace/pace-theme-center-circle.min.css","7d3eca24f6e60f23ce4bf9bc8c930df6"],["/lib/pace/pace-theme-center-radar.min.css","df09c63f9e0b3980b5f4ed60583710bb"],["/lib/pace/pace-theme-center-simple.min.css","9c7703194a381a0867f85ee64093ac27"],["/lib/pace/pace-theme-corner-indicator.min.css","8757c6e34e956081cfb4ced2994908a6"],["/lib/pace/pace-theme-fill-left.min.css","9227fb329b569e1611e8f116b5b6aa4e"],["/lib/pace/pace-theme-flash.min.css","5e31299b17b694bb03d894bd3d9daac3"],["/lib/pace/pace-theme-loading-bar.min.css","4bcc4e9890bf891a4ccf8eb2d42fb494"],["/lib/pace/pace-theme-mac-osx.min.css","42d73a4a6a8cc5eaeb8f39249fbedaf6"],["/lib/pace/pace-theme-minimal.min.css","84b9a7e4379f45339c414184b6c2875e"],["/lib/pace/pace.min.js","b34ddabd8f80f045cbe03d8e4d781cc9"],["/lib/three/canvas_lines.min.js","fb8bef6d80177accac9d81276ab99dcc"],["/lib/three/canvas_sphere.min.js","25e9d057145d488ad4baab942c4b233a"],["/lib/three/three-waves.min.js","b196021cd2489c7c3579068acb25be15"],["/lib/three/three.min.js","858b97991296e98af7b65d07d646c33d"],["/lib/ua-parser-js/dist/ua-parser.min.js","0aacd2d0b98f543147f0fe2b87b9640f"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5d5e7e648031d10f44a5cddd02eb9d47"],["/lib/velocity/velocity.js","1c95a6dc626a3c3ec6cacd7450f172ee"],["/lib/velocity/velocity.min.js","8d5ce4594851aeff2348ebc985123624"],["/lib/velocity/velocity.ui.js","666889d1ce1e283bd7c9c15ccb0448aa"],["/lib/velocity/velocity.ui.min.js","e31a17ea29ad1a00cb5a0e930d5c2526"],["/links/index.html","c5e4b97b15a4c6c7c34909845ce4bac8"],["/movies/index.html","bbd5374fc59629815ed124af27396970"],["/page/2/index.html","f05396749c7c6f7052950a1159e992cb"],["/photos/index.html","874705266a4e95ac68482cb625741582"],["/posts/191ddb73/index.html","aa8023cef4bbbd83807c4eff69cb7eb6"],["/posts/1a195976/index.html","0641454e95f6b33f313f01dc06fb66db"],["/posts/2fc77d95/index.html","40747e39358de07cfb60017022c599b3"],["/posts/2feacaf4/index.html","424b244357e632678a3b31f16fbdfdc7"],["/posts/37f2c331/index.html","4c8f3c5015e1cb1e5f3b4ad4826b7c79"],["/posts/385f0de9/index.html","640fcf12cb23ab02edb7e1e73e051a54"],["/posts/45e51894/index.html","cfa8bd2b834e237fd76cd1e551a88e43"],["/posts/4f1131af/index.html","5ec5835c10e3ddaea80c2b6b200dfd8c"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","233ab095e950e8facfb0dfcf0fbadf82"],["/posts/63556f52/index.html","0541f9a058df0059fa9d7d79696d3b06"],["/posts/6d49ceec/index.html","45a25ca32fb68d085667113e6833ebb9"],["/posts/6de7d9db/index.html","0665dcf0f4a0dc7e430abbc7098a7006"],["/posts/c311b112/index.html","252f04703b6e1a3699d5b3db1406561f"],["/posts/c620d4c2/index.html","f080e75675d8aba5ac84c12067fab721"],["/posts/f8073739/index.html","a42407fc89cf1a04bae3c36c660393cf"],["/posts/f97ef43b/index.html","8f7f0c41c1a2788b606f8bd6b755a099"],["/posts/fa84d5fc/index.html","fd26d6a11c25fa1e7efe2c9cb8b33b8f"],["/sw-register.js","1ff6e5315ba36fe98466419f0f701e6a"],["/tags/index.html","ba5dc5ebd8961bd4e98a67511a085f0f"],["/tags/つぶやき/index.html","2ea4fb64262cf989a2b44038093a0d76"],["/tags/インターネット/index.html","d1f1d57c9a160be9822f20868fa0352f"],["/tags/チョコレート/index.html","08b053210ac98736d19d590a74a4c6e9"],["/tags/中国に関する新聞記事/index.html","f5608455d2e605627ed1073c7f35da4d"],["/tags/乳製品/index.html","57f88963c14b85acf95aa91e734b0955"],["/tags/労働者保護法律/index.html","5ca148073da23f869227e04ad40162f2"],["/tags/日本のIT教育/index.html","a9db59e9723215172f03fa3d9434b414"],["/tags/日本のIT現場/index.html","a65c275d55eea25e7fa8c3acb4d03460"],["/tags/日本のビジネスマーナ/index.html","187f66a342877beb8a1c501ccc461bc9"],["/tags/日本の国内の人権状況/index.html","73f8de0357ae2412b5b8e7abc6c83217"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","fd664db4755c4af94c9c011ba8dda080"],["/tags/食べ物文化/index.html","18675dc9015570b4f12db674e33ce3c8"]];
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
