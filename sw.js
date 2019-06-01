/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","af6602698d665464933ff8f7dbacece5"],["/about/index.html","224baf04af2820bcacafa8fc837e7010"],["/archives/2019/04/index.html","023283d3176f6a9d51877a2bb4af002e"],["/archives/2019/05/index.html","350cb0beb26d20986f98605720188427"],["/archives/2019/05/page/2/index.html","ef677610e6e070f4959c07e1f3c96ebc"],["/archives/2019/05/page/3/index.html","8bcd926c43016287baec4d4eb5af03ee"],["/archives/2019/06/index.html","352f3a30bc801600abeb34f9f7b60b3b"],["/archives/2019/index.html","32aa83a62a0d964b1f33276fce35a618"],["/archives/2019/page/2/index.html","fb6666a90a5d3e02040161ec2a3bfcd9"],["/archives/2019/page/3/index.html","ab738afa47f360781f65c47d7bf0ea1e"],["/archives/2019/page/4/index.html","43c2ec4ba7b764940c95ea4431c41cc1"],["/archives/index.html","87041bcc15da0245695449a9bcb62e07"],["/archives/page/2/index.html","253815ec457657049daa2151783e7c56"],["/archives/page/3/index.html","80cc4699672f98de0cbb3567aa1e1a28"],["/archives/page/4/index.html","8db22ccdc21f379d806e86126d0e1829"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","0e72eb7710a3e7043fd7fe9f34dc79c8"],["/categories/つぶやき/index.html","4f75fe83a226bf5979e401589aeacca7"],["/categories/アニメ/index.html","00fa4016b9c04b55ec4cae425c660aee"],["/categories/インターネット/index.html","a9ec8f33af68adff5814fbc3eb0310ae"],["/categories/中国に関する新聞記事/index.html","d65029b4fe66c72c5d5f1897d913854b"],["/categories/労働者保護法律/index.html","e7d341eea4a6feefd035039560315ba4"],["/categories/心理学に関する記事/index.html","468f56b50ec01dba817ff39a1517a957"],["/categories/日常生活/index.html","f3ce711e62c41bf14d5eea3fb4b97e5e"],["/categories/日本のIT教育/index.html","b16736e4c2e2375fd3390eb7d4832f85"],["/categories/日本のIT現場/index.html","7f56811596b3b6de311d0bf828c92819"],["/categories/日本のビジネスマーナ/index.html","46c8aa026abbada947576f738f882f13"],["/categories/日本の国内の人権状況/index.html","dee8f8b6b9ca0805679ce3199fd47615"],["/categories/日本の経済新聞記事/index.html","cb811dfef86179b8b8fae1fc875c88a9"],["/categories/环境/index.html","049f2730909a86d842e17c0f7ae24ac9"],["/categories/過酷な現場/index.html","21b75abf0ad9a2b9548366cea18251b2"],["/categories/金融/index.html","cfe2e12cc48b816f589913d73ca7294a"],["/categories/食べ物文化/index.html","be9fb09102cdd58094396c781853ed59"],["/categories/食品工業に関する記事/index.html","2be1e215fad9722d768eaba1c54378b8"],["/css/main.css","7b73bfc197bfa06894d54ac44545f2b8"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c8d75e05701a5e667b7ac486dd98dfd1"],["/js/src/affix.js","0e5ad36631ff81a8b65e7aceb3af30f2"],["/js/src/algolia-search.js","5e9c77227380358bf311b780e1f2bb6a"],["/js/src/bootstrap.js","67ba4f35020623d1c4d9637d2885c74b"],["/js/src/china.js","59eeeb95c782175927e5a26528256256"],["/js/src/echarts.min.js","0aa125c4284f1cb410084e57d8a52ce0"],["/js/src/exturl.js","63ebe1ec6f485ffd9429628ebba11256"],["/js/src/footprint.js","1511ffba78dc79bd62753abed2fc859c"],["/js/src/hook-duoshuo.js","937e5eb11593ae98d1cc874e31ac9231"],["/js/src/instantclick.min.js","7abbacc4f60c3970fc9e497b815e40d1"],["/js/src/js.cookie.js","7c4a4d331faec8e72a9a645e5b1e4f59"],["/js/src/motion.js","6d3aff1d6064b5d19f8cace2f38ea45b"],["/js/src/post-details.js","a38d210c8b419a73cd981625b6d43122"],["/js/src/schemes/pisces.js","2f5961516abe9cb545717737ebf0ae3e"],["/js/src/scroll-cookie.js","4790e3a1013068803c475438fc9e495b"],["/js/src/scrollspy.js","02bf49ae717f7f242ad750cf46b7a3c6"],["/js/src/utils.js","0c9d4bbf538954c6bf74c1cdffb22705"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","d4a894f2e2eba6a9a2fa73290636cc6b"],["/lib/Han/dist/han.js","25ecd5edac12418f2a4d15e7ee326e2d"],["/lib/Han/dist/han.min.css","4a9fad1812602062177bd4a36c089b5c"],["/lib/Han/dist/han.min.js","2ef352490d045937ca495191d53d76b0"],["/lib/algolia-instant-search/instantsearch.min.css","89222225162ed0c4717f96bba3341b9a"],["/lib/algolia-instant-search/instantsearch.min.js","c25f6c17e8a4e2dde0cf64c7996fa6e0"],["/lib/canvas-nest/canvas-nest.min.js","2ab7332bd97de74c3faf0ad862fe575f"],["/lib/canvas-ribbon/canvas-ribbon.js","05e4249dae6575ed2f67dd3b05f6aebf"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","bf975d10662b7fe7c3e45fc9a60b9a68"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","32b9b01d64e96c24d706911da05d89bc"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ee2e89216aa190f176031568b95d8ba7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d5b650738ae15962c262cd45bc20c0e7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","674b3cebd702c97fd17381a363ccd3f7"],["/lib/fancybox/source/jquery.fancybox.css","cd0edaa19693901bb647c93e68d6209d"],["/lib/fancybox/source/jquery.fancybox.js","7964e6788266c1314c54cffa09827305"],["/lib/fancybox/source/jquery.fancybox.pack.js","3beefa7d28fb95e15200c75462127eb0"],["/lib/fastclick/README.html","b7513341e9115dcb76eff0696ae37a74"],["/lib/fastclick/lib/fastclick.js","c17b7309238b0b9e3f02d354ca30f867"],["/lib/fastclick/lib/fastclick.min.js","0e0e6a94de39b8739714e274798ca3fa"],["/lib/font-awesome/css/font-awesome.css","8896babfd66a4523ce729e5d2767cf0b"],["/lib/font-awesome/css/font-awesome.min.css","8896babfd66a4523ce729e5d2767cf0b"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","c826406a535fdfb534d608a7d1fda9cc"],["/lib/jquery_lazyload/CONTRIBUTING.html","6e204d4cdea8fc993ecfd03572bae109"],["/lib/jquery_lazyload/README.html","fe9a4f6cd31c1278d45e8bd80eba0e1d"],["/lib/jquery_lazyload/jquery.lazyload.js","37a5f87d3d3e84d14b53cb608cdca96d"],["/lib/jquery_lazyload/jquery.scrollstop.js","1edf1329399e0c64fef31dd400fbae79"],["/lib/needsharebutton/font-embedded.css","b44b5dffd2b2a22d0eef3645fb49500b"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","97dbee1d07b39a8bc829754e37cb320f"],["/lib/pace/pace-theme-barber-shop.min.css","75f6acb66b9fa7f877859df5a673d0f4"],["/lib/pace/pace-theme-big-counter.min.css","b2adfefa038b937de8d30af15c59fd32"],["/lib/pace/pace-theme-bounce.min.css","19676732c1d60933e1b1d1cd2524ed95"],["/lib/pace/pace-theme-center-atom.min.css","4ad351af946d8cac17db777a041f3207"],["/lib/pace/pace-theme-center-circle.min.css","5d7928e4b46795e911fcd724a8950a6d"],["/lib/pace/pace-theme-center-radar.min.css","1d1568fccce7a03137c13525e8939c67"],["/lib/pace/pace-theme-center-simple.min.css","edaff7c05b0bf9dd2230f711c40537e0"],["/lib/pace/pace-theme-corner-indicator.min.css","c0ad8e8d0856881d506068f7203d52c6"],["/lib/pace/pace-theme-fill-left.min.css","636beaad4171c6b507fa8a5eecc5f9ef"],["/lib/pace/pace-theme-flash.min.css","84edce14c0e4573697c487439d42bfa8"],["/lib/pace/pace-theme-loading-bar.min.css","5c1a761c9d8473460bd0f1891151e6aa"],["/lib/pace/pace-theme-mac-osx.min.css","e033b26e50884ecb7dbe26a626996258"],["/lib/pace/pace-theme-minimal.min.css","92d5ce3e8e143ba3dbbbbf68a0361d6b"],["/lib/pace/pace.min.js","eca29f7308d4c0ad64df2370e9f4d7e2"],["/lib/three/canvas_lines.min.js","6c4a3c84962a9120a6783ec7f086a70e"],["/lib/three/canvas_sphere.min.js","f8546d950202e064c1034e3fa815ee25"],["/lib/three/three-waves.min.js","3eb3f0da037cd9419b7bd21cbf384e2a"],["/lib/three/three.min.js","649d58b057526787db531cbcd5260b19"],["/lib/ua-parser-js/dist/ua-parser.min.js","d2a0b09bd54f526f37473bb28ab7716e"],["/lib/ua-parser-js/dist/ua-parser.pack.js","eb81feb32ea9c695e2eb59ee79dfd0b0"],["/lib/velocity/velocity.js","b5b04e29e3885e1b4756ce83a56d99f6"],["/lib/velocity/velocity.min.js","498d3c41154c7fda8876264354d83f31"],["/lib/velocity/velocity.ui.js","f1ecc5cce6ea69e21e67e1046f73cc53"],["/lib/velocity/velocity.ui.min.js","29d69d10fd6e79dba3ed05475cb63cf2"],["/links/index.html","1eb0e66cb0c43440eb014869c83954a5"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","eb782167ed84411e0b6037de1981a729"],["/page/3/index.html","28d89aaaa38cc676dddf4752fa191516"],["/page/4/index.html","2099d6433204351872e4c2c92015f012"],["/photos/index.html","c2a1794b2cc8118c40cec8b6ac417f16"],["/posts/191ddb73/index.html","dea2e5f2156ba58c851ec274d4121b90"],["/posts/1a195976/index.html","cc4bf9d6eff8796b6b4bfd9657ef1c5a"],["/posts/2292f1af/index.html","b6de61157ce970592170b3783757bab7"],["/posts/2fc77d95/index.html","218baa54c035eca81332c7b6de7e3904"],["/posts/2feacaf4/index.html","4b6cef6c87d45800d749202cbcebce0c"],["/posts/37f2c331/index.html","01b8e5500eebae01b037b1585da8624d"],["/posts/385f0de9/index.html","7dd553ac44ea0211b64726c3dce25a87"],["/posts/44414303/index.html","3daf82fc15080ab7aed6e26a85b22afd"],["/posts/456610d0/index.html","5f0b451d2bdac4f08aa602b53992b8b3"],["/posts/45e51894/index.html","af9c565a6f3ec7d17dd5f2347f5bb2ff"],["/posts/4f1131af/index.html","6376288554774efdabd771dea6d5a930"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","575a0f0e276b48b6f94f0224c4f8e394"],["/posts/517ebb95/index.html","ee89e76da16feae4ac2c6dd728c0a889"],["/posts/53bf1d9d/index.html","6491f991ff9047a25c1af6c6b62b8fc3"],["/posts/554c2ba0/index.html","03a34259641bbcaecf077f41f1d1b356"],["/posts/63556f52/index.html","9f24848544273227918b14b3d4b5504c"],["/posts/6d49ceec/index.html","acb7474ce0696f82d7679130b3a3abd8"],["/posts/6de7d9db/index.html","ca4cf9ac8e642318b444ad0e3a231113"],["/posts/6fda249f/index.html","4a6f724860369a9396bad53dbcaae6da"],["/posts/84b87417/index.html","0113b64411e1b663a67eaf28de5864d2"],["/posts/97e5bc9c/index.html","ed08071cf5a3c91863b538afaeba107e"],["/posts/c311b112/index.html","409314d01f8fbf57915628cfcd120279"],["/posts/c620d4c2/index.html","5570c8f5adc40b9f8bafb042676cd8d8"],["/posts/cfc54393/index.html","c58832101fd4adde091fdfc1dbf6f6a2"],["/posts/dc5155ff/index.html","ab4ee5e663884bfb4565fbe0f69afbbb"],["/posts/e1bd836e/index.html","d88b00c6d1f40bc015cbd85087a74c7d"],["/posts/e31c0293/index.html","0a5360ae231bc5893cfea48adb8068ab"],["/posts/f5fc4461/index.html","5899364de1d6e04c00862d1ffe9ac60c"],["/posts/f8073739/index.html","3508ea714275d8b1cae140f4b231d873"],["/posts/f97ef43b/index.html","ab9842be48b998f7a92de9044070878c"],["/posts/fa84d5fc/index.html","8fa68c1015ca6cec71b007e3a803e781"],["/sw-register.js","74a470baff4b4c33c1918968b5d3a3e2"],["/tags/index.html","8cd9cb5fca7a67b16965e7d47e028cc7"],["/tags/つぶやき/index.html","1bb2b949f2642a0dc437dfb02f600f9e"],["/tags/アニメ/index.html","88d3e40e56ca729624e3b05de7b48ddc"],["/tags/インターネット/index.html","5ea2243587cc2bdc6a0b76e992c9ad6e"],["/tags/チョコレート/index.html","8a2a63dcc27a0e6928dda7c1ce1b20c1"],["/tags/中国に関する新聞記事/index.html","8215531807dcdf1df8f86a55b5ed77f1"],["/tags/乳製品/index.html","8fba0b4cb6db54076458d7211c6a9bb6"],["/tags/労働者保護法律/index.html","995f761e3ddc3e83c0fd4c5c02f3dd90"],["/tags/心理学に関する記事/index.html","af03bea9011e8f2e820708afa4e9c5bc"],["/tags/日常生活/index.html","92c7c757f219c2f7195adcb9f3a1dfb1"],["/tags/日本のIT教育/index.html","992c60b29003d39494160e31cbd218b5"],["/tags/日本のIT現場/index.html","d5e81823795a9df0a9e6449b7c5fc574"],["/tags/日本のビジネスマーナ/index.html","9910f14eca4cec638163f8817d39da14"],["/tags/日本の国内の人権状況/index.html","8a1669c90b6c81df85498fbed6e9a7ad"],["/tags/日本の経済新聞記事/index.html","dc42e3ab2ab27676e4058b55f4b4b30e"],["/tags/环境/index.html","49e6a9f68f0a226b96659b11d55a723b"],["/tags/過酷な現場/index.html","4246a1517cd2b7382413b61ba8616a7e"],["/tags/金融/index.html","0bd2c0ada7861e1709d5b99d88f833a0"],["/tags/食べ物文化/index.html","38445e09885f133cb0d6cc072a23f471"],["/tags/食品工業に関する記事/index.html","7fc5467a6749e453d835f21e4104bb79"]];
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
