/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","86f407470cf6a835a5c6e4818fed4459"],["/about/index.html","a22c512e228a8c1a591a0f3d23b58998"],["/archives/2019/04/index.html","d84d1572527476c9c2b69dd2d0a7ce59"],["/archives/2019/05/index.html","13e2d327ca711b2da9f361a02128044e"],["/archives/2019/05/page/2/index.html","9fe73ce79103d3f74ff1887f4fb76700"],["/archives/2019/index.html","7ff12a2baacec2ff1c8277f8401f63f8"],["/archives/2019/page/2/index.html","5055466ed5011e3bcb5b145ec67a94b7"],["/archives/index.html","68edcbfba28a30d9bff5bcb897fa0638"],["/archives/page/2/index.html","b4195d5a30c4b2ee5d89180ce1e77659"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","56542dd7aa8609328b0633d5b6ae080a"],["/categories/index.html","fc17af9f42709a356fdd783dff59cecc"],["/categories/つぶやき/index.html","d5e9c21c460239319e2b92c643fabba7"],["/categories/インターネット/index.html","b2eae37e8cbe43fba410bb871d21eb9e"],["/categories/中国に関する新聞記事/index.html","26bee72a639db0c388e571a9416293c2"],["/categories/労働者保護法律/index.html","054c2c028310dbf917898964e120cfb1"],["/categories/日本のIT教育/index.html","f59c54ee54a49019c92c9b53a96ba625"],["/categories/日本のIT現場/index.html","6b137b036330ef996f6a873b65028448"],["/categories/日本のビジネスマーナ/index.html","53d4c40966701955a61c02e24aeeac90"],["/categories/日本の国内の人権状況/index.html","36ed68daa5d0f43e2f2af6e93ee52a1a"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","795edfdda9d163244b6020627c3ed4c5"],["/categories/食べ物文化/index.html","524ff8de82e9b34a38c6154ea3b618a7"],["/css/main.css","5c6d54d8665a644d3d28a64c15c37e2c"],["/games/index.html","296f6903ee9f4a8c8123c0a65deeb305"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","62619a73bc8c76b5e0ab2ad804554244"],["/js/src/affix.js","4b3d3bd6192399bb88cf1f743e741221"],["/js/src/algolia-search.js","628f1dab0c558fe292213c0fb8622abc"],["/js/src/bootstrap.js","082426c028cabf5a1b3e234467998518"],["/js/src/china.js","bbb2a4f901669305daee1577c97b13e0"],["/js/src/echarts.min.js","22f0e8f00951e98e484f58d58f91ec37"],["/js/src/exturl.js","1316f3e84facf8eea43056174fa73bb0"],["/js/src/footprint.js","f44068dd2d72461817a09733994a7e67"],["/js/src/hook-duoshuo.js","d82534958d0a402a0b1f3036e62e73ff"],["/js/src/instantclick.min.js","d2d465491409cb676c61533105b16969"],["/js/src/js.cookie.js","1f3e8a0ccebb5ef57b419dabd1e87095"],["/js/src/motion.js","35dd6dd9c925bef4bace50e4e28f4381"],["/js/src/post-details.js","b6e01145fd91d0854d3207f3ca10fe2a"],["/js/src/schemes/pisces.js","cc2ce530a01b438f5c8c923efd366fa4"],["/js/src/scroll-cookie.js","34165fc7c1669a754cb3126c313a7708"],["/js/src/scrollspy.js","1f3d9fe56015e8b8f9225b386a483959"],["/js/src/utils.js","c9a46c1a4648879509e3a559379df37c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","5a9dea0030edb236f14f2f9e22e01776"],["/lib/Han/dist/han.js","fb1fce56d17b08004ed050cde36118db"],["/lib/Han/dist/han.min.css","fe32a96fd9168c5567a0af36c178d557"],["/lib/Han/dist/han.min.js","6b97c59036862242e90154327accfc8a"],["/lib/algolia-instant-search/instantsearch.min.css","69e7ff80b5f383e254cbcc1f31d129e2"],["/lib/algolia-instant-search/instantsearch.min.js","9799146e091818fcf43a5dc0d28840da"],["/lib/canvas-nest/canvas-nest.min.js","a9c7ad3c8eecb5956bab2984adfc1554"],["/lib/canvas-ribbon/canvas-ribbon.js","a1f1327ee436926f032cafd601ae72d9"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","eda3ee1c3704d0f000690bd785b48a5c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f202b8c1fb06e0754b5501f12740316d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","74455c5e47356dea2d0269b64cfedd8e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","974dbb1a4947935b46ceae48a128e6eb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","995e3daf3dc7eec80305328d57c1ca42"],["/lib/fancybox/source/jquery.fancybox.css","ee5ad513ac1ffc2b17814ed683b88364"],["/lib/fancybox/source/jquery.fancybox.js","72a84b5300f96b1e0ad11a3d971e3b96"],["/lib/fancybox/source/jquery.fancybox.pack.js","01460817e6c92faac75e4cfab352465f"],["/lib/fastclick/README.html","b72205d5a91ddd195fb3cd479056fc39"],["/lib/fastclick/lib/fastclick.js","84ab0e234992860fa692ce6fbab24c29"],["/lib/fastclick/lib/fastclick.min.js","92f599691a485a870e710fd89aff0608"],["/lib/font-awesome/css/font-awesome.css","02d273084d03b733b7eabbc9002d1107"],["/lib/font-awesome/css/font-awesome.min.css","02d273084d03b733b7eabbc9002d1107"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","238bf8c4efb26e167567d3d2627ea201"],["/lib/jquery_lazyload/CONTRIBUTING.html","8c7dca03179b73ff63ffd3a8b05da2ef"],["/lib/jquery_lazyload/README.html","04f94499f65fb0157601344d09a1ef3d"],["/lib/jquery_lazyload/jquery.lazyload.js","1a53ce0831e027510637e0a437ee593c"],["/lib/jquery_lazyload/jquery.scrollstop.js","3177d853d05d9b7c1ca794b87f8e47d6"],["/lib/needsharebutton/font-embedded.css","86d6a16c1162de1124299dac7860dce4"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","06f42580c244638da61efa8c5dfaeb36"],["/lib/pace/pace-theme-barber-shop.min.css","0dcbdb18530c10b883a5ce06e2a11ba6"],["/lib/pace/pace-theme-big-counter.min.css","46c1766994c4dab80d381a5bf13f3a79"],["/lib/pace/pace-theme-bounce.min.css","aa248191cd01ca925aac77b8f33351a5"],["/lib/pace/pace-theme-center-atom.min.css","eee9451d764a308dabcdb39215fb1d33"],["/lib/pace/pace-theme-center-circle.min.css","feeb8fafa8d7d6285a11891aa4073253"],["/lib/pace/pace-theme-center-radar.min.css","fe7df602ed3904a7ac0d78f6e05e865b"],["/lib/pace/pace-theme-center-simple.min.css","555e324d5df348fe5989d7180e5b647a"],["/lib/pace/pace-theme-corner-indicator.min.css","26fa9eca3e36c792508e0f1b9e086918"],["/lib/pace/pace-theme-fill-left.min.css","9b8cc88829c270673ee9b96cdb7d82a9"],["/lib/pace/pace-theme-flash.min.css","ce0b477329a71d249f32d15e60d51701"],["/lib/pace/pace-theme-loading-bar.min.css","72124cabfe60dd121c10c0ae4d741493"],["/lib/pace/pace-theme-mac-osx.min.css","e9456bbbed40f052b0f56c0981a0fe30"],["/lib/pace/pace-theme-minimal.min.css","0aee587d8db7af5d33537156f5508a1d"],["/lib/pace/pace.min.js","d751d2a0fc75e2ae7f397b3c9b83859e"],["/lib/three/canvas_lines.min.js","518ddde1fffd25c9c8341d291dd88e41"],["/lib/three/canvas_sphere.min.js","02e234e7ae262bfacffb378e37a7b9ca"],["/lib/three/three-waves.min.js","068b2c08927722d97a1fbed5bb75d225"],["/lib/three/three.min.js","b190af08699e5424f7c0576bdc814e78"],["/lib/ua-parser-js/dist/ua-parser.min.js","5d3c42e253bdd6c5df913edae4c562e8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a849a46149b135c8db6d2f6e840aff64"],["/lib/velocity/velocity.js","90fffd7404f82efcbf1145ed26435566"],["/lib/velocity/velocity.min.js","c22df510233de80eb4de6c5b384070f6"],["/lib/velocity/velocity.ui.js","95f2c2d5f9ae21285ee10cc07d781ed3"],["/lib/velocity/velocity.ui.min.js","09c90d09cb9127e84ae34692d7bb70b6"],["/links/index.html","4ffa1944037aa8c89192fb37ecbed987"],["/movies/index.html","c575538d1a0360cb68b0cf396ebee302"],["/page/2/index.html","ff2e9e2760e263a7695cfe411615002a"],["/photos/index.html","0dbf64d2321aa3cbac7f2b19a7cf7333"],["/posts/191ddb73/index.html","5764bd484287797a493ba7a3c09ce83b"],["/posts/1a195976/index.html","11201f2c110c7227fbc00f41962ff053"],["/posts/2fc77d95/index.html","01f2360226408dccccc9b6f0444b36aa"],["/posts/2feacaf4/index.html","f5a38ebae8eab644788340516b06b58e"],["/posts/37f2c331/index.html","2a861b8d72e5059bacba9aeaf8d08f8e"],["/posts/385f0de9/index.html","0e21fce3c936230186bcd0d2848146bd"],["/posts/45e51894/index.html","a8633d3cd2a0db948570b32358bd774e"],["/posts/4f1131af/index.html","13eba06e54fd759d957a42db9e0fa809"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","6945f28e52e94c93b47043bd3f7e3e7c"],["/posts/63556f52/index.html","cb8e54d67fe8a5dae1895b6f7e8476db"],["/posts/6d49ceec/index.html","1f997e6b48d4514dc97894b80f00ffda"],["/posts/6de7d9db/index.html","397ca8bdfe51aa20b4546a6f062748eb"],["/posts/c311b112/index.html","7aaf1d2da21f28efd83b79fbb476dfde"],["/posts/c620d4c2/index.html","793c320d53535cc6ebb1272416e855ac"],["/posts/f8073739/index.html","9015b0e213d4f3f95a7b433dca0d8de0"],["/posts/f97ef43b/index.html","1606994394dd5034fc57b4d033e5cae2"],["/posts/fa84d5fc/index.html","2d7618896941aba7875036344ad3b286"],["/sw-register.js","dfe2f1000cc7b833318fe81929637c97"],["/tags/index.html","62fcaaaacc664e5365904145686d30c6"],["/tags/つぶやき/index.html","62581136f52625e15e46e075c8f548aa"],["/tags/インターネット/index.html","5ef02315c51011582af716b4e81cb602"],["/tags/チョコレート/index.html","05bb071e2567d1cf97c5793b4f6fe32a"],["/tags/中国に関する新聞記事/index.html","5e8043899c0dc10d1c5dd838abd6f6c2"],["/tags/乳製品/index.html","51518753dcb64771e39a0792ef9c6f08"],["/tags/労働者保護法律/index.html","e31843cf8a44e483c59d304c67636fc8"],["/tags/日本のIT教育/index.html","f59dff110091922f19bee2611d5b4263"],["/tags/日本のIT現場/index.html","9163ec12ee3a3627da2e0b6fe816b395"],["/tags/日本のビジネスマーナ/index.html","711d84237036b056e14d149d20d15183"],["/tags/日本の国内の人権状況/index.html","31b1c366f36ed28cd357836bc26ed1b7"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","47664940ebfd27e8887835ac1b5999f6"],["/tags/食べ物文化/index.html","9e4d24ea5da15de59366f9d87db4cfb0"]];
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
