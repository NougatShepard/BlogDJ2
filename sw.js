/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","7d9d2efbab1d47be5c6c2d70308b2481"],["/about/index.html","c42f93f4dd849801dcabd6e191795e6b"],["/archives/2019/04/index.html","fc679c72c5e4278f863957233f526b47"],["/archives/2019/05/index.html","ac53a8dd630bb9885babbbe8268840cf"],["/archives/2019/index.html","c7f77932c83f1aebce2576b030ba28ca"],["/archives/index.html","b7a6b180c8d8ed5b6bcd0cf6d60b02b7"],["/books/index.html","ef12b5f7a50457e237eadd76a538d7ac"],["/categories/index.html","db9c28f30cd647c32b6b495cc57e3dc5"],["/categories/つぶやき/index.html","eec5ebfa807eba736c31b247cb06625b"],["/categories/インターネット/index.html","eb7bcffe00c3fd3ca99ce0f61dfe6a6e"],["/categories/食べ物文化/index.html","1c7f882f758bcd0295d9d41b6b45a128"],["/css/main.css","6ccc4b6b1aa6dfd38f4d47aaebcdd6d6"],["/games/index.html","6c72a99ca0fd500114d0580ef5d04c7a"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","993b20fbacb2cb91f3bf9f5b1a2f8e48"],["/js/src/affix.js","ed717832b2c1b773af67d639a9afd909"],["/js/src/algolia-search.js","cf69a86156bce7236069989076475e80"],["/js/src/bootstrap.js","541a798e1243a75129fa78fc0076bd5e"],["/js/src/china.js","c14117f9e99564ebaaadd0d9e12479f9"],["/js/src/echarts.min.js","f7a0e9a050a649590c930199930045bf"],["/js/src/exturl.js","fcb283e895bdb68e6dc18689933a9ba4"],["/js/src/footprint.js","bf72ed178cf5a2aa6759288b59b8a535"],["/js/src/hook-duoshuo.js","93d0d6b1b1a81fc8671afc895e700d62"],["/js/src/instantclick.min.js","08cbd754b90e8a67943d29e7a9b53f05"],["/js/src/js.cookie.js","d2cd1538daf9129f4431e809691d064a"],["/js/src/motion.js","c3a593574f12589bdbf450a634c5cf05"],["/js/src/post-details.js","77c45e2adf375d41da287048699265ab"],["/js/src/schemes/pisces.js","e7960f1910a2cdb79bbd5d1cf69310b4"],["/js/src/scroll-cookie.js","6b9b56bd7ea57549215471b5233b1695"],["/js/src/scrollspy.js","6c8773ce0db1e75ce5f04393518ce534"],["/js/src/utils.js","87f9eca70b7f58dda0fecf01dd584775"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","d79166747d987e3d6c602c74db08b345"],["/lib/Han/dist/han.js","b430339066abe8338a7f3e01d31ea360"],["/lib/Han/dist/han.min.css","d8ddb4e7fe294b0ad6f6abb9786f3ad2"],["/lib/Han/dist/han.min.js","6815a4e15582b0e26c76640fe0cef880"],["/lib/algolia-instant-search/instantsearch.min.css","ff10df60843a860d5f8056f9bcc521d4"],["/lib/algolia-instant-search/instantsearch.min.js","ee8e26d6b7106143f763c6f2b4c741af"],["/lib/canvas-nest/canvas-nest.min.js","89eb94e35652de672d2b100ec6ac59a3"],["/lib/canvas-ribbon/canvas-ribbon.js","2cefc0510a445a6612069b966179e66f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a8066b9565f2a38abe991a708d5cd1ce"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","81463ea33803d3b62e8889a33fa5d9e8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ef1ef23b5bd9dca13e9b683c023820b1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b8acbf03fa2960e5fe0527cba3b7d671"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","429fa52eec078c3184225059637cd406"],["/lib/fancybox/source/jquery.fancybox.css","4804b8634d92a00ef63feaaffcf6b94d"],["/lib/fancybox/source/jquery.fancybox.js","cba752f5cb38ed8cf2e505f7f9634e4e"],["/lib/fancybox/source/jquery.fancybox.pack.js","d1d2fe785e3fdf1add6384c55f743f38"],["/lib/fastclick/README.html","dd363b3e688b8ae12a4bb2623fbb13ba"],["/lib/fastclick/lib/fastclick.js","54ac0474a8658a37a5f94700acdd7ad4"],["/lib/fastclick/lib/fastclick.min.js","41eb3a460e27a9028714772ea4fa1970"],["/lib/font-awesome/css/font-awesome.css","870b9497f20c920b886bfffd35119dc0"],["/lib/font-awesome/css/font-awesome.min.css","870b9497f20c920b886bfffd35119dc0"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","d000c920c9616755610dd3045433e3fe"],["/lib/jquery_lazyload/CONTRIBUTING.html","7ea83432de461cde0c1de1e62f588ac1"],["/lib/jquery_lazyload/README.html","a3f16943841e8ecbd0e5c79f07e0fd84"],["/lib/jquery_lazyload/jquery.lazyload.js","62c29ace611a2c4781fdb78d6c243a1d"],["/lib/jquery_lazyload/jquery.scrollstop.js","dae57dcf0105c3988362e74b10d4f6d9"],["/lib/needsharebutton/font-embedded.css","cec7890fccd65bcbb0458d9cbe2b452c"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","f9217930a402995007dfe21178d587a3"],["/lib/pace/pace-theme-barber-shop.min.css","90e1fcb06d1856ce1dd48eee4e54c02f"],["/lib/pace/pace-theme-big-counter.min.css","55aa6e76f31756764b918e41de71353d"],["/lib/pace/pace-theme-bounce.min.css","9b253df611c8e3e0fab4faab39e6ae59"],["/lib/pace/pace-theme-center-atom.min.css","e57f648ef8b632257816718ec4f5ae5c"],["/lib/pace/pace-theme-center-circle.min.css","5273efd77205bf4ede622e4567552f9c"],["/lib/pace/pace-theme-center-radar.min.css","c87264410940888ef168ecb16ffc7933"],["/lib/pace/pace-theme-center-simple.min.css","74ecba79a3bfcb78c4c5e36948cc5636"],["/lib/pace/pace-theme-corner-indicator.min.css","012f1ff8ccb965fffbb5b1e1cf8c9f16"],["/lib/pace/pace-theme-fill-left.min.css","b378ced56bac8e788be05f79924e2067"],["/lib/pace/pace-theme-flash.min.css","752b860baadce9a5429e916b0aeb6779"],["/lib/pace/pace-theme-loading-bar.min.css","dadfa55ea5c15814e3f1b0190165539f"],["/lib/pace/pace-theme-mac-osx.min.css","e767330747f4eb0902fb3b4bef624a04"],["/lib/pace/pace-theme-minimal.min.css","0b75c7a3e976cd3d08a1668757f72a11"],["/lib/pace/pace.min.js","a576750d81c025fc4d510d97d4b6a126"],["/lib/three/canvas_lines.min.js","f9a7575e5ee7cdd7082c975e1543e1ab"],["/lib/three/canvas_sphere.min.js","fd476463a545645f3bcd59f1795b6cf7"],["/lib/three/three-waves.min.js","9519635c5e4085a6cea934b36a4ef2b6"],["/lib/three/three.min.js","778d6ff7514ab45f4c4a72b1fe9a2aec"],["/lib/ua-parser-js/dist/ua-parser.min.js","a26a2ba27cc7337e04d10ed0772c1ef3"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ca2b63853d8db3bcded520ca48c598e3"],["/lib/velocity/velocity.js","f49d5ac89888980aa318199b829e92ec"],["/lib/velocity/velocity.min.js","4afccc571ae6e611bed6127c23a9f628"],["/lib/velocity/velocity.ui.js","536b298606c0827fc67232f9980822c2"],["/lib/velocity/velocity.ui.min.js","94ae07a8d46d7c0ca57ea714d14c645e"],["/links/index.html","26950d6164cb5819591bbbc8b8947c48"],["/movies/index.html","c1c016ab8e2f1933c39a3f5ea92ab9d6"],["/photos/index.html","c453fa63b86bc3faaf76d470bb48c4c8"],["/posts/191ddb73/index.html","7ccb350c311691cf84717df22c7b1e7c"],["/posts/2fc77d95/index.html","408656d222aa3b1bd8278a6811087916"],["/posts/4f1131af/index.html","6472ff8a5cdb545e436fedf7e29df200"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","275e377497001cd4ad6f1c9c9aa0828c"],["/posts/6de7d9db/index.html","c7f392d42899c57ff98db18002daa58e"],["/posts/c311b112/index.html","46604e0103d06a39da15ab665efb49b7"],["/posts/f8073739/index.html","b2b7a1dc9f68a6bafe2f2bbe302c52eb"],["/sw-register.js","a2b7bb5d9d3d9f7cba0fc5fe773712ad"],["/tags/index.html","1d1bb90beda33aadfc99902cb3b97f4e"],["/tags/つぶやき/index.html","4a2491552e4e606c100ad4717b7fb51f"],["/tags/インターネット/index.html","8e8581e854a5a894f0ccf07a2deb6e2f"],["/tags/チョコレート/index.html","d043b1f93c4bdb315de0e9f2a81fd3b6"],["/tags/乳製品/index.html","a2cddba977746e343bb5bd00ac58e802"],["/tags/食べ物文化/index.html","38ef80c2431f741514be88c1522f93b8"]];
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
