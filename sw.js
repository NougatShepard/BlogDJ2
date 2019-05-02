/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","45d642295a9a86e624caa95080994263"],["/about/index.html","50f2c07aa349705392ddb04a5574977e"],["/archives/2019/04/index.html","4f4c831329e5294870a75a02cfd4b468"],["/archives/2019/05/index.html","590fc04cf483a320e6eae71410d2676f"],["/archives/2019/index.html","72528ef63d388c56f716b07dd2b4a6e2"],["/archives/index.html","d660a835e7b5863189bc009f495dfe91"],["/books/index.html","836a2bc870a7d1bb5ca844b8efe9c4ea"],["/categories/index.html","b143f04043467c7fdbeae604c87a5a5e"],["/categories/つぶやき/index.html","b898542d66f43dc0203fb28db8cf4dd5"],["/categories/インターネット/index.html","b97b1e1e38bd77e91a782d1d9cb162e0"],["/categories/食べ物文化/index.html","c461d537180c2ed70a34199f06a73671"],["/css/main.css","b2fb7a517f5984bd7336faca296e9755"],["/games/index.html","f1f362753808f238785e384d3dcb3d88"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","324e9bddaf882c5076a32919549a7265"],["/js/src/affix.js","ba2d94cbb4cb392d4522b97ae4ce7801"],["/js/src/algolia-search.js","ea3a1f02caf891a384828fd7fa6bfd87"],["/js/src/bootstrap.js","9a0fedbed5ba05cbaa4a420828e88d38"],["/js/src/china.js","6cb488eaa896535a8e5799a77376f6a7"],["/js/src/echarts.min.js","7983c39a9820cd6d6dc2ffb03c0db285"],["/js/src/exturl.js","a5e687d874ec11c631c0a7419e101ebc"],["/js/src/footprint.js","5514e8ade9a7c329722dad1e5f741059"],["/js/src/hook-duoshuo.js","6d66bce51f325b720174c27aeff49915"],["/js/src/instantclick.min.js","0babc5bf04e7830c227c29151da8e503"],["/js/src/js.cookie.js","c28779795aeebeb356b3527cc43c1172"],["/js/src/motion.js","0a9c1cb51954fa51abbd49e876415fac"],["/js/src/post-details.js","ba4fc1b54d92a388a563733e234674e8"],["/js/src/schemes/pisces.js","7c4e79a103d97b77a8d0377f61dee87c"],["/js/src/scroll-cookie.js","e5a566c809810667741fd3055ea03345"],["/js/src/scrollspy.js","11542de22011994794e302ab5380b82c"],["/js/src/utils.js","33907e9b23c02f7d9239435a37a87aa1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","6798aefb108ff8d54b126557814df044"],["/lib/Han/dist/han.js","a017dc80ca750d2058ba471bff9bd7dc"],["/lib/Han/dist/han.min.css","03a60c087fa660172aaf38ca95c6d12b"],["/lib/Han/dist/han.min.js","cfa16198f622d071a05346eb0ddcd1e3"],["/lib/algolia-instant-search/instantsearch.min.css","a93c5f1de3b6f6e85e4dc006ca5c7928"],["/lib/algolia-instant-search/instantsearch.min.js","cb27373416976f73ec53d634193b92e0"],["/lib/canvas-nest/canvas-nest.min.js","bdb7d248c5edc1a5d81419a42ad47760"],["/lib/canvas-ribbon/canvas-ribbon.js","364a32ef5e05a2d9db40101d08106fe9"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","bf3f37f19ffb967104bc5831c785f1f5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","17b2d80498338e41f510c130a9ab3807"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","cca03ba1b9f6437fc3ad2463f47b9b97"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","73dca937bcac845e34ca6708762e7a8a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","34aacf79987d2112669f2bcd39e605ed"],["/lib/fancybox/source/jquery.fancybox.css","45cd40777fac22b08ab606ec73e4d422"],["/lib/fancybox/source/jquery.fancybox.js","131fd477c283fb2a6018233a58704cd4"],["/lib/fancybox/source/jquery.fancybox.pack.js","36b159fb327074b805295e0b769519e2"],["/lib/fastclick/README.html","5db724bb02bdbffb8a126a5d9f674e7f"],["/lib/fastclick/lib/fastclick.js","815a24ce4a41ec9bba5ec78dab3a3769"],["/lib/fastclick/lib/fastclick.min.js","fd3e22afa76d99db9e10ff1c52d61173"],["/lib/font-awesome/css/font-awesome.css","4b5bd318d74df452736cebb19970f4af"],["/lib/font-awesome/css/font-awesome.min.css","4b5bd318d74df452736cebb19970f4af"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","f0ff874c6b5c3abd70c332ae0dfeb867"],["/lib/jquery_lazyload/CONTRIBUTING.html","12503fe0f6728015b6ce13f3613209ea"],["/lib/jquery_lazyload/README.html","06db162070b0fd31643d7715013f07a9"],["/lib/jquery_lazyload/jquery.lazyload.js","300b7aa944520d35df83fc3cf2afc7d0"],["/lib/jquery_lazyload/jquery.scrollstop.js","19403d9c94c381e29599f24692df904e"],["/lib/needsharebutton/font-embedded.css","ea7f12b3e9ebd416fade19bb898b80f1"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","e74b5698896dcedf68c7242224e857a3"],["/lib/pace/pace-theme-barber-shop.min.css","3223b4184570f5a0207134e90aad0074"],["/lib/pace/pace-theme-big-counter.min.css","bb83ff59e42ef5815d75075acbbc2100"],["/lib/pace/pace-theme-bounce.min.css","acb2d604aaca2ea0f6dd4f285a849b2f"],["/lib/pace/pace-theme-center-atom.min.css","21168e9e74a0c949f94246f169d446ce"],["/lib/pace/pace-theme-center-circle.min.css","783581c03d6ed04f1af1a2ad1ce72e02"],["/lib/pace/pace-theme-center-radar.min.css","38694b04f0dbd965d5feabd4be36393c"],["/lib/pace/pace-theme-center-simple.min.css","8971f88c85e96268ec9c8aca6a267764"],["/lib/pace/pace-theme-corner-indicator.min.css","480b3fd7859bade44db8419e3bfe0fdb"],["/lib/pace/pace-theme-fill-left.min.css","5fe03e5ee15ca56c24dc61ad2c8248dc"],["/lib/pace/pace-theme-flash.min.css","47d14b43cea335d6e95b02bcbda831eb"],["/lib/pace/pace-theme-loading-bar.min.css","6835c40954a7e255532fd888376783fe"],["/lib/pace/pace-theme-mac-osx.min.css","6a44f10b2c68cb0c561b841790ca2992"],["/lib/pace/pace-theme-minimal.min.css","c086e594a129008abf96c238c1eba611"],["/lib/pace/pace.min.js","ff7ae134df309b91af3aecf03f42ab9f"],["/lib/three/canvas_lines.min.js","4dd59f8a85b69d0881b45e22b24474eb"],["/lib/three/canvas_sphere.min.js","32f870a081b928fb16227acd4a9d5ffd"],["/lib/three/three-waves.min.js","5e5db1a5c71517e07f3f195d80be6917"],["/lib/three/three.min.js","fcab7037115bb87bba637b645b6eec79"],["/lib/ua-parser-js/dist/ua-parser.min.js","9f7daa9065008cdce38cc5ed6c5c0f77"],["/lib/ua-parser-js/dist/ua-parser.pack.js","82697011717c2f2b4efbc7145bdc0f86"],["/lib/velocity/velocity.js","f8e2a93ea97e05362114567b0a19aa01"],["/lib/velocity/velocity.min.js","e21c6d455e7dd3a159f7451f1cbc3512"],["/lib/velocity/velocity.ui.js","64fb47b325145841ae346cf7ddbbae6c"],["/lib/velocity/velocity.ui.min.js","eb3759c2fc17caeb750e3aaaa9e4fec4"],["/links/index.html","06a47297289c5d5f9ae0fc483a10a82a"],["/movies/index.html","ff3345fc6b98d7d8df22684e14daf240"],["/photos/index.html","011cb08c4ed746be094af63b84d77d06"],["/posts/191ddb73/index.html","3807217eed86e42092a80cab9ba89a01"],["/posts/4f1131af/index.html","d7f4e8b340f6544ef9f8748de56b152f"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","142042ed83d77d1bbe5cddd8b56fe005"],["/posts/6de7d9db/index.html","d0e4b2e97ebc912ba67958c5e295310a"],["/posts/c311b112/index.html","9c04c5a3e5b02e7f59a86e6811037e7c"],["/posts/f8073739/index.html","056b3ce0cd58104b82839f714b981160"],["/sw-register.js","2ce590d5950ec066c192304d5f9dd67d"],["/tags/index.html","c7f815ad71c99dc7ed795dd738e43fca"],["/tags/つぶやき/index.html","4f60fc26e2961ff5b685439653cbba6f"],["/tags/インターネット/index.html","a442e5ce3dc7f13ed8f5cb5b832eca52"],["/tags/チョコレート/index.html","0700ebd62eb384713169ca9777047a63"],["/tags/乳製品/index.html","dd687c8fe6788161f05bb0aecc957c7f"],["/tags/食べ物文化/index.html","f1d4438141aa030207c645e4c1bee953"]];
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
