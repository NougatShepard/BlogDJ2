/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","342e34d6c075c2aec3f4f703a736e053"],["/about/index.html","0abe2410466be5525595c76771379a91"],["/archives/2019/04/index.html","892349d236df0cce219067017531d9a0"],["/archives/2019/05/index.html","602f29f305ba039c5218813afb6decbb"],["/archives/2019/05/page/2/index.html","1d5d593120168313503c197a94f71425"],["/archives/2019/05/page/3/index.html","02d7dcc0670e3c7ed21a929b5e2731cc"],["/archives/2019/index.html","adaac9361302a7a0d65a3b9aac298568"],["/archives/2019/page/2/index.html","e0dd3d7ad396126463f6aec9538103c8"],["/archives/2019/page/3/index.html","1cb4f5945689a551704fe69b76b67988"],["/archives/index.html","4a61b14ce5a8e4e2210bdd3077f7d124"],["/archives/page/2/index.html","e7a54bba2a750f6def107139c2da7e7f"],["/archives/page/3/index.html","af9f14ad03ed9fd08a06d63b4f98f308"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","b14e413c120b287ce76e1d1846334ae2"],["/categories/index.html","d6d2ed6442c641cdaaae177d597cb0a1"],["/categories/つぶやき/index.html","012ad328a821dc340e7e80a8ac54ee97"],["/categories/アニメ/index.html","5ef70672ec36f222a960f420b9eb1648"],["/categories/インターネット/index.html","ac5ca2b5dc29c57867ba1dcc61772f3d"],["/categories/中国に関する新聞記事/index.html","32f5d2676d02ddab64fed47569cd1d59"],["/categories/労働者保護法律/index.html","fedfd19451e62d1b82d34e1131457220"],["/categories/心理学に関する記事/index.html","a8ddef840c425180a8876324d8692997"],["/categories/日常生活/index.html","12aa238b606092d5e98340dc844053e4"],["/categories/日本のIT教育/index.html","76b019452a1deda3a084078302e6a381"],["/categories/日本のIT現場/index.html","ecee8a28e5c6281bfd651699f552f205"],["/categories/日本のビジネスマーナ/index.html","9ade4eb1b0b47bf86c8651c47bc04125"],["/categories/日本の国内の人権状況/index.html","03df3d1cf4881f2986b8cd22866feba6"],["/categories/日本の経済新聞記事/index.html","019753b4d4969e65e5ea19585d60c0ab"],["/categories/环境/index.html","0a4bfb110a1f02b5656d76ad24307e02"],["/categories/過酷な現場/index.html","bcf2ff007a13f34bb45cd57f923c60aa"],["/categories/金融/index.html","dff8148927eb766663ece9fca15ba243"],["/categories/食べ物文化/index.html","89606d23cb21e32400b902ba6544d302"],["/categories/食品工業に関する記事/index.html","1090ad39b16104edc9fb97fcfbaa7743"],["/css/main.css","264610279300249c35cc07019e8cf60c"],["/games/index.html","72f3e6b4a0ff7bf70a75e666ac2e3c9b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","2503f41397e8ec77e97575f7b3114e98"],["/js/src/affix.js","e1e19c12892fc6dae1a4957d972314d1"],["/js/src/algolia-search.js","d2a05d76a6a627bdbf9cd0b0288d777e"],["/js/src/bootstrap.js","f79bf8d17f245aa87ea62b643bb908ee"],["/js/src/china.js","722d3fc18d624cd5b04fd4ba2854407e"],["/js/src/echarts.min.js","42adaa71d750e6f20b8b5971f89c1ea9"],["/js/src/exturl.js","2d65d19c38877f9a4c0b37706b00c5b1"],["/js/src/footprint.js","cb2179660ee8b423bfecbc1de366e69d"],["/js/src/hook-duoshuo.js","0936e7bed7732a090c69e24dc6b420f0"],["/js/src/instantclick.min.js","ae7cd962cafdede45c712813c3f7af80"],["/js/src/js.cookie.js","fb2c97c5ba9883a428786d6ce51ba3eb"],["/js/src/motion.js","279a37425d378e051a910e4127cfeae1"],["/js/src/post-details.js","96f883c78a426996adb23557493261bd"],["/js/src/schemes/pisces.js","c70722df286a60d8e3f06aeae4450515"],["/js/src/scroll-cookie.js","12e79a31b8d9963266bd4b76bfeef88d"],["/js/src/scrollspy.js","681f21507dc46beef482ec166792ece3"],["/js/src/utils.js","93405c8fee149dd3527d76124cd95360"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","604120a293cadaacad139e2c6d4d7f56"],["/lib/Han/dist/han.js","e3ce89f7fcff6a207f72459d5b1cf142"],["/lib/Han/dist/han.min.css","18e3f91f51eb22167d37fb064cb952ac"],["/lib/Han/dist/han.min.js","4010d03d235275be78a49157149a871c"],["/lib/algolia-instant-search/instantsearch.min.css","4a6cf7bd98f09731135ab19eb13915c9"],["/lib/algolia-instant-search/instantsearch.min.js","79fdcd6c3b490bbc0a551739a6f2e234"],["/lib/canvas-nest/canvas-nest.min.js","78192aaeb29ec3b8aeea6e46d8486aeb"],["/lib/canvas-ribbon/canvas-ribbon.js","a9da3e77ce487c7f22823d7183e2d2d2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7c88920d21d70f7a3bfb95c9876f7eac"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","aa3f27c63ba5203254e1abcc9a054923"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6021be51df97493da692d24c7fa91d1d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9ff074dc9110cdc303208f7bc7d89f08"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","96b8d20cacdcc615459764d22b8e835d"],["/lib/fancybox/source/jquery.fancybox.css","dfb481616a02a43c09c87e3ef5ecc11f"],["/lib/fancybox/source/jquery.fancybox.js","b807c41e540176ac5695c57779cdca4a"],["/lib/fancybox/source/jquery.fancybox.pack.js","bed3076f66cb78e6b506dc2d45e8febe"],["/lib/fastclick/README.html","6a5a7b003f59f1d9dc7c3f9c463b44dd"],["/lib/fastclick/lib/fastclick.js","f45e22601a889fb8ada4638c35cb7a97"],["/lib/fastclick/lib/fastclick.min.js","105554dffde750e79cee9ed4ea870834"],["/lib/font-awesome/css/font-awesome.css","575f957bb7c39be84cdcfcf82400c560"],["/lib/font-awesome/css/font-awesome.min.css","457705466c93f72350fcb6dbf6ff8025"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","5ddff327ae8310c2cd077de0185de274"],["/lib/jquery_lazyload/CONTRIBUTING.html","bf6285537efde82dcef92fc13967fd05"],["/lib/jquery_lazyload/README.html","3381d2756bd68219336c249c38d454e2"],["/lib/jquery_lazyload/jquery.lazyload.js","ab867d78181b5931889a31f13e8940a2"],["/lib/jquery_lazyload/jquery.scrollstop.js","f3c98dc36d9899439dfd1d7a61466e6f"],["/lib/needsharebutton/font-embedded.css","23e76119ce1f2b6e38b4c5c016d2bacb"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1833ded483665117f21074dd0847e312"],["/lib/pace/pace-theme-barber-shop.min.css","4376c7fcb2f17b3f309c69ab3f5252a0"],["/lib/pace/pace-theme-big-counter.min.css","7217ccbb5d5c64f16b5a0c2fe42a6171"],["/lib/pace/pace-theme-bounce.min.css","12247de69582afbc365c7ff475732c51"],["/lib/pace/pace-theme-center-atom.min.css","85da510cda968f78789b76a1cf1b46c0"],["/lib/pace/pace-theme-center-circle.min.css","e1d91715971b4ced3bd9973ecfc544db"],["/lib/pace/pace-theme-center-radar.min.css","c59d58212cb69afdbc303cb0bce14162"],["/lib/pace/pace-theme-center-simple.min.css","f819725aa51771a685c3601855b83111"],["/lib/pace/pace-theme-corner-indicator.min.css","ca1234abe916d8c4e844674023c6f040"],["/lib/pace/pace-theme-fill-left.min.css","2d876838c51736c203495080ac9904d8"],["/lib/pace/pace-theme-flash.min.css","5eef2b8a0a6c0b30a5d72425a7bac057"],["/lib/pace/pace-theme-loading-bar.min.css","026a46fd31f47789db3032a5d3554a47"],["/lib/pace/pace-theme-mac-osx.min.css","b80069f81bb779ae1844162fdb2f95d1"],["/lib/pace/pace-theme-minimal.min.css","779dc856a3fc29add786c2f8237c1306"],["/lib/pace/pace.min.js","c7e4bb40a32d43e21ee56d66233bdc8d"],["/lib/three/canvas_lines.min.js","1f7df6f6724f814d60e315c908587096"],["/lib/three/canvas_sphere.min.js","c4cf8193dadb4bda44f5bd13172b98af"],["/lib/three/three-waves.min.js","e801b56f78d112dfe19b686b47e4a341"],["/lib/three/three.min.js","5b3a9570a2a510f45445e1be0661fabc"],["/lib/ua-parser-js/dist/ua-parser.min.js","c9bf39396f2582f2981813258ca74a35"],["/lib/ua-parser-js/dist/ua-parser.pack.js","fd0901fba5bc00926e783a04373dd686"],["/lib/velocity/velocity.js","8306a23cd76a16d35ce61fd4d7ed01b6"],["/lib/velocity/velocity.min.js","80d01397585e4bb9c3ef3f94094650a1"],["/lib/velocity/velocity.ui.js","311b49a28f00dc03f4979375aabf9ee3"],["/lib/velocity/velocity.ui.min.js","3d7edb19cb49391e53a9692d9d4cd340"],["/links/index.html","12fcf6f11f0903a90432ee1aa4ec7011"],["/movies/index.html","8b4dee45eb94bb25890709a2b67b9991"],["/page/2/index.html","496fb3a649812dde07dd55977e087a81"],["/page/3/index.html","ab8c15f9881569cc41e48991d2b2496c"],["/photos/index.html","d89c2ce71a7fcad60c400ce43a2614d1"],["/posts/191ddb73/index.html","45da51c4c5ebe5eacd2c8ccf34a5c952"],["/posts/1a195976/index.html","8eebb72928a76133c55d5c051eedb303"],["/posts/2292f1af/index.html","a45cb8a35a5020fd3254f543be881847"],["/posts/2fc77d95/index.html","94048da2845d1561c3001d71f313dbe7"],["/posts/2feacaf4/index.html","7c42b7dbe70da20b0efa3e62dfa301d2"],["/posts/37f2c331/index.html","fb709456e29b4d80fea1150dc566279e"],["/posts/385f0de9/index.html","401cbcef4f7e010bccdfc341f1284675"],["/posts/44414303/index.html","2210d6ae062867ddc78d05c451614ac2"],["/posts/456610d0/index.html","0c113a444a49a101e0fe03e562d2e9a5"],["/posts/45e51894/index.html","f690708dcb60aca7f0cca998a094aee3"],["/posts/4f1131af/index.html","da8202246c247ef445d97812f558a508"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","2f9464c0f3a386fc83ead2552de23c4e"],["/posts/517ebb95/index.html","1febb0c77b8ab04714f8af8602142219"],["/posts/53bf1d9d/index.html","f54d2cff91b94467915524e01a2f6066"],["/posts/554c2ba0/index.html","a2a8f87eff97b019b11f89a90e75d3d6"],["/posts/63556f52/index.html","6c1a9706d2ec027d8999e61318c38317"],["/posts/6d49ceec/index.html","af8a51db85de6a83bfed01a8ff382487"],["/posts/6de7d9db/index.html","330b45a1e3e3ae4995704bb28cda0730"],["/posts/6fda249f/index.html","694a8d0cdca8532a3ff830cd374282b8"],["/posts/84b87417/index.html","da1ef3c6541355d006983377b84b4243"],["/posts/97e5bc9c/index.html","22fff23198a2278abb70a93cebd7b7ea"],["/posts/c311b112/index.html","fef53c6665993f6c0187cc0cc10ce35a"],["/posts/c620d4c2/index.html","938ffa1bee129bdedd27072247f614f7"],["/posts/cfc54393/index.html","58e91731697f9d3f2d1a572454d24c67"],["/posts/dc5155ff/index.html","015fbe1d1f3c75baf6226e4264fafc6a"],["/posts/e1bd836e/index.html","11039d187d561d0bbd5e19186f19241e"],["/posts/e31c0293/index.html","b4717cfe48b27449bfa669923cbe6102"],["/posts/f8073739/index.html","e971827a4cc7a28d56d2cc4e531fa0fb"],["/posts/f97ef43b/index.html","d49b9a43ec1e1044806e9778be10cb49"],["/posts/fa84d5fc/index.html","44f33dca39dba1525f27fe995210c14e"],["/sw-register.js","fc599743b65dd8abc97b6ecc84e0fcca"],["/tags/index.html","084191224fbcd3731a9f668fb5c2886c"],["/tags/つぶやき/index.html","736e67866e20e74ba26ef6e5024eb4db"],["/tags/アニメ/index.html","6a232e0605011a5eed529a13f8f8066e"],["/tags/インターネット/index.html","67f92ddd8e7590b151b0e351dd01fefb"],["/tags/チョコレート/index.html","3678e45d4f3f8a16a0785fa6d513fd0c"],["/tags/中国に関する新聞記事/index.html","0e3fe141e2616d70f4859ec4a1f47d1a"],["/tags/乳製品/index.html","7a8539f8b00027eca963d4710e0245a5"],["/tags/労働者保護法律/index.html","5500aa24d651363d752e8054dd3dd0e2"],["/tags/心理学に関する記事/index.html","62472387f7cfd91622035c88fac8ecd3"],["/tags/日常生活/index.html","db224d8c20ae64cf6e8cf23ff77cefaf"],["/tags/日本のIT教育/index.html","60af20e482e57cc4c319995e425a70e9"],["/tags/日本のIT現場/index.html","57813668ed9bd83c46d8f28864ca93e6"],["/tags/日本のビジネスマーナ/index.html","86f1844bcd8713021946cabe42607332"],["/tags/日本の国内の人権状況/index.html","be04e09d0238720c07359e431001e920"],["/tags/日本の経済新聞記事/index.html","06485c5a37637aa280923fd07b1a1864"],["/tags/环境/index.html","64c315acc6f59151baf06ec88ccdadb4"],["/tags/過酷な現場/index.html","58b65cd47bc558cbe00c40b4bc1862b3"],["/tags/金融/index.html","46035d9fe006df4efd550ebced98ee10"],["/tags/食べ物文化/index.html","ee0de298f5e503341331f3b9060a6293"],["/tags/食品工業に関する記事/index.html","667e4a08f8df2c6679a36f61aadf5c1d"]];
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
