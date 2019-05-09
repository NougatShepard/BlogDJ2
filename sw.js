/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","e5c81937c797c072a965247afae3f8c0"],["/about/index.html","fdaacdcc262a450c07c741b29c810683"],["/archives/2019/04/index.html","066330406897066b99f53fcaf4957675"],["/archives/2019/05/index.html","a2bc9a8b0ddf1bc916639f951cd614c8"],["/archives/2019/05/page/2/index.html","338da8bd8c7c35143042780e5691e24e"],["/archives/2019/index.html","ebbb00d101d42032d343038e246b9a90"],["/archives/2019/page/2/index.html","ac21f7d11e520e41a6b293a64cb47c62"],["/archives/index.html","4f847daaf4df65d5e4838771cd321b71"],["/archives/page/2/index.html","93bbb58f1214690d0554223f085f78c8"],["/books/index.html","35f4c62c5ea5712eb71f0660d704b0d9"],["/categories/index.html","2381667f38adc68f8781d58918b7c7df"],["/categories/つぶやき/index.html","6b6ab436e50f64aecd616df5b3c8b09a"],["/categories/インターネット/index.html","b01fe67c9506bda4cfbf25791b74f627"],["/categories/中国に関する新聞記事/index.html","12643754f07e377cbc2f2533e8b0a88c"],["/categories/労働者保護法律/index.html","5e6c0d54dc60a8368b9cd4e9476a305a"],["/categories/日本のIT教育/index.html","f5eb3f96c3bf047b4d5e7a0b77081473"],["/categories/日本のIT現場/index.html","d130b520cea5803b66afe88cae0d51bf"],["/categories/日本のビジネスマーナ/index.html","a59be69eeffc0d3cfe4bb4aade9b8def"],["/categories/日本の国内の人権状況/index.html","2f72b219ed601afebb8f9b54d57519f9"],["/categories/食べ物文化/index.html","dc67e84ecc087e7b9e2d9a6862e19db4"],["/css/main.css","cc210974c4143cb560cf5e9ece619dfa"],["/games/index.html","7f4cb475b93d3289786627bb315cbb86"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","907a0348dec6da35f4cd014d687e3c1b"],["/js/src/affix.js","5bc5359bf733c09fdd2b99c9f8c16033"],["/js/src/algolia-search.js","ebd2a2dfd9a2fe6d6503334c54dd17b4"],["/js/src/bootstrap.js","0b2ff9dd13ab5fb77cab5e1d025b4837"],["/js/src/china.js","80bf5f477d1772fbbce6d145f21a039c"],["/js/src/echarts.min.js","92263bc83390284dcbc9997fc6bbf64d"],["/js/src/exturl.js","63c1c01066c65c9d6023a5d61331af48"],["/js/src/footprint.js","642893760671a32848cf028a842c64ee"],["/js/src/hook-duoshuo.js","8b08be7dbfd9745a54e385c5372517da"],["/js/src/instantclick.min.js","84fdbfb4037e4286afad84f086f0da5a"],["/js/src/js.cookie.js","1e1b039c043017e4574701a4556d5001"],["/js/src/motion.js","d3af0f00804e565686a5a55d3f7f078a"],["/js/src/post-details.js","07cf0592585db8ecd6e1efa57b31849d"],["/js/src/schemes/pisces.js","7b81246229ccd0597d54792d9a609a86"],["/js/src/scroll-cookie.js","b11c4be7a24c6e92d0a92d6570e02dfa"],["/js/src/scrollspy.js","9be86953e8569c975b44b95935428957"],["/js/src/utils.js","0584492f8a221de38ec25260b330f8f7"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c81ead3481a115a63f9093a275a660b0"],["/lib/Han/dist/han.js","84be776c9c986f84aba63540fee48390"],["/lib/Han/dist/han.min.css","7ff725e078610b4cada7c46fe6903893"],["/lib/Han/dist/han.min.js","f1ff4cf5c53d7d088608462a05d76a90"],["/lib/algolia-instant-search/instantsearch.min.css","a8d6e2366a9470548f4d8d1fa5643af6"],["/lib/algolia-instant-search/instantsearch.min.js","d44eb14481e4976a2411bf44f90771ef"],["/lib/canvas-nest/canvas-nest.min.js","f8dd7123505c17b9cf65c65ecde529ea"],["/lib/canvas-ribbon/canvas-ribbon.js","de36acdafd3dc9e24c9bdbf790ec4a98"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","253e0d8d37e8ce506a32dbaf62061b5e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3d40721900c12a7601652f622adc4151"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0506979a52630b2fb4958a023219e4ae"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b9898d4d3d799da28b9554ff29fdafb1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b637afb2edbeae97b46c0f6cebfc81a5"],["/lib/fancybox/source/jquery.fancybox.css","1ed19df151cf475857beea6f1fd7505e"],["/lib/fancybox/source/jquery.fancybox.js","37361accf43863205ce1d9fa5c4d2e11"],["/lib/fancybox/source/jquery.fancybox.pack.js","15f9fee13493dbcf952419ac08af8d10"],["/lib/fastclick/README.html","dc21c2d6b48954ef2a2cd70405f7a1ec"],["/lib/fastclick/lib/fastclick.js","022a78be42a0704a13fef1a2b4e7f358"],["/lib/fastclick/lib/fastclick.min.js","996e04baf6fcad7f075862e4ee3dca05"],["/lib/font-awesome/css/font-awesome.css","94312867508923e6b7011ab6f7633a3f"],["/lib/font-awesome/css/font-awesome.min.css","94312867508923e6b7011ab6f7633a3f"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","1096f2fec289e3c29517bba52a68f104"],["/lib/jquery_lazyload/CONTRIBUTING.html","86be0a25211128caa9e4599262cc0900"],["/lib/jquery_lazyload/README.html","17ce3bbc4e946ffeddfff0337bab3430"],["/lib/jquery_lazyload/jquery.lazyload.js","c6974af1ad62c1c037f2a6357c810165"],["/lib/jquery_lazyload/jquery.scrollstop.js","fe41ec9899149d0f4ee914abd5b3386b"],["/lib/needsharebutton/font-embedded.css","f6d5aaf7898866f46d8968d1d7bf5d6f"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","7b79d0e560fec576babece8babef0189"],["/lib/pace/pace-theme-barber-shop.min.css","903fc07241662beb46e7c4576b60ffed"],["/lib/pace/pace-theme-big-counter.min.css","50cc50f19e65399f96197925a1934245"],["/lib/pace/pace-theme-bounce.min.css","0b8c6ad85f9974d559f0cc6f03c899e8"],["/lib/pace/pace-theme-center-atom.min.css","685f71b6b45770799225f6b192cfc2c0"],["/lib/pace/pace-theme-center-circle.min.css","021edb2d635b8d9b2161bb0651858382"],["/lib/pace/pace-theme-center-radar.min.css","f8da2c1b2e270135f5fc1f6d9252effa"],["/lib/pace/pace-theme-center-simple.min.css","a60e7b29c9bcb80bf686435ccfb6f7d5"],["/lib/pace/pace-theme-corner-indicator.min.css","54097ae3e6c5d77d52bed79a3b238e1d"],["/lib/pace/pace-theme-fill-left.min.css","489dfe0bdebe0cca692703ef6f7f9d69"],["/lib/pace/pace-theme-flash.min.css","2e4ad64f14dba4daf73ff97b6e417dd7"],["/lib/pace/pace-theme-loading-bar.min.css","fa7e77789920afc453abb7752021991b"],["/lib/pace/pace-theme-mac-osx.min.css","844ec72aee81204d30d6c10f17b14925"],["/lib/pace/pace-theme-minimal.min.css","06be2b646390eb8366beae9116110ce1"],["/lib/pace/pace.min.js","439afb534b545de9d67161e2b586d1ef"],["/lib/three/canvas_lines.min.js","efe764f7644487a2fc3a2d4a3c2537e9"],["/lib/three/canvas_sphere.min.js","a421682bfd7989dbd7c3900b1c609e81"],["/lib/three/three-waves.min.js","15f7dbf74b1ac16fe515e5c35c46f78a"],["/lib/three/three.min.js","27f8c2b92bb789537c74527df273c224"],["/lib/ua-parser-js/dist/ua-parser.min.js","1f16c4599ce88c88e7cc364893c8edc4"],["/lib/ua-parser-js/dist/ua-parser.pack.js","bcde91ba56eddfeec922fafb9f03da9a"],["/lib/velocity/velocity.js","949b18af066bc01d6fc4b411e35fcc83"],["/lib/velocity/velocity.min.js","aca3e084241acc5c823081aa1936fbcd"],["/lib/velocity/velocity.ui.js","5b9be7e76cec86478ec4dbc5dcd27629"],["/lib/velocity/velocity.ui.min.js","99522b3b72f73a58397c7e9f3d7504a6"],["/links/index.html","7ac30841349c2f78fdf31364515f45e1"],["/movies/index.html","b4e3f638807cc4dab9ab1230102a5071"],["/page/2/index.html","59551365d0b9f1c5be699d30121d0ab0"],["/photos/index.html","f65f7fb3b2fb87bff14c23797e3c9c07"],["/posts/191ddb73/index.html","41508ec095102faccd737aad755dcfd1"],["/posts/2fc77d95/index.html","56912145615d13a5aa565b86889ef3c2"],["/posts/2feacaf4/index.html","ace6c8fb6a10c6916c6391dfb5a07f73"],["/posts/37f2c331/index.html","a3d68ad8ecebe0335aa43c3f6bb09ca7"],["/posts/385f0de9/index.html","7518b34a80330d7a1dee2a302225f831"],["/posts/45e51894/index.html","c0a175d4048976b88c300ee677117bff"],["/posts/4f1131af/index.html","6fade4c2e8308ebba37309500ee497a1"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","ba66e6ce9333d9d05928181de53c78fa"],["/posts/63556f52/index.html","45182d22150b0bb6eeb0135ab82b6e1d"],["/posts/6d49ceec/index.html","3cf59f56af904074ff1729e5a046fd6c"],["/posts/6de7d9db/index.html","e8db20c78d3b1a1e63488f832e82c94f"],["/posts/c311b112/index.html","ae3c9e83369b65b71403a00174394dbf"],["/posts/c620d4c2/index.html","f0368db35b74b9f7f8bc337f29c50871"],["/posts/f8073739/index.html","10917209f45839b1214f42fcc2fbdbca"],["/posts/f97ef43b/index.html","1a0ba7d04e8d58d4eda6adf5f1b86967"],["/posts/fa84d5fc/index.html","14507bd9ae9c39c2f7a29b6f727c341b"],["/sw-register.js","667bd66b8926f1548f102ea93c5436d5"],["/tags/index.html","ba0e06d2e150fdfd4e6897cee9867c2c"],["/tags/つぶやき/index.html","f86e0d9bebc9b05708a87e5a6848de30"],["/tags/インターネット/index.html","06568be9529b11828db493ebfc171765"],["/tags/チョコレート/index.html","7f683d8a7c72f3d7b6146911482c7a94"],["/tags/中国に関する新聞記事/index.html","6ad80dbd727e4079d666070e5a09125e"],["/tags/乳製品/index.html","3577831de90259920ef926cc0e692bf4"],["/tags/労働者保護法律/index.html","4dcd1706fdb365acd9de2ad02343f91a"],["/tags/日本のIT教育/index.html","aedc36dabb470f1f74a719d86b3dc014"],["/tags/日本のIT現場/index.html","06897ae9c2967211456def6959497560"],["/tags/日本のビジネスマーナ/index.html","88987f91492fd3b928a5afef7fed606b"],["/tags/日本の国内の人権状況/index.html","a84ca952eabd5dc18cab5a43c362254b"],["/tags/食べ物文化/index.html","ddbcdc1ccc0aa2ec6a8558956692fa66"]];
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
