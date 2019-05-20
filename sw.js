/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","41d4262c902bb423aecfb2e21b5ec5ea"],["/about/index.html","828003e0501df1b9a1c6b4014aa1d8a5"],["/archives/2019/04/index.html","eec3d3ef0d3b949b8a069989b556c551"],["/archives/2019/05/index.html","efa532a21aae6dc316705da241b80d2a"],["/archives/2019/05/page/2/index.html","5b469c2ec9b4212288b386789279f4b1"],["/archives/2019/05/page/3/index.html","531197409366e309435fb9eb41f1d08d"],["/archives/2019/index.html","2ad1e63c2ef61d5b3b0160b1639c9faa"],["/archives/2019/page/2/index.html","a3599eb7747d891195a2d983743d5cce"],["/archives/2019/page/3/index.html","5efbd3bdccd1c564baf5ba7e4acb1283"],["/archives/index.html","21fca73bf6c9ec30a8d13a05d72c5df8"],["/archives/page/2/index.html","095945ae9fa78bb02f6f8130bb297df0"],["/archives/page/3/index.html","0ed08873c8cfab51d384973a3a0f7179"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","88df505a90b8b83a8caad412e9e8e5a8"],["/categories/index.html","8a1cd33ba58dcb9027e2147f8e491157"],["/categories/つぶやき/index.html","8130b0ceb08953f9e49ae163afb5dbb5"],["/categories/アニメ/index.html","16664fd06f6dd45c0974b1807bb1a08d"],["/categories/インターネット/index.html","15a32a984ec5ca298fedfc5ff0bb9a65"],["/categories/中国に関する新聞記事/index.html","1b66485511645f906e002bb3dead34b5"],["/categories/労働者保護法律/index.html","403917370f9b6cc4fea667af364be0ed"],["/categories/日常生活/index.html","4fdb8330404df58d38a4040b71764e61"],["/categories/日本のIT教育/index.html","3d838691451dec84bbf67fbe0c02b15e"],["/categories/日本のIT現場/index.html","1e6881a9ae0e66d6c33173395303302b"],["/categories/日本のビジネスマーナ/index.html","dd4d7c0f2a8f609b63c0fedcd7b6deb6"],["/categories/日本の国内の人権状況/index.html","c37e6c5651611e6cbe9f8c75615b6012"],["/categories/日本の経済新聞記事/index.html","040312846d8eab178061d6b42ad8ec8d"],["/categories/环境/index.html","00652cf027ef5d78ce5c855abe0b7ce8"],["/categories/過酷な現場/index.html","17ea415c88fef2350e8121479b8efb3f"],["/categories/金融/index.html","0f68e0089e1528da5033c5fffbe6e684"],["/categories/食べ物文化/index.html","37bb82409cbacde9a0d4b803cbf8b1fc"],["/css/main.css","7dff124656a663027bf0c55c11b5f01f"],["/games/index.html","49546f194e24ea155e256fea13b97bcf"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","deac7bd2294423dfc1095ef3890b6dcb"],["/js/src/affix.js","f28279f1dd5e075ebc10f8ef4f0b38e3"],["/js/src/algolia-search.js","099a52a942ad5735811fca22a129b679"],["/js/src/bootstrap.js","d451a6cb078736926fcfcd90e9ad7d6f"],["/js/src/china.js","47cd2cfdbca67e5b5906636631e20c7b"],["/js/src/echarts.min.js","b92939b42175c8cb399d06ea71b08baf"],["/js/src/exturl.js","c99304c925b37079814ba3a42aca269b"],["/js/src/footprint.js","c1850429c71c28c1f976fc1e02af5b40"],["/js/src/hook-duoshuo.js","abf5999cc2f1596e0457de0ac964cad9"],["/js/src/instantclick.min.js","ebc9c77eddb35503937d4915d2360ccd"],["/js/src/js.cookie.js","45006e2cbdd9aeedac0094f7a81db0a0"],["/js/src/motion.js","4c9a3cf96df0286f2fd56f9dd8fb6bbd"],["/js/src/post-details.js","83602a547bb625421b182681e2af7931"],["/js/src/schemes/pisces.js","797b65b63ffbe75ff5d4c77091d06c86"],["/js/src/scroll-cookie.js","e8dc218bf5aed55ebc0c2980d9719558"],["/js/src/scrollspy.js","be9ef3f9b0a8d113768e4dc4cdac5f87"],["/js/src/utils.js","058b38ccbda652db941849f1076b9fc8"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","026e056c04398db2437b605c09b34428"],["/lib/Han/dist/han.js","35579f9e616c738c658c963edbd8f4b8"],["/lib/Han/dist/han.min.css","b3047cad51dd1c935be518b1f0fb6f7f"],["/lib/Han/dist/han.min.js","b35960512c57754f5ddbda074ff1cc82"],["/lib/algolia-instant-search/instantsearch.min.css","037c62a7bf06e456d9cd38a59eb9fa0a"],["/lib/algolia-instant-search/instantsearch.min.js","fe460a66f9f9ccfe9ef97e2f9b55d436"],["/lib/canvas-nest/canvas-nest.min.js","486b0a35e1c7b0d79ca3b08204368051"],["/lib/canvas-ribbon/canvas-ribbon.js","25fe05a4940c7a72b8bb980885b93d63"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cb416b3316c6681a167168b2b252e342"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ce0bcf7844ab0e10511d156145fdda34"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f24572d827e036a7e8569f3072d587bd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","8622fbdd1badfcc25bab0f5a8e4d9ba2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e1190b35a3372c11809dc28da9e09053"],["/lib/fancybox/source/jquery.fancybox.css","d4ec934433f22f07c6b634801566ef65"],["/lib/fancybox/source/jquery.fancybox.js","240b19c724fe158e7f618e38969e6805"],["/lib/fancybox/source/jquery.fancybox.pack.js","0a6ee9eb406d9e6d8769da9c9721623f"],["/lib/fastclick/README.html","036d98946f9cdf4f05e09dcc29e3050e"],["/lib/fastclick/lib/fastclick.js","8c5781719a52ab20a5513ac1fba69bf9"],["/lib/fastclick/lib/fastclick.min.js","f30b3750f156f5e1a834f87aec4f4505"],["/lib/font-awesome/css/font-awesome.css","5da6ae426aea2d8684a0d591c7476d22"],["/lib/font-awesome/css/font-awesome.min.css","5da6ae426aea2d8684a0d591c7476d22"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","8650e120c86dd8e2fba2633290f1c35a"],["/lib/jquery_lazyload/CONTRIBUTING.html","c4930f407f1717d602486592d65eb197"],["/lib/jquery_lazyload/README.html","4f9e0e7b0852631c14debd288a1d926e"],["/lib/jquery_lazyload/jquery.lazyload.js","87de66a58e57a1d8b779237e1ab64296"],["/lib/jquery_lazyload/jquery.scrollstop.js","c915feb34e3f68dae8cc604b35723628"],["/lib/needsharebutton/font-embedded.css","196807a11d3e7748a3728c4ffc89daab"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","c6f53193887459a6494990c58476c5a6"],["/lib/pace/pace-theme-barber-shop.min.css","03b28a697817af8bdb3ffb630227e2f8"],["/lib/pace/pace-theme-big-counter.min.css","578d675abcf46a4403912d25cccd8f2a"],["/lib/pace/pace-theme-bounce.min.css","dc91cd442aa422c7760eeb4dcded8992"],["/lib/pace/pace-theme-center-atom.min.css","5dcc69b93bb672ea49e2324fd278c74f"],["/lib/pace/pace-theme-center-circle.min.css","31cdb887e82e6352068a2d652ccf9311"],["/lib/pace/pace-theme-center-radar.min.css","d313f77a3576aa9d5b81fefbc80e5673"],["/lib/pace/pace-theme-center-simple.min.css","bcdb08bf3267e020943e7f8e270fc61d"],["/lib/pace/pace-theme-corner-indicator.min.css","71a83ee9138f832a1ee21ce4f1a03129"],["/lib/pace/pace-theme-fill-left.min.css","bed2479020a8fa4cf4989cfcf55edeca"],["/lib/pace/pace-theme-flash.min.css","8539adeb56885e27236b10b3224a9e1a"],["/lib/pace/pace-theme-loading-bar.min.css","97546cc2c6277d7c7fd2796855ced4dc"],["/lib/pace/pace-theme-mac-osx.min.css","32bb3456104e14cb06f1b67eb5aca58f"],["/lib/pace/pace-theme-minimal.min.css","06b874468fe0eca5898c162052208740"],["/lib/pace/pace.min.js","ea65937a49923b9816193d9d88c4aaeb"],["/lib/three/canvas_lines.min.js","b3b65a364dc791d669df74f8ad249e54"],["/lib/three/canvas_sphere.min.js","5decd1235c73552f6ee4fcec2aa37a75"],["/lib/three/three-waves.min.js","64c59f11f23d19416e5803b712177fae"],["/lib/three/three.min.js","f23d7f330f4a54c46213c95a49610701"],["/lib/ua-parser-js/dist/ua-parser.min.js","e09d67a749a3b291323ff3b6b18c317c"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1005002217ea0466234ac8d8ae8b7394"],["/lib/velocity/velocity.js","abd16fbecc64cb4273162cdfeb2aab9d"],["/lib/velocity/velocity.min.js","56562b55b2f2fcade2ee2e1d5d7118c5"],["/lib/velocity/velocity.ui.js","fb72ab18d8216347c88758d59b378827"],["/lib/velocity/velocity.ui.min.js","3ec2abed45281eef7d31cf3e10f24892"],["/links/index.html","344c8ee8bb039592b66ff2668ba18642"],["/movies/index.html","0793a0c1487ea159bf3daa6d636dc3bf"],["/page/2/index.html","6b201232ecd4c051abb8e999644beb4b"],["/page/3/index.html","561e9a40aac1d8fd6e23e49451515a26"],["/photos/index.html","454122d9a9a9296e3699fa312d65d120"],["/posts/191ddb73/index.html","1a33d64db86c18481ad7bd47c4a5dd90"],["/posts/1a195976/index.html","06670921582fc69182ad0f6666513154"],["/posts/2fc77d95/index.html","8f6bfeb31e8589cd713df89b2d061d0e"],["/posts/2feacaf4/index.html","ca422b11b5376901b4563e34f9dc7d77"],["/posts/37f2c331/index.html","a0c222ee570e9377393b76e1689f2863"],["/posts/385f0de9/index.html","04bf3c39d2be0f95363b18781b1821c9"],["/posts/44414303/index.html","471b89a1c3c915fa53e5dbf59c5aa81b"],["/posts/456610d0/index.html","c2e179dbba5f86ca7797299c9aa84a88"],["/posts/45e51894/index.html","a99af23c8b5d51022b5df2409ffd5e99"],["/posts/4f1131af/index.html","56c7746f0dff2a5f71906dfcba1129fe"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","4e3d5dabed433e6f868f76a52f11dc33"],["/posts/53bf1d9d/index.html","c45f6e09b6f50e934d336fc49e75b47c"],["/posts/554c2ba0/index.html","e30b841de0fe1f56554de737bf67d485"],["/posts/63556f52/index.html","c6d05a6e2ed6ab4b823d680b64aac823"],["/posts/6d49ceec/index.html","2365af4d8c89325f6146bc5c202935ab"],["/posts/6de7d9db/index.html","f0f0a907d77764a6e9bde92d26332880"],["/posts/6fda249f/index.html","a6a1a1897b12691b64b1a348bfef366d"],["/posts/84b87417/index.html","4ab9771a3b63e32f93dcf9dec275cb26"],["/posts/97e5bc9c/index.html","65543183705b7298462c521287b1530e"],["/posts/c311b112/index.html","4fac3fe6b3a196d7720191cbf4ea1b17"],["/posts/c620d4c2/index.html","530e689e70cdbac57df5cc1547607f8c"],["/posts/cfc54393/index.html","65cbdf4d5fc8099ab45bb9d1beb7498d"],["/posts/e31c0293/index.html","440b694dc89462e946bc9a7f864ee8b4"],["/posts/f8073739/index.html","610034807996df7bd506c8375c9fbb46"],["/posts/f97ef43b/index.html","a115c2dedddc2b49ed3f7cae8342347f"],["/posts/fa84d5fc/index.html","c1c9d4193ee8fd2a545014f5dff73c33"],["/sw-register.js","76469e0bc08ad80e4013a35b70f3c10e"],["/tags/index.html","797226c3b534ab39f22fe10f67c43a2b"],["/tags/つぶやき/index.html","bf0fe5a765bff6fe2ba9170233551074"],["/tags/アニメ/index.html","cb65393c9d5487b0297f0691f03af54d"],["/tags/インターネット/index.html","9f2a01d5a5a045cec64543e1eb743398"],["/tags/チョコレート/index.html","8d679a72719cb8fd509f59f14a10b867"],["/tags/中国に関する新聞記事/index.html","6863a7319be9c12a145d4ad28218dca3"],["/tags/乳製品/index.html","9632856741f23c1040ab9ebb3ec7890b"],["/tags/労働者保護法律/index.html","0aaee252e1914b89ddc69566f2a3c08f"],["/tags/日常生活/index.html","d86832e93cc3b38eec9e3169c277e9e6"],["/tags/日本のIT教育/index.html","b14138a3d3eb8714fbf3f0c569e7e5c2"],["/tags/日本のIT現場/index.html","ae5a61abfc11cf38d880539ff98aa24e"],["/tags/日本のビジネスマーナ/index.html","d7e3f075b96c017f136b01402ea3e38c"],["/tags/日本の国内の人権状況/index.html","2a9ffd6410b82181228a723022244479"],["/tags/日本の経済新聞記事/index.html","6bf603df89755781fee1a3f9bc6b91ac"],["/tags/环境/index.html","68bab9caafb32e81e135200305f6f77e"],["/tags/過酷な現場/index.html","bf0626f81010e1a6c2ab5ae52265cb15"],["/tags/金融/index.html","1f2a3613545b5ed4c470c694b903928a"],["/tags/食べ物文化/index.html","80747509a2c68a6bf88172a8e5ccf9d8"]];
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
