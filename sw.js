/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","3d0aeb64f61fed669c31f9b3492d867e"],["/about/index.html","671b49f13ac096376f79b7875cb48283"],["/archives/2019/04/index.html","922fb51088c7b2763eba0610e0cc005b"],["/archives/2019/index.html","e07a46c9c0c0787f500fb46fa9aefa80"],["/archives/index.html","f2efc40b439383a4421cb01587ef7b1d"],["/books/index.html","22b698553a18882050974f47a99756d2"],["/categories/index.html","fbcba1316e0e42bbb2f77fc37ea56214"],["/categories/つぶやき/index.html","b8f32450723e44154db10b102346224e"],["/categories/インターネット/index.html","bd373d9f2456f503d6368b4d3a5acef8"],["/categories/食べ物文化/index.html","684acecb4e765161f11a3b31f891def0"],["/css/main.css","98f269342a6a7333abb826687653df09"],["/games/index.html","e46f0b015641e341a68c87ee5c9dc64c"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","429f5d48baf8daf55e3d8b6e96b63e46"],["/js/src/affix.js","93d0cc88af587f9c1b56783d4258cb5b"],["/js/src/algolia-search.js","e44d66edda872bb89c26f63d917bcdaa"],["/js/src/bootstrap.js","37614c492c2bcd74928aed7a929c8bf1"],["/js/src/china.js","2bec64175c25dbf646b89623aa95097c"],["/js/src/echarts.min.js","5f2449750dcdeaee296c4cbac4a1a385"],["/js/src/exturl.js","f1e90e27c4e7072a064052e6f1cc53e1"],["/js/src/footprint.js","52d0582954adf924619113c0e01d8eeb"],["/js/src/hook-duoshuo.js","eb6c0269eb5bffe3a502684e8acb7f99"],["/js/src/instantclick.min.js","4b4c38f6f25b6965d204c0f96b23dff9"],["/js/src/js.cookie.js","47a1c82a9b29b33e246b8f9ba62063fc"],["/js/src/motion.js","fe7652bea233dc308625d842f7de0a93"],["/js/src/post-details.js","eb7c736c04f81483a3fea7abca6c37e6"],["/js/src/schemes/pisces.js","5b6380501ce6ce5433a06d79d6be354a"],["/js/src/scroll-cookie.js","79578ca61f8bcebf23f86b14a882c302"],["/js/src/scrollspy.js","593365d20685b4a99c0d1dda2b938ab1"],["/js/src/utils.js","85c03074b6a29893777205942b3d844c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","5b5cf72aac7717d05a8283c25ee65935"],["/lib/Han/dist/han.js","24c8b284de73238eb77239b9f34ee613"],["/lib/Han/dist/han.min.css","e7f6be5d0ceacaee4e607046afb22e16"],["/lib/Han/dist/han.min.js","bfa6480ad37de7951ebf04afc95d338d"],["/lib/algolia-instant-search/instantsearch.min.css","91e03cfbdc6e5d4d0e4d9ed6e95f48ac"],["/lib/algolia-instant-search/instantsearch.min.js","deab16ca7e34ea68df323c065d8fc3c5"],["/lib/canvas-nest/canvas-nest.min.js","8fa714ef2bc9306b798b351cb4cd9620"],["/lib/canvas-ribbon/canvas-ribbon.js","3df6857678e18670f516fd5864384dfb"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","66d08728f913c6dfcbf03c44393e9e2d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","95f4bdd6cebc582f08264aed0baad5c6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e80792682aff225db98d3a459d702281"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","cbdb93060dd6d17779211b8b880d44bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e69b6aff004f7886802f9ce871f9fb39"],["/lib/fancybox/source/jquery.fancybox.css","f9b9703c455d43d66360b98074ba4ba3"],["/lib/fancybox/source/jquery.fancybox.js","716fbea03fbe90b1f484e20b150d2d6a"],["/lib/fancybox/source/jquery.fancybox.pack.js","7c44bd6a2341c1fd81e9de96a434f5d3"],["/lib/fastclick/README.html","7bd2c148ad18e403d542645f27b575e8"],["/lib/fastclick/lib/fastclick.js","d7e057d737eafe445e8e87c58d53019c"],["/lib/fastclick/lib/fastclick.min.js","e8183e4ecc7139d2ab83fbd5cea9110f"],["/lib/font-awesome/css/font-awesome.css","6881b66201b152e5d75ae06cb6fb24f4"],["/lib/font-awesome/css/font-awesome.min.css","6881b66201b152e5d75ae06cb6fb24f4"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","74bd22b87352651d96fda90000653f64"],["/lib/jquery_lazyload/CONTRIBUTING.html","d3c56922817c1a5c2b24d050c9f4f6ed"],["/lib/jquery_lazyload/README.html","58f7edcf5619b5cfdf576fa810b87a38"],["/lib/jquery_lazyload/jquery.lazyload.js","e8e833aa76d0d72430c7bcbebccf2bed"],["/lib/jquery_lazyload/jquery.scrollstop.js","6e1112ca89e55ec0494f961f801d7f2b"],["/lib/needsharebutton/font-embedded.css","57a3b9f5303a072b29cbd9d45ee6eb0e"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","0b071ad8fb71b183aa84e17f6a107c58"],["/lib/pace/pace-theme-barber-shop.min.css","6fa2147685f0af0adff32713038758be"],["/lib/pace/pace-theme-big-counter.min.css","7405199e1c02e2c573662ff2bbc903c9"],["/lib/pace/pace-theme-bounce.min.css","da9974599633aada773b61b65b50d984"],["/lib/pace/pace-theme-center-atom.min.css","80dfb45a00d6026e0b93758d164a1f5b"],["/lib/pace/pace-theme-center-circle.min.css","5db30b2e6ababb06154fe7f000587d9e"],["/lib/pace/pace-theme-center-radar.min.css","0bc3fca1e5b84db40a532a73ae34871b"],["/lib/pace/pace-theme-center-simple.min.css","a5e27f6a68ba532e7d8ce946ef1a30d0"],["/lib/pace/pace-theme-corner-indicator.min.css","212173bdd8edbd2568bd8e7fa87b95c2"],["/lib/pace/pace-theme-fill-left.min.css","6f886645184d65954e46e2867aa9a66c"],["/lib/pace/pace-theme-flash.min.css","dfa095f9ab8eee23e85b271be2031ebe"],["/lib/pace/pace-theme-loading-bar.min.css","a35eda5e405ce5c8ac3547b446fb6e1a"],["/lib/pace/pace-theme-mac-osx.min.css","3263b898ae9a8c6d5e0572c819ab08e5"],["/lib/pace/pace-theme-minimal.min.css","acd589ad086ceb2f67b435ff311672f1"],["/lib/pace/pace.min.js","c6889d379209918314306893f64e075d"],["/lib/three/canvas_lines.min.js","767989680f0e5ea79a475daa872a79b6"],["/lib/three/canvas_sphere.min.js","30cc8f0db36bc6bd79e5887e77e9263f"],["/lib/three/three-waves.min.js","f7061f0990a534531273418e10123163"],["/lib/three/three.min.js","27596d84f8e997d60fffed93284b66f2"],["/lib/ua-parser-js/dist/ua-parser.min.js","37b7ccbd3d787fdd0eaa0257124b01ab"],["/lib/ua-parser-js/dist/ua-parser.pack.js","effdc96245f24482733beade1a8b89fd"],["/lib/velocity/velocity.js","728ac1a25ef4093ee2273be4bfc93847"],["/lib/velocity/velocity.min.js","99f8921e97778560a146183abef9c80f"],["/lib/velocity/velocity.ui.js","a61af71f020e4b24509a9f169d65727d"],["/lib/velocity/velocity.ui.min.js","dc7c7c0d72e56d2577b6c8bee4833a57"],["/links/index.html","7a12fbe9160ebb4c17d2f2d6bcf35e36"],["/movies/index.html","e0b7317212d670e107c92cccde5cbf64"],["/photos/index.html","ad81508628a10b7b2cc022423960150e"],["/posts/191ddb73/index.html","8d99c7cd19ab4335db33ab77dff686eb"],["/posts/4f1131af/index.html","421f4bba694809179285beedc65c0b8f"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","64d7d6ab700e0f7dbe715d1d397317cc"],["/posts/6de7d9db/index.html","8d64437d60611f11056063d2b93f9d2b"],["/posts/c311b112/index.html","5ec8dd9e7e6578fc9e666a8b71b03465"],["/sw-register.js","97e40fad86d478d1ac0ae9585d1f5e9d"],["/tags/index.html","08ec4deabfe1b38caa90366d47c3c3b1"],["/tags/つぶやき/index.html","a475ddcc0b8b456857e970f050612f1c"],["/tags/インターネット/index.html","957861eaab4f2cc1018bddb25c9b1ede"],["/tags/チョコレート/index.html","92ab9b44e3902833b2e7a9434bcaf04a"],["/tags/乳製品/index.html","400c7597aa2222836fa35eb92a05d59c"],["/tags/食べ物文化/index.html","5f78e9d6ad29f2769bd3eb265c536c46"]];
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
