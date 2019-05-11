/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2048/index.html","101ecd9f14983e6c7b5dbde21dac0453"],["/TimeLine/index.html","9e7b88d7942b4d5bfc42ce7decd513f6"],["/about/index.html","d9d4905ff8d6a0ae2fecaf2b4a53b811"],["/archives/2019/04/index.html","1295e4705ee8a39068ebde34fa53fd4e"],["/archives/2019/05/index.html","4448c64f2b405d8bbecaa65f2d7eac8c"],["/archives/2019/05/page/2/index.html","79b9175e7ee053804f9cc9c7c834c597"],["/archives/2019/index.html","3b106cf2b07662abcc59b3e95422713a"],["/archives/2019/page/2/index.html","15399d758f682d7c0fd4933208d7c53f"],["/archives/index.html","a054a8e97e2392715c278ae6b690929a"],["/archives/page/2/index.html","d62dc890983616b22689aecab8f31c63"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","06cc5a2bf61ad6fd5c3b37337f59c188"],["/categories/index.html","47772084560fbf4b741a23a179132ba0"],["/categories/つぶやき/index.html","ad6c543a7c75fa87a39c9bd9cd049e7d"],["/categories/インターネット/index.html","bb4ebe80a8ea80dd812d9eb7d03f0938"],["/categories/中国に関する新聞記事/index.html","90abaa1518c1da950fb4e828a4da0bd2"],["/categories/労働者保護法律/index.html","d6c0d6f7e02e4bc1f3687b28775cdf5a"],["/categories/日本のIT教育/index.html","9c0ec3114caa2712edf95f25548d7bea"],["/categories/日本のIT現場/index.html","3b37e724bdfdf6f273fd47502815e80c"],["/categories/日本のビジネスマーナ/index.html","818810cd4a3e509587996b63a3eaafa6"],["/categories/日本の国内の人権状況/index.html","a3ad91c9ed0e683833b399bfb1759b54"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","8018a12cb668ed9f24a681a4b16596cb"],["/categories/食べ物文化/index.html","a707d6796849824239911cbb6aa8ff13"],["/css/main.css","cdaad746f88c2f221e10e5d1d95b4f7e"],["/games/index.html","a0c6ab37165686eefe29f3296406aa2d"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","bb22ee74868dde32dcda88a36bd800a7"],["/js/src/affix.js","dc96e49507937a806072ef7c7206b962"],["/js/src/algolia-search.js","e3f73322507e70b47de6766ff232d070"],["/js/src/bootstrap.js","ffae43e644641bc56dce6203a9b2906d"],["/js/src/china.js","33f4b4151cdc3647794deb586db2a21e"],["/js/src/echarts.min.js","6327f920ce59bffa835d41f5264a3b7b"],["/js/src/exturl.js","a21907ad6c82e0125c376a0c866ec97a"],["/js/src/footprint.js","750d475c96b56a7061c7b7309c0e109c"],["/js/src/hook-duoshuo.js","50c802ed6620e60abcbcf92112a2e315"],["/js/src/instantclick.min.js","569a600aa90734b18f863986cf5c11bc"],["/js/src/js.cookie.js","0da2a36630fd6579c93e7b1acf6c0fd5"],["/js/src/motion.js","d9344a1a276ea4ad769b49c6ebb9b8b5"],["/js/src/post-details.js","c9d075694e93135e9d360a5039a73f3c"],["/js/src/schemes/pisces.js","8051d561c9f0d0ce3cd2cd7e16a53ac9"],["/js/src/scroll-cookie.js","5a4ab0c71e4936d46ae12e7b8584f1ea"],["/js/src/scrollspy.js","78f1257f1bdf1fd7d3d37b72b9e7daf5"],["/js/src/utils.js","471570386853a45911c633a49a12cd80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1e1905b1d46c426aa28726afcc0c8ef1"],["/lib/Han/dist/han.js","ebe2491b7a875fb43d80fe14e10f797d"],["/lib/Han/dist/han.min.css","d23feb3f5917f7f902f0a0cc96eff092"],["/lib/Han/dist/han.min.js","5125c101bd3b320d2ef149e6ee778a0f"],["/lib/algolia-instant-search/instantsearch.min.css","3db15a5af2500993489fadef270ea3ea"],["/lib/algolia-instant-search/instantsearch.min.js","2d46c6ad9e84f12b13ddc0ad0f20bef8"],["/lib/canvas-nest/canvas-nest.min.js","040b086674b6c0101195a8f0c4eec6d2"],["/lib/canvas-ribbon/canvas-ribbon.js","47971f07b39bc021cefd7d42c911df7b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","56cb5be7a159d4220b87a355234bcb12"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","65b89894229020ac02f9d61771ad37f1"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ba2b41bdde376b5eba662e8ca0fb3620"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a71bed3a1bc27de5b6e446921834945c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3eafbcc40d65a58ddffab201f6e5f9d5"],["/lib/fancybox/source/jquery.fancybox.css","8a90b273078bcaa0e3b2ce1c361c8ecf"],["/lib/fancybox/source/jquery.fancybox.js","cd6ceb39608b43d699f8c22a7cc6abcf"],["/lib/fancybox/source/jquery.fancybox.pack.js","70c85a45bede4c91e9020362b1bcb42d"],["/lib/fastclick/README.html","b854178628365246e20cd3e547342a3d"],["/lib/fastclick/lib/fastclick.js","c289ebb3c1c4673e8882728dc83baacc"],["/lib/fastclick/lib/fastclick.min.js","baef6174b54fada710f2a6e850f3a6ad"],["/lib/font-awesome/css/font-awesome.css","5b30d40fe64ed7e8bff0d81a1c9fb68c"],["/lib/font-awesome/css/font-awesome.min.css","da50930e868ee7e7d8e4de37c7a722f4"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","be29e049845047c4824e878f60724ef4"],["/lib/jquery_lazyload/CONTRIBUTING.html","191fd34f72fafca94473d428a72b75d5"],["/lib/jquery_lazyload/README.html","9bd2d8e897369ad26671b6a466530750"],["/lib/jquery_lazyload/jquery.lazyload.js","f584b384350191841478cee8453a0eb4"],["/lib/jquery_lazyload/jquery.scrollstop.js","eb41489bf6cbb567ff2332f6041c273e"],["/lib/needsharebutton/font-embedded.css","db75841a5392bc6e6162f96b1f3db771"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1e8c6cd980a05e8fbdf8ac42e7ad3a6f"],["/lib/pace/pace-theme-barber-shop.min.css","2df1c56c604a96505e62a20f280c78ea"],["/lib/pace/pace-theme-big-counter.min.css","e1b192ec8f6de91dad86ffb721352c82"],["/lib/pace/pace-theme-bounce.min.css","1daa7893506d147c76aeb0d099d65f7a"],["/lib/pace/pace-theme-center-atom.min.css","595f2bc37589c8246382ae8aa85148a6"],["/lib/pace/pace-theme-center-circle.min.css","1c77e1b7268b2ad841c26dc16775cd91"],["/lib/pace/pace-theme-center-radar.min.css","5f1ba8e36dafa81f29d2d9328f900d95"],["/lib/pace/pace-theme-center-simple.min.css","7e85f7d081db0ce8e5dd8820c0c53a64"],["/lib/pace/pace-theme-corner-indicator.min.css","1b40deef0e68ff44ceff7fb0dd228815"],["/lib/pace/pace-theme-fill-left.min.css","67734c2eb153ef4b925c0c68ded66ff6"],["/lib/pace/pace-theme-flash.min.css","a6ad2cea809fb8131306c79ffa601cc6"],["/lib/pace/pace-theme-loading-bar.min.css","ab724f0e753701c0f49c79c97c4f4e7c"],["/lib/pace/pace-theme-mac-osx.min.css","ceb64e1fdd6b4b4f5675d98d9199c7b3"],["/lib/pace/pace-theme-minimal.min.css","87adb16492333a9b1708757561b398a7"],["/lib/pace/pace.min.js","959a5428b0b3ae2d493dc877eb2360d9"],["/lib/three/canvas_lines.min.js","9dd6e1134941bd44ea66b9b5f452c88c"],["/lib/three/canvas_sphere.min.js","ab9806691bf9161c24a3cb3dcc1c9ec3"],["/lib/three/three-waves.min.js","a0bcd179989c522607da4ef4eb95387b"],["/lib/three/three.min.js","a3082159a3b419a95ce6e4831b7f3f3a"],["/lib/ua-parser-js/dist/ua-parser.min.js","980210cc60701c5a3a238bebd2254ce6"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f39d995f38abaec56df939e210e320c8"],["/lib/velocity/velocity.js","777ccfb91e3449d0da2c61e6ddaf3c78"],["/lib/velocity/velocity.min.js","55032ae92178f3e3f77b561d28b48e3d"],["/lib/velocity/velocity.ui.js","111b74a699be5e502e48eeb7415b3b6d"],["/lib/velocity/velocity.ui.min.js","5adb46caf041f407357b8a8527630cfa"],["/links/index.html","46e9f66338c52e2c644fd500b7ed622b"],["/movies/index.html","e76a98fd8c5e7091bb6f0f618ccf5c35"],["/page/2/index.html","4b02d3c75a82275a7e2bebe37d14a97e"],["/photos/index.html","d5da777d6230d387e5feefbf5a81638e"],["/posts/191ddb73/index.html","91b6b39ddfda1f2b0aab81a0da6a1f6f"],["/posts/1a195976/index.html","9299c86edfaf105c3d41043f7645f361"],["/posts/2fc77d95/index.html","b8ea848a7c06e3ef5d17e25d1e4018a0"],["/posts/2feacaf4/index.html","6a8234de8b70dbb1dcbd87ec8dfd4117"],["/posts/37f2c331/index.html","aa55de457930efd7a90634be5e104251"],["/posts/385f0de9/index.html","6a59cd4051552992e88986953f8526ea"],["/posts/45e51894/index.html","0f415321ef2d3da101ef6ecb312ec62e"],["/posts/4f1131af/index.html","13135971b853101c7827b86e74ef11a2"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","40318ca8aa74aa662dc4f06588dba9fa"],["/posts/63556f52/index.html","bf6fb589e3af8800af739df8cf146226"],["/posts/6d49ceec/index.html","39b5eec9272fef32dd31ce9adbb9696d"],["/posts/6de7d9db/index.html","12a1b2656a72d2028baad379f6e63199"],["/posts/c311b112/index.html","3a0c673285dd6bdf7c5bedd6ce78a0d6"],["/posts/c620d4c2/index.html","9431b0bfffe4ac2178ec164a637f5b38"],["/posts/f8073739/index.html","6c49c7c4f253bde44c91c9b6df5b20d5"],["/posts/f97ef43b/index.html","0e15ebfbced531d43328fc785f0db56f"],["/posts/fa84d5fc/index.html","42f4da3b7cb0e408011f44ef6bba158b"],["/sw-register.js","edd2bf2db6cee3d92e272e860b98ab48"],["/tags/index.html","47f11475050c28d943d7712d741df1ac"],["/tags/つぶやき/index.html","ec2461aed9b17b7144cfacf0a1d24377"],["/tags/インターネット/index.html","be918d1938fbcd8ebe4d1884108914f9"],["/tags/チョコレート/index.html","497f2fde365c98b2a2337dc0f9d9b447"],["/tags/中国に関する新聞記事/index.html","50977554ef0bb85b6ad537790e975774"],["/tags/乳製品/index.html","11ed1b62229982edc52b329f08c39a00"],["/tags/労働者保護法律/index.html","d80f275f46b71128d8902515ef0808cd"],["/tags/日本のIT教育/index.html","13f9a2ec330b9082de218f7b753a8d4e"],["/tags/日本のIT現場/index.html","7272a618b6f32132c2de7cd5bba57c3e"],["/tags/日本のビジネスマーナ/index.html","e565bff7ab2ffe58391c82da374a0d67"],["/tags/日本の国内の人権状況/index.html","87ef77f2a04cf3522f3ccd776c7eca4b"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","a87e800741250feac58fe2753f31829d"],["/tags/食べ物文化/index.html","3d90262a15961aeefd82908bfb3c33f4"]];
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
