/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","06b748e4a0f8cdf854f276aca5dcb6e3"],["/about/index.html","0f6d68e74064d038dbb1c840a5992cb6"],["/archives/2019/04/index.html","5c9ad3488ddd186807c8a4a068155d0f"],["/archives/2019/05/index.html","1f472b83ace9e763776b94f042384351"],["/archives/2019/05/page/2/index.html","1cc933ccc94845006f2707c824166d2f"],["/archives/2019/index.html","fda2f9865ba341229f3f26ace7db48cf"],["/archives/2019/page/2/index.html","84bdf9f8436b77b8426720f7f2ef5191"],["/archives/index.html","0eab51b3eca03ce5ed9a737b0622a27a"],["/archives/page/2/index.html","66b1345a71c8393e2955de751b0353bd"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","5e37bee9dcb508cc4aa7d5430208b95f"],["/categories/index.html","3bb31d2deb9e57acbc1100c725be36e2"],["/categories/つぶやき/index.html","4d0b05107661318928280b3535731824"],["/categories/インターネット/index.html","b803b69d3e2fc6269439f985623e6d71"],["/categories/中国に関する新聞記事/index.html","e5ef9c84c1a30fe7cda012a5f168f379"],["/categories/労働者保護法律/index.html","234c03a5481820a06f0064cf5a9dee4c"],["/categories/日本のIT教育/index.html","02e4d1bda5feaaea59973614af8499db"],["/categories/日本のIT現場/index.html","5f358fe3e992226ae1f053ee22ff9f0c"],["/categories/日本のビジネスマーナ/index.html","82153ebbe51ba4bef95b5b54c45594ed"],["/categories/日本の国内の人権状況/index.html","47f5e80d064d13e13874e8f38c4a6ae1"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","a7a772f3695ff8668f5b81ae047693df"],["/categories/食べ物文化/index.html","f20c6e3bbb21d0a73e87025fe0f1e874"],["/css/main.css","46820ddd4cf98d4242d00c2c4fe9eeb7"],["/games/index.html","d04f192a21d365aa27a62dad4b0abc39"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8291efe0fbae5f0603f090ce005c692d"],["/js/src/affix.js","f82529ee0839d29b034e70a782500c58"],["/js/src/algolia-search.js","f112533dc183849b4d6bc64b4f326f0b"],["/js/src/bootstrap.js","b580736d054a75846c595631819d675e"],["/js/src/china.js","b8b2e247542f5f800a3d34845d1c19ea"],["/js/src/echarts.min.js","46451993452046a5ac24d835d83ae5ef"],["/js/src/exturl.js","f40f19e18c88af23c0a3f06808ed71fd"],["/js/src/footprint.js","92d8bae15de57b52e8258a46ed024d54"],["/js/src/hook-duoshuo.js","41f87b339ceaad411cc97d7f6c84f174"],["/js/src/instantclick.min.js","01c58c350b2dd30224b1c918a3ad7273"],["/js/src/js.cookie.js","f8e1a4bb45d4f02910a1ece85f11dc25"],["/js/src/motion.js","a5da881310a2dbb669d7877fae696561"],["/js/src/post-details.js","7df742ffc2deef188f67c4d8f74685e6"],["/js/src/schemes/pisces.js","6f961de142735f3b0e57945a40f2f1be"],["/js/src/scroll-cookie.js","223922ed384d3b9a49bcc66088f2d2da"],["/js/src/scrollspy.js","5639fed29906405ddb111ff7b456f498"],["/js/src/utils.js","b344267d7228bb9bd9a4bb31f316c01b"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","95b2835f264c1e57c4c2c2d3e584acf2"],["/lib/Han/dist/han.js","b42aef0cfcb311bb7808c0c7cf776aa5"],["/lib/Han/dist/han.min.css","470990db2fba95aff3691461b37b4368"],["/lib/Han/dist/han.min.js","2cb16d111119d6535062c0f53a259b61"],["/lib/algolia-instant-search/instantsearch.min.css","a5dcd28bf4a275e82840dc7789feb589"],["/lib/algolia-instant-search/instantsearch.min.js","510b748375c5b31de976485926eccf0d"],["/lib/canvas-nest/canvas-nest.min.js","b41c420055ff3fd3dbc9d71c8b47a0d3"],["/lib/canvas-ribbon/canvas-ribbon.js","7d2d3f3eb306ca22dce87e35bac9d03b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1bf2348b554c526a3ca02bda4566d177"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fbe3600d121f7e9eca50181d7778f7d7"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9a85003737796c300ef748dcb0dbc546"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","863d8872308d6b8fbe0bfbb8acd917de"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1c9e2e0cee2e6556aaebdd6d567355e4"],["/lib/fancybox/source/jquery.fancybox.css","2fd8a571ff001c379fcb0613619c5878"],["/lib/fancybox/source/jquery.fancybox.js","029a41e6752951f487714e7bcc2df295"],["/lib/fancybox/source/jquery.fancybox.pack.js","5eb1968f16ac1f33eec20783c2a6c98c"],["/lib/fastclick/README.html","df88f66fcd4c8a48e95b87f75d5a057b"],["/lib/fastclick/lib/fastclick.js","49bfc0b13fc78a9ed86f367cedc7d3ed"],["/lib/fastclick/lib/fastclick.min.js","3905fc868128d213551057bdf342bf84"],["/lib/font-awesome/css/font-awesome.css","d7150ef361f4817d4863c96aea426f2f"],["/lib/font-awesome/css/font-awesome.min.css","c52962845fde4e514a51435e7a401539"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","00ee0cf9abe7bef034178ee5e30990e9"],["/lib/jquery_lazyload/CONTRIBUTING.html","e54cde21d8c8ad0039f36af51f0c5627"],["/lib/jquery_lazyload/README.html","af333de6d0cfc06a778bd3a8fe9f5d1d"],["/lib/jquery_lazyload/jquery.lazyload.js","44e77ddb946b88e2ef8e2780b6853ec1"],["/lib/jquery_lazyload/jquery.scrollstop.js","37394e431a198f51de0c20025c7f77a6"],["/lib/needsharebutton/font-embedded.css","595617b71e4285b8740c3cf6f0d4f866"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","8abda7872b08cffaef082f30335a8121"],["/lib/pace/pace-theme-barber-shop.min.css","dc8df0365a795e9a97d17c4503a3574e"],["/lib/pace/pace-theme-big-counter.min.css","04e60fb1fc6f569d1174d2eda66b4500"],["/lib/pace/pace-theme-bounce.min.css","76c0665b4841a8f61767f0112311a474"],["/lib/pace/pace-theme-center-atom.min.css","ce7deae70fb89bb3bed0cdefc7ac21d5"],["/lib/pace/pace-theme-center-circle.min.css","5b865103b0fca7a28016366f9dbcefd3"],["/lib/pace/pace-theme-center-radar.min.css","4aec4f3ed0b2b8e311ccb548edacda7b"],["/lib/pace/pace-theme-center-simple.min.css","9d35b12c30e329dffa64778c053f12f7"],["/lib/pace/pace-theme-corner-indicator.min.css","e71ce5ee4f334acbfd7f2fae5becbad1"],["/lib/pace/pace-theme-fill-left.min.css","8227e675e15df7fe82a9f1738ff48d5d"],["/lib/pace/pace-theme-flash.min.css","dd0c81fc56e22240f595d0876fe54936"],["/lib/pace/pace-theme-loading-bar.min.css","145874f8a01e02d327ee2f5277945725"],["/lib/pace/pace-theme-mac-osx.min.css","b0d7769118ec94681190d71ddb88d38d"],["/lib/pace/pace-theme-minimal.min.css","243b460f2bc229c1e541e6b7210d0225"],["/lib/pace/pace.min.js","fa6e8fd3e37aba8554175548499931b3"],["/lib/three/canvas_lines.min.js","eb14a87e057d82902bab47b2376d2a05"],["/lib/three/canvas_sphere.min.js","f5cc24fd0292946cef3cd95f3ccf264d"],["/lib/three/three-waves.min.js","af055f48ea81a2832a88dc007ae071e2"],["/lib/three/three.min.js","b355ffa7b545a60ffdff67f5d188ec56"],["/lib/ua-parser-js/dist/ua-parser.min.js","ba55f83b2d6078f063750bc6d544ba1c"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b575e4576e702866ae3be2a22003896"],["/lib/velocity/velocity.js","3208493398c40ff4490d89e82156edff"],["/lib/velocity/velocity.min.js","4a148603c36e27980f661101bf0bee9e"],["/lib/velocity/velocity.ui.js","810e1e35566e8940afb737cd20e12aa1"],["/lib/velocity/velocity.ui.min.js","2aac52e9da3a4b4005e32ca568535f40"],["/links/index.html","609b25aa163b05b5299c2cacad306a44"],["/movies/index.html","a4f33a0eaa69773282dcc67f986a30da"],["/page/2/index.html","325dd1cd99fdb1d468472013ec8be946"],["/photos/index.html","00c1b254ef534315adfcf813a4c7fcb3"],["/posts/191ddb73/index.html","f6ea1eff9e20193abcb9af8b0b32c53a"],["/posts/1a195976/index.html","e188a5e4e7d311dc4ab1a0e170e3327a"],["/posts/2fc77d95/index.html","54fc0b41078e1e774e09a3bf3e8d1e4a"],["/posts/2feacaf4/index.html","c028f061ad3a202731b2c84c69c9f86e"],["/posts/37f2c331/index.html","d9f9b5691bf75d2ba194ae58cde84b6f"],["/posts/385f0de9/index.html","da6863fc61f355b4b64ba96726fdbda8"],["/posts/45e51894/index.html","ba2e075d09b13709bd313ed1ae14d2c3"],["/posts/4f1131af/index.html","25a730411854ea52101ac4b9f21cfa68"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","7a0ae84d3c3771434c15b435ab3a8775"],["/posts/63556f52/index.html","2d909872aaa6a37fe095a6345b07276b"],["/posts/6d49ceec/index.html","5ca4358c27f832f28800b8bbdd297d4c"],["/posts/6de7d9db/index.html","cf139d6afbffa0771a6724f048aae5a6"],["/posts/c311b112/index.html","29d01766cdaf7aace514182d39e94a18"],["/posts/c620d4c2/index.html","2b9212aad748ce6808f2cc6404238bcc"],["/posts/f8073739/index.html","a094da9e7362093b99a94a124055606e"],["/posts/f97ef43b/index.html","355d9385274b2c232c7c11c22dcce5e9"],["/posts/fa84d5fc/index.html","32179199512354aaeb8bcd4c68ae4afb"],["/sw-register.js","2183652fd89139aa9cb0edca24166a8a"],["/tags/index.html","6f964b4e9141544e1d0dda27364a1738"],["/tags/つぶやき/index.html","e602ff0ee1b208e0633df697ee04df93"],["/tags/インターネット/index.html","8571bfbd6f3db30b10512bb218e84e20"],["/tags/チョコレート/index.html","bfd938653f0f359131057075fc9d3b26"],["/tags/中国に関する新聞記事/index.html","81517bf68d76adddb38777558656e0e7"],["/tags/乳製品/index.html","a8668e9893f1a67b0f71f8674f28818c"],["/tags/労働者保護法律/index.html","f05db321329d3691fcc5baa5a44324ac"],["/tags/日本のIT教育/index.html","4f5ce8109e8269f7d06c905ca7b1c929"],["/tags/日本のIT現場/index.html","5724792f6e7d15d95bbecea3629415b8"],["/tags/日本のビジネスマーナ/index.html","91129e8059f688d65ee5ee416807cfd6"],["/tags/日本の国内の人権状況/index.html","74e209e760b96a73fdd7cd17ba2d71c5"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","063a93ac08a806d1ca69a5754e760dfd"],["/tags/食べ物文化/index.html","7e1566374bd16e4d600c2cdeba32726e"]];
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
