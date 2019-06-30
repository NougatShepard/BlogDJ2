/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","ec83b8ae18c47f01ccc3b23b87c251c7"],["/about/index.html","cfd61da44cf65290bb0900a229069b71"],["/archives/2019/04/index.html","6ad5a1a2d511d7c9541425ad09c718f0"],["/archives/2019/05/index.html","81f62331dd95bd175a5e8bea03a466ce"],["/archives/2019/05/page/2/index.html","94f5945f7992ea9120bab5fc5115efe2"],["/archives/2019/05/page/3/index.html","2db69b2170e3def55b06041562a6781a"],["/archives/2019/06/index.html","3eebfa3c6837b75e16fa652b704e7c6d"],["/archives/2019/index.html","d22ca99a1ed05e9ddbc1ff69ce122299"],["/archives/2019/page/2/index.html","bbcb65da606d1ca6abb4f0d2ca8995e5"],["/archives/2019/page/3/index.html","d4f1c0a55a0ece435527088e52c57e60"],["/archives/2019/page/4/index.html","0f51d70c419bc12fdde341647a146f70"],["/archives/index.html","6399ed6981562a106088e76c755e78fe"],["/archives/page/2/index.html","8a63e528c9bb88582227b1896d121bc3"],["/archives/page/3/index.html","ec19d5b272246ac0f9cb55ec4e98539d"],["/archives/page/4/index.html","7362bbc5805edb3062082cb52d29c90a"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","e303e9fcab78a8b1002cc8bb909747f4"],["/categories/index.html","f385cec08bfe757cb735455de62d2abb"],["/categories/つぶやき/index.html","f77fd3e56ab708000f39bc2aac7bc646"],["/categories/アニメ/index.html","01315d961f8d2e59517204b7979f97ce"],["/categories/インターネット/index.html","d1668a327bb995812723a88776de33fb"],["/categories/中国に関する新聞記事/index.html","05213d3d11bcd2dac1308e94d28666aa"],["/categories/労働者保護法律/index.html","f0e2b0cbd08309ba5280d2c117c8b5fb"],["/categories/心理学に関する記事/index.html","056296c8adfd0e0718f51c187cb501ac"],["/categories/日常生活/index.html","112dd46b2b122b6fe656d5c857d1f80c"],["/categories/日本のIT教育/index.html","41672a5d7cc49a39dda56d8309a01740"],["/categories/日本のIT現場/index.html","a7e0eaf87090e49a4eaa19fe72934410"],["/categories/日本のビジネスマーナ/index.html","3f1121bcd77de4524882837c7d444160"],["/categories/日本の国内の人権状況/index.html","dab4971fb547356645e5a8fe4849673d"],["/categories/日本の経済新聞記事/index.html","7c61c8f7197959f66cabfdf18c847848"],["/categories/日本地理/index.html","fb7c2634eb33400ca74c131d2001c348"],["/categories/毎日ことば/index.html","dd1052dd5d1438e4fe426865c8ef6fe4"],["/categories/环境/index.html","9c804c99ea480e6d22c87f64c5e07d1e"],["/categories/過酷な現場/index.html","06c4d0d88cde6aa2cb5ac217925a64cf"],["/categories/金融/index.html","144b5a0b7fc09632674bc087e97cc91a"],["/categories/食べ物文化/index.html","5321b5cf2c7c51a0dcfbdc94449ee404"],["/categories/食品工業に関する記事/index.html","8a2e441b54ae4679090af5eabda06a20"],["/css/main.css","06b904022f82a9655632967fb70e1b24"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","4dffed8e7b752c45b60188db922626be"],["/js/src/affix.js","7fa78ac5ebb51567c987923d333aa073"],["/js/src/algolia-search.js","704c25fe1d556b80f3f7b171947fe9fb"],["/js/src/bootstrap.js","826bd9c59af4c6d8f093014d56169edd"],["/js/src/china.js","2f7a3ba9261b74a29cd7b59583e28a56"],["/js/src/echarts.min.js","44c19df78d616240b263b7acee472523"],["/js/src/exturl.js","ab9ed54370f611aee42a9793b86e5082"],["/js/src/footprint.js","a769719a50dbacc22283b5923731f797"],["/js/src/hook-duoshuo.js","15522141298ac045080b3f18f9f3c40b"],["/js/src/instantclick.min.js","f0a960ddd5bb4048b087b244f9a1a8fa"],["/js/src/js.cookie.js","9746dfd89213e1dabbe06b61532f5d0d"],["/js/src/motion.js","8c3b62bafff06703755c0509becbc737"],["/js/src/post-details.js","1bd71a5b90b737ef11b01549db28427f"],["/js/src/schemes/pisces.js","1c10959d7e49b4e613a8123348fb98be"],["/js/src/scroll-cookie.js","43982fd182e593000176a1528c4de852"],["/js/src/scrollspy.js","6146ce8ce67326ab149b70089e4cc831"],["/js/src/utils.js","2f367d0fd31e3317bcefcbe757e239b4"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","14e763aaee4c38eef678d8eb9dc73d60"],["/lib/Han/dist/han.js","863214d850cfdac081779bba030fd48b"],["/lib/Han/dist/han.min.css","9c04ed88b66830f74f473f72d481170e"],["/lib/Han/dist/han.min.js","b652254c0af55e0c55f594f28925d02b"],["/lib/algolia-instant-search/instantsearch.min.css","b7ab366141a83a0e5b49a66451622da7"],["/lib/algolia-instant-search/instantsearch.min.js","f75233b91ddff284fbd4ef5b810eb79a"],["/lib/canvas-nest/canvas-nest.min.js","2d467daad8a6636fbcf0908729beea11"],["/lib/canvas-ribbon/canvas-ribbon.js","bbbd19b565ff60fc5ef8f9c132cc54a1"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c7854cb612c2970ea68b777acb1edffd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4e3b4855e0f1f7f423dcc8b5e4304c71"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ab5d2bcc7d256410b76efd0c65b09f37"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f8449fb4bb96aae99a4778c1d73bf440"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","ffdf3dafadcfded9e0b288ec626bce4a"],["/lib/fancybox/source/jquery.fancybox.css","ca0021953a4e5b9457282de5cb7163d4"],["/lib/fancybox/source/jquery.fancybox.js","783decbc84a961093115d47b6f3e0f67"],["/lib/fancybox/source/jquery.fancybox.pack.js","1fd8677df63ad44ad6a229347ad5a64c"],["/lib/fastclick/README.html","3177146cbb1ed07af3a534ad29b96c45"],["/lib/fastclick/lib/fastclick.js","9fdc45203441104c5ee29156d9c9785f"],["/lib/fastclick/lib/fastclick.min.js","d628c19b574902398a3789279d1dfacc"],["/lib/font-awesome/css/font-awesome.css","4a4d153249701fe32ea8079fdefa1d8e"],["/lib/font-awesome/css/font-awesome.min.css","607137af4714fc297ccf181104acde5f"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","88f7a9f01a071410d3d97f9b8c047e46"],["/lib/jquery_lazyload/CONTRIBUTING.html","21863ceec7600d51d7eff4fe4909bd2a"],["/lib/jquery_lazyload/README.html","e44a24e3444a4673cf1d3c2f80594819"],["/lib/jquery_lazyload/jquery.lazyload.js","06d0c3e01b978afda1b5a2eb295a8bd3"],["/lib/jquery_lazyload/jquery.scrollstop.js","a9d3c1e0718c41c5f65f236623b810ad"],["/lib/needsharebutton/font-embedded.css","92f582b02224588fcc9740be008bf14a"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","a3fed9fff78c960f4575d853b7865b21"],["/lib/pace/pace-theme-barber-shop.min.css","961d6293132661ea37616e90886b7ce7"],["/lib/pace/pace-theme-big-counter.min.css","ee14b379dd0197b653e2d106d2d13afc"],["/lib/pace/pace-theme-bounce.min.css","682ede5c69e3124356363101521494b0"],["/lib/pace/pace-theme-center-atom.min.css","94cde57b5dc31f8f59f6272300e8fae7"],["/lib/pace/pace-theme-center-circle.min.css","cc853f7f936cae081494007b401d2f27"],["/lib/pace/pace-theme-center-radar.min.css","362fe568d6150c05b6247b78eacebcd8"],["/lib/pace/pace-theme-center-simple.min.css","482b874dbeed1522ac34c2eeef6d93ce"],["/lib/pace/pace-theme-corner-indicator.min.css","dfd72a9554d45ef93c07541199b61183"],["/lib/pace/pace-theme-fill-left.min.css","fb8de5982d1f4fe3727ef5f67017a3a1"],["/lib/pace/pace-theme-flash.min.css","5d1a8247558ccd57a999f9a38d50818e"],["/lib/pace/pace-theme-loading-bar.min.css","fd2413965bc786ed9f6a9562c9eaa47c"],["/lib/pace/pace-theme-mac-osx.min.css","70446c65c1de3d3964f2d096cefc1ec5"],["/lib/pace/pace-theme-minimal.min.css","aaa26773ec1488c46ddd7d8fb8ac1a8c"],["/lib/pace/pace.min.js","e584be41d90979ab44a841dff7152dad"],["/lib/three/canvas_lines.min.js","137b5efece8c69106cff7e73a71edc19"],["/lib/three/canvas_sphere.min.js","39a367d5692b51df2ea0dd7f612e257d"],["/lib/three/three-waves.min.js","ff0fa0a798a60cc4e67475e08043c538"],["/lib/three/three.min.js","4a1c8b7ef03fe8766c2107856c3e2f71"],["/lib/ua-parser-js/dist/ua-parser.min.js","eda991570f4d5adb3ea8b96b9fc67f3e"],["/lib/ua-parser-js/dist/ua-parser.pack.js","610fd0a53b602b62c32a9b68b47b2471"],["/lib/velocity/velocity.js","194a8724d75a337027c1308adb0223de"],["/lib/velocity/velocity.min.js","9b361700abe63266f0ec19779a84364a"],["/lib/velocity/velocity.ui.js","4175f97681ad10fee2d2e7d880f74567"],["/lib/velocity/velocity.ui.min.js","8181f0d51abc0384cf5d33cae1e68060"],["/links/index.html","1174022566b9d4e7305b4e6717dfae1b"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","71515eab20727407a719608cae79cf3d"],["/page/3/index.html","9ee65b9effe035dba8c42593a1b96c2a"],["/page/4/index.html","e9e3e92a3fe26e9eec01a968b1e777a1"],["/photos/index.html","8c3c7f4c4bb385acb89def9b0ca5f32f"],["/posts/191ddb73/index.html","ba3695dafd6f13df20f07c202f6d9806"],["/posts/1a195976/index.html","51584a12e1db3b14cae9876a1027c2e9"],["/posts/2292f1af/index.html","9e14685155b973837d5a3e59ef4b0421"],["/posts/2fc77d95/index.html","0aa3f56df56ec83e662c16baed394611"],["/posts/2feacaf4/index.html","2003fafe918b1efedf26dd511dadb049"],["/posts/37f2c331/index.html","33aa635f299d665b4e628f8013881b52"],["/posts/385f0de9/index.html","01d372dbdecd274617311c32cb4b74a6"],["/posts/3caecfa9/index.html","180cec027786443790f3dc73440d61b2"],["/posts/44414303/index.html","e0c6c0b9f9818a72de56ea217f9253e3"],["/posts/456610d0/index.html","734571beca92eda9884d4dbe9340272d"],["/posts/45e51894/index.html","4e6af4717ae7c208e2a9176ac64f9038"],["/posts/4f1131af/index.html","9db1dbaca7d9b4b8f85c0bc11492a1d5"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","d7cb5ce54afa54571ad3f2ad7417fce6"],["/posts/517ebb95/index.html","afa98cc4a36f3c2ccbdb72405feacdf6"],["/posts/53bf1d9d/index.html","4ecf07453a6918804c4662510134e440"],["/posts/554c2ba0/index.html","10a10b29b02e42cf502d058dac8c045b"],["/posts/63556f52/index.html","b0a53b7224f2dddfccf7383c863832c5"],["/posts/6d49ceec/index.html","3154b8a7bf5a0c06cfd096a273454180"],["/posts/6de7d9db/index.html","0cb05ce400e5cd6ab598193497ff3946"],["/posts/6fda249f/index.html","4d5e28e05cb0a069e99e139b396a0b2e"],["/posts/84b87417/index.html","10e48e153d50dafe9fd3bd5519df80f0"],["/posts/8a60fcb8/index.html","732fe2b028a29ee4c188abb7be5358f6"],["/posts/8b4c253/index.html","6a538a0be22d4bbdb251d12135ef349c"],["/posts/92912ddc/index.html","e790e7fceffded67cb933ff77dc395d1"],["/posts/97e5bc9c/index.html","2b70758b573b5c087a9113c5b5d88f2a"],["/posts/9a5c7b64/index.html","68644ae2320358f91f62e498c2bb4ffc"],["/posts/ac7d0231/index.html","a9cccb69cb74d0a7f966ee63d429223f"],["/posts/c311b112/index.html","88a8809d0bce084e2b6c82463e6e946a"],["/posts/c620d4c2/index.html","e4d1078833b36545083829e3e1ead6db"],["/posts/cfc54393/index.html","ee5325c0bd3a8c2800ce4af61d362e9b"],["/posts/dc5155ff/index.html","c048cf58f8b557af87e43c6772f1be09"],["/posts/e1bd836e/index.html","e301b2f592295c44df0b5e708a75d2be"],["/posts/e31c0293/index.html","f9c18c560caf3cf29ead5be48229ab3a"],["/posts/f5fc4461/index.html","83f9f69439c43b0ccdff4249c0d855f9"],["/posts/f8073739/index.html","cf7fcdfc12cfc08ed50624632e0ace44"],["/posts/f97ef43b/index.html","5801127d8fa8417da56ced1a92ab8021"],["/posts/fa84d5fc/index.html","6d590f68bf914600ab618ae345449ebc"],["/posts/fb1ab942/index.html","d84f4b7762e133c961c330466be37e3c"],["/sw-register.js","1fc85f5f08bc8c9776673e280b063220"],["/tags/J-pop/index.html","d6ad46bb4e45c91e1a21bd11689987a6"],["/tags/index.html","65c13ec3960b19f10e0f561e6353bc3a"],["/tags/つぶやき/index.html","5ebc206eb630602372b30adae5f4ebc5"],["/tags/アニメ/index.html","032b27e6e45369c6384b2c0feef62776"],["/tags/インターネット/index.html","7a092b85b94d9cd085a4343f56582e20"],["/tags/チョコレート/index.html","58776875ce7560b2a847ebf7f33422b2"],["/tags/中国に関する新聞記事/index.html","0ae451f4790a202434e41905b1b7a6d5"],["/tags/乳製品/index.html","fc8fd6c39a92acbcd83f79d22469ad57"],["/tags/労働者保護法律/index.html","9e405f94822c799f34d65813c7547f93"],["/tags/心理学に関する記事/index.html","9220844a7008b0ed7ba1a3c02ea106ae"],["/tags/日常生活/index.html","d50e440490ac0b5975637e1557eafecc"],["/tags/日本のIT教育/index.html","a2112d4f65a4f98602b5e986ac7f84eb"],["/tags/日本のIT現場/index.html","621a3617a8bc8de92c9bfbe26e11d9ef"],["/tags/日本のビジネスマーナ/index.html","e4430ba7705f2abd7734c2707c9dced6"],["/tags/日本の国内の人権状況/index.html","52816fb5e42b451a050e87f9900ea724"],["/tags/日本の経済新聞記事/index.html","7e3471e0a4b1c30f4b48637f88d2b17d"],["/tags/日本地理/index.html","5ed57897419d914614ac0c285004bdbb"],["/tags/毎日ことば/index.html","c240ac3ac8472ca138bbd8ee1b570e41"],["/tags/环境/index.html","8e643b1509f249795488ec472181cc76"],["/tags/過酷な現場/index.html","9f68623e0d43af4bdfe7d2ec17cdd8fa"],["/tags/金融/index.html","33aba5a7927f809d6a63028a91308db3"],["/tags/食べ物文化/index.html","623d2378d1f8308c836a7f5eaa52a61f"],["/tags/食品工業に関する記事/index.html","cc0137281d7a9f6710352aad5d4b6c60"]];
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
