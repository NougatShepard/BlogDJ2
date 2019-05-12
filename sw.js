/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","063119fd81f53c92a32696a3dd0a15d9"],["/about/index.html","a4dfa02bacd9c141100a0b657374d23e"],["/archives/2019/04/index.html","e3f880be78ffae0a76f2fde13fda18a4"],["/archives/2019/05/index.html","89422edc8214c76caa1a53e4bce8edc4"],["/archives/2019/05/page/2/index.html","d95ddddab16c7b1659e0c5ef6fcf3745"],["/archives/2019/index.html","a77932eae71d3d1519effdf988a2f6c0"],["/archives/2019/page/2/index.html","6eaf3f3c31727c6d47ba569fe511d4fc"],["/archives/index.html","56e935f9f477985ec717ed6863edd320"],["/archives/page/2/index.html","61b4783dfb81f36951790ec05037a500"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","1a6f55890a340b206a643ae05cb706a6"],["/categories/index.html","f7caf4860dfb5b272cf09231fc27eff1"],["/categories/つぶやき/index.html","b9a6cecb60cd16e56c9d58dea6f68687"],["/categories/インターネット/index.html","5a32646a8be56f488e6dd6294faed3dc"],["/categories/中国に関する新聞記事/index.html","50265534802faddd783440ddcf4b7cd7"],["/categories/労働者保護法律/index.html","c3e3a765415e2c8f089b5bf55ab676cb"],["/categories/日常生活/index.html","27cd715d9bd44d03d393c0ad509b830d"],["/categories/日本のIT教育/index.html","e41333a9fb01742240da138e539e1586"],["/categories/日本のIT現場/index.html","7571573ecb6e50134d6d81681e013f73"],["/categories/日本のビジネスマーナ/index.html","d7932ff057fc44d36fc36812cb0d7c53"],["/categories/日本の国内の人権状況/index.html","8847abc38998aab1d5d897c7560d90db"],["/categories/日本の経済新聞記事ーー反動、反人類クラクション/index.html","296a03b141453782ae2e913919ba36ba"],["/categories/食べ物文化/index.html","0148fdaacedce4d5315556829247aa72"],["/css/main.css","c1579dd3ec474431637ce477a72cf1f1"],["/games/index.html","ac3dd068bd5e741ebb489b91ce32c510"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c04bf893327dd72b209b077480361d15"],["/js/src/affix.js","0da828b769ea032ebf2fed10af891a5c"],["/js/src/algolia-search.js","488503aae9fbfe7d80c215ee445f0273"],["/js/src/bootstrap.js","63b4a92ffaa6cd8249fe76391ec061c7"],["/js/src/china.js","abb1347bba238d74dafab8062cf9053f"],["/js/src/echarts.min.js","4eaa822dae461f1d98a71d72235f9763"],["/js/src/exturl.js","38d99298c8fb19e4c4e77427718dfd03"],["/js/src/footprint.js","630584cc8e8b352911960e5322d3d65b"],["/js/src/hook-duoshuo.js","0a377a1e963af97e708a8fa146de38b2"],["/js/src/instantclick.min.js","b2049468f152863516393ea4fce8aa30"],["/js/src/js.cookie.js","02526a118f4979daf194c3063b7c4c91"],["/js/src/motion.js","484795a9f574e4ca5ac4aec3d6c6a3ac"],["/js/src/post-details.js","a2f59d4816466c5888d5e42ebae80096"],["/js/src/schemes/pisces.js","d41057876c85a2a00c7929e78815dafd"],["/js/src/scroll-cookie.js","9df650483b92c561ed9ba9d048e4d488"],["/js/src/scrollspy.js","ee6f879f822ac1777de0a3edadfe5521"],["/js/src/utils.js","f9f7991963d9c3969f37c73e876bc44a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f8961b4f35c77348d5e96bd93f6c4a56"],["/lib/Han/dist/han.js","1c6ace85c917c3110cb1c8fb042c1050"],["/lib/Han/dist/han.min.css","0ea5ef658049a5373e09a741830e9e71"],["/lib/Han/dist/han.min.js","fb0d61adefc41e751a29c995abf2dbf2"],["/lib/algolia-instant-search/instantsearch.min.css","224bc0faaf790764a274f2e3fba486ed"],["/lib/algolia-instant-search/instantsearch.min.js","7f4c91a354608c17b94c17210ba058e6"],["/lib/canvas-nest/canvas-nest.min.js","888922c36a38dd244a6e0c5566ecf0ac"],["/lib/canvas-ribbon/canvas-ribbon.js","5640afd6d4d08cd30c4a086e27ca37ca"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7f343c0c7f5f80c7807f25e0d77a04f3"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3003d48de41ba02e4aac1b081efe7eea"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f526a7805c25a73cdf6baf4e032bde02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7ecce9b08a8ed5fea0be42415ea75420"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b1fa8ab11304136672c1ce32e819d50b"],["/lib/fancybox/source/jquery.fancybox.css","5557e323e5ac02126c8aa278f5db0509"],["/lib/fancybox/source/jquery.fancybox.js","20539dec0095b4e6a1b8ab13efaf6d0c"],["/lib/fancybox/source/jquery.fancybox.pack.js","bad9d54c7e239fa557ba42c4926ee902"],["/lib/fastclick/README.html","1e1ff5a599f05d939904bd4c98851c6a"],["/lib/fastclick/lib/fastclick.js","1364ecaa9a4161517565da58641030dd"],["/lib/fastclick/lib/fastclick.min.js","c2b20367550d7a203a4de6f99070fc9d"],["/lib/font-awesome/css/font-awesome.css","397e3b5609f72815d1abdd8dd8261b9a"],["/lib/font-awesome/css/font-awesome.min.css","397e3b5609f72815d1abdd8dd8261b9a"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","cbdd2ac12400ad5eeb492173ed85be97"],["/lib/jquery_lazyload/CONTRIBUTING.html","205397d749040303196db3b50e1d0453"],["/lib/jquery_lazyload/README.html","4449042f5ab6a75a80eb85a75f36c51a"],["/lib/jquery_lazyload/jquery.lazyload.js","8c65de83f279ada20eba0edbce1e4901"],["/lib/jquery_lazyload/jquery.scrollstop.js","5e6f97901e993b1cd1d9fa4cb44d0d2c"],["/lib/needsharebutton/font-embedded.css","536206b0358d1dadd1a9e3316170c5b6"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","96fe5fc57aac5cfefcec1e4534211a97"],["/lib/pace/pace-theme-barber-shop.min.css","a621bafac2123d84a7c1f51abc34bbfb"],["/lib/pace/pace-theme-big-counter.min.css","220ece9c5e03e7f29d7db1797f8cacf3"],["/lib/pace/pace-theme-bounce.min.css","e63f79dda14bb6f404d980088f722234"],["/lib/pace/pace-theme-center-atom.min.css","7a8b165d639ccc78b8c98de98eaa2b2d"],["/lib/pace/pace-theme-center-circle.min.css","e6bfcaf40182c1f2f571f341b7ea70c6"],["/lib/pace/pace-theme-center-radar.min.css","806e265d908456196e94728fb8702dce"],["/lib/pace/pace-theme-center-simple.min.css","f33ab750078e7f602892dfb6dbff9ca7"],["/lib/pace/pace-theme-corner-indicator.min.css","8e6c06cc72bba6f72d91d7177f628c6f"],["/lib/pace/pace-theme-fill-left.min.css","240c6563ea23e92b038cbdc72df3d700"],["/lib/pace/pace-theme-flash.min.css","86ee0d750787719a1c591e7af7cb3222"],["/lib/pace/pace-theme-loading-bar.min.css","2d407969f82a37a703360b82f157681c"],["/lib/pace/pace-theme-mac-osx.min.css","ff9eeab7dbd06accf9e78fcab8c3a5f8"],["/lib/pace/pace-theme-minimal.min.css","9f6f59176c4f64d2edea9fe6bd115313"],["/lib/pace/pace.min.js","dfeae1034aff5854ed64e9435e7ff1f4"],["/lib/three/canvas_lines.min.js","7f36e8f23cf28665d099c6b226da0ec2"],["/lib/three/canvas_sphere.min.js","133a5c6829ca50a7409260925982b5cb"],["/lib/three/three-waves.min.js","0eaead0304b55632ca89955a1eeeb8a5"],["/lib/three/three.min.js","0947376ebcb80b47cd2b5d2324b9518b"],["/lib/ua-parser-js/dist/ua-parser.min.js","d4db7bc4855ca3821fe5554818030475"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d6f5da926ceecb889753e91e2f65e840"],["/lib/velocity/velocity.js","4abebdf769ce31d52009660f7c82e1d0"],["/lib/velocity/velocity.min.js","bd76f2c667587ce9330903bba2de45db"],["/lib/velocity/velocity.ui.js","f6d4e464524c5e61ffde8dd4765b47cb"],["/lib/velocity/velocity.ui.min.js","87d1fa09eb5588d466ee45356ffd7e5a"],["/links/index.html","786fea1360e5e023f73e399087876a9f"],["/movies/index.html","5505fa517a13894be8447141b72a7620"],["/page/2/index.html","5e9531f923b9edb39287b400fadb9971"],["/photos/index.html","3d93501adfbfee141046147364cecb44"],["/posts/191ddb73/index.html","e8b466ad8273a1c42dbe182e2e50afca"],["/posts/1a195976/index.html","50459b82d496f6bc3453c3fc9bf0d5e8"],["/posts/2fc77d95/index.html","af58aa8cac02b5dc81ea2592fab43ff9"],["/posts/2feacaf4/index.html","91d8a8b37f28b7b6381e4fbc22561b7b"],["/posts/37f2c331/index.html","d546d75c2025ab027a0396f42e5282eb"],["/posts/385f0de9/index.html","407718746adb2ea9ba67c244e0c7580e"],["/posts/45e51894/index.html","deb6738bfcb65ebffbb3969a8ba3ba51"],["/posts/4f1131af/index.html","6520f9fee29943b6af7cd21b9f78cfc5"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","4ba2ac934864f57a2f38190514348b03"],["/posts/53bf1d9d/index.html","48793f85521d620d0182b749bc95dee5"],["/posts/63556f52/index.html","da90ac9d5eb1de03b55abcdd522e4df9"],["/posts/6d49ceec/index.html","f0c38ff2b1d004f04de3920af93b5e9f"],["/posts/6de7d9db/index.html","2ffb777bd10b99a035954e0f9c46e04e"],["/posts/c311b112/index.html","0ba22551b2f80d594b494fe157541f02"],["/posts/c620d4c2/index.html","f99d9686a3c2d75de35fbef37ca1457e"],["/posts/f8073739/index.html","e76915fed948a30dcfb8ea1de2f6caee"],["/posts/f97ef43b/index.html","03d6ad568a771b56f0ed123fa4872f72"],["/posts/fa84d5fc/index.html","43941a0eddd51ad093a63c78ae08e2a8"],["/sw-register.js","b26238f0bd53439aa1ecea1ca00e3bc8"],["/tags/index.html","c700083d3d14b63ce67d5ab94fc17cb7"],["/tags/つぶやき/index.html","58dd38fff166c6d8fc195321c336f61b"],["/tags/インターネット/index.html","0152f7273e0d300d3a0d9850912e8d02"],["/tags/チョコレート/index.html","5da6195c13326cf6d1bdd35fa2b9ad31"],["/tags/中国に関する新聞記事/index.html","f01d8e02d40cca3cdaaf8840288a1394"],["/tags/乳製品/index.html","694e2badf3f3b958604694586f691b95"],["/tags/労働者保護法律/index.html","1845c913d6575ccce03b8758dcd5aa4e"],["/tags/日常生活/index.html","043b29ba207a5f24dc80ad1d7556ab28"],["/tags/日本のIT教育/index.html","c3918c93009a9b5ee22286e8199be100"],["/tags/日本のIT現場/index.html","6c364471046d88cd092cf8e74b35f689"],["/tags/日本のビジネスマーナ/index.html","30c71e18bad1e12f2d504b6fa1d2686d"],["/tags/日本の国内の人権状況/index.html","108e59d850aafacf620163b016ada481"],["/tags/日本の経済新聞記事ーー反動、反人類クラクション/index.html","81237a4c5dc60d68d80dd5bb0d6d79c4"],["/tags/食べ物文化/index.html","f619c683a17b0d2c7f1c7504aa9dba86"]];
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
