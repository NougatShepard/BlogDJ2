/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","3ee26501947a43e6b430b104be97e05d"],["/about/index.html","45ddbcaf2922bd6d3e01dd0b6fbd1e9e"],["/archives/2019/04/index.html","51787e4980fa5564603818b871dcb75b"],["/archives/2019/05/index.html","09d6426be0e8f9edc1bc592f52a804f6"],["/archives/2019/index.html","8e30b23e9d17d7412e3e52b366cdf058"],["/archives/index.html","630b5ac29533cdffb1a5031016afe041"],["/books/index.html","06ada2c7706ea366065f09c752d9bbad"],["/categories/index.html","987c8dbcfeb88369534044c81f141d2b"],["/categories/つぶやき/index.html","4e6733c59aaa7b05cd548bd702ae7284"],["/categories/インターネット/index.html","ea1374247bcf52ffc8a6cdbe1256aab1"],["/categories/食べ物文化/index.html","486b84ca5985f4ce79ed6677c8cf2b12"],["/css/main.css","67755f9f9c4e98cff23b831e6113e037"],["/games/index.html","306e9cfe1d0fa973b8616481792d6a39"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6fd43cf594656939e4fd20ae7072ea30"],["/js/src/affix.js","1897405f03af99868966e9178cbf7d10"],["/js/src/algolia-search.js","cbbd27f61ee5b7c31933ca542cb4427f"],["/js/src/bootstrap.js","fb4e72d4f989ef7d18047616a0a9093e"],["/js/src/china.js","2f48fe37cf93f98f9665d7049d32927d"],["/js/src/echarts.min.js","209d900eeff50cca1efef69796e2634a"],["/js/src/exturl.js","3f798064f81188c6fe19623af27ef769"],["/js/src/footprint.js","0dd6d914b43e035c2f82fa5a884e52c0"],["/js/src/hook-duoshuo.js","1e4c6c8fd5818f50cf81f75d6d90f74e"],["/js/src/instantclick.min.js","77f69f92eacfce7907af1a63596be8ed"],["/js/src/js.cookie.js","6fdcc73d16580b18c143156a4e435866"],["/js/src/motion.js","504fab26fc4d7e430be1bc4278ef408d"],["/js/src/post-details.js","a2686efd5cba42a6c356681fc64dbdfd"],["/js/src/schemes/pisces.js","8c2a03ab2db74f929fbb8d098987d0fa"],["/js/src/scroll-cookie.js","870ae5b296342859323486db249af4e6"],["/js/src/scrollspy.js","2a4397743606a6a71c5a9fc435f765f1"],["/js/src/utils.js","4b541a3124acdef062b390dcf830d79a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","900cba98ddc88c3be96735d6b29316eb"],["/lib/Han/dist/han.js","34c62f3788ddfcd4265c3a30099f5754"],["/lib/Han/dist/han.min.css","2ac1a5f99fc662f2e1ae6e55851ba8ae"],["/lib/Han/dist/han.min.js","d1479943f73fa005ec7a65e0a1441a0f"],["/lib/algolia-instant-search/instantsearch.min.css","b68915ae09d9b1be3f3fd7553b0f7e7c"],["/lib/algolia-instant-search/instantsearch.min.js","0b97946dcdb30e6823fb3e362090848e"],["/lib/canvas-nest/canvas-nest.min.js","d0f866d478ab3203046d3a5ffbfc831c"],["/lib/canvas-ribbon/canvas-ribbon.js","a4978f7c168b479e9e9033b056235870"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","36328702fadbad9a065c6743829194fc"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","37cf13e04a4a502b97245f044a0851f1"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","90f0850a2650d5dbdfcab8982da00040"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","82b63ce020f328547dc9a821fe596580"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","2429ae2fdf238b822976b9c7b6386413"],["/lib/fancybox/source/jquery.fancybox.css","baf455b183397052ada97118c3c13cd5"],["/lib/fancybox/source/jquery.fancybox.js","d74903cedba003a5ecf6fe1b50bf244e"],["/lib/fancybox/source/jquery.fancybox.pack.js","29a1d449a5105c5a3bec581098761485"],["/lib/fastclick/README.html","e7d1c825c95bb4f9bbf208e1b17a71ee"],["/lib/fastclick/lib/fastclick.js","058b50618e9e552757a4b10dab487467"],["/lib/fastclick/lib/fastclick.min.js","9b8d337135a7b6781309b2692f08717e"],["/lib/font-awesome/css/font-awesome.css","52a11f64e39ad80f0f8c29e559c35da4"],["/lib/font-awesome/css/font-awesome.min.css","52a11f64e39ad80f0f8c29e559c35da4"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","36325568aa88e2836882bd4988463929"],["/lib/jquery_lazyload/CONTRIBUTING.html","51916bbfc6dc2c9236bbd279b0010c44"],["/lib/jquery_lazyload/README.html","0e1d731c03f6df361aa305274df8da13"],["/lib/jquery_lazyload/jquery.lazyload.js","f717e8f3f99e162870461d034cff3b17"],["/lib/jquery_lazyload/jquery.scrollstop.js","f7ac75338db21d3353f88674165b6cd2"],["/lib/needsharebutton/font-embedded.css","51775e17d3ce2c053781bad4be62b663"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","c87dbbcc57a9b38dbfabf8f2b2b9a4e5"],["/lib/pace/pace-theme-barber-shop.min.css","e2a4459a786c00d720d28d0cb107a151"],["/lib/pace/pace-theme-big-counter.min.css","380bf0b4d00e90637e8505f42b6902b0"],["/lib/pace/pace-theme-bounce.min.css","47b73be7b74d5cce225a2d7c39bbdf36"],["/lib/pace/pace-theme-center-atom.min.css","9456006269af4c80888fffa93e6d71a0"],["/lib/pace/pace-theme-center-circle.min.css","c4aa986c0fd6d17ab4f3fea0756ed911"],["/lib/pace/pace-theme-center-radar.min.css","9b04e6223633de1ec105b6f98e67f4a5"],["/lib/pace/pace-theme-center-simple.min.css","77fac402b69e9889e5ab6159c0eeeea1"],["/lib/pace/pace-theme-corner-indicator.min.css","99429a9d14a7f0e667700f263acb79ef"],["/lib/pace/pace-theme-fill-left.min.css","ec870b6f9e68cadfeb269c11c84b912c"],["/lib/pace/pace-theme-flash.min.css","c425c37e428082c705ec663a06e6adc3"],["/lib/pace/pace-theme-loading-bar.min.css","5fb664bdc2c3fab98e69ea72e62f7ba8"],["/lib/pace/pace-theme-mac-osx.min.css","d9d4c420eb6dffde8858a0df148215b4"],["/lib/pace/pace-theme-minimal.min.css","6d0e9b58443e9ffa4ce3dcfb53351ab0"],["/lib/pace/pace.min.js","0ec229ca1b98e6f5fc8fe3e215388408"],["/lib/three/canvas_lines.min.js","c32d7ef553c3c7122ac9b0841c077cda"],["/lib/three/canvas_sphere.min.js","40c3ec64481cbc94cdde9af5f3c96a20"],["/lib/three/three-waves.min.js","89d584c75a133e3a63a0f99cbbce9c6c"],["/lib/three/three.min.js","0b886e228310199222c7e12101392a97"],["/lib/ua-parser-js/dist/ua-parser.min.js","446a0e4e140e96fe28fc56df041d56fe"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4d19847eeea54a09223b366a2627d3ab"],["/lib/velocity/velocity.js","ffb663fc669173084e4d22bc6520e327"],["/lib/velocity/velocity.min.js","fe1c8471586cad5ac1a34c8b05a42322"],["/lib/velocity/velocity.ui.js","50d89aa6ed274d79f4c6a88b841a002d"],["/lib/velocity/velocity.ui.min.js","4eb598e087f3c2c7cf2e192dd7964609"],["/links/index.html","278fe2ce9cbab1a61d994d2ac9066cec"],["/movies/index.html","ee8b7385db154a8ede94461362d9cd1d"],["/photos/index.html","9859f7e4cd9e85be10d8f706e6cfec8c"],["/posts/191ddb73/index.html","c4b91de6f97514470dcc06d95e60dc8f"],["/posts/2fc77d95/index.html","56e4b5feea5ae7bdd1d6e3e66666d959"],["/posts/4f1131af/index.html","639a96a5dbe448533eae457a94091bb1"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","5842a0a2b5374167dbb3fe7fe1905f98"],["/posts/6de7d9db/index.html","f599ac97485cdd0ca7df578376dded3c"],["/posts/c311b112/index.html","ee546640879385c86963e4b1e06c0d48"],["/posts/f8073739/index.html","f1a41c172698f6faabb57e95e16cbe6a"],["/sw-register.js","961189badc960a2563ad7011bcbf58eb"],["/tags/index.html","ec34f87f36dba7207e764bc75b1c34ad"],["/tags/つぶやき/index.html","bcc7ad1c4040740066dfe26b89c7da4f"],["/tags/インターネット/index.html","9dfc54e570e068a9e61343bedc7ece54"],["/tags/チョコレート/index.html","306705bf195a3c67d59bd91f73a5f2e2"],["/tags/乳製品/index.html","7c2619b0580859d67bad4c3febbaddb0"],["/tags/食べ物文化/index.html","b54fae0146e809a5cbfb851491eb2516"]];
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
