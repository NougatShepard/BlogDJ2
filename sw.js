/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","5f12fec9c10ac385d99d1da87e0ffb68"],["/about/index.html","2142833dbb97985eb98ebbbd486b8c2b"],["/archives/2019/04/index.html","86e3ec9c80350a6801867847cf3fbfa6"],["/archives/2019/05/index.html","068c2af534a73400b6256070e6e9e5cc"],["/archives/2019/05/page/2/index.html","e01ad203ea79d66a5a4109e5176db1bd"],["/archives/2019/05/page/3/index.html","47566f05275ffe9e7c31c91426d3a925"],["/archives/2019/06/index.html","74d4c34ae95dd3515c90f334cfc7785d"],["/archives/2019/07/index.html","f6c3935aaf0bf2bd7e16ffda1c45f8f5"],["/archives/2019/index.html","b1aa488876cc5e9eecfcaa142eed13cf"],["/archives/2019/page/2/index.html","76bd655376c321399f2f9c98e9770f6e"],["/archives/2019/page/3/index.html","df1d796bffa19dd65bc835815ca787f6"],["/archives/2019/page/4/index.html","df6158f4d44dd4cbc51304b44601dd3e"],["/archives/2019/page/5/index.html","53f3453079f3a9a3accd9b3e07c01828"],["/archives/index.html","48c1f3b39134301a21dfd94a115f92a6"],["/archives/page/2/index.html","5948a3d9167c8ad9551e5a956fe5d93b"],["/archives/page/3/index.html","8eaae4064908a22fd1e378979ca20bba"],["/archives/page/4/index.html","29bb870c78cfa849ef88047133404c4e"],["/archives/page/5/index.html","2547f8a1e61c1a6b6bd7777076c2ac00"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","8467154a8bde29a2b0afc952ad798e87"],["/categories/index.html","a79cade2cc3d77bd6b4406643feae1d3"],["/categories/ことば/index.html","6960a7b5baeccd16dc973336f0527ce4"],["/categories/つぶやき/index.html","22beb20f351f12d4bdb28062882b7a85"],["/categories/アニメ/index.html","f506ec291689255ee98b4e9c3af3ecbf"],["/categories/インターネット/index.html","be818104ae793962294f462ff537248a"],["/categories/中国に関する新聞記事/index.html","a2da00a2651199e505b43b8661678e5e"],["/categories/労働者保護法律/index.html","a449d28bb1b7a284d33b421268abb073"],["/categories/心理学に関する記事/index.html","9f3e35dca2019b648034b86c1fd03be5"],["/categories/日常生活/index.html","5e1d6ec8a065856a85c1e3af9135a548"],["/categories/日本のIT教育/index.html","977adf9fdf9d730536eeb6205286e9e2"],["/categories/日本のIT現場/index.html","ed429c7ac7880131ff87ab70402bcde6"],["/categories/日本のビジネスマーナ/index.html","c2e61c8c385d9117c7508c1d13cc58f8"],["/categories/日本の国内の人権状況/index.html","3a0771d4531e144ce1bc22e0a8364cbd"],["/categories/日本の経済新聞記事/index.html","50a1e53e9f40c4f6f230583aac55fefd"],["/categories/日本地理/index.html","866089079d1655e557473e8bdd2c5170"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","f31d827ba99d0c28019fd013185c6ef5"],["/categories/過酷な現場/index.html","11f81e7a74a104cdac37def13f16c1b7"],["/categories/金融/index.html","2ee5a44229626f49993494ac249be3a5"],["/categories/食べ物文化/index.html","5f3e956f589aa733b16a39218428f886"],["/categories/食品工業に関する記事/index.html","7e53f9845ffd7349f5488d6078fa55e1"],["/css/main.css","eabf038f3d86c6e4dbace19277f50959"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6bb4d4e08e3768bf19fc981f80ff7cb2"],["/js/src/affix.js","7860446d71f3862df8d2c39b3466f3bd"],["/js/src/algolia-search.js","fa6a8cb3ad020b9ef4fd9393f8080b01"],["/js/src/bootstrap.js","ebf640ff43c5a6da3158908b73a94b60"],["/js/src/china.js","c0c291ccaaa26e7b98798e0d1b45cfed"],["/js/src/echarts.min.js","4115e06ea0ecf718b4c5a8a924790a04"],["/js/src/exturl.js","ec5e1cfb6c76fdda5cb768c5211f1e27"],["/js/src/footprint.js","991733c4b873a27e25dd308f3a48f2ae"],["/js/src/hook-duoshuo.js","17a082e6b1dcf0a7d9f93dc3f3ecc218"],["/js/src/instantclick.min.js","28c5afebd149e4e5ac95ccf4f7dd1f0f"],["/js/src/js.cookie.js","a2c9d5bd2e89a70b362b10715bde79e5"],["/js/src/motion.js","26a8a97d77988903eb74536a76c09df5"],["/js/src/post-details.js","556216a7ceca6bd2fca65f2f7fb68e15"],["/js/src/schemes/pisces.js","2cb6ea7095fc7c7397d8357a0fe046f5"],["/js/src/scroll-cookie.js","9a86c29b4661afacf0ce47685035d0d8"],["/js/src/scrollspy.js","c80aac61726da913552ce775c5b267e2"],["/js/src/utils.js","7185db8c0b0cc67afff8e1927c9f6304"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c64dafebdfab1adf60b981e054498090"],["/lib/Han/dist/han.js","76354367030a17075f6a57bf404fbd31"],["/lib/Han/dist/han.min.css","d4d9d0ea65e2f4908879cd84377ec06b"],["/lib/Han/dist/han.min.js","173f0d405dc9a3a9b8fe87885745569f"],["/lib/algolia-instant-search/instantsearch.min.css","8c3a2ed7bdb8d7957665283dae8f287e"],["/lib/algolia-instant-search/instantsearch.min.js","3c4495f5a027856c924eddc455bdfdde"],["/lib/canvas-nest/canvas-nest.min.js","70ae1fe1a61c86ce48657197f5c0ccd6"],["/lib/canvas-ribbon/canvas-ribbon.js","a47e7b7b9ddf67a92726867cc85a52b0"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c23cd1ef5b4d1b987a5953c0b15a81d3"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a358b21b5d32d39ff31e69e4047d3eaf"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","8dc8e4f307b7e0b79c0299ea807525ef"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f1646a51c3d297baac14fee751797ab2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","17f2a7a763996dc6d54c4b4dfb7fc98b"],["/lib/fancybox/source/jquery.fancybox.css","c97c93d39c45a087091f96a9c8fe61c4"],["/lib/fancybox/source/jquery.fancybox.js","24d05d3b689872f3dd732d26c1319f8b"],["/lib/fancybox/source/jquery.fancybox.pack.js","a7af3e09560c6c9c0d3eb8652ae55c56"],["/lib/fastclick/README.html","048f8f303df040877e2aa73e1bfff178"],["/lib/fastclick/lib/fastclick.js","92977bc9dbd5dd4d4b2e1abfb6103e4b"],["/lib/fastclick/lib/fastclick.min.js","984c768a27910c93f5b2e36145965fe9"],["/lib/font-awesome/css/font-awesome.css","8758c4bffc95353bef0ff6052e07542c"],["/lib/font-awesome/css/font-awesome.min.css","8758c4bffc95353bef0ff6052e07542c"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","a0e7069ad9451a97bf748e3ee2b961c4"],["/lib/jquery_lazyload/CONTRIBUTING.html","119b9b2f1f068033b143f27b56bfe51a"],["/lib/jquery_lazyload/README.html","41d9e9746e80b6932b8e9e40dd6c19f7"],["/lib/jquery_lazyload/jquery.lazyload.js","5cdd501c2615b08c971f552e22d0ec31"],["/lib/jquery_lazyload/jquery.scrollstop.js","1c90aeb01307511217bffdff9c11f82e"],["/lib/needsharebutton/font-embedded.css","a0e53ce648175594a25703f2f6b1599e"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","f0f8381482ae63284a02634fc7786364"],["/lib/pace/pace-theme-barber-shop.min.css","76c06eae3cb7072cadc93e54e58be807"],["/lib/pace/pace-theme-big-counter.min.css","1026b399582711beeef45374d3dd3db7"],["/lib/pace/pace-theme-bounce.min.css","edadec7ecfcc5506a92c11a9bc4ec22c"],["/lib/pace/pace-theme-center-atom.min.css","f522546734e6dbebfa03f5903c8b180e"],["/lib/pace/pace-theme-center-circle.min.css","0c028bc94db8c74ac4f5a6d501ca56e0"],["/lib/pace/pace-theme-center-radar.min.css","468c0965e321a91eff053025c7da73ae"],["/lib/pace/pace-theme-center-simple.min.css","52c8fdff8f8f23d5d0abd880121667df"],["/lib/pace/pace-theme-corner-indicator.min.css","c549a3ba945f62e39fd5874f89493925"],["/lib/pace/pace-theme-fill-left.min.css","8835702f45b07cbb815dee60b643941e"],["/lib/pace/pace-theme-flash.min.css","9f7d230d78bc187b5b4ee1de2a044030"],["/lib/pace/pace-theme-loading-bar.min.css","88dffef82c0bf2eb4a43e21576e09e5e"],["/lib/pace/pace-theme-mac-osx.min.css","a025eb09425d9f0e2511323dc6f9ba7f"],["/lib/pace/pace-theme-minimal.min.css","4ed103e0fa7e6914aa5e01fed8b965e0"],["/lib/pace/pace.min.js","21a640313aa6de8631043654ae08587e"],["/lib/three/canvas_lines.min.js","81452b50f6c2acd791e93800a542607a"],["/lib/three/canvas_sphere.min.js","6a225a8a727636835912b607b0a18bb9"],["/lib/three/three-waves.min.js","1a319c402f80477c07edbe3146ec7aa5"],["/lib/three/three.min.js","8b73a6ba3c17fffcec883cf0504fb10d"],["/lib/ua-parser-js/dist/ua-parser.min.js","cc115a68107591edd03ece6f2fa600e0"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c8160001b19021ac77bf6696b114916f"],["/lib/velocity/velocity.js","07476efac5073615a6c88440887d6ad3"],["/lib/velocity/velocity.min.js","50685e6bf74284ff97e3af4d409a1251"],["/lib/velocity/velocity.ui.js","047ff18e4612e41e557e33851d8c5f5f"],["/lib/velocity/velocity.ui.min.js","7b181d76200e1d7de57c95fd303d9322"],["/links/index.html","14f31e79ee567a265f5b9749209c9c7a"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","839b6dd4017c79520ed4a13f2cbe44a0"],["/page/3/index.html","da29e3b2b2fdbfdb6cc85d467c719e68"],["/page/4/index.html","6f85be576e998158e91ef551b59fbd20"],["/page/5/index.html","ff5a65bf91388f046d12d25dcf329bcf"],["/photos/index.html","3c526b3b41eee2ac6b408f594f45ec78"],["/posts/191ddb73/index.html","ca362c1d961e3641996c01eea4aa8cfe"],["/posts/1a195976/index.html","1d441911420144b0a928d436d86c14e1"],["/posts/2292f1af/index.html","847f40783929bf7323ab5f7e1e2d7cfd"],["/posts/29d57d6/index.html","39afb1ba4028776db1a2b3ef7f2317a4"],["/posts/2fc77d95/index.html","be98a5a11d447b640514cb71051be508"],["/posts/2feacaf4/index.html","650d61aab2b732cb479a759bd601b7d2"],["/posts/37f2c331/index.html","b9b2aee9f272a48a98e632e297f20546"],["/posts/385f0de9/index.html","dcdaaacfa850dfc1fb3151858a554a6a"],["/posts/3caecfa9/index.html","8e951dff7034a6d5e5f165dcee9d7e95"],["/posts/44414303/index.html","4bcf79ada9c7222cdab3385a3aadb7c6"],["/posts/456610d0/index.html","7ef33679c93f43a2882ffda3ef5a5697"],["/posts/45e51894/index.html","6df37ca7ec972e8b4f57ea56f62a9d58"],["/posts/4f1131af/index.html","5cb05fc9df70d8835f387e20c1a83840"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","276269b845e549dd95346378e3584697"],["/posts/517ebb95/index.html","c23868dc9ae6ba8afd3b58402f26de87"],["/posts/53bf1d9d/index.html","739085aad28d3be3a3b0d8c7b96fcc5c"],["/posts/554c2ba0/index.html","037b7356f0c5894e815d0bd23c9ad549"],["/posts/63556f52/index.html","123e5aac58b8ef6920a16c970d723070"],["/posts/6d49ceec/index.html","d252fb308e645d07ed790279b9393db7"],["/posts/6de7d9db/index.html","1ec752f85a63d288f2f602ff5af9833b"],["/posts/6fda249f/index.html","a1babe1f4cf38b19eaa1cc74c000e9a1"],["/posts/759a6740/index.html","7735783cd4896c17a8a1861f37121a40"],["/posts/84b87417/index.html","9f14036a194342e05a5375407119d3b9"],["/posts/8a60fcb8/index.html","00c95146a08b3f885b15cd066d0c7a3a"],["/posts/8b4c253/index.html","de36d40cff58a70a6cc0430b70311d87"],["/posts/92912ddc/index.html","c9fbf4d3c6d2319b71c0b16a5ecc508e"],["/posts/97e5bc9c/index.html","3eab9276ff31124a107b21c1a4105c81"],["/posts/9a5c7b64/index.html","3cb3e6c58db3d942fdb0d302ce2724f6"],["/posts/ac7d0231/index.html","ecf9ed4781b09f3fbc71a42af0d79920"],["/posts/c311b112/index.html","3eac57e60f1b83813dcdfe7c80e112a3"],["/posts/c620d4c2/index.html","788eca8d3e3eb6521d8387c75d17a2a2"],["/posts/cfc54393/index.html","1ab4eaaccb1b5ed78fa5c819b67f6c3a"],["/posts/dc5155ff/index.html","f80fdfc4894765e4b35257df8c6073e4"],["/posts/e1bd836e/index.html","1d0e7fdeadaa2b8fb9c254d9214fcba5"],["/posts/e31c0293/index.html","d942dc67c16802e5b1eb17241b1440ce"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","a9705c33f67f2caf3265feb78f21d7bc"],["/posts/f8073739/index.html","e5c8e9a52f1517722d19df98e6dc26e3"],["/posts/f97ef43b/index.html","76d31c443f5b43269eb57bc099551e4f"],["/posts/fa84d5fc/index.html","e1d0e4b1c8bde2825c61b87fb0699026"],["/posts/fb1ab942/index.html","db87e79153ee02eac4d00fb67a27e99b"],["/sw-register.js","58fc93b9e3d698681c47b487550468e5"],["/tags/J-pop/index.html","4d0fcc2bcf6b2be32783c4cbcc9f66fa"],["/tags/index.html","a95fba71b17a43d690d669baf6434b45"],["/tags/ことば/index.html","35ad0f3b073b25f9eae30c0a792c50e9"],["/tags/つぶやき/index.html","dade103785eb462723111f2cc8059405"],["/tags/アニメ/index.html","929d5b707ae8a265ec696beeafb68de1"],["/tags/インターネット/index.html","6c4e998e934923a65fc2e8a658ae81a0"],["/tags/チョコレート/index.html","38c3dc6014f50776234184718d93530d"],["/tags/中国に関する新聞記事/index.html","cfd1666329bef35328d4928d7951fe3e"],["/tags/乳製品/index.html","da27a1be8dc299d5b626d608e9f457af"],["/tags/労働者保護法律/index.html","9fd704608d844e240960d471717dd412"],["/tags/心理学に関する記事/index.html","a1d18c1c1003f673c1cd3430c35acd4d"],["/tags/日常生活/index.html","53ef58af4c85fd3ba9599f2ad03690e9"],["/tags/日本のIT教育/index.html","722df729248c5cc68598c395674e01c9"],["/tags/日本のIT現場/index.html","88b86419cdd3bd8e293a86a235d7259d"],["/tags/日本のビジネスマーナ/index.html","4e271ba4cf163f06e00c59bb31833506"],["/tags/日本の国内の人権状況/index.html","6301c560475fd7f786fa72918990cb0b"],["/tags/日本の経済新聞記事/index.html","eb87b6a5b576240813ed17455f8ff4f5"],["/tags/日本地理/index.html","d5613776fccdf7be9b6604a635b83dc5"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","c369a622fe78f975b3705f9be99d98cb"],["/tags/過酷な現場/index.html","19643d56bfc07a38d2bfbc8c3af48429"],["/tags/金融/index.html","31ce2d38a370d7536d2563143e183e41"],["/tags/食べ物文化/index.html","6db4aead369f3fa6d63beb5be26a772c"],["/tags/食品工業に関する記事/index.html","7fbff33c1be533f09af38b3ebc66fdd9"]];
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
