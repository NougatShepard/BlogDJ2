/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","ab9fa194fbfd1defc235a72a2618aeff"],["/about/index.html","49b27513dd2e67c1f8993584fb9c8f08"],["/archives/2019/04/index.html","c3aa0efffbb2ca5fbb3f99e0750e2fd4"],["/archives/2019/05/index.html","acdb569ea747e8216a4e5a0cdea08775"],["/archives/2019/05/page/2/index.html","3b093df7f60f09aa4a9a2b44ace0b43f"],["/archives/2019/index.html","ed23f809de263f387983c4c6703525fe"],["/archives/2019/page/2/index.html","a0b31488584f1a4583f41821aed5bdf2"],["/archives/index.html","f6d42a8c2e2549c7206dd65fd5180071"],["/archives/page/2/index.html","3d8f3c22f3163b3de42a2ea4cccb18c6"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","f4e9c093f2e9f29d9db07e099d622f92"],["/categories/index.html","1bbe29d4c9c7c7a2f84ef46f1e3dfa77"],["/categories/つぶやき/index.html","1129b5aed6182ea14ef065edad4211a0"],["/categories/インターネット/index.html","1ff2b21f7647788c9a607bcedebec219"],["/categories/中国に関する新聞記事/index.html","c5deb88791798b09fe356b5709e2bb18"],["/categories/労働者保護法律/index.html","f5e2db3bf292d81510c8687e2d72ec45"],["/categories/日本のIT教育/index.html","abe39ebb577dc78cbea6cb087e6b82e8"],["/categories/日本のIT現場/index.html","f20b9210bbc801bb00c5625e41a8f034"],["/categories/日本のビジネスマーナ/index.html","37bf2a187f6e58bbc8167ac3a5e54726"],["/categories/日本の国内の人権状況/index.html","900e338a505c54a9f55801db6809b277"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","d05dfd6c69856b6c2b58b4b03fbb44f4"],["/categories/食べ物文化/index.html","32e1a90d4d99e489311113d4ee798678"],["/css/main.css","7bd7e3fad6c65d52ec6ba06142fe767a"],["/games/index.html","d40d4909554ac1384422b2fff67d83c5"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","915f5cc792ac79d8b8d64194ff92c427"],["/js/src/affix.js","1a3c29576df03508372d53315e0bff62"],["/js/src/algolia-search.js","e242315a501739211bdaf4b3785c6c2d"],["/js/src/bootstrap.js","e452ace8800f295ee49f931c36003fcd"],["/js/src/china.js","7edf5a8b5d0cf812482f4cf2b623c0b8"],["/js/src/echarts.min.js","8ad5c867a06ffda11e215a980cb45db7"],["/js/src/exturl.js","c4098c8a11b3b755d93e41bd909f3901"],["/js/src/footprint.js","d8c533ea58d74d65560b0d35841a7811"],["/js/src/hook-duoshuo.js","77ddf03dd136ceab937024b7f6aed87b"],["/js/src/instantclick.min.js","d3e10792f0cbe40ce84c7d9f528b5984"],["/js/src/js.cookie.js","7bffdf361de340a9634f70f796fd0b82"],["/js/src/motion.js","db110389983f940c101e59b8aafcff11"],["/js/src/post-details.js","ef387d352d759f89bcecc36f9d61082a"],["/js/src/schemes/pisces.js","a3cfbbc6ba42305f9ba3ea598ce00a7e"],["/js/src/scroll-cookie.js","6cd579129be92219f64950c1ad41d5af"],["/js/src/scrollspy.js","b99c2d28b2a859ef7e4a3730e4107b6e"],["/js/src/utils.js","387ad760c6641629c18351b7108cbf36"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","4dad9aacaccf612d79d6d79ab5f11954"],["/lib/Han/dist/han.js","b3192795d050975017737874f9c8fbbc"],["/lib/Han/dist/han.min.css","c4ac2086393997b91d3c03bc7faf47d5"],["/lib/Han/dist/han.min.js","fa69aff45d217a1e7d1a7276b3d85e84"],["/lib/algolia-instant-search/instantsearch.min.css","746efa0c52d8b17ba27fc98fafebf346"],["/lib/algolia-instant-search/instantsearch.min.js","c53f4443a8774b2326f40f0c385bff44"],["/lib/canvas-nest/canvas-nest.min.js","7d8162c01142968cb49a31802bde8797"],["/lib/canvas-ribbon/canvas-ribbon.js","d8537b4aaf7bc743d65d8f49ddc7cc82"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","897a8455e098ce7bfb3cbf53e6a8a79f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e3f3c8183909627226b12962404ee03c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2f0cdf6f4388b3b9ac2a3d7a42ec962e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","6a8b04abe897623eb35c0e3e5978f2e4"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4130a5820c039b03d11eb1896987b124"],["/lib/fancybox/source/jquery.fancybox.css","dcae37650fb9d2fbd48ceaadf218ef1e"],["/lib/fancybox/source/jquery.fancybox.js","e47b48f3d12052b86a89c14758e4930d"],["/lib/fancybox/source/jquery.fancybox.pack.js","75e69e3b2efc2c0067c502637fed438c"],["/lib/fastclick/README.html","8e9299f8c11cc4ff66045a93f2e97a62"],["/lib/fastclick/lib/fastclick.js","e60c5ec43801c529c6a3bd3fa1cb493a"],["/lib/fastclick/lib/fastclick.min.js","2035dd93fc7810552555257cd5cce4b0"],["/lib/font-awesome/css/font-awesome.css","0954edc277c3ab2c96e942dcf764feec"],["/lib/font-awesome/css/font-awesome.min.css","74ec1a2d6b74c9aa207e2f009a8b7e03"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","30dd5f3e750dcd05bc4fc037e7b36279"],["/lib/jquery_lazyload/CONTRIBUTING.html","16855ab852bfcef061bbf9cf02744197"],["/lib/jquery_lazyload/README.html","9e04fbafca2eef746a7456cdd8b78f69"],["/lib/jquery_lazyload/jquery.lazyload.js","695b96eddd041b3babbacaba41270c3f"],["/lib/jquery_lazyload/jquery.scrollstop.js","56a9aa8307f1394140f4c4fbf2c740f4"],["/lib/needsharebutton/font-embedded.css","e228343d0085d38c7062f1a183ec9e58"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","07b82823a7d34ff765cc9c89577db95a"],["/lib/pace/pace-theme-barber-shop.min.css","007c6fa95527d120876b303b43a9850e"],["/lib/pace/pace-theme-big-counter.min.css","4afe32f14d3a553aaf765259bb2dd822"],["/lib/pace/pace-theme-bounce.min.css","94c1f51d3ea0d936512d07a273ee20ac"],["/lib/pace/pace-theme-center-atom.min.css","95eeb745b97824ff7a82a89d01a2010d"],["/lib/pace/pace-theme-center-circle.min.css","da44bd5d99e9686f7ea2307b622a7842"],["/lib/pace/pace-theme-center-radar.min.css","aa07da978d76b8a23263f867dcbcb9c7"],["/lib/pace/pace-theme-center-simple.min.css","b5b383732ff60908daba4b282cd749f8"],["/lib/pace/pace-theme-corner-indicator.min.css","df1a960d8f555094b73580fc247297e9"],["/lib/pace/pace-theme-fill-left.min.css","ccefcde92233e0a781caf0acdba43b0b"],["/lib/pace/pace-theme-flash.min.css","90c7307d42176488366c12960af2e252"],["/lib/pace/pace-theme-loading-bar.min.css","ea05314ec35017793be2adc078108415"],["/lib/pace/pace-theme-mac-osx.min.css","f98c6538a565b5bf96be74473b568bba"],["/lib/pace/pace-theme-minimal.min.css","a8d4cbd1a89e75e9a2a74f0743d2a21f"],["/lib/pace/pace.min.js","bfebf9dbd770ba33559fd8ff63ac20e8"],["/lib/three/canvas_lines.min.js","2ced4b8f81f47677fba9d8e888d37589"],["/lib/three/canvas_sphere.min.js","bf148b532c14bf1cdc7ab3efe67be926"],["/lib/three/three-waves.min.js","28fac4d811a28b66fc4668ef4480c234"],["/lib/three/three.min.js","0378b1f2c7eff2485a7a03c25bcc02b9"],["/lib/ua-parser-js/dist/ua-parser.min.js","a3c1d905fe33f42f990768665f8608aa"],["/lib/ua-parser-js/dist/ua-parser.pack.js","910dad012adc43ac34eeec26d205c4ad"],["/lib/velocity/velocity.js","ecc117813a92229de44d1e3116349043"],["/lib/velocity/velocity.min.js","5210c23096a2eea898b0b015dc79bb84"],["/lib/velocity/velocity.ui.js","49da37620d13e9aca05a66c2876bd7b6"],["/lib/velocity/velocity.ui.min.js","6bab950e9811b28df6d1a4efb26a4d44"],["/links/index.html","c310a642f4d1255bdde6e680919b975f"],["/movies/index.html","e86cef521bfcd04755ea766c343c0e06"],["/page/2/index.html","b92389d0cce2db23383d6edc259fa7c5"],["/photos/index.html","b1db27e384ddd01074dbf92aa26b32ed"],["/posts/191ddb73/index.html","765ff7102df6ac14b9c5848a93317d18"],["/posts/1a195976/index.html","e37e96b9d1816efc69a1585f06aeb225"],["/posts/2fc77d95/index.html","d055c63131600dac88136f92485d64eb"],["/posts/2feacaf4/index.html","c5bce5e3f17e3c12617a851adb307b79"],["/posts/37f2c331/index.html","96571c841c40d005ae57a28931acb6e4"],["/posts/385f0de9/index.html","b919cd6ed56d0b7ab24877c646885c04"],["/posts/45e51894/index.html","73f2ac237a4ed168a804fbe4a19a569d"],["/posts/4f1131af/index.html","c69443a5f900d42d6010bf947a7f4692"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","c22e7acdbe5c5e314f82323b1c4299da"],["/posts/63556f52/index.html","c05321cc1ae1fd9a2d8aa8391a8caa0c"],["/posts/6d49ceec/index.html","d4815401309bfbf4f7bb27dff68fc180"],["/posts/6de7d9db/index.html","71fa8475b9576fa86312f812338420ac"],["/posts/c311b112/index.html","2144846f839bf394ea82d95b49e8e11c"],["/posts/c620d4c2/index.html","ec5dd737604f6d0600e7da9c638c44d3"],["/posts/f8073739/index.html","c61580240cd61e11e8923293f10b2b04"],["/posts/f97ef43b/index.html","57193a32549920841a03851bba02ed33"],["/posts/fa84d5fc/index.html","6a0a979639c532d208cd53d59547d9bf"],["/sw-register.js","e93619da20d3f074ffb94dad649b76f8"],["/tags/index.html","1bcdbccfe03a7bf46276fcfc7bf9bad6"],["/tags/つぶやき/index.html","ae560f4a4799c20313ba393d61967aa3"],["/tags/インターネット/index.html","6f7812a8597ab9201826f18f38752c8c"],["/tags/チョコレート/index.html","445415c67d41607b0fce80bc2d12f157"],["/tags/中国に関する新聞記事/index.html","a4f0c6fe7d3f61bf5a85f05d6c365b98"],["/tags/乳製品/index.html","13d7e21d9d48016c53aa77085f2fe374"],["/tags/労働者保護法律/index.html","f49ed101a87296c108534f9f4a9e07c4"],["/tags/日本のIT教育/index.html","0299fd8ecc8bf0921b17a8dc8566f67e"],["/tags/日本のIT現場/index.html","d1f81d38a7e2238c62ed4fdeed1b40dc"],["/tags/日本のビジネスマーナ/index.html","d91725a6d51d18fd82fac2e56f1bb838"],["/tags/日本の国内の人権状況/index.html","bcc24502e06704d5c1ae6c5e9fafed3a"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","195d2173044f30182bf9a5f36d113431"],["/tags/食べ物文化/index.html","daa911d301479723b773ce6872681516"]];
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
