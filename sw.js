/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","c6e2ee89b986f949f70af699660e4293"],["/about/index.html","0bbd44e0a4fcc690c6bb7eaa21a41747"],["/archives/2019/04/index.html","768a57aa21a3ebe027ad2dc767b850a9"],["/archives/2019/05/index.html","19358debf8cc72294ce2f1466d829a5d"],["/archives/2019/05/page/2/index.html","1bf1996d5c456771e9eeaa0fc5eb39c0"],["/archives/2019/index.html","9a7dfa4fdfe75353838513b235f0c09f"],["/archives/2019/page/2/index.html","dd67719cdd36ead09fcda7f25c5f4799"],["/archives/index.html","666f29bafedbd0fd3a772d510aa826bf"],["/archives/page/2/index.html","5ae848f3b0b3f01e5bf7fbfa5aa1f1c2"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","f5862f0ee87317094a8500e1e3d08cb8"],["/categories/index.html","5d630eb251ac00fef6347ce0eff2fafd"],["/categories/つぶやき/index.html","db4a4476c34aa5b97319db3991c85e0e"],["/categories/インターネット/index.html","94729f42a14f6bcd4effb0193350da4c"],["/categories/中国に関する新聞記事/index.html","bd5cea9b82461c7f88c853683132d204"],["/categories/労働者保護法律/index.html","3cdf2e669854c0ae2b1e0eec9f3bdfba"],["/categories/日本のIT教育/index.html","a5c59a943be6ab3d69e0871730cdf2d3"],["/categories/日本のIT現場/index.html","d14be6bd1f754436a8dfb5c82fa0eeec"],["/categories/日本のビジネスマーナ/index.html","cefde51c265aa428d46078074ec112cf"],["/categories/日本の国内の人権状況/index.html","99eadf7cfc38e94a9b0dcdee4a38c1c8"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","dcca650226909e34843a57462ff37134"],["/categories/食べ物文化/index.html","fabb8abec2b4def4621e2ec37f3b547c"],["/css/main.css","2075eb47668fb86df1b53f12fdb6db41"],["/games/index.html","2785b1b8a7d012e6fbff3c9e4f85e774"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c9dbd5ea2db4bc440263416662137c82"],["/js/src/affix.js","fb92a339a976db31ef073d4b52591245"],["/js/src/algolia-search.js","9730b474597000ead5a71b1a3eb4e8fe"],["/js/src/bootstrap.js","a93cc8538e57cef47b0fd50af63ab4e3"],["/js/src/china.js","9f29c246f97364fab32683bcd2f1ae8d"],["/js/src/echarts.min.js","11c539fdb251432f3cf3d6021dcd4240"],["/js/src/exturl.js","9e0de7a33a754abb28807eeb8c0cd862"],["/js/src/footprint.js","d6a1cc5b650124df1315b7c70153a997"],["/js/src/hook-duoshuo.js","d5cb9792173c9d17596caf18192ca64d"],["/js/src/instantclick.min.js","8eeab1575aeb8eba6ad9beac91e17cfc"],["/js/src/js.cookie.js","5cc626eddbaf4833860243400d397176"],["/js/src/motion.js","2d8088f48d0dca209cd3f051cdde10bd"],["/js/src/post-details.js","7d255897f4e74c04bca8d37a912620ec"],["/js/src/schemes/pisces.js","86157e45ebbbd8300e4ad40f62528bc5"],["/js/src/scroll-cookie.js","dfb0000e975a31f9e1c29efa65e9d811"],["/js/src/scrollspy.js","0f1629ca857644141819a41864fb3b1a"],["/js/src/utils.js","45aed083dfe886b959c4c6e5d0df448e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","9c7d65a111fd686d251cfee0bdb46222"],["/lib/Han/dist/han.js","e0fd4abe08b17f88d169897b19556adb"],["/lib/Han/dist/han.min.css","f2912d29e6a26ad86deb43bed6b75c3c"],["/lib/Han/dist/han.min.js","ae258732e507de4f6618399719b8e884"],["/lib/algolia-instant-search/instantsearch.min.css","04c42b6ec4cde82a3aed97298d724a1f"],["/lib/algolia-instant-search/instantsearch.min.js","480770932c0fc59c148b7f60d0d93f20"],["/lib/canvas-nest/canvas-nest.min.js","a028eb47fdc5590cc3ac8060b20dbe1b"],["/lib/canvas-ribbon/canvas-ribbon.js","a5ee805173ab0d7d210a0da6a39ea815"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5131f3c84f606f8595ad0d94bf0c46a7"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","1a162399fe8698b4e25bc2cb935f7b3d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","76e32f72b6f97c3db4cef8c902ecdc35"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f1678a6647e1abdcd70058bec3ef8513"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","82983fc5343558b494e65380b60e1fb9"],["/lib/fancybox/source/jquery.fancybox.css","5fe985d0c4588519b0cba3046bd2e5c3"],["/lib/fancybox/source/jquery.fancybox.js","ee6b8a349d137cd85a491cd76c41a4d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","f34a9acdb24c5b6c0be366c6faef7ded"],["/lib/fastclick/README.html","cf409db9e07c2922bc8f803e629b23c9"],["/lib/fastclick/lib/fastclick.js","ab96b010c6aa0b26396b6edaf6bdd391"],["/lib/fastclick/lib/fastclick.min.js","b003922bca08f6b14955dca65785c274"],["/lib/font-awesome/css/font-awesome.css","49b5abfd93dc9d4a18c87063350ccbfc"],["/lib/font-awesome/css/font-awesome.min.css","49b5abfd93dc9d4a18c87063350ccbfc"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","3ff39cfa0da076fd894f2eecf4e24abf"],["/lib/jquery_lazyload/CONTRIBUTING.html","9cfb4e695c3a1f59606e1723dc696058"],["/lib/jquery_lazyload/README.html","210b74e47ebe7bc7248372f7ef8a6c02"],["/lib/jquery_lazyload/jquery.lazyload.js","16195a7f8639d5708c27a55f3b5476a0"],["/lib/jquery_lazyload/jquery.scrollstop.js","824396e46e851d8c5d21a2e59a0735e0"],["/lib/needsharebutton/font-embedded.css","833da92ecbb3614977315c8f49430df3"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","14e40fa895a1dfd9493c6278783e8263"],["/lib/pace/pace-theme-barber-shop.min.css","7b5dd8d6b29e9be43f51dccf93523a8a"],["/lib/pace/pace-theme-big-counter.min.css","ab7d8316cf688ced44b629e3c1886bcc"],["/lib/pace/pace-theme-bounce.min.css","eb29297688a585ff4e7d3abca8a9b5e4"],["/lib/pace/pace-theme-center-atom.min.css","2482133570fe4acab619b052923b69e3"],["/lib/pace/pace-theme-center-circle.min.css","3b537e1e0fa4d976c4f16436b2ab38d4"],["/lib/pace/pace-theme-center-radar.min.css","ccc4ad087cb0aacc5d4f87eb460d9756"],["/lib/pace/pace-theme-center-simple.min.css","4d9db256eab81a44ef22b47dc848c8ea"],["/lib/pace/pace-theme-corner-indicator.min.css","743e4a9e13f73870e7237c66b4041907"],["/lib/pace/pace-theme-fill-left.min.css","1c3ff20fc47d123c6756767bc89ad283"],["/lib/pace/pace-theme-flash.min.css","52fb71aec8455be8a5094e860e2ee059"],["/lib/pace/pace-theme-loading-bar.min.css","17a0def9527ebbf27dedd7ce5ec41637"],["/lib/pace/pace-theme-mac-osx.min.css","97138a5cf1db23045db18202604f6c7a"],["/lib/pace/pace-theme-minimal.min.css","49dfc9c54d407960b0336d8ff7655915"],["/lib/pace/pace.min.js","a7d4d9a527692f1fced95d2e7dcff8fd"],["/lib/three/canvas_lines.min.js","a631b407df73d46c2d600f7a9e08aba7"],["/lib/three/canvas_sphere.min.js","68aaeadca4ca763996de6d6080a0d5c9"],["/lib/three/three-waves.min.js","004c1ac0d2c11a5788cde3c6c2e721f2"],["/lib/three/three.min.js","d8f96fe1543320998c23d4c104b3382f"],["/lib/ua-parser-js/dist/ua-parser.min.js","0235216877c9fbf83679ed784ba27296"],["/lib/ua-parser-js/dist/ua-parser.pack.js","bc9405e9c64ebfee797d692b465fcee4"],["/lib/velocity/velocity.js","528849a33a649c1338317951c463e9c8"],["/lib/velocity/velocity.min.js","4053916bcaca53d86a85c8c23462b1b9"],["/lib/velocity/velocity.ui.js","f7d4b07d5a618546713b2e6579bc6081"],["/lib/velocity/velocity.ui.min.js","6f271da0e7cda08a79edb45fecee181f"],["/links/index.html","2a72507470b3d9fbe29aafe578d5cb6c"],["/movies/index.html","c5f04f02e3c43bec8bda3463e8450c2e"],["/page/2/index.html","356fbfb83bc932684543ab801381c3ab"],["/photos/index.html","26a896e493d9f237bc3f7b0ca94138a1"],["/posts/191ddb73/index.html","dd6ac1e9045e65bee24e3125ab90eb94"],["/posts/1a195976/index.html","0c1540f7f049996b245e210b3a6be3af"],["/posts/2fc77d95/index.html","52b767acb1b800d6b68cabf31ab91a66"],["/posts/2feacaf4/index.html","d4d33e229a3e046d0547818aac61beff"],["/posts/37f2c331/index.html","ceb8875becbddf09d2b16887c8431996"],["/posts/385f0de9/index.html","8e40f87daca48d0cf8bbaf8d8dc89b78"],["/posts/45e51894/index.html","a8fc642e673d5c0037cc561ce2d7ad67"],["/posts/4f1131af/index.html","17afe42a3be70dcb64342c10ef478370"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","3c861ad798893d96dd8252e7285c71e9"],["/posts/63556f52/index.html","f077bfd1d41eda85f122553fe7e5ef1d"],["/posts/6d49ceec/index.html","b696bdd695a1942b3cd3857c2aab26bb"],["/posts/6de7d9db/index.html","c82372739d1d1f00a11fddb04bd40d8a"],["/posts/c311b112/index.html","656826b4a7efb96d71384df256017553"],["/posts/c620d4c2/index.html","353795b2cf455e6a4bb78d4b8ce2eed1"],["/posts/f8073739/index.html","0303bc8e7107899f8fac6c7132941748"],["/posts/f97ef43b/index.html","59f355b8234573d2edb4c744fc6b1c33"],["/posts/fa84d5fc/index.html","199a61cd78913336a9e0e96aa10b031d"],["/sw-register.js","75b1e62da1d1f1789ff2890350240d1e"],["/tags/index.html","b5bf470eb26e05d8321e203a0b4b5688"],["/tags/つぶやき/index.html","5f5a0994857a3246d9780f26a66dcd9f"],["/tags/インターネット/index.html","857719cb5439c66ab67cacc03cbf38b9"],["/tags/チョコレート/index.html","6dc3e07c2c1e9b939e007eb23d2b67e6"],["/tags/中国に関する新聞記事/index.html","38210673f958ebc98a29f15a5f490b1a"],["/tags/乳製品/index.html","ae30ff9c38c7c0adafbd37c8e9d7eced"],["/tags/労働者保護法律/index.html","bc7af08151f442936413b7529811b472"],["/tags/日本のIT教育/index.html","12f04147a3cd200c7a3762873f643cd9"],["/tags/日本のIT現場/index.html","bfaf3377666d9ad2731d00eb3b8d0b6f"],["/tags/日本のビジネスマーナ/index.html","8dc5a3dc051331440e75a3436bb30567"],["/tags/日本の国内の人権状況/index.html","4ff4a6a88d4a5229ed5853f9c69e8d1c"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","e27abb244b329ed24344287c7c8f6688"],["/tags/食べ物文化/index.html","52742fe59159ea31847da3316e79b7f9"]];
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
