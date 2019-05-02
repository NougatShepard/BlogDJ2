/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","b43f58d5ff34fc29fb7aff757552e206"],["/about/index.html","ec5a41525bac1eefa0971f3bc3259b84"],["/archives/2019/04/index.html","645f9ada64bd2fb215d50f79955e8ded"],["/archives/2019/05/index.html","5bb093abc06cd0ddb29344447637a60b"],["/archives/2019/index.html","d200679329e6b82bbe78dde36e0055eb"],["/archives/index.html","6178cda8e6a05d3410eec33aa496ca1b"],["/books/index.html","1233b25de5cc6b860020c08d08db3fa7"],["/categories/index.html","2d4f377c4000ff30c3532cb9b050ed43"],["/categories/つぶやき/index.html","608a0218a710b470318f440aa9f58a4c"],["/categories/インターネット/index.html","c8ae82b9234603a2d903245c5c471bd9"],["/categories/食べ物文化/index.html","62f32eb154184187b6f5c6603bd44e8c"],["/css/main.css","2416dd2a97d906ec25422ed74255a530"],["/games/index.html","7e6f364e144068eced37272b8227ff8c"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c0bb803e0ba841d61e56dfd1f182ac20"],["/js/src/affix.js","b99de17c5dc4dc21d866841fe905eca8"],["/js/src/algolia-search.js","9138cdb9ffeabb233b086d4a0d9042c1"],["/js/src/bootstrap.js","12b6220734a9a2cf1b8adfae36150a60"],["/js/src/china.js","7aa5974c43dc098c99d265e2fd040c16"],["/js/src/echarts.min.js","0a0769d55e883b66de8e5b80b5682fef"],["/js/src/exturl.js","45c1a92e34005eb37fa8c141fbd75966"],["/js/src/footprint.js","2e4e152201a85a9fa258837286340a0e"],["/js/src/hook-duoshuo.js","3dda0a9e0d1303be0395c0a88593c7cd"],["/js/src/instantclick.min.js","eee40c024c379722c0b7b5e3517bf3e2"],["/js/src/js.cookie.js","db25dcefbede76d16b297eb45f027d84"],["/js/src/motion.js","b25e7e80242f70d88121538c8c8eb3ea"],["/js/src/post-details.js","b649ee06bb963112f5662a26e3801ee7"],["/js/src/schemes/pisces.js","151a9c1eaaa059a54802e6e00ae6033f"],["/js/src/scroll-cookie.js","589d5b37ecf8027da64c83ba9be82da6"],["/js/src/scrollspy.js","28dc74568573b92b06680848dc90814a"],["/js/src/utils.js","f011fece7979726db0fa6e59e29df2ad"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cd83648b6d96516f17f64561c265ed3a"],["/lib/Han/dist/han.js","2e6d3968385b197c682b8e65aa9a5681"],["/lib/Han/dist/han.min.css","6c76855f9775bbae4706e90f084b4204"],["/lib/Han/dist/han.min.js","4346fbc8122e1fee687fa05ce35f3505"],["/lib/algolia-instant-search/instantsearch.min.css","75c6bd454e8f03faa8ef7aa307eb1647"],["/lib/algolia-instant-search/instantsearch.min.js","c49821574c8da4d4fa19c59ea80023ae"],["/lib/canvas-nest/canvas-nest.min.js","d7d1c59f13499b114d8ddb989c83dd25"],["/lib/canvas-ribbon/canvas-ribbon.js","922d4d13500cf651207efcf1c9e65942"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b8aee513060330249b550274d28d46e9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c2ea9da2093a1243d7b91b8a713041bd"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0b54100f6fbf4c207e3dd1839359f730"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d581e90a59269242d02aec1a3ca3a4de"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","91604f5ba2eb20db0e6d9e8026dd261d"],["/lib/fancybox/source/jquery.fancybox.css","69d1b757947d8f1144086e84c927c17d"],["/lib/fancybox/source/jquery.fancybox.js","184d04792027ca93aa9d8c3623e71aed"],["/lib/fancybox/source/jquery.fancybox.pack.js","443f18b77d9cbb225f790110bf8443a9"],["/lib/fastclick/README.html","cda38654abc23634d438f12709aadcba"],["/lib/fastclick/lib/fastclick.js","8f51ad325b1462e28ea95007ed4bb8d6"],["/lib/fastclick/lib/fastclick.min.js","b5fdfa2b3cbc91e5c5b863d8404f17be"],["/lib/font-awesome/css/font-awesome.css","5d54a71d403ccf012388cbc8ab6bcaa1"],["/lib/font-awesome/css/font-awesome.min.css","5d54a71d403ccf012388cbc8ab6bcaa1"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","addc09bb4e69a77e89b0a33546d186a3"],["/lib/jquery_lazyload/CONTRIBUTING.html","4147e416265e81d1891f8aad8197de4a"],["/lib/jquery_lazyload/README.html","a56ce5e0d6d079f52bb928c7a117c42f"],["/lib/jquery_lazyload/jquery.lazyload.js","9fb6392122520994d1f9f0e6517f0e03"],["/lib/jquery_lazyload/jquery.scrollstop.js","7c900f39894a51d85c7950b7873516de"],["/lib/needsharebutton/font-embedded.css","87666589aca72edba2ddc8ed6accdc4d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","7f2e6755fdb66a47f476165bcb1ef6c8"],["/lib/pace/pace-theme-barber-shop.min.css","65f1acb1ee3ba02719656a6e5ef878c7"],["/lib/pace/pace-theme-big-counter.min.css","baa5f0d361a000cf901d1c70ae2cf206"],["/lib/pace/pace-theme-bounce.min.css","63e1a07b52cf08ad80d1d0221fab195a"],["/lib/pace/pace-theme-center-atom.min.css","06a9dd3efc6b82b5e1bc201d7e34799d"],["/lib/pace/pace-theme-center-circle.min.css","c8cc27e12c9515e0266f3f1452f5452b"],["/lib/pace/pace-theme-center-radar.min.css","e11b3638dacfbb5a46b95b92941fe3c4"],["/lib/pace/pace-theme-center-simple.min.css","60c69a981c327bef4c2ec81107807ab3"],["/lib/pace/pace-theme-corner-indicator.min.css","cd6db7a58a0cb4feda2112e7e464fc13"],["/lib/pace/pace-theme-fill-left.min.css","728bc3506c3bd431ecf60cb1e4b0955e"],["/lib/pace/pace-theme-flash.min.css","27a14a2c02afe053dd769a0f05a0b9fc"],["/lib/pace/pace-theme-loading-bar.min.css","b6892d186c5a1eaec481af0255cd6cf1"],["/lib/pace/pace-theme-mac-osx.min.css","a0c3ba1b7f62eaa90ee2f36f05bab4da"],["/lib/pace/pace-theme-minimal.min.css","06e61559a742f038d88db0a171c9c4cc"],["/lib/pace/pace.min.js","886467e67257454668921d81afac7b6d"],["/lib/three/canvas_lines.min.js","4f6fb5495a19a37b01aecf54a3a7cd0f"],["/lib/three/canvas_sphere.min.js","c50337c056864024549c01c622ace112"],["/lib/three/three-waves.min.js","89fa38c0807b414b1e6231b25b8ad100"],["/lib/three/three.min.js","3ac6021804393302e01b39b7c3065cde"],["/lib/ua-parser-js/dist/ua-parser.min.js","dbbde159029557ac9c3f3b0594706af8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","fad43b1e204609a9c456f1cd0b2d821c"],["/lib/velocity/velocity.js","02a0ace8eedc954f8c7073920533ff4c"],["/lib/velocity/velocity.min.js","5855c9c8e6fa4ef062bf6678188862cc"],["/lib/velocity/velocity.ui.js","84491d4cd06c2de59ee0378fa69ea0a8"],["/lib/velocity/velocity.ui.min.js","004fcc3e1768d5be2f0bcf22a590571d"],["/links/index.html","a62345e6f3564b6908d8bd80a499c5ac"],["/movies/index.html","d447f7b2628e084b15e73d76ed93e8c6"],["/photos/index.html","cee4080a312c13a89e28d8bf6fe15306"],["/posts/191ddb73/index.html","dc7d227a3ccbb2d86d6dae5913fee625"],["/posts/4f1131af/index.html","063c48e2511c9317e7bc6882d9c75969"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","05e30a87aa81aa044285c8d6a251b3ab"],["/posts/6de7d9db/index.html","f99bebc8508945d33e58a49ddf99fe02"],["/posts/c311b112/index.html","647fd9d909c3b80025f0a58a88d8a0ab"],["/posts/f8073739/index.html","9635aed207a1965034b5a0674c82a99b"],["/sw-register.js","707a4f0850ed648e2089c920d91aa22e"],["/tags/index.html","f6a9058dd596a2befac1357e4d17ec02"],["/tags/つぶやき/index.html","e8c54a1c65a8497056e69b4f81345f79"],["/tags/インターネット/index.html","34dc650ff97b5b94632e4496abe5235e"],["/tags/チョコレート/index.html","e01555efa024ca2aa54628be050740bd"],["/tags/乳製品/index.html","62a7058d1ff9abff45340ce35f8ec8d6"],["/tags/食べ物文化/index.html","be0e289183e7a6521a2b4b68c7051b58"]];
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
