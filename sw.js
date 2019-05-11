/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","84c9db5b48ec5598b0bc4d430d7cd062"],["/about/index.html","cc1d3944539616adab543a9b773b60c6"],["/archives/2019/04/index.html","0e3d375386c1bd2e301c5dea07858cdd"],["/archives/2019/05/index.html","11ff44ba55b705a7567b74f1ca05fe37"],["/archives/2019/05/page/2/index.html","bb21418fac0f29ce5834e3fbb7c020b5"],["/archives/2019/index.html","0f633efadb8a9973aaa171b5f0f88ac0"],["/archives/2019/page/2/index.html","a7354d961a9ea940d815ed25313eb08e"],["/archives/index.html","806552babbfea142aa8a9bdf1df58b6b"],["/archives/page/2/index.html","deb9ed0f7da5c9ef3c69a0acf24135fe"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","4a1eb5ae698e9c7caa23ae7ae01d6e6f"],["/categories/index.html","9b9ce025367b182e26e1ab5a8d2a3271"],["/categories/つぶやき/index.html","7be6798166cc31e523074b6949977c42"],["/categories/インターネット/index.html","5693b776b2d20c533a38820af49326ea"],["/categories/中国に関する新聞記事/index.html","ae88e87c96d1eab46d3dc9b56b3f3b11"],["/categories/労働者保護法律/index.html","54f96ab11e373f829c15fe1c615bfa3f"],["/categories/日本のIT教育/index.html","43a633ee6f8a97fbaab6052a60ad6a08"],["/categories/日本のIT現場/index.html","be66cfa81c26487a1d64bd2d47f4a315"],["/categories/日本のビジネスマーナ/index.html","9e60df3a455386e697080c78e59aef37"],["/categories/日本の国内の人権状況/index.html","e9468ff02ee8a640463977fec2e7b728"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","3f11ed89488a2c4c2b0a019d88c3bddb"],["/categories/食べ物文化/index.html","afc34860a663b89e211625fac293e6e3"],["/css/main.css","670ae0b4e1ceac264c959151530b2cac"],["/games/index.html","459841b1c41f6b85dfc3877794e17797"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","216818e581bf4c4f1dd09e29ad71c3df"],["/js/src/affix.js","2b0bf6a7cd30c9ab1acc37fd4c37090d"],["/js/src/algolia-search.js","48753f7fe7afdb389a0113a8639f6e60"],["/js/src/bootstrap.js","4d910a8d4575ec9b17090b1ccec2119b"],["/js/src/china.js","28602c4dd109cfc5fd7249c9e87c3bc3"],["/js/src/echarts.min.js","08be1d16da48ac052a272c7611ab2921"],["/js/src/exturl.js","e64e8b9ee8bab2387bc33cb6d0b23592"],["/js/src/footprint.js","370e7b6cf404f1eba5328fc5eb43b289"],["/js/src/hook-duoshuo.js","9a34b33c813d4629980263aeeb5ae75e"],["/js/src/instantclick.min.js","c0f60b337fef773bd2c85c6a0626a71b"],["/js/src/js.cookie.js","0f881e51d40a7f01a1937dbd41c3c265"],["/js/src/motion.js","7db4a3ea5a5505cf59938b3766b7a8c8"],["/js/src/post-details.js","1717ea6640d2e44fab362bb03dac07b9"],["/js/src/schemes/pisces.js","c45e4db6e0dfa7fda3f05b06bc94600c"],["/js/src/scroll-cookie.js","a1d3d2375fecf8770dd93e09dac93917"],["/js/src/scrollspy.js","348fe957591f3e49cdece5d3e9ed4d68"],["/js/src/utils.js","22cbcbc3b51c9375bdc90ba17ccb8fc4"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7e6640d5143092cd727f3b499410f476"],["/lib/Han/dist/han.js","e30a6cc50ecea5d152ce8a5c3c80edf7"],["/lib/Han/dist/han.min.css","0c562637151e7a07e3ef7ee946f508db"],["/lib/Han/dist/han.min.js","b44a83f8a6465b4785477cd45552c6d7"],["/lib/algolia-instant-search/instantsearch.min.css","ab4894ec5a009d4f5449544786192282"],["/lib/algolia-instant-search/instantsearch.min.js","75565ba57b3674afdad6ec1da9413d71"],["/lib/canvas-nest/canvas-nest.min.js","fbaab1eb674d2281c1c5d90eed4240ae"],["/lib/canvas-ribbon/canvas-ribbon.js","66be0c3963cc661bc754976951d7abf0"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","80977f15e05e1b2167a7c1b502bf91fa"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","15c3c8e086803ac7b82de082555bfcc7"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a80db3c5a5ac803bcd084535f4ca8eb8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","15c883d0f8267cac4e039fbdd18a1ce4"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fd1a80982d02f96973c20859f3756e0d"],["/lib/fancybox/source/jquery.fancybox.css","3b561f64713079a6473ed6142fc0b26a"],["/lib/fancybox/source/jquery.fancybox.js","ddaac8591f657f5a22806c09aa732f7b"],["/lib/fancybox/source/jquery.fancybox.pack.js","551f3f379a52c9bbaceb8bb9253df83c"],["/lib/fastclick/README.html","bbb01fb542e6a92df80d1c87e71b0128"],["/lib/fastclick/lib/fastclick.js","ce702f5702377255799bd3e4b41f772f"],["/lib/fastclick/lib/fastclick.min.js","83f74aea1924705682d1d5e9671d7f44"],["/lib/font-awesome/css/font-awesome.css","163f0efab7221404e50e970c3e4a6730"],["/lib/font-awesome/css/font-awesome.min.css","078616ec71e2647dd82e366df6ec9e0a"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","9fc6b386349d31c885fdedd4d68728ac"],["/lib/jquery_lazyload/CONTRIBUTING.html","88c5f47ff64bdeee237dd140319bbd63"],["/lib/jquery_lazyload/README.html","5db034a6e93843be43988ee3af07bb68"],["/lib/jquery_lazyload/jquery.lazyload.js","5912deb790d5e05933cc5e8a78476e36"],["/lib/jquery_lazyload/jquery.scrollstop.js","4f24bb240df1c46d45a81431f639cc7f"],["/lib/needsharebutton/font-embedded.css","cd161e4e623506dc05d4e84193f17764"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","c3f9c68aab5daa3e365c8bf302c67a18"],["/lib/pace/pace-theme-barber-shop.min.css","72ad0269f09a15fc176c7c76951b1b81"],["/lib/pace/pace-theme-big-counter.min.css","ae119da8a39b4249c816d7008bb03d7d"],["/lib/pace/pace-theme-bounce.min.css","801107c103148503d87daac4563dbdd4"],["/lib/pace/pace-theme-center-atom.min.css","9f9b225c863235c905ed439be5c5804d"],["/lib/pace/pace-theme-center-circle.min.css","789145dbe63f5323166c4eaec054e24c"],["/lib/pace/pace-theme-center-radar.min.css","bd9013b0189290422ade4673e9725b49"],["/lib/pace/pace-theme-center-simple.min.css","6e2c306365a50e7655beaab7bf5592b3"],["/lib/pace/pace-theme-corner-indicator.min.css","422375b207f38ef614cdeb471495f0ba"],["/lib/pace/pace-theme-fill-left.min.css","ce8ee293b8555c5f07294250bf8aac2a"],["/lib/pace/pace-theme-flash.min.css","ec9ba26eba4d54c19ae1c99be5589d74"],["/lib/pace/pace-theme-loading-bar.min.css","f14c87c5e203a57d1b202b9f43d6a095"],["/lib/pace/pace-theme-mac-osx.min.css","33ada69c548b28ad58d770464ff6f448"],["/lib/pace/pace-theme-minimal.min.css","42f474bba492f0433cacf4e54121a600"],["/lib/pace/pace.min.js","71d402b09089fb5f66d837b9020611d1"],["/lib/three/canvas_lines.min.js","3e9a3ea4d24a939111f9037934db6293"],["/lib/three/canvas_sphere.min.js","eaed1033f0066b203f87aeb4d964ed33"],["/lib/three/three-waves.min.js","d400ea8d4fdc2c04d9b24aa084201dfa"],["/lib/three/three.min.js","73b82f089760604d78406042b9cbdaa8"],["/lib/ua-parser-js/dist/ua-parser.min.js","6044e40b258ab66ab1244808537c1284"],["/lib/ua-parser-js/dist/ua-parser.pack.js","79700ace9c3801bf24471bdf1f815e91"],["/lib/velocity/velocity.js","da54994e49a017c1d81e0c28cd6323b6"],["/lib/velocity/velocity.min.js","88078668fe6553b827d71a07e1ea8fa4"],["/lib/velocity/velocity.ui.js","499f109e02b0af56aa40e2139946e377"],["/lib/velocity/velocity.ui.min.js","ca6df9d247a01eca667ff6fbac19599c"],["/links/index.html","78799f006b2c69da014e62d2c8ebc949"],["/movies/index.html","2e12e985475eb803aa70d593f4f002b3"],["/page/2/index.html","19cc0801fa63d29fcf57b11bc27e237e"],["/photos/index.html","f32ee58308c9c4344a25d9ee4f5fc058"],["/posts/191ddb73/index.html","87085136c28bc452d28803d02106cd51"],["/posts/1a195976/index.html","8f7f97fc9a5f5a6639b91f485962f430"],["/posts/2fc77d95/index.html","2538f5b325765778020a229f41ec8e83"],["/posts/2feacaf4/index.html","f7c786dbd7782b6171ad1ba6fa7cef01"],["/posts/37f2c331/index.html","4c2b29ac92469329f0a09658f07fd770"],["/posts/385f0de9/index.html","1eec23b819ca30a8a2a0749a6d5f775c"],["/posts/45e51894/index.html","58f2ccff187b37dfd00373c1d6a90f3f"],["/posts/4f1131af/index.html","59d0a10c881d79fdee4263e1aad1d45d"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","2e3a32e55c41d086ed01452d7d60e955"],["/posts/63556f52/index.html","77be1837d97efc2092f90b2d21fb9c35"],["/posts/6d49ceec/index.html","21298ceb86953596f1ee8c5fbcbda10a"],["/posts/6de7d9db/index.html","29b6ccea34ca8473886cab0b64f22b83"],["/posts/c311b112/index.html","dc186b26febfcac508a8d3b573faa17c"],["/posts/c620d4c2/index.html","c7727159cf418c853758e520f367fceb"],["/posts/f8073739/index.html","586a015768d7fd5aa30ca5d514081ae7"],["/posts/f97ef43b/index.html","ab2d9e53db4284a714be63cd8a733b57"],["/posts/fa84d5fc/index.html","a7db0b4b515a75856fb721485524dd26"],["/sw-register.js","cc4ed370c7bf31b24d8cf10bd25186aa"],["/tags/index.html","9458e5f072514bc97336f75bb9acea7f"],["/tags/つぶやき/index.html","2e3f89d98ca20d3fb14af304999408ec"],["/tags/インターネット/index.html","8ebbcac10b518e9d818a4c052acaaf44"],["/tags/チョコレート/index.html","fef69700673775fd5142d9a5380a9b6c"],["/tags/中国に関する新聞記事/index.html","145e28f194a18192e18c8ba732313db8"],["/tags/乳製品/index.html","1b23d46665e3a87145e900c62823221b"],["/tags/労働者保護法律/index.html","8bdc12309e1ac7c6291fcad0a8604a38"],["/tags/日本のIT教育/index.html","9938a3bc8af0556ce891632aa0c03820"],["/tags/日本のIT現場/index.html","9717268babac61091c17771945f98c8a"],["/tags/日本のビジネスマーナ/index.html","e4331bd107e2c1284fec5d3d6337bbfa"],["/tags/日本の国内の人権状況/index.html","6941df4ccc189a71800a956b2eaa157b"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","37b3d0f02e217fc48f0a4808753f0bb7"],["/tags/食べ物文化/index.html","60b4d4385793cf5a986ab8b58c62e502"]];
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
