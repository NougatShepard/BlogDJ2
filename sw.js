/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","acacaae448b500b35ebfeda378904e12"],["/about/index.html","0ba5740416c655e471d005528f3ccce0"],["/archives/2019/04/index.html","3ace9591558ae8805180b872bb5c30c6"],["/archives/2019/05/index.html","04a8a852165e4019ac528b0ccd4be59f"],["/archives/2019/05/page/2/index.html","dff9b0557ea87569545e5da45bc9fca6"],["/archives/2019/index.html","308ec23286f1d880cfa8bb9e874851e1"],["/archives/2019/page/2/index.html","67322d444e4fef87c166156aaba4b193"],["/archives/index.html","d214e387a36e6fc65eaf9ff65dee3a41"],["/archives/page/2/index.html","456abda1dbfb723c3274fdb195993e8a"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","162878105c9bee556ba2f48ab7f48ac5"],["/categories/index.html","4189a47344ec9fae4a1ec325fc12db8e"],["/categories/つぶやき/index.html","6a741f1e992db96ef35b427f54b81d56"],["/categories/インターネット/index.html","3ef09cdcb7c8a3566837c7278bb71827"],["/categories/中国に関する新聞記事/index.html","de768360300dbd6be979246f8d43014d"],["/categories/労働者保護法律/index.html","83298e6f5ec99badf664a4a112035d5c"],["/categories/日常生活/index.html","eee582e55f530d7bd0f1327f374d1e30"],["/categories/日本のIT教育/index.html","617e346c9d7cec03d312faca421faece"],["/categories/日本のIT現場/index.html","cab656fb0f2acf8f0a0a71f23fb3e1e3"],["/categories/日本のビジネスマーナ/index.html","85af66c981e2cf4b8fe8e871906f3bf7"],["/categories/日本の国内の人権状況/index.html","ca6d2254d44577ccd74131109e2e9bc2"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","cf5ccc941b1c95e8aac85f56f5da406c"],["/categories/食べ物文化/index.html","e687d9e46a3f3bcb9ff219dfefedf295"],["/css/main.css","8f89dd766b206d9918257df56fcae6e5"],["/games/index.html","8bf246ed1b1a6913fb7f77a36ff2e6e4"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","9335e933f5277b827893fb0c75b475fc"],["/js/src/affix.js","96f2bfca6e51c86dba7039b70d0251bb"],["/js/src/algolia-search.js","b1ae8434b22222d790feabb0646b08d7"],["/js/src/bootstrap.js","17919a8ef4b394723f64cc9181ba2141"],["/js/src/china.js","a817b4fe866c6d20ee435668a14c592d"],["/js/src/echarts.min.js","03b7281c48d6d4d35438628d96b095f9"],["/js/src/exturl.js","746f59a9c86e8b463b17a8174ab66534"],["/js/src/footprint.js","a2c4740d65bede36d4518626f2bb9b50"],["/js/src/hook-duoshuo.js","ad20adf15a4a45d2fee65308b52622ff"],["/js/src/instantclick.min.js","f63d1c89c0e2dcc1e7c70a317c26ea98"],["/js/src/js.cookie.js","77a83011da5c980bf790d9f86e781b58"],["/js/src/motion.js","8d1ded714810c0acedb8cafee7f704d7"],["/js/src/post-details.js","1ccbbaee9e7fd2cc3594825650705093"],["/js/src/schemes/pisces.js","6656e0cca1ba085c18ba34466cd83c2f"],["/js/src/scroll-cookie.js","fa0821929088878f0f808086ee31e3b5"],["/js/src/scrollspy.js","923d6e7453ea16ce8f683b13924091af"],["/js/src/utils.js","ab8b9d759b1794e430a84b5b60bb7641"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","d0fb269cba86860d272490509dc9f056"],["/lib/Han/dist/han.js","e06d72b7a7372ec999b8e30bd8d91899"],["/lib/Han/dist/han.min.css","84ac9c8ae9cb3704e996ff6fe9ff758f"],["/lib/Han/dist/han.min.js","f528c849913b43db853bd2ef408a99fa"],["/lib/algolia-instant-search/instantsearch.min.css","a3c5400cca5fa63a5f10bb3de8672c9d"],["/lib/algolia-instant-search/instantsearch.min.js","5c6810535a972b7624a07d0e68d8e255"],["/lib/canvas-nest/canvas-nest.min.js","c84b9ec9bfa325487e3a14c0b003df7e"],["/lib/canvas-ribbon/canvas-ribbon.js","6b76d3781daf56cf4c406ce00dd826a4"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","6801e80e0b4886a8cfd28478858123c9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","138abfa8f84c2f42453f4880fce976e5"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f93367ce8bfacb4b551b085dbe648b78"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b4ab6cc536a87cb95336872289f2e5b0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","923a3c47df725e6b6bd7fc407a07f38c"],["/lib/fancybox/source/jquery.fancybox.css","95954e3ba5a7d12eb25cf8f6a58d27db"],["/lib/fancybox/source/jquery.fancybox.js","83d646200a11706dd7bee6459e21cfee"],["/lib/fancybox/source/jquery.fancybox.pack.js","164eb07d7012e8dc2b64474078dfe562"],["/lib/fastclick/README.html","9ab85ae4987fd1bb4c503ed6a29db487"],["/lib/fastclick/lib/fastclick.js","9cd2691c2a84aeae11f8bc27a992c13b"],["/lib/fastclick/lib/fastclick.min.js","f087f8efb566ed8fa53e539b73974742"],["/lib/font-awesome/css/font-awesome.css","1ed97c76bcbceac6603b8bdb9c1b5e12"],["/lib/font-awesome/css/font-awesome.min.css","1ed97c76bcbceac6603b8bdb9c1b5e12"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","6d3ae4ebafa6f3d47dd55485ee975adb"],["/lib/jquery_lazyload/CONTRIBUTING.html","10ed5ae162550ea6c58597229c461ad7"],["/lib/jquery_lazyload/README.html","98aeb991d3dc1c6911f20a542baf99b5"],["/lib/jquery_lazyload/jquery.lazyload.js","64136fffdd73d79959e79f8814f65b68"],["/lib/jquery_lazyload/jquery.scrollstop.js","c3f5bccd13eec8dfac283a0dc2b28523"],["/lib/needsharebutton/font-embedded.css","9f36f50729a7062dc99417136901901f"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","fcedd2625663ab4c7f042fd81c7577a8"],["/lib/pace/pace-theme-barber-shop.min.css","58a29dbebc3d3c96fe502072cd89157f"],["/lib/pace/pace-theme-big-counter.min.css","c9a347f55a2054de2986da024d44085e"],["/lib/pace/pace-theme-bounce.min.css","d9ce4d0b123c0b6f2372df216be7e084"],["/lib/pace/pace-theme-center-atom.min.css","165be1af9d80b0e88e6c49a6655ef78a"],["/lib/pace/pace-theme-center-circle.min.css","0364807bad8b923fe254699bdd028d29"],["/lib/pace/pace-theme-center-radar.min.css","9d1312ba09bbe6658fc562a337e8e680"],["/lib/pace/pace-theme-center-simple.min.css","07fef3ae1a0ac19e91a78f1fa9eccef4"],["/lib/pace/pace-theme-corner-indicator.min.css","06d37992f49becb8b9fc098733c98ad9"],["/lib/pace/pace-theme-fill-left.min.css","35770b3fdc098ff3b15fb6c2ef17b5b5"],["/lib/pace/pace-theme-flash.min.css","f49ac2f2435e92b41d53b45106bb70b9"],["/lib/pace/pace-theme-loading-bar.min.css","cb050b3fedd94a1367b05e5f5e46e519"],["/lib/pace/pace-theme-mac-osx.min.css","1443c6e09459369e0c0e2e1fdd7d6110"],["/lib/pace/pace-theme-minimal.min.css","01b69c0a6fbeaf3297539f686bf594e9"],["/lib/pace/pace.min.js","60a3428f65ccaaed37608fd51cf338a2"],["/lib/three/canvas_lines.min.js","83d2b3c3bca0aff0a4d76ff4d4368e9c"],["/lib/three/canvas_sphere.min.js","f5d8092666157ca32d5eba7bcd3ac046"],["/lib/three/three-waves.min.js","798a326f712f97aa7a67ed53f79c3e97"],["/lib/three/three.min.js","027e66b1ccda76121c4e3643d18f62b2"],["/lib/ua-parser-js/dist/ua-parser.min.js","168538d4834f134a1838594d7581dff7"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f13a98d59621d030b44facda0d19c0a1"],["/lib/velocity/velocity.js","9f172e73ca3c394fa9716bbbaad98397"],["/lib/velocity/velocity.min.js","f4dc09c5e9c073c8cd163a49a597fd07"],["/lib/velocity/velocity.ui.js","c396bf9294fb2d1e75d339f07533bf7e"],["/lib/velocity/velocity.ui.min.js","0d2795cbc70d8eb88d13da75d98c62a3"],["/links/index.html","422f7043733aae782bfac319e51beec8"],["/movies/index.html","2555dbc17a56bc560be69638a64996e2"],["/page/2/index.html","b94653066de6df968642f4a84cfe7d06"],["/photos/index.html","5d6eae97cc290685b9d90bddd06a7657"],["/posts/191ddb73/index.html","8f8a40391faf845a9e38cd010039998c"],["/posts/1a195976/index.html","58d3c478f77445f2cab3835e18d9c62a"],["/posts/2fc77d95/index.html","f255ed15e9565c55b9f38bfe5556dcee"],["/posts/2feacaf4/index.html","e3e88bbf8f6e6c455ccd863aa29268ab"],["/posts/37f2c331/index.html","020da5fdbdb2b43354e45b962b7b40aa"],["/posts/385f0de9/index.html","1ee24b53de6c9b779d246174b8c835f1"],["/posts/45e51894/index.html","0b08972ffc3e261c0a8a664c8ed16e37"],["/posts/4f1131af/index.html","66746b7785a8085159d756a7356ba8b8"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","169ae7882e1ec5ea1bc79ba51d788dde"],["/posts/53bf1d9d/index.html","e9a9ba7166116c61bf457e4d0a4adacc"],["/posts/63556f52/index.html","e106e1a18bb6b97ffb56a506e6179690"],["/posts/6d49ceec/index.html","dfbd26b771d754e10bbc0fefee86ee98"],["/posts/6de7d9db/index.html","93e8985eb01801d2ed219d469c3cd631"],["/posts/c311b112/index.html","80869e977454330761c0b84aad2c1bb2"],["/posts/c620d4c2/index.html","77fad1c90538e63a5bcd7d001c38fdca"],["/posts/f8073739/index.html","c5fb69e4c97736f4c8a6438a291f1801"],["/posts/f97ef43b/index.html","759283088260aa932ff11c11642df536"],["/posts/fa84d5fc/index.html","cd3b45259fae450e2bb6f6a8a6b8ca7b"],["/sw-register.js","c4ab69753c7539c2b936ccec5511fc07"],["/tags/index.html","14956f5e64d9a8da47937c45a6fa863f"],["/tags/つぶやき/index.html","dd284b3e1a8c6b44c68354076045a890"],["/tags/インターネット/index.html","bb1a265d515fec459c8585c9f75fceef"],["/tags/チョコレート/index.html","3dff917e0115bc42344d8f44a05fcd36"],["/tags/中国に関する新聞記事/index.html","4291d6c1eb27729265a6ba06d0639cde"],["/tags/乳製品/index.html","f2afaacb29f1f137e1ba0cf4fb4c93e5"],["/tags/労働者保護法律/index.html","024357d69c6ffb7efd783581eb7c5308"],["/tags/日常生活/index.html","74e30c72c3b2395cdfb7e0ea7c0b2c8b"],["/tags/日本のIT教育/index.html","835d76f5a8811e46e900c6eb6cb462d1"],["/tags/日本のIT現場/index.html","03d466f35523b10dc4573879dca17081"],["/tags/日本のビジネスマーナ/index.html","80a3752542084fa55b992bd4806497b8"],["/tags/日本の国内の人権状況/index.html","24c70098bd401a438075087af398ab90"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","afe648780956d466cc2376051a3f4ff8"],["/tags/食べ物文化/index.html","51eefdf95844a6bcabe5191fdfdf936e"]];
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
