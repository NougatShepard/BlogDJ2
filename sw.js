/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","5cb7c4bd6cb86a004c15180629eaf61d"],["/about/index.html","a1d3bf5fbfa854c5cf836eefd6989f9f"],["/archives/2019/04/index.html","c0f9617f4cd4a9892cf9ddc534fc3257"],["/archives/2019/05/index.html","89f8a64aa96989999ba0b1675b2ae294"],["/archives/2019/index.html","d55e901dda93d5d5ab57ba947c9d1510"],["/archives/index.html","947ce1b70c668369d921b06218357aa4"],["/books/index.html","f9fd73420e84a59df25e9ebbd286a7c3"],["/categories/index.html","f06ded0881f9bce3474e94111763d85a"],["/categories/つぶやき/index.html","b0318169b6302675c19984e355b3a288"],["/categories/インターネット/index.html","09d91e06e5958d1848e2d88fc0c538c9"],["/categories/食べ物文化/index.html","023b8ca4735d6d6d504b3f3b9749f507"],["/css/main.css","e511ae94a11268b22a95a343d1064e17"],["/games/index.html","0feba7fed95d4116a85251fce016bd86"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","bc8d3e88bdd530f867f43e6d5c9eade5"],["/js/src/affix.js","6992c47f5a1323e0eff05c98ca31ca10"],["/js/src/algolia-search.js","d71f5b0bad15e24fc6e2a35f961bab23"],["/js/src/bootstrap.js","86259c431d3b6fcb6da40fb8bd456ea2"],["/js/src/china.js","7519808e7208b55d7f49a32d1e7b472c"],["/js/src/echarts.min.js","6594b7acdf7992d15309d2ffea8b79c3"],["/js/src/exturl.js","a6b7cc23dd96e94737d4be7500a63d4d"],["/js/src/footprint.js","cd97ee7ea22385fcd3c21ed8eeea69a7"],["/js/src/hook-duoshuo.js","c02eff17ae1dfedea984d35e693b8a42"],["/js/src/instantclick.min.js","c8cb72cdd7245d90a96488de06fdae7d"],["/js/src/js.cookie.js","fb8c590e5371c33c1cbe473c19ff1b8a"],["/js/src/motion.js","c184bf71c3e74c7c7e7b5c12f9476782"],["/js/src/post-details.js","7c97793ff442e70c95b2b21dd07c7da2"],["/js/src/schemes/pisces.js","6e59556aa6ba89b5abef956142e327fd"],["/js/src/scroll-cookie.js","ceed4ead8b62ca91b8d9cc7bf2db9987"],["/js/src/scrollspy.js","b839d01c8f44295524ac01cd2f934151"],["/js/src/utils.js","2ab22c9c652aa43ba05d98abf1bd99d8"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","ebd6ab434b7372565ef3def055470ef4"],["/lib/Han/dist/han.js","5de1e6a84e3fa2a452c41d45cadfafc6"],["/lib/Han/dist/han.min.css","18207277721efade6309fe8e98f2a0c9"],["/lib/Han/dist/han.min.js","d747db6d009f0f5ee74393e71c3194e3"],["/lib/algolia-instant-search/instantsearch.min.css","9484d80c80b3a50246b50b33b4b6289e"],["/lib/algolia-instant-search/instantsearch.min.js","a1070ecbc6c806ad4f94d124d69658d5"],["/lib/canvas-nest/canvas-nest.min.js","0415ef8b065aad242ef985696c916772"],["/lib/canvas-ribbon/canvas-ribbon.js","f5d793e1883aa3cced3920ea2508800a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e9844a8f18ce7a474efe6310b334b7ef"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","809de45fde2d4bbe7cf713e0a1123304"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e294f4d5a153f375df296a3062036ac4"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ce8015100ad76af8ec8633812d092635"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a033634302aa0ece935ecd2eab48d306"],["/lib/fancybox/source/jquery.fancybox.css","7957e2eacba545faa121b121f4bb1f4f"],["/lib/fancybox/source/jquery.fancybox.js","d04ec034316184dc1650ec7d2dbdcfb0"],["/lib/fancybox/source/jquery.fancybox.pack.js","f2a816c7ba28419bfce778ab71a22662"],["/lib/fastclick/README.html","5ea3b198d46392da0037240ed9f37bb3"],["/lib/fastclick/lib/fastclick.js","22feccfdcdbb2a1aa3099c49cec5f590"],["/lib/fastclick/lib/fastclick.min.js","6db94dd5d0c14ed9d016dbedd7cb4a7e"],["/lib/font-awesome/css/font-awesome.css","77e532be995f7cb04f7d688d1c36a708"],["/lib/font-awesome/css/font-awesome.min.css","2772695901660fb39bff776becd6504f"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","9c562b871f362cae7c6014a930f0b9a7"],["/lib/jquery_lazyload/CONTRIBUTING.html","f82d2fd6c99b7c2506367db99e3910dd"],["/lib/jquery_lazyload/README.html","e3f892876b27faee707f111ef38cb8b8"],["/lib/jquery_lazyload/jquery.lazyload.js","9a7d0d18b1289ad7798d2a1d09aacd0e"],["/lib/jquery_lazyload/jquery.scrollstop.js","6acf18df9ef3aff537e5f80300b58826"],["/lib/needsharebutton/font-embedded.css","2977d939f7b275ffb280007ff3ad7408"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","36b45c8adbfeb035babdd1736e639de3"],["/lib/pace/pace-theme-barber-shop.min.css","9df42e37a398b246c6ccc75f618c2a2f"],["/lib/pace/pace-theme-big-counter.min.css","fa3fd494c2214d173f01f6152adc0901"],["/lib/pace/pace-theme-bounce.min.css","bbf1c8fc52bec112ba5efeef8f8a0b73"],["/lib/pace/pace-theme-center-atom.min.css","4f37759e56181b72c5ccd7c7362633d5"],["/lib/pace/pace-theme-center-circle.min.css","47d9844503345d9a2f61e48bdbeb6245"],["/lib/pace/pace-theme-center-radar.min.css","6c112d7554b82152c12d195cc99f11f3"],["/lib/pace/pace-theme-center-simple.min.css","ba600c5b8ed3e4e9b8ee365a5c4809ab"],["/lib/pace/pace-theme-corner-indicator.min.css","53e1757b703d069b80ab1993ffa3aa48"],["/lib/pace/pace-theme-fill-left.min.css","1f984c88c25882a9add7a3116bd7d8ca"],["/lib/pace/pace-theme-flash.min.css","da6a56af249221861d12c1b72e3f1419"],["/lib/pace/pace-theme-loading-bar.min.css","e86a0099d5677498a17e15c87e24000a"],["/lib/pace/pace-theme-mac-osx.min.css","a80d72730a6edb37507f75bb053f2f54"],["/lib/pace/pace-theme-minimal.min.css","857f606b3b0d94169d3db3ae7879523a"],["/lib/pace/pace.min.js","e2f6d5a64e7a1465749943c48b64629b"],["/lib/three/canvas_lines.min.js","22403c31fcf70468684a109d7dfeaa48"],["/lib/three/canvas_sphere.min.js","60fdb2bfa347a99fa3f677b9f1641402"],["/lib/three/three-waves.min.js","80ae45ec9488e0d58ba5904f601d1602"],["/lib/three/three.min.js","6cc4020679e8af0205e2301f15893e70"],["/lib/ua-parser-js/dist/ua-parser.min.js","6926c2d5096ca2717c85f7121d6821b9"],["/lib/ua-parser-js/dist/ua-parser.pack.js","76aac4959443fe2739f6bace231e2d08"],["/lib/velocity/velocity.js","4953b4c1f17a2716262fc4adb52005b9"],["/lib/velocity/velocity.min.js","37f74612a0b20bbbb577a43252da55b1"],["/lib/velocity/velocity.ui.js","b98436e569e8ff23f4522d35858d5ef8"],["/lib/velocity/velocity.ui.min.js","debc590c2dca46fd1989c84a97612121"],["/links/index.html","2bd9ada9163771c4f1c48a2c73d01b13"],["/movies/index.html","6ae426615b2cefb6b0ca88af1e1dfee7"],["/photos/index.html","68effe42031b96b1e86ba15b9ea0db92"],["/posts/191ddb73/index.html","65103003678f04cade883bf468c0903b"],["/posts/4f1131af/index.html","68d82a842f2a1e110063cc79f563fda4"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","81eedf874d54655fc0c268235febba03"],["/posts/6de7d9db/index.html","3acc9ab767ad3110098e82a07cb648cb"],["/posts/c311b112/index.html","32872d6d34fb19bb81eea2a102a1967f"],["/posts/f8073739/index.html","a564d558ac30a98d706a3035e4a8d54d"],["/sw-register.js","f34cdcbdd2344641790faf9777286257"],["/tags/index.html","332850dc22b63dad65634036f6c2c3c3"],["/tags/つぶやき/index.html","8f291541074bf94a32798ce96ccfb7f7"],["/tags/インターネット/index.html","031f9b4271819cb337952131e5c9c4e5"],["/tags/チョコレート/index.html","5fd2cda21e256d880672006822753650"],["/tags/乳製品/index.html","f23a57a12b598818b77a535ee181a727"],["/tags/食べ物文化/index.html","bbcffc3092533711a5fe029d459cfe37"]];
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
