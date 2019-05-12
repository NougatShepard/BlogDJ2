/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","7108484ec9a7e4fa65943034baf1daf3"],["/about/index.html","27527108e51ca0043ac3c75f6ae94935"],["/archives/2019/04/index.html","d757881fabf9b418c79c919fdf09f798"],["/archives/2019/05/index.html","ad1b9928b04dca2c6b129a569e6b781e"],["/archives/2019/05/page/2/index.html","3b1baadde74add2df5c52fcdfa17e0a1"],["/archives/2019/index.html","7cdcf002e6429100ae522afb68b3d5ee"],["/archives/2019/page/2/index.html","448e618579dc14a2ce6219512fd4e3ee"],["/archives/index.html","f019d9c186602aa235341b5ba209fd23"],["/archives/page/2/index.html","4a5b77213db6c86be5f49f3e908b07ff"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","c20a842b2a20311b0ad4da74bd37e5ab"],["/categories/index.html","beef95f5f3405e48b880c748609f9383"],["/categories/つぶやき/index.html","d23970f05272c3e63019e37ec2b13a31"],["/categories/インターネット/index.html","f8a0075f6a72035203d755eb751c51f5"],["/categories/中国に関する新聞記事/index.html","59ccacdf3a443a13e71555ada36618fc"],["/categories/労働者保護法律/index.html","5e0c3751ea66c8818e13fd736a75c086"],["/categories/日常生活/index.html","f5e75a6ec2b0286826ff4cb1cf2f7570"],["/categories/日本のIT教育/index.html","ef9a5e79ea61e1c4e37b167af61581b3"],["/categories/日本のIT現場/index.html","8c597a199e0c7f01719d26e3f3231e12"],["/categories/日本のビジネスマーナ/index.html","5695f6e8f1d5658562f5bf8e1152ae84"],["/categories/日本の国内の人権状況/index.html","2d86776c5247ccaabcf46e2c35e4768e"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","258e2f86897dac7e8f3facb245733b66"],["/categories/食べ物文化/index.html","fccb233543fef6f24dd17d6b27c529b4"],["/css/main.css","093484483a4615739e6aa3d42b6ce7d6"],["/games/index.html","52a6a59ff3999bb8c9b6553ed2a46daa"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","318774776bcb3be58a4332cf4c45207e"],["/js/src/affix.js","5a3fed7598116a0b794c121bfe2bbba9"],["/js/src/algolia-search.js","a65d9598046c3cfc368f728ab981b02b"],["/js/src/bootstrap.js","88e1bbfa649f4dd7ad1b155f2910cbf0"],["/js/src/china.js","f9906a2610faca1fb65d3a2e56c89a9c"],["/js/src/echarts.min.js","7298231b29aa53acb2afe56d06aee568"],["/js/src/exturl.js","2c3cf90d35c1d70b8dc82f550eef0105"],["/js/src/footprint.js","3bbca1cb6715922a8a3b4e918f51a588"],["/js/src/hook-duoshuo.js","c46577e35ed832ab24bcb7ff1cd3394e"],["/js/src/instantclick.min.js","c65f43a18208d58c5a2d241e800d5989"],["/js/src/js.cookie.js","cc975b62f008abe5c1af7b457fd7451e"],["/js/src/motion.js","38b22f5b68f2328cf85bc39f7c8cca9e"],["/js/src/post-details.js","eaf5f7714aa1b4c4dbd38b96848ffafa"],["/js/src/schemes/pisces.js","148cae8b3b66ff4711353c0908101984"],["/js/src/scroll-cookie.js","5135ebf29a52e359765672c3e3c1da75"],["/js/src/scrollspy.js","96e3da566ee14fa76abf41d2c9c87cde"],["/js/src/utils.js","423ed6a07b08d65bfbbe55ec6f0f91e5"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","ce823e1cd690ef23c730e25be6cf4c3a"],["/lib/Han/dist/han.js","4872390415140f24ab009e690b91dbfd"],["/lib/Han/dist/han.min.css","e819a093432b37abc84131b768390abf"],["/lib/Han/dist/han.min.js","2e34fbaa528b4128cf18ce0db0b0c566"],["/lib/algolia-instant-search/instantsearch.min.css","198bcd39f029b234580e722fda71af55"],["/lib/algolia-instant-search/instantsearch.min.js","a615cc9c30b457c1cbddc0aa2117a9c9"],["/lib/canvas-nest/canvas-nest.min.js","57918d5cb289c1053966f960e16ac4dc"],["/lib/canvas-ribbon/canvas-ribbon.js","c78a0892ce576479ab575c50308bc307"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","6399641c76a863d9ecf55673db1fb6c9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","29e680389f1797d43ae782a518ade681"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d5c900e8ac88c21a857ae981ba75dcd0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","82eff4bb9dc9f9455d63a338eac54b4d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","668c5b3c0d2beedc71bf9555dcc44e3b"],["/lib/fancybox/source/jquery.fancybox.css","acf925356d56f4ea3cc28500ed1a8053"],["/lib/fancybox/source/jquery.fancybox.js","a87b89dafd84989ab29b313e7a2c9116"],["/lib/fancybox/source/jquery.fancybox.pack.js","4888c1599b88a7d4312a8b9780e3ea46"],["/lib/fastclick/README.html","c8d8c1a4e51b018a961e1a8fede6a7a4"],["/lib/fastclick/lib/fastclick.js","67aff738ec8e6f6806e58eefba35fcb4"],["/lib/fastclick/lib/fastclick.min.js","a042539f04747ead0fee89e3653ebc86"],["/lib/font-awesome/css/font-awesome.css","481df6a911e3114a64134756dcc70ef6"],["/lib/font-awesome/css/font-awesome.min.css","d5988051b7a76acf9a4184e020de9be3"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","9393fab177531d4c3443379c25bd75e7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e00664eda5152ab5cf5f8cfb72ce8896"],["/lib/jquery_lazyload/README.html","938d6c9a44264eea086a1f38a0571272"],["/lib/jquery_lazyload/jquery.lazyload.js","ae0ee99d2274876e75dbadab9559e087"],["/lib/jquery_lazyload/jquery.scrollstop.js","d921fbddb5bb08610e3e17e0f6cc9fd1"],["/lib/needsharebutton/font-embedded.css","a9cb91a037c52e2942dae60f8628f989"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","5feea54acf67393422fba705e627fc8e"],["/lib/pace/pace-theme-barber-shop.min.css","c1ccf6a2368a5e2255a03cafe6d5f790"],["/lib/pace/pace-theme-big-counter.min.css","f371783fbd14c5d26b11b572b0b723c4"],["/lib/pace/pace-theme-bounce.min.css","04ea38554abfa65efbac5c4b9efadfe6"],["/lib/pace/pace-theme-center-atom.min.css","00c6c06430ae1d130cb1c77b23a5194e"],["/lib/pace/pace-theme-center-circle.min.css","920d5233f3a4088c026d5001e3ada3cf"],["/lib/pace/pace-theme-center-radar.min.css","25e09ae697dd7482629a7571f715e55d"],["/lib/pace/pace-theme-center-simple.min.css","246f9e06d7a902f362ea024f02865d38"],["/lib/pace/pace-theme-corner-indicator.min.css","8c28f60336fd760a42de13ed91245d01"],["/lib/pace/pace-theme-fill-left.min.css","30b1da1db3c34d0fc28e00494fb6a246"],["/lib/pace/pace-theme-flash.min.css","2ed1a256391734217fb07982245051ea"],["/lib/pace/pace-theme-loading-bar.min.css","f324f385452858bbf3a3edc1b6baf7fd"],["/lib/pace/pace-theme-mac-osx.min.css","c87813536ecd5f249abc30401f751e3d"],["/lib/pace/pace-theme-minimal.min.css","0f5337645759334aeed6ddd96d2a1f19"],["/lib/pace/pace.min.js","44445c4f0177016d79a7106f1b813128"],["/lib/three/canvas_lines.min.js","9071c921bfb7da634419d18b6a5c799a"],["/lib/three/canvas_sphere.min.js","6613aaf54c2962414188811da1dc4f28"],["/lib/three/three-waves.min.js","8fc2653af5b0997e98582bd6ab273c96"],["/lib/three/three.min.js","da7408de106b530f6fd26e7109fd2fb6"],["/lib/ua-parser-js/dist/ua-parser.min.js","426191495d4fe11c51b59f1ff3e56f63"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f66cd039497bfe30131a64466e26c086"],["/lib/velocity/velocity.js","413d2fb1a69ddde1492aef5582307d61"],["/lib/velocity/velocity.min.js","7d510649967f5dc8f0410a540db951b3"],["/lib/velocity/velocity.ui.js","cf8c28e45baa5734808bc0a0497c247e"],["/lib/velocity/velocity.ui.min.js","6ae93b1764818b81605a4c844ddf7458"],["/links/index.html","602362110c0ace3189112b90c861ffa8"],["/movies/index.html","17e8df74eafc0ea562b271bf0abe09b8"],["/page/2/index.html","e766f5072b8dbf6bcf9e29356ee36141"],["/photos/index.html","bc702151c15a0a7fc53573e6b4a54e5f"],["/posts/191ddb73/index.html","574044c450f8d0f6ab08fe0dd0a1a9b0"],["/posts/1a195976/index.html","06aaaf8a9fe5ab104458052d2f4787ef"],["/posts/2fc77d95/index.html","f114a9d5cc325c9b0380012fd1dea8fd"],["/posts/2feacaf4/index.html","802d2af4a3bbf3bc293e4ecf1caaa6e5"],["/posts/37f2c331/index.html","dc317aa48930bfd88b149b3a58928ff2"],["/posts/385f0de9/index.html","d2ef9d1ad2e5535611d34d29f8bac8f3"],["/posts/45e51894/index.html","a7f429479ded8925317a5b24aaae4121"],["/posts/4f1131af/index.html","292bbb77440fc6aa45b5fe86a6211bd5"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","d8a40872041b28a4ddc1b9c9d6c573a2"],["/posts/53bf1d9d/index.html","d72b22f1a047c45759162a59e7e113a8"],["/posts/63556f52/index.html","15c9e979815b726bd8be7eb96b181605"],["/posts/6d49ceec/index.html","d60a2ffdc90640946725e5dd804048e4"],["/posts/6de7d9db/index.html","96e461fe734295c5a161755e423c3ba6"],["/posts/c311b112/index.html","83a2ea9c076b6b2a7351cf1e776d3044"],["/posts/c620d4c2/index.html","d44da12dda455c861a0f147ffeb41cb3"],["/posts/f8073739/index.html","9dd776be7f81a714ac7979efe6f9af09"],["/posts/f97ef43b/index.html","399d9c2e75e69f216f091d595a062260"],["/posts/fa84d5fc/index.html","3edac5ca11a15c0e482bead5ea65e3d4"],["/sw-register.js","1ba4f31cd23b6db8c7b4031d2509ad96"],["/tags/index.html","6ab5de6de707f7bb5b66ab50d48aeaaf"],["/tags/つぶやき/index.html","5ab504e5cac25b392a04282fe5bef931"],["/tags/インターネット/index.html","d91eaf14f1001844b361b67da8b48aa8"],["/tags/チョコレート/index.html","bc8701ffb55435e0e1df9046a208aab9"],["/tags/中国に関する新聞記事/index.html","a5b3314bf496edcb7847fbc77f5d2527"],["/tags/乳製品/index.html","cb20f5372d8a452b88400f2cd14d51b0"],["/tags/労働者保護法律/index.html","42639a49355d400718fefd06ac477639"],["/tags/日常生活/index.html","853a62566c8bc7a935acdc52f5c20256"],["/tags/日本のIT教育/index.html","93be48d241ba2d22de08a3bae389a257"],["/tags/日本のIT現場/index.html","968e41e34b99dd0787f24a4664ff9fec"],["/tags/日本のビジネスマーナ/index.html","819cbd0d144a2e4c0d810457ff44ec8e"],["/tags/日本の国内の人権状況/index.html","bb8c2e7f79a28e477a0bf582f440c0f5"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","8ea32f89a4367298c4cffc1051f479dd"],["/tags/食べ物文化/index.html","ec9ba5ef89005f8a1a98f1ad1ee821f3"]];
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
