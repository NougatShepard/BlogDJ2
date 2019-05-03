/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","97c70c11eb521657cfd2a0e382cb5681"],["/about/index.html","878de3fd62e718d4d2339af13423d967"],["/archives/2019/04/index.html","8c0351190d339b421743ae338f9c9f88"],["/archives/2019/05/index.html","c5f8e62927640e4c52d7c58dfd82d76a"],["/archives/2019/index.html","c6dc4db5cc397d2581ba6a17722bc93a"],["/archives/index.html","9631144d538be30bf8a6c8180cc12ab3"],["/books/index.html","150d20ba695bcf4da791b9d9b41edbd7"],["/categories/index.html","0c415a48c29a7bac01e50fc2f9174581"],["/categories/つぶやき/index.html","aa511eaecd4678d9334a0eed628ed37f"],["/categories/インターネット/index.html","a02ae58f4b0c67cc90126e38f912fe71"],["/categories/食べ物文化/index.html","c175cabad309a657a2d23eff1bc5541d"],["/css/main.css","14ea5b6d814bd6e2c75d1ab56890bb7d"],["/games/index.html","5a858a775a2d1baab845bb50b0b6ff23"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","4419231a50248103b760726216f3b749"],["/js/src/affix.js","0b0c48e120db2f0fdfb9fcb1fe2961c0"],["/js/src/algolia-search.js","ba94dbf33c630d4c95a886a611228e1b"],["/js/src/bootstrap.js","5365cd0ab736189f1bf2247ab90487bf"],["/js/src/china.js","12f13e7f03cf51b2bee0d27a494fcecf"],["/js/src/echarts.min.js","d664c57da64c9bb7c970cb3e6cbeff97"],["/js/src/exturl.js","5980a650d2590e80814e825a2d81206b"],["/js/src/footprint.js","5046defb6633ae652642c131e2480823"],["/js/src/hook-duoshuo.js","fe454fd7fdbb72637814645e35c12386"],["/js/src/instantclick.min.js","63c861d2be65e23075fcabba6c6815a9"],["/js/src/js.cookie.js","2466d0ab94a40f9594f115fcc92669aa"],["/js/src/motion.js","97333eb76158a47d1fb48b88ad9538cd"],["/js/src/post-details.js","9edbb1208bc9eab154a0674b251f9d66"],["/js/src/schemes/pisces.js","f652cabc9862dd54f273cf02d4439005"],["/js/src/scroll-cookie.js","4905b406e351b4b1f84570ac6766dddd"],["/js/src/scrollspy.js","d13bef8ee8d263e05a5801713bbdcd47"],["/js/src/utils.js","fcdc29042328e3b87e42064e4f77e5f8"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","aab871f6f9362f90d98676e3b683c6f2"],["/lib/Han/dist/han.js","ead987f5a6c63c4a24200e0f6c8fdb55"],["/lib/Han/dist/han.min.css","8ab3d29a8f3ec5ef843fdf3fe153b5b3"],["/lib/Han/dist/han.min.js","727aebf3fd122b0d93c2e550305a1e71"],["/lib/algolia-instant-search/instantsearch.min.css","8ed1646626caa2a4a6936fb8ce0ef798"],["/lib/algolia-instant-search/instantsearch.min.js","8e8967083f1c45b0638d98390c15f485"],["/lib/canvas-nest/canvas-nest.min.js","3de519bce83f8fd533596cbc6f6be98e"],["/lib/canvas-ribbon/canvas-ribbon.js","8166056996cf8a518e63389b6269108b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d1067d3e674270d6ba2bb7fddcf258e7"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e1c4eac91d9c6fd099eed92decd6bcdf"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2d95d8045cdd810f52ba71d50a73c3e2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d7764a32986c4c2c728c08da0208a07a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1b36fa57b5f51fffe993847efee9ec30"],["/lib/fancybox/source/jquery.fancybox.css","44d3416ec0a0c28f92c8522c0bbcc4d4"],["/lib/fancybox/source/jquery.fancybox.js","dadea131cd464c4f1c0cf8612d37c81a"],["/lib/fancybox/source/jquery.fancybox.pack.js","6549968d7f4b813e9f5e55ed55d18e6d"],["/lib/fastclick/README.html","f9593ab6fc120f057024498cb3aab8dc"],["/lib/fastclick/lib/fastclick.js","3b5bf3a82cc5daa77e3ce6cb64c2552a"],["/lib/fastclick/lib/fastclick.min.js","952554d378eae4f88a2d8ca47c4fc1c6"],["/lib/font-awesome/css/font-awesome.css","11f323024a4bf5cc71815cf70046f25d"],["/lib/font-awesome/css/font-awesome.min.css","11f323024a4bf5cc71815cf70046f25d"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","84aebfb97f632294ba3152dd9c8d03de"],["/lib/jquery_lazyload/CONTRIBUTING.html","427f45ce649389fcbad2a4eeab3f63f2"],["/lib/jquery_lazyload/README.html","3bad9ff7fcdfc15768cf3368eb2c9faf"],["/lib/jquery_lazyload/jquery.lazyload.js","b278be925ac9230223f8e66769d1d97a"],["/lib/jquery_lazyload/jquery.scrollstop.js","d5d130212f0764881b9237d4f7a087a6"],["/lib/needsharebutton/font-embedded.css","6a1553d71637b3b6f02c8410b658fed1"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","e5038762cc6c03b140faaa182e63b4b3"],["/lib/pace/pace-theme-barber-shop.min.css","fffb5e523546b93ecae2736e16e8af84"],["/lib/pace/pace-theme-big-counter.min.css","2ffe6b4427fa635596c428f4f9f33b4c"],["/lib/pace/pace-theme-bounce.min.css","cb3e586c20e71fcf05cf585a6940b597"],["/lib/pace/pace-theme-center-atom.min.css","ef138b8461c66e547c3ff8f04a10ce73"],["/lib/pace/pace-theme-center-circle.min.css","f098d22fb1fb46e7ead82341bd8bf45c"],["/lib/pace/pace-theme-center-radar.min.css","8da0185e9c96588db89cf00579848469"],["/lib/pace/pace-theme-center-simple.min.css","3ddcd1c20349e57dfe67707eee7e7219"],["/lib/pace/pace-theme-corner-indicator.min.css","21b8cab0f8fe8908a4200b42e3bb7230"],["/lib/pace/pace-theme-fill-left.min.css","9b78b4a3bc67efe5e557bed5e37cefdc"],["/lib/pace/pace-theme-flash.min.css","fa11ff20fe484ce42a166b1d3b321359"],["/lib/pace/pace-theme-loading-bar.min.css","99eb48f344dc6cb0c9d82519fad7e342"],["/lib/pace/pace-theme-mac-osx.min.css","8a192401148497bcafee7a83e79d6821"],["/lib/pace/pace-theme-minimal.min.css","6436ad8a472b21877429b79135299243"],["/lib/pace/pace.min.js","ebb4b75accd423b3797626460615302b"],["/lib/three/canvas_lines.min.js","8a2912a9f58815d5a077cafa75a1a72e"],["/lib/three/canvas_sphere.min.js","4bd3ae84c8ff3929af061d6b59bbcce6"],["/lib/three/three-waves.min.js","de284d4aaeec9734f46fb6fb27957ff8"],["/lib/three/three.min.js","bdfc888728293294d2fb14e662b8638a"],["/lib/ua-parser-js/dist/ua-parser.min.js","c321c50e098e804a52f63c7d09711c62"],["/lib/ua-parser-js/dist/ua-parser.pack.js","06103ed32bfa8605ba507b39acb29e22"],["/lib/velocity/velocity.js","76f1dd406d5b06d0885ac7a474a97628"],["/lib/velocity/velocity.min.js","fa52c2d3341c12db80c332776e6a25d6"],["/lib/velocity/velocity.ui.js","cf78e4c81ee0e8f03febf2b200ab3728"],["/lib/velocity/velocity.ui.min.js","5c54b4df95df3675b05b99e622e288da"],["/links/index.html","a5dce9ecab4afc312c698fe02779fb8e"],["/movies/index.html","7357ce08c3b8d5b9ccaf41837cd8ee43"],["/photos/index.html","4b11203afdd91da42fdd98bedec5014b"],["/posts/191ddb73/index.html","e1cac886f064f0d4caf1f4b32e2028b8"],["/posts/2fc77d95/index.html","5334e2e47c2aebebed61ee01130c2eca"],["/posts/4f1131af/index.html","4bc9689c9f6e07ab90a08711044e32e7"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","f0bfd7def0ace698500a580ae1f9cf0a"],["/posts/6de7d9db/index.html","3dd50b01a0e879d2b331264ac42ad964"],["/posts/c311b112/index.html","30ad27ad651ffc5cdba7a18fa87e8029"],["/posts/f8073739/index.html","c4c30e5ea74e9464a6d0b43bd630d437"],["/sw-register.js","e942560039ec8e6b475da4c0cbab4ba2"],["/tags/index.html","598041d39ab61699bdcbceafcfb10b6b"],["/tags/つぶやき/index.html","6d768f1ab2293f2628285d3d75913099"],["/tags/インターネット/index.html","f3eed214d31c443f51d9ca4542427da3"],["/tags/チョコレート/index.html","c1e6b874881b842258ef145c3b2aba90"],["/tags/乳製品/index.html","657163ea863fcba85b0658ef855f5bc0"],["/tags/食べ物文化/index.html","f42bc906fb19383fbabbedf3aa7b3c7e"]];
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
