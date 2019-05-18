/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","cb5a9819ea042de642747b5120f8e64f"],["/about/index.html","8b7f983dd11e3d1c7afbfcdf77372fc6"],["/archives/2019/04/index.html","b78a06eded096071505986f743b8bd9d"],["/archives/2019/05/index.html","32e42b99ae5b1dfd66f7556c847bdfa4"],["/archives/2019/05/page/2/index.html","c0b158868c9696fa8e6a2829d98ed8be"],["/archives/2019/index.html","5f884d0d643a1159adeccc82201a05ba"],["/archives/2019/page/2/index.html","180f726f5a9c2fa286e887f6c2c2f03d"],["/archives/index.html","8680476ee3628e1a0c45e6b64d2c603e"],["/archives/page/2/index.html","f9c002d7f3f72f00b6fcfdf31e65a6fe"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","89899f916be189d2633737eab78f0eb0"],["/categories/index.html","7ef5267ce4d41abfce5bd686f44b29a3"],["/categories/つぶやき/index.html","550e3db9064c27bb95b9db374e82f67f"],["/categories/インターネット/index.html","2dee9f069a8f6a99dd3d5272d7a5b59d"],["/categories/中国に関する新聞記事/index.html","0e3fb4b8f04972fb4d74e27d09b4c918"],["/categories/労働者保護法律/index.html","7b284bff38b792d72338368086a7a1d7"],["/categories/日常生活/index.html","5dc4f6a381602ed8c21061a924ae7c9a"],["/categories/日本のIT教育/index.html","512dec67efe4eb2356bdc33d5fdfb630"],["/categories/日本のIT現場/index.html","3624cb584d9ab2ebd361f28919fef2da"],["/categories/日本のビジネスマーナ/index.html","81d54be8881fa28752b7bd3a177ea7ec"],["/categories/日本の国内の人権状況/index.html","4e9fb45195c5b8b2fe25749f865923a2"],["/categories/日本の経済新聞記事/index.html","fec7be0d0fdebeaae89fef09142c81d8"],["/categories/過酷な現場/index.html","aadc39608285626f151017584d72185e"],["/categories/食べ物文化/index.html","5a95642e701bb949b1fa615ba9ead90d"],["/css/main.css","34aead8f41f669d113e706f1e6d70a2c"],["/games/index.html","02c59ba3e5f75c40dea9b5411ecc9ab9"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b816b4fe920fdd6d831020350a80e8d6"],["/js/src/affix.js","f4b226fc3a6efcec8670c3b17badb3c9"],["/js/src/algolia-search.js","8cff69baafcd82262702dc8d14b5c5d2"],["/js/src/bootstrap.js","7ee4abe8bbe5ae46cfe0e1671e042aa9"],["/js/src/china.js","6aa894c097988db40ff4e10bdef08614"],["/js/src/echarts.min.js","94d8bbda62aa8ab03f4e617047780dc4"],["/js/src/exturl.js","743df7d9e414f543128d405a4247eacb"],["/js/src/footprint.js","d40d66edb65540937580c8551a7506e5"],["/js/src/hook-duoshuo.js","5eb364e93147d779c29adb1e2a7929c8"],["/js/src/instantclick.min.js","ca863bce35cff8b127ae980e0137b95e"],["/js/src/js.cookie.js","be3cc53ad27ad2fac2c9ec97485a30b6"],["/js/src/motion.js","6307bc37c3971d9b2e8045d01f5ea128"],["/js/src/post-details.js","a4fabcbd86f2c41653e9629f559e2f83"],["/js/src/schemes/pisces.js","3cd3fe0b13f0f29434171554f49b1722"],["/js/src/scroll-cookie.js","101c25b9b065bb3c148e0f9b1494da66"],["/js/src/scrollspy.js","004e10884748a71af3c0c1b0f582fa08"],["/js/src/utils.js","876c24a79c02e9b1ef9f1daa64c13844"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f2f342ad5e026e73d726a57e00f7b747"],["/lib/Han/dist/han.js","8ae14f0c860e143d1becfee871adaf3f"],["/lib/Han/dist/han.min.css","4913b035a3047324968763a3f034f997"],["/lib/Han/dist/han.min.js","2dfd0955b8b78e4aebf2b5e91d92d317"],["/lib/algolia-instant-search/instantsearch.min.css","04284824066f8b011f771128dc49e637"],["/lib/algolia-instant-search/instantsearch.min.js","f5c9b3330fa54d118ca36c2a7dc283f7"],["/lib/canvas-nest/canvas-nest.min.js","65106de0ab1b4d7ba1f9f8d48a1e8737"],["/lib/canvas-ribbon/canvas-ribbon.js","b64300b2e58dcbfb47221e41d4887f82"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b4cfc7114d11a62c2aba2860f07bb1e8"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","347e696955658bba69e1c997e714e9ee"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5016eaa753762fd51e94126d2fd112a8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5de0bf18dc6f41a4e739786343e47e18"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","ae3b5990307a25f32117e6604938373c"],["/lib/fancybox/source/jquery.fancybox.css","1dd669e43d90d2a90f9661db92cb5097"],["/lib/fancybox/source/jquery.fancybox.js","6156563839527acaa8aae7359d7ec4a1"],["/lib/fancybox/source/jquery.fancybox.pack.js","296a2fb48a2999fcb27bd41205b6d259"],["/lib/fastclick/README.html","96a0f8cd63eca1ab03f85f3782819afd"],["/lib/fastclick/lib/fastclick.js","3c54256b075d0037db0a208feb100b97"],["/lib/fastclick/lib/fastclick.min.js","fd6672d904bd1e12129ddb9ff122bd02"],["/lib/font-awesome/css/font-awesome.css","73b929934e11220e4124234a5b7adead"],["/lib/font-awesome/css/font-awesome.min.css","559b4e284eaad1e7e71c4076d5582eec"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","b5b779259e9164fd41dca627ae371d68"],["/lib/jquery_lazyload/CONTRIBUTING.html","49b383eea4bddc10cd66c2985f20ff3b"],["/lib/jquery_lazyload/README.html","53b0fb0c120f619064ac7a866a56ee2d"],["/lib/jquery_lazyload/jquery.lazyload.js","4fdf13c8830931c12fe2ecdca84a92ef"],["/lib/jquery_lazyload/jquery.scrollstop.js","19f7d2b1dea7cc95ad28f6b8b8b53189"],["/lib/needsharebutton/font-embedded.css","d0573bf5b7670547864a8df1eb1e0cf2"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","3fdcee7b1e2403e8853606e41b9e31c4"],["/lib/pace/pace-theme-barber-shop.min.css","7400db943dc65a2631d2ab8267638c4b"],["/lib/pace/pace-theme-big-counter.min.css","1cd5a2a18edd0112343412fdb810f4aa"],["/lib/pace/pace-theme-bounce.min.css","a3c1d1d9e94a5823367bcd33d6deefa3"],["/lib/pace/pace-theme-center-atom.min.css","8e9bd7eebbdcd3a7b6039770b83a1101"],["/lib/pace/pace-theme-center-circle.min.css","466a0bd5d06d2fb6cb58739b224caded"],["/lib/pace/pace-theme-center-radar.min.css","047004a8c5608aa42469b88c7e2c3f8f"],["/lib/pace/pace-theme-center-simple.min.css","e2a7a38f37229f06f3a893da84f6eaa3"],["/lib/pace/pace-theme-corner-indicator.min.css","a2b9bcae3be0cd66060dc76111dac38d"],["/lib/pace/pace-theme-fill-left.min.css","6e2939a3f24b8c4c2eb27ebfbf6b47b9"],["/lib/pace/pace-theme-flash.min.css","df1847b34d6051b1534c1284d4294cde"],["/lib/pace/pace-theme-loading-bar.min.css","f939757d73cd6059e44c0421c1d70a1a"],["/lib/pace/pace-theme-mac-osx.min.css","2d449f146b27854456b2e0cdc0e5a921"],["/lib/pace/pace-theme-minimal.min.css","a2047ddc2c48b8ec07745ca423433844"],["/lib/pace/pace.min.js","1ced8fa4d0b18837779f9d9b9513d32b"],["/lib/three/canvas_lines.min.js","ad1184c139004ac2a6db4aae54e6940c"],["/lib/three/canvas_sphere.min.js","a6196d2c6450d9de6575d4aa109a9d52"],["/lib/three/three-waves.min.js","32ce5ef718a790dae3d3fbd4d56db66f"],["/lib/three/three.min.js","5765982747b856a4fa3dcac8d31da24a"],["/lib/ua-parser-js/dist/ua-parser.min.js","aa095401dd7651b049a54c4776039b4e"],["/lib/ua-parser-js/dist/ua-parser.pack.js","42310c3e68eb68929329bcb9a992dfe7"],["/lib/velocity/velocity.js","eede6a057f7d7813c3c017e539023ef3"],["/lib/velocity/velocity.min.js","ee37a06619ab3830614028d79727873f"],["/lib/velocity/velocity.ui.js","5d324f4fe097616b94c8e81cf29abaca"],["/lib/velocity/velocity.ui.min.js","f00e3f9e6856c155c9f34e7e85048275"],["/links/index.html","1169373ef210144b9b4afb83f27cfe02"],["/movies/index.html","993acd230e32f41774e8a4fce9b7e87c"],["/page/2/index.html","80434add91bdc2cc03242c3bd5e3db83"],["/photos/index.html","c3432bf39c73ed508468e9e90eabe4e9"],["/posts/191ddb73/index.html","807979ede3aa223cd3cda4ee585873b0"],["/posts/1a195976/index.html","322979ecf810d5273a8f244024c57e60"],["/posts/2fc77d95/index.html","e32d71fd06cc9c7c6222e47f49b6b467"],["/posts/2feacaf4/index.html","8699954594e905f7f928d295ede8fb21"],["/posts/37f2c331/index.html","c99df91b0897aaa92e9862119cc3ae71"],["/posts/385f0de9/index.html","08701a999f1757756f629c154977d1ef"],["/posts/44414303/index.html","d5d67db7e751ec97da9f85b229b514c8"],["/posts/45e51894/index.html","16a2b2909e2860c6657ccf4a67379746"],["/posts/4f1131af/index.html","cdbd7d82137d7c5b10b248ac0ebbea15"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","cbed575a28cc5e2a821f7e2d7a2b0c10"],["/posts/53bf1d9d/index.html","1059968722c1b359d52c5649901b8951"],["/posts/63556f52/index.html","431f962a5326878500176dcc81b7662e"],["/posts/6d49ceec/index.html","4e8c69038f2c634412cc539af0dfba8a"],["/posts/6de7d9db/index.html","8d9ed57a5392db51578a56e47f593732"],["/posts/97e5bc9c/index.html","0627c0afca45e598ea528d22af5c1257"],["/posts/c311b112/index.html","cb6f3168993cfec62be8688663e08c84"],["/posts/c620d4c2/index.html","7d45e0c1020eab814b2a96dec7b234d1"],["/posts/f8073739/index.html","6b87787fa54ea0cb5303d35d5789c6c8"],["/posts/f97ef43b/index.html","a1a1f54a2e4326a135455b52715d32e8"],["/posts/fa84d5fc/index.html","2b0de9199df75b66da095c8dd0ad46bf"],["/sw-register.js","ba9e661d43f5863425c57bc40dc6e18a"],["/tags/index.html","03573257d733a6dadf8009e1566298af"],["/tags/つぶやき/index.html","114c04ac0863b5329c8d785ce9258c83"],["/tags/インターネット/index.html","34520a4703fcb7b291a6dcc5827308bd"],["/tags/チョコレート/index.html","e419fcf821e1da77f5ffd61af35e662c"],["/tags/中国に関する新聞記事/index.html","cbe8f1dd8ebb972c1bc560b59d6186e4"],["/tags/乳製品/index.html","2890b42fe084ab1255eacee03eac4e6b"],["/tags/労働者保護法律/index.html","ca586d7977b8940aa34be7e00df505b1"],["/tags/日常生活/index.html","eb01707fa077fe43209d0742acda83ef"],["/tags/日本のIT教育/index.html","caa820071b9207ab59b291fb60b5de1d"],["/tags/日本のIT現場/index.html","c6614bbf11d78bdc4416fb1de90aaf6c"],["/tags/日本のビジネスマーナ/index.html","3a3dcb9895c696af47bef0fe3bd013af"],["/tags/日本の国内の人権状況/index.html","5d8adde116fad61838493350a18373b2"],["/tags/日本の経済新聞記事/index.html","02a3ef8bfc9c6de8a22fd68fee887658"],["/tags/過酷な現場/index.html","f304a5e3475afc4e16796307ae84cdba"],["/tags/食べ物文化/index.html","f0fdef64ad6b27e0937d92894af0b7e0"]];
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
