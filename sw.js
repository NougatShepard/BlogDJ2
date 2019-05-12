/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","828d73c41080e54274a59806a1b1407e"],["/about/index.html","9435b103178051b3aba8f15f74d601ec"],["/archives/2019/04/index.html","af5d3871af7f2f56b5fbecd2422fe981"],["/archives/2019/05/index.html","117084f0dd3a75d80ac625de67b1c935"],["/archives/2019/05/page/2/index.html","f7d21bf4240166f6622d8033d9195fcf"],["/archives/2019/index.html","c328748b9ebd8a2feb5961d60b27d5b8"],["/archives/2019/page/2/index.html","489b30ea96f19a9bb17f9fd2f5b9fc34"],["/archives/index.html","ef9022804c2e43014ac63ab166c9198b"],["/archives/page/2/index.html","0e608ac221bf8be1c260892356832db9"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","0670ea9d1a621edfc7fc21b692d88ce1"],["/categories/index.html","cc2e8eb0da7cea530e0e9f83074ea6cd"],["/categories/つぶやき/index.html","30e5234aa12df150d1d668b6f1965cb3"],["/categories/インターネット/index.html","5e668d0c13d655363c962f692817187e"],["/categories/中国に関する新聞記事/index.html","f9d8c6f6e73930d87a08d0bc5a0cc185"],["/categories/労働者保護法律/index.html","a5359265171eb60de39377f264cfe65e"],["/categories/日常生活/index.html","06fbd078548c707a0f1179e7fe91d16b"],["/categories/日本のIT教育/index.html","251271bd6b10fe3c3dff85b6d53e201f"],["/categories/日本のIT現場/index.html","d92d65e78fec88e5da69ac3840bb7783"],["/categories/日本のビジネスマーナ/index.html","5a4704cd08b8a556b01b64ea4b7a20f3"],["/categories/日本の国内の人権状況/index.html","2f33a47e9acc27fd6cf0993dd096fd05"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","addf1d0baf1b3eeed31ab2b9cf1e1802"],["/categories/食べ物文化/index.html","8453f88c042f1e69781a170a1feacf09"],["/css/main.css","44f708fa33cc68dd880023cc44130dcc"],["/games/index.html","132c3f53351a9fa61c4c601c62811a72"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","0f5de0626ec612ab3ed525ef49433252"],["/js/src/affix.js","a9b3a36d5919edbccf53fd4980a99913"],["/js/src/algolia-search.js","bf9381dc01bd1f6654bc914133a136fa"],["/js/src/bootstrap.js","6f8ea41db1b314ca89143a439e6bfd66"],["/js/src/china.js","74089498750714375fa20d12697a8664"],["/js/src/echarts.min.js","37229717c0281db2cc33517fa8bc2976"],["/js/src/exturl.js","36c7c04e07d7110c39a61e96605c7e4b"],["/js/src/footprint.js","7036e1ed4f9862ddde16255ab503c1e0"],["/js/src/hook-duoshuo.js","65cf9686a85676f3b9f700bd476aa8bd"],["/js/src/instantclick.min.js","d70a0b0fa7304e9cacf70d00dc6b928a"],["/js/src/js.cookie.js","ff36c0ae8105dbdd823fe9b3a1eaf2a2"],["/js/src/motion.js","cb2f4288c06f8f18767c8afe848fb0c7"],["/js/src/post-details.js","608cebfc5796012cb3f6bdbda5fe3d32"],["/js/src/schemes/pisces.js","aaf4920c78fd6a956b4b1cba83a6c2a0"],["/js/src/scroll-cookie.js","a89d5a64ea1ec6f73c6c55a653d48340"],["/js/src/scrollspy.js","279e6c2ad1db5d8beedc9d45867183ef"],["/js/src/utils.js","8a47ce6e642b304c5cd3580c5f6605cd"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","08b1cb9e537668bd95bc21d21196777a"],["/lib/Han/dist/han.js","52885d09d827dd2a6384f240fd850e27"],["/lib/Han/dist/han.min.css","ea02d6a1e4327566824d3c633bd1470f"],["/lib/Han/dist/han.min.js","d14f8dbbcb9af881e2d3dbcc224f4c8b"],["/lib/algolia-instant-search/instantsearch.min.css","3217011faefc3c3f9f2ea9b2df8be7f3"],["/lib/algolia-instant-search/instantsearch.min.js","0ae90efcea74fe89d918deb1c7d32c14"],["/lib/canvas-nest/canvas-nest.min.js","485d98475c3acab0e02baacafd65e06d"],["/lib/canvas-ribbon/canvas-ribbon.js","21c6fa5d97ae81af9e832cf699601716"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0115301ab58c4a6608b3acaa1857dcd9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","23be47f8855247e53ac870053656cc59"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","54b7cc8ea249317f409ed1540c5939a7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f7d2e1d9cd5ba624cb747907a2b3ceb9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","788c9793ce1adc6de0698794c1245611"],["/lib/fancybox/source/jquery.fancybox.css","3ea8b26c419ad7abdc63aebf8b3008c8"],["/lib/fancybox/source/jquery.fancybox.js","d6dae9017c018855ba60f2029747c434"],["/lib/fancybox/source/jquery.fancybox.pack.js","9ec8063060aa8fa73daf48d6623518c6"],["/lib/fastclick/README.html","9d90519fe24b7510c6a0b9e41fd009f2"],["/lib/fastclick/lib/fastclick.js","d816845f7a861f421a4e77ef18f5cefd"],["/lib/fastclick/lib/fastclick.min.js","23fd94daf3441561296b2bf280fe9e8a"],["/lib/font-awesome/css/font-awesome.css","8f6d39ea48bbe193065b017d6ab6c08f"],["/lib/font-awesome/css/font-awesome.min.css","8f6d39ea48bbe193065b017d6ab6c08f"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7196e5eb9ab4841760475b7b5d41e563"],["/lib/jquery_lazyload/CONTRIBUTING.html","4724447cc7d3323eebb97077bd35801e"],["/lib/jquery_lazyload/README.html","4e983bba93e5503d579b61047236d672"],["/lib/jquery_lazyload/jquery.lazyload.js","b4ba38875d6b8e9df7385d3e2ff7eaa8"],["/lib/jquery_lazyload/jquery.scrollstop.js","b52696d60762842d88dbcfaae4f5ed81"],["/lib/needsharebutton/font-embedded.css","3679f388e5c7bec02ce94f07578b308e"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","617d9ed8637de9a559ce31252eb4fa0a"],["/lib/pace/pace-theme-barber-shop.min.css","9497adf9b5d99ab75dc62181ed84beec"],["/lib/pace/pace-theme-big-counter.min.css","23d8dc5227e53d7571fd78ab2dc318b8"],["/lib/pace/pace-theme-bounce.min.css","14a285c697e8980bc476eebe6615942e"],["/lib/pace/pace-theme-center-atom.min.css","95ddae3316364a0f050dcb70637340b9"],["/lib/pace/pace-theme-center-circle.min.css","b39d500c8c3a1110270f2bb5a046ce21"],["/lib/pace/pace-theme-center-radar.min.css","70f1a2d009f1368740d97e2c008ac35a"],["/lib/pace/pace-theme-center-simple.min.css","5b55a80e4c9b150c03968f01abe6d1f9"],["/lib/pace/pace-theme-corner-indicator.min.css","a6e46f89eb9c0005e896df61d6efa2c9"],["/lib/pace/pace-theme-fill-left.min.css","4adb162c521237ccfd5f6be3eb6a8657"],["/lib/pace/pace-theme-flash.min.css","a4ec6114fa0da316c25526cc04d02435"],["/lib/pace/pace-theme-loading-bar.min.css","2b4427ce12c5f32a2631f6c4f25f04e4"],["/lib/pace/pace-theme-mac-osx.min.css","f3df54548b807a96346c00183190fabf"],["/lib/pace/pace-theme-minimal.min.css","03676b6b052797fe82d7d975b63a7c63"],["/lib/pace/pace.min.js","64b3f19dc2149a63ba5b622e051ad6f4"],["/lib/three/canvas_lines.min.js","b2fbd76d144984d0ce9d4dc84c4641d6"],["/lib/three/canvas_sphere.min.js","1202d99491b2cf13f545ca65a58877b5"],["/lib/three/three-waves.min.js","96cbf5f7f14a790992ac8426d04961ff"],["/lib/three/three.min.js","10d914dadfd6055b96cdba23a4af4f9a"],["/lib/ua-parser-js/dist/ua-parser.min.js","cda7e69a0f1c1db7f12fb2ae66ebce25"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c6e8ed7ce43c1b8445602be49324f596"],["/lib/velocity/velocity.js","b021a7ead6252baa456b6de623f17744"],["/lib/velocity/velocity.min.js","afb4680bf8b6c6882b1d654ff8a6dd45"],["/lib/velocity/velocity.ui.js","6d6cd97cfda12a33e19cfcc470cca023"],["/lib/velocity/velocity.ui.min.js","696da1455922a5067e24a926df3cd25d"],["/links/index.html","17131ac0a2ffb3869711425631ef1cb3"],["/movies/index.html","d61553b939e1c3815b2aa526dd2dec11"],["/page/2/index.html","654bc6308dcc138ec7e7dcb258e75582"],["/photos/index.html","c0af60769c1becd370ef13fe6519f537"],["/posts/191ddb73/index.html","da72eaa080228e8a88d30404cfeb7454"],["/posts/1a195976/index.html","baa866fe730c8d3299f2c1b77edf1715"],["/posts/2fc77d95/index.html","24917f5d37bcdb5a5f0dfcaf21c3d4df"],["/posts/2feacaf4/index.html","5176dd6b34aa560325064d950ed893ce"],["/posts/37f2c331/index.html","a797debe014019aa59eebfe845cfbeee"],["/posts/385f0de9/index.html","75a883ebef75fe4fb246267728ac6aed"],["/posts/45e51894/index.html","0cde703cde3db05aa7919773b3884413"],["/posts/4f1131af/index.html","7cb2c70decbd33ed3acc11be09963aa9"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","1fcac62e3be311c704b03b9ba2d55ee5"],["/posts/53bf1d9d/index.html","8f833f2829c450e8a389bc13a1cab450"],["/posts/63556f52/index.html","df9790cd6a566d369272b559bdb9d611"],["/posts/6d49ceec/index.html","82b88753d41c88e3a9bd5731daa58407"],["/posts/6de7d9db/index.html","18de943695441a08f8819eaceb8ba92e"],["/posts/c311b112/index.html","184fb0c53bafef4b40ed7ab06d849943"],["/posts/c620d4c2/index.html","6f847803628f5b1bc8d8bac6c25640fa"],["/posts/f8073739/index.html","1ca9960702fbccc82d2d2b8f9d9e99d3"],["/posts/f97ef43b/index.html","de1604adf300421c8c1359e2107e03d5"],["/posts/fa84d5fc/index.html","cf77dc4d73270dde986e13b7c97fb632"],["/sw-register.js","01279ee016e4274fc5d2a821a3b8be7f"],["/tags/index.html","dd96dd32208f491d057ab455d21b5467"],["/tags/つぶやき/index.html","a58e5fd564156e1218ff417f06c2a56d"],["/tags/インターネット/index.html","883a2254c878e4ef28a2dcd5d4eeaf59"],["/tags/チョコレート/index.html","75eeab921e2da285ceb7c636dadb3c4b"],["/tags/中国に関する新聞記事/index.html","4b4db6c494d8a3f33af5f6681ac26363"],["/tags/乳製品/index.html","7cb6442f956b9c21df9f5ff77936d300"],["/tags/労働者保護法律/index.html","55e408618720fc7890caa420392f263e"],["/tags/日常生活/index.html","63bcf60f3a4fc7bdf3b8ce92ac0f9329"],["/tags/日本のIT教育/index.html","45fe6e38eccc7f82d8c799a8e378cdef"],["/tags/日本のIT現場/index.html","16df86353442829c6e2b888881a2c161"],["/tags/日本のビジネスマーナ/index.html","a9426fbb3c1a40b3f53202d2b13028d6"],["/tags/日本の国内の人権状況/index.html","a4bc0658511726f3173e9fa1f71efb28"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","6e2d3ec7090a56f519144a5e54f6e66b"],["/tags/食べ物文化/index.html","4063fcca0a1fbd0405777820a7252800"]];
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
