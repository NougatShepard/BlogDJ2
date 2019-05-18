/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","7cf26395bcf5d3f578f7d1eb7e3ad958"],["/about/index.html","e8b7a35560b27bafb7b6aa779f74a35e"],["/archives/2019/04/index.html","56831c009e8e40da1c559c9312324b20"],["/archives/2019/05/index.html","22fe80cf3344a9e74ad15f17a7abaca5"],["/archives/2019/05/page/2/index.html","cbaf612b4b76780a2596bc1ad1d65439"],["/archives/2019/index.html","6b477d5afdb4cd3c632f7217d0fdb950"],["/archives/2019/page/2/index.html","da44c556e694fab9d94f32c46153ef89"],["/archives/index.html","efce0f13fed29232689eb48ea6d24640"],["/archives/page/2/index.html","ae77deb183cba2e3287d4e66dd38c245"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","f4d85b00a36787b6401df9fe827bf7a9"],["/categories/index.html","be684621e1982143dec43673070506b2"],["/categories/つぶやき/index.html","3289a83504c32dda17347fce4d9902fc"],["/categories/インターネット/index.html","06029caffcae70e0ffe23b5b92c7ab50"],["/categories/中国に関する新聞記事/index.html","c58c0294e5da56cd201149482231009c"],["/categories/労働者保護法律/index.html","a9405cde8e11cbe11271258626d6e4c5"],["/categories/日常生活/index.html","b08b58d9e206699dfeb92ab515126984"],["/categories/日本のIT教育/index.html","121c6c3ffae1f8ab1ae0f1442e761726"],["/categories/日本のIT現場/index.html","8e61824d30a695c8761497bf32facba5"],["/categories/日本のビジネスマーナ/index.html","eba4c0bad4830cef4b7320a23f6a3dad"],["/categories/日本の国内の人権状況/index.html","55b59f860cc10f888ed949138d61ab07"],["/categories/日本の経済新聞記事/index.html","b3559ecd72a876afc59cf9126d43769d"],["/categories/過酷な現場/index.html","f106bb10d9d7a0784c450cbac7ce6a7e"],["/categories/食べ物文化/index.html","227a6549f09dcaa6e3cc8528c5675c67"],["/css/main.css","bc41b83b2066498836c94700aaea7097"],["/games/index.html","d8157e95e7e6fc5dc2a561c708e806dd"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","217d9679feca62bf7c5844f1df813335"],["/js/src/affix.js","8c82878baa6b5f066d45c64b0fad462f"],["/js/src/algolia-search.js","70d415951049d157daf60f4612eb1f15"],["/js/src/bootstrap.js","aace96f842fc9207c1f0fbcd223baf7a"],["/js/src/china.js","b45253fd9ccd0643d127f87601f9dc0e"],["/js/src/echarts.min.js","5cff41ca76b128e07582ea8825765b51"],["/js/src/exturl.js","56e36c9a04406cbbc9c475a70b2e8731"],["/js/src/footprint.js","1c5eeaa10b60a3d08ca10ef0412ee506"],["/js/src/hook-duoshuo.js","ba16e58298208ab57039ca6accf5432a"],["/js/src/instantclick.min.js","1a9092059a7bc7cab1be1f3afc0558e4"],["/js/src/js.cookie.js","b1098cae53213dae5920f83dbcdceacb"],["/js/src/motion.js","d8d9792905de6e63a872b33d246ddf7e"],["/js/src/post-details.js","d94e6f5eb9822ce80ecec96127249e2f"],["/js/src/schemes/pisces.js","7c91b70ec23267a91a6e9ef592f23121"],["/js/src/scroll-cookie.js","9799ee81e89a3d8b213499dbdeb8a74d"],["/js/src/scrollspy.js","6ed44cfb64df36c041a1efa711be35a4"],["/js/src/utils.js","a3696e11614b0fc181aa12320911f151"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","b8406a18ab8599fcaa17fa8cda968011"],["/lib/Han/dist/han.js","644e54537801bddfcf7fef9571987ee7"],["/lib/Han/dist/han.min.css","b7d386e16c79572785b8019c446a618a"],["/lib/Han/dist/han.min.js","7852a838221d5ecef2eb3a780b2d7691"],["/lib/algolia-instant-search/instantsearch.min.css","8ec527a0dc4f4b9350ee006681de307d"],["/lib/algolia-instant-search/instantsearch.min.js","03c811921bd4a3532a61e9b893c6799b"],["/lib/canvas-nest/canvas-nest.min.js","708831e774e8cd670d1baacb8101b9ab"],["/lib/canvas-ribbon/canvas-ribbon.js","aed308955dd41f40c543cdd043b98089"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c7698cc68a48978f1aec3cfff9646e8e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a52c6dcfb917c09ee6bf256b9ba73bfc"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","8bb85f5b93e7cafe296587517a8e7dbb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3bf5ab903e6d18e24103296067b8c574"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","93bc898795271c8bd762cd0c98d17595"],["/lib/fancybox/source/jquery.fancybox.css","04c7aa38e4dfbcdcbd7e07c280a1d4b8"],["/lib/fancybox/source/jquery.fancybox.js","244b2c15819439a2b1d99c0fd653896d"],["/lib/fancybox/source/jquery.fancybox.pack.js","eaa8b78cbb990e1065465f89704a4263"],["/lib/fastclick/README.html","4ce125151e9b7b8d3c6791393a1eec62"],["/lib/fastclick/lib/fastclick.js","116265b9c3aeb2ffd171aa0f3d8b6c41"],["/lib/fastclick/lib/fastclick.min.js","56c8c77edc2619953ff74dffcf4a4c0e"],["/lib/font-awesome/css/font-awesome.css","51978ca5484e6d7d35c3c2cccc337c26"],["/lib/font-awesome/css/font-awesome.min.css","cb5cf3bbc2a882b928da316b0480da42"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","80d76020660d6e2477e30e631b56cb40"],["/lib/jquery_lazyload/CONTRIBUTING.html","f73a2d589e28aee1fcdb4d1d47fa5f32"],["/lib/jquery_lazyload/README.html","d928cfc029f1f71f477272dc27707094"],["/lib/jquery_lazyload/jquery.lazyload.js","fee7a769a53566d1f36625f1aa4f647e"],["/lib/jquery_lazyload/jquery.scrollstop.js","3f9d4491bb2c56b45249594cf4bf71d1"],["/lib/needsharebutton/font-embedded.css","cde6a73dfe396a95ef06a0311e71f2e1"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","13ab842a881bd08cd35d84f14bdf54c4"],["/lib/pace/pace-theme-barber-shop.min.css","4d8960eea9c91cb5817764fcbb166f91"],["/lib/pace/pace-theme-big-counter.min.css","03344c9359cb68f48ec0b7fe6f3d195e"],["/lib/pace/pace-theme-bounce.min.css","b0df37767fb65eaf2ed5342ef529860f"],["/lib/pace/pace-theme-center-atom.min.css","831a9021d0d583270bbad22cb5b70fac"],["/lib/pace/pace-theme-center-circle.min.css","e1a25acd9de43683bffcd47b3b6cdd9c"],["/lib/pace/pace-theme-center-radar.min.css","2509708ee53bcdc162cbfbfcd3469204"],["/lib/pace/pace-theme-center-simple.min.css","a23fe0b14c3d0e05586c8b4cdf065435"],["/lib/pace/pace-theme-corner-indicator.min.css","5a11c740960b7a003f5cfbd3558d0a12"],["/lib/pace/pace-theme-fill-left.min.css","35425173a659081f72fedad42647bd45"],["/lib/pace/pace-theme-flash.min.css","6cca294cab534499f881bdec08fec7eb"],["/lib/pace/pace-theme-loading-bar.min.css","bd821471ec4c230ac6265d5c051a5201"],["/lib/pace/pace-theme-mac-osx.min.css","8e913096ef47622ec8ac53b3fef2cbb6"],["/lib/pace/pace-theme-minimal.min.css","7db9ab927c13308d63fd63a58abe9844"],["/lib/pace/pace.min.js","e7a690f02f6c574324a547249397ec4b"],["/lib/three/canvas_lines.min.js","216de0f20403d9b6add3c63f1fb71ee7"],["/lib/three/canvas_sphere.min.js","3c937c17fc78aac5334387c8730f48e4"],["/lib/three/three-waves.min.js","768f50cd3ec8e1b160ad39fdb74bbc10"],["/lib/three/three.min.js","88e54e926d6b7ee6ff256077af3bc9cc"],["/lib/ua-parser-js/dist/ua-parser.min.js","43f09ec22383255aed27ae503207cf15"],["/lib/ua-parser-js/dist/ua-parser.pack.js","8970aaa090fa58c0f00a57eb04e569c5"],["/lib/velocity/velocity.js","c3e2b2d8d78787b54c38a6509715bfbb"],["/lib/velocity/velocity.min.js","eac6fa6ad4bff5bfde25e43360dcd51a"],["/lib/velocity/velocity.ui.js","4492bc1a9b215c57a9d9045462ec93f9"],["/lib/velocity/velocity.ui.min.js","85fd9e8100a7d4ebdcc252f4ed5418e9"],["/links/index.html","086c69578c39184211fe1655d6ca7c63"],["/movies/index.html","7b65d3f06b47e8233066b4c5da4be64d"],["/page/2/index.html","7d0ec908a7d91a018c3810d7db27ea69"],["/photos/index.html","fb77892468a0b82a29bcdf259fb808e2"],["/posts/191ddb73/index.html","34034ea62f6a2015b46b88b942bfae7e"],["/posts/1a195976/index.html","e370acaf33ac3fc44c1e181fb8cc14bf"],["/posts/2fc77d95/index.html","00da10319d0add1eecbc22bf35edf5c6"],["/posts/2feacaf4/index.html","9a7fc909023bda8a8c72e5010f6ee5ac"],["/posts/37f2c331/index.html","8be4a30852195002674fd3aaf01aad95"],["/posts/385f0de9/index.html","d4e18f3d24a2dfbb100b7cdea1dd1281"],["/posts/44414303/index.html","56617a59d59da0d6a7a9533fc2432564"],["/posts/45e51894/index.html","d6238c25e9d253c61db6e3291c05ff48"],["/posts/4f1131af/index.html","e8232a90059be2d2c803e2ffb2d38222"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","06f524ffcac196c0b359032d9c60b1e7"],["/posts/53bf1d9d/index.html","50dea8c9e9b9ebe2e391980c2d744413"],["/posts/63556f52/index.html","4dd4692d4f2aa50df87db94ef80cd843"],["/posts/6d49ceec/index.html","79e2e2f638f3a083784c1a930bb13046"],["/posts/6de7d9db/index.html","cb63a265ed75ec444bc1749e811e4454"],["/posts/97e5bc9c/index.html","5e8ef714d33dc5c80e89cc2e98c3566b"],["/posts/c311b112/index.html","b9765b439399e03ef2d00d3acddf1f7e"],["/posts/c620d4c2/index.html","09a5adfa6febaf6be3f9a1bb98ae1c06"],["/posts/f8073739/index.html","5af2b4c0dc03a0248ba2252aea9c07d0"],["/posts/f97ef43b/index.html","add40e593f2fd29e960970a7262e5d13"],["/posts/fa84d5fc/index.html","0852d2b4654d0ead45b76f6b6fa538ea"],["/sw-register.js","55523f0f1afeab8af6709c6ee0cc561d"],["/tags/index.html","969c3ba02f41d4cc53a0662747f52cd6"],["/tags/つぶやき/index.html","adbf782daf6ce542911c4ac7a93b17f9"],["/tags/インターネット/index.html","7f361b0b3ddf7fb1d6ff76bbfcf6c436"],["/tags/チョコレート/index.html","3cbe29995220283c37f8dcdfa65b8fc6"],["/tags/中国に関する新聞記事/index.html","09f72191e72047a855249be0bb398ec7"],["/tags/乳製品/index.html","db4813a4fc752516b22882cf6e0f9a84"],["/tags/労働者保護法律/index.html","1b21df1f209be788f8f238e990dc4f51"],["/tags/日常生活/index.html","da2a7b3759bc02b51b90615c6854bd4f"],["/tags/日本のIT教育/index.html","df5ce79e27becd8dfaea97898c715bcb"],["/tags/日本のIT現場/index.html","90f4f3648ee2c60669ba029f0aa9bc9f"],["/tags/日本のビジネスマーナ/index.html","5f5e61dbf9123494a4e59d91a3dcf0ed"],["/tags/日本の国内の人権状況/index.html","35963eb1a91c733abbb4b07f4e81c795"],["/tags/日本の経済新聞記事/index.html","a53740a61b6a085dda7b96ce8f6ab54c"],["/tags/過酷な現場/index.html","ff439ebccb6785be2be3041cb01339f1"],["/tags/食べ物文化/index.html","bf18a58d701356a6df5096f2a8fe8bfe"]];
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
