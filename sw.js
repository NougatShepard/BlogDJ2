/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","26e799b18b23242516c489c9b051a3bd"],["/about/index.html","1970f9f06d02b03f7e5031a286dc9fdb"],["/archives/2019/04/index.html","3e14628b711e7a07b8ebb192e5e843ae"],["/archives/2019/05/index.html","4910d99532847ef3602b32662dcced49"],["/archives/2019/index.html","c01bf96e3df2716320fcfaf9d2add033"],["/archives/index.html","aac26732c12bcd4ae255481989083c26"],["/books/index.html","6e8f97fc790cc8a5243a301981296915"],["/categories/index.html","15cb3cc15f9c11a45fd04af7a38b1663"],["/categories/つぶやき/index.html","af8b8d996d77fd747a684287bda21549"],["/categories/インターネット/index.html","4574e08a6c5b0a2bd748893890cfc23f"],["/categories/食べ物文化/index.html","9e1bc9a7544ab15b8ebaa1aaa1239471"],["/css/main.css","79a91d24b970188a58675aa3af396a25"],["/games/index.html","2fed945a9a3bc3704175283caaf6884c"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","0712d3039f9d3d6b20d3be9bc7451c4f"],["/js/src/affix.js","230e39ece7bdd0270d9614e73c3e4451"],["/js/src/algolia-search.js","50bb0839ed31e1af32550f1874203912"],["/js/src/bootstrap.js","850e15a2e0e871f2b2b5b812451215c7"],["/js/src/china.js","cceea11ef22d78b1e3a3ca59d9a9a625"],["/js/src/echarts.min.js","0031c3e90281042bf35464a6a28bc57a"],["/js/src/exturl.js","4efd923ecc133157523d8108e279718e"],["/js/src/footprint.js","42dad97edcc729214727c55d39ad9967"],["/js/src/hook-duoshuo.js","d2bbad82d11bb7820366672ea05a9719"],["/js/src/instantclick.min.js","9610e9fe18f5c29508a7f9c638e4faed"],["/js/src/js.cookie.js","d99f34d2f5353826e671247d078f4e86"],["/js/src/motion.js","d2af6519b681981a81a619ed60d0f382"],["/js/src/post-details.js","a434ccd1e7e4ce11f7eb41cd403b989c"],["/js/src/schemes/pisces.js","21d3e02854436c2b908aaec5eef44a7f"],["/js/src/scroll-cookie.js","4edbc09d395305f3b0f0b166904c6cc2"],["/js/src/scrollspy.js","0b16b641bdc33c2eae7165394f74635e"],["/js/src/utils.js","6e38a90896c75cdd4b56bc18e8074790"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3a056cf2da8edfd90bd7484bade62aef"],["/lib/Han/dist/han.js","720b1c909ee9231de1ad8b654d75e99c"],["/lib/Han/dist/han.min.css","65510e5f8a2d8dde5719802cbbbfbc35"],["/lib/Han/dist/han.min.js","b2a3566136d9ea8139c6085acbe3c505"],["/lib/algolia-instant-search/instantsearch.min.css","c016dcf3b4f021ee947d62845f0483d5"],["/lib/algolia-instant-search/instantsearch.min.js","6720bca601fe8caae11af9cdf277e7f9"],["/lib/canvas-nest/canvas-nest.min.js","0b0b94f4e0dcd3cf0cb5900b53d360f2"],["/lib/canvas-ribbon/canvas-ribbon.js","a5cd8164db9e1adec5af8624f030ba7f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b4e44a59d1331273adbb4d48d6f43d70"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c26aaad794f6a972503ae851a7cefecb"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d488341cffdd802c4e057e3241f67538"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","61eb6bf99db4a19fa55612bbe9fc8490"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9a88ad6f77a52c6cf18a73f02d25db1d"],["/lib/fancybox/source/jquery.fancybox.css","152320a6d4ba8b4d8b69050aecbaf4b1"],["/lib/fancybox/source/jquery.fancybox.js","8a0902640b9133b60e6e76b36af3f494"],["/lib/fancybox/source/jquery.fancybox.pack.js","75cfab9d5236f7e3e41b875f20eb8075"],["/lib/fastclick/README.html","82307af6453441c5ac7deff169b97fb1"],["/lib/fastclick/lib/fastclick.js","3a526074ccab61e6b28a982d411406bd"],["/lib/fastclick/lib/fastclick.min.js","fcf5a53e07cbd0760539e14efc2bcfa3"],["/lib/font-awesome/css/font-awesome.css","cc6ab4dbfe156acc04b929e36c85a15a"],["/lib/font-awesome/css/font-awesome.min.css","cc6ab4dbfe156acc04b929e36c85a15a"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","2e3341b8bf9349eac0b402ddf33cdadf"],["/lib/jquery_lazyload/CONTRIBUTING.html","7a65897e302a9be801af97fc6b0c1b0b"],["/lib/jquery_lazyload/README.html","ab1464336aafe0649f8c0084026a28db"],["/lib/jquery_lazyload/jquery.lazyload.js","91ecc6a90bd01c5be6ebb9dc87ce59ed"],["/lib/jquery_lazyload/jquery.scrollstop.js","10f5916c3e60a3fd1fafedc91698d0fa"],["/lib/needsharebutton/font-embedded.css","1e8c27cdd9bcb31013c2d75606acf9f6"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","4d406f0a61e925f704a1563825d0fa63"],["/lib/pace/pace-theme-barber-shop.min.css","b256ec93940ef7451592454abe5db8cf"],["/lib/pace/pace-theme-big-counter.min.css","1cdfd880fe861628d8ca69f53fa04e5f"],["/lib/pace/pace-theme-bounce.min.css","a86b0f422f99685f4b94be1b668357a9"],["/lib/pace/pace-theme-center-atom.min.css","b2c67799f3ac5e99700086d6f4adc57b"],["/lib/pace/pace-theme-center-circle.min.css","723780e9461e17a7dbec1bcd4fcff12b"],["/lib/pace/pace-theme-center-radar.min.css","495bf026eab99713d076e758a392ef0d"],["/lib/pace/pace-theme-center-simple.min.css","d9e354a147398e9970cac22542ecabd4"],["/lib/pace/pace-theme-corner-indicator.min.css","ff1950b6055d7320f92abb3f838166c4"],["/lib/pace/pace-theme-fill-left.min.css","8eb6ed051d1d16041c37d518ddebcd0a"],["/lib/pace/pace-theme-flash.min.css","fe094341b696424b2eb8af6b6ec47fb5"],["/lib/pace/pace-theme-loading-bar.min.css","a76c32ea9196e25275691fe69c879d42"],["/lib/pace/pace-theme-mac-osx.min.css","6f018708f20f36d23230fc83ea1d8932"],["/lib/pace/pace-theme-minimal.min.css","2e3dc916a182a5d6aca8b0d690ce226a"],["/lib/pace/pace.min.js","59ad167103627d094456cc5d535afbb1"],["/lib/three/canvas_lines.min.js","a148b244a5224afff56bbf96cc672580"],["/lib/three/canvas_sphere.min.js","d35e48fbf37673243cb3adede4b2c845"],["/lib/three/three-waves.min.js","c0293bad84552184344944f7f88b2cea"],["/lib/three/three.min.js","b56aa9e99cefb02dc9bfc0c74a332a9d"],["/lib/ua-parser-js/dist/ua-parser.min.js","805c4997da8a4e12e1469748cfae2028"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4c3f34b456d4627327568bca93b77da2"],["/lib/velocity/velocity.js","1c1eea91f900511138f3cc109079f6c5"],["/lib/velocity/velocity.min.js","7994240d3c29eac2b0fc6c37e04942c3"],["/lib/velocity/velocity.ui.js","6688aca7980d76b81d5943919f9f6858"],["/lib/velocity/velocity.ui.min.js","68f3edbea4615767594e2dfd936f3cd3"],["/links/index.html","6f6fa031a0a65355b6a48980f6cf8146"],["/movies/index.html","ce20252fb9429d907ba87a3e4142bb42"],["/photos/index.html","64bb83e966ca6f40a8d3a722ed3b1cfe"],["/posts/191ddb73/index.html","d4f6c658a8a3523f03eb9abc61cf6050"],["/posts/2fc77d95/index.html","f05e56fe13476ad30999aecb18e2ffe7"],["/posts/4f1131af/index.html","10691c695b3e93b1846f37858980c324"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","f4356a1189d472ec4ab2b099e1e074e2"],["/posts/6de7d9db/index.html","1c1764158e6154ea79f06c4a966b9f69"],["/posts/c311b112/index.html","a784aee08707c48c70ecbea6525c2448"],["/posts/f8073739/index.html","2182cbdb1d055cfd01091770a753d84c"],["/posts/f97ef43b/index.html","cfb10c18507e4cb757a1aaa9efbb71ae"],["/sw-register.js","e97d066fca69381dd94ec2e1119241c5"],["/tags/index.html","0078798b7d770ea51d6a55c262c83b70"],["/tags/つぶやき/index.html","7cd39332a6c6b334c2ccbc47419c37fb"],["/tags/インターネット/index.html","8a9af78c5cc7daae0ff89e1c477d96e4"],["/tags/チョコレート/index.html","9fdb4d4367d201901345be20f4ae0274"],["/tags/乳製品/index.html","1cbd06578a51ec15bdb4a20b34974320"],["/tags/食べ物文化/index.html","394995747c4e54a175a981fbcae2d6f6"]];
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
