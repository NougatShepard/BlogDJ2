/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","489aa5f2c98707257aa4447aa48edc1d"],["/about/index.html","7f63c8896f28f9cc1e581778bfab6138"],["/archives/2019/04/index.html","7704ec35fa58d0037b990ded892c93b4"],["/archives/2019/05/index.html","37ea8fa8ca08488be41ee1ca3fc0105d"],["/archives/2019/05/page/2/index.html","7268dc7d03bf96a81de9b4ebd0499a36"],["/archives/2019/05/page/3/index.html","3403633ce4244eff292e126954d33e18"],["/archives/2019/index.html","371e9824d86ddcd919fde5f91085fa3a"],["/archives/2019/page/2/index.html","8b08dc024a13e6ddda6cfdecfd16abcf"],["/archives/2019/page/3/index.html","d17b82372a54c69502c040f058b54aff"],["/archives/index.html","41213719e2f87579f7a27dc79b326071"],["/archives/page/2/index.html","3f24605ad832424668b1ca68a745cf08"],["/archives/page/3/index.html","5ac201126860562940b25196f7e2e2ec"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","4ca33438b65b3cc0861860216e9bd171"],["/categories/index.html","c68ef631f3b77507c9f6ba4e0544673f"],["/categories/つぶやき/index.html","55572141f178e0ff24bc22715e679a71"],["/categories/アニメ/index.html","104d3cc785dcbc40b82251a800aa86ea"],["/categories/インターネット/index.html","4b14b0aee5b9f466dc31a479083e680b"],["/categories/中国に関する新聞記事/index.html","20d059e86b029616cf9c3c591c2371e9"],["/categories/労働者保護法律/index.html","e482845d0fd59ae93f744bf901ae0128"],["/categories/心理学に関する記事/index.html","ecd9f68af5fecd9e2b51d0d967f891a4"],["/categories/日常生活/index.html","1c99b2e78e5ef79a6c8b9cf6c35f14e1"],["/categories/日本のIT教育/index.html","15d582a80e383ec24c03cd1a5a0fe8b5"],["/categories/日本のIT現場/index.html","de05db360c423cfc4c1947b85ce5f75f"],["/categories/日本のビジネスマーナ/index.html","fe80ddf9eeab7ad0227e2400b19f4cab"],["/categories/日本の国内の人権状況/index.html","b8fd08daf2d6352b3b8fad164d19f0c2"],["/categories/日本の経済新聞記事/index.html","59794fee4fbe486d58838d4d32a8d766"],["/categories/环境/index.html","dcfb8b3b7c37d02f993423ea3cc6fba8"],["/categories/過酷な現場/index.html","c26004a070ca1025ea6204beee55ed64"],["/categories/金融/index.html","f9f9acb7850ee20f12ade88bbb51910a"],["/categories/食べ物文化/index.html","d5764c0a9a597add213f511cfdecb371"],["/categories/食品工業に関する記事/index.html","58c8003c0c5e599cf7282d15d77e9d87"],["/css/main.css","2d13b0a81e17e393258ead53f0a2c477"],["/games/index.html","f86cb897a4db8bde7aa04d81010b0c49"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","cbfa732f7a9bd433ec607d5730a2c477"],["/js/src/affix.js","96f4e993170b15f09cd9e5d5a4a4e5c6"],["/js/src/algolia-search.js","a6c287715b4cc5028374b11ae97743df"],["/js/src/bootstrap.js","f6a6b8c749fedd8e7165c5e4f7f981fc"],["/js/src/china.js","3302d9242da800c6f140a5bbc182e335"],["/js/src/echarts.min.js","8b0283fac029802296f6aeaafd5d1d7b"],["/js/src/exturl.js","6e414457768759b5ea01bdbefc00e85c"],["/js/src/footprint.js","a4523e0ac2ebaae12766c977c6983acf"],["/js/src/hook-duoshuo.js","0139f60595f308230b90a50166e3f459"],["/js/src/instantclick.min.js","d8adfb0024badc7dff1094aaa6abeb85"],["/js/src/js.cookie.js","226178c23b09a6a4c4721c93568a4af8"],["/js/src/motion.js","12ebd773e415ac3f2e87bd3c1ec18e7f"],["/js/src/post-details.js","3339a9ecd4a76e834c043eb9c134c7ac"],["/js/src/schemes/pisces.js","68b7684656f46945cca2ce6f060c8c30"],["/js/src/scroll-cookie.js","324e8186103c92a4b070425065ee9319"],["/js/src/scrollspy.js","753cae85bc01087c1d84b39d000e35e9"],["/js/src/utils.js","85cc1b3923384d0491a214c829394f89"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3453d2ea716a87d5b0e2942339d75491"],["/lib/Han/dist/han.js","168222ae1b7786a5bb9ef33bb4ca7641"],["/lib/Han/dist/han.min.css","8b5776aaf4dd2ccfcad71000ecf3c97d"],["/lib/Han/dist/han.min.js","1f01e2778d08fbf7ebf34061de632b00"],["/lib/algolia-instant-search/instantsearch.min.css","b1faf1fe3fd806434e95b59dd548f905"],["/lib/algolia-instant-search/instantsearch.min.js","d840d002dd1466837f31658442486a54"],["/lib/canvas-nest/canvas-nest.min.js","7d3f41d12dcc5b4d13e6702585879232"],["/lib/canvas-ribbon/canvas-ribbon.js","53bf6648394c75a050da69752fe7e428"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","80f2361c04765747c5a98d7ce920f0c0"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2822b5b7e5b74e0c8d64c11b83aed5e6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","845e2e3d3a730d707b99c6a12269c8e5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","aeb928b249c730229a5555b2f38cfdc1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f1467b3ce7aa361a1b2308d647148d91"],["/lib/fancybox/source/jquery.fancybox.css","36c48024bcf4eac19e04977f6530bd10"],["/lib/fancybox/source/jquery.fancybox.js","7509c15795d04d0b77131b7dd5f42706"],["/lib/fancybox/source/jquery.fancybox.pack.js","25ed99ec8c7c9ebd53e11baa0beb5e11"],["/lib/fastclick/README.html","eaa0af5a13d7a955f9b7f73bba26b9d9"],["/lib/fastclick/lib/fastclick.js","408adbd567c14cb2622ef9b009752906"],["/lib/fastclick/lib/fastclick.min.js","c9bb46dd8adcf1d415cb9451f995126f"],["/lib/font-awesome/css/font-awesome.css","87834a5e33e394e3fcab9bda9235ffab"],["/lib/font-awesome/css/font-awesome.min.css","87834a5e33e394e3fcab9bda9235ffab"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","db6c26d085d3ee4dda0edb2c35622776"],["/lib/jquery_lazyload/CONTRIBUTING.html","ebea01a5d95461e6ce132b4d65cb95b5"],["/lib/jquery_lazyload/README.html","25adf9ff56b48bd73f5014327d142130"],["/lib/jquery_lazyload/jquery.lazyload.js","67514c4718505ba6a2e9c9a8a687f9b7"],["/lib/jquery_lazyload/jquery.scrollstop.js","7bb23cf5937955852c27f2ee76364c81"],["/lib/needsharebutton/font-embedded.css","e7c10309aeb6e0fecfd481f53f32bede"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","48d34084dc711055637e7c9b3e4e9b72"],["/lib/pace/pace-theme-barber-shop.min.css","a85291d46e7a66eb2fe82c4bf1a7ec23"],["/lib/pace/pace-theme-big-counter.min.css","d82f43ba439d5bdfa0245bc6508394e6"],["/lib/pace/pace-theme-bounce.min.css","e5cbec90f50081ec521ae988429eba0d"],["/lib/pace/pace-theme-center-atom.min.css","2fdcddd950bd641e37508dccec73a7f4"],["/lib/pace/pace-theme-center-circle.min.css","6b25dd6fa33fb1853e663a7a63709560"],["/lib/pace/pace-theme-center-radar.min.css","e791fe14f7145c0851597b64a0d24c33"],["/lib/pace/pace-theme-center-simple.min.css","eef0c804a4e7ea627d08f0fc71e10f4a"],["/lib/pace/pace-theme-corner-indicator.min.css","432cb21acfaa5ac7651f1930549da417"],["/lib/pace/pace-theme-fill-left.min.css","943e3eb66f42a233e38529b99fb4d7a3"],["/lib/pace/pace-theme-flash.min.css","b2a8da71a28597c4c258d519927d291f"],["/lib/pace/pace-theme-loading-bar.min.css","b1116c2906287008c65890e3f7192add"],["/lib/pace/pace-theme-mac-osx.min.css","ad9aa1841a3e711b5d09fc0388a63325"],["/lib/pace/pace-theme-minimal.min.css","505b38413d432bcd99748de9dd639bc6"],["/lib/pace/pace.min.js","9dcb438daee6ed1832f88dbb599dd41b"],["/lib/three/canvas_lines.min.js","c03497b7a8307906b01a697af0738721"],["/lib/three/canvas_sphere.min.js","8c5e782c282f4f33c8713eb4781c7cd3"],["/lib/three/three-waves.min.js","9e6eca103ae2804feb2778363b9d12fe"],["/lib/three/three.min.js","9454889fc41e75790b36096ed1214c06"],["/lib/ua-parser-js/dist/ua-parser.min.js","f1fb19c074d59ac25d6529fc1d4b883c"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c02ac150f7e16729192561f2698c7a86"],["/lib/velocity/velocity.js","5ee831f1bd906de17c75221893ebbd0e"],["/lib/velocity/velocity.min.js","7fd71464ad79cd44a88ff937cb39019a"],["/lib/velocity/velocity.ui.js","bfe01e0559f31eaf06610f4cdeb30f20"],["/lib/velocity/velocity.ui.min.js","d9a3a6410653d668c0b35d2b94377e36"],["/links/index.html","d8fae780926f77b9b0517cb4e08e603f"],["/movies/index.html","f1f9d8d3451f6c70b4d0b88f4a1e0356"],["/page/2/index.html","13b55904dc1577928131d20c43fb6c15"],["/page/3/index.html","36ae3bc4a8ea5fa9919b227818a870fe"],["/photos/index.html","0e0c1d831c254a34a8617bb907182a8a"],["/posts/191ddb73/index.html","dbad89394527454ef2b7df30b2311011"],["/posts/1a195976/index.html","a807037722b363553865367cd4e342db"],["/posts/2292f1af/index.html","43f5914f068c781695d36807fc094497"],["/posts/2fc77d95/index.html","4f432baf34c41b743b3903b5435994dd"],["/posts/2feacaf4/index.html","0e338203a585b4f1129abf68cf599df1"],["/posts/37f2c331/index.html","4552dad9ce4b4f737657d1079619c757"],["/posts/385f0de9/index.html","6e7779f5fb0afb94137a5294b571a9af"],["/posts/44414303/index.html","7b28e39ba73ecbbb35e3cac38c316d8d"],["/posts/456610d0/index.html","e52f69d749cf384444e5c11bdd6558d4"],["/posts/45e51894/index.html","7924df21222e6d428a3095050f375463"],["/posts/4f1131af/index.html","f64c70eea2f517e7796c0c7c11456960"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","4fd450a7a84e3a381d7b9446e4e62458"],["/posts/517ebb95/index.html","6fb5ee3f4c3ceb3e6684e97876684160"],["/posts/53bf1d9d/index.html","033852d1e9c036b09e1e7d64a259a5be"],["/posts/554c2ba0/index.html","f6a6dbe9a28386ab5d13811e87c9e488"],["/posts/63556f52/index.html","4f5f247f2d2b25fbd8ad54a8a063a4a3"],["/posts/6d49ceec/index.html","dc99e2f63e1bf5e00b29196fb7259086"],["/posts/6de7d9db/index.html","8b7e36900fa11a67695734eeb971f08a"],["/posts/6fda249f/index.html","8ecc74fd706b4639d90ed3b79fad182d"],["/posts/84b87417/index.html","a7fb766b6040e2158773ae15bc0a51fa"],["/posts/97e5bc9c/index.html","6be7d03b7877dbf92f3c2ad81730ac01"],["/posts/c311b112/index.html","34014947f7d5394390fbd70a1e026d24"],["/posts/c620d4c2/index.html","743bf2d9b53d75ae610c5b29e7af05c3"],["/posts/cfc54393/index.html","500315972e95a64923fdfcfc80618b2f"],["/posts/dc5155ff/index.html","05048729cd3b0b2a694444afb4dea08c"],["/posts/e1bd836e/index.html","82e30fea415f442bdd48bd9dc79d8381"],["/posts/e31c0293/index.html","5e1f1b779587d6538b3727136cd91e66"],["/posts/f8073739/index.html","e2e6a09d239ce7edd502661f22625f6f"],["/posts/f97ef43b/index.html","b9c4e6cc11c8e8d736ad3bd4df9ea496"],["/posts/fa84d5fc/index.html","170b00dce94800271adff7fdcfd83128"],["/sw-register.js","3dec71b95fc9e46020fe305e1a5a5a32"],["/tags/index.html","436c4577bde504ca9755538ac0102e3b"],["/tags/つぶやき/index.html","4a7260c02ef0b7247a4ba789748dfd7f"],["/tags/アニメ/index.html","9921232a9c52d16a3610cbd79c238621"],["/tags/インターネット/index.html","a0cdfbc80ba8c3e5d8c08ed2809d6e7f"],["/tags/チョコレート/index.html","66a15f011a6b7b21227f083d44dba735"],["/tags/中国に関する新聞記事/index.html","52dfa8bfbac5ce1dcda838f0771e2240"],["/tags/乳製品/index.html","e5d149dc60fb0f81514705ced0057652"],["/tags/労働者保護法律/index.html","1e8693aca00dd4da1b3ccec0ec249600"],["/tags/心理学に関する記事/index.html","673df9646de815555e34854db07768fc"],["/tags/日常生活/index.html","0682cbdd6ab48dd39dea46fa1159d9e3"],["/tags/日本のIT教育/index.html","65cff17461be331cc03375ca2a998037"],["/tags/日本のIT現場/index.html","1297a0119cb62a214855caac7e804cb6"],["/tags/日本のビジネスマーナ/index.html","e474d5cd3966befb3d63ed8aa3fad172"],["/tags/日本の国内の人権状況/index.html","63bd06fd26631ef1c7b201d1e6cf9cc3"],["/tags/日本の経済新聞記事/index.html","a6858d20d0bf44a312e509444e85e227"],["/tags/环境/index.html","3843a4b6ed063af124da50fd5fd658e3"],["/tags/過酷な現場/index.html","a293e0fd2b34761ab2ea16ab9ccab5bd"],["/tags/金融/index.html","0f184e70460e9326e4137a01ad39c29f"],["/tags/食べ物文化/index.html","8371ec119d508fa554f562af004395be"],["/tags/食品工業に関する記事/index.html","62a4e382d2494d8297649c46ddc37d0a"]];
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
