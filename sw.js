/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","204fdfbbd0a4873ba3d67ab8d8e782ff"],["/about/index.html","512c7076d4248515cbc136bfd7f918fa"],["/archives/2019/04/index.html","1439a77e22a7994a664b5a53b00d86a8"],["/archives/2019/05/index.html","72f33b3a331d78c67d9ef26ac1ecd468"],["/archives/2019/05/page/2/index.html","c52b88cd48331e958156932cd9748039"],["/archives/2019/05/page/3/index.html","215efa56c7c0bcc8b512b9faa9afad74"],["/archives/2019/06/index.html","486cd99f6703a70eadeb73989c935e96"],["/archives/2019/index.html","889cda59b4c077ced3fa01d7b9a804e4"],["/archives/2019/page/2/index.html","80ffbbc661255d600d1fc4792e37d964"],["/archives/2019/page/3/index.html","db52baa20fef0960822a2b31a4435355"],["/archives/2019/page/4/index.html","db2b3467e7a0698c22611da41a154668"],["/archives/index.html","7e85d119b453366c75528575d7abb83e"],["/archives/page/2/index.html","0557af370d22cd11c3a9e3afedddbc77"],["/archives/page/3/index.html","9acbc808b94d3b36c161ddb9f3527248"],["/archives/page/4/index.html","bf01f37a2d9ec1dd4333fa85cdee2c44"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","9aaa0d8de4b7949d0fec7109958bb2ce"],["/categories/つぶやき/index.html","ec0262988bd367d729c56c2fc4b65672"],["/categories/アニメ/index.html","bcf799a772d521ed06e5ee115313d952"],["/categories/インターネット/index.html","4d133ca2260f61a557701fb0f4eb3035"],["/categories/中国に関する新聞記事/index.html","9bf73ce190b6abb721a0bc85917cce27"],["/categories/労働者保護法律/index.html","27c54f307c685d6393d1eba497189514"],["/categories/心理学に関する記事/index.html","b1a506cc597b2efd8bfb344accf6106a"],["/categories/日常生活/index.html","35e0ce9b654c74b2ca5577272c37cc61"],["/categories/日本のIT教育/index.html","33f5411c10617b943c12249126846743"],["/categories/日本のIT現場/index.html","a8d80f71d305b5aa6a0442cbe704a78e"],["/categories/日本のビジネスマーナ/index.html","f69759d5c580541cfb4a0cd45e468f20"],["/categories/日本の国内の人権状況/index.html","d6017d8f5971d576703906fc954bf23c"],["/categories/日本の経済新聞記事/index.html","695bd503455e3564012aaceee54e02d9"],["/categories/日本地理/index.html","73b2b5a410aeca71220716f8178e96e1"],["/categories/环境/index.html","dbbe49ab9ada241de7c74e8dce57beb4"],["/categories/過酷な現場/index.html","4111149fbcfcaf8fba947b45722343d2"],["/categories/金融/index.html","bb2dfa842802266cf62e564cd0631cbf"],["/categories/食べ物文化/index.html","b6edc5a78f68f3976e864b71557fe46a"],["/categories/食品工業に関する記事/index.html","bcda0c4d59f6a67c369fd6a84dbc0b35"],["/css/main.css","8ee3c1894e9fcf3bc58d801f74405fdb"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","76d51f2c6390b038372af921b15150be"],["/js/src/affix.js","39c23e8d71d1d62ff6b44b0a238a9464"],["/js/src/algolia-search.js","52c0a4ad56c3542c897fae5aa67978e2"],["/js/src/bootstrap.js","39987b95c435ac2ad0dc404a824a9d2a"],["/js/src/china.js","dbfa1ce9758161e2a4b6d4a90603b147"],["/js/src/echarts.min.js","8529e04f9d13e3fdce60cca0b6dbbd13"],["/js/src/exturl.js","6c08b933d0a98740f51dde34be40cb9f"],["/js/src/footprint.js","11c7cbdda8f77f276b5de74a6d11e565"],["/js/src/hook-duoshuo.js","2133c00e74c987dca042eb833a03412a"],["/js/src/instantclick.min.js","b34fc86c035cf57027317436c4e6497f"],["/js/src/js.cookie.js","ad4d6ca53fefa71bc15d0ffcfa407a07"],["/js/src/motion.js","14247d06a6a1d2bc22a4c7d621caeb31"],["/js/src/post-details.js","534b1c9a9397f8169dd08faeff40166f"],["/js/src/schemes/pisces.js","1a6ef34709a2953990b0acc977a0926c"],["/js/src/scroll-cookie.js","5e3d61bdd11eea56846101326a4d28c1"],["/js/src/scrollspy.js","b602314e2d8bd17cf82caa066150a9a5"],["/js/src/utils.js","5bab18855d3f4769d4457b9f7bb35452"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","50a56535c05e8d335ebc1481ef0d72ff"],["/lib/Han/dist/han.js","ebcaf53a41c36bef1156a8805c629edb"],["/lib/Han/dist/han.min.css","78d6940aba41eb53ae1276c19b7e0a54"],["/lib/Han/dist/han.min.js","3e984ebdc88d41ea55090c1f384f31cd"],["/lib/algolia-instant-search/instantsearch.min.css","761bff70632a8e37425dc54beca347f5"],["/lib/algolia-instant-search/instantsearch.min.js","1c2864bd4dac5377dcccb762540edf2f"],["/lib/canvas-nest/canvas-nest.min.js","62fc59733797bdfbd23fcd2c6e07fd57"],["/lib/canvas-ribbon/canvas-ribbon.js","fdfb6bb294a0fc81d119fcd8e927ad04"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e6047b87a64cdd14b575b98294f5aab7"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c7f2415d12919d64bbef2525bb8d8915"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","908544274b530e4d1525632770a933bf"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ce395858bccac3625d236a784746f03e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","361da669c874ec23bd6e61d0740ad4dd"],["/lib/fancybox/source/jquery.fancybox.css","fe77525539c978b5876091d95674a774"],["/lib/fancybox/source/jquery.fancybox.js","b9fd6f87012eddefd2b361c1d1485d79"],["/lib/fancybox/source/jquery.fancybox.pack.js","6c8ffbdfa4fa6daa28f0f6c9a958c83b"],["/lib/fastclick/README.html","9c72f8d40350f164cc0f87f6da3c35a9"],["/lib/fastclick/lib/fastclick.js","adc1efe7e7414a3e6f43d4e0bcbf5bd1"],["/lib/fastclick/lib/fastclick.min.js","d2369746b18a7e7b5482db50c3e0da2d"],["/lib/font-awesome/css/font-awesome.css","7e21dff521b29ea97b0a8060087482b0"],["/lib/font-awesome/css/font-awesome.min.css","7e21dff521b29ea97b0a8060087482b0"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7387c5cb04acfb47c8f95b70f2b53dce"],["/lib/jquery_lazyload/CONTRIBUTING.html","25e358d354e2f4f57aaaa00f62e4d2dc"],["/lib/jquery_lazyload/README.html","b3bfc03c0292ee4e02f2884cf288c6dd"],["/lib/jquery_lazyload/jquery.lazyload.js","6e72c9a46b32be12d804ce187ab520f9"],["/lib/jquery_lazyload/jquery.scrollstop.js","b4f6aea5740d059ccde554040e9476a5"],["/lib/needsharebutton/font-embedded.css","9be28aa852530d09b4acc19acfc57941"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","afd81f281b0c3aeb756827806caf86a9"],["/lib/pace/pace-theme-barber-shop.min.css","e3419dc51a8f52cb3bce0bb9a936c0e9"],["/lib/pace/pace-theme-big-counter.min.css","2f3193ca438136c0cf64cc103e699a45"],["/lib/pace/pace-theme-bounce.min.css","657c94ff5967e4e044a1067c5d81b980"],["/lib/pace/pace-theme-center-atom.min.css","e13a344c4f41f7818f8e41e2e1b88c9d"],["/lib/pace/pace-theme-center-circle.min.css","e1813f85c834fcb5bfd221dd0da80ae6"],["/lib/pace/pace-theme-center-radar.min.css","113436e9123d5aff6d98127ef5b11471"],["/lib/pace/pace-theme-center-simple.min.css","6d8118ae7d94c6d90c563e386d1b43f9"],["/lib/pace/pace-theme-corner-indicator.min.css","76a3554b6a661d44b1dd815d38ba015a"],["/lib/pace/pace-theme-fill-left.min.css","7a7f1c23cd037b88dc869cc8f4d33077"],["/lib/pace/pace-theme-flash.min.css","9f1376be204afbf63e434396ff467e2c"],["/lib/pace/pace-theme-loading-bar.min.css","8a012402fcb0966062af034472cb3177"],["/lib/pace/pace-theme-mac-osx.min.css","09520a239aeb643b9d3f82a0bc7f466c"],["/lib/pace/pace-theme-minimal.min.css","9c749bf33203cd888e586083d9166592"],["/lib/pace/pace.min.js","bda72c4c675ef08c7d070f6c8ec64958"],["/lib/three/canvas_lines.min.js","1e94efa2e034eabdb8dc1b4adeaa509b"],["/lib/three/canvas_sphere.min.js","b769c7e33b62c8c4c58d0d77ecbbc351"],["/lib/three/three-waves.min.js","0d8e51596590154d1b9aebd5617f0572"],["/lib/three/three.min.js","ca26c40c99bbf3d13fcff610b9d7e79d"],["/lib/ua-parser-js/dist/ua-parser.min.js","bb8d4c6569db2ae3e9d18d6f7a2096e1"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4f0c19a1a98442c6125a45b54a43f5c8"],["/lib/velocity/velocity.js","6a1dfa4b343e257df628a242b0cfe193"],["/lib/velocity/velocity.min.js","d07f502d419122df07a4765b1d59b52b"],["/lib/velocity/velocity.ui.js","421095cb5e3fdfea99e1bf23088e83d6"],["/lib/velocity/velocity.ui.min.js","f625d9c38801d302e9e188a12fcb804b"],["/links/index.html","e34d68457cd25b3e201a60e0d8b1bd32"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","c7c68d3b89aa20908c8601be345f6db0"],["/page/3/index.html","3f14f5ffa22c802dd86765c807c6094f"],["/page/4/index.html","871a85281b2e36a99cd47dc18ee62f8e"],["/photos/index.html","e6da9a03814cacd9a04df261fe6cccdb"],["/posts/191ddb73/index.html","8e9a69518ab1c8a763b319edf8c99bc8"],["/posts/1a195976/index.html","24afc0a2dfcaab688dfc19f689ae10e6"],["/posts/2292f1af/index.html","3fd51c40e339bc0f73ae68e0a6f23fc9"],["/posts/2fc77d95/index.html","5d755cd36a3be9d1a2b9c815d311de79"],["/posts/2feacaf4/index.html","f5d219c8430056335cc5fb0a4610b85e"],["/posts/37f2c331/index.html","10fc3be01933426c1a6bf8428886f1b0"],["/posts/385f0de9/index.html","a1e65f4c1cdcd609db00bd07bffadac2"],["/posts/3caecfa9/index.html","292183f045ce720d2d31b76ca8a35314"],["/posts/44414303/index.html","10a86b6fd1e3648c2c2ae7847f286372"],["/posts/456610d0/index.html","48eccf8b6d578ff9865b3bf01ac03524"],["/posts/45e51894/index.html","5e9973a797734473eade151e5946035b"],["/posts/4f1131af/index.html","2d24b921052c559b6288aa9a3df3bf1b"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","19705c0bbd753eba4b8230d8ff6c02eb"],["/posts/517ebb95/index.html","738eef94c466620193a2265529335ee8"],["/posts/53bf1d9d/index.html","cf43fdee151a6ab27b46ee4624ac52fd"],["/posts/554c2ba0/index.html","38554a8c9a2f3aef5688eeccd24d23f7"],["/posts/63556f52/index.html","12a3a96e47392714c558ddee0b4e5402"],["/posts/6d49ceec/index.html","d6958bbd6936e4385d7f6ce5c0950898"],["/posts/6de7d9db/index.html","58e7c9f58824856758daf8b201a1e56c"],["/posts/6fda249f/index.html","a52f38251afda8d82dd66b467a049752"],["/posts/84b87417/index.html","92b977f72bd3692c75e7afce48f5c15f"],["/posts/97e5bc9c/index.html","6e5d7461c85b5513468bbf781aa1661b"],["/posts/c311b112/index.html","3a541f10891633ff32cd1748ecb3c4ec"],["/posts/c620d4c2/index.html","6006bb2a114f8bf652a86e186d4a8978"],["/posts/cfc54393/index.html","161ba9eb683e3a4da2b7ce98c6bbf3a2"],["/posts/dc5155ff/index.html","9a5166b2078dc61459d8c3bab9e970f9"],["/posts/e1bd836e/index.html","4e5ad16b7bcc65d768f489a8ee9f47e2"],["/posts/e31c0293/index.html","af1142b21cae6d559cbc6e286208258c"],["/posts/f5fc4461/index.html","4e4e3267996d34989f841311bf83246b"],["/posts/f8073739/index.html","8fb4431e4aaa56b6149653b7cf1b2405"],["/posts/f97ef43b/index.html","b4eca73347ee179efeda26e8cde0f0c0"],["/posts/fa84d5fc/index.html","8e2d5f78de3d172b2ac8eafac0c50043"],["/sw-register.js","83f850751c5d7c1df624bac78678b30d"],["/tags/index.html","ef260a8cee5fcf3b034884b707222754"],["/tags/つぶやき/index.html","4e648737a810be9c7273d3ecd384e4af"],["/tags/アニメ/index.html","0ee0776862bc4a20655ec5156603f7a3"],["/tags/インターネット/index.html","05a9f1f933d70fb33b56ffb9ba8ccf92"],["/tags/チョコレート/index.html","321eb04b7bc9248921da6b172065ed08"],["/tags/中国に関する新聞記事/index.html","5ec63e1bdafa8bc7287ed10f7a55a365"],["/tags/乳製品/index.html","e7b9d2ef272f5860cd9429dcb7c55c66"],["/tags/労働者保護法律/index.html","54b15206e709e88b6e147cea9d4de72c"],["/tags/心理学に関する記事/index.html","cf8f79e411a11a0f40599b29040e55ad"],["/tags/日常生活/index.html","d62aaef8c3fb354fd76f6ad6b28dc719"],["/tags/日本のIT教育/index.html","5d4b3b694b43aa65ef89b8ae1e280df7"],["/tags/日本のIT現場/index.html","257116bd062f86b3a866528d581b1018"],["/tags/日本のビジネスマーナ/index.html","afdf053b554b3256dd9fde104a2ee140"],["/tags/日本の国内の人権状況/index.html","009bb5359e3716b82947d55b56fb2797"],["/tags/日本の経済新聞記事/index.html","64fe819b22d6c2d25adb05ee048d1310"],["/tags/日本地理/index.html","48f6bdfa004323e64d85a715f222df56"],["/tags/环境/index.html","373bfd54f44be7f5336d00876688f6ae"],["/tags/過酷な現場/index.html","a4275d96c9990330038bce5a9615d6ac"],["/tags/金融/index.html","3bf83b3cc926ea744652f82e87c949e6"],["/tags/食べ物文化/index.html","68f232986fc22d50300454fbd5958d4f"],["/tags/食品工業に関する記事/index.html","75f896ad4caa0a8c1bb334ece95b427c"]];
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
