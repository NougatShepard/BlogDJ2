/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","3046f080dcd6fb476f150fcfe7aeb757"],["/about/index.html","ddad83da6418e105ac68f6f3db0f5e99"],["/archives/2019/04/index.html","556ac8acfc4b3b3513f01ac036ffcec8"],["/archives/2019/05/index.html","c137811fdbe04492606cfbc979144ce3"],["/archives/2019/05/page/2/index.html","31d2d0507a824b566be065237e79f10f"],["/archives/2019/05/page/3/index.html","dc848e653d8ad432adb795658f13d8b2"],["/archives/2019/06/index.html","ee682ea3d33fd0e60270f0a5838d7ae2"],["/archives/2019/07/index.html","c1068e227a2f85d4cb4a050e39789d1d"],["/archives/2019/08/index.html","f702ad9a4a565f3930a4e7a88b242343"],["/archives/2019/index.html","63a07dbc066e8491816ef546ef9c3553"],["/archives/2019/page/2/index.html","47b744a4c7f5d2919693c4d9ca20e741"],["/archives/2019/page/3/index.html","e2ad53b22753dd2a400523e976593d4f"],["/archives/2019/page/4/index.html","c29726222c9f01cbd210d295b5a5b2a8"],["/archives/2019/page/5/index.html","c7d7a31098d9365f8ce91461c73b609f"],["/archives/index.html","94101564b6cc195e909a88d59d1d8380"],["/archives/page/2/index.html","5661bc7479cc75ace2dd42cdf20d47c0"],["/archives/page/3/index.html","e676e9e8f162381f4d25770766c8a83a"],["/archives/page/4/index.html","41834ca4ce3e57cfec135170b6c969d8"],["/archives/page/5/index.html","52c077235813e3433b4609a7a355ee74"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","e8a48a6206f3e4b72e626f3637d7048c"],["/categories/index.html","5682f7c47822b15c12b4d2a372421e9e"],["/categories/ことば/index.html","0808e64d17a7345d6ac0e46d14b9a1d3"],["/categories/つぶやき/index.html","2551e5c994a2d27ea4f0edc4cb241fd7"],["/categories/アニメ/index.html","76f756dd313d803f641f49436cc2bf4b"],["/categories/インターネット/index.html","172130b1c94384392922508fd38f0d51"],["/categories/中国に関する新聞記事/index.html","f84eaabf364aa0e0e7462de7564b12a8"],["/categories/労働者保護法律/index.html","93cfa28f3feeb72a3ffd1fc2e798aa39"],["/categories/心理学に関する記事/index.html","040b6f55f240189970264a93ce7af230"],["/categories/日常生活/index.html","5b394cf48b21d3c14b861bd2f97fdc70"],["/categories/日本のIT教育/index.html","08a4286af1387bdb1b099ae89016e387"],["/categories/日本のIT現場/index.html","2eb063912dce86d39391e574545f0fc3"],["/categories/日本のビジネスマーナ/index.html","a4d7d604cf4c8708601609c8a84ecdd7"],["/categories/日本の国内の人権状況/index.html","071201a1a59422c021f948260b56ee81"],["/categories/日本の経済新聞記事/index.html","1e70a73257aaf2084f13aa2fd24d6dee"],["/categories/日本地理/index.html","e30caf7f86cee963198b6f799cf80aa6"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","3dc81bf2ee10af76ee9f590fbde04606"],["/categories/過酷な現場/index.html","259859884adde3454aeeb6c0c69c02c0"],["/categories/金融/index.html","1b767d20b379d5433ca133d20367634f"],["/categories/食べ物文化/index.html","442f4ddb7c803571133e557d43c58615"],["/categories/食品工業に関する記事/index.html","0238d2f60c657f2c17534e668f0421b1"],["/css/main.css","83d8a40a8138048ad7007cfcfa9e998b"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","108310fe6269dadffdefe68102666bd8"],["/js/src/affix.js","1e1c0608013f6a7f8bac95a8e670975b"],["/js/src/algolia-search.js","981d8040e4da5faccea4e10cbd1d3d94"],["/js/src/bootstrap.js","52195c0f4f6162ffd766e7803b1b1991"],["/js/src/china.js","6022b6ce4ed9394a5e1e531b35721fca"],["/js/src/echarts.min.js","4ca238ef3fdd11efe6ca93ed67a37577"],["/js/src/exturl.js","eb5b63bf8677c468044b9e6322e7be0a"],["/js/src/footprint.js","a2ed9ffcf3cb06ecacbee65de64bd2ed"],["/js/src/hook-duoshuo.js","b00a63eb9d565b39558e62628a412754"],["/js/src/instantclick.min.js","2657b9d6823254ed44792874e73e794c"],["/js/src/js.cookie.js","1ced8425b4e2fe430eb0785ec37a76e1"],["/js/src/motion.js","f7b2987362f7e93c3b354777ca7560f5"],["/js/src/post-details.js","077f63242d097c5a3fa5e49624cef7cb"],["/js/src/schemes/pisces.js","bf5e608c6d9d4b2b3217ac504adabf4b"],["/js/src/scroll-cookie.js","7dc297bde190ef158a705aeb529978f5"],["/js/src/scrollspy.js","45eceae5071963f87a1e626214efff19"],["/js/src/utils.js","cbd71aca09f4a2a52e13e73558b6edc8"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1ae65e8472d82161681551abd389d696"],["/lib/Han/dist/han.js","c697214456d39f9af3f9c8fdc06b6bae"],["/lib/Han/dist/han.min.css","a58e4a028baee8793cd4fb4b2a612805"],["/lib/Han/dist/han.min.js","5d6281bcb66c322477900a302b8bf268"],["/lib/algolia-instant-search/instantsearch.min.css","611c848b385e03ce48657c9e9f6b9d13"],["/lib/algolia-instant-search/instantsearch.min.js","3c149eb85e4f016959448ef6a1a80373"],["/lib/canvas-nest/canvas-nest.min.js","94d70a81c4201e39764907dd16af255f"],["/lib/canvas-ribbon/canvas-ribbon.js","090152c616efc76cbf2bc064b98e3a08"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","22246617f03c597a7455b0180ee90610"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","da31d683f32140fe3f552dcc4f10b007"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","994bd82b38e65bf3413396882cbd6090"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","0c1d89e65e6b09bd5584ec3e9a075466"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","87839ac8db05c11589ae232b451b0215"],["/lib/fancybox/source/jquery.fancybox.css","8f387062dedf1222c519db3e4ea50696"],["/lib/fancybox/source/jquery.fancybox.js","c6ed98e788138b6e663acab9a90af641"],["/lib/fancybox/source/jquery.fancybox.pack.js","8f711ab21f791243940ee56faa6f83c1"],["/lib/fastclick/README.html","01dbf31123c4fac34fb6675db62ee64e"],["/lib/fastclick/lib/fastclick.js","e9f77b7f352018555166b8369207c388"],["/lib/fastclick/lib/fastclick.min.js","f326ae304e55b956625fca10b55ace86"],["/lib/font-awesome/css/font-awesome.css","8175caef68eeee93ad455192734abfd0"],["/lib/font-awesome/css/font-awesome.min.css","8175caef68eeee93ad455192734abfd0"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","3b48342c475ea5cabe7a7052b4df263c"],["/lib/jquery_lazyload/CONTRIBUTING.html","cbbc34f43462c3f3dffd02059a8eb980"],["/lib/jquery_lazyload/README.html","5b56bf1a4b0a63ac912e5f7ff9ba1f01"],["/lib/jquery_lazyload/jquery.lazyload.js","2548cfef23ca6ad4dbabe9b963829a01"],["/lib/jquery_lazyload/jquery.scrollstop.js","fd8c4e587328e2b691ad2f59ef58f4ef"],["/lib/needsharebutton/font-embedded.css","e4b01add8d36e1bc639568f81b91748b"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","fd540100b8ada8b9cb7f5c99a50cd95f"],["/lib/pace/pace-theme-barber-shop.min.css","e0a4cf2265f59a15812ab0523f83cf7f"],["/lib/pace/pace-theme-big-counter.min.css","8f530ee6df8443356d523ac8a33d21e4"],["/lib/pace/pace-theme-bounce.min.css","fa2cec64a4273646e82ccd1765996c88"],["/lib/pace/pace-theme-center-atom.min.css","d42547f5926c8f197e6707f2e93420ae"],["/lib/pace/pace-theme-center-circle.min.css","3bafd3d0dbde541d1a8098703a4ab5e5"],["/lib/pace/pace-theme-center-radar.min.css","fa75b82e1f11038ebf676b0271f63a98"],["/lib/pace/pace-theme-center-simple.min.css","cd20b81352aa407ce03eaabac62a5e10"],["/lib/pace/pace-theme-corner-indicator.min.css","1dbb0f6b33be1545cb62692ae0327b54"],["/lib/pace/pace-theme-fill-left.min.css","309b56941217a356be49f33eea2a655a"],["/lib/pace/pace-theme-flash.min.css","3de89caefe26cc52dce4d393be0a1ab0"],["/lib/pace/pace-theme-loading-bar.min.css","fabf77c59b8fbeb8c53856a11314bc75"],["/lib/pace/pace-theme-mac-osx.min.css","9b9154c822fbbb4691df3cda61814f94"],["/lib/pace/pace-theme-minimal.min.css","4df1ec796be378372d867f8b7802d6c0"],["/lib/pace/pace.min.js","3e1c8464da4be63c2e8f35d244b1b35c"],["/lib/three/canvas_lines.min.js","72e207b093116c35a099ddc3e28dd151"],["/lib/three/canvas_sphere.min.js","f93bd348f6b211e7ae74d6991f3c8637"],["/lib/three/three-waves.min.js","124b391c82421b01d3c4b25762c5e1b6"],["/lib/three/three.min.js","c9452dabaea8518d7a33cf270a30002e"],["/lib/ua-parser-js/dist/ua-parser.min.js","216ba956114188c67cd6acd8e1118360"],["/lib/ua-parser-js/dist/ua-parser.pack.js","57b3aa151b16ab33cfdcff038cac301e"],["/lib/velocity/velocity.js","5b042be1603d6886ba681373bf49d985"],["/lib/velocity/velocity.min.js","4401c5661078516d9d7a6e547c6acc74"],["/lib/velocity/velocity.ui.js","3994dddf03a3670fa9a7f18e687ed8e9"],["/lib/velocity/velocity.ui.min.js","65f07a029af16e30b7b28e17e26ebf75"],["/links/index.html","92614be561b729d28c09eb5da1dae168"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","eaa95f38cec346cc41402e67768dd55c"],["/page/3/index.html","2c8bf175c27aa53ac35f9b7cf1d11013"],["/page/4/index.html","77639e80fcc637f7e0cec3f6b8438c18"],["/page/5/index.html","acc2eb3e33f648eb7031240d277fd3d6"],["/photos/index.html","ac72dfb7f6c420c61ac15617fd1b702c"],["/posts/191ddb73/index.html","7ea28f8f8512c97bba0b76faa164296e"],["/posts/1a195976/index.html","0676afd6e242ae2e0f470c1017788daa"],["/posts/2292f1af/index.html","0683463dd7f6149a043b082a61b10852"],["/posts/29d57d6/index.html","31ae572dced76f92d1276d6d9b6dda05"],["/posts/2fc77d95/index.html","f4f38fbfc9c5aaaa46e9bb92c13a96b9"],["/posts/2feacaf4/index.html","84360f10026f323f72686e7d1664a37a"],["/posts/37f2c331/index.html","ed85ce090059d924b44a71e3723535d7"],["/posts/385f0de9/index.html","395b77082f9e0bccfb8838f990544f77"],["/posts/3caecfa9/index.html","33de4b56606c3805fb15c083a7a617ba"],["/posts/44414303/index.html","6451bf0e956b6c74860b0fbef7f44db6"],["/posts/456610d0/index.html","61e077c467581cf3f90bb985c08086f0"],["/posts/45e51894/index.html","1a14ff46c101f02f1ea1c208fbd3ec72"],["/posts/4f1131af/index.html","62c8d25efc54615e06dc5a9238d8b448"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","5e15098065f8da9150ee195bc2d2a35c"],["/posts/517ebb95/index.html","be69f80c41d22ce980c4648055b7e022"],["/posts/53bf1d9d/index.html","cb12ca366290e58d7f849ff9e9bfa1bc"],["/posts/554c2ba0/index.html","80ef781287d6fc5d4d6e4133733bce41"],["/posts/5f093cf/index.html","7aeb5b29174789497947432995d44420"],["/posts/63556f52/index.html","65da8e5a462a3c37fe558eaa1d7a6a7d"],["/posts/6d49ceec/index.html","a7621e60b54ccf187e10e3686afc0dee"],["/posts/6de7d9db/index.html","0ad033b287046245f73e71704f70d97f"],["/posts/6fda249f/index.html","f4d937cfff3edd1a5c3869be3f4a5ab1"],["/posts/72f7a359/index.html","4f14ca3b1dde55e817e1e4036df1c433"],["/posts/759a6740/index.html","2dff1a657cc336aa169ed9203776ae9c"],["/posts/84b87417/index.html","73ba7ccbf0fa4d5d7cf5f7bb39ade0c4"],["/posts/8a60fcb8/index.html","7149e89bb421156610d6d7aaa7b519e6"],["/posts/8b4c253/index.html","6cc1bb730c7c2ed4414ec7d7457b002f"],["/posts/92912ddc/index.html","76f2cd15d8ddc5708ad870bcdaf5f00c"],["/posts/97e5bc9c/index.html","9245df932dd855ca2d16fb6db6eb7e2f"],["/posts/9a5c7b64/index.html","3354d4bf25c2f477a08eed357ac8a367"],["/posts/9cf9c275/index.html","ffc73ec0dc627a40285f6f26f8d7101c"],["/posts/ac7d0231/index.html","8cfec54c4facc6ae24019fdb1352a288"],["/posts/c311b112/index.html","4bbd80d23768fe6d9a39888fb02813fa"],["/posts/c620d4c2/index.html","aaa0d203b611fe0be38ed0ff19ad55d3"],["/posts/cfc54393/index.html","7b38db2fecda934ecc020172216f8a9d"],["/posts/dc5155ff/index.html","6bf4cdab0a3d1c13ecf4b30703c27ae0"],["/posts/e1bd836e/index.html","38d19a979914e33516c39f56d2f74987"],["/posts/e248bec8/index.html","6e6557908e86f22cc0f2182db740af44"],["/posts/e31c0293/index.html","730dfdf57bcd2c77b276032966a77e00"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","3bd228cc23c978afc1da758f2ecf64ff"],["/posts/f8073739/index.html","f27c54e00eaa70962884234562db7ec8"],["/posts/f97ef43b/index.html","39074469b4eca52872d9aa13bc9d618f"],["/posts/fa84d5fc/index.html","f77ac8569df3b0c10a8aca22e35554c0"],["/posts/fb1ab942/index.html","98c750192ee0b1d4e1b122254e9cc96c"],["/sw-register.js","f84578ecec401369cc0b5bbd33226c10"],["/tags/J-pop/index.html","8c0e52c6d1808b1cd5e0cc31155d93e2"],["/tags/index.html","ba818ab0058db58710088559ad8d393f"],["/tags/ことば/index.html","7945cda48ded8cb568fd531527c09ebd"],["/tags/つぶやき/index.html","0123a87a43f3ec57f2fc14ce8f776d23"],["/tags/アニメ/index.html","69b0b24ed6729e589ebc798a3c1da276"],["/tags/インターネット/index.html","ad830b5a49be09b20928d56d401aa930"],["/tags/チョコレート/index.html","707b051c3cab5519b7fadffe2add254a"],["/tags/中国に関する新聞記事/index.html","7a0f7eb10d242945578bcb803151a2ea"],["/tags/乳製品/index.html","d6507c7096c4ced8b683cabaa47c9282"],["/tags/労働者保護法律/index.html","0e876a4536703e18cbd5552846bcfcda"],["/tags/心理学に関する記事/index.html","ac71d96a6da08f14eb27a962e2bee788"],["/tags/日常生活/index.html","254579f8cfefc9ea7dc9d17c318d9b6d"],["/tags/日本のIT教育/index.html","45682c3802066f2f6122a78d27bb5dbe"],["/tags/日本のIT現場/index.html","7e25db9dd52ac70b03d3e6200e96c086"],["/tags/日本のビジネスマーナ/index.html","5c0469d74ec5d9794e18600868f66c05"],["/tags/日本の国内の人権状況/index.html","76f51ff35e43b54ddb8db870bf7d23a1"],["/tags/日本の経済新聞記事/index.html","155eb571245d2800812b4319b1a17465"],["/tags/日本地理/index.html","217f562c368c5c187e06e39addbd8840"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","bea234f6ff5295326445d68f8168ba10"],["/tags/過酷な現場/index.html","d75d7da0cb099c355eeaac5435a98105"],["/tags/金融/index.html","2c26628df891ecfd8ca64fca24a1f493"],["/tags/食べ物文化/index.html","aebbaffda4e9f8e5132958fa75d5bc1b"],["/tags/食品工業に関する記事/index.html","ab84ebf36eff481bbf0a8b2233d22d5f"]];
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
