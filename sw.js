/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","edc17f42dbd4aa2f167af3e923f0bf26"],["/about/index.html","49ac7dca7282f72d9bab59359b0fef46"],["/archives/2019/04/index.html","e5c3af675009962b28d50e2c9ca5b1ca"],["/archives/2019/05/index.html","3b1ac58c8d0a0bd791a0e17c6614e662"],["/archives/2019/05/page/2/index.html","eacae78889ba46954eb256a539e692db"],["/archives/2019/index.html","090c609da8a7a6c672e408f14876e34a"],["/archives/2019/page/2/index.html","93e05a67620339c590dadb9a8b95e6a0"],["/archives/2019/page/3/index.html","07fa9f139fdfe61d80cf611f6f2d14f0"],["/archives/index.html","8d40d68ec1a30e972f169d6f13e06c01"],["/archives/page/2/index.html","2f1bcd73e0ce8ba84519096d1deed0c8"],["/archives/page/3/index.html","1b03267af7c44b7561f831671d35b6fe"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","7bc38b2f8ab6bb4a4d84584f033ff93a"],["/categories/index.html","32e7a7d1763050f59a9db18a165582d6"],["/categories/つぶやき/index.html","d17ae5733b2f07c637556012a28db77e"],["/categories/インターネット/index.html","dfd6cf24492f9a214feac88c7e1ed0e0"],["/categories/中国に関する新聞記事/index.html","7fd84b10b48acef47f36c4c8b4fd09fb"],["/categories/労働者保護法律/index.html","fdca377b08a38e429e3f6c7c64a19ca8"],["/categories/日常生活/index.html","0aa1948b88ec1046659e2eebeb602fb8"],["/categories/日本のIT教育/index.html","2a1637406b4e17f8d29c23bbf5a5c1eb"],["/categories/日本のIT現場/index.html","62be64e7a1cddca448dacbd4accdadef"],["/categories/日本のビジネスマーナ/index.html","29e2dcc2829b500e06c0a8ae6df5b413"],["/categories/日本の国内の人権状況/index.html","5a244638d9ec6dfdc81ad1f476549369"],["/categories/日本の経済新聞記事/index.html","b02c755eee51068d8d68aed26d1d4c5f"],["/categories/环境/index.html","dd2637179f817a202f50d78f2d3b7739"],["/categories/過酷な現場/index.html","c6328866253ab84441a2a7ae2c4e6c64"],["/categories/金融/index.html","d8f7c246f42ebbc0aaab41379c7b0208"],["/categories/食べ物文化/index.html","4272f48640bfd6eb084c51d52138fb57"],["/css/main.css","c49864098107aa3e7b45aa550a85fd4c"],["/games/index.html","56bb3bb296235d3ef38d43193da6e7b1"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","5e73b10f1305e95cdf109f9c0c7253d8"],["/js/src/affix.js","c498bc32c6737dbb9cced1f547ba661a"],["/js/src/algolia-search.js","799c3d2176c2b873d58c839fcd6e22c9"],["/js/src/bootstrap.js","4cb53c982617517b941bb39804e6a5d4"],["/js/src/china.js","617b7906e3983e76421e93a0cef845fe"],["/js/src/echarts.min.js","3cb945f0185df22fbb78dcd33d8b88b5"],["/js/src/exturl.js","29e7c60e217795e51afa70cf1053a402"],["/js/src/footprint.js","6814dfae8d2c86146ffa0d64eff41b80"],["/js/src/hook-duoshuo.js","ffee810459fde51e9e359925e0ccad6f"],["/js/src/instantclick.min.js","67d142423aa6c4f0d91c42229e3295fb"],["/js/src/js.cookie.js","b2a7df64b5569755876f39f9f2128308"],["/js/src/motion.js","c24b90cdc2c9bff6f10a56fcd26744c1"],["/js/src/post-details.js","beb26d001f71740ecebc7835c381e492"],["/js/src/schemes/pisces.js","fa4ef506b2f1596bcf3585042359190d"],["/js/src/scroll-cookie.js","33d72cb302f2286df3272a9b0824c669"],["/js/src/scrollspy.js","4a15e3a31bac2a509f09daf97ba6731e"],["/js/src/utils.js","401f3001c4e9c88fc2c30828d4c0f60e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","ea427380b2fe2e8ec8e428c1f694d3af"],["/lib/Han/dist/han.js","0c3373b04b2ce130ebfdbf4b0376d6f3"],["/lib/Han/dist/han.min.css","f1e5c877ef41d20f1ebaf300907ca5ab"],["/lib/Han/dist/han.min.js","3957d3e02c2b043b86ea4610eff076d4"],["/lib/algolia-instant-search/instantsearch.min.css","c3e5deb17306e3a915630b37bce87fe7"],["/lib/algolia-instant-search/instantsearch.min.js","670347b4c2cba33f1b999febbc70daeb"],["/lib/canvas-nest/canvas-nest.min.js","6dcd09e352774130c0a48b0d97cfd668"],["/lib/canvas-ribbon/canvas-ribbon.js","cc92c8696cc8405bde19b0045964b297"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","65d3b4970590fa22155a2926f2630be2"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","7c43c3fa3b83cbd90607a1ae96bde8ce"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","193a3bfbe6f5538a5b2a1de89557d44d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","29973130e1adb14e911b5d760636b903"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4f2c634ae758822c67f1cbd94bd379ac"],["/lib/fancybox/source/jquery.fancybox.css","2d6b693621cac807fe40096eb0f152a2"],["/lib/fancybox/source/jquery.fancybox.js","e034b253b96bdaf3b8f62c460ed8dacf"],["/lib/fancybox/source/jquery.fancybox.pack.js","9ebb296b02a334ccbfc499c8d140a04e"],["/lib/fastclick/README.html","2df9f9d2b9ebd5c340c31ccf015fa9d3"],["/lib/fastclick/lib/fastclick.js","24e49861f6522c57d94b82df233000f3"],["/lib/fastclick/lib/fastclick.min.js","85e9d4989ed0969d4412e218334c392f"],["/lib/font-awesome/css/font-awesome.css","39e136fa303ca79ce9b168d413141554"],["/lib/font-awesome/css/font-awesome.min.css","39e136fa303ca79ce9b168d413141554"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","b7d4f0f532523ca848e1b8aa15d83ec3"],["/lib/jquery_lazyload/CONTRIBUTING.html","c7f9fcd1c89ecd35dcff433314ac22bd"],["/lib/jquery_lazyload/README.html","b8a4871e24df6876f42823f02fed0575"],["/lib/jquery_lazyload/jquery.lazyload.js","b11c919391337b82262d7aaffb783946"],["/lib/jquery_lazyload/jquery.scrollstop.js","75173a3587744f14015b740068a1d0f8"],["/lib/needsharebutton/font-embedded.css","458298ed78a74d2a50bf613499dca0da"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","b225004633ae57cef7cf25484756707f"],["/lib/pace/pace-theme-barber-shop.min.css","38c7724f304794922c5ab8f33794a3e2"],["/lib/pace/pace-theme-big-counter.min.css","fb1dcd0c3ea8e4a247383843940b7571"],["/lib/pace/pace-theme-bounce.min.css","c22b3d7e13122e82bb8b95a55e6d6fa4"],["/lib/pace/pace-theme-center-atom.min.css","83d5496033545100c367d02a39a32339"],["/lib/pace/pace-theme-center-circle.min.css","2c5d0602f5b72b97c11b2ba2f13a3e96"],["/lib/pace/pace-theme-center-radar.min.css","c749927f018f781a124c432fe88f5482"],["/lib/pace/pace-theme-center-simple.min.css","c0c7101ec681e7440addded61ba645c5"],["/lib/pace/pace-theme-corner-indicator.min.css","2de4cfd4c9dd42356ecc23d2662f0d45"],["/lib/pace/pace-theme-fill-left.min.css","d4d171454526666c00907493311fa902"],["/lib/pace/pace-theme-flash.min.css","d01e720bcf2ebde6db29c036ce6381ef"],["/lib/pace/pace-theme-loading-bar.min.css","3cd977d204dc354c264dc96db6082afc"],["/lib/pace/pace-theme-mac-osx.min.css","e2d57cab88d5c438dd8ff67812f10ea1"],["/lib/pace/pace-theme-minimal.min.css","e0ad64194f7efc9903168a37470b3f10"],["/lib/pace/pace.min.js","db772cdf6ebd9fabb53dc0edd34c31b4"],["/lib/three/canvas_lines.min.js","dcf30260a9952d57fd8d15bd955214c1"],["/lib/three/canvas_sphere.min.js","e5aa7583900ece54a5e75f857385372f"],["/lib/three/three-waves.min.js","fd8a5c2470d458ccf125c2fa2ae3c9c8"],["/lib/three/three.min.js","aecb0f90a2f8dc92ac72cd44ff15052a"],["/lib/ua-parser-js/dist/ua-parser.min.js","0c9fe349728b3e4439e499e59eb17b37"],["/lib/ua-parser-js/dist/ua-parser.pack.js","812b63f4660377cf28a6c8c08dcc447f"],["/lib/velocity/velocity.js","58d59aacbe1e316d0704fa25d7bcc652"],["/lib/velocity/velocity.min.js","dde356d17586f3871300cec56a76b3cb"],["/lib/velocity/velocity.ui.js","90ab59ac1e17911cf555c2622611e30d"],["/lib/velocity/velocity.ui.min.js","da205906fc350d17188456fcb72cb90d"],["/links/index.html","e7ca21ceb2a7d3fbfb0872d0c8ea4aa4"],["/movies/index.html","0e9fa999232eccccc7ff90bd7bae6a62"],["/page/2/index.html","ef3d9ecffa52b767b70608743bea2192"],["/page/3/index.html","f0d94fcbaa9401399b991168d806037a"],["/photos/index.html","91a8134ca13130b668a03ac67ab788d3"],["/posts/191ddb73/index.html","3fe6edb59f9c932b56c981c0574de305"],["/posts/1a195976/index.html","4faf3a80f283e0da2778c8a2a3c6244b"],["/posts/2fc77d95/index.html","4ff29f8e90825fdfa6fc08542e43bb28"],["/posts/2feacaf4/index.html","06be94aca85687396bad8db68697c1c7"],["/posts/37f2c331/index.html","dee78719b869a8efa1d48f9d82db1d44"],["/posts/385f0de9/index.html","f6b62c65a0fb3d8e79223ff93a54c654"],["/posts/44414303/index.html","5d6701af4339cbb79721056adf55058e"],["/posts/456610d0/index.html","a9c8680feb3f79714d2085e80a80562c"],["/posts/45e51894/index.html","744b0d4d716569eff33c44c05e6aa74a"],["/posts/4f1131af/index.html","dfd5ce17553f31af6c12a0429b603d80"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","1a525e3cbf8def6dcc52779e426c44e5"],["/posts/53bf1d9d/index.html","7895ccc25e4e26c51af5a6f1a9016226"],["/posts/554c2ba0/index.html","b1e7188a0ceb7f5272614fdccdaf2bce"],["/posts/63556f52/index.html","cdcc320ba4d678f528c1de83e9c87dcd"],["/posts/6d49ceec/index.html","e6288d0116ee44819e8ecc7bf31d7fc7"],["/posts/6de7d9db/index.html","2b8c5a3dca2bc9a2062e27b0ee88d8b2"],["/posts/97e5bc9c/index.html","6d59ebf21e324339e03ef9662f792a4d"],["/posts/c311b112/index.html","4e325ea75741653ed39c4919922e3c6f"],["/posts/c620d4c2/index.html","a34778dca038af7ca6af32ad120a3f28"],["/posts/cfc54393/index.html","947aacce30c017b3960eac4fcbd4113c"],["/posts/f8073739/index.html","e0b29a05db64cf993bdb2370c7cd133e"],["/posts/f97ef43b/index.html","b67df4bbdd941f7b5d96284d7a78bc67"],["/posts/fa84d5fc/index.html","d00608237e402034aa5732550b25b62c"],["/sw-register.js","130e5c9f9ef5894c62312ffb2d820554"],["/tags/index.html","2dfdc119b9cdd71f062cc413fc85bba7"],["/tags/つぶやき/index.html","eac3f0fe067cafee95a706ae6cca8434"],["/tags/インターネット/index.html","19120720170619c809307025c4445c4b"],["/tags/チョコレート/index.html","a80fde5b41e6b0f8a4c212c9f31cfa90"],["/tags/中国に関する新聞記事/index.html","980f3e5bfd11ac16788e45c7f6ac1c0f"],["/tags/乳製品/index.html","c48c672cfdb463506182a123c3e90f0f"],["/tags/労働者保護法律/index.html","8311134012cc3c48f45a208ea2d90803"],["/tags/日常生活/index.html","c827b566d4a49b25cc0303c093012c71"],["/tags/日本のIT教育/index.html","ecdd2e3fba3767beadea17f9f112c210"],["/tags/日本のIT現場/index.html","794cb49b0e253fcd48ccecbdcb8c2ccf"],["/tags/日本のビジネスマーナ/index.html","8a86014f69661a3ac7d05310ff5aba75"],["/tags/日本の国内の人権状況/index.html","9954567650132296fd18b451d47d9bd6"],["/tags/日本の経済新聞記事/index.html","9e09ecacbd250e243f90d3694bc2be51"],["/tags/环境/index.html","c3995353e010c0fc20cbebf47f44188d"],["/tags/過酷な現場/index.html","9c3c2e46e4bc8577aa1d0c1651e7b23c"],["/tags/金融/index.html","9330411dfe396dcebadb69904c6144e5"],["/tags/食べ物文化/index.html","946a855186981c98bba72a2ad780ab04"]];
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
