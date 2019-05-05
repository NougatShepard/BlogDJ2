/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","0092ef013281676e14b05b67d1e64ff3"],["/about/index.html","1eeb2217318ab9931c1e8baaff662bb0"],["/archives/2019/04/index.html","20f17eece228e3a3386fe3ee7b2031be"],["/archives/2019/05/index.html","7d7379a2ad03338ffcc05f0c77f7944b"],["/archives/2019/index.html","b13f75c540c7f9be23f60ef84a85b80f"],["/archives/index.html","17e2dfc6ae01b835d1de1d9f1dd14b8f"],["/books/index.html","67647107305138da101f96425858b1fb"],["/categories/index.html","a1a36b6e623550756146a3dbe5763ffe"],["/categories/つぶやき/index.html","4575c20c6182ff0e29c94d6cc8090510"],["/categories/インターネット/index.html","eb923dff9fd07d1cef8731475bc4aa1f"],["/categories/食べ物文化/index.html","aff88041e79c87a28b6cb5b9e91ba077"],["/css/main.css","177ef12a0045290becf95e2311351463"],["/games/index.html","828aa2d326874468f94868115e1bafa0"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","9204d57f36f99fd3657dcc6bc7d6d4af"],["/js/src/affix.js","3c192a92d477025baadb8a9b32d1fd0f"],["/js/src/algolia-search.js","9896c04c61763fd2fedb919223c526c8"],["/js/src/bootstrap.js","8855beb9f7c1b42274553ad4a01f4148"],["/js/src/china.js","c8bca6ebca6761e4d0076251c46883e5"],["/js/src/echarts.min.js","439174d279872dc972f1f218eb7e525b"],["/js/src/exturl.js","d3766d28307016d7598a60a4f0eeaea3"],["/js/src/footprint.js","81345b3d6c99289593158d6d932723f7"],["/js/src/hook-duoshuo.js","d930b053c03e9e84bc318c0d718fb7fd"],["/js/src/instantclick.min.js","474488e5db233fd74d53f50ee71ab9e4"],["/js/src/js.cookie.js","f4af634a658666786dafe7a05c9e28c9"],["/js/src/motion.js","418fab956da53b5045ceef9c993cefc8"],["/js/src/post-details.js","4e9b095836878f01bab6d4c41582a7c2"],["/js/src/schemes/pisces.js","d690a48e27556aaf1628ff1ac24eb81f"],["/js/src/scroll-cookie.js","aec5dc17144fba8f5d622720cb53d58b"],["/js/src/scrollspy.js","96eef2aea7ddec7cc84b7e5dad70da3d"],["/js/src/utils.js","8fcf4b2a9968d1878a1fb7b32445004f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","51997ef7b9fef94663bc5d1f1dc570ce"],["/lib/Han/dist/han.js","6c1bfcb0da8b7cb6ac747f108a338f01"],["/lib/Han/dist/han.min.css","b4351edb586e5af081702074d445bd37"],["/lib/Han/dist/han.min.js","f3e19d1a67a89038ebc0f8449ed023f8"],["/lib/algolia-instant-search/instantsearch.min.css","11ada800d16f7ddba9fd98d79015a0dc"],["/lib/algolia-instant-search/instantsearch.min.js","1cc2cae1eebcc1fc48d95f8a05a77dcf"],["/lib/canvas-nest/canvas-nest.min.js","5c5664061d77b04f62c13f80d34f3c1f"],["/lib/canvas-ribbon/canvas-ribbon.js","57e957220b1da2805ebb3fd46b422729"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0dfe6672e38008dca2398218c3c245b9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","dbc4237476f797b543b624738f4ad500"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","85097816681cb3fccd5b0f329fbd6670"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b29b0fbf49bf2aec1410ab9b5a7a8612"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5dc8232320eaee35efefeedd33b74a0d"],["/lib/fancybox/source/jquery.fancybox.css","568b6d45f4f4b48c03637e5ebd5f48e5"],["/lib/fancybox/source/jquery.fancybox.js","e597c0fca7696f8268b6a92de6fa8110"],["/lib/fancybox/source/jquery.fancybox.pack.js","7823170210b1d1e10e2caf2f67c211c5"],["/lib/fastclick/README.html","172acc8810180b294a066d73c73058ce"],["/lib/fastclick/lib/fastclick.js","fb3577d59aa2d96b9e262538c86b1f67"],["/lib/fastclick/lib/fastclick.min.js","70d5fb763a654460dbe8d970822b55db"],["/lib/font-awesome/css/font-awesome.css","f52f864dd6a03b0e88c657c30c8d8b78"],["/lib/font-awesome/css/font-awesome.min.css","f52f864dd6a03b0e88c657c30c8d8b78"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","2cdf26d06e6ff39cc2eec1917e9f6ac8"],["/lib/jquery_lazyload/CONTRIBUTING.html","cc53355619ff41778fcf2fabb5c59e83"],["/lib/jquery_lazyload/README.html","28f17bb788a51d14d3fe0de0c2b5d8b7"],["/lib/jquery_lazyload/jquery.lazyload.js","038955ca2629ca4d8121753869418de9"],["/lib/jquery_lazyload/jquery.scrollstop.js","a416275342a8b2749587695065b77780"],["/lib/needsharebutton/font-embedded.css","2b3ff71d997b47bfe9fcebdab2ee121a"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","e273a74b32d6f67c194151cee2a5ae28"],["/lib/pace/pace-theme-barber-shop.min.css","cc47352a664b46e2676fb55a2ead797a"],["/lib/pace/pace-theme-big-counter.min.css","847c2247c827ce6b68a05e45cf6e5a0e"],["/lib/pace/pace-theme-bounce.min.css","efb1d6e401a084ae93aeedb2d5d7f6bb"],["/lib/pace/pace-theme-center-atom.min.css","dd5681a505e609d29cbbad274f8c93d4"],["/lib/pace/pace-theme-center-circle.min.css","165192235c7635511842d42639cc0f42"],["/lib/pace/pace-theme-center-radar.min.css","65c6dcfd805efa50ff688e00379d5c98"],["/lib/pace/pace-theme-center-simple.min.css","618f07b58b12d7875f2be43293f269a0"],["/lib/pace/pace-theme-corner-indicator.min.css","ebbb0e985895574a121a872833af94f1"],["/lib/pace/pace-theme-fill-left.min.css","e059e5343d0697c99339eea8bcf9424c"],["/lib/pace/pace-theme-flash.min.css","25b62c8d93c35b1ffc511b09245477fa"],["/lib/pace/pace-theme-loading-bar.min.css","21511c024f2b5884bc768f369d5ff58a"],["/lib/pace/pace-theme-mac-osx.min.css","89bb41ff632af818589b8a968215157b"],["/lib/pace/pace-theme-minimal.min.css","7efa0d3b0cbf506e7768545af292230b"],["/lib/pace/pace.min.js","d734c70552ff5506b1defc579284ed55"],["/lib/three/canvas_lines.min.js","fc37f27596bbeedeab592a97756428bb"],["/lib/three/canvas_sphere.min.js","ad27f3aac7f1bb5046bed07a286dcd15"],["/lib/three/three-waves.min.js","9d5575da30f2d7c0692f822897cec604"],["/lib/three/three.min.js","57ceb8d18fd3b4478bd3f09da43e9fb2"],["/lib/ua-parser-js/dist/ua-parser.min.js","93ea1db139ec5aa58ab94e2b67587c94"],["/lib/ua-parser-js/dist/ua-parser.pack.js","2667949169b0c08f521797f47e573dcb"],["/lib/velocity/velocity.js","f63308e6a25a4bd2bfdc6cfff9eba32d"],["/lib/velocity/velocity.min.js","a6b354489fc2684030514e4a6b4aede8"],["/lib/velocity/velocity.ui.js","8222a2b7e148b7f52a5325a76e1fc667"],["/lib/velocity/velocity.ui.min.js","122fb79be11a71ea3040b8a7bd69cc62"],["/links/index.html","9cbe4beaf39a40c0771cd59ea1d3bf07"],["/movies/index.html","3ad111784627a21ae1695294575726ba"],["/photos/index.html","08c20f991a72e47a8e222aa32b4d1f4d"],["/posts/191ddb73/index.html","f9400556c21ed3b76ecf678e93540d6d"],["/posts/2fc77d95/index.html","e768ce037ff6b2de0f8ee978f6a72460"],["/posts/4f1131af/index.html","9e886bd1025c31b61d12c8e465ab4159"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","36def243e2fe4ded82f44da91c776279"],["/posts/6de7d9db/index.html","f60402d85fd06e819b54070e42116d6b"],["/posts/c311b112/index.html","ced0a262d072368e3564e178d9f04c07"],["/posts/f8073739/index.html","5684f8e0ea8576b1fc0eea614edf4741"],["/posts/f97ef43b/index.html","4da4afb837444cf87538231a4566d859"],["/sw-register.js","e720ea12ca0021329203e3583a2b1b83"],["/tags/index.html","4af22067b40fa53cc9e6ece701810496"],["/tags/つぶやき/index.html","e0ac9bc42e965a91a92fefff60c5fa9a"],["/tags/インターネット/index.html","684b0117600e74085f8fd06967dce74f"],["/tags/チョコレート/index.html","3700ede0dbf5b0602ddcc5e9d9bc1b37"],["/tags/乳製品/index.html","92840eae3cbb6ca9b582d03e897d746e"],["/tags/食べ物文化/index.html","3caa144309f646e843484626a4c9e50a"]];
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
