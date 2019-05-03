/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","3f7e92420151facfe7a4a5a2cbc6fd2b"],["/about/index.html","d0277d0f201f1d757b352d1d8db3827b"],["/archives/2019/04/index.html","02fabfce3ac981e0ed6eef2129278b6d"],["/archives/2019/05/index.html","11a9e4f52950951b226b0c9324c26315"],["/archives/2019/index.html","1a7d9cc9bf62b9ac8cf73c96d492bec9"],["/archives/index.html","c2e80ca256e762aaff3c81f06e37ebf8"],["/books/index.html","3db11548f304fff07311864f2003848e"],["/categories/index.html","0f6874eefc59af908d11a836cf32dfca"],["/categories/つぶやき/index.html","1a736f23436caa9aa11a5e541e94b271"],["/categories/インターネット/index.html","dd3f1975237199bb318d2514986dca2a"],["/categories/食べ物文化/index.html","21a7da9e6b196556bb6c36aca53785de"],["/css/main.css","6ef14ac1916a211c6a0957e0c228f116"],["/games/index.html","7777bf26c310b284e07591187756aa46"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","81cf50d1d9d27ec02adec73a6ad99095"],["/js/src/affix.js","105fb7442d07524eab638a9075eb924f"],["/js/src/algolia-search.js","9b5ffaf968945a76289fc4cdda847bf6"],["/js/src/bootstrap.js","4f9f4b9c05898df9a085dd42dd6b90cb"],["/js/src/china.js","34e93fea4da80a99950222af106d6581"],["/js/src/echarts.min.js","3a8bc1b1432fdad54854993831429dbc"],["/js/src/exturl.js","6961ba2c95c0331125ef574abe166928"],["/js/src/footprint.js","139aa396adf16460e7b05de9a3fb57ff"],["/js/src/hook-duoshuo.js","88ee4540b9c865c4ff824881ceb0a531"],["/js/src/instantclick.min.js","521cec0e493dfced03797ebbf54f974e"],["/js/src/js.cookie.js","132fbbe5aefd37f7432d13478bdd59e8"],["/js/src/motion.js","3e7156dc86b69b663b90f649656b9596"],["/js/src/post-details.js","8493d32124e645f4e6f98795d265540d"],["/js/src/schemes/pisces.js","30b4e89a19b12e47c0f54957120d183d"],["/js/src/scroll-cookie.js","698977183db7bc22d06736b723189610"],["/js/src/scrollspy.js","a0746876794a0cfdb83b89dfd66e0fc8"],["/js/src/utils.js","218107d43325cd79f5fdabd24e9dfe3e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c21cad691829ecc3b1826dc44a7f97ee"],["/lib/Han/dist/han.js","8859a8ec5b9601d94cfe87a5381d12ae"],["/lib/Han/dist/han.min.css","dd42defbc1031a7567b07a4ed8fcd07d"],["/lib/Han/dist/han.min.js","e1a9e1b9dcf5fa0c4a7e9da6a642a9bb"],["/lib/algolia-instant-search/instantsearch.min.css","ee00b4a240ebbd670f5ed0340227b4c0"],["/lib/algolia-instant-search/instantsearch.min.js","7094d39e6a7f269e2cd94e04b94bc8f3"],["/lib/canvas-nest/canvas-nest.min.js","bc05282e0d9902d3b74f4cd0ba5968f3"],["/lib/canvas-ribbon/canvas-ribbon.js","d1cf867211b6e91bf75d91462bb0a90d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","48b1e68f10b7f37878557ce8bb27c8dc"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fca3c8d85f674b378b23370b51dbb440"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","09d5184d2edc7636756edde6d64dcb54"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","62d181ec71879a2bfa56967ac307a95f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1e80640ee51ae102607f634eadfbbe26"],["/lib/fancybox/source/jquery.fancybox.css","144d3184c308377e05f452a62e3c34bd"],["/lib/fancybox/source/jquery.fancybox.js","c3d2ddae9099c453aa4c2461fe10fd24"],["/lib/fancybox/source/jquery.fancybox.pack.js","8cf8c0a0b49f61c15eabdb79c98c09ce"],["/lib/fastclick/README.html","afc464139c023ce4200cb87555f39423"],["/lib/fastclick/lib/fastclick.js","f57b3f7dcd753bbf84c90cf6546c1240"],["/lib/fastclick/lib/fastclick.min.js","d5bcf6b773ac9e413d2c9251c6544e8a"],["/lib/font-awesome/css/font-awesome.css","619764520577c29d2a788e99443bf63c"],["/lib/font-awesome/css/font-awesome.min.css","619764520577c29d2a788e99443bf63c"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","a54fd82a97b8a45d2088f5beb29bb0d2"],["/lib/jquery_lazyload/CONTRIBUTING.html","6b068697041fb94c6da33feca8fa7420"],["/lib/jquery_lazyload/README.html","ab28a69d858df95fae1d0bd46e374369"],["/lib/jquery_lazyload/jquery.lazyload.js","958e91cba31da09d221befcac1ced6dd"],["/lib/jquery_lazyload/jquery.scrollstop.js","909432721fa7e81bd280757df17dc6d6"],["/lib/needsharebutton/font-embedded.css","1ba0e479e4ce5bbb4573c969f12e8dc4"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","a8c549fbd80d998c60d4a2ab0514ca20"],["/lib/pace/pace-theme-barber-shop.min.css","2f832f7a1829943876ac1ea667f551f0"],["/lib/pace/pace-theme-big-counter.min.css","f8fe6f2f984ed4e3b1dcc478400dec7e"],["/lib/pace/pace-theme-bounce.min.css","7e07cef7b54c9e1907f89e792b6313ae"],["/lib/pace/pace-theme-center-atom.min.css","fa87925a27439a5086fb04a17d63c1c1"],["/lib/pace/pace-theme-center-circle.min.css","777aef2f4dc31646964daced22a77fb4"],["/lib/pace/pace-theme-center-radar.min.css","571d2e6ed44f06517ab97cafb139f094"],["/lib/pace/pace-theme-center-simple.min.css","846419a768a149eddc64d4acacda8f0d"],["/lib/pace/pace-theme-corner-indicator.min.css","95eb5382f4ce176904bac138b8ed3256"],["/lib/pace/pace-theme-fill-left.min.css","9b2b17e9c38d29fccf2ace6aa9e55662"],["/lib/pace/pace-theme-flash.min.css","a9a01bb07db85032e972a2ab983540c4"],["/lib/pace/pace-theme-loading-bar.min.css","d7a40c9d596e55f4f559b8f3e818d070"],["/lib/pace/pace-theme-mac-osx.min.css","eabaeffa92a772d173e68048041ca2ed"],["/lib/pace/pace-theme-minimal.min.css","8bcd2de35d0df107c9beb2d4cc688482"],["/lib/pace/pace.min.js","b73b82c73a3960c0ea35ad52c3de6811"],["/lib/three/canvas_lines.min.js","77c2d85614a8ee33c9d5ecf66f7800c3"],["/lib/three/canvas_sphere.min.js","480b0904a46fc388504b3e8da7a9db31"],["/lib/three/three-waves.min.js","6aaa5753ec461ebfb04a1d3221e628ff"],["/lib/three/three.min.js","ad08a9bccc350771a701dc93817a2cea"],["/lib/ua-parser-js/dist/ua-parser.min.js","ba3def11bb48aafc315ac2771295dc7a"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c1266ffa5d17f40abffe8be4d7c99a1b"],["/lib/velocity/velocity.js","c69e52a1d55c8a10dc2bca8c77bf289d"],["/lib/velocity/velocity.min.js","ee85aebc266e9fad6731bff1c22cb6fe"],["/lib/velocity/velocity.ui.js","1203d2676d5cf1cf9adfc77a76492e3c"],["/lib/velocity/velocity.ui.min.js","83dd6739102f519ab2ef9555594e15d8"],["/links/index.html","70a3a7cc62477f280da17eb398b2db61"],["/movies/index.html","08b0565cae54d67d8d73993ff05fda77"],["/photos/index.html","a4530a324fbaee7921201481d7819d8b"],["/posts/191ddb73/index.html","5c30315142df9f4a32b22cb88f6786c8"],["/posts/2fc77d95/index.html","1fdeba0de1f2012db8d2803ee5ce4939"],["/posts/4f1131af/index.html","15a83a5d09f9c9c194d936df73fe1718"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","b4fc025c5affe643cdcefeb51981876d"],["/posts/6de7d9db/index.html","7d5986040a07f248fd668621bcc6345b"],["/posts/c311b112/index.html","4f4083c9474baba836387d704a930e2d"],["/posts/f8073739/index.html","005a56b3d0e7b36bdb93b9c9252c89ed"],["/sw-register.js","0126fdbea42b5324d9528b3a0221f8bd"],["/tags/index.html","92612235e4b7286b187dbfe64c51e484"],["/tags/つぶやき/index.html","ea5fdf6af1c0c5326252a7bc4da0c2c4"],["/tags/インターネット/index.html","5d3a83e65f1a36ed7629631b08b26a9b"],["/tags/チョコレート/index.html","24da4f9a467c8287320423ac6cb9a010"],["/tags/乳製品/index.html","b16df89e5aef8728eb2f0b894a8856c3"],["/tags/食べ物文化/index.html","17d631689c721b578342ed49f5e40b70"]];
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
