/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","16eeffdbb0578507251131493c4a92f6"],["/about/index.html","452147aea41f5cfa537916fdb8c9ae4f"],["/archives/2019/04/index.html","83be903c22c24b1e4d74e44c2e002c98"],["/archives/2019/05/index.html","2b0bffede01e2edd32dfb1e9d56c6b39"],["/archives/2019/05/page/2/index.html","6cb8ca62bb950420bf8b39544fc0309c"],["/archives/2019/index.html","01f0fe52ad540295b3d37e5d5f6889db"],["/archives/2019/page/2/index.html","840f4de31cda2cd824cb45a6969e4158"],["/archives/index.html","7b959b72265f22946255ac0fda1e6cf9"],["/archives/page/2/index.html","58348b951928f7ab5fa6c504f8edd0d8"],["/books/index.html","c7db7f868186f10f70b88f75009ad467"],["/categories/index.html","d1661d4945105aaaffa5a2beaff06e24"],["/categories/つぶやき/index.html","b30fc1c713cdcbfc74e52b40291e79fc"],["/categories/インターネット/index.html","31114f5a9776f6be63722c1b7a2d3b59"],["/categories/中国に関する新聞記事/index.html","5f27bec3b0cf50f5829788ba980bb485"],["/categories/労働者保護法律/index.html","d5b0fc42d3cb1ab4f5bfa3c8f59fa0c4"],["/categories/日本のIT教育/index.html","51c2365a92411b82c3f80752171b790b"],["/categories/日本のIT現場/index.html","bb833d57a490061559f977052e2bdde7"],["/categories/日本のビジネスマーナ/index.html","d972fe586f9106568b2c6dfa4283f465"],["/categories/日本の国内の人権状況/index.html","6ef47bc1d6a14cb3103ecd55bfb9db71"],["/categories/食べ物文化/index.html","9c17f370051b9e2656286651219f6c15"],["/css/main.css","cd1505b37a293bb7d4394473fd059ccd"],["/games/index.html","79245181e8552b29cd85343d3975541b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","067efe43de978e26f96d3485c27ef73a"],["/js/src/affix.js","98647a5e857b6e0001cc4630fa98f34b"],["/js/src/algolia-search.js","eee85f8f7c98296eda4711bba4acb681"],["/js/src/bootstrap.js","dc6aae3672435f93f8cd74d2e98ffa2f"],["/js/src/china.js","ec0aa806b377101a63fdcc6001acdccc"],["/js/src/echarts.min.js","7a0a2aae6c4699689d6de00dc8cf57d1"],["/js/src/exturl.js","a0d15b845318a2d3b27c72275bbf85f7"],["/js/src/footprint.js","2eb03d474319d127ea5358cfa62425ff"],["/js/src/hook-duoshuo.js","3d29b8bdbb72d5f54b3772756767cbdc"],["/js/src/instantclick.min.js","1725eb78e0f96b9721bb946b37cc322d"],["/js/src/js.cookie.js","38ce955acc7272eda6ae20de042a4b06"],["/js/src/motion.js","f4455f77a149c567e5422a03387577a9"],["/js/src/post-details.js","92d7dc0e8a8297ddf32e7556a69b14ee"],["/js/src/schemes/pisces.js","a0fbb00bb54661429afb25faa566086f"],["/js/src/scroll-cookie.js","d48f5fa26b7470e0c5920693a7103907"],["/js/src/scrollspy.js","2168ee82d93360a404129729f31e7993"],["/js/src/utils.js","2d709211ba969ce7e026f963909943fa"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2c2fd7d77378d756c26e4c298486bc9f"],["/lib/Han/dist/han.js","7f4e0f853f1ca68b5e455f0516d4c101"],["/lib/Han/dist/han.min.css","b245b1c31dea1eba152060ce4388ed3c"],["/lib/Han/dist/han.min.js","a72012ba289b70cf1d2bef98cbca06fc"],["/lib/algolia-instant-search/instantsearch.min.css","ce38120f8664c6b5ce3f88f0eeea0c96"],["/lib/algolia-instant-search/instantsearch.min.js","bceeae58880e5badefa18b11646959c8"],["/lib/canvas-nest/canvas-nest.min.js","6775564f2f1379bcf3abde7350769d51"],["/lib/canvas-ribbon/canvas-ribbon.js","cf1920855047e7d220eebb7644dac691"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","af98a8d423642f033a1810940bf71299"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","33f4ee8e652d9b7930082f32c20bbde4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e1664547d952558bfec92a73b47b7b8e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1ca6ab60f2886568803f1398e021e93f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c5a960196f4764e7b070ae1103210750"],["/lib/fancybox/source/jquery.fancybox.css","666d3cc7a3757e0e55b385017ae32e13"],["/lib/fancybox/source/jquery.fancybox.js","29bc8c08381b21eecc5deba189478f5d"],["/lib/fancybox/source/jquery.fancybox.pack.js","9affd9a95615935c20fc52279fabc972"],["/lib/fastclick/README.html","6d32b47f761bc65e715cbd66ee1f22ab"],["/lib/fastclick/lib/fastclick.js","1878442f62224a90b850a4c9506444a5"],["/lib/fastclick/lib/fastclick.min.js","2c49f30ef42c359dc3c6e35b20565618"],["/lib/font-awesome/css/font-awesome.css","3f1d02605808777d467343c5ec7a390e"],["/lib/font-awesome/css/font-awesome.min.css","84eab8410d410ae1b525399d6aef88a9"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","58ce03cc34dfa121a4469a6828c030b2"],["/lib/jquery_lazyload/CONTRIBUTING.html","6f737d5a575d173f2ca3bf0b5ffe8d30"],["/lib/jquery_lazyload/README.html","ef5926b0403feb49fe704f5fe75502e9"],["/lib/jquery_lazyload/jquery.lazyload.js","5a694a352fb5c48e346d3a0f7414b181"],["/lib/jquery_lazyload/jquery.scrollstop.js","fa4376b64f43f6454e1022067361e8be"],["/lib/needsharebutton/font-embedded.css","1e569b5ca3268ba63fd0aa9a19324267"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","5f46f06757597a2cbf1eece617064c77"],["/lib/pace/pace-theme-barber-shop.min.css","dff15ac6ca3fb875d82503e811113565"],["/lib/pace/pace-theme-big-counter.min.css","a7da6843b38ead906c83276e474f01df"],["/lib/pace/pace-theme-bounce.min.css","61d52bd3938eaa28c2d648e16a71bbef"],["/lib/pace/pace-theme-center-atom.min.css","2f430dde29ebd06774c4914e7fc410cd"],["/lib/pace/pace-theme-center-circle.min.css","b229f86472551f0462f8f245d89ad46b"],["/lib/pace/pace-theme-center-radar.min.css","10276c6f0a7b45f05aaccc783571dabe"],["/lib/pace/pace-theme-center-simple.min.css","e6402cb9260b1e5553f733c53dc04842"],["/lib/pace/pace-theme-corner-indicator.min.css","901bbc83501671d22d725c86a37c473c"],["/lib/pace/pace-theme-fill-left.min.css","d484609da1d68226ca6d472a7babfba1"],["/lib/pace/pace-theme-flash.min.css","3e597ee1ca86d16606eeab1cfcfd05e1"],["/lib/pace/pace-theme-loading-bar.min.css","e9df8034346f1b61acb7c7bd52c9853d"],["/lib/pace/pace-theme-mac-osx.min.css","e78df5912d2905a9d091ae3f1dfaccb6"],["/lib/pace/pace-theme-minimal.min.css","4ad6fa4b3c5ab9bda49b1367ed385e57"],["/lib/pace/pace.min.js","6a066dd5281c92ccc5b80fbf0679f178"],["/lib/three/canvas_lines.min.js","8ad798f1c84d988178da25775a13d6ff"],["/lib/three/canvas_sphere.min.js","a1ca409f3b716e8175be58e2c03651de"],["/lib/three/three-waves.min.js","52a1a1adef37e600b1d2aed12fa73062"],["/lib/three/three.min.js","c0c817292871bd55d683f9e2d78934db"],["/lib/ua-parser-js/dist/ua-parser.min.js","c400070ca69cf675a9e454bbb0f7dd23"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9f4d3f662fc4622eb81340c3b3c43323"],["/lib/velocity/velocity.js","e3911519592129f4335ff4e13c2093f2"],["/lib/velocity/velocity.min.js","2a11c7d0907c387ab6237c5afb971dad"],["/lib/velocity/velocity.ui.js","8520f58e6995483385efdb10c89aa5c4"],["/lib/velocity/velocity.ui.min.js","091cd4c647c4e7fa7d38404117c1a59a"],["/links/index.html","dbf25e8d15586c46b488cb2936d06df1"],["/movies/index.html","db401b8c2916575e5921e05fcdb20356"],["/page/2/index.html","69ef3e0dc4174a6dafebd52a1861343d"],["/photos/index.html","1cd8fbbd921115501abb4fca6b0f6b39"],["/posts/191ddb73/index.html","bbd3fe5f7956285f1939937ea7085699"],["/posts/2fc77d95/index.html","a737d6d4fc1dd73adb7e469e91101376"],["/posts/2feacaf4/index.html","eeea57f54780e7d45605b7d53e029837"],["/posts/37f2c331/index.html","b7054efa52959742434ac71be08970ee"],["/posts/385f0de9/index.html","aba25407d30102a07a2399db099c20c4"],["/posts/45e51894/index.html","ed752ddec8d8d8779a81c21567194c52"],["/posts/4f1131af/index.html","c5f09819b9e4c7711c1e17cd8ee7d79a"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","1d1488114e43b8dd313bf1593f331516"],["/posts/63556f52/index.html","a91b1a7b8ce5da517bdb3e7b584f7205"],["/posts/6d49ceec/index.html","be83c3bf805f3681c69900073229c5f3"],["/posts/6de7d9db/index.html","2480b0d299857b660c3b42e7b9f7cc55"],["/posts/c311b112/index.html","725699ef6b68168dd735e20e2de137fa"],["/posts/c620d4c2/index.html","3693cc9e25ef4a5801a6b5272419de9e"],["/posts/f8073739/index.html","f31a98dac5e8f2b184e39e5c3fc7b5bb"],["/posts/f97ef43b/index.html","6a58454032e3b507269820b7015c0999"],["/posts/fa84d5fc/index.html","c1c6e493bdeb90c22d32a97068b855de"],["/sw-register.js","e2a2bcde346f07d943d2fa06e771d3e5"],["/tags/index.html","9138b6772e83db0ee93f0a56686c2884"],["/tags/つぶやき/index.html","4875aa7577022e75232be931997c7093"],["/tags/インターネット/index.html","66679740e86495a2c14a2d318407c5f5"],["/tags/チョコレート/index.html","3e3df6510ac8134e40f9d5414f7e1109"],["/tags/中国に関する新聞記事/index.html","2d46fcdeb94dbc92eaa5a41f77c614a7"],["/tags/乳製品/index.html","2d527f89e53b5475c9f8c07506d66645"],["/tags/労働者保護法律/index.html","52c0e643f975c9769c784ff4e40cdd8a"],["/tags/日本のIT教育/index.html","b4d07858dd435ad68810bb275f2da94c"],["/tags/日本のIT現場/index.html","6483f5d174ec1812f99625346b92dbc9"],["/tags/日本のビジネスマーナ/index.html","6c4c9a2a0b18b0a2860ea2495983c28f"],["/tags/日本の国内の人権状況/index.html","52620f2556c70fb91713545df3a56d6a"],["/tags/食べ物文化/index.html","1147145ceab5e025b237ed4904a1a365"]];
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
