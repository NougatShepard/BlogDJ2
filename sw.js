/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","85eba39a1832d3bcfa93e127f3a7bdb9"],["/about/index.html","cb1fae4176d25805545e329a493815a7"],["/archives/2019/04/index.html","2e0879aceb92d49c09114532ea225ebf"],["/archives/2019/05/index.html","523fef523ad4b42c848803aa8e44477a"],["/archives/2019/05/page/2/index.html","6b3d2eaca9cd5e502ded8b8820b4f2f5"],["/archives/2019/index.html","51108a5b44134cfb0b1ace8d9c7f4e40"],["/archives/2019/page/2/index.html","34b690a31025d874f321fa3cb74db1ea"],["/archives/2019/page/3/index.html","6a11e95165257ad16b2a06d9675ed514"],["/archives/index.html","70c72ce817ac97399789f4b1a28dce41"],["/archives/page/2/index.html","7e89e8bcaa6df05c4f1b9070dc2bc891"],["/archives/page/3/index.html","5db5ae067921e389ec02b1b4496a4702"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","72e75889c27a4d00f19e396d1b8b592a"],["/categories/index.html","e94d0d93e2ec3af2d328072b86131352"],["/categories/つぶやき/index.html","d30819e68309558cd17ebb54e6f9f1d5"],["/categories/インターネット/index.html","4f39e801e036f60361f00f86f1a4daa0"],["/categories/中国に関する新聞記事/index.html","4cdcc2370f4a1f44fa7fc8b2a36726af"],["/categories/労働者保護法律/index.html","c21e0e5820d070c14c78f204a3925952"],["/categories/日常生活/index.html","7adba09af8663e549362e6931ae38726"],["/categories/日本のIT教育/index.html","6cab8c631505a3a95246c7258fe85fa9"],["/categories/日本のIT現場/index.html","c7b7d1f3b1622c2e135df67bf7a07b1d"],["/categories/日本のビジネスマーナ/index.html","ad6eb147312f44b99e54bec94b2a2fcb"],["/categories/日本の国内の人権状況/index.html","592753ea38f9995277b97491c2e2f7d1"],["/categories/日本の経済新聞記事/index.html","2501d1d422ebae2fa9b104fd86259afc"],["/categories/過酷な現場/index.html","a843bd6235e19604a67895fd4f576a3b"],["/categories/金融/index.html","237342e435dc6c6ee0a9b9557e37b7e9"],["/categories/食べ物文化/index.html","11ca1df401d37f3ba59d66ec377147bb"],["/css/main.css","d8b1eabad486310d5130866b8af7c715"],["/games/index.html","081157f7f5d8f05c9a5dee5e8968cc83"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","62e61a5c9450ff7dd67ee1ebefce837a"],["/js/src/affix.js","fcb30bcecb6bc214403807b4246330f5"],["/js/src/algolia-search.js","2f819bcf0e8f2c2ecaaec219d1dd8385"],["/js/src/bootstrap.js","a67936c86e3c9ddb964803b936a634a0"],["/js/src/china.js","937bb4ad15947ff0a74b0765b8981fa2"],["/js/src/echarts.min.js","107da14a9329aeac9414d88a33f233b5"],["/js/src/exturl.js","e5f13c7c3f066843a2a6dcc661b9a1cd"],["/js/src/footprint.js","befbb4aeb10a5c4516b0e957de117daa"],["/js/src/hook-duoshuo.js","90df95a17af247a3cdcbf23c312ac1c1"],["/js/src/instantclick.min.js","22703b1a9d9f7e5b23d067a040a17a9d"],["/js/src/js.cookie.js","49287af0568c0aa84ce8f85f85a8aa61"],["/js/src/motion.js","c23b614e49349b835e33a248b5126c61"],["/js/src/post-details.js","875e871467fa35bb18211c7782026bd7"],["/js/src/schemes/pisces.js","43724871a866d295a591b626081c2d23"],["/js/src/scroll-cookie.js","295b2c2ad528ee13328275a03279d323"],["/js/src/scrollspy.js","a814135f84cb51de1791a1c0d6509fa0"],["/js/src/utils.js","edad601b46ae336331a791f03927cfcd"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2e672cb3b7b224f30d53f5e0f00f2ab2"],["/lib/Han/dist/han.js","e2c16b6307c1ecb60a8ac8fe0e95c88c"],["/lib/Han/dist/han.min.css","37086d4ff85dced768a0c345aefbd8c1"],["/lib/Han/dist/han.min.js","3ce1bc5c7872239ab9b0555d4a663d34"],["/lib/algolia-instant-search/instantsearch.min.css","940688f45f573e3b481358c19ecde361"],["/lib/algolia-instant-search/instantsearch.min.js","0757edd547cb7649673fc70f7ae97aa6"],["/lib/canvas-nest/canvas-nest.min.js","638cbc81357a9ef1fd0d9666bf6cd447"],["/lib/canvas-ribbon/canvas-ribbon.js","8cfeb760c60621e2c1cd5f5c8edd2910"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","fc6aea16938b8a4f9fb2a57c81956371"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","86bf230b6647e96942849d2b7725854d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","241c0a335d12460cda580dd7d5a37f70"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a7137464c828d2018183454d44ee789b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cb0590b23769dafb6bb9e1c898e47f45"],["/lib/fancybox/source/jquery.fancybox.css","21aed48b875f5229c59aafae8a5c80ff"],["/lib/fancybox/source/jquery.fancybox.js","121703ee80dbd5e286afc83059043f4e"],["/lib/fancybox/source/jquery.fancybox.pack.js","4fe2ff15b06b04334f5ca4752994eec3"],["/lib/fastclick/README.html","68fb8404caa9d9e131e9b17276c4a834"],["/lib/fastclick/lib/fastclick.js","e41676134ef8b0f594fa25e2f9723be1"],["/lib/fastclick/lib/fastclick.min.js","f088927ba3ecf675b4d9d29d181d602f"],["/lib/font-awesome/css/font-awesome.css","17bec35b01e65d5d5c7997c956b64835"],["/lib/font-awesome/css/font-awesome.min.css","40443add06af50ef984de77034ffb18e"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","4bba7be24938462f9508e7c95ba7bd54"],["/lib/jquery_lazyload/CONTRIBUTING.html","6eda450e0337ebc1bf9a91712718aa81"],["/lib/jquery_lazyload/README.html","0aac8f6ba0f27c1f77727c10a16570b2"],["/lib/jquery_lazyload/jquery.lazyload.js","e15fa08006c460ec201cd62e63ea7767"],["/lib/jquery_lazyload/jquery.scrollstop.js","bdab1ac817664f28c137e0530d55e132"],["/lib/needsharebutton/font-embedded.css","2f7c1a18d2002e59534d48234cdc15d0"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","90884e53b2413264117be8139c5c63dd"],["/lib/pace/pace-theme-barber-shop.min.css","cd624904afda0738b6e5d9dcb250186b"],["/lib/pace/pace-theme-big-counter.min.css","a99d961bbaf150a8d89eb6883dbe673b"],["/lib/pace/pace-theme-bounce.min.css","7f763eff5baa9ea879a50a97d4afcb68"],["/lib/pace/pace-theme-center-atom.min.css","34cab16de4a2b397d68fcbb411e3dba7"],["/lib/pace/pace-theme-center-circle.min.css","b80ea7701b3f86545cd9ffd7ef4c372a"],["/lib/pace/pace-theme-center-radar.min.css","5e79dffa81ac6ed5eea16ccbeaf7b58e"],["/lib/pace/pace-theme-center-simple.min.css","f92cc97df7c860abdda3b773447f731e"],["/lib/pace/pace-theme-corner-indicator.min.css","fc8cc7e4a2473a9186b92078f1e6ae58"],["/lib/pace/pace-theme-fill-left.min.css","21efffc5de8f1097076131a2d082a09c"],["/lib/pace/pace-theme-flash.min.css","1131a0372791a0a1856a63d7ce6a42ed"],["/lib/pace/pace-theme-loading-bar.min.css","9afd896cd799a80ab1170577a5e0fdc4"],["/lib/pace/pace-theme-mac-osx.min.css","aef54178a826414d34d0410abb340ac6"],["/lib/pace/pace-theme-minimal.min.css","08d2fd7d2a4655e5ffbcdf3b19afeba9"],["/lib/pace/pace.min.js","8bb9640e48665b9ed96e5e7266bd060a"],["/lib/three/canvas_lines.min.js","3aa9961fed97359b25fbc185b1d5f2c7"],["/lib/three/canvas_sphere.min.js","9106d5dd17642d21c030518e0f4a8138"],["/lib/three/three-waves.min.js","375b1f0258533bcd7ba22df3646452be"],["/lib/three/three.min.js","e6a790f009c6b5032edf11ba4cd5b384"],["/lib/ua-parser-js/dist/ua-parser.min.js","952f4196e2a417c7e588807a041e3b60"],["/lib/ua-parser-js/dist/ua-parser.pack.js","aecadd7bc0e6c606a5fa01db282e0f57"],["/lib/velocity/velocity.js","8c6be308d26cf43b001259d8c6318602"],["/lib/velocity/velocity.min.js","770b0bf6177b5530baa2b051ba98348a"],["/lib/velocity/velocity.ui.js","cb3a407e4d52416d2f2db811a962a9f6"],["/lib/velocity/velocity.ui.min.js","0d265eec41862b0ef4854135e04c0cfa"],["/links/index.html","8ee3b90691a0a217763f123e301254c1"],["/movies/index.html","592fcbff2e6601906f372252ca5a3851"],["/page/2/index.html","1054a1d7e29c38546ea972ad2b249a47"],["/page/3/index.html","58348b8a795c9ca906a33c9fa569ab98"],["/photos/index.html","71d5a9f8d9b1d83777859d20e1f3288d"],["/posts/191ddb73/index.html","90f2f73c09e7e108f19f02bd9780cb51"],["/posts/1a195976/index.html","c075d6fd4713201e67d5f1eda43e059e"],["/posts/2fc77d95/index.html","a77491c35ca583a42c2acb61b19f0706"],["/posts/2feacaf4/index.html","206c36c79a2c904142e47e9e5ea929b4"],["/posts/37f2c331/index.html","28708a7b739dab42d87716dc2d608f03"],["/posts/385f0de9/index.html","890ac14f715842dfffae573e6c976de1"],["/posts/44414303/index.html","2b8e0b7af2428171856d98b03f328e34"],["/posts/456610d0/index.html","9d4127584de722522109d94925db7212"],["/posts/45e51894/index.html","c47cfe8468808e8b428e6da3c977855b"],["/posts/4f1131af/index.html","b1f8a03b70ff59db90a8c37dd0e911c1"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","aeb98a7134774f58f03328a54dc6e310"],["/posts/53bf1d9d/index.html","52c8b2fb6ccd256718838f31d0d97469"],["/posts/63556f52/index.html","4748c1eb87ca30481ec134f9349b0caf"],["/posts/6d49ceec/index.html","ffc8c3ed7adca8f3055d90420c67543f"],["/posts/6de7d9db/index.html","3305e19c6c0c81bce6dd1a5ae2baf453"],["/posts/97e5bc9c/index.html","c42849b2d34ef43ad1c37d74f62f29f6"],["/posts/c311b112/index.html","6f3287ad22157936cb19d19040c293ce"],["/posts/c620d4c2/index.html","9b5cc409b10c2b087a2f68263ab4f311"],["/posts/f8073739/index.html","9888e243eb2e03a4b453c6fae4b10918"],["/posts/f97ef43b/index.html","5239c75e46d0eacd5aebd5d152618c46"],["/posts/fa84d5fc/index.html","aa3d3ac04234a91248de7c09256228f9"],["/sw-register.js","c21b710daf510e3551df014133f6e97f"],["/tags/index.html","31fecac09bda13915c402c717605e824"],["/tags/つぶやき/index.html","6ceb3eb7a3b0260249e9d453b417cdeb"],["/tags/インターネット/index.html","61717b0d89fdab6ffeb94c8ea57f9ae0"],["/tags/チョコレート/index.html","61666961094b27266f19b1afa80be5d0"],["/tags/中国に関する新聞記事/index.html","055248fa1778b137814a958e9c17cac8"],["/tags/乳製品/index.html","c3ff8084460834f817e9a3e43a1abddc"],["/tags/労働者保護法律/index.html","3c868c8c9226d3d4c4e4ba0d69fb5ea4"],["/tags/日常生活/index.html","1e453c680d023e9ef009bb71affea56a"],["/tags/日本のIT教育/index.html","65725310edc1f9b6c800c9551617f4c6"],["/tags/日本のIT現場/index.html","a1390555edba8aeebaa9819c2e5c235f"],["/tags/日本のビジネスマーナ/index.html","ff6756c49c6c52b77e1facf1e8399708"],["/tags/日本の国内の人権状況/index.html","ad77cba719aa4730685c7785f52d9513"],["/tags/日本の経済新聞記事/index.html","c914df07ca3ef2f1834669ce8c50e3d7"],["/tags/過酷な現場/index.html","93a987400a3e5af6921af75b897b6e89"],["/tags/金融/index.html","ae460961a10055c05b8281c1604ee169"],["/tags/食べ物文化/index.html","d255e0c0c6adc2930b852ea364e9c8eb"]];
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
