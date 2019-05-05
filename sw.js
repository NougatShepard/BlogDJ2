/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","c69d8998119a776db5f0fd3dcfd5ad3f"],["/about/index.html","92eb1e9de38b5510ba519cf1ad85f107"],["/archives/2019/04/index.html","9a9eaee0c97da171d6636eef6140aa3b"],["/archives/2019/05/index.html","3042d094a8fcc4a15cc9080cf8bc478b"],["/archives/2019/index.html","5495986e4a34c031ba079423bb4f5197"],["/archives/index.html","a7af3bac47ed826afbef7afc36f7012f"],["/books/index.html","fe073196deb09021f9141d4463a2d81d"],["/categories/index.html","4038ad23b4f58bb6e6c70a615ed69045"],["/categories/つぶやき/index.html","a64428592cc60511a3b5cf6c08154158"],["/categories/インターネット/index.html","f37dd3493fb2c1fadd13e56f784f9d5c"],["/categories/食べ物文化/index.html","4df504efbb5ce6e4720ae2cf8e7b3a19"],["/css/main.css","744496244d89a8a8e0d8b8f5e1c0a31f"],["/games/index.html","8c63a805ae9d002beb452c12a9943c8b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","3dfe699beb567338c70946e3918353c9"],["/js/src/affix.js","6d4fb0ed96fafaf013b65d467d5abac0"],["/js/src/algolia-search.js","31e42aee14da752da4eb3ef9a8be2246"],["/js/src/bootstrap.js","6ea5acfe430f0c2960067ec55a152c76"],["/js/src/china.js","f231fe529edf6d5b70bc72a26eb47f1a"],["/js/src/echarts.min.js","cd6b6ded47f85762e928f69052930953"],["/js/src/exturl.js","32e355d7976ef94339baaa617d7ac725"],["/js/src/footprint.js","18877db21b54e9755ee69ed0a872610d"],["/js/src/hook-duoshuo.js","b4c70c9dedc477bf46b6fa7a96efe41e"],["/js/src/instantclick.min.js","85ecb4dd99ec76ac7c4e780d53bca82a"],["/js/src/js.cookie.js","4247d11dd97fca133949d16c1b16c370"],["/js/src/motion.js","312261887d57ab89611c833b72cfb211"],["/js/src/post-details.js","03e1467d8da5b8fc6e281ebed3ed9a03"],["/js/src/schemes/pisces.js","4f7cddfe566f6ebb043dd50f45b70a35"],["/js/src/scroll-cookie.js","5dba50763e6bd499416c237a1295d377"],["/js/src/scrollspy.js","8f7f8b28cdd8e061119a61c60c8ddd24"],["/js/src/utils.js","b829c04a150d6686cbbd57c9fca63ec1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3a2b15a84152c080e93713598ed87b82"],["/lib/Han/dist/han.js","39e64bb7510a6d29bb5c875aed6f1980"],["/lib/Han/dist/han.min.css","ecd57ee31976276f06c9eaed9a4f037d"],["/lib/Han/dist/han.min.js","218c7c5dcdcebdff336194cab951fc4f"],["/lib/algolia-instant-search/instantsearch.min.css","e3d6eec208a15414c97e353f3493bf2b"],["/lib/algolia-instant-search/instantsearch.min.js","be757ebd9b922910f630c0832020e3c6"],["/lib/canvas-nest/canvas-nest.min.js","937ee8275c940328b3998d531d0033b5"],["/lib/canvas-ribbon/canvas-ribbon.js","01fa7188faebedffd895a5c0d1f65665"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","53355c4c970f587c91ee3bd44054bd94"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c504fd36467c3b7f4e4b08c7f6d75e59"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c5b3f62215cc99326645d455469c2d65"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","05f792e6c9c761718472a1d1bd9ba7a8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","067c774dfe45464c78d201352ccdfeb0"],["/lib/fancybox/source/jquery.fancybox.css","99a35d10ad1c3d11f8d3f65b80949255"],["/lib/fancybox/source/jquery.fancybox.js","c1bc4b85e5c0769b7e1398b18cd69425"],["/lib/fancybox/source/jquery.fancybox.pack.js","67a9d9cce66dd2e03734ed5f8f08e46f"],["/lib/fastclick/README.html","56c79f32d99776661c106579cc68844d"],["/lib/fastclick/lib/fastclick.js","4ce306016791756f6ea60f289832b01f"],["/lib/fastclick/lib/fastclick.min.js","8c847957623cdcdfb2847fe8eb048671"],["/lib/font-awesome/css/font-awesome.css","c8c441d7ee7e6a21fda20cc1651e6844"],["/lib/font-awesome/css/font-awesome.min.css","ac32af7e58f9a459f445c139d3bf1a65"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","808fc23066bde61742fd43701d5833db"],["/lib/jquery_lazyload/CONTRIBUTING.html","96eb48afe74275b1c68d371f36507bc2"],["/lib/jquery_lazyload/README.html","d933210f860a659fa2fdc0a6eb820425"],["/lib/jquery_lazyload/jquery.lazyload.js","9047653d21e6a72787e5e5da7b7d785b"],["/lib/jquery_lazyload/jquery.scrollstop.js","ddc89ff8ade74b0a6932c121b86c5f43"],["/lib/needsharebutton/font-embedded.css","4c03a33ef1b1cd873f3b1057116dd231"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","5619eed471f159526bc9cfe86e3f516e"],["/lib/pace/pace-theme-barber-shop.min.css","a21948e4b10182c43f214628d2da7dd4"],["/lib/pace/pace-theme-big-counter.min.css","7edd33b9d0d0a08a2514180ff895eb42"],["/lib/pace/pace-theme-bounce.min.css","23a44875b3a85e99f33633f16c7a35f0"],["/lib/pace/pace-theme-center-atom.min.css","392992e0b299ac780c1535e48e43d3ed"],["/lib/pace/pace-theme-center-circle.min.css","8d00d70c3792f324673f43cfbe29b6d8"],["/lib/pace/pace-theme-center-radar.min.css","3f94b28364cf390352b8ed8c6194a5df"],["/lib/pace/pace-theme-center-simple.min.css","49998e9cfa816e5c13126a5a06993027"],["/lib/pace/pace-theme-corner-indicator.min.css","38fb90e236013370ec729cb834ac4aac"],["/lib/pace/pace-theme-fill-left.min.css","c3d65d3985f0911232ff45f790427202"],["/lib/pace/pace-theme-flash.min.css","6f7f23535353135afa5d0f0463284385"],["/lib/pace/pace-theme-loading-bar.min.css","33df1adf18ad9eb47dab07ed2e4f54ed"],["/lib/pace/pace-theme-mac-osx.min.css","c87b3d3acf4ad97d6a088308bc944a51"],["/lib/pace/pace-theme-minimal.min.css","84cecfe2a873a88a83a7f013ffaa663c"],["/lib/pace/pace.min.js","b4182cc89dfadb88edef1702a1c20e5b"],["/lib/three/canvas_lines.min.js","b805be5e566a67aaaa15f9a9b0488a8f"],["/lib/three/canvas_sphere.min.js","7ce710aa933fb340fdfe937ae7d0e904"],["/lib/three/three-waves.min.js","4b7f09e230f7bb8045cbd9844b2837f4"],["/lib/three/three.min.js","4e87357fc643bd8b39a79c516f5479d0"],["/lib/ua-parser-js/dist/ua-parser.min.js","34f26ba3ec1d65d11c3a117bfdacb392"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a3dc07e3c58cd16fac4d5147d9465249"],["/lib/velocity/velocity.js","c40dd5414953c7f8d201a7aa4c6ffe93"],["/lib/velocity/velocity.min.js","af6c58a58b9a7b5751c288299b7e9370"],["/lib/velocity/velocity.ui.js","3e43742d59ebd66958fb367184e4807d"],["/lib/velocity/velocity.ui.min.js","72add45a1ef3bf757b51db460dc3dac5"],["/links/index.html","b2aa84993760b8938c7dd320e07a0f3f"],["/movies/index.html","c7c32691cec6a2fba53a8cf7c97bbf8b"],["/photos/index.html","956d07e3903a714acb547dc1cd170a75"],["/posts/191ddb73/index.html","5e598095075cbfa7910f7af94cff85cb"],["/posts/2fc77d95/index.html","43b170a5bc215f8f95364afb9ae8aad7"],["/posts/4f1131af/index.html","6de4cca3110cd2b626240451ce0d3f39"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","95f89d31638a298c8064ffc30d61e96b"],["/posts/6de7d9db/index.html","d23e7aceabf370513b558a3db7459b7e"],["/posts/c311b112/index.html","891aa788fcb3605b5384f6f0944c9492"],["/posts/f8073739/index.html","c28c525a23e2f79160c99bbea92110c1"],["/posts/f97ef43b/index.html","5ea1d039dd01151a6c0bebffc86ed2df"],["/sw-register.js","3cf910b64909656bd614494811b14cc1"],["/tags/index.html","ab6b9d6c18dd15518079c0579d36f480"],["/tags/つぶやき/index.html","4593a50a18defe9d15a03445852eae35"],["/tags/インターネット/index.html","2c1d9c2e3576f08b14ac4c61ef3fc4f1"],["/tags/チョコレート/index.html","7be4062151769ddea19f391ece35df42"],["/tags/乳製品/index.html","96fa0b70182a8087c8db11f00fc87781"],["/tags/食べ物文化/index.html","3bc45f49c5bf26271e7b41b193820429"]];
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
