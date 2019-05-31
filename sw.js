/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","b969a53f2990ae997ca27d7f8bace880"],["/about/index.html","deadb38c2a48eac5d8ebfa97bb8355cf"],["/archives/2019/04/index.html","2b99603a688525f83f3e1aaa417f271c"],["/archives/2019/05/index.html","4ce0f2a4a50b5059e5f48b0a1df9310c"],["/archives/2019/05/page/2/index.html","67cf0c109d2795dca4cd507adc7e8bcd"],["/archives/2019/05/page/3/index.html","3266730054479c75a129dfef50bcc7c4"],["/archives/2019/index.html","5d654788b39115de60e3b35c2520e0ca"],["/archives/2019/page/2/index.html","3ee71cd91a42f6b758779af42dfdabf9"],["/archives/2019/page/3/index.html","a8c3f34b82e30bfe1ecb534f00b3a029"],["/archives/index.html","3ff9d39e7a2a6997de70980b22797aa9"],["/archives/page/2/index.html","61c93bb15b0e77afa8d567dd36b21b7c"],["/archives/page/3/index.html","c65ee39243074321631e2e63c6c8a1d8"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","bc638c2fd8a0e94326db08ba5617966b"],["/categories/index.html","05d749535d563c3b515fc067f552ebed"],["/categories/つぶやき/index.html","8abe883bd14e8de25291208d55ca8e16"],["/categories/アニメ/index.html","62e63ad69d41bb4fcb2a68c4aeb36b9d"],["/categories/インターネット/index.html","dda13d41c13e815a9f73376234bf721d"],["/categories/中国に関する新聞記事/index.html","0759a35d8b71ccdde5e72a596b23a4d6"],["/categories/労働者保護法律/index.html","6e78d9a674c3f2112a2c7e71fd3e262e"],["/categories/心理学に関する記事/index.html","bb45fd1b109d3152f8abc215ce150ca7"],["/categories/日常生活/index.html","f3ade8b369acd27d1b6f7fef646aa2cc"],["/categories/日本のIT教育/index.html","9070d427f174b4a93cac070d5ae825c5"],["/categories/日本のIT現場/index.html","8ed2a2b67854e461f9532f2f0ab93afb"],["/categories/日本のビジネスマーナ/index.html","e1899b3efa099b7042b9d0ffff179dc3"],["/categories/日本の国内の人権状況/index.html","e148eaee703189354337db77e1d9c184"],["/categories/日本の経済新聞記事/index.html","d42fed0d16e6c3e9a8e64e11c743839b"],["/categories/环境/index.html","eacda158d68d53744015e59e8ef8bffd"],["/categories/過酷な現場/index.html","eab9ceab2ec938e4a07e0a0ad6c5c487"],["/categories/金融/index.html","2cbd778b1b2090f3d8da410ac9e8613a"],["/categories/食べ物文化/index.html","cc2f910a62736e7ddba7b05e6ac0063b"],["/categories/食品工業に関する記事/index.html","e6f8951f03a637da64d9eea15e0f5320"],["/css/main.css","d994c95f7c2f1e035f841e67824ff287"],["/games/index.html","2d7af315034a2b39d379fb387453f9d3"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","4fd03d2805d8d6c1db1cb401ca0c54ff"],["/js/src/affix.js","cbda000d7fbf514dc1cf7ea5de6685c0"],["/js/src/algolia-search.js","706d79dbfb49fd9b53b4d3d0e3c171fa"],["/js/src/bootstrap.js","4c3ab612bc6279fd2e5f2da8d30a1ada"],["/js/src/china.js","f14789c23f56788b7b150c0d543eb8ae"],["/js/src/echarts.min.js","4bb20bf1af592a9827291cce90a88005"],["/js/src/exturl.js","9c256d4917d32e2ac0ab2839df2f52e0"],["/js/src/footprint.js","c7b1ef5de831800134b89312282b7ad5"],["/js/src/hook-duoshuo.js","ce258607919090ca0397962822f07441"],["/js/src/instantclick.min.js","823af18f3a4abd7d38d65225baf509b3"],["/js/src/js.cookie.js","b8296f12d83d6881dbced112dcac8d44"],["/js/src/motion.js","5a40fcf15e7c9bf89246789d42b33ad4"],["/js/src/post-details.js","1645710d323712c74746ed8d44afa974"],["/js/src/schemes/pisces.js","26359a64a35ee78aa70c33fcb74c5f33"],["/js/src/scroll-cookie.js","7de6977dcbe21003e76830f2dcd6faab"],["/js/src/scrollspy.js","ff24b0746f3d888901af69038d49b1c7"],["/js/src/utils.js","fa3fa9a1baf691777c1d0ba47b595de4"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","e4f04881e89e0010c34c2cb92b47bea2"],["/lib/Han/dist/han.js","a728cb7b13d6c82810c50ca15a29230a"],["/lib/Han/dist/han.min.css","36d80b2fe1b5f4c0c2144369e90b2f19"],["/lib/Han/dist/han.min.js","83a4ace0472b5c180ee98a10c76157a3"],["/lib/algolia-instant-search/instantsearch.min.css","4cbc43ae71fbcbcabd27a949c2a570ac"],["/lib/algolia-instant-search/instantsearch.min.js","c7da9c468df4fad1a2338c0bd58d7cdb"],["/lib/canvas-nest/canvas-nest.min.js","3064c51f450968230d4c1b1407cf0e64"],["/lib/canvas-ribbon/canvas-ribbon.js","430d52ed14297fc313c524affb1f10bb"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","6592d261d2bd8a95bad49a5f8efd297d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f52f59eea93d467ce879bdcdb8dc2b6f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a29bd14ca7a325f54442331e8af0219f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","60f70c26ccfaafd5c923591d5555239b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0716494e097966f4c79d39c22540c468"],["/lib/fancybox/source/jquery.fancybox.css","a84d46768bc68cb7053ebe984cd31b2f"],["/lib/fancybox/source/jquery.fancybox.js","d085deb9e3c19e98bb253359dc975068"],["/lib/fancybox/source/jquery.fancybox.pack.js","4620f7c9083bd16be9e4961242d5a875"],["/lib/fastclick/README.html","d0d12c69c4decdcab0ed14c96392ce75"],["/lib/fastclick/lib/fastclick.js","410fd8db9fb40199f4a998bfc4c9d3cf"],["/lib/fastclick/lib/fastclick.min.js","fc29d343f3447e430dc8e8230c788050"],["/lib/font-awesome/css/font-awesome.css","a8cee38b94b3c2b1605913a369bc3564"],["/lib/font-awesome/css/font-awesome.min.css","2fdb47493320014ca0138b861a7c289a"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","a70ad884acf3706db47193513a9aa732"],["/lib/jquery_lazyload/CONTRIBUTING.html","0efca48aacf271e4b5eea2dfb14cd276"],["/lib/jquery_lazyload/README.html","07ef681916452ab7410aa9730de63ac3"],["/lib/jquery_lazyload/jquery.lazyload.js","882ae7575475f868e8bf7c168b5beb7f"],["/lib/jquery_lazyload/jquery.scrollstop.js","59261c03fe1e1dfa91205846bd0b57bd"],["/lib/needsharebutton/font-embedded.css","588f5aafa5330a26c7b99eb6f7e65857"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","47010c080b0e176bdee91311c2df7695"],["/lib/pace/pace-theme-barber-shop.min.css","bb5737758cb6b030db769e58d73d8781"],["/lib/pace/pace-theme-big-counter.min.css","3278099128301d39448c8de69481c1db"],["/lib/pace/pace-theme-bounce.min.css","c2b7794a9a6ae2715134fce26cf0a6d3"],["/lib/pace/pace-theme-center-atom.min.css","d7b8bdfd72e65989bdece503a8aaf42b"],["/lib/pace/pace-theme-center-circle.min.css","9e2beb7010649dcfecddb1b50588cc40"],["/lib/pace/pace-theme-center-radar.min.css","1327f63c9365b914d1b383f4e3bf7ca6"],["/lib/pace/pace-theme-center-simple.min.css","bda0f1fd43297f5154b6f9a335a52d73"],["/lib/pace/pace-theme-corner-indicator.min.css","33bae0d89f215b24f697411158ac77f0"],["/lib/pace/pace-theme-fill-left.min.css","224ec66ee43030a445ba0672f3313ea0"],["/lib/pace/pace-theme-flash.min.css","d4db4ff5ca6502fa4b7ec275b31b3571"],["/lib/pace/pace-theme-loading-bar.min.css","9b6f5716dcff34f813944df42137e9d4"],["/lib/pace/pace-theme-mac-osx.min.css","7ba1e0c90cb7d2409b7a50562cb87799"],["/lib/pace/pace-theme-minimal.min.css","24c0f1f28800b718f813e9ba4697a064"],["/lib/pace/pace.min.js","d5a8e99412cdb986971e60584705873f"],["/lib/three/canvas_lines.min.js","2b79d80b5d6e0de449ae3c7c6165c5bc"],["/lib/three/canvas_sphere.min.js","334d7f2f63644debcbb3ba624cf1c164"],["/lib/three/three-waves.min.js","4c4abaa16e8679bc3eb44acf90225867"],["/lib/three/three.min.js","dffd89e1fc4b27bb3f717ea9b6863d39"],["/lib/ua-parser-js/dist/ua-parser.min.js","bd24ddd1d5db4342610a6dddcdea09d3"],["/lib/ua-parser-js/dist/ua-parser.pack.js","28bfcbdc4889fbd4a5e20129a951245e"],["/lib/velocity/velocity.js","f2aaae5e47ba934aeadb333923868dd7"],["/lib/velocity/velocity.min.js","dd058b6255fcb81b12bef0c609598c76"],["/lib/velocity/velocity.ui.js","a355826317ea250b29946c76e83279ff"],["/lib/velocity/velocity.ui.min.js","6216c02a8a418d5ef6d101f3fe18b5e2"],["/links/index.html","431dfb3c6e15afa741b65ec830675150"],["/movies/index.html","0bf1f07ee76c8163fd2fa199ba51853f"],["/page/2/index.html","6911b7522159fff016e0891b21a050ff"],["/page/3/index.html","ca51e816b482c8f1ac3ed94d91782da2"],["/photos/index.html","6137358e0a90a0990187169b69e2fcba"],["/posts/191ddb73/index.html","79fea6bd653cec0c89f28591903d840d"],["/posts/1a195976/index.html","05db38699e7effca48f48a07600acdfa"],["/posts/2292f1af/index.html","a6b945dfe9c6c2facc9f7e866bdab6f9"],["/posts/2fc77d95/index.html","d07977480bddb51808d79f24aa0a7325"],["/posts/2feacaf4/index.html","67c773032d4ff1671ce60363fd278f9d"],["/posts/37f2c331/index.html","e4bd92359b00fc07ebff42d1ad89083a"],["/posts/385f0de9/index.html","2394b511afa9c51b4dd7944e287d5d55"],["/posts/44414303/index.html","7f16347b8cbd26b044af616b5984eadb"],["/posts/456610d0/index.html","18d697c261830f515d13785d7be4dc56"],["/posts/45e51894/index.html","0793e11e5be17bb5d11ef748a9fdea39"],["/posts/4f1131af/index.html","a7d187324f1068de54aa59504baef9f3"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","e2da023f6f8bc4e36fe77e0b9d95279c"],["/posts/517ebb95/index.html","aedf8eb8723ecc189e12455522ad0180"],["/posts/53bf1d9d/index.html","33043fc5ecbe6ddeb3e1d1b815399ab5"],["/posts/554c2ba0/index.html","13a1f2ea2124951562845f41f76af652"],["/posts/63556f52/index.html","e817ea265b50f82f16350a01a298e208"],["/posts/6d49ceec/index.html","e14837ce9eeeebc5c31b1913099b2b60"],["/posts/6de7d9db/index.html","19b1b0f59abf39074f496b7986a84d4e"],["/posts/6fda249f/index.html","399bc577f70218f88e134b5f4989c62a"],["/posts/84b87417/index.html","0411b8f8f8476160f16db054af5d5ad6"],["/posts/97e5bc9c/index.html","ca7a100d4ed13d3185e5bbea20cf0459"],["/posts/c311b112/index.html","e2f65b864aebea78991b5baf53cc49c0"],["/posts/c620d4c2/index.html","a0659e058a47889fd73ec939b0a8ab69"],["/posts/cfc54393/index.html","b6c763cdd33d295f593477454befd11d"],["/posts/dc5155ff/index.html","08f87c81173148ae02689738229553d2"],["/posts/e1bd836e/index.html","9465ddb113fe537c9da16b1f67e0af51"],["/posts/e31c0293/index.html","daa1c39d5b8b94cb6181600522ec5887"],["/posts/f8073739/index.html","47baeae2796be0bad4cbe95f6dbd3946"],["/posts/f97ef43b/index.html","a77d0b284e2e89b8ac6955089b621c46"],["/posts/fa84d5fc/index.html","c9c53da79b7b81233c4b444032ff8103"],["/sw-register.js","4e4cefc16f34592e618f314c16263829"],["/tags/index.html","d562749a66998d504b201e027a61e5dd"],["/tags/つぶやき/index.html","34de52c39d02fe097a3851f27eeda6d3"],["/tags/アニメ/index.html","88d9e2c2af9fa52baf093a7443769712"],["/tags/インターネット/index.html","aadece25d81c350b2dbb6565f46e3f02"],["/tags/チョコレート/index.html","486f450f858de03a21e41f053a73303f"],["/tags/中国に関する新聞記事/index.html","790c9799c0ac439647903013425662fb"],["/tags/乳製品/index.html","d07117d3276a328bba13a954409c67cc"],["/tags/労働者保護法律/index.html","b527a9b104dda73a9791780c86034ec4"],["/tags/心理学に関する記事/index.html","ad5eceb2af698053794ed7a6bbe78974"],["/tags/日常生活/index.html","edefdc8827e5ba3bbb2582b9f1a2ccab"],["/tags/日本のIT教育/index.html","12626f9b55b93584bb907af6e7b1bde1"],["/tags/日本のIT現場/index.html","85ff6fc0ffe33d83a7ed7b0adaa7e725"],["/tags/日本のビジネスマーナ/index.html","e8059635bfc9228ecb72977fbcdd7203"],["/tags/日本の国内の人権状況/index.html","974fbf4f657539d3a9e6617a5c3a7e7c"],["/tags/日本の経済新聞記事/index.html","014377d70bb5af08fc30bd34e68a8d98"],["/tags/环境/index.html","6699437f1e3ce57d8b026c3006db91a8"],["/tags/過酷な現場/index.html","4dab334612c46936221b43a93fe25972"],["/tags/金融/index.html","7e3008dae55fdd25865d17d243399725"],["/tags/食べ物文化/index.html","1563588c1e09b6c1c212ae3b65083af6"],["/tags/食品工業に関する記事/index.html","d611fb1a6bfd2d6be629eb4f453a3ec2"]];
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
