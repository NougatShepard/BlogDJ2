/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","984ccfbcf7c4eaceee8a95e18674fee6"],["/about/index.html","ea539ba4bd1046ed4ddbe3f0bcd5170d"],["/archives/2019/04/index.html","9599d97dc9b6936a4eaf0db610c50521"],["/archives/2019/05/index.html","6f07eee1ca886045914e6e51e4f3531b"],["/archives/2019/05/page/2/index.html","7c03801b4f21a589b512c83cf0ccce69"],["/archives/2019/05/page/3/index.html","32b13789fe53dc332fa253baeb953e1d"],["/archives/2019/06/index.html","11efb51d2bd6a590acfa7a7341551c6b"],["/archives/2019/07/index.html","2e48351c99d7bfdbd7d2167c62ef7835"],["/archives/2019/index.html","acd98ca7554006ac8543d4dd899fc87f"],["/archives/2019/page/2/index.html","61f723aa767eaf6acbf2416d29d2e4f5"],["/archives/2019/page/3/index.html","aedef7ed93222086725201bfc6b99229"],["/archives/2019/page/4/index.html","d82258a63e41a46468be229309b11c66"],["/archives/2019/page/5/index.html","768ea8d994d84d3a7a673c9c5e08d1ce"],["/archives/index.html","440a54c1ac45e87439fbea622f6ebf85"],["/archives/page/2/index.html","45814a733af2dac988b7ffd74a55d4b1"],["/archives/page/3/index.html","7e9843a216d3ce081e3285c3cc5a9bc5"],["/archives/page/4/index.html","9eeb5fbd9b758f89bbe0e6ac0fd3976e"],["/archives/page/5/index.html","cb7837ee08deb5e3001545b09d6a21fd"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","a0f29162d8ace9fd204539f99f068d5f"],["/categories/index.html","f68d2fd67042b5485eeb6b046b99aed5"],["/categories/ことば/index.html","5d9651952309e9e7bf335e5e409ffd07"],["/categories/つぶやき/index.html","a308ddeb80ed5bd3d21bdaf35279bc69"],["/categories/アニメ/index.html","1dc1c334da037c7d2157f483cc4a11e5"],["/categories/インターネット/index.html","d7c49858a52213bfb3284b16583758d9"],["/categories/中国に関する新聞記事/index.html","f646dbcd0a0fde347dff1f336125b766"],["/categories/労働者保護法律/index.html","767f5ac00a8f3f8180145519c8627d2f"],["/categories/心理学に関する記事/index.html","d4656f9e1039b1f7a3d143db321d01ca"],["/categories/日常生活/index.html","f53e7d206221b7eb555f692b17ada6d5"],["/categories/日本のIT教育/index.html","461744759a501fcf3d6db5ef6f98ffea"],["/categories/日本のIT現場/index.html","e4b1d273c9ea58b75247ae6a40ed2005"],["/categories/日本のビジネスマーナ/index.html","e2eb118a790ac481aaac736e8a47a4c8"],["/categories/日本の国内の人権状況/index.html","9e9b1f8646ffa69de766d2b00b90eba0"],["/categories/日本の経済新聞記事/index.html","f9b26f37f3b51447c690106a173edc5c"],["/categories/日本地理/index.html","7625fb588a0c62c6cd8d0eb82c3f2adf"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","7324f2d28810e3544936d900856d88b6"],["/categories/過酷な現場/index.html","78759e46fc1cb249a0a5dc5fed19f451"],["/categories/金融/index.html","1df32a65a7487659a20c92fc5fd37b42"],["/categories/食べ物文化/index.html","cb7a714a6ecd3c05834c5fc4e5a36aeb"],["/categories/食品工業に関する記事/index.html","b8713d88a6f8d33d883c19858c8b45f5"],["/css/main.css","967ad0f0fa71e864ae71ed0b61dcf6a9"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d89d6510b99ed27152d3fb012a3b5278"],["/js/src/affix.js","f8979b9f34e89c22c870aca598fee5d4"],["/js/src/algolia-search.js","cf0871884cd37b0bd3f58c997f10753c"],["/js/src/bootstrap.js","fd47f8585bdbb7c6bf9853ea3771c559"],["/js/src/china.js","ed9aa5d1e86fc12d02d6859d4c3a413b"],["/js/src/echarts.min.js","1a718cfc55dced33a8c56e8bbd706a68"],["/js/src/exturl.js","020558409fdec17359fc0c88974fad2b"],["/js/src/footprint.js","43cf4f672f05737ff0e61f9683848076"],["/js/src/hook-duoshuo.js","cf6f831818ed87c8341ea010242790e0"],["/js/src/instantclick.min.js","45ba1641bfb8bae85b97f306bcd2ebe2"],["/js/src/js.cookie.js","84f02571d9da050802c3a140acb4b04d"],["/js/src/motion.js","b78da002a2c40a5e111137fd3db5f84b"],["/js/src/post-details.js","25b192f4c36a3a1febc3238ac0f6115a"],["/js/src/schemes/pisces.js","d019bf061faf860420281e585a42672b"],["/js/src/scroll-cookie.js","ac1d9c4c5dabc80b8d1082f5e05c9ce5"],["/js/src/scrollspy.js","76397a27500345a7073c103e4c8f367d"],["/js/src/utils.js","4065e5094de70aecd5d9c9e92d1ccba3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","bf1f36a3322b5dd549f5211edd855a3d"],["/lib/Han/dist/han.js","2b76ca985c672efa3089dd2c4c7526a3"],["/lib/Han/dist/han.min.css","026779f9dab41a67314db0259ab7939c"],["/lib/Han/dist/han.min.js","74d072f1212dcdd8035f0341c6900f15"],["/lib/algolia-instant-search/instantsearch.min.css","ad07c894de8a7e02341d30f686a099b9"],["/lib/algolia-instant-search/instantsearch.min.js","201d2e38e3e74408759cbe1d4b09e714"],["/lib/canvas-nest/canvas-nest.min.js","d9c1c5f4546b76516248edc100dfe1d0"],["/lib/canvas-ribbon/canvas-ribbon.js","e66183da84b782c3b82ca555ba3aa3f1"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1540138da830cfdcc458f25dd73a78cd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","029354a2ce3ab1a14e0b941f1bfb8e4c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9ec4e4c12d810e2f574de60e29f47d24"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","bbb15f0301204a72f52167289c49dd94"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e2670aa849ba6df2d0d9c8ae38a118d9"],["/lib/fancybox/source/jquery.fancybox.css","4e9b3c9946174dbae85a3dcc1551e5b8"],["/lib/fancybox/source/jquery.fancybox.js","b50bb0236f5497bee32953543aa34d00"],["/lib/fancybox/source/jquery.fancybox.pack.js","9b6073ddb51c3139fd55d22650310459"],["/lib/fastclick/README.html","087c131c8907683bd265a5efa4580045"],["/lib/fastclick/lib/fastclick.js","f8b925c3eb17a109805b978cfb6c63c2"],["/lib/fastclick/lib/fastclick.min.js","ad433ceb68c8977cd0b216d591c3d52f"],["/lib/font-awesome/css/font-awesome.css","b4726ce9e04bf661c75a9e256b57bfad"],["/lib/font-awesome/css/font-awesome.min.css","f81ce04ea73adbdc544c772ea2f06f59"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","4d544abeea9e96045a94a5d0b5f4a92d"],["/lib/jquery_lazyload/CONTRIBUTING.html","0e11b16fd30728393ff36f1dfd9b10d6"],["/lib/jquery_lazyload/README.html","f5afecf2507033d5f4ca81f7929d7543"],["/lib/jquery_lazyload/jquery.lazyload.js","968de0a15fe822a825e661024b488597"],["/lib/jquery_lazyload/jquery.scrollstop.js","b3e80d646445aa38fc2931789cff14e7"],["/lib/needsharebutton/font-embedded.css","f646069b386a4eaa7ec969822ad24a65"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","c1c8dbba34aec50abdc26f2253bde62c"],["/lib/pace/pace-theme-barber-shop.min.css","7e071c49c11ea27850942d944c8da5b8"],["/lib/pace/pace-theme-big-counter.min.css","c7e89f6de245a2ae737be1ea901693ec"],["/lib/pace/pace-theme-bounce.min.css","adf31e75f763935a55351a603c2bd76b"],["/lib/pace/pace-theme-center-atom.min.css","08f945fb933509b8732a2643af4723d1"],["/lib/pace/pace-theme-center-circle.min.css","cc9ff406807e9fd04ffcde6724ff95a2"],["/lib/pace/pace-theme-center-radar.min.css","2c148146aa3db420b5d74690142bc928"],["/lib/pace/pace-theme-center-simple.min.css","7d7b689cd1f604fde8935ff8e6c5dda6"],["/lib/pace/pace-theme-corner-indicator.min.css","dbef6f8e7c4ff3920faab9b79aa8067f"],["/lib/pace/pace-theme-fill-left.min.css","4c5218e222202562d6285f9d2f2f95b8"],["/lib/pace/pace-theme-flash.min.css","19298256ad1bdca52cda4299da72910c"],["/lib/pace/pace-theme-loading-bar.min.css","3ee1872666735ef7653dddce47444d67"],["/lib/pace/pace-theme-mac-osx.min.css","a623d619d43cf807675dd711927f87bb"],["/lib/pace/pace-theme-minimal.min.css","ac3f53fe07a98e21e070a3085a38d4ed"],["/lib/pace/pace.min.js","7e3f24442ca137e202e01fd738526c37"],["/lib/three/canvas_lines.min.js","bcec9b4ec2ac5a3da3e37b9e394fa9af"],["/lib/three/canvas_sphere.min.js","93de31e8cdb7b60f30601b1ce753f0ab"],["/lib/three/three-waves.min.js","ee32143d319b953235736f9da9695eb1"],["/lib/three/three.min.js","0ca3e775aad8f9d09776094950ef7d68"],["/lib/ua-parser-js/dist/ua-parser.min.js","cf6c21b1038a8b71471e6b7103aae0c9"],["/lib/ua-parser-js/dist/ua-parser.pack.js","29227d2b6b460a0b95d584dabe838db6"],["/lib/velocity/velocity.js","c4ac83722900d5330b81dab4d82e6e7c"],["/lib/velocity/velocity.min.js","12c4a98130792b550b30e0dec80bae67"],["/lib/velocity/velocity.ui.js","6a272fa875f148662ce490bd6e83abd7"],["/lib/velocity/velocity.ui.min.js","0ea73e65cf08d5efb35904fe93d553f1"],["/links/index.html","efc8afc8ec32ad744a12d0dca94413b9"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","e6628f47cbcdd76aa11359002f13183c"],["/page/3/index.html","a6b318af3f6198415c85b3dbfc8db44e"],["/page/4/index.html","3c09efa842e6d923d7c495f5a277f026"],["/page/5/index.html","efd4da15234ff1e6b1039c3b00d89ba9"],["/photos/index.html","5b526af28b7b84154aac3faaa2d0bf4c"],["/posts/191ddb73/index.html","94d83824af716f847d3c03aa67b7c964"],["/posts/1a195976/index.html","dc3de0d215c9d6634c5f772aba3c11a7"],["/posts/2292f1af/index.html","63c3fe20e27717ef3965b7e276e45bdf"],["/posts/29d57d6/index.html","d644011f70e7b69bbda1840a8c1eedf5"],["/posts/2fc77d95/index.html","5e20c690fe874da083182c194ebd059c"],["/posts/2feacaf4/index.html","0a1b3232822a8c776cab5b8576d069ff"],["/posts/37f2c331/index.html","d8568ed472b9a067bc25cf32563f760d"],["/posts/385f0de9/index.html","82a1cd7b11c16c5e0610e35dcc0f470f"],["/posts/3caecfa9/index.html","951882062b89691633b49be1b25f8162"],["/posts/44414303/index.html","8c1973787f17aef8733174111a520a5a"],["/posts/456610d0/index.html","9c4035a618ec88525a31ee77145e18e2"],["/posts/45e51894/index.html","11905249d21106b87a674b220b975700"],["/posts/4f1131af/index.html","4ef8f0c8734b7e91385a75759b53ba52"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","0809b2f8a2a7457864151a4cb0d646bd"],["/posts/517ebb95/index.html","0e052b9e4f62ee0d7f09e0f866c97992"],["/posts/53bf1d9d/index.html","14e6279dfff0a7332bd42284f13fc1a5"],["/posts/554c2ba0/index.html","3b234766d275e7780f6a3e444afec0b2"],["/posts/63556f52/index.html","8176abf88a451bc1070ace861cb5b597"],["/posts/6d49ceec/index.html","f8645174e53d3053b1a271229fb1c624"],["/posts/6de7d9db/index.html","f7aff4bedece1b0a5cabdfe7f248c2be"],["/posts/6fda249f/index.html","25a64bcfae83d39fa5947d0296d353ba"],["/posts/759a6740/index.html","684c08543f8a676b12a6988b16f17920"],["/posts/84b87417/index.html","aa86fb39c302c2e697aeb1482107fb7e"],["/posts/8a60fcb8/index.html","0258bfd0c474e02c4c916a93985fb20e"],["/posts/8b4c253/index.html","49f48367f07fe211052ea8ec1b58a55c"],["/posts/92912ddc/index.html","3e68d764123a526e3664c659ffe2b75f"],["/posts/97e5bc9c/index.html","8bf35b00ab82971d80fde4eebd76ff9b"],["/posts/9a5c7b64/index.html","2d7e39a350e26614d4ee90e097a7acf0"],["/posts/9cf9c275/index.html","5f98055eb977b90f940b24ad0068bd2f"],["/posts/ac7d0231/index.html","bb756515e4aa2be0859f0745f732520d"],["/posts/c311b112/index.html","46aab186677586989c722b91ea1cabc3"],["/posts/c620d4c2/index.html","4ea6e9b8b9756defede6e1cede4dba81"],["/posts/cfc54393/index.html","62738c8487ff8016a31930bdba6860a2"],["/posts/dc5155ff/index.html","cc91fa2f347cc61ad08efca76091c749"],["/posts/e1bd836e/index.html","f49a48c953a2158f1608025d2258195a"],["/posts/e31c0293/index.html","ae3be8fb35cac4ce8b78052c8ef37bb4"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","c66dc35443c01f01f32055dc3650e1bc"],["/posts/f8073739/index.html","c84fecf392f6cec3221364fd50aa9fe4"],["/posts/f97ef43b/index.html","be83540b81eb3f801d8a024fed8376a0"],["/posts/fa84d5fc/index.html","23685ea3b207ad36b274f46140aa50d2"],["/posts/fb1ab942/index.html","52494aad735f0e308e8788779db0699f"],["/sw-register.js","32176ec1220577b99add84eae9dd1ee5"],["/tags/J-pop/index.html","98ae026897c511352604d8be4157e7de"],["/tags/index.html","58a19a022e2533b69ea29d02158d114d"],["/tags/ことば/index.html","26231f86ffb9ec794747779980b97ffb"],["/tags/つぶやき/index.html","5d55a8df9db639bded3d5f6da5da2c9e"],["/tags/アニメ/index.html","46330a03110d68844233eb692c676659"],["/tags/インターネット/index.html","c4ff8b7460e7c00a07e4c409a9158a72"],["/tags/チョコレート/index.html","c07ced8b49f31cb111173800f74c69af"],["/tags/中国に関する新聞記事/index.html","0506083905a20a1dd99ab404a095e033"],["/tags/乳製品/index.html","d8d5700fa7fe22672ff4d8eb22537f03"],["/tags/労働者保護法律/index.html","5bde8deafdc821139c9ebf8e78cdba39"],["/tags/心理学に関する記事/index.html","b8feda460b2d4bc3cb476efa8da00406"],["/tags/日常生活/index.html","d908c1968eb310ca6593c04086b22bac"],["/tags/日本のIT教育/index.html","e94bcc6479dd3fecb2ff599f04a2655a"],["/tags/日本のIT現場/index.html","c815c2d9312df1e9f908d40593002d7b"],["/tags/日本のビジネスマーナ/index.html","7cae4d727c1a0b0fa6ae95a1c7b2ca8c"],["/tags/日本の国内の人権状況/index.html","cd176cacf969a52dfb4abe11ced19a72"],["/tags/日本の経済新聞記事/index.html","ec42e6880811577be0c21b42c6436764"],["/tags/日本地理/index.html","156aab979b8becb010cea24fa385aa6b"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","8dc53d6536266ae6fe1dada84f11ea70"],["/tags/過酷な現場/index.html","26d2f8369603f3f313d17af44e4e0aea"],["/tags/金融/index.html","a5fcae18a218cbd58e7b6427b0d29b94"],["/tags/食べ物文化/index.html","2b248ff8c984522848e24f050e17d44d"],["/tags/食品工業に関する記事/index.html","370fde9c9df8df934356de4fc5867eeb"]];
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
