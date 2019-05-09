/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","d1857948357d5fc7068322dd831bad18"],["/about/index.html","c84f64a0bd1b851570fb5a6eaa9778ea"],["/archives/2019/04/index.html","f673a8b8afecfb76f52e67dd93db107a"],["/archives/2019/05/index.html","9d46efdf0eff54c97a2a7e597c61ece6"],["/archives/2019/05/page/2/index.html","a1b43c2e002f9880b4f90beaa1785ae9"],["/archives/2019/index.html","4f34fe55fd5d45c06d8172d4a2eaf84d"],["/archives/2019/page/2/index.html","f789c2a7c29d5798aebbff91e471b632"],["/archives/index.html","b719383ddf44115e92f306e79991d256"],["/archives/page/2/index.html","a7a71469b152ca451af37c0232e6ef24"],["/books/index.html","8355f49f350943451883991c0dc96cb6"],["/categories/index.html","3a1b633a74c527ff1d5004eafdab0a61"],["/categories/つぶやき/index.html","4bf69ae9448484fe2dd602215cc971f3"],["/categories/インターネット/index.html","66b9e0cae803325cdd5b75e362c6f5f5"],["/categories/中国に関する新聞記事/index.html","daef7475cbaf1e48899ca38f1f2e4164"],["/categories/労働者保護法律/index.html","fbf3845b1460a455c6a14968ee0ea595"],["/categories/日本のIT教育/index.html","8f76dfc3ab920c5c8a01b60141a9f2fd"],["/categories/日本のIT現場/index.html","e2897c6cfd2c2a8ba7c54e0e17085fc7"],["/categories/日本のビジネスマーナ/index.html","b679f098f0634b6fc0b931e8d3b5a0f9"],["/categories/日本の国内の人権状況/index.html","05a0dcc077dcb8240df6d93cc53017d6"],["/categories/食べ物文化/index.html","5f089bef504b97c27deccd94127c935a"],["/css/main.css","4fc5d7285d7e82a99ab2f65f6563e530"],["/games/index.html","24159be9c3e3ae3f0d06cdd7689d75ec"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","5efabf97fac84699d782d18cda4339ff"],["/js/src/affix.js","91976677fed28aa94af6f664b5397d4b"],["/js/src/algolia-search.js","268201ea91e59032107fd2edac421452"],["/js/src/bootstrap.js","a38e86e8c572f4672fc5a658802424c7"],["/js/src/china.js","a02ba579b582658a99fcc2aa11e90537"],["/js/src/echarts.min.js","892758fc97436e05418580e8a891f0fa"],["/js/src/exturl.js","4c760a1d215c0cd78ba19f042af73813"],["/js/src/footprint.js","8c98ebaa72f2cda45d832b8ac8568caa"],["/js/src/hook-duoshuo.js","4930db660fa664fed26cd911b6cc04ba"],["/js/src/instantclick.min.js","8f7e080233c090083315cf00be89d1e2"],["/js/src/js.cookie.js","a2d9a8013bd028791c4e0711bd88285e"],["/js/src/motion.js","aff414bbda3feeca67d1eefd97beeb08"],["/js/src/post-details.js","9914c591798371f07a7b57ce443ec0ad"],["/js/src/schemes/pisces.js","96ba629f306e13c3644f889a1c818ccd"],["/js/src/scroll-cookie.js","8f88c180e2c658df93546b1c0ac39ea9"],["/js/src/scrollspy.js","91c5c1154f2930101118faeae27122a8"],["/js/src/utils.js","768502d232e1c48eaf0a574ebd554a12"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","453d0775ca3d8d7efa9f1e6cd68957d7"],["/lib/Han/dist/han.js","d5564f81075c90649466f02f87127ca4"],["/lib/Han/dist/han.min.css","067b5eae895e39027d590ac7c0dff183"],["/lib/Han/dist/han.min.js","568717347f386abbbb5e91b555b10c25"],["/lib/algolia-instant-search/instantsearch.min.css","0098b45eb243d9ac450d974f829589cc"],["/lib/algolia-instant-search/instantsearch.min.js","dd7687575710c919d39515173c5eef51"],["/lib/canvas-nest/canvas-nest.min.js","e9396f2105ce848cdf808628bce180dd"],["/lib/canvas-ribbon/canvas-ribbon.js","6c66d8fdc1a44a8f218af8eec0595731"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d927793cd6d2419841c10cc161c79fb1"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f24d31e3fc3ed71e9e04b79a41172a30"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7866b97c057d0f1769c0631e7c368a92"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5c70f8c4d9cfeefe54434fb2d60aaf57"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","da57165379f1c53130f18434877a93e4"],["/lib/fancybox/source/jquery.fancybox.css","5d4a16bcc590d9104c5aebb3f2eac440"],["/lib/fancybox/source/jquery.fancybox.js","fff0e05f8b7178195a228bdae816d910"],["/lib/fancybox/source/jquery.fancybox.pack.js","03a310c9af66d1f003c8f117e5b265ad"],["/lib/fastclick/README.html","19e5a3e906de31b39cdf7302bd0aad31"],["/lib/fastclick/lib/fastclick.js","a19f59ea2d4bce0bbabfdc1bcefa2634"],["/lib/fastclick/lib/fastclick.min.js","3a83df276304f3a0e5f58773132f3655"],["/lib/font-awesome/css/font-awesome.css","ee04561cbd6e04a1fc6ac1c09a97de96"],["/lib/font-awesome/css/font-awesome.min.css","ee04561cbd6e04a1fc6ac1c09a97de96"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","ac187fc613c2a115dffd18a3c25384ae"],["/lib/jquery_lazyload/CONTRIBUTING.html","551e42f4fa36c7b09cfa5910316800e9"],["/lib/jquery_lazyload/README.html","9a638ee539280d96b17565bdef7f28ae"],["/lib/jquery_lazyload/jquery.lazyload.js","93c79bf6f3ff03c6576b6435d7c5df98"],["/lib/jquery_lazyload/jquery.scrollstop.js","a7275d81a15a1dd991732b6f1d7e7842"],["/lib/needsharebutton/font-embedded.css","5f869dc8153ed7f872b5434f1608bc53"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","39d4c25ba460008b5ddc454da6787a2c"],["/lib/pace/pace-theme-barber-shop.min.css","7ffcc97eb98b854b979e3d41e9048f92"],["/lib/pace/pace-theme-big-counter.min.css","be03e59788263a423a794bf1a6069f11"],["/lib/pace/pace-theme-bounce.min.css","9fad1ab7f422c52b1a7999d14bebd1fa"],["/lib/pace/pace-theme-center-atom.min.css","cac76c20ea3ffc3845834e70a4fb2f17"],["/lib/pace/pace-theme-center-circle.min.css","8adfc471e36fcd0336d897eb09755112"],["/lib/pace/pace-theme-center-radar.min.css","18c3afb9c3330f63260fcdd04010351a"],["/lib/pace/pace-theme-center-simple.min.css","ed479b5d534511a590e9fb980eb21a97"],["/lib/pace/pace-theme-corner-indicator.min.css","a839045e328d3764eaebfbbf06a26e97"],["/lib/pace/pace-theme-fill-left.min.css","ac42918aca2e9e14b707c2b913eaa9e8"],["/lib/pace/pace-theme-flash.min.css","35b600888eee67c3570c1617682268e6"],["/lib/pace/pace-theme-loading-bar.min.css","abcb98f8ec16212c087e851b63d300d9"],["/lib/pace/pace-theme-mac-osx.min.css","245410ff49300a6174dce78efedefcb4"],["/lib/pace/pace-theme-minimal.min.css","f92ea5e90e7b348b19cb368ae8c50160"],["/lib/pace/pace.min.js","fc49eccacbd94a731c2a04cdcdf74c57"],["/lib/three/canvas_lines.min.js","76bec26e9c7e695ad2b687e089d0a3a5"],["/lib/three/canvas_sphere.min.js","57309b09c2046134c783facdb21451ea"],["/lib/three/three-waves.min.js","6bf85e0b75dc58db0982ac3b6630eaf0"],["/lib/three/three.min.js","e1249aa521b13dd9a1d3f6032a679d83"],["/lib/ua-parser-js/dist/ua-parser.min.js","9360982f0209e514125ccf8986616098"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b003db02e388ed7ac6254b52a2bdebff"],["/lib/velocity/velocity.js","e542c8725636f0fe86798a504814d84a"],["/lib/velocity/velocity.min.js","3f637efb30043d6c609128c14666f520"],["/lib/velocity/velocity.ui.js","19435d702cd3381b2dc18d05463c3dea"],["/lib/velocity/velocity.ui.min.js","90c68277d1af5e527737e16487b03e38"],["/links/index.html","f52105db39445fab88240a2f8873ad7a"],["/movies/index.html","08cb70063912c580f921ce51d0a888da"],["/page/2/index.html","906891f02746622a3d77c996295f27fd"],["/photos/index.html","d7c34349785dac2c8106df3276c82667"],["/posts/191ddb73/index.html","26d202f7f025d1bd7b471e74bd4ee54c"],["/posts/2fc77d95/index.html","928da2fc53ae92eb3236311da1530aa9"],["/posts/2feacaf4/index.html","f573ba57c9c4e6e7a828ff562026cac8"],["/posts/37f2c331/index.html","ae33f231caf08740ebb63d7f512ce755"],["/posts/385f0de9/index.html","6a6b1ee9311730b1e16ef976f5da5962"],["/posts/45e51894/index.html","fe92753f2530ebf3be7e09397b15c7ac"],["/posts/4f1131af/index.html","6abaf0867e96a65dc192284027a72402"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","7e66f01403b8ba4d1c3eaa0eed2ad1b5"],["/posts/63556f52/index.html","2e37ec03fd16f7170b13544156012716"],["/posts/6d49ceec/index.html","ba163e5031f7a75d2064d449c3d73c17"],["/posts/6de7d9db/index.html","e76dbd0f21c4453a82e2674fd93a8bd0"],["/posts/c311b112/index.html","12a042c5b1d280128000808b394db2bf"],["/posts/c620d4c2/index.html","ad8c497d797743a940e5dd5ba61b17f1"],["/posts/f8073739/index.html","cbb75bedc2bf30693f082e440ae625f8"],["/posts/f97ef43b/index.html","0a71ac3994323bf378e71be9abdd689c"],["/posts/fa84d5fc/index.html","072f17d6d7dfc1519ad216021176a5fd"],["/sw-register.js","aafb205393226238a8bc54c141cd93e5"],["/tags/index.html","7197adead968aa939b737c3cf8b09a6d"],["/tags/つぶやき/index.html","d52c269dcaa3341c2a0426ae0cc80b7b"],["/tags/インターネット/index.html","bf994524c3b608008f166f475e14bc48"],["/tags/チョコレート/index.html","915f912b63a542c2bf0f548bb9f282ca"],["/tags/中国に関する新聞記事/index.html","97f5542f5d00aa2efe86eef1d0d7d0d4"],["/tags/乳製品/index.html","3023e4170ec95072edf72536065dc671"],["/tags/労働者保護法律/index.html","6aa03810d77c5ca5957455c247d84aba"],["/tags/日本のIT教育/index.html","33bcfddf60097623de6474ac88f31b23"],["/tags/日本のIT現場/index.html","21dad6a6286524634e076d3949b853ba"],["/tags/日本のビジネスマーナ/index.html","30b89943735ba8641c08c7a3b7adbc93"],["/tags/日本の国内の人権状況/index.html","3ad9310f278ff397903abd619b027b55"],["/tags/食べ物文化/index.html","c9bc929e26936985b605e3c4e5573fa5"]];
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
