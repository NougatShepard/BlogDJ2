/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","c895d0fcb0d60a5d6df8c65be14ff659"],["/about/index.html","49ad4e779d9c5a8b01479ca84e80c2bd"],["/archives/2019/04/index.html","c58f039cad49140a2566870220016555"],["/archives/2019/05/index.html","240f9e5432cc966ce27a566fbc31633c"],["/archives/2019/05/page/2/index.html","1e4d7b544e32f8909fdcc22e38a875cb"],["/archives/2019/index.html","0717dcd95be0374396e90a480988506d"],["/archives/2019/page/2/index.html","e555adc5e93bd1ea299f0b0f0dbf2953"],["/archives/index.html","bf0554119560db14d0b66c1b50e73b1d"],["/archives/page/2/index.html","87b021063a04f1d1056360d407f2c3b1"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","ac6615db9ceca574622adce3da11a769"],["/categories/index.html","30b8e6521a659bb99fd936ffa4eba5b8"],["/categories/つぶやき/index.html","ac588c709bf4f731e846d363af76de99"],["/categories/インターネット/index.html","5ddd1256cda132ac87deb2128919acb9"],["/categories/中国に関する新聞記事/index.html","4053c6bf0e5e3da06426bd868d6644c8"],["/categories/労働者保護法律/index.html","9261586dbd40cead3f10573dd2f24887"],["/categories/日常生活/index.html","8919b0c5e7e3f548fd2109687cb7a26d"],["/categories/日本のIT教育/index.html","fe8e403c6d846b04496661c40de8109d"],["/categories/日本のIT現場/index.html","e45aaaac24fe9f53426184c304c08681"],["/categories/日本のビジネスマーナ/index.html","b56b493beca0f59a25a28a56d2eea2e5"],["/categories/日本の国内の人権状況/index.html","18bcd89c102da30967341ab921ea0163"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","e95e5b959d4594907d764495f6d11cc6"],["/categories/食べ物文化/index.html","21414864ae17e119d00c7297ef0ced4a"],["/css/main.css","fcbf9d17d1e61586ef2670348681e8da"],["/games/index.html","10a8fd1ed3889766e53a7c543fdc80a3"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f65774bc58636d7c8db5bc3d23e18a72"],["/js/src/affix.js","b64b693cfb8d7ae5b0b1d088f27bb489"],["/js/src/algolia-search.js","6bcf32e52dd191a42d1e6f3adcb527e4"],["/js/src/bootstrap.js","188d3771d047ee9577f47a45874bbfd7"],["/js/src/china.js","91b2af59d03a30d6bae952691bd0c800"],["/js/src/echarts.min.js","7792e015aaf5c12627cb16f049bcaf85"],["/js/src/exturl.js","8ffa6d9ba56d40b0300c329e836b50b7"],["/js/src/footprint.js","311cc9639a4a3455c647ca4214c670bf"],["/js/src/hook-duoshuo.js","7f57298327b631b4a2ce26c7f6f8fe74"],["/js/src/instantclick.min.js","c042d3ce26d6ec6c7a1aea6aed5e0863"],["/js/src/js.cookie.js","9103d5a600ada4a1a2e2d9ad50e82928"],["/js/src/motion.js","3e256359da5fbd7a0889f700d20dd35b"],["/js/src/post-details.js","f07447ee48eea83c1a77c2104aa99cc0"],["/js/src/schemes/pisces.js","6d26b6093de58c71b0246dc4e8c4525e"],["/js/src/scroll-cookie.js","39abfcfd9246e75abc9cef9d0a29ba30"],["/js/src/scrollspy.js","ea4997e52ab4c7fb19a89b59fe6bada5"],["/js/src/utils.js","87d0e701bb6664065aff67681227c4db"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c72ed2d6a0326e071bf5e1cf0b341b99"],["/lib/Han/dist/han.js","95db332463ca4c0fad18a21e59321e43"],["/lib/Han/dist/han.min.css","2830b9a4b3a7aef4c8fb9f547280ccf4"],["/lib/Han/dist/han.min.js","2523ea1b99a278d8816c3dc415390bf2"],["/lib/algolia-instant-search/instantsearch.min.css","e5ac8777ac08b83241e79feca862df9a"],["/lib/algolia-instant-search/instantsearch.min.js","95ce3e7acba4f594b54629e7245a7121"],["/lib/canvas-nest/canvas-nest.min.js","f5c66fb5dec2365eb833d08604613302"],["/lib/canvas-ribbon/canvas-ribbon.js","7ac49717d3f19af4eebe1d2296969c49"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f62230916308432aafe51fd0cffac36e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b4a3c718d30ffb9dafe09ff9e321bbb6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6984c14ae0c400e19b7f62ee73537afc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c4f1c3033390eb6c5a7d9222199a436d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","77cd5ff643e5a84aea04420b90d66a7b"],["/lib/fancybox/source/jquery.fancybox.css","41be190d0d86ec929e495d23914d2ebb"],["/lib/fancybox/source/jquery.fancybox.js","665cde681d528c803a9f8289235b66be"],["/lib/fancybox/source/jquery.fancybox.pack.js","c069ad4333a7b150b9823e80ca09ac33"],["/lib/fastclick/README.html","4e3877f876dfd2746e7e016e6132c0a7"],["/lib/fastclick/lib/fastclick.js","94aa40d9b1b10414887be46b57981ef0"],["/lib/fastclick/lib/fastclick.min.js","bc04fbf2a27683ef53e7fa754aea8db0"],["/lib/font-awesome/css/font-awesome.css","80642ce5a0d8351fbe4668cc18d25f77"],["/lib/font-awesome/css/font-awesome.min.css","188cf1d8eccb4c68c92ca305b184b1cd"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","d73597401e29e4ae7959e074c472bc2e"],["/lib/jquery_lazyload/CONTRIBUTING.html","d8f7384e73af17d0242bc5e57562d0c2"],["/lib/jquery_lazyload/README.html","637662b075f2997fb3abe029ae5b809d"],["/lib/jquery_lazyload/jquery.lazyload.js","1e5674eced69881b03ec21266488613b"],["/lib/jquery_lazyload/jquery.scrollstop.js","c61487fd1f3934dda39b9ac18caf68cc"],["/lib/needsharebutton/font-embedded.css","31edb85a20002f2a7058321816fdb1cd"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","f92d0f3c36a4fcf15efe9025bfad608b"],["/lib/pace/pace-theme-barber-shop.min.css","fae7fb48ad9ce4acaefb82896210339b"],["/lib/pace/pace-theme-big-counter.min.css","cb54b9c4e946909ab6f5d224dcb9bb95"],["/lib/pace/pace-theme-bounce.min.css","d7b2068d4d41cb8d972348bf1af6f223"],["/lib/pace/pace-theme-center-atom.min.css","71d1b7072aebea2e51e7ea149b087cc0"],["/lib/pace/pace-theme-center-circle.min.css","529b33e6d530923ee2830d346cfc2683"],["/lib/pace/pace-theme-center-radar.min.css","8ee9577272c7417de41a200ee6077ede"],["/lib/pace/pace-theme-center-simple.min.css","3885fd91682eebcd12483f35da0aa584"],["/lib/pace/pace-theme-corner-indicator.min.css","8c657e835076158972476a2f734956d9"],["/lib/pace/pace-theme-fill-left.min.css","227d2450bd9b7d2c9c3a23e654956f1e"],["/lib/pace/pace-theme-flash.min.css","4b6544c3da6b95e0290a1213b96233f4"],["/lib/pace/pace-theme-loading-bar.min.css","7c4bb4809f7796e074772406245c1c65"],["/lib/pace/pace-theme-mac-osx.min.css","15bc020b1b42d839ccc2eddcb68976ac"],["/lib/pace/pace-theme-minimal.min.css","fd20b2eca6ab7ae54340fc138c0c49eb"],["/lib/pace/pace.min.js","65cf6b4a5d28797cc10aaaa3b75bedd5"],["/lib/three/canvas_lines.min.js","df727d17595d5cb940d675ab87338890"],["/lib/three/canvas_sphere.min.js","c8265f7865040f8fc0ef35e1277c1fe7"],["/lib/three/three-waves.min.js","e6c65a2059b4203eb313d2bc68303bc9"],["/lib/three/three.min.js","924d9c8ab560c3ce29c3911ef471d2ad"],["/lib/ua-parser-js/dist/ua-parser.min.js","bdf013d3ef7591278866ed136135b90e"],["/lib/ua-parser-js/dist/ua-parser.pack.js","fc655ed7dd56b8740d249e0c78849da7"],["/lib/velocity/velocity.js","3b629b63e73b41cb59c29fbd1dfa7414"],["/lib/velocity/velocity.min.js","d71021890a2a285929e733516cd077d1"],["/lib/velocity/velocity.ui.js","073f747510eba4d0ffd342888c1d0a65"],["/lib/velocity/velocity.ui.min.js","12dc6dc14a620ed68e7ad023df904664"],["/links/index.html","42b1c2f24155ec8a17bb9631cd960c7f"],["/movies/index.html","07531f366c6b1437b4ab64c306cd4141"],["/page/2/index.html","03835ffbfe4e01138d925e16c207bc87"],["/photos/index.html","97e063de119a3a8c3eb77434bf0338d1"],["/posts/191ddb73/index.html","14ad1b0cd5698dca69436c5dea5969c3"],["/posts/1a195976/index.html","3649b00a22aac2cd45c90856ed39dd7a"],["/posts/2fc77d95/index.html","11aeab0ae1fe7f436a503f4bee811468"],["/posts/2feacaf4/index.html","9f1d71c1af08da5ccae5805cf9ed3f92"],["/posts/37f2c331/index.html","c2a07e35b70f9295cf91b3ce32ccbf67"],["/posts/385f0de9/index.html","a9e530f0c9e026bce2e9dca6cf1262ec"],["/posts/45e51894/index.html","ea58ef883fc10923bd06329f4c46e652"],["/posts/4f1131af/index.html","312bb07798b2898f35001d113ad2c6ae"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","d6d4cb3143defce1993c562672ac2559"],["/posts/53bf1d9d/index.html","9e1bbdd58e14e158216ff8e95e22f7c9"],["/posts/63556f52/index.html","792ac5f6f5a345fb82ce4cc4ba2f7eee"],["/posts/6d49ceec/index.html","aaa2946b97e593b51cf61b650a6d9194"],["/posts/6de7d9db/index.html","0b1aac80e368d4193ed2ed032b406100"],["/posts/c311b112/index.html","8df0dbaae491f72795a3441b78e9b775"],["/posts/c620d4c2/index.html","aac454f3d69e0294aa0caf0b131c3104"],["/posts/f8073739/index.html","4a8963b1c87a19b0c722d550f1e526d3"],["/posts/f97ef43b/index.html","98918fb46ff3ce5dcfa663165b42f6f7"],["/posts/fa84d5fc/index.html","710d6826862cc21594de75e7abbc9192"],["/sw-register.js","a1cbd8f341d871a7b9035ad6e2c70284"],["/tags/index.html","49a1b1077816f4671a6138df6986ea88"],["/tags/つぶやき/index.html","ad3ca539c3e6dcb6d83f4c678f00ebe4"],["/tags/インターネット/index.html","a80d52f75569d62a15b8dc4ccebf5272"],["/tags/チョコレート/index.html","d53223f6b120288742b1c0d75c58650c"],["/tags/中国に関する新聞記事/index.html","0f2fa0284ce1c21eedd75b431099ba43"],["/tags/乳製品/index.html","e6bbcb90423e0f6613cc3165b72079d6"],["/tags/労働者保護法律/index.html","cdc532e9ad0cd907f0966c62601476d4"],["/tags/日常生活/index.html","db8f2e039d087ebbb21540b474d72606"],["/tags/日本のIT教育/index.html","a283a611ddf3f76a1a670045101255d7"],["/tags/日本のIT現場/index.html","b586059d16380c77ad25def077421131"],["/tags/日本のビジネスマーナ/index.html","fa6251020c41afaf68c9af66fff2f9f8"],["/tags/日本の国内の人権状況/index.html","0eb965cd88e9f9be95758bcf3f8d32c3"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","cf3e083706cd7769bcb0f82912be3d80"],["/tags/食べ物文化/index.html","81e7eb5bcc54df798d9a1769b4ee4ddb"]];
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
