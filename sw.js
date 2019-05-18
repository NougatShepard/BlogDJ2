/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","0cce08bedffbc95c53283eab9c8bcb27"],["/about/index.html","b1ab4d96820d8d54758058a69a089007"],["/archives/2019/04/index.html","6f821aba419530fbb605c64bf956bfbb"],["/archives/2019/05/index.html","30be140d96b1440f23b01f1a7d3644c9"],["/archives/2019/05/page/2/index.html","82a7b19ee4fcd1c3f2766df81fa46242"],["/archives/2019/index.html","d2962e91326da8bdf5205ad9ff71b134"],["/archives/2019/page/2/index.html","fa4348b84944ab7ee62e24d1f3404093"],["/archives/2019/page/3/index.html","f4a19b1b97c494219787088e6397c14b"],["/archives/index.html","3831a9917d49759b64d866a66854fd09"],["/archives/page/2/index.html","76126defecd12af39b40fda20786eee4"],["/archives/page/3/index.html","2957bac6a555bc6e9e7823e5a17c8327"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","9d5d885783ac240e84f87409891a1ce1"],["/categories/index.html","b279740ed7bd7694e4683919834346c7"],["/categories/つぶやき/index.html","496491abe91f52bc6d390fe286ffb4b4"],["/categories/インターネット/index.html","6727e14b587df8327caaea36412a82bf"],["/categories/中国に関する新聞記事/index.html","d15412c9511c4773a76a220c0890d553"],["/categories/労働者保護法律/index.html","3ef9145856e90bdb09a1dd9410362032"],["/categories/日常生活/index.html","62e35e20dc4780f4c57f9654046908b0"],["/categories/日本のIT教育/index.html","96c7c71edb901f61f6e459587a79e531"],["/categories/日本のIT現場/index.html","f6e434c5e4d22775f18276b4daaf0f0a"],["/categories/日本のビジネスマーナ/index.html","3e59f278ca6caee04db640c047975868"],["/categories/日本の国内の人権状況/index.html","8660e66b2bd1049ddf073af70ff22b23"],["/categories/日本の経済新聞記事/index.html","fce50caa19294830f79f6cc645bcc01a"],["/categories/過酷な現場/index.html","467b6f98bd9af25a2885ebcbd5478ee7"],["/categories/金融/index.html","ba73c5a9765e6cc33a19e68695658a04"],["/categories/食べ物文化/index.html","17f31bfa91f9fd363d9d55e74f332ce6"],["/css/main.css","b535f35f377b7b60eee1a363600f54a8"],["/games/index.html","82efff8efd6b5467014a5ea08d3795ea"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","63ae532817d4ec954b7eb200b97100fe"],["/js/src/affix.js","ccec53ec49cce43f9a73a5113b2a15a1"],["/js/src/algolia-search.js","6091cd07312cc6de76f0901312e7fd5f"],["/js/src/bootstrap.js","782a6a917813be584eacfa737319797e"],["/js/src/china.js","caa746c7181564ec9601f85b8bf8934e"],["/js/src/echarts.min.js","9126b4a67715ea295c99cc68dfaf8edf"],["/js/src/exturl.js","e880909a544d9988ffe1369d4ffb0484"],["/js/src/footprint.js","d2631e8294f4266f1e40faf65e23ecbe"],["/js/src/hook-duoshuo.js","24e48a45b2dce799581a2dc548a82844"],["/js/src/instantclick.min.js","f7f1b72a2053b57b9b52a1dd72cee42f"],["/js/src/js.cookie.js","5a09c550e98da89ec65e97abaf119d0a"],["/js/src/motion.js","9be74f978ff5cb777d498bfe3e0f0009"],["/js/src/post-details.js","df86776ad5d0635e4d1a98c71fa8e926"],["/js/src/schemes/pisces.js","d7cb2d07973acc16e72d78ea2ab7e3b6"],["/js/src/scroll-cookie.js","94b675e6bd10f669506381e515fea24e"],["/js/src/scrollspy.js","bc04fd1a2654528e15bbf26193d57775"],["/js/src/utils.js","0c5f177bef46ce3f9b45cf47ca7044bc"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c928d4ca9641fcff755379389aa3ab98"],["/lib/Han/dist/han.js","3f3db9ff37a40879951389b39f7a3d33"],["/lib/Han/dist/han.min.css","90211e935b2d3675c80cb13dc9ad2407"],["/lib/Han/dist/han.min.js","dd9c2bd58291de5755d0351f4f894aaa"],["/lib/algolia-instant-search/instantsearch.min.css","baeb979918707b129e5e8fb9516ef4ff"],["/lib/algolia-instant-search/instantsearch.min.js","f7bc779a39c2d27e492115bc102dab84"],["/lib/canvas-nest/canvas-nest.min.js","2d978ea4004962b62fea1175e43ee6f8"],["/lib/canvas-ribbon/canvas-ribbon.js","acba5a372831291dbbf2a30bcc763035"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a5d3e1d5cf6a1cbe6e8293483f471e2f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","140091269ebf324cbd62ac8a350ef4d8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6c55acde632b5320a27a4c939c14cda4"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","80e30bf7078d10de45f4625ffe231fe6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4dab12e85ff6b88605a905753ac86e60"],["/lib/fancybox/source/jquery.fancybox.css","a32b3bbaf423d147189bcc2a3eb1247f"],["/lib/fancybox/source/jquery.fancybox.js","e6d80b5c1958c40b94008cec540a734a"],["/lib/fancybox/source/jquery.fancybox.pack.js","a3682d671b2d3149324ca3ccc0272d39"],["/lib/fastclick/README.html","8b72f6a71ecab6c0900ed36650b3d93a"],["/lib/fastclick/lib/fastclick.js","202122ca92b1353d26a6565ff7ba9129"],["/lib/fastclick/lib/fastclick.min.js","9ff70ee3234a29cb44607b218a4e01a9"],["/lib/font-awesome/css/font-awesome.css","3d142f03d2fdceb5362c9a197dcb7b81"],["/lib/font-awesome/css/font-awesome.min.css","3d142f03d2fdceb5362c9a197dcb7b81"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","2319c86e912214ed9dfc2984999e5db4"],["/lib/jquery_lazyload/CONTRIBUTING.html","be55a69ce54cea7c1da15a5b10c6f5b1"],["/lib/jquery_lazyload/README.html","01b40ed04db932baf7335afc3578bdcd"],["/lib/jquery_lazyload/jquery.lazyload.js","769a930fca5ca5ff970509ea4ea95ff3"],["/lib/jquery_lazyload/jquery.scrollstop.js","c67e58f6bfa3adcd50167570d4d33e58"],["/lib/needsharebutton/font-embedded.css","edfb64bdf7071272d9174014b7f46682"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","dfdc413176d8bd857bf6108ba1529ca3"],["/lib/pace/pace-theme-barber-shop.min.css","ff4710329d135a6e2a678c08c35819a6"],["/lib/pace/pace-theme-big-counter.min.css","7c696c159572f9690c8d58378212d954"],["/lib/pace/pace-theme-bounce.min.css","f25cbddf2ecef2fb70e5abea3871f980"],["/lib/pace/pace-theme-center-atom.min.css","21b1beea7ef84e58b388f9f551e3856a"],["/lib/pace/pace-theme-center-circle.min.css","4e77b4f430444ec187c3ccb2bb477c49"],["/lib/pace/pace-theme-center-radar.min.css","b623fb2d8b53cab900eda5299097ff5a"],["/lib/pace/pace-theme-center-simple.min.css","8df82d274440d316df9484c2e1b46a99"],["/lib/pace/pace-theme-corner-indicator.min.css","1dd92269edd493f15bbd75e3ba5f0531"],["/lib/pace/pace-theme-fill-left.min.css","b63683300cc2ff4f3607931779833042"],["/lib/pace/pace-theme-flash.min.css","1381099787f3dc28069b2801579a9fe0"],["/lib/pace/pace-theme-loading-bar.min.css","a4fb1165e76161bd62edfcaeae44dba2"],["/lib/pace/pace-theme-mac-osx.min.css","42911a7e185aed4b765f2a402c2aec69"],["/lib/pace/pace-theme-minimal.min.css","088a7369f84031524d2987cf22ef6398"],["/lib/pace/pace.min.js","b553064f6f3671b1f44473f701b5310a"],["/lib/three/canvas_lines.min.js","7279f87aab8f7a1acc3482da72d26be2"],["/lib/three/canvas_sphere.min.js","da6ea84cfe146c14f357064499884329"],["/lib/three/three-waves.min.js","e36f695fd3dbb3b3ea0597f9fc33ba49"],["/lib/three/three.min.js","15f9f32f0568169d73a8a9e1822051ea"],["/lib/ua-parser-js/dist/ua-parser.min.js","c0f64b0aeef4f13dba94143df2bb7234"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c147ec07563dac14b11c5304cfd599be"],["/lib/velocity/velocity.js","23e55865d428200f25db8df3c3982db1"],["/lib/velocity/velocity.min.js","ebd01c5489e8437ea03ea5477b439822"],["/lib/velocity/velocity.ui.js","36725567aecae4f6fd8c9bc208c072ca"],["/lib/velocity/velocity.ui.min.js","afad45e599556e461f50c929e8c26f28"],["/links/index.html","ee7cbe985137405d2d6d5fa95b06629d"],["/movies/index.html","70518cb79a90962294b0238c4557174e"],["/page/2/index.html","5a588a33ed212155b4e5cdf908e5a65c"],["/page/3/index.html","cdc8c277ec732bacf6a8d87015037858"],["/photos/index.html","fd20c09474294cd28c9e75670613794a"],["/posts/191ddb73/index.html","f9902b716c43b219e491c1287cd645c1"],["/posts/1a195976/index.html","50b5eb54e62920ff6f84b471e5f6c10e"],["/posts/2fc77d95/index.html","b0947775819cfb932bdb5550742eaf23"],["/posts/2feacaf4/index.html","a68304b169a0d7912a8a43d1c9905f75"],["/posts/37f2c331/index.html","c3c8c588327b28110898186d4d11bb9b"],["/posts/385f0de9/index.html","a2469e61f741213a47e6239768d7f088"],["/posts/44414303/index.html","624b6a53566a6ca4ad0a17cff564bacf"],["/posts/456610d0/index.html","77504734db0fd50e56f0d51798a68a79"],["/posts/45e51894/index.html","73e4250e23e9e7c0afc0ea1ab7def3c2"],["/posts/4f1131af/index.html","7a5ed23202a71e0db86972cf1def165b"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","0e3575fc58efc05488707cba8b548eed"],["/posts/53bf1d9d/index.html","62abf5f4fcac3b3276885171ae3c904e"],["/posts/63556f52/index.html","5be15eb7f3ee598bc31ccf36f7196ce3"],["/posts/6d49ceec/index.html","34adf1e9b1ba338f925f3b5d3926fc1a"],["/posts/6de7d9db/index.html","bcf4fed089ad7481e6037394a80c4ece"],["/posts/97e5bc9c/index.html","4e68dee5598e8d5b4204bb4795446617"],["/posts/c311b112/index.html","ed3b9910bf04055c0bf380ff07b81b04"],["/posts/c620d4c2/index.html","7120312d243039db21be8f07d57dc696"],["/posts/f8073739/index.html","b29777c81e7f30c88972534efc254731"],["/posts/f97ef43b/index.html","7593a6b2f61cb1edf7619883b49403a4"],["/posts/fa84d5fc/index.html","b3d3a29a2e12f5fda13c3329ae142d56"],["/sw-register.js","7e6752480f95379dd863478fe15d7f8b"],["/tags/index.html","17ccbabe0ea3d070f74dbeca3365e7b9"],["/tags/つぶやき/index.html","b496ef5f8147358ac4ef2e19d3a61818"],["/tags/インターネット/index.html","2cab96212bfd1354c2788ae9d06c7ee2"],["/tags/チョコレート/index.html","92f6a9e1537cd7de488ffaba2c786256"],["/tags/中国に関する新聞記事/index.html","d01c240b2469896add88f2bca064b6db"],["/tags/乳製品/index.html","dce4ff4f0865770dcd5dd05bc9201301"],["/tags/労働者保護法律/index.html","cf856fd1505bfe3abd8c5432f1f7cb73"],["/tags/日常生活/index.html","4f9f96350cc70827484ea87f298b2d7d"],["/tags/日本のIT教育/index.html","0db90c2dd2e3597c6ac1230c4f199a93"],["/tags/日本のIT現場/index.html","4b3eff5cce52c7d6a25b740a36c2c707"],["/tags/日本のビジネスマーナ/index.html","eb9b266aa323d56924436615de6f296d"],["/tags/日本の国内の人権状況/index.html","88c931d4bdb224ae7c95ed6cf53c1c62"],["/tags/日本の経済新聞記事/index.html","a40a1600dbe3e357081a0fce5f30ef65"],["/tags/過酷な現場/index.html","42344f09989df6c9bd3600d0c053211d"],["/tags/金融/index.html","d9881b62fb06981be5b67edee55b39de"],["/tags/食べ物文化/index.html","6e7bb66686a8cb26aa482ab4b18cd4fe"]];
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
