/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","2c11bdefe3f0ac9c68acbffbd42bc867"],["/about/index.html","0f0d874a1f31a2748c23c69687b4b1ad"],["/archives/2019/04/index.html","bf2e6f4929a4b98ece0366e1bf77c7c7"],["/archives/2019/05/index.html","a2a8704f4b7bbb24e015e4eabbbb8e7b"],["/archives/2019/05/page/2/index.html","eb408357399cb5291851d2b6b8ce61ca"],["/archives/2019/05/page/3/index.html","f55b0737bea55bf71721a238be06d410"],["/archives/2019/06/index.html","0cc50bc1e1713fbea693431ad9f82e76"],["/archives/2019/index.html","c63acb11035d353276007f432bda530a"],["/archives/2019/page/2/index.html","7fe2fe1042a948ed085ddca31853071b"],["/archives/2019/page/3/index.html","5796f79eca046ce48c1bd1c0b64239de"],["/archives/2019/page/4/index.html","b953bf2b62dbf66ce5ed6c2a6eb363d2"],["/archives/index.html","3ec825bcae6fa5492d1415172ee24b9c"],["/archives/page/2/index.html","99522f8bc9fc9bf7b1ffd36a16069ff6"],["/archives/page/3/index.html","87b5a021cc7d3cfff039a4df9ef64392"],["/archives/page/4/index.html","4a7fd2a15097f23f038eddd547c89469"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","a44226c223702c0f7e8b2c568223a9b5"],["/categories/index.html","d4294f3e538791ccebc76aaa8d309755"],["/categories/つぶやき/index.html","c64ef29ad5f1adc24b6910359c1ab93c"],["/categories/アニメ/index.html","caab01b443916c2d506d6ba952d0223b"],["/categories/インターネット/index.html","47483a6c8bf061835380cb99df4fd9b3"],["/categories/中国に関する新聞記事/index.html","e67f8dc27fc0d69461ea3a47b2947e21"],["/categories/労働者保護法律/index.html","c748f2b85c482425d7302f62679bca3b"],["/categories/心理学に関する記事/index.html","406a4a7e62e597d9372271f49a25e635"],["/categories/日常生活/index.html","b3995245c024220a54fe7937963f1710"],["/categories/日本のIT教育/index.html","4e6019d4c1b73f40f8b8732afe6066b1"],["/categories/日本のIT現場/index.html","0e92fc70bb6cb631c4d678dd79565a72"],["/categories/日本のビジネスマーナ/index.html","23471d9b049a115a7a8eec1a649a7644"],["/categories/日本の国内の人権状況/index.html","429743078ec3917da10a4a085fd55b7e"],["/categories/日本の経済新聞記事/index.html","dc1904a2a717de558bf0e68de4ac3c59"],["/categories/日本地理/index.html","46f5a168d83935b65a18b4bb4ebce901"],["/categories/毎日ことば/index.html","97d017c617681f95b7928232fba0b530"],["/categories/环境/index.html","b7f2f2976a4f6ef9ef2f34858acdb75b"],["/categories/過酷な現場/index.html","29753b2da09e37a8719eb5ebba811ad1"],["/categories/金融/index.html","9b8b0bba117c40a33baaf90626902657"],["/categories/食べ物文化/index.html","f6aa136cc64ed7709bdea69706648ec2"],["/categories/食品工業に関する記事/index.html","3ba737323ec362f09903978e3d4617e6"],["/css/main.css","3986ba00c96eb5b591c8f557b19ad652"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","43bda0bf8baca6ff6d2233ffa424af7a"],["/js/src/affix.js","bd4164d21ab03bd0886fce090e0da049"],["/js/src/algolia-search.js","89a1f18bdaeee82f9ecae15f8ea4090f"],["/js/src/bootstrap.js","938b4f4714b8b74887b72813e9a6d8fd"],["/js/src/china.js","010d2b24467cd9ec071f249dc683b2cd"],["/js/src/echarts.min.js","b246a57d8edf7d2e3f0043a160f62ee8"],["/js/src/exturl.js","dd4559b2945193aa051d2de69d73294b"],["/js/src/footprint.js","24a7a8712f245bc4a58b69eb7c3ca438"],["/js/src/hook-duoshuo.js","79329c5ccd6c731de38d7eb244c48d91"],["/js/src/instantclick.min.js","e3841b852df130b3aef2cafe01f2f9f2"],["/js/src/js.cookie.js","1ad8e75c3bd2acb566efb111ac8c6f55"],["/js/src/motion.js","1219f201c0dfd0de3e5cbd28dbc07f15"],["/js/src/post-details.js","5de05c07d2bc78ecf18fc7fcb6babad3"],["/js/src/schemes/pisces.js","fd40884fd1f03e398bc1e6713859bcd5"],["/js/src/scroll-cookie.js","46931084d5cb0600a5fef6fcb206993f"],["/js/src/scrollspy.js","31efd1ef9f1f753d990acec1fec8cb44"],["/js/src/utils.js","9ea63e8ea48103c561b89bfbd4638510"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1f315597edd51502effc5ed69e36fd41"],["/lib/Han/dist/han.js","67a72700d3b8b466a1383ce341c3c555"],["/lib/Han/dist/han.min.css","c75aff5c1cd14e4b7f15fd97ca13c7ec"],["/lib/Han/dist/han.min.js","516bb62a90cee668578dc1fdc62aca7a"],["/lib/algolia-instant-search/instantsearch.min.css","2ddfa26218980709c4260898208942f5"],["/lib/algolia-instant-search/instantsearch.min.js","949814305dd24cc63eb61de1f4f4e51a"],["/lib/canvas-nest/canvas-nest.min.js","c7dcd63a01fe37a10c512839df72c597"],["/lib/canvas-ribbon/canvas-ribbon.js","e3489929538b1c24eef7acf06f80d85a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","71bcd56a332e2d67ddcc875e733613c4"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f3cdfb218fa018c6a5684c8c412c98f7"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","cbded19a533be7e72b9b4a72bab9f2c8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","88186a230d88e07b0a0bf384038dcfa2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cbdfad21c9bc218a2079478654b995e2"],["/lib/fancybox/source/jquery.fancybox.css","7c60063539ae7cc1daf639a3617f7dd3"],["/lib/fancybox/source/jquery.fancybox.js","c7d725ba8b919cb03173d0a45dc76362"],["/lib/fancybox/source/jquery.fancybox.pack.js","c4e3f6aa8d0331873c733f12a8ae274a"],["/lib/fastclick/README.html","a12a4db067c73b82291585d4ad3f6287"],["/lib/fastclick/lib/fastclick.js","7c8abadc22a7409f380613dfa9ffc7c8"],["/lib/fastclick/lib/fastclick.min.js","f9a39cc84d3bdb09e876d7603dafbd3d"],["/lib/font-awesome/css/font-awesome.css","dfbfd61a734d561bb47de514ae434b61"],["/lib/font-awesome/css/font-awesome.min.css","dfbfd61a734d561bb47de514ae434b61"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","aaa738fa52de2ea0fc40d3be26b9b7f7"],["/lib/jquery_lazyload/CONTRIBUTING.html","d73226835f0a20e5157a5d31e1ee773c"],["/lib/jquery_lazyload/README.html","d82a3d5a03f541b373cc6e5903fd2986"],["/lib/jquery_lazyload/jquery.lazyload.js","a358e35836090a18df4e6496bc993a4a"],["/lib/jquery_lazyload/jquery.scrollstop.js","a7c2170c262bac22f4646226fd4bf944"],["/lib/needsharebutton/font-embedded.css","ab3052d3a8e43ebc71cf03f9b36d2091"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","0ae98afc65ce100056c1e28a102707d8"],["/lib/pace/pace-theme-barber-shop.min.css","0737ffce19d968ae6af408436e84e86b"],["/lib/pace/pace-theme-big-counter.min.css","f1c4259c87c1608450ced2ba984ae152"],["/lib/pace/pace-theme-bounce.min.css","cce3611703f1ada897450dc1ceb9c1bb"],["/lib/pace/pace-theme-center-atom.min.css","fb4e87a7b2a4f00aa15e6745df777060"],["/lib/pace/pace-theme-center-circle.min.css","79e5213d0d8c434e186a392fb8e2b53c"],["/lib/pace/pace-theme-center-radar.min.css","b56af30ab4f2e93d86a9021d5ba4f514"],["/lib/pace/pace-theme-center-simple.min.css","037cae2d6083bd6a0e97d355c3b051a2"],["/lib/pace/pace-theme-corner-indicator.min.css","2628e444a3d735ae564a415c330bd6b1"],["/lib/pace/pace-theme-fill-left.min.css","9510d8646a54235cc6d588678efb590b"],["/lib/pace/pace-theme-flash.min.css","637ed6f2d01579960625a6f5b014d85e"],["/lib/pace/pace-theme-loading-bar.min.css","25e22ac79cf9a8e5d9282296423bb038"],["/lib/pace/pace-theme-mac-osx.min.css","9afdcac8963ea99ce176942226bad21c"],["/lib/pace/pace-theme-minimal.min.css","33b9f24bb3785afa461f0cd79d312994"],["/lib/pace/pace.min.js","a988ab7425f904554d5178d179911274"],["/lib/three/canvas_lines.min.js","204a8173655927318f6f13dca6aa70c9"],["/lib/three/canvas_sphere.min.js","712ef06c2111a837cad6508a0397f1e8"],["/lib/three/three-waves.min.js","ce1bc3a2f36e49ef1f9631ec5612b89f"],["/lib/three/three.min.js","fbbb3c02327f730752b480c520c9c489"],["/lib/ua-parser-js/dist/ua-parser.min.js","4973ccd41da86b56b5c291ff48355a7b"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c585e9adcb3d3d0b0d8782f68ce2fff9"],["/lib/velocity/velocity.js","9bdc1897784c00bb528e7c55bc2037aa"],["/lib/velocity/velocity.min.js","dae6c78cd987613254484a7c747760af"],["/lib/velocity/velocity.ui.js","49d45ded3b7bcffd4f28b032f36c231c"],["/lib/velocity/velocity.ui.min.js","a7c38f3aaaea7055e8e6eb19fe884a4a"],["/links/index.html","4b88ae305735a214c5a226a274164fe2"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","32f0f3418320202947883d388389abfe"],["/page/3/index.html","c9e19c6d7a27fdc144ead9b70d03d5ac"],["/page/4/index.html","1f4220e32ff8f1daf39165efd30361ab"],["/photos/index.html","c61ac23a11da7541390fa00138ae97b4"],["/posts/191ddb73/index.html","3b3b99ef52a6e69f281093d751d2f70f"],["/posts/1a195976/index.html","6408e8e2f82ff99211a5315cead37437"],["/posts/2292f1af/index.html","c4520d44f2975ea8a67a290567056ea2"],["/posts/2fc77d95/index.html","ec47003ac7835ba667ea03b4edc482d2"],["/posts/2feacaf4/index.html","01615ec63d72792e2c034c65079a152a"],["/posts/37f2c331/index.html","f19c35ddadde38e0fbe9ab94d4897d11"],["/posts/385f0de9/index.html","135bbff18e5e7d16af9a0ebbd2c11f9e"],["/posts/3caecfa9/index.html","4c36c377911f00d6a8d353d0114463d1"],["/posts/44414303/index.html","171d6e3f35a68126c4c609edf54bdc38"],["/posts/456610d0/index.html","f4cb99800ed2459632018d64ced17952"],["/posts/45e51894/index.html","4c5ec0f41e417eaf1671299b3f366794"],["/posts/4f1131af/index.html","dd1ce14a64e1a32c98c233c940d03db8"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","0e4a934edb5914bb0bf1448f3e426ef2"],["/posts/517ebb95/index.html","9914ad648036be59c9d4349cb445cf4b"],["/posts/53bf1d9d/index.html","12f10490e19bf59c33c022d922a24d24"],["/posts/554c2ba0/index.html","bcaf2ba7a0e03c86cf1dbd3f933d5b81"],["/posts/63556f52/index.html","677d42378b7c6892a7ada07941a2d82c"],["/posts/6d49ceec/index.html","5f59c76772e721fc349fd9ade0d8db02"],["/posts/6de7d9db/index.html","e5d9ba92f8af9563c39e2c2df9f0ad3c"],["/posts/6fda249f/index.html","6b80da05dfe6cf78be940e00218a6e5f"],["/posts/84b87417/index.html","6c5f593658b821be8c85bb24323a716c"],["/posts/8a60fcb8/index.html","5dfc037fa6c102c591e82c5eaaf97fab"],["/posts/8b4c253/index.html","fae7a0aa6522078b815e94a68b8848d6"],["/posts/92912ddc/index.html","6c87989a66582829c36e7e0cdcff631c"],["/posts/97e5bc9c/index.html","17cc3b5f6c36173ab00366b7ec19066b"],["/posts/9a5c7b64/index.html","768d4b2c4bbc167a98516ca28a8a4f8f"],["/posts/ac7d0231/index.html","d78f9732b07b1777c2ce688fbd61d738"],["/posts/c311b112/index.html","ee8fa9058b13dbc679a87ad3141cb013"],["/posts/c620d4c2/index.html","314fd92cfc1c502bbb51520b6e2c0efb"],["/posts/cfc54393/index.html","993093e280d8b8d84ddb3dacc7098d69"],["/posts/dc5155ff/index.html","e7be207c8834bc61222f3ca5b1b56e92"],["/posts/e1bd836e/index.html","8414dd91e06a8f08d44a4acd0a54fbae"],["/posts/e31c0293/index.html","696d978ef541891010f136ffabcf5ef2"],["/posts/f5fc4461/index.html","4dcf1470b3da825b2df7d75102febca7"],["/posts/f8073739/index.html","1c175a8ee64f33a7b0e7a5e8a7533de3"],["/posts/f97ef43b/index.html","e321a1b7297e8729b995f34e10bad35a"],["/posts/fa84d5fc/index.html","844e39dc87035223cba5b5d081a7db54"],["/posts/fb1ab942/index.html","1c446c5ebc10b129c50cc45eda73b47d"],["/sw-register.js","1cf6a9792a1290a73635d43efb47a6b2"],["/tags/J-pop/index.html","a8b64d67b8cf9691ea395474dca56fba"],["/tags/index.html","0284f220a5a264b5d79dba6cce0cf313"],["/tags/つぶやき/index.html","bf2a4c93aecbe673fbaf905b2cb97b93"],["/tags/アニメ/index.html","5ec579e83736e0792428692a73b6e392"],["/tags/インターネット/index.html","e1459a5337229ecc430302562527cfc4"],["/tags/チョコレート/index.html","8c34e26dd5868cba8cfcf4deb22b25f9"],["/tags/中国に関する新聞記事/index.html","1b62dd704b188d40212fa2c5459b4bfc"],["/tags/乳製品/index.html","3792671270a47f95ea0dbd17c88c82e0"],["/tags/労働者保護法律/index.html","cc921794460719122196776b674a1d21"],["/tags/心理学に関する記事/index.html","2438feae2769e9671b7fa66b135ff139"],["/tags/日常生活/index.html","261105ef3139f136d028bbb22b7c0460"],["/tags/日本のIT教育/index.html","a8b0e8e69499617598ec191e530ccbb3"],["/tags/日本のIT現場/index.html","76b7c220e48287c697c344965c004f80"],["/tags/日本のビジネスマーナ/index.html","8eab2b9a197836006ddd0a7a5916aba1"],["/tags/日本の国内の人権状況/index.html","e2bace59cc50da3624e6a3378f92c91b"],["/tags/日本の経済新聞記事/index.html","473082d270cde079eb2d1b26e62a0786"],["/tags/日本地理/index.html","13dc383b6be4ad6725d1b025948bf2e6"],["/tags/毎日ことば/index.html","f487617b91c4b35393ae6c357256f9ba"],["/tags/环境/index.html","2081873e26fa6adac402562bb01a807e"],["/tags/過酷な現場/index.html","6aedc78249905b367072fdeb3feaff6f"],["/tags/金融/index.html","38dd1bdc85dfaf1d25eba6d9c246be4b"],["/tags/食べ物文化/index.html","e083cefc541966948d31c72430eeecfd"],["/tags/食品工業に関する記事/index.html","32de3ab0065bfa49d264b37055fc02be"]];
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
