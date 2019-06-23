/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","0c2aa1908c99ad9a10a12d89bbe0c6e1"],["/about/index.html","ed9e253847bce9323f057e1f75ef5157"],["/archives/2019/04/index.html","eeb612a30aa1c83e3c22e9eec0842ff8"],["/archives/2019/05/index.html","14c8e6e3934e3af0903167c1d39ea822"],["/archives/2019/05/page/2/index.html","a0e05959ec10fe30aeee229c4cb1b0a8"],["/archives/2019/05/page/3/index.html","60ee0c327773427c6e607426376a1bb9"],["/archives/2019/06/index.html","c61ff0ae2b98939ebf4b67e3d352d20f"],["/archives/2019/index.html","d7cd9e61f24018ed92295b43f8fc95dd"],["/archives/2019/page/2/index.html","31dadf6f80427ccfcd352e4868253e77"],["/archives/2019/page/3/index.html","e89621130d077460eec24f3278e0348e"],["/archives/2019/page/4/index.html","6f8e90ce24839d31e37a23ee57fba025"],["/archives/index.html","5594bcaf2aa8e020936ff080bc07b61d"],["/archives/page/2/index.html","8a5e7becf80bc4cf8fa1758ed531655c"],["/archives/page/3/index.html","a6d893b7a0907ded527b35ef4aa24a8a"],["/archives/page/4/index.html","a5d14a41d8596f64aec3bfe42be3304b"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","f435998ea6f0f5830adced474d1f3e76"],["/categories/つぶやき/index.html","fe14aa8084eace4170d643e3819aa345"],["/categories/アニメ/index.html","a22e0fcd903f59c4c96784a07d1aae62"],["/categories/インターネット/index.html","0e35e068c62a666730663a1088a42484"],["/categories/中国に関する新聞記事/index.html","e9eeb99bc8553c337a6698fe3af31a80"],["/categories/労働者保護法律/index.html","07d71cddfd29bced9065e79673ce672d"],["/categories/心理学に関する記事/index.html","4b946b56a727216cb32267c3a8de010c"],["/categories/日常生活/index.html","581696a861407a4e5901e510edbe3c31"],["/categories/日本のIT教育/index.html","c6faed3ecfee1dcd3724e0f99034b6dc"],["/categories/日本のIT現場/index.html","c3aea20ec3c25a663dfdfbaae0641dd3"],["/categories/日本のビジネスマーナ/index.html","80a0fea4a1074adb9126ff22be151a76"],["/categories/日本の国内の人権状況/index.html","1044f443c7b31b99c83fe93c1453e3bb"],["/categories/日本の経済新聞記事/index.html","5b1d5829a1d0d8a2000efe4d27e324b4"],["/categories/日本地理/index.html","1143296ab9975008b0964c2c4cc5d94f"],["/categories/环境/index.html","e551651eacfa519e5927d1b859dc1288"],["/categories/過酷な現場/index.html","9e104498e99027f8ca33ac7caaa35897"],["/categories/金融/index.html","1d702dd73033fabdb52ebeaf9525e4ca"],["/categories/食べ物文化/index.html","66d0cc6442d588441f588cd09c27244e"],["/categories/食品工業に関する記事/index.html","b978bf563a80d653a3f4fd2825165afd"],["/css/main.css","937a7c3a028d89d2ea8ded529376cdbf"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b601e188129e96cfed22609342aadad0"],["/js/src/affix.js","7868eb85f1d1493e0cfc872c937419b0"],["/js/src/algolia-search.js","a95df86c575c2bb940d2a1cc70510524"],["/js/src/bootstrap.js","d52e0bb4ee837f7b116e5dbd9e65526d"],["/js/src/china.js","86fc5a5f025c260bb2a90b3cc9f31ee3"],["/js/src/echarts.min.js","21501337c676de326d380dcd775df476"],["/js/src/exturl.js","962b8942432b99a5badd3981eb448510"],["/js/src/footprint.js","6123393350106023da96eb3a21555b88"],["/js/src/hook-duoshuo.js","c4faaaf082f54360ba9301d45a4776bb"],["/js/src/instantclick.min.js","ab1d3002870d582cf8448d4f665fba9d"],["/js/src/js.cookie.js","5b0e37df32fdd58e23fd1a050dee8644"],["/js/src/motion.js","c3bc6c87768c7d4b8b9a7f5cf155af21"],["/js/src/post-details.js","5a0dfbe8c646b4484a8ac411190f1719"],["/js/src/schemes/pisces.js","6fed042cae99f21f140682521d080221"],["/js/src/scroll-cookie.js","ee5ff1144bd684399d111453a28c7f6e"],["/js/src/scrollspy.js","aa3c040f21ff0ea42151568b6974e57a"],["/js/src/utils.js","c40f4beeea6b45176e2497ce0b638e74"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","0d189e34fcc76db2e2d337384dd34c8d"],["/lib/Han/dist/han.js","5eecf727e74e5e2e862a030f4d476cee"],["/lib/Han/dist/han.min.css","924ce2a94b3e3c4a669ef41c4083b1f3"],["/lib/Han/dist/han.min.js","bc2efa3c78d297d47179ab68f4037342"],["/lib/algolia-instant-search/instantsearch.min.css","d511df2be2cde04a01a7910a382d9450"],["/lib/algolia-instant-search/instantsearch.min.js","bd69815d2c219614066d76d9b9f49936"],["/lib/canvas-nest/canvas-nest.min.js","61aa6debad6a0f9b213574ff0b0ae069"],["/lib/canvas-ribbon/canvas-ribbon.js","52c602eacc8b8c9c1b1cecc1a667ce79"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a847d1b14e8b71c5d7935d9c2bf29cdb"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","5a7b6f7e69329de03283169f82d84811"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","bc4ede8978630a3946c7bbebf8c0af6f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f1cced3a6528c303a8f9139da416a8dd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","01a7b6b45a132fedf9e974a897c7ed1d"],["/lib/fancybox/source/jquery.fancybox.css","d6f65976d4a8d955f7d29064fb709f12"],["/lib/fancybox/source/jquery.fancybox.js","fca1f37fd985d2dbc3e99ca25e5fee32"],["/lib/fancybox/source/jquery.fancybox.pack.js","ec18bc80198c22afd1add3f20e5f1ca6"],["/lib/fastclick/README.html","ba2682bfda6447684958c06b1944f693"],["/lib/fastclick/lib/fastclick.js","f7ddd31c6615d03d1b170bc4cdee1939"],["/lib/fastclick/lib/fastclick.min.js","59bef0bb1a808bb511845fa466105de4"],["/lib/font-awesome/css/font-awesome.css","a686773b3389ab70aac8913f3127cbf8"],["/lib/font-awesome/css/font-awesome.min.css","a686773b3389ab70aac8913f3127cbf8"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","30ac32186ba6a87d4f31e627bad0ac57"],["/lib/jquery_lazyload/CONTRIBUTING.html","b7cdbc48ea37c2b05dddc5d1d10723f1"],["/lib/jquery_lazyload/README.html","cd89ee7023b2ecb5e77fce293448350f"],["/lib/jquery_lazyload/jquery.lazyload.js","5a7ded932e0b937fd3adc101f639fd0d"],["/lib/jquery_lazyload/jquery.scrollstop.js","ab0a2fee07aa85beeef0148497cf474e"],["/lib/needsharebutton/font-embedded.css","83f8b4dcf83e1e65a2322526cb22b19b"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","4f33a190a1a35d99483d1260e7fac281"],["/lib/pace/pace-theme-barber-shop.min.css","ebf1e9bb598639bf56262404f868bbfe"],["/lib/pace/pace-theme-big-counter.min.css","c9ccf29655cb1a21f295b1d7d1c29bb3"],["/lib/pace/pace-theme-bounce.min.css","666abf50b26cf4b1cb2685a64b75c58f"],["/lib/pace/pace-theme-center-atom.min.css","eff689a7919726f02c955bf9bda53a2f"],["/lib/pace/pace-theme-center-circle.min.css","cb9a570eb0e6f4a74346bc91cae9a631"],["/lib/pace/pace-theme-center-radar.min.css","c76a668126f7572cf93e46f32b3502fa"],["/lib/pace/pace-theme-center-simple.min.css","ecd4f0812f23e3b9dda8e7c373067a1c"],["/lib/pace/pace-theme-corner-indicator.min.css","5658ea09a3a2dccdd263dfde9018b7e5"],["/lib/pace/pace-theme-fill-left.min.css","380d7ce3dfd2e163d298785461cdf8c5"],["/lib/pace/pace-theme-flash.min.css","0a91f42b0cff084a3b90e212e93e5bfc"],["/lib/pace/pace-theme-loading-bar.min.css","f5cca6be0ff4c770504dbf2977a32481"],["/lib/pace/pace-theme-mac-osx.min.css","98ca68b06100e55fb67a2b5dbc34e4ae"],["/lib/pace/pace-theme-minimal.min.css","f060639628a61d32d23031fb3b5b69a1"],["/lib/pace/pace.min.js","6b227e22c40802c75a6ea317a13e95aa"],["/lib/three/canvas_lines.min.js","04b6751c2ed7eae216487d6a238042c5"],["/lib/three/canvas_sphere.min.js","5aab6ea88ec213a9bd12265ad0bcd27e"],["/lib/three/three-waves.min.js","7c766f4829541387b9aa08bccf483df0"],["/lib/three/three.min.js","853835e85f7c92122170a35f4726776d"],["/lib/ua-parser-js/dist/ua-parser.min.js","ba284b39797d30c147165a72944d0eb9"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5af2dc26abea595711c2855fc3cc3442"],["/lib/velocity/velocity.js","10259d1e64a476b3170956f75e8b85be"],["/lib/velocity/velocity.min.js","5591f196893a43f350c2d29f0498fa42"],["/lib/velocity/velocity.ui.js","00df3ecded0245ba0ab9cd71086a9b7e"],["/lib/velocity/velocity.ui.min.js","3618000e90d3e12cd5aa7e6b32d19db8"],["/links/index.html","3097de41267bf0c5deb047abb2a7e1cb"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","e565647fe1ed4df157a1e35d4e2004cc"],["/page/3/index.html","7d8e22ce54dbb75d5c7649a7a7a33676"],["/page/4/index.html","b32e99cdb90660747f77114c96b9281b"],["/photos/index.html","4968e12a7a68e2e02c783be34916f913"],["/posts/191ddb73/index.html","d6c4976249ae94864804c3f40202c712"],["/posts/1a195976/index.html","38531ccfc61ca4a3a27a6cb7729ef968"],["/posts/2292f1af/index.html","c1ca743b8ef2db681e197f1631a5a6d2"],["/posts/2fc77d95/index.html","2e1d400e9eaced559958c6c23d1070ca"],["/posts/2feacaf4/index.html","f047e9f3924767426b049fdf68182f26"],["/posts/37f2c331/index.html","76f22385fe6adbcee2ad7f3ada75e792"],["/posts/385f0de9/index.html","bb539423b788419f487bfd6fbde3c112"],["/posts/3caecfa9/index.html","ed4fb8c48a8aa9ec28985eac3427d2b9"],["/posts/44414303/index.html","9678691a278ad0e7bc8e2ba7986dc95e"],["/posts/456610d0/index.html","2abe71d42796ff8f2047bdde679c22bb"],["/posts/45e51894/index.html","d20d09476fe33b39776d1ef76d1c26d5"],["/posts/4f1131af/index.html","1a9d9a53c337b86e56987d5305e9ac23"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","80f41b3c0b3b318db002f995176cd8d2"],["/posts/517ebb95/index.html","fbdac7a407570caea642ff64659a457c"],["/posts/53bf1d9d/index.html","7db4cf906426912ab6fc84af40e6aee1"],["/posts/554c2ba0/index.html","5bc0c23427f81196aef3057928731c7c"],["/posts/63556f52/index.html","a79e68f6cdfecaba1e3f32b0fabb39bb"],["/posts/6d49ceec/index.html","ed2a1ba9296fc07855d698791039c9eb"],["/posts/6de7d9db/index.html","d2fa2461e8bfb92c713ca666ba5f36bd"],["/posts/6fda249f/index.html","8d03c1c0de5e757cffd0a00000a887e1"],["/posts/84b87417/index.html","6668091b8d43eff773a0c5a32cdf53cb"],["/posts/8a60fcb8/index.html","1c893277f177a402d8cb5b56d4d4dfe0"],["/posts/92912ddc/index.html","840e8d6f29872555917585d048a5764b"],["/posts/97e5bc9c/index.html","14bed99a47646df0e4ec3b6155405aa2"],["/posts/9a5c7b64/index.html","601237e97ef8aaf9c4ae119f89ea9cf8"],["/posts/c311b112/index.html","052b0bdec2fec152df3dab11eff625d8"],["/posts/c620d4c2/index.html","9aaae368bbc2908e610e367d2fbd22a8"],["/posts/cfc54393/index.html","173a0eeee2ca03949965d3114f990486"],["/posts/dc5155ff/index.html","826dda8c54aaa71e6647062145e74df4"],["/posts/e1bd836e/index.html","5b25a0dc1854e97f1e1062f99de0c559"],["/posts/e31c0293/index.html","3d30531bc416ca7622afd3a5af6a35c9"],["/posts/f5fc4461/index.html","c8be564873d17eb8ad3caf0472d10674"],["/posts/f8073739/index.html","32f22ae00592d39c89ec80a715fa87c1"],["/posts/f97ef43b/index.html","250a1dac8a662ae3b947af208796b199"],["/posts/fa84d5fc/index.html","417f3982630578c035b1fc8390f272cb"],["/sw-register.js","7df6917a22090469e7778aca4876f8a5"],["/tags/index.html","e4a15ce68d10fc10d67ef4a5bedf7693"],["/tags/つぶやき/index.html","e9cb335647c440360cdb090f9348c78c"],["/tags/アニメ/index.html","7c422901aebb03ed40164730083eeca1"],["/tags/インターネット/index.html","72934101feb7e44748caa2286fa0c0d3"],["/tags/チョコレート/index.html","003eb2edb4582298522ee5c8f8419677"],["/tags/中国に関する新聞記事/index.html","eee5a81ddc2aee2ce51352be2282733c"],["/tags/乳製品/index.html","90a5f4217b317d7701d74ebc4e01f383"],["/tags/労働者保護法律/index.html","a90ba288c6faf4437021621567417568"],["/tags/心理学に関する記事/index.html","8a8bb5cd81f34b62065c193fb01dfe84"],["/tags/日常生活/index.html","6c3d6dde58a1f31e5807fe59dd11c6da"],["/tags/日本のIT教育/index.html","77680fc4132baab7592b3eb274446c34"],["/tags/日本のIT現場/index.html","2ca54a0acc6e003dbcdf5d17807d1c3b"],["/tags/日本のビジネスマーナ/index.html","e036e9e85d1e98f1a906b86f9457130d"],["/tags/日本の国内の人権状況/index.html","bba0b1e206967544f3e175a9027b7c85"],["/tags/日本の経済新聞記事/index.html","df875a99ecf25bd2215b5642681faddd"],["/tags/日本地理/index.html","6cb9c0d5cefb9f0234fb130a1059f112"],["/tags/环境/index.html","af8d3ea9862f75ede7e069215281b944"],["/tags/過酷な現場/index.html","c56fc202d4694f38f65cd2052acc3584"],["/tags/金融/index.html","0b73bbb0cd23b688b67495d941160440"],["/tags/食べ物文化/index.html","45d0a11d159febc30f7a0424b0a68ac1"],["/tags/食品工業に関する記事/index.html","a2eeecffa622ed1d8f173ba6b414dc8d"]];
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
