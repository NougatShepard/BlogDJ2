/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","b975e4c9da99d1a227bb4c9140e2e04f"],["/about/index.html","0cb808d676ff1f5519e1ae19523e473b"],["/archives/2019/04/index.html","0d50b3536fe3698900ff527632d96f5e"],["/archives/2019/05/index.html","2bc98d1bd1546feb5c6db2f79fe78e95"],["/archives/2019/05/page/2/index.html","71bd1aa9d5602b877b57e0686b501aee"],["/archives/2019/index.html","89aa500bd76234a6b27d0b74c1fd15fb"],["/archives/2019/page/2/index.html","1fe9c9308c98516f148ea7c3a80bf48e"],["/archives/2019/page/3/index.html","cc0c9058a64f01c5b5e3b0dade7e6094"],["/archives/index.html","ef8300996ddc0cac7b8dc768e3ab38f0"],["/archives/page/2/index.html","4bcdbb475c182f7d2ea0ced2c6078e81"],["/archives/page/3/index.html","14347636ceecc36a0198dcdb4ce24e96"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","379ef6ef42b8249b38865e48a6769ff1"],["/categories/index.html","46fda96445226bbaaec4856a2bb9a651"],["/categories/つぶやき/index.html","eb8bc89abccaf2b8b0d64f05ecdf0608"],["/categories/インターネット/index.html","12329119feed6aead9e4a5dd74d6335a"],["/categories/中国に関する新聞記事/index.html","ad80613f808230b91c36a8ac5d4483be"],["/categories/労働者保護法律/index.html","14de16562c97fa2c5e9fb897c0d09664"],["/categories/日常生活/index.html","a0c08f6825ce06cd46745372cf2dfa2d"],["/categories/日本のIT教育/index.html","b43ca9fae6a7646a3f54ab43663029d1"],["/categories/日本のIT現場/index.html","731125fe1fccc926b0216067269faee3"],["/categories/日本のビジネスマーナ/index.html","68a2c5676992b624a10f1565015e7a7e"],["/categories/日本の国内の人権状況/index.html","2ce811dbeb6ab61bbd487051204300b3"],["/categories/日本の経済新聞記事/index.html","b95c6fe345022a46943c69e6aefce8fc"],["/categories/环境/index.html","4690c7f148ef87258eb3a8fbd2c6965b"],["/categories/過酷な現場/index.html","b778d8c7dbacf6edd358f06011c8caf8"],["/categories/金融/index.html","fee8f00f1f32302e98b9d6a93a5b23bb"],["/categories/食べ物文化/index.html","42bfda65af2177c67af218884be8b872"],["/css/main.css","67f9c13cc842ed752f22dfe85f8634b8"],["/games/index.html","1c8bbadaf35d67a7ebe8b0093af1fbab"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","90cd160c65631c979acb017f2c49ce2a"],["/js/src/affix.js","5f3debebba9b67fb161a38cf77b6bc35"],["/js/src/algolia-search.js","5dde8b06c85897e10e8718ca038e4044"],["/js/src/bootstrap.js","fee9f59180005d4927ff6a54901aa445"],["/js/src/china.js","f43a80b84ab3951323e721d24d3a465f"],["/js/src/echarts.min.js","923d780a3fb6ec260a83e9b6b898ea1d"],["/js/src/exturl.js","9f8a56d6941eecb7d86cdee0c1b1ca63"],["/js/src/footprint.js","984301b244c369d1b7453ca2679fc481"],["/js/src/hook-duoshuo.js","02991e2547d380e4b74de2dd144ffe9f"],["/js/src/instantclick.min.js","50ea70fc04f06a763c2bb8990454210f"],["/js/src/js.cookie.js","32222e44f467edf6dcc873aa76a00898"],["/js/src/motion.js","82103998e7a1b6f4b56af95ea3b287c8"],["/js/src/post-details.js","61bf4ee40f237d5cb8c2c671951d8f76"],["/js/src/schemes/pisces.js","9d9d12198df21dd5ceb9696ad158046f"],["/js/src/scroll-cookie.js","ce2e49553ba3fbbcaa42516ee31e93af"],["/js/src/scrollspy.js","c9ef2748ea507067b191e06bfcfe2dfa"],["/js/src/utils.js","3464de466d43634ee903576f28457bd7"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","8a3b5b7ba2bbed2c20c247272da4fa5b"],["/lib/Han/dist/han.js","66b86aa30219a88708cbb43cf300a299"],["/lib/Han/dist/han.min.css","69bdf54d78e8924c0fc0df4b1040598a"],["/lib/Han/dist/han.min.js","e86533d4a5ef2f7ccd78a716eaea7352"],["/lib/algolia-instant-search/instantsearch.min.css","850689da003ce7227cc39617e2a2cdb9"],["/lib/algolia-instant-search/instantsearch.min.js","ef82de3a4c3618612229f2ba0b4dc285"],["/lib/canvas-nest/canvas-nest.min.js","c84a554c2c367a57d3d603dc9ac8c47e"],["/lib/canvas-ribbon/canvas-ribbon.js","b9cd1cae2a4586176c82b63067fa5735"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c149a05981190013047e00295dcf8bd1"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e0f8692b20f33a6cb400081de8a3733c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","af7009ddfd01efe7bd01e7e5d4ac3944"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2db7df144b45b738be9bb47a78df6806"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5d7f98c5747574b6425b06c62d5be20b"],["/lib/fancybox/source/jquery.fancybox.css","b1fb7e433f7900c18e6bec31748652b9"],["/lib/fancybox/source/jquery.fancybox.js","9f58e74f52cbf2aec04fb63f5b3ce40e"],["/lib/fancybox/source/jquery.fancybox.pack.js","7cffad40fae48628fc71750abe89cbb7"],["/lib/fastclick/README.html","fe7edcf22094d4935b8fa08e39541573"],["/lib/fastclick/lib/fastclick.js","390afa39d2479ba01ca0efd190f7e114"],["/lib/fastclick/lib/fastclick.min.js","03944b36c8f0433e872d016f67d5994b"],["/lib/font-awesome/css/font-awesome.css","589896ab7e25ec04adb55983bbb4d1f2"],["/lib/font-awesome/css/font-awesome.min.css","589896ab7e25ec04adb55983bbb4d1f2"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","dde50d08fb6856b5ddf32c4d4e372fc6"],["/lib/jquery_lazyload/CONTRIBUTING.html","633bce67e1e4e1bae41d2e81e6672ee7"],["/lib/jquery_lazyload/README.html","d724bba715f32d13ecbeaea2d783f88c"],["/lib/jquery_lazyload/jquery.lazyload.js","9f2800329c4d0b6cf897f6acce30a31a"],["/lib/jquery_lazyload/jquery.scrollstop.js","f42a454c67b35406579367254982d6bd"],["/lib/needsharebutton/font-embedded.css","d715c04a88032c484b8b92dbc20a8eb9"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","d3b153015b54876488531e74cb3c7ae7"],["/lib/pace/pace-theme-barber-shop.min.css","53d36a5145eb956891c3135607488591"],["/lib/pace/pace-theme-big-counter.min.css","b296d4e2df1366d16dc83d23d9e7031f"],["/lib/pace/pace-theme-bounce.min.css","313702d0f3f171b5f7e4c53711d326bd"],["/lib/pace/pace-theme-center-atom.min.css","20102433491e9fa85711bf7ecfd66b14"],["/lib/pace/pace-theme-center-circle.min.css","b25e57ade453632179b3d966ba20550a"],["/lib/pace/pace-theme-center-radar.min.css","fbd0ec6452bc0a2ff59422e2a1f87937"],["/lib/pace/pace-theme-center-simple.min.css","429a5d857ade439a7d8c00cfc8f0a8e7"],["/lib/pace/pace-theme-corner-indicator.min.css","e3c266641caf0ef1992d53937a0cb2fd"],["/lib/pace/pace-theme-fill-left.min.css","200c73e3c7e6ed7f05b04b283f8aa811"],["/lib/pace/pace-theme-flash.min.css","e131a74dc3bb1a84faf300c19886bc75"],["/lib/pace/pace-theme-loading-bar.min.css","ec4521adf41685255c627d8a4ade8c4e"],["/lib/pace/pace-theme-mac-osx.min.css","9ddb2472d9cf29c880797c8942d718d2"],["/lib/pace/pace-theme-minimal.min.css","8be72214a8464d5e51389b1042ccc1db"],["/lib/pace/pace.min.js","c030654754652b7b2788c3e8be961211"],["/lib/three/canvas_lines.min.js","e3f9744cd17bc03acd09f22e9f98b37b"],["/lib/three/canvas_sphere.min.js","52699d87443c7be6a470ab6f80e6680d"],["/lib/three/three-waves.min.js","9e99bca930f3aa7a4712539058b919e8"],["/lib/three/three.min.js","e1a86dd5390515ba9817153c3cdf224e"],["/lib/ua-parser-js/dist/ua-parser.min.js","0af263529f9c99d8342c0b0c57c0a573"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7eb7a7623d07c13a0a7855077fa5cd83"],["/lib/velocity/velocity.js","b7ea2f12743856e89723f90b4ee40ced"],["/lib/velocity/velocity.min.js","69f20e70c5f0f2a4a7b0ea9fbe7a5687"],["/lib/velocity/velocity.ui.js","9cf0ad03353fa0cd1c39307b2646d963"],["/lib/velocity/velocity.ui.min.js","73dc5eb374cc4fd6f17a32587567593b"],["/links/index.html","888b5dcb53909b30cef77d99b19e746c"],["/movies/index.html","49a85a98f66ed8b210b7c86fa4fc7616"],["/page/2/index.html","38f1b2f63ebab10672ee7803ba675f9b"],["/page/3/index.html","b03b31e30e0d107d8ec4485579079d07"],["/photos/index.html","75276a634dca6b7a9af86a56d20e4e2f"],["/posts/191ddb73/index.html","6170213a1c69dea9d789112faa4b1c3f"],["/posts/1a195976/index.html","88daba470cd7db5d41087fa93ed41b96"],["/posts/2fc77d95/index.html","ec8cbcbd6235271eee21daaa46479aaf"],["/posts/2feacaf4/index.html","9aa5149d8fcd321fc308e3b3f5cfc6f9"],["/posts/37f2c331/index.html","5a01727c2f18a1f277957a409d61d8c5"],["/posts/385f0de9/index.html","0e33ee76769687ff73ecd44166339e7f"],["/posts/44414303/index.html","150d1913eb78986522f9ea2ae6b7bf9e"],["/posts/456610d0/index.html","d0624cd365959fb51e9a6fd54fa8d67f"],["/posts/45e51894/index.html","2bf073b41ea0b19dc54626f782c1f760"],["/posts/4f1131af/index.html","eed3f1b5fdcfa40a482c1fbea9c738cd"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","0a940b8415391f032b8ec284bf5042da"],["/posts/53bf1d9d/index.html","da863fd285c3ff4221dcd4490dce82cd"],["/posts/554c2ba0/index.html","5113b8935249b9a614a9746794c39bad"],["/posts/63556f52/index.html","2482246b671e6760aa7d43e03de14eb5"],["/posts/6d49ceec/index.html","9114c980077b8d5a1827f2344c781fbb"],["/posts/6de7d9db/index.html","ac1731646a3d57417faaff09b893577d"],["/posts/97e5bc9c/index.html","a8974113a5c4965f4221768319d9cf49"],["/posts/c311b112/index.html","40a2a02440ef4999bfe2d5dc5cb945b9"],["/posts/c620d4c2/index.html","bd9556a068191960eb6dfbd120b86c79"],["/posts/cfc54393/index.html","0e342fb2024eaf8afe7567f44f45f271"],["/posts/f8073739/index.html","3ddb495b0d6cebef98a4e1479aaa2144"],["/posts/f97ef43b/index.html","e1492fcff0707d45df14dc9ebe476eea"],["/posts/fa84d5fc/index.html","a8a22d4d5ea82665e648fcda64502a8d"],["/sw-register.js","c3c6fccbaa5e4756dbd1825ed0066f7c"],["/tags/index.html","8eb9852b3bb4ca9ef9e963be7adc5a3f"],["/tags/つぶやき/index.html","c71c94b2c9517d4384c72a1e25c9639f"],["/tags/インターネット/index.html","96ad421459397dd77e96fa263f4885f3"],["/tags/チョコレート/index.html","dda9e735c0a718597c729ef934ce5ab6"],["/tags/中国に関する新聞記事/index.html","fb08a3d2788fe82c9152dc37e180445d"],["/tags/乳製品/index.html","bde94553d32ebd75871762b81dad58e9"],["/tags/労働者保護法律/index.html","ae7f2a9d2c7031b7021d718ed3484a4f"],["/tags/日常生活/index.html","72bc11da0118d71bd47127f26bd39f2f"],["/tags/日本のIT教育/index.html","56c80944c644402b9ea322c1ff2d1fe1"],["/tags/日本のIT現場/index.html","af447153990f823686f6aad14e00a434"],["/tags/日本のビジネスマーナ/index.html","42b8505aef4437eaf4155a70bc3d1884"],["/tags/日本の国内の人権状況/index.html","6a65780d83071d81bd8eb039146f0a57"],["/tags/日本の経済新聞記事/index.html","2577a3c95833c22997138cbe1bf7257a"],["/tags/环境/index.html","67a9815b844cfcee339fc734e46e60f6"],["/tags/過酷な現場/index.html","46b367c00e0962b8c362ab39520a5006"],["/tags/金融/index.html","0b5edccfb08ce3c9ae81fafa244129c7"],["/tags/食べ物文化/index.html","651dc149eb9ff27d07eb39c92dfaa611"]];
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
