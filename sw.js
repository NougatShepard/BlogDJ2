/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","2c28d2efdb64ec396c420995d37239d5"],["/about/index.html","63e382a9c91b0eac66f8a74944769b29"],["/archives/2019/04/index.html","cd743acb7bf3cb5decfb568faa7e8aaf"],["/archives/2019/05/index.html","6f23f3e2507e4e05a215e9980a08ce8a"],["/archives/2019/05/page/2/index.html","a3cd2c8cf855e892b8b9979391a01e3f"],["/archives/2019/index.html","2ab4e91e1ffbd4b25c0d15585b183149"],["/archives/2019/page/2/index.html","b7f017db8dd59edd97af9587c157a3ab"],["/archives/index.html","436fa183e57db5b59ab3739b495645fe"],["/archives/page/2/index.html","b1855a0f8cb828bf3a877f5e52b87227"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","65e6a765b551622b9aeda8374967ce0b"],["/categories/index.html","84dddeca12c5343f7ee6b2e2189e1031"],["/categories/つぶやき/index.html","167a2cef25efc42327611b7c32e830bc"],["/categories/インターネット/index.html","f632a0c4418a00699a32293ad189c258"],["/categories/中国に関する新聞記事/index.html","c34694d87e1244799904a8a1ddd62674"],["/categories/労働者保護法律/index.html","f4fb599292aba859a5ab134e50aea50a"],["/categories/日本のIT教育/index.html","fac57ec3b2a5879228cd881941294753"],["/categories/日本のIT現場/index.html","7074641316c4abc9345d89de5305b872"],["/categories/日本のビジネスマーナ/index.html","53c4975b1cacdf6dc5c94c395821cb9d"],["/categories/日本の国内の人権状況/index.html","c694ca9527ae25a0302fbfc2053c9b5c"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","9c2610a639059d4508590e31eef87849"],["/categories/食べ物文化/index.html","61e7f1df94f22b111ce5578a88cdb46e"],["/css/main.css","febbbb0a530c08d060e287f20a420569"],["/games/index.html","07adf0ab73306aefe1064fae7d92d7b1"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","1a2e95d6c64a9b47f478855bf23a45fa"],["/js/src/affix.js","d660c8f993ecd43dbf927e3a6878ebd0"],["/js/src/algolia-search.js","17c6899759e174d5f305a136a5120939"],["/js/src/bootstrap.js","81ae60cc921eafe95018f6a7c0d2aa07"],["/js/src/china.js","265e3dd1b946ca9d7115907f9954df17"],["/js/src/echarts.min.js","a2a987de272bcb128c1de17c1b528c2b"],["/js/src/exturl.js","3a586fa85919e66ea25644204f768a33"],["/js/src/footprint.js","4d69da1c4ba9ec50104526ee8820d710"],["/js/src/hook-duoshuo.js","84989db8d08ed806c4c7c7f35c394d5d"],["/js/src/instantclick.min.js","dcf1ea70f27883d1bc18c2e502516319"],["/js/src/js.cookie.js","9125f9027059a57d39e75a3ba126b818"],["/js/src/motion.js","934eb998157cd4d1739cd3222e104153"],["/js/src/post-details.js","34a7dc7d477b9b8e1ba00625b00a9626"],["/js/src/schemes/pisces.js","cd862535da2e647ac8b1c1655b57262f"],["/js/src/scroll-cookie.js","78429d0bcfe84b0f17ed3e79f18023eb"],["/js/src/scrollspy.js","f57f7d8b1353d82262c64b5833ec9be3"],["/js/src/utils.js","dbb4d845cb9f5bbfb960dddda78abd34"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","a3bfba2e5de441d962c11d7b8b574ee9"],["/lib/Han/dist/han.js","4feb9e64f99a6b49ed71c5599ac10aaa"],["/lib/Han/dist/han.min.css","c9121efe3a0a9061071df5ae1eee521e"],["/lib/Han/dist/han.min.js","10a3f210aa6a70bf95ca5f0e920f8c0f"],["/lib/algolia-instant-search/instantsearch.min.css","8cf53911a5c893be98c7655e67410715"],["/lib/algolia-instant-search/instantsearch.min.js","ee52e8f673c08937b725541e572475b5"],["/lib/canvas-nest/canvas-nest.min.js","11d078e1a101ff858aebb86fc7111cdf"],["/lib/canvas-ribbon/canvas-ribbon.js","51f2337935a355684c71f4d50d6bf247"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b333acfcf5ff24f53d9c0fd22c39b9dc"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","8e556df00c8a51b088aedeee76124bcc"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","db3fd30c8283c27c7fda9c5206b09bdc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1c2cd3e90d43a5db390d43353b7d10e1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fb65b8cd23bc65cfc79c7f2844a36a8f"],["/lib/fancybox/source/jquery.fancybox.css","6acb1ce15d47cd98a7a69701de54a62a"],["/lib/fancybox/source/jquery.fancybox.js","24b568a3338e369f0729b761af8983d1"],["/lib/fancybox/source/jquery.fancybox.pack.js","f7cc1306a01aa7ebac29b322903f1101"],["/lib/fastclick/README.html","915824d9abd0742920593d8ad768d6a5"],["/lib/fastclick/lib/fastclick.js","0459cda4520420cdde064d2687286aa7"],["/lib/fastclick/lib/fastclick.min.js","84c762c8509cdbb76ce34d139956c992"],["/lib/font-awesome/css/font-awesome.css","6ea7b0c2a426434d93aa12a83808068e"],["/lib/font-awesome/css/font-awesome.min.css","6ea7b0c2a426434d93aa12a83808068e"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7234a9afb03d8e8870a1652b3c247a8d"],["/lib/jquery_lazyload/CONTRIBUTING.html","62f22b488cc9739f6cda89ae5e412ab7"],["/lib/jquery_lazyload/README.html","0c6470f5e129df9303a02b5fe0cead8c"],["/lib/jquery_lazyload/jquery.lazyload.js","31d2716ab1ac297725eb74f0a5e026d0"],["/lib/jquery_lazyload/jquery.scrollstop.js","fd233964d32afaa67281b22ac48888fc"],["/lib/needsharebutton/font-embedded.css","c66b6dda25f3aed0e707fd76bf391700"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","4f232387d995f422bdd1def14a8ffe49"],["/lib/pace/pace-theme-barber-shop.min.css","6d8150cd0e8c2edab9a94f862b502c86"],["/lib/pace/pace-theme-big-counter.min.css","dd285a5dec289cdebfb4dfba64302d9e"],["/lib/pace/pace-theme-bounce.min.css","a746cf245bc2f97ef1db03163aa33740"],["/lib/pace/pace-theme-center-atom.min.css","2c58be7eefb9ed981810a93867fbe2b7"],["/lib/pace/pace-theme-center-circle.min.css","8df1340b797ae10769707b09970e8a33"],["/lib/pace/pace-theme-center-radar.min.css","c08628960d41d80f16a8ee7c6a4a0d1c"],["/lib/pace/pace-theme-center-simple.min.css","0b640cfef6e8124ae8effcce5402e201"],["/lib/pace/pace-theme-corner-indicator.min.css","431089b1e4b5926eee4a675e5e64ea91"],["/lib/pace/pace-theme-fill-left.min.css","a847e140dbbfb3811db580c205f9dc0e"],["/lib/pace/pace-theme-flash.min.css","60183a2edd77e3d1af298fe2ad1b057c"],["/lib/pace/pace-theme-loading-bar.min.css","42d2ff936034916d637d76ad8691c558"],["/lib/pace/pace-theme-mac-osx.min.css","1c42dc359475d0ae22b3af6380dbaedb"],["/lib/pace/pace-theme-minimal.min.css","20ee8d381fbbb9ef452df91152844188"],["/lib/pace/pace.min.js","81650a8981c894bb8838e14640e7de43"],["/lib/three/canvas_lines.min.js","eae2207258ecacc6cd1fb60c904a72f0"],["/lib/three/canvas_sphere.min.js","06ac3390a9b13fc0e0e881fe9756746d"],["/lib/three/three-waves.min.js","4d8a4af01cb4c3ec80626daf20bf70c4"],["/lib/three/three.min.js","6804beccf34e27ea148a11ca5d4c864f"],["/lib/ua-parser-js/dist/ua-parser.min.js","e5e956036b5d2827e0772679fb857229"],["/lib/ua-parser-js/dist/ua-parser.pack.js","37c6e0d1f8fe5b31b60b7ab7621ff188"],["/lib/velocity/velocity.js","f1a71c2f0ca618dab39b92fbdbd3247c"],["/lib/velocity/velocity.min.js","03e79548aad8e22498b97d6c5ebac0e0"],["/lib/velocity/velocity.ui.js","8dd57879d5ddfe5afb718d3b23dc22cd"],["/lib/velocity/velocity.ui.min.js","37fbd7f2a1d415563d8ecb8e2b39a95a"],["/links/index.html","3472057c9d927d8b801709a27bb18804"],["/movies/index.html","1fdd4b060755dd78753837312003e5bf"],["/page/2/index.html","7ebc704f9b0fb35e6aebe5b8c492bda8"],["/photos/index.html","8729f386d4c5974e89b2d9c34fa68352"],["/posts/191ddb73/index.html","d0407e981a458486f2bc931bf47e2d7e"],["/posts/1a195976/index.html","4c85160eff01890069142185d1e20176"],["/posts/2fc77d95/index.html","b79937d7efde46337cbe47a304276717"],["/posts/2feacaf4/index.html","45c8c5898fb04082db514efefbd70031"],["/posts/37f2c331/index.html","53eaf138b537ece59462ca72c4fa99ee"],["/posts/385f0de9/index.html","870d534c516e34e211277575ed165e84"],["/posts/45e51894/index.html","80dc07fc2bfd150cc16d62fe2b5709c5"],["/posts/4f1131af/index.html","5f663144329f7d5a4f07a96391765728"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","a68a459d2e64c2f574099bca24c596c3"],["/posts/63556f52/index.html","a58024cb6eebbc834b5747dd96651f05"],["/posts/6d49ceec/index.html","43be8abda033ede8aadd0fcfe7366940"],["/posts/6de7d9db/index.html","80aa9708dc0080c225816440efe1cfc6"],["/posts/c311b112/index.html","77ed02db6ef7bd5fbf8539071f5e6af3"],["/posts/c620d4c2/index.html","78d8f55ef8e8597afaed54099d190c69"],["/posts/f8073739/index.html","94735042f672f0d388038b6e1de1a5bf"],["/posts/f97ef43b/index.html","9d932c76b003c0d09735892ba8b29238"],["/posts/fa84d5fc/index.html","7befab12bbe6c174c0ec7a210a6b18c7"],["/sw-register.js","252ea1d66d0b0f30a7f0335fac067a30"],["/tags/index.html","9c1ed96d6d322e64f809d395de37b32a"],["/tags/つぶやき/index.html","c6862e416149c8db51f26e5372ff6e1f"],["/tags/インターネット/index.html","aca9cfb17adf252c45fabd3145f7e547"],["/tags/チョコレート/index.html","ba4e72227ccee8723332c7530fa5afe3"],["/tags/中国に関する新聞記事/index.html","cf10cb5dfb3c9b11f00519ce3a6c62ca"],["/tags/乳製品/index.html","a096d1a89506a02ba48c302b54d64c80"],["/tags/労働者保護法律/index.html","6110848afd28d56c6ff3ab1646faeb87"],["/tags/日本のIT教育/index.html","d92df10a28b7b07b7803e38797cbc624"],["/tags/日本のIT現場/index.html","355435e9bcbe1ce07ddffadc52b7fbe4"],["/tags/日本のビジネスマーナ/index.html","a7f3e71063d29109ba64f22597c4a2f5"],["/tags/日本の国内の人権状況/index.html","4d414033afed2315136feb77c2d96752"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","2ff3f7a890b2dbc06971a2b6d88168b6"],["/tags/食べ物文化/index.html","63ac59bf987eca7acf6897d5991928d6"]];
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
