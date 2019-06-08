/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","f81073b594b3f03e922907945ed6416e"],["/about/index.html","6f309eed6d7275a8dd8b6bd6f9b2ff0c"],["/archives/2019/04/index.html","544b5c9032afed3b96a2b1fcd69351b7"],["/archives/2019/05/index.html","a5755c5c1bd55b82a3502e8b014024b4"],["/archives/2019/05/page/2/index.html","cb3203c5ef548b39908fa9501c90f3d5"],["/archives/2019/05/page/3/index.html","829b04d756d100a48e9f18c43eb8dc6b"],["/archives/2019/06/index.html","ea2015f96019f7a8ddcf88874f9447e0"],["/archives/2019/index.html","f0910b1f9cfb1e0465afa820c89a1904"],["/archives/2019/page/2/index.html","387ec6b8b59ae547dc624592d17207f9"],["/archives/2019/page/3/index.html","8be5bbecc467965c41e518d22f089a56"],["/archives/2019/page/4/index.html","1e22c3d9c96b970208d89aebb6f51a11"],["/archives/index.html","fdc3ec00e09282844df0b100c453676a"],["/archives/page/2/index.html","2d07781ee975b9196a995d9cf5872ce4"],["/archives/page/3/index.html","9a54aef4d3001e33b0b9e4186efaa0c7"],["/archives/page/4/index.html","15ae8ad4df34b5e855a138d0bced12a4"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","b7d99492108e3b00cfb82e02f032cdaf"],["/categories/つぶやき/index.html","af32183b1d28509b601ce7dc43d586d9"],["/categories/アニメ/index.html","58810c0d064731c9702ceeb45d42f15a"],["/categories/インターネット/index.html","8ea50de78f0aa0c95a1f85f7db990f3f"],["/categories/中国に関する新聞記事/index.html","c1df265dc6e9d6efe882da8f30cd299d"],["/categories/労働者保護法律/index.html","dcba31acef05644c7f2925287802026f"],["/categories/心理学に関する記事/index.html","b54c75edb44ab606a7eabfc284b33433"],["/categories/日常生活/index.html","c409b338736967aed4143b02459a1a18"],["/categories/日本のIT教育/index.html","0e305deb32703f3f1dba30b1533dc5f7"],["/categories/日本のIT現場/index.html","1e9c9f614887c31886b6e722bae38f86"],["/categories/日本のビジネスマーナ/index.html","49d599a8f109c1a78331175ad114afdb"],["/categories/日本の国内の人権状況/index.html","660d71b2c7f7fe086d77fe8930ca53e9"],["/categories/日本の経済新聞記事/index.html","2d4f5ec4e77c00769468f98fb53aa429"],["/categories/日本地理/index.html","12060c40c2238d58f3ee38fcd45091cc"],["/categories/环境/index.html","8fbe4515ab662043523a3980a4381ca5"],["/categories/過酷な現場/index.html","b7843bde30e017d25bc06cfe1a4970e0"],["/categories/金融/index.html","d90de2fc69c72efe8db491a9e45de705"],["/categories/食べ物文化/index.html","b09d14922adfea5798594cbca61cb64f"],["/categories/食品工業に関する記事/index.html","3d892b6ec06309027fa92d6bd89e7fff"],["/css/main.css","ab5b7858b00cab586c145ff8d604958a"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","9b96eb8fce6b6d81ade973e70dd7cd55"],["/js/src/affix.js","1f8138d27a63a6f2e49d193de0cd8c96"],["/js/src/algolia-search.js","d23f6e2e2bf845551d19f47b118b152b"],["/js/src/bootstrap.js","c044e118c1931ba949c18734e85ca0f8"],["/js/src/china.js","0b2e3fd7902210ee4c972e3ba89ee58c"],["/js/src/echarts.min.js","e0bb325258033286c79b203898d35c38"],["/js/src/exturl.js","fa64273e4c8e06319dc26f067faa09c4"],["/js/src/footprint.js","23e809c5bab89bca5bddd352297085f8"],["/js/src/hook-duoshuo.js","6538e3948043e1b6063d7edb70e0c799"],["/js/src/instantclick.min.js","4d8a36f4f02c112e6682b1a11fc102a1"],["/js/src/js.cookie.js","4665db5c619005bb2e2685b8d72c572b"],["/js/src/motion.js","3baaad5bda6c7b510568af31b8a2bfe7"],["/js/src/post-details.js","d674200b5d5a3bbb5816cb951f34a82c"],["/js/src/schemes/pisces.js","c4a67a253a25cecedd82149d48c06305"],["/js/src/scroll-cookie.js","bd0e89045aed53039bb92f5fb4973ad9"],["/js/src/scrollspy.js","6d9f7af79db153721cf07a698e8be06f"],["/js/src/utils.js","c938943bb2e4ef8e81e14014fa059382"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","fdd25118acbc993fe4d50bba2bbb4c06"],["/lib/Han/dist/han.js","a62b30605c4b29f7d5d98725757e5cfa"],["/lib/Han/dist/han.min.css","a1a7a612018b8e7c140af7857ca23dc0"],["/lib/Han/dist/han.min.js","dd507a3226871d80c67118fee53e7afe"],["/lib/algolia-instant-search/instantsearch.min.css","07fdde1de8a6708045fede5de2adf7bc"],["/lib/algolia-instant-search/instantsearch.min.js","c20214644a78009389dbb38affc4392c"],["/lib/canvas-nest/canvas-nest.min.js","396d7a5167844a1d759fefee2fabbe75"],["/lib/canvas-ribbon/canvas-ribbon.js","eaa417c48076901572d48bbbdcf708b2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cfdb184ff451ed1239fb250e342dfa83"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b2db6e50c164ec65e983ddebd3a5baca"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","81907b3cb3b6b9b8892538d685d38120"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2f81e122e92a005ff4ce3602e7f89212"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a7b531aafc0cfdd4221910288e14c7f9"],["/lib/fancybox/source/jquery.fancybox.css","6461066180398a1d35bc20b4609ecfdf"],["/lib/fancybox/source/jquery.fancybox.js","206a6e72ba267a2cae6d12ed8a0cfb25"],["/lib/fancybox/source/jquery.fancybox.pack.js","99622eb9598bfdcbab32adbf88b293d7"],["/lib/fastclick/README.html","2cb05579982a7e9823349753e5b98fbc"],["/lib/fastclick/lib/fastclick.js","5b71bb419d13b79a6889c7e3229c95d9"],["/lib/fastclick/lib/fastclick.min.js","9b4b0dab8769428a2fe54fca65904e06"],["/lib/font-awesome/css/font-awesome.css","4ba348aec695058b0d8d4139a2c07448"],["/lib/font-awesome/css/font-awesome.min.css","4ba348aec695058b0d8d4139a2c07448"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","fd83637717a4bafba03047eed4f75368"],["/lib/jquery_lazyload/CONTRIBUTING.html","5071144e7822fb42d69cc73a57f17dbb"],["/lib/jquery_lazyload/README.html","5d01036bd1a88a6225282e8584749efe"],["/lib/jquery_lazyload/jquery.lazyload.js","b3a49b85e98c64301f8973a3a9fe7158"],["/lib/jquery_lazyload/jquery.scrollstop.js","81dfddef53cb52ea4d6848307ad5cb24"],["/lib/needsharebutton/font-embedded.css","bcb4d0a870955856217314a259c59cee"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","2665f6362d2e01cc8e44f7f3c34d57f3"],["/lib/pace/pace-theme-barber-shop.min.css","29dcb6873f934e63276489be918b2b1d"],["/lib/pace/pace-theme-big-counter.min.css","401476939af1fee0c1c47b3a38f53928"],["/lib/pace/pace-theme-bounce.min.css","d0c6d0a5990ce1e1eab261a7c3de331a"],["/lib/pace/pace-theme-center-atom.min.css","a39d71c638f426ffc28258a3ffd3270e"],["/lib/pace/pace-theme-center-circle.min.css","429ed0e42fb31e2f6ee13aa9174f5968"],["/lib/pace/pace-theme-center-radar.min.css","49397bb2173a419047a8d18ec111e3d6"],["/lib/pace/pace-theme-center-simple.min.css","48e81cf80b05c15cbbf4e1f2cabdaad5"],["/lib/pace/pace-theme-corner-indicator.min.css","494244159f56db8cc6da20278d3f8199"],["/lib/pace/pace-theme-fill-left.min.css","c8280d73161a6539d8e54f694b6ebaba"],["/lib/pace/pace-theme-flash.min.css","aa729dc7bf1d9e7033933ce5496501d0"],["/lib/pace/pace-theme-loading-bar.min.css","2da5a183da6b3c3bc9c0a26b596ae300"],["/lib/pace/pace-theme-mac-osx.min.css","d5de28afd892a7dd0aa9790d4f7bae38"],["/lib/pace/pace-theme-minimal.min.css","4faf9c3c4ecc2356096025b2c1d159dc"],["/lib/pace/pace.min.js","61ff16f24cf4845820225b17d5dc0437"],["/lib/three/canvas_lines.min.js","aa800f3c7cb8f477046cd5658029f446"],["/lib/three/canvas_sphere.min.js","bc4c414bf4045a90080f9d937fca8183"],["/lib/three/three-waves.min.js","672c68cfa8715d55f95ae69a2b6fdc03"],["/lib/three/three.min.js","fef70e81aee5afcb1d05ca335de3e495"],["/lib/ua-parser-js/dist/ua-parser.min.js","02d51d6ba08b67e92ab05df7cd257b6f"],["/lib/ua-parser-js/dist/ua-parser.pack.js","11ffaac259c0df2281fc45992116523d"],["/lib/velocity/velocity.js","3a4795caf6a169c03e8e9999d3177ce4"],["/lib/velocity/velocity.min.js","daabc17d7ea5e7c58cd575581ebc5ee2"],["/lib/velocity/velocity.ui.js","b1c32b1b5cb577869e1854967b9739e0"],["/lib/velocity/velocity.ui.min.js","f0d4fc5a350c46740407f2dfb18acf22"],["/links/index.html","a1794527774ba15fef88b50af22cda1b"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","01d9030aa72d9fbbe98ebf22c0c8fb3d"],["/page/3/index.html","761a1ecd81ace5f0d7bf4ffab7b8b79c"],["/page/4/index.html","10b358a986df68ba9b3ce1a2d2ddbe83"],["/photos/index.html","a372bd55c220b85bab3c96b69d86d189"],["/posts/191ddb73/index.html","ae827c3a7fb47b753704b9a3b2ef62db"],["/posts/1a195976/index.html","67a708b9da5417ce4b8443efcf0b2633"],["/posts/2292f1af/index.html","2f131d4657c78cb4797790ea34dc5982"],["/posts/2fc77d95/index.html","b4d07c3b2d764be15f6f39dcead13ab1"],["/posts/2feacaf4/index.html","6ed8fd1816e962498e1385f754e4d537"],["/posts/37f2c331/index.html","e139d41aae18ecdff55b4cf572c762f6"],["/posts/385f0de9/index.html","5059f622b60511f5cffa3aaf5fdcf4e1"],["/posts/3caecfa9/index.html","86e2261a2e7f9031c6071be197491309"],["/posts/44414303/index.html","d4ca5e7ac694378c3b181db98778b5b0"],["/posts/456610d0/index.html","342bbb00cd4e4230c77e0b6675e63db1"],["/posts/45e51894/index.html","678f4f7ba894eb3326b6140ab1949bbb"],["/posts/4f1131af/index.html","cf1136d04f70bb84973c84f9ad012c5a"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","00b708beb1b949a388efbd9458c7a2c7"],["/posts/517ebb95/index.html","cf7a438f9646bab75b33c1a796706785"],["/posts/53bf1d9d/index.html","b6e82ec5c3c205c3bb793605d361d086"],["/posts/554c2ba0/index.html","af1925697daa658abb1f9c281d04082b"],["/posts/63556f52/index.html","39cc417209e2b713bd1bcdcdbe309ccf"],["/posts/6d49ceec/index.html","e44fd63429ee3a4b508c8151ec99f8f9"],["/posts/6de7d9db/index.html","c45680cefcb32076b109513e6fd754e1"],["/posts/6fda249f/index.html","6a2267078d9c8e71fe0e53a764f63f27"],["/posts/84b87417/index.html","e103ad452763e0c10b53298289de904f"],["/posts/97e5bc9c/index.html","b49f3a613d87d62d32f90341ccf01970"],["/posts/c311b112/index.html","23251b6f0fe171c20dcd60ba2a587358"],["/posts/c620d4c2/index.html","4ec8c8695870e00b9340882f4aef8c67"],["/posts/cfc54393/index.html","5e9c044b4587a81a3bb30f2a68de8c85"],["/posts/dc5155ff/index.html","de7109c711e9db5eb6df2f05f8b26034"],["/posts/e1bd836e/index.html","105296aa4b7c4b10fdfc751a50cbc683"],["/posts/e31c0293/index.html","1d7431040a4876912e68710b039253a7"],["/posts/f5fc4461/index.html","f8775cedc984643412e1e488d4f56d55"],["/posts/f8073739/index.html","b45670c415dd409286dc5eab3de3e9a3"],["/posts/f97ef43b/index.html","b6e1f7c4a3d9443b47bd93b5c8c05f06"],["/posts/fa84d5fc/index.html","da92b0ddcbac99c87b2f2c5a7b9647da"],["/sw-register.js","69639bdcc83c54b55bf7140ea674e120"],["/tags/index.html","ecc83f1d0819f000b9409e4b788de3ca"],["/tags/つぶやき/index.html","b79cd192aa350ba9531d50d69b17f5df"],["/tags/アニメ/index.html","b759e0058263cd6b0ed44a0f3022caee"],["/tags/インターネット/index.html","80068f9770b782422d199ed6e7a0323e"],["/tags/チョコレート/index.html","ff4edc7648eb8c8f1eec8267c94e6132"],["/tags/中国に関する新聞記事/index.html","e6e6b50ba6c579b6d67b398b2dc3f0e2"],["/tags/乳製品/index.html","04471a555c295804b03baf2c591c0e96"],["/tags/労働者保護法律/index.html","d4bddf7b8163652bbfcbd34193240755"],["/tags/心理学に関する記事/index.html","adc8cf28e2b819068e7cf13f1bd0e811"],["/tags/日常生活/index.html","2f99d2719c5a70ebb2b486f850cee204"],["/tags/日本のIT教育/index.html","def64a965cbda4f15ec54f7d681c29f5"],["/tags/日本のIT現場/index.html","6bbc55485d2e2b285945a71f07ebaf17"],["/tags/日本のビジネスマーナ/index.html","a8c68d85d0243a0271d9c0018feac8e0"],["/tags/日本の国内の人権状況/index.html","69d6818e1c199da338901fe731a2eef4"],["/tags/日本の経済新聞記事/index.html","a7508441522ec89be9ef0b7b01d7ddd8"],["/tags/日本地理/index.html","81be27626fbc2087de9b666038f46825"],["/tags/环境/index.html","1487f334d57f13ce1c1375ecca9b397d"],["/tags/過酷な現場/index.html","8ccf119cff7351e8d59f1830c15a8fe8"],["/tags/金融/index.html","e032602b0d8e4d1476a195e9b67f7ca4"],["/tags/食べ物文化/index.html","273683373684569e16f932802e7df61f"],["/tags/食品工業に関する記事/index.html","9f06968a481285e8f9f61fb91dfc34c1"]];
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
