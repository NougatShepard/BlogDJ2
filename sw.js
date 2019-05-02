/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","a6b844414e0f309a676ce3e85d36771f"],["/about/index.html","18d062883e3b982e6885f5132dbf0637"],["/archives/2019/04/index.html","ccebd39b4b07773ed391d016dd164b6c"],["/archives/2019/05/index.html","507e3a9942fb92291d233f095c843730"],["/archives/2019/index.html","9de9449417ef65fb8aa59fe23011511b"],["/archives/index.html","8723bcaf7381a8eb588a1ce998b7bedd"],["/books/index.html","c97c089010e4a375005d56e826ef51ac"],["/categories/index.html","a2d2d60e2022bb90e3a87447c6876b92"],["/categories/つぶやき/index.html","9f62ff01bb403d6375dd3d4d1fbe2dd6"],["/categories/インターネット/index.html","602b5876a4fabb6741766070e8e55aad"],["/categories/食べ物文化/index.html","4182fa544cef3caaa3943d3ddd75c950"],["/css/main.css","f169c23c54948c91721ad746a1259b76"],["/games/index.html","c1d3515730f3300561a38748fda3a901"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","1d3e968e84999db356a533b44d03e9cf"],["/js/src/affix.js","4547fda91d192e9676adc1368258514d"],["/js/src/algolia-search.js","c3f09ac6c3ff57b96620153b62dae6f4"],["/js/src/bootstrap.js","106f077c8a46998ff204fe5094e6a95e"],["/js/src/china.js","fea44ae0fead4eadb20d6cb00af02622"],["/js/src/echarts.min.js","90739eec6477ce944a1cd2eb5d42e8bd"],["/js/src/exturl.js","6ae717269db0b3495f09e7ce3e9967f0"],["/js/src/footprint.js","5e2abdb52f23bf2f1ed57f4abe89a751"],["/js/src/hook-duoshuo.js","2665ba7ca041f3ea1a94dd8cb478b993"],["/js/src/instantclick.min.js","c1d579abeb7aea7871b8cd9ca405177c"],["/js/src/js.cookie.js","58cb4919a8ffc8682bb8c0d70d680bb0"],["/js/src/motion.js","f6fcec2f7c4c2dfd3896c78b41ee0acf"],["/js/src/post-details.js","d07a9a821679f6380783b44b1a50179a"],["/js/src/schemes/pisces.js","d71035789e4dcd9002f8aa4b1292b684"],["/js/src/scroll-cookie.js","05cc833242fbf3f947644d0836d31f6c"],["/js/src/scrollspy.js","0cb36c9cfc7ab525a2ca14ea607f8757"],["/js/src/utils.js","3c7b140d0eeb7a8b81530bdbaec41aea"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7e00cecd2ee8e8a0c8310b27ea4bd722"],["/lib/Han/dist/han.js","85fa51ed953438ed5abd6c658ef30c6a"],["/lib/Han/dist/han.min.css","58dfd29405bb9edf5d86460d532bed15"],["/lib/Han/dist/han.min.js","fe8748079f494fd9603e85d887588268"],["/lib/algolia-instant-search/instantsearch.min.css","9b49f5460dbd94261533d223691dfe87"],["/lib/algolia-instant-search/instantsearch.min.js","964acccd48944ea810211aefad8e346e"],["/lib/canvas-nest/canvas-nest.min.js","7cd3f6a577c858a53a543c97caef36e6"],["/lib/canvas-ribbon/canvas-ribbon.js","b5113c26b94cc581dc22f1292051ace2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","8d84de2b5b4e85bff669b8d855552d33"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","65e5a38847d95c5760b234e1a5e0f650"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","acacc90ad0c2c4a9ae8b69c2bd3390f8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","fdcbc13546dd972562bea4bfc57746d0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a6923de1925db57beacde25ba9ffb20e"],["/lib/fancybox/source/jquery.fancybox.css","60e8c3f08b974289d81df79ac9ff6db3"],["/lib/fancybox/source/jquery.fancybox.js","6665af5f528ec71cc5029195d8a622ce"],["/lib/fancybox/source/jquery.fancybox.pack.js","6a59d9cda6be5ca469e29e94e0fa1ae3"],["/lib/fastclick/README.html","d7734055434aa368ebef884d12da6eac"],["/lib/fastclick/lib/fastclick.js","e77636c0cf55002c0f41cc38a6c9edc6"],["/lib/fastclick/lib/fastclick.min.js","6c8384b260e5e01830ea00986944e5e8"],["/lib/font-awesome/css/font-awesome.css","feb74b9c7d1504db6a529776a68f7575"],["/lib/font-awesome/css/font-awesome.min.css","feb74b9c7d1504db6a529776a68f7575"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","729b225e7d27b6f968df078742fb0949"],["/lib/jquery_lazyload/CONTRIBUTING.html","8995af3c93170af4568509fbe003e829"],["/lib/jquery_lazyload/README.html","e5717d47a7ac3b327dd1ffefa42d4f33"],["/lib/jquery_lazyload/jquery.lazyload.js","df9091b6fff334f1458762088e5d2746"],["/lib/jquery_lazyload/jquery.scrollstop.js","10277acbb635b6cbd1cd3f615cf5179e"],["/lib/needsharebutton/font-embedded.css","649fe9bd2a982a331e6ef099e4228194"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","596248b2911e692d7bac5eb0decf759b"],["/lib/pace/pace-theme-barber-shop.min.css","c86604f89203aa8957306e02e67983fb"],["/lib/pace/pace-theme-big-counter.min.css","dc0292d2849b8452ee75909da8ceb2a6"],["/lib/pace/pace-theme-bounce.min.css","5a64e6c1872312a5d706fd2195cd24e3"],["/lib/pace/pace-theme-center-atom.min.css","f3ce0d70f93ae12d464a17fa99fe6134"],["/lib/pace/pace-theme-center-circle.min.css","c00653ee02e96c74c67e7747e1362e3b"],["/lib/pace/pace-theme-center-radar.min.css","04bff5d126fd332da0b4bea6879b92ce"],["/lib/pace/pace-theme-center-simple.min.css","3de569bd97e0bf722794c80382ddcc25"],["/lib/pace/pace-theme-corner-indicator.min.css","915d549ecfe473c9b59b16d19f3c33cc"],["/lib/pace/pace-theme-fill-left.min.css","0801817190756cd1b57c23aac1055183"],["/lib/pace/pace-theme-flash.min.css","75010646bb8880c18fc4af4fc02013f3"],["/lib/pace/pace-theme-loading-bar.min.css","ab803bae136b69efa9fc82de66207e46"],["/lib/pace/pace-theme-mac-osx.min.css","e7f44adbb03abb226e39f616803a3068"],["/lib/pace/pace-theme-minimal.min.css","64b37b4354ff21168103bf3e7d925044"],["/lib/pace/pace.min.js","b01ef732527aed598700cf9d1977a4a9"],["/lib/three/canvas_lines.min.js","7ad32c182fa875c742b68e9c6d8ada41"],["/lib/three/canvas_sphere.min.js","605649a33c1048b3319b60e1041192c7"],["/lib/three/three-waves.min.js","a06397701742e96cf63e59987109f340"],["/lib/three/three.min.js","1f584e00f7ad673e9a0fe4f3f989eaa9"],["/lib/ua-parser-js/dist/ua-parser.min.js","2696794fa0ca7785fa22a09f865b5eab"],["/lib/ua-parser-js/dist/ua-parser.pack.js","0b458df05ccf762330f5315b61eff39f"],["/lib/velocity/velocity.js","69e3343df0d57a7b80c518fb6adf36c1"],["/lib/velocity/velocity.min.js","f608f62400cbdf2104aa2e9cc7abab8b"],["/lib/velocity/velocity.ui.js","ab9fcd3353a514cbb11d14b47de7375e"],["/lib/velocity/velocity.ui.min.js","bd973d729730f2a2a958a1190ae82aa8"],["/links/index.html","86120a889de0da91a8bac38d814972ae"],["/movies/index.html","6f23ad3d3a8b249884ff18e946ef9993"],["/photos/index.html","7fe711390d32a7eaf7efd2baf8d33f09"],["/posts/191ddb73/index.html","54196941ff8a547234e1d0a51dc54cd5"],["/posts/4f1131af/index.html","1e31ede0b08d51e3e370a5fa6bd1abd6"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","c93d9801a0fe570855792cda0e90d238"],["/posts/6de7d9db/index.html","24d720cf6ea5f9365f03ced4400045d7"],["/posts/c311b112/index.html","c03b8e9773da814dc86eed4f7d2b239a"],["/posts/f8073739/index.html","0b689b1c31368baed4358a3edf0349d0"],["/sw-register.js","ac05853825c9df615431112f4691f06d"],["/tags/index.html","0bc760d28e438d01f8b2edeb44e2bfad"],["/tags/つぶやき/index.html","fdf47e58edbcca2059349178d2168024"],["/tags/インターネット/index.html","1061186621c38e89bb66b43067386bec"],["/tags/チョコレート/index.html","a11e2af8535687ca615a6dcc6152b2f4"],["/tags/乳製品/index.html","451aed0223bfad17bf3af66028eeaca8"],["/tags/食べ物文化/index.html","094d7829b23da94c47b942759b41b221"]];
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
