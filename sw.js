/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","916d4ba402bf992280fb48181494749a"],["/about/index.html","f4b4764d7819476d49083ec1fbf6fcb0"],["/archives/2019/04/index.html","ebfffab9c2e0618ed874af01b4820e94"],["/archives/2019/05/index.html","f8fe51361dcf48ad4d865f04f467aefa"],["/archives/2019/05/page/2/index.html","000ae83d87566a46d0c9d713503e0062"],["/archives/2019/index.html","2f538de54840288905273ebbc8d44916"],["/archives/2019/page/2/index.html","84a093e5d14a15e1afa9c4e239d884a3"],["/archives/2019/page/3/index.html","59e41a7251aed99704acac377a377659"],["/archives/index.html","150a37253564b5f15166647b3ff9c3bb"],["/archives/page/2/index.html","4388b0aab6657aa6faf06b579f9c23ef"],["/archives/page/3/index.html","01a7c991c7acb8138e15481b9a2be5b6"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","0db23fbd6933d59b3a36cae4fa3ef258"],["/categories/index.html","a6fa80890c702da8e8051395890784db"],["/categories/つぶやき/index.html","f116365898a23f80a3182b628b28ef9a"],["/categories/インターネット/index.html","43e90df8883e8c62d0c17400174a62ac"],["/categories/中国に関する新聞記事/index.html","79d7fc4b143ee6c508a0a31977db7747"],["/categories/労働者保護法律/index.html","bab1054ce3d78612d8c22224a0448074"],["/categories/日常生活/index.html","f065ad162472c8916842478b0278f242"],["/categories/日本のIT教育/index.html","7b1c4f4dd7d7aab53067de4ae73d588b"],["/categories/日本のIT現場/index.html","18e625945d232b26a8cdcb24b7355d68"],["/categories/日本のビジネスマーナ/index.html","4a685b8bd6d369a91c668bfab1d787bc"],["/categories/日本の国内の人権状況/index.html","475aa764bd603270690ed35714d47248"],["/categories/日本の経済新聞記事/index.html","dbf0055b3f2014bb011377cdae013c05"],["/categories/過酷な現場/index.html","62839728a3459ee3fd2f7c34188ee357"],["/categories/金融/index.html","7dc16756c8c01437f6b86ec345c17acb"],["/categories/食べ物文化/index.html","47f0111e113df780bcd6a3230bc4e94e"],["/css/main.css","a61e5c93367ddba9b9de55e630559670"],["/games/index.html","0c37e4fda8bb35b3978a96b921a93d72"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ee5640543f9d5af367632c1b043f1fc0"],["/js/src/affix.js","2f83f1738f7c6082600d546407df1831"],["/js/src/algolia-search.js","96d7b848df7ea1bf9a305edefb08d659"],["/js/src/bootstrap.js","dd24d565ddd592343eb6252a9ab44d37"],["/js/src/china.js","52964f1c2f983e9345e81b2809b81a83"],["/js/src/echarts.min.js","99cb395f9d557e18c8b9c5ffffd6003d"],["/js/src/exturl.js","0338ed8d4372977a6f1d15218c0f98d4"],["/js/src/footprint.js","063745bbb163c281ecc3d3ca573c6778"],["/js/src/hook-duoshuo.js","147475f0f2028a175834689694443246"],["/js/src/instantclick.min.js","54f6791464016490c77dfbd2f7894257"],["/js/src/js.cookie.js","2d333905c4854d1b653b9d5b716de7ac"],["/js/src/motion.js","17bb577e5addc26273ecfe6d4b64c6bb"],["/js/src/post-details.js","08a03e8fef5eb9a760075ae171b93c09"],["/js/src/schemes/pisces.js","afd7342b21713c0471293f095516b5cb"],["/js/src/scroll-cookie.js","ad1c52a0e63f0956474bc4fe7ca5e78e"],["/js/src/scrollspy.js","64a12e28f27a6102b523d83124c2feb9"],["/js/src/utils.js","2e853d55373b0cbab0f6445d0046a767"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","9f5dd2719f5ed802cfe60b26ce1455ff"],["/lib/Han/dist/han.js","b9468b6129012014d6f3112fac8f0371"],["/lib/Han/dist/han.min.css","3c9ded86fb2a90129cfef01922aa2134"],["/lib/Han/dist/han.min.js","8aa596ab2702a6deb88a8e5d929c2080"],["/lib/algolia-instant-search/instantsearch.min.css","2dbc12d9d3a2b72a001edb8ea988bae5"],["/lib/algolia-instant-search/instantsearch.min.js","91a39a10d0b918852b41c4b02fddcfb0"],["/lib/canvas-nest/canvas-nest.min.js","289f42933b9258e1dd6d60a073ea7864"],["/lib/canvas-ribbon/canvas-ribbon.js","d9ef474709bf7e6d65b651d25faaced3"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","11b2f7554f8e623965b7ce7b8589b481"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3b5bd33d06c9a95d434b6f239f627f79"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2c614aeebb82232eef1066d0cc0cba1b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9a0a156183f69bb9f6c4a87e3da04781"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","04cb6e3b05ad342feabf63aef0dc490e"],["/lib/fancybox/source/jquery.fancybox.css","df9f2c05edd6d5cd776be54a0d3ac314"],["/lib/fancybox/source/jquery.fancybox.js","399a440c75441f53756dcdba2f754e2c"],["/lib/fancybox/source/jquery.fancybox.pack.js","5a854133d89f92b7b0720867ae655ea4"],["/lib/fastclick/README.html","6efc619f7749bf45fcfc9c4bf1dbc04c"],["/lib/fastclick/lib/fastclick.js","9fcd0bfddf3b6eefcc91a2e49aa616c1"],["/lib/fastclick/lib/fastclick.min.js","155b42a60584a8fe770be6f1604ece48"],["/lib/font-awesome/css/font-awesome.css","c8440f4a4dd1b3ee312c4394f2088772"],["/lib/font-awesome/css/font-awesome.min.css","7ea9e2c390667b601086d334f310f88e"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","62bb30364b8fbe0a989802b4017ef9bc"],["/lib/jquery_lazyload/CONTRIBUTING.html","86759d99bf30cdd5c06ca2c0e96191b4"],["/lib/jquery_lazyload/README.html","bc82883709751029443d4ef9092b4877"],["/lib/jquery_lazyload/jquery.lazyload.js","dd7097fe305c8cbb2b912731f136f293"],["/lib/jquery_lazyload/jquery.scrollstop.js","c8f97287e6e03c5931fa2847624e488d"],["/lib/needsharebutton/font-embedded.css","9862f8ae5f292e4f273f562197eb3eb1"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","edcfa4c3a8c9a70b9b2ba08fa14f6f3d"],["/lib/pace/pace-theme-barber-shop.min.css","e0de1fcb98048a2d3876c83456124804"],["/lib/pace/pace-theme-big-counter.min.css","01c02d1dfadca9ba5915064a2635394a"],["/lib/pace/pace-theme-bounce.min.css","4bda5dc6490c0c6d8fecdbd232f83c0e"],["/lib/pace/pace-theme-center-atom.min.css","e238b9d30dfafa91acc7a30888b9cf8a"],["/lib/pace/pace-theme-center-circle.min.css","2b44978b14c049de3db8a61f99c1cb60"],["/lib/pace/pace-theme-center-radar.min.css","a6b9a7fdd573495e464646025773d270"],["/lib/pace/pace-theme-center-simple.min.css","edb980a712fbbb577ac96ae920562849"],["/lib/pace/pace-theme-corner-indicator.min.css","ab04520bb1dd9dc53833b75175424ccc"],["/lib/pace/pace-theme-fill-left.min.css","63b8d18127ad4843aacdeab26274930f"],["/lib/pace/pace-theme-flash.min.css","94eabf6d93e94d86cb733184b60bf5cb"],["/lib/pace/pace-theme-loading-bar.min.css","ac6f70b442f56d148121b74300861c96"],["/lib/pace/pace-theme-mac-osx.min.css","284cdf05708c4d00f455a45f84c337a5"],["/lib/pace/pace-theme-minimal.min.css","82541d73e09df54945db4bfa756fe29f"],["/lib/pace/pace.min.js","cda93ba7d0182fff14ebb11514120899"],["/lib/three/canvas_lines.min.js","5984e3c74970d7859fc3ec1e64967f9a"],["/lib/three/canvas_sphere.min.js","a47f56bdfecd5c1ee24630385e1a8032"],["/lib/three/three-waves.min.js","232b2679525cf0460b85f5925fef9522"],["/lib/three/three.min.js","50bbee3c2fdca7e1fd21ccb170f8bba0"],["/lib/ua-parser-js/dist/ua-parser.min.js","b9aa0786da189d1128fed2d65075cec7"],["/lib/ua-parser-js/dist/ua-parser.pack.js","bcf5280765819e200a76b7ac6548228b"],["/lib/velocity/velocity.js","53fb29725c2aab50fdc20d7384db038c"],["/lib/velocity/velocity.min.js","207434480e63be8ea0f0c79ec90dd44b"],["/lib/velocity/velocity.ui.js","77374e3e8109565e68b281c16b73b95b"],["/lib/velocity/velocity.ui.min.js","a7bc887063442823a6d88c211efbbca6"],["/links/index.html","bdc3b7929ddea03b25cf77acc95dc523"],["/movies/index.html","aa71c4ac7c0d717cd457c68e37c5c31b"],["/page/2/index.html","43f9d1b6ebff8d0ad54a22f0472c5e81"],["/page/3/index.html","e403a9f2185d0a93f185d0b070aff757"],["/photos/index.html","df647e3a719dc9062f62cd6a6bd62e31"],["/posts/191ddb73/index.html","4f2548e64c866c7d0e4eb5ba83da711c"],["/posts/1a195976/index.html","e1820e16204267565b6211c9b41fed26"],["/posts/2fc77d95/index.html","9fa4deb99232d42bb8467c9399870f44"],["/posts/2feacaf4/index.html","f9dee5a20d3cd5235481ff54bf5f0447"],["/posts/37f2c331/index.html","1193be303b694ebf2cf915024529a26b"],["/posts/385f0de9/index.html","3ab7c67e68176923f073670bfa76c589"],["/posts/44414303/index.html","f709c28fdceaa6adb221ac09d1c42ff1"],["/posts/456610d0/index.html","ea687ecdc73015a905b7e54d1f87a62e"],["/posts/45e51894/index.html","69659143be463b65fd284ef42643f94e"],["/posts/4f1131af/index.html","4bf2dcb402242d29834f69dab605782c"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","a52d994326e89d7a30aa2600023cf752"],["/posts/53bf1d9d/index.html","26e796cb3b2f0e6badda57d2c3d396e8"],["/posts/554c2ba0/index.html","91105332e4d45e941cd27a21b363c225"],["/posts/63556f52/index.html","088177329127a668e58aa9697e02b152"],["/posts/6d49ceec/index.html","49d8a04a654f2a2219eee4ac9ea31c35"],["/posts/6de7d9db/index.html","29f00dd23d6f8f06d534a716b81dbd68"],["/posts/97e5bc9c/index.html","5146c4c5d74fa86d1f1e5b0c47ff65ca"],["/posts/c311b112/index.html","1ee537c015e2d84a833fdd9a6f84dd4e"],["/posts/c620d4c2/index.html","30be0222c740f1390d79a7457a0a06e4"],["/posts/f8073739/index.html","216c65dab767e02a432738be41388e01"],["/posts/f97ef43b/index.html","ea2aa0f0812cb70086c545b736ec674e"],["/posts/fa84d5fc/index.html","1dcb63a7c69b3b44f902a01e23a84eb5"],["/sw-register.js","f9948ef87244ad7c03ae2a538b1a9adb"],["/tags/index.html","d9c5ed7c4e46b80475e3f84d57380bda"],["/tags/つぶやき/index.html","ce3bd1c9e3d12fcb1cdfbcf075768f5c"],["/tags/インターネット/index.html","7684e483d11c3c85bb9be591c5fef598"],["/tags/チョコレート/index.html","0b107706de5c8135899eaa95269a7299"],["/tags/中国に関する新聞記事/index.html","1bda8a7c16e0ea5bdca292f59e209d58"],["/tags/乳製品/index.html","a4b1c90e25ae5d1c32195974c14ff51a"],["/tags/労働者保護法律/index.html","199cc96ca5e1cc93826d948939f6fd6c"],["/tags/日常生活/index.html","b03ffee397e2c4222350224882c4fa71"],["/tags/日本のIT教育/index.html","651347364bbe9c6106de9303210f016b"],["/tags/日本のIT現場/index.html","c0f14fe4d3534d42563f7e61237ed5c2"],["/tags/日本のビジネスマーナ/index.html","6d128ba54202cf58d14d5e76c0c1608d"],["/tags/日本の国内の人権状況/index.html","a0ca3f840848f7590ee4002c81297db1"],["/tags/日本の経済新聞記事/index.html","c02c4adf8d3e4b122f5a6f8656b708df"],["/tags/過酷な現場/index.html","67fb8cf29cfde8ebea808e4ea82c6d2d"],["/tags/金融/index.html","7fe61641d1c854fdf3435eb74bacb2b6"],["/tags/食べ物文化/index.html","ded6353283c589f9403ef7045b5be4eb"]];
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
