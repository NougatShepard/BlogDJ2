/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","78c0596f22a9acdbbf2d14bdea951c9d"],["/about/index.html","8470827e009e9adc136b4a2393d70d61"],["/archives/2019/04/index.html","88004f5fac367841a60bfe9bb05a53a2"],["/archives/2019/05/index.html","2f950c17cc5af06f6cf8d0edf65bc7be"],["/archives/2019/05/page/2/index.html","304873ad5bc7ca34e9e6b893b3e4acfb"],["/archives/2019/index.html","936c6ed8fa4396d876da0599df372ffe"],["/archives/2019/page/2/index.html","7ba89b273ecd65ac843c96a7cb4bbbf8"],["/archives/index.html","410055bb5eb6ce57cdf6bd646878d3c1"],["/archives/page/2/index.html","048e4e946face62d669c0c32622fb55c"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","178c399ea3448a7d56a8bed00bdd8b58"],["/categories/index.html","27a016b16a01539e813fbf592489af3f"],["/categories/つぶやき/index.html","f3f2928f6a48bc0093873980ae2c3bad"],["/categories/インターネット/index.html","8551768397d5cbc821bde505a0fd5185"],["/categories/中国に関する新聞記事/index.html","180d996d80dbb0ee5385f7736d77b633"],["/categories/労働者保護法律/index.html","c407a9f01b4b5084789947e826747864"],["/categories/日常生活/index.html","88388e438d3a1ceeb5771dd820fc3858"],["/categories/日本のIT教育/index.html","70675d7b5394a326e6b3332fdada0c32"],["/categories/日本のIT現場/index.html","9def2b684adc1373ef2a00f16438fe93"],["/categories/日本のビジネスマーナ/index.html","b0592af9e92b63187a3440c6945cd67e"],["/categories/日本の国内の人権状況/index.html","65b8e6733ea7825eaebeda298754b1c4"],["/categories/日本の経済新聞記事/index.html","5fc39024baca2fc469f014d4467e0858"],["/categories/過酷な現場/index.html","1ec1cbcaba3e45d4d7842ec90cac91bb"],["/categories/食べ物文化/index.html","014567bd203cae7e992562dfb35680ea"],["/css/main.css","faa30cbe1b27e5f88de024c1654b472d"],["/games/index.html","9d3308eb9a3dd2d7e1078c1378e359d4"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","41a5bf82987d0b54cb5ffead88853750"],["/js/src/affix.js","458fa4c6db11f9b849b65dc1cadcdcb5"],["/js/src/algolia-search.js","ac9bf904ce7e265b6ee31f0543ee49b5"],["/js/src/bootstrap.js","2289e9a83dfce589aed305075b44487a"],["/js/src/china.js","d56d4ee403d1184004e23f92a7d36ea2"],["/js/src/echarts.min.js","502e2bc3a4f3dbe064e23c291b16646a"],["/js/src/exturl.js","e46acc70a0a556c37610cc94cc66c7a5"],["/js/src/footprint.js","459f039abde8a524aa9252bcd4deb0ed"],["/js/src/hook-duoshuo.js","51c69b88c628a59305eb1851e55b080e"],["/js/src/instantclick.min.js","24b869fdd5a965c25a3611c2e3c75afe"],["/js/src/js.cookie.js","6993a2f73c8e5a14f141b3ad82a4bcac"],["/js/src/motion.js","268094b3f1ea49540b10541696ca6dde"],["/js/src/post-details.js","fc481ad500e28318b2c51643b3735e8e"],["/js/src/schemes/pisces.js","8af403a9fb1c1144d7d0bcec6aef7046"],["/js/src/scroll-cookie.js","ef59f653f2e92f4c6e43dc9ed676da81"],["/js/src/scrollspy.js","3e99e033f12d2b263681136e8631973b"],["/js/src/utils.js","1f9e8a626b19e7088a777b2e91d5941d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","56c00bf16fd6f545146e39783e43d95c"],["/lib/Han/dist/han.js","bd2198df058e601dbdc75d84805766cd"],["/lib/Han/dist/han.min.css","712ebdd9d4a20be61a6ff5ce2ece19bd"],["/lib/Han/dist/han.min.js","653e632f3196295e7fdac747addf27f1"],["/lib/algolia-instant-search/instantsearch.min.css","0d802414e7d1cf1456b8dbdb9a609bea"],["/lib/algolia-instant-search/instantsearch.min.js","8e4bdba67c423958c193c56a0a61be03"],["/lib/canvas-nest/canvas-nest.min.js","b08baa773c29276ef0aa78ba71ce47e5"],["/lib/canvas-ribbon/canvas-ribbon.js","bf8665d441d0cf39fd9ecf6a467b9d6b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","620440eb5fcb653b41bee3b1c471298d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ee9c90c771dbac5f6fe5893a018d6151"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","3f596272e2813e3399ec6b2f1cc25a18"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3b0d1d3336f998cf955fd3a244440460"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","915ce23923ddad27ee0b4ca817385299"],["/lib/fancybox/source/jquery.fancybox.css","051150188dbbab8a59767d6ba22b83d8"],["/lib/fancybox/source/jquery.fancybox.js","c0bed248e43b35461fea8f1a133e48b2"],["/lib/fancybox/source/jquery.fancybox.pack.js","caabc88deae7054f292412f2cf6947db"],["/lib/fastclick/README.html","ae629968396a6c909521cad8cc305473"],["/lib/fastclick/lib/fastclick.js","31737da1afa88744eaa7534c235c529d"],["/lib/fastclick/lib/fastclick.min.js","57353bdbfc2b6f38d71fa68f868ba63d"],["/lib/font-awesome/css/font-awesome.css","7dcd022d99fdf0c040d83182835afdf3"],["/lib/font-awesome/css/font-awesome.min.css","7dcd022d99fdf0c040d83182835afdf3"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","3aa7fe5da3646e35840696473afe0aae"],["/lib/jquery_lazyload/CONTRIBUTING.html","a16cc2e0f621be6f43c979780125f024"],["/lib/jquery_lazyload/README.html","83c6bfd160f84cd9e61754541fc9019f"],["/lib/jquery_lazyload/jquery.lazyload.js","fa369894818143035acecff158f71d0f"],["/lib/jquery_lazyload/jquery.scrollstop.js","353c3e4ddde25857f62a56a7262a6cfe"],["/lib/needsharebutton/font-embedded.css","8a131b205fa0c3e1b12e6c2d2e6a5c19"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","43c3df9f4ee936ff4fd3d1f76ed23f25"],["/lib/pace/pace-theme-barber-shop.min.css","4f727f7c7940e4846f350f3bdbe59b0f"],["/lib/pace/pace-theme-big-counter.min.css","cf994ecbf89aa9b20b61ad1088275f49"],["/lib/pace/pace-theme-bounce.min.css","5f19dc7a4d74917e673b06384399aad0"],["/lib/pace/pace-theme-center-atom.min.css","dcafb6ded615db78239a07870ac17225"],["/lib/pace/pace-theme-center-circle.min.css","5d20c1dd7d89282da557d429221b3b67"],["/lib/pace/pace-theme-center-radar.min.css","76e3bf63644b9ab5ff002c0dba0c3b43"],["/lib/pace/pace-theme-center-simple.min.css","1630af2575978c5147ccb9caba79bc61"],["/lib/pace/pace-theme-corner-indicator.min.css","83f339ccf7202615dcc9368245a0fbfa"],["/lib/pace/pace-theme-fill-left.min.css","7a9cf73e56b4b592aeb875e3304faf24"],["/lib/pace/pace-theme-flash.min.css","174bf3b741b569334e5b17a162272085"],["/lib/pace/pace-theme-loading-bar.min.css","62b243418ff986eb64af7afaf6faca76"],["/lib/pace/pace-theme-mac-osx.min.css","dae843cf911126ed144b493c63b24ea1"],["/lib/pace/pace-theme-minimal.min.css","9c390dd410963bc4a46da9d6cad96e7f"],["/lib/pace/pace.min.js","1c480dcf94cfce57662e36389dd1c177"],["/lib/three/canvas_lines.min.js","817b07ad33be6f0ab4df82a74838dbc7"],["/lib/three/canvas_sphere.min.js","1437ea20f3f492d5a74a3e34d0536c95"],["/lib/three/three-waves.min.js","b4f0b80cd0e7c9894bf0a87973066d53"],["/lib/three/three.min.js","9d7f45a9b7890d408b79749165fdbeb1"],["/lib/ua-parser-js/dist/ua-parser.min.js","8ca844c7d9d83dd980449be2bb6c4098"],["/lib/ua-parser-js/dist/ua-parser.pack.js","51f68ea125f9b839d2f2ac012aac7f00"],["/lib/velocity/velocity.js","cd0da45cfe33a404e4847b99c8fadc90"],["/lib/velocity/velocity.min.js","296d68a093d7cc4e2ced1d0b3c7e761a"],["/lib/velocity/velocity.ui.js","48a3db3c583ec8ea9d853b6360a0802c"],["/lib/velocity/velocity.ui.min.js","40c48491cc89a7f72c53e816a09f8a4d"],["/links/index.html","e59d80b0c8ecd685b08ea145a323ea54"],["/movies/index.html","60525c6e07ece82e9622c906db0bb9ea"],["/page/2/index.html","6d71898ddd0eea3691f9764cece390f0"],["/photos/index.html","d0d2cfdf5e29d3e046754b357958c4b0"],["/posts/191ddb73/index.html","fdd6e71545144bfc095cb5dfeb8ea00a"],["/posts/1a195976/index.html","27e6a803b8a90d913ce9c08c42ea1c42"],["/posts/2fc77d95/index.html","fc17ca0604b0d6264f2ba343b26af53d"],["/posts/2feacaf4/index.html","2e66bc421db783add1a30c7972a72270"],["/posts/37f2c331/index.html","09a755490169aaa8e5fbcb24acc972db"],["/posts/385f0de9/index.html","e081891d2e584e04272aaa436d20ba55"],["/posts/44414303/index.html","501520ee270898405aa5c9b4c4023dbe"],["/posts/45e51894/index.html","13b67cb59dfb8cb0803c80a7e1850af8"],["/posts/4f1131af/index.html","93eaddecdd5151acdb779523d861a5b6"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","a527705d504381f23eb88c5602f17430"],["/posts/53bf1d9d/index.html","3244a58e6628a3fc268f5fbd0d953b09"],["/posts/63556f52/index.html","248d0bcefc647dba6827816ab84fee20"],["/posts/6d49ceec/index.html","fb355d2b1cf5c4a8a5198aa092fbdf1f"],["/posts/6de7d9db/index.html","e67c20690b0246a89c79ff14558891c3"],["/posts/97e5bc9c/index.html","c105cf9031808c78fe539f82e22d224e"],["/posts/c311b112/index.html","60e8cdb78cbdc2f4d33cd33753a32d33"],["/posts/c620d4c2/index.html","4ffbecf7cb5038d4c5e297e0858561a4"],["/posts/f8073739/index.html","9d21dd1515ce9094762e3ba582b3318d"],["/posts/f97ef43b/index.html","61b035f59e5abd8d3b2cb8081be4466a"],["/posts/fa84d5fc/index.html","a7625849ba2c4249ee5458b3eeeb7abb"],["/sw-register.js","e4e8522a3c1477680c43cacedc522436"],["/tags/index.html","c42ff9b4777386f0a2e75632094cc7c3"],["/tags/つぶやき/index.html","11e4e2c86fc605ee6290a0fc26d96881"],["/tags/インターネット/index.html","e6983b3c481cd1fd2546e4344678a5a6"],["/tags/チョコレート/index.html","b650347b4b2ad83a44e2a5d2c85e5c62"],["/tags/中国に関する新聞記事/index.html","dd6c342759ad57b2605407809b5df8f6"],["/tags/乳製品/index.html","9ec909aad0a10ca4a65a8fb62949ff73"],["/tags/労働者保護法律/index.html","9503f8d86d3716be33998d66580c4f92"],["/tags/日常生活/index.html","a2955747c03bbd55a37da446729b9a1c"],["/tags/日本のIT教育/index.html","435fb0ce74aee78461e5fa2b7cd3188c"],["/tags/日本のIT現場/index.html","29898237a61eefd20100e55cd26447b1"],["/tags/日本のビジネスマーナ/index.html","494bf8c80829757c8890ccbba1b8b2d1"],["/tags/日本の国内の人権状況/index.html","6fa43a483d0a775a61d7b7008f10dacb"],["/tags/日本の経済新聞記事/index.html","37e479a7fe1d2c68fec164d4e05dca84"],["/tags/過酷な現場/index.html","a2208436206bfa74ed8509edfaf9446e"],["/tags/食べ物文化/index.html","e35b7e10d22f8d938d0dbf62d41a918c"]];
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
