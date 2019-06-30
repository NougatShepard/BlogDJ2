/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","e69fbfa936bd6c6f4c0f88e35a89491a"],["/about/index.html","2c73d6dac048b9d5479999f972a5d236"],["/archives/2019/04/index.html","a69554eb20026a74754d251b1e97ad01"],["/archives/2019/05/index.html","5ea1c42673761550c90c3e4eecf31d8d"],["/archives/2019/05/page/2/index.html","846364c10e4bd7995afa9629addd71df"],["/archives/2019/05/page/3/index.html","7ff1fd679ffd4b6008068576497ad575"],["/archives/2019/06/index.html","c487ca0568cf9701c70f34335de2ab49"],["/archives/2019/index.html","8bc855d912ed832804ea38202a2e7841"],["/archives/2019/page/2/index.html","9146c9c519ca9aefd279ef04ac56de0f"],["/archives/2019/page/3/index.html","0e1459617d2f2ff45e7254accf90d2b9"],["/archives/2019/page/4/index.html","9da614f0af78f2174aac205fb534429d"],["/archives/index.html","a4b120ba5e5f66fccc26fa66746b4f88"],["/archives/page/2/index.html","a5767e0f1f5bf0b9d086af60ff2ea4aa"],["/archives/page/3/index.html","f48397983b2d29c7a4160cdf32323bac"],["/archives/page/4/index.html","204e1db31cf91e5320d7be66e1ed4485"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","222770a87d8a7d9d6178fcae072e707a"],["/categories/index.html","553fe32e85c4656d09654324fae22f75"],["/categories/つぶやき/index.html","ba6c1900c943685e37ef431d6ffb2b23"],["/categories/アニメ/index.html","351e850102b0060213cc74c137b0cf4f"],["/categories/インターネット/index.html","fb170811e8500035193748aaee442136"],["/categories/中国に関する新聞記事/index.html","ac1296f5e4ce8cc1ccb9f5d8f98e65f6"],["/categories/労働者保護法律/index.html","8bd1de57f885ac1b4255175f6743a981"],["/categories/心理学に関する記事/index.html","7f4af4c77288cb5c4077dea8cbcb89c0"],["/categories/日常生活/index.html","7276e9cb34c77a2200b3dc0348775370"],["/categories/日本のIT教育/index.html","a24d0082374291f6cc5db4ae5ceb0863"],["/categories/日本のIT現場/index.html","99ecc99a2e72f34fb52637b3ffbecbb0"],["/categories/日本のビジネスマーナ/index.html","4619a1f6d205f6afc4c9d2e4265ecfa0"],["/categories/日本の国内の人権状況/index.html","7b7d190fb057cbc93ab5af8af8bbfa07"],["/categories/日本の経済新聞記事/index.html","7fc78d047637f3745797d8abaf197718"],["/categories/日本地理/index.html","2368929871d07757b03e9521215240b7"],["/categories/毎日ことば/index.html","48081454b51b8267c253336c8c02b734"],["/categories/环境/index.html","a1efe9c649e4f08bf5df766351f1d38a"],["/categories/過酷な現場/index.html","548fb3237bb59c06ba75a1b872608537"],["/categories/金融/index.html","89fb694cf1f9239c4d797d7ecd94b380"],["/categories/食べ物文化/index.html","17b841b5df0f84f334af10f42b7b9d39"],["/categories/食品工業に関する記事/index.html","0848854281d7e8032931b9faf642171b"],["/css/main.css","f6a26e3cc58b7d290a42aa7cd6b7511e"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","fe3e29f403467fa5c3a5650d3c24bb2a"],["/js/src/affix.js","f9fd78c3c80419bc963d67202b57e50f"],["/js/src/algolia-search.js","d2fb3635c10244f2f42426d914f02b7f"],["/js/src/bootstrap.js","c4c2afb8838072474744443f4fb18c1e"],["/js/src/china.js","f7d21d3274746a6478e1751ffa46e488"],["/js/src/echarts.min.js","692f5c54e1599a76abad1cdd752dbd69"],["/js/src/exturl.js","15ddb82a46c41d0950d42d8ddcbdd9b5"],["/js/src/footprint.js","497e271ce71c748176bfe27e439f32d9"],["/js/src/hook-duoshuo.js","47954948fdf58eed56d3818720ca6e33"],["/js/src/instantclick.min.js","e40f3e3971542e2a558592eac12b4915"],["/js/src/js.cookie.js","2e24a464a678c3219480878db98c6c2b"],["/js/src/motion.js","6272de34bbd92c9b297dbbb5a6cfb119"],["/js/src/post-details.js","8282bb1de9b51bd17ca4983dad1a9dff"],["/js/src/schemes/pisces.js","55d8ff964e598790306895abad1e236b"],["/js/src/scroll-cookie.js","d2238f7a2bfeb7b1b112ebba9e870148"],["/js/src/scrollspy.js","81c222496a4f2bffd9271694b579e4c4"],["/js/src/utils.js","b50435739980b949219bef2986d8498f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f3e215d84cd15acf1ab537cc227f4e1d"],["/lib/Han/dist/han.js","3d3d818ba01dec97bdf886a9eebe8157"],["/lib/Han/dist/han.min.css","4122f689dfb914d76049aa90de8d73cb"],["/lib/Han/dist/han.min.js","d5b72c6cdabf34c3e5d48651c253a40c"],["/lib/algolia-instant-search/instantsearch.min.css","95732263647a6ebe590d46c22be8712a"],["/lib/algolia-instant-search/instantsearch.min.js","f7b268774967c998f1b926c57c4c2d27"],["/lib/canvas-nest/canvas-nest.min.js","97e400f3b17fb3ee14bc888d7e31e4bb"],["/lib/canvas-ribbon/canvas-ribbon.js","edd6804548aef29435454c7077985085"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","787197afc82a6cc2e431d70d3beee944"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d847c67020a7b787f071856140c886ef"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","21369600caaa550bb7cb205374d851e5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","36d3417aa5abedf7179dd645aea63016"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4d3cac3a00f22580e60231c1047e990e"],["/lib/fancybox/source/jquery.fancybox.css","a067da39b68435586b20f527e72c78e6"],["/lib/fancybox/source/jquery.fancybox.js","566606e9a3a7b5af4c38dac60b7d1b2f"],["/lib/fancybox/source/jquery.fancybox.pack.js","d6956e1d86cbce4d05c577d951cc6c68"],["/lib/fastclick/README.html","48d775bdbbac4b2f437823186199eaa6"],["/lib/fastclick/lib/fastclick.js","347ee26e0a59d99da0b6259bfa869559"],["/lib/fastclick/lib/fastclick.min.js","d4145f290eb7e487c6aedc7a64e0b721"],["/lib/font-awesome/css/font-awesome.css","9c2843d65cc69ef638c5699c2f1605c0"],["/lib/font-awesome/css/font-awesome.min.css","9c2843d65cc69ef638c5699c2f1605c0"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","1884409f55af154c88eba39c9eadf68f"],["/lib/jquery_lazyload/CONTRIBUTING.html","b54f335098fabcedc344fc4b6ce8b2a4"],["/lib/jquery_lazyload/README.html","b15d4a5bbb5989abb409d36e258daf6c"],["/lib/jquery_lazyload/jquery.lazyload.js","e12ea7c94ea48b5a84c9fe8c498f49f4"],["/lib/jquery_lazyload/jquery.scrollstop.js","3039a83cbaa0120276637bda486b63c5"],["/lib/needsharebutton/font-embedded.css","9d3b070898fcda5ce80412d05b2baff0"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","8ce590326844c2c4d9619eab87ee5633"],["/lib/pace/pace-theme-barber-shop.min.css","2c6130b308b02b5b24140789dacc28c2"],["/lib/pace/pace-theme-big-counter.min.css","91d98151e7b485834954194d4fe2a87d"],["/lib/pace/pace-theme-bounce.min.css","aaeef3993fb418ffe3d19951e17f84b1"],["/lib/pace/pace-theme-center-atom.min.css","101fa7fe3741e73c1397420def9c793e"],["/lib/pace/pace-theme-center-circle.min.css","3fcfab184b6af6fd52266ca24279a7a8"],["/lib/pace/pace-theme-center-radar.min.css","40a259cfc88164f51f77972032c3e4c5"],["/lib/pace/pace-theme-center-simple.min.css","38fff59f4fc8765d66086d758fafff15"],["/lib/pace/pace-theme-corner-indicator.min.css","dac89003aa04e6fac1518d51bf84ab57"],["/lib/pace/pace-theme-fill-left.min.css","b9468f6a08b630d30fd154786788b69f"],["/lib/pace/pace-theme-flash.min.css","39402088bfd182297290a7ffc4c3b09a"],["/lib/pace/pace-theme-loading-bar.min.css","6171f2e139853c6c4dd3e8a0729e0d5b"],["/lib/pace/pace-theme-mac-osx.min.css","9bf85f57e31015a4617e88a69468d7fe"],["/lib/pace/pace-theme-minimal.min.css","ed08ffa137571ddbe66cf2e7e1e0e162"],["/lib/pace/pace.min.js","ee18116bcc725bea712bc76e8e67eb6b"],["/lib/three/canvas_lines.min.js","de2d2802ac3bc7000e089f1176c99e75"],["/lib/three/canvas_sphere.min.js","1ab2dd8772b4ea6173fd23af8d52ddf1"],["/lib/three/three-waves.min.js","79a423419cbd082cac981c4c1b012a51"],["/lib/three/three.min.js","af932a4f17a66b2028c154be55820e55"],["/lib/ua-parser-js/dist/ua-parser.min.js","1b8534782ee9b7a1a4494bece845f0a0"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5653d8b10791bb91a5bd1828ca9aae40"],["/lib/velocity/velocity.js","ef18541b92413dee9ba1026035c9fa0c"],["/lib/velocity/velocity.min.js","bcb6ca8df15f11ceebdb4073872fe343"],["/lib/velocity/velocity.ui.js","734599b2b64b38753fb1147783655101"],["/lib/velocity/velocity.ui.min.js","88dee23ea1cffa0ec29d4fd0e180e827"],["/links/index.html","2bced4c2f609306d667f358bccbf8416"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","23d400b2540862b8a47abf130787d93a"],["/page/3/index.html","41af9c9fa4d4da06408449f6d1a66bf5"],["/page/4/index.html","573c781be2702bc05916f6d0b8ed4f0e"],["/photos/index.html","cad208d11cf160f19e48b6308a62ca60"],["/posts/191ddb73/index.html","c889034dd777e21d41c6e6865abafdea"],["/posts/1a195976/index.html","b7c5b0eaa508ce694bac4294ce522efa"],["/posts/2292f1af/index.html","85ec50192a2841b524e00149757b7ec4"],["/posts/2fc77d95/index.html","2f6b4416e88680b1c94793a5079e3e32"],["/posts/2feacaf4/index.html","2c94d9d0196b5c1be285fdbf61ef2ca3"],["/posts/37f2c331/index.html","e31eb3526593986016f3524be7e975b2"],["/posts/385f0de9/index.html","1721a4828672303bf9492d7baf201f45"],["/posts/3caecfa9/index.html","0d48e7d94d50ca422e71cec14ce2ee11"],["/posts/44414303/index.html","43e8c2b25d2b5dec92fc1c8451979242"],["/posts/456610d0/index.html","35080c91e075beba66ca5c8e9eb69709"],["/posts/45e51894/index.html","76b166c1041d12f77e7819d9a8f2c14c"],["/posts/4f1131af/index.html","30bb1cf6e29c6b7db970aec7bcd459aa"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","4619f06674adc9afaf2bbf67ae0f5687"],["/posts/517ebb95/index.html","2ed3708cf2da0402cb8e8d6b8a05dfc1"],["/posts/53bf1d9d/index.html","79f2ffa29724bba321aa19e4da9a3d82"],["/posts/554c2ba0/index.html","da78ab77356230d0acad1af814b6c375"],["/posts/63556f52/index.html","e535b6e168e1dc3945547fe9f82d7427"],["/posts/6d49ceec/index.html","d72d3be50071d546ac5e6fac159405fd"],["/posts/6de7d9db/index.html","7412adbb8a1426513f146c6720cce7de"],["/posts/6fda249f/index.html","1e7feb3ea99ec077cbac935d2ee7a595"],["/posts/84b87417/index.html","7e23c0cec67983db4d896fb95a5e4e03"],["/posts/8a60fcb8/index.html","61830f0d5716d40415884662955b43a0"],["/posts/8b4c253/index.html","638888f570bcd0fd9ea24b25a5e29c47"],["/posts/92912ddc/index.html","a7f5a2b9d20ebe2c2eb638bcc80af24d"],["/posts/97e5bc9c/index.html","a4a1d5a7cde7aa6910c24f85d3a2683d"],["/posts/9a5c7b64/index.html","baa5042cc9d56c4e045731822b38b6c3"],["/posts/ac7d0231/index.html","f5c8e20fba4365ed5fcc24cd1dc91ce4"],["/posts/c311b112/index.html","6a4351670f98171d542c0dfb249b6e9e"],["/posts/c620d4c2/index.html","a94a2864844a1955fc6d1f237ce3b0e8"],["/posts/cfc54393/index.html","84f5ae132a6f78b2a7f23bd4edb5cb99"],["/posts/dc5155ff/index.html","1581a31a01a10d3e9d65d294757efbaa"],["/posts/e1bd836e/index.html","ca8faefff4b8b525c007e02cd2883630"],["/posts/e31c0293/index.html","0a15433f3767003c2c0d7007ff139726"],["/posts/f5fc4461/index.html","a01537bb2a8ab662c1ab2b2cb460de73"],["/posts/f8073739/index.html","c6bf7d07f794a05a8443152ed986856d"],["/posts/f97ef43b/index.html","2dbf627cb9e57941e079fc551e835aa6"],["/posts/fa84d5fc/index.html","ea7cf7e4846e9db9d3f5bbe6e2d79bb0"],["/posts/fb1ab942/index.html","adb315686d8c7ab3008b123154b00fd3"],["/sw-register.js","f1e2e1976be0fbc469833292e6acfae7"],["/tags/J-pop/index.html","75c1fae26cc962252bc183d1e75caccf"],["/tags/index.html","f14381f0b93d6a4b02ee9ab9b1172c9f"],["/tags/つぶやき/index.html","5e7afd25472c7c88f08120c93a7ebd0a"],["/tags/アニメ/index.html","2a511e02f823f4d4c660bcb57fc84994"],["/tags/インターネット/index.html","42eff3cabb7a2818fed2d115d58f4507"],["/tags/チョコレート/index.html","f8479b849988d1e5c6a3dd7753cd93f4"],["/tags/中国に関する新聞記事/index.html","ac998ac4d73b1ac74fd43b583db73bdb"],["/tags/乳製品/index.html","a75d0b5742e84c996b4fea58b2b6fe3b"],["/tags/労働者保護法律/index.html","62c4f4a644a8c5ea4a86de4234c7fa8c"],["/tags/心理学に関する記事/index.html","22e2a1ac9a0e742e6f747bbd704daa97"],["/tags/日常生活/index.html","9bd747acc897d5f963550c09f32f48f8"],["/tags/日本のIT教育/index.html","267eadbc10452d9133054f391f299f1b"],["/tags/日本のIT現場/index.html","25ac410e7afe8cd642677a32395068aa"],["/tags/日本のビジネスマーナ/index.html","ee6eaf18dfbf904af5058578ee6dfd6c"],["/tags/日本の国内の人権状況/index.html","a603c5d1bede564a99354ec67e0c9686"],["/tags/日本の経済新聞記事/index.html","f05a252b0fdbb11297adba50efdee7ce"],["/tags/日本地理/index.html","14c83aa402d5bd0db2086d9851790442"],["/tags/毎日ことば/index.html","3f3d1021ee7034988f173a8867c9cab7"],["/tags/环境/index.html","e62f9df3b86e9cac845d2a7f0a450ea5"],["/tags/過酷な現場/index.html","d17691b7bd0f52e69bd6c2d0d70e0db4"],["/tags/金融/index.html","0fe72098513ecd6c9b42d380fc52167f"],["/tags/食べ物文化/index.html","9b9d7c54125f073e361b89e7d6e54839"],["/tags/食品工業に関する記事/index.html","8911d6c4d6cebb5950aa58b62013a09b"]];
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
