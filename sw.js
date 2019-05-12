/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","874ac92cebdc40cd98140bacea897938"],["/about/index.html","fa22b5bf06c454ef5a76e0ea5e7750be"],["/archives/2019/04/index.html","fb42bcb02a9abdef143b9337c5d76336"],["/archives/2019/05/index.html","a3def68c5a1b377187939f55b8dfeb63"],["/archives/2019/05/page/2/index.html","7d49077b6ce2bfc8f9c25d87020612a2"],["/archives/2019/index.html","0b09cd697f1c05851aaeb0d5d2c28657"],["/archives/2019/page/2/index.html","a39957bfd555f999156307ed71a2b0c9"],["/archives/index.html","a86981083c0e89432e52e8e6b0c3eb6f"],["/archives/page/2/index.html","bd29b9ef4b2ed3d878b48d89e466a853"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","236057ff6c7959ea1435c0b677c29e71"],["/categories/index.html","cb09011432a1fdad6fce0223e3924f5f"],["/categories/つぶやき/index.html","cd7683b355394b57f10de8876b949f28"],["/categories/インターネット/index.html","92d5e81bb0e1e37e1d08d45564af82c3"],["/categories/中国に関する新聞記事/index.html","48e6ab1809279a702fec3c1df7f4d8f1"],["/categories/労働者保護法律/index.html","dc280c61b34212919d55a5c1dfab22bb"],["/categories/日常生活/index.html","abca742d960ae3e68431a7729dccb1b7"],["/categories/日本のIT教育/index.html","dad9de03a71f28c5087e30dd0f445336"],["/categories/日本のIT現場/index.html","8394dd41f9e0527c756aab7abb320b4c"],["/categories/日本のビジネスマーナ/index.html","e430f685f0c4f0029485d1f6b955bedf"],["/categories/日本の国内の人権状況/index.html","3c324b8ac520efa168801900fc159481"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","4e2042e65a0a0b4043ad29ad5a3ab038"],["/categories/食べ物文化/index.html","c7ad650983ae0db5f03ff2eee474111c"],["/css/main.css","4a0690c69d8177716fb963385bf5cfe4"],["/games/index.html","7895d6b1caae89201b6e16d9e65973b0"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","9120bbb59654c8153587a7c9308fd0ee"],["/js/src/affix.js","56225cd0d4bda8672b5a5c72c8914c48"],["/js/src/algolia-search.js","da5bd8f78e37d0358e4d567e09c691ab"],["/js/src/bootstrap.js","2199c8e0108e51be861d7fed77313e23"],["/js/src/china.js","bdf28eddfe2666f1b7bef90e07bbfe30"],["/js/src/echarts.min.js","3e2f0232f9b46124f43c4d06b32b404f"],["/js/src/exturl.js","aeb26998d9d86a73d568d64927e622a5"],["/js/src/footprint.js","dfef8c3fc9747718862568449049352b"],["/js/src/hook-duoshuo.js","c30436cbc0c9ea4b29384f4fae96975c"],["/js/src/instantclick.min.js","97462dfbd51d2e72ba087cc74236b46a"],["/js/src/js.cookie.js","919c2a7c97e5d8230abde4b0c6cc9a03"],["/js/src/motion.js","10e5a64f6eef0628dd0965db64594738"],["/js/src/post-details.js","6a3ee233b8ae94bb66400acc18a8623b"],["/js/src/schemes/pisces.js","b940fa44582869023a44a0258fa059d5"],["/js/src/scroll-cookie.js","92b91a55ee146d3c8e43749d68cc27e7"],["/js/src/scrollspy.js","8dfb7b090edfc08ff3f7fde30d1e1e22"],["/js/src/utils.js","bf1c6f7cde8974ca53a76c52ba3a77cc"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","e3f3e88136586567d8fd1f5708e36868"],["/lib/Han/dist/han.js","cc92c35768a71c1e63772c1d401d0ec9"],["/lib/Han/dist/han.min.css","833d98144f07a464dc09fa9291cc131a"],["/lib/Han/dist/han.min.js","b633e9b117842d2388c3c3c2ea627a75"],["/lib/algolia-instant-search/instantsearch.min.css","becb5489953593a4304dd826bb980d8d"],["/lib/algolia-instant-search/instantsearch.min.js","f68cc849e66ce3ba5e7889be3b218b0d"],["/lib/canvas-nest/canvas-nest.min.js","cf4d175ba51bc6710974255857c28b84"],["/lib/canvas-ribbon/canvas-ribbon.js","2d97e7a80194818e879f7467fa21d227"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a4e2514edd0255f67e27189f41134b1a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4f43a8c0bd6decd15e9020f998783e3a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5f5f0487884e55469b57daf0ccb9a01d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c115e4227abf1cd413b301c54ad046ea"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7888058aa19511d52e6762eff3e8cd3a"],["/lib/fancybox/source/jquery.fancybox.css","c3fc20613ef257798181be67c000a941"],["/lib/fancybox/source/jquery.fancybox.js","383eac2aa2e1ebca7221baa1db73befc"],["/lib/fancybox/source/jquery.fancybox.pack.js","c865f3d795e41b552460ca5f9c168326"],["/lib/fastclick/README.html","45943c62c6a9c717aa41e6ccfd15c3c6"],["/lib/fastclick/lib/fastclick.js","274b0a5e9786d2bd37a68cdf327e5d60"],["/lib/fastclick/lib/fastclick.min.js","3f3621db5ddc5b3195ea415407718900"],["/lib/font-awesome/css/font-awesome.css","26ec2561249f2374758ef0f0cffa9179"],["/lib/font-awesome/css/font-awesome.min.css","26ec2561249f2374758ef0f0cffa9179"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","892f92d5fc9dede8f27330bf66e9a96f"],["/lib/jquery_lazyload/CONTRIBUTING.html","40922fdf03d03cab093920ad4d68717a"],["/lib/jquery_lazyload/README.html","50914c95064fc97b38066dd87a24c57b"],["/lib/jquery_lazyload/jquery.lazyload.js","1971ea541f720b57ec51d65a48cdeb30"],["/lib/jquery_lazyload/jquery.scrollstop.js","eb7377f5e3075d0a9d09d42fc46787b2"],["/lib/needsharebutton/font-embedded.css","4a2229ec2e29bac0f2aeb6be29e9f637"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","41de332b45cf7e3fb6868a40d84ec623"],["/lib/pace/pace-theme-barber-shop.min.css","53098dc437c6d48c161119f48309dce2"],["/lib/pace/pace-theme-big-counter.min.css","1774e5a4ff9d3cbf30e84e7b191bf07f"],["/lib/pace/pace-theme-bounce.min.css","8274397fe77f2992ed23ff049bad057d"],["/lib/pace/pace-theme-center-atom.min.css","75b197eae1572754cf830c253d288783"],["/lib/pace/pace-theme-center-circle.min.css","10fbe33ee1b9c6084bc32607233da442"],["/lib/pace/pace-theme-center-radar.min.css","6dbd40a064abff29a2579a9455705d2a"],["/lib/pace/pace-theme-center-simple.min.css","dac257f57e063fd997f06a80fdac1336"],["/lib/pace/pace-theme-corner-indicator.min.css","9f4ec11ac5de9c6d30baa560ce5e2640"],["/lib/pace/pace-theme-fill-left.min.css","3311c98053b6122f9b10ff10c63b47e8"],["/lib/pace/pace-theme-flash.min.css","416c962df1d77f99216cc4d1a38fa07a"],["/lib/pace/pace-theme-loading-bar.min.css","c53c04b62090df8fee54e8a9d32cecfb"],["/lib/pace/pace-theme-mac-osx.min.css","8e233b5940cfafe1a4771a02c395cefb"],["/lib/pace/pace-theme-minimal.min.css","77876a92098e295e3081f448324ccabf"],["/lib/pace/pace.min.js","5cf8bf4f064ffb6598119a80f2cb9f4e"],["/lib/three/canvas_lines.min.js","d6281334427cad8aad209d764a11f53c"],["/lib/three/canvas_sphere.min.js","0825573a45d7925ca8c043b0589f046f"],["/lib/three/three-waves.min.js","a6226ede54ceb328f05bea3f9e66f595"],["/lib/three/three.min.js","0fc3b55677ce2da9cde48f6f2936db52"],["/lib/ua-parser-js/dist/ua-parser.min.js","d81538465d299b4ae3f31321aa193122"],["/lib/ua-parser-js/dist/ua-parser.pack.js","21c5276bf65635a2fd5c992ce187e859"],["/lib/velocity/velocity.js","43a1d8b6c7a3509523299a3213e2e329"],["/lib/velocity/velocity.min.js","ded8e617c7184c9e870c46714b7c4e26"],["/lib/velocity/velocity.ui.js","a371f64b8169cdb6669dbb8be7821836"],["/lib/velocity/velocity.ui.min.js","fa698f2fd0b069ba0438b990622d8c84"],["/links/index.html","48605753420a99b3fa576c4f63c7e913"],["/movies/index.html","adb8c364903a4362623c0a81c6f51e23"],["/page/2/index.html","6bd2018a5f5039bbe5f691f86a6b7313"],["/photos/index.html","64f9fe6e1894d50c0ba064458f8e1c78"],["/posts/191ddb73/index.html","f8a378d85c9025132d861aef733bf684"],["/posts/1a195976/index.html","fcfc6c10ca4d45a687d5760e40ae2717"],["/posts/2fc77d95/index.html","86af22948a65ad0c95fd2d92abdc057d"],["/posts/2feacaf4/index.html","1eb58bbd542e24e29a1a11718c9dd4ba"],["/posts/37f2c331/index.html","b18aa1ed34b664dce701770fb324a7f7"],["/posts/385f0de9/index.html","9624cf2461e9f5ee126133d219b7c853"],["/posts/45e51894/index.html","b02cf1031beaaedde35c9d461cbe5761"],["/posts/4f1131af/index.html","be368ac1885b96d2ae6072e4f9b4a9e9"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","678f68e2f5ccf382a31ae85b34c8b49f"],["/posts/53bf1d9d/index.html","a63a9dbcb0ba631480f1a178bcfb6d22"],["/posts/63556f52/index.html","0085af6725ae89984a11fec39e0b4dea"],["/posts/6d49ceec/index.html","bde19dad11123821026310d570602ff9"],["/posts/6de7d9db/index.html","0fed8e93df152e5b91d760d8f8b1ef16"],["/posts/c311b112/index.html","98fa05e05053845727c60b57ba38a403"],["/posts/c620d4c2/index.html","4ea62fad24284ba5ad077e8b4f9be826"],["/posts/f8073739/index.html","624ca323fe348f62241ff05523d54c4f"],["/posts/f97ef43b/index.html","d28480b50c1b2c3697c8fd44916e6e3c"],["/posts/fa84d5fc/index.html","18c6dad12cb23e2848d279d66240ddb3"],["/sw-register.js","4c2f146918a0295951a79bb48192d980"],["/tags/index.html","6ef7bb6924aab5362a35e0804f747e8c"],["/tags/つぶやき/index.html","71198b9fea5cbab25300e9fd37584886"],["/tags/インターネット/index.html","cf7e99318e01d874c0fb468c020b8954"],["/tags/チョコレート/index.html","d8c558f65d0f6aa88eadeb981c085744"],["/tags/中国に関する新聞記事/index.html","815144ef0edc4cd74e537117bdf3223d"],["/tags/乳製品/index.html","de035672f0d2fe5b0156dd6c30597a72"],["/tags/労働者保護法律/index.html","d85c41c5a026298864280f7914b389eb"],["/tags/日常生活/index.html","022630dcf604552f9fbbde3518db2654"],["/tags/日本のIT教育/index.html","d73037ffc2178f17e8996225fbf4b02d"],["/tags/日本のIT現場/index.html","08f8daf32af0ec6b75cba0bd634e48ce"],["/tags/日本のビジネスマーナ/index.html","98eb7b2cf5e07c0ed0ffd0d5119ff338"],["/tags/日本の国内の人権状況/index.html","662d06f19d2d3fe1217edc7d97001abb"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","0a90ec6c6cd8d955047c3b6f3e6064f7"],["/tags/食べ物文化/index.html","2b537632e359b1d9efbc670534e8ebb4"]];
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
