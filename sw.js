/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","f0d1d165da22bcba68a1890e28bb03a3"],["/about/index.html","fe78a5041e3cace35a22d3b387236bd4"],["/archives/2019/04/index.html","2b4baf3ab29727be59c593c4fe1a9bf6"],["/archives/2019/05/index.html","89334fb1760ecfdbf052ecba44bde4a9"],["/archives/2019/05/page/2/index.html","f33f95a19730ce92edf29b18cd83962a"],["/archives/2019/05/page/3/index.html","6f0cf596f6e115273f26a451e6b54c24"],["/archives/2019/06/index.html","50a9bf4f907b906ae92de3542d6a4755"],["/archives/2019/07/index.html","b6b3ca266ef07d939271e694aff455f5"],["/archives/2019/index.html","9f4390f6ac7e08b54a9b67fd8d69fd57"],["/archives/2019/page/2/index.html","4cf6b81146e4c7b0bc72ab5830072e2e"],["/archives/2019/page/3/index.html","0a8f9af0b23775fc4e7f9862e41224f1"],["/archives/2019/page/4/index.html","e3ed58878c5a2cb77e1074662d465e19"],["/archives/2019/page/5/index.html","02a84f0a0723ca9e757ddd2505be89dd"],["/archives/index.html","c16d58ece116464f6def5c34f89bc86f"],["/archives/page/2/index.html","97dcbc0fcf86965a14a8925a0be91b64"],["/archives/page/3/index.html","4750bdc607a754ac8c8b1004f6791568"],["/archives/page/4/index.html","38abd2f3e961363c0b20260cf6b72366"],["/archives/page/5/index.html","dc52b9709f1c6b7dde22537b51ee9ae3"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","0224c835ddbffb1bb7c244f3927c3dc4"],["/categories/index.html","f9a7176b2ab97fb50210457e5afd76ae"],["/categories/ことば/index.html","918fedabad762fd31bea44e3224409e2"],["/categories/つぶやき/index.html","d74ae6d3b77c0b42fe1280ea65a94602"],["/categories/アニメ/index.html","a1b04c0eccadc0ba4564097c40fb3abf"],["/categories/インターネット/index.html","2bb1e0261f2f385cb1f0e585d6c689a0"],["/categories/中国に関する新聞記事/index.html","ca3042dd0f17f7054902f394b76821f7"],["/categories/労働者保護法律/index.html","14875b343847f8697de0636e149eb2ec"],["/categories/心理学に関する記事/index.html","efec5ab0afb0ddc6fc4559770629098c"],["/categories/日常生活/index.html","359c15a10c137060c255b94774ffdc7e"],["/categories/日本のIT教育/index.html","c580658c6ded5afc637ac6be2b9c4eb5"],["/categories/日本のIT現場/index.html","df6eaaf365a479aafdb41f719b70089e"],["/categories/日本のビジネスマーナ/index.html","625133e069a5c0bf29d2ac4a09e32cd5"],["/categories/日本の国内の人権状況/index.html","926759e3d4092e09b8fcd3e193f1e052"],["/categories/日本の経済新聞記事/index.html","479d87c6fb57190ee165175a3c27fd20"],["/categories/日本地理/index.html","7dae9fa13161808bf0efd272c6ec1c6c"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","3311ad16bf77617a2ece7985224dbc55"],["/categories/過酷な現場/index.html","10f664b9e8d34ccddd41e33cd8dfe7af"],["/categories/金融/index.html","1788f768ca76d195b9fb627f448f9195"],["/categories/食べ物文化/index.html","d3040c469e554481b153752eab805f95"],["/categories/食品工業に関する記事/index.html","7e1994bea29aef64ed6f3ce7f75b7de7"],["/css/main.css","098ac050e87fc1363cbe01afdd8205b4"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","004b9273f53b1ffb8f7d674ce9eac632"],["/js/src/affix.js","90d026c753376c0ecce28121d20a3f8e"],["/js/src/algolia-search.js","4662b4ed789ab6ef72723c2e94623427"],["/js/src/bootstrap.js","91144524a3f1575386fd99f4ae4d74fb"],["/js/src/china.js","55740ce360814ad695e1a752b79a0029"],["/js/src/echarts.min.js","94d03db8c888bcc46f627d1a8d441399"],["/js/src/exturl.js","c26bf1775f7895d81c68ada7bedc245d"],["/js/src/footprint.js","c01921711a237ebf1fa02f2e6a117ce5"],["/js/src/hook-duoshuo.js","655de5528ad707548d92cc6c5f7b91e3"],["/js/src/instantclick.min.js","815347a09b6ddd776aa9b072121e6e25"],["/js/src/js.cookie.js","3964b907fc915d89ed351f504655a48c"],["/js/src/motion.js","2acc343bebc0f22a81c46fdbd817ac25"],["/js/src/post-details.js","b78614fd4016f32726c24fb3300adfcf"],["/js/src/schemes/pisces.js","9bfb5f6f72f4bd48ed871e377d6ecbc6"],["/js/src/scroll-cookie.js","d982472692e3cdb815f0bb7e7f76e1fe"],["/js/src/scrollspy.js","be74c504a8ba1067544ebef5cfe22ee8"],["/js/src/utils.js","e1015c67015c4c0279d24244df21813e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","217c3e8f9a8ed5765b4881b76f8191ac"],["/lib/Han/dist/han.js","7060d40c3c65ba4a1e3145eadb234c9a"],["/lib/Han/dist/han.min.css","4ee84a59b8adad7f8f7aee2ab34e76a9"],["/lib/Han/dist/han.min.js","a798adea0946cd4e9c4d0eb67350605f"],["/lib/algolia-instant-search/instantsearch.min.css","45456813f3cf85c97bad059546eb8df7"],["/lib/algolia-instant-search/instantsearch.min.js","3244bf5c378966a51f49fe6a912d5409"],["/lib/canvas-nest/canvas-nest.min.js","eb4e7c59f88ed0f636f4fa806d47a1fb"],["/lib/canvas-ribbon/canvas-ribbon.js","d2f9cb00a15675e09bd61cd800a5ef03"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","eec320cebca5be2497795048c42f71f5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3e210c0a83756a30887e34a58318d55f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e1a482fefda1c8b7692f7d3cef35186b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ccb1f21ab7459b358a612d9e021897e1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c26fb4e23b4845e025ba47b452415749"],["/lib/fancybox/source/jquery.fancybox.css","14985de3c3fb60000024594f7adac3af"],["/lib/fancybox/source/jquery.fancybox.js","ef6370713829924dab1b911a507c67d4"],["/lib/fancybox/source/jquery.fancybox.pack.js","903976247af5cb21f838ee6c3e845a0e"],["/lib/fastclick/README.html","091961d08ab49d0933480db2ef57287d"],["/lib/fastclick/lib/fastclick.js","44245d69f217eada4fa0504e450d9751"],["/lib/fastclick/lib/fastclick.min.js","531be90b0ad593280806405e3e87defb"],["/lib/font-awesome/css/font-awesome.css","058cc9526615ec1b126acccd287af418"],["/lib/font-awesome/css/font-awesome.min.css","058cc9526615ec1b126acccd287af418"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","c412e211aae365401c14799ee5977b4c"],["/lib/jquery_lazyload/CONTRIBUTING.html","21b454f7b76fc1e53d40a60339f0216b"],["/lib/jquery_lazyload/README.html","fe31ac76e5d0327a702c64c4bf14a7dd"],["/lib/jquery_lazyload/jquery.lazyload.js","061b934fa004bdb04c097fc08971989f"],["/lib/jquery_lazyload/jquery.scrollstop.js","6339a647e0e917a9df5dbbfa3f2bdb69"],["/lib/needsharebutton/font-embedded.css","4b56e4bc4abc7d6edf854aeaeea98057"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","961c18c9176e4b814b011a32480d2939"],["/lib/pace/pace-theme-barber-shop.min.css","40bcb58fff9bfd893ce936a87df4d14f"],["/lib/pace/pace-theme-big-counter.min.css","688ec5c57e03add98ff713a366580701"],["/lib/pace/pace-theme-bounce.min.css","751ffc015662901f4bb59272b230bb42"],["/lib/pace/pace-theme-center-atom.min.css","93845f1f3d88063be8862b88a07cedfe"],["/lib/pace/pace-theme-center-circle.min.css","883847d03ef41315c214777bcaabadc3"],["/lib/pace/pace-theme-center-radar.min.css","ded72ef2a63c48ebff7af7628d034c54"],["/lib/pace/pace-theme-center-simple.min.css","d2bb6db2bf223e5667b42f9bc3109b15"],["/lib/pace/pace-theme-corner-indicator.min.css","9a7f92e4f613420e1c54321c69d633e8"],["/lib/pace/pace-theme-fill-left.min.css","9ed398a417b4e13da796238bd4f29e20"],["/lib/pace/pace-theme-flash.min.css","748b280e0f5d83c6a39774d94d27b8d4"],["/lib/pace/pace-theme-loading-bar.min.css","3825d3ed4dd3d031059ece91bb7be436"],["/lib/pace/pace-theme-mac-osx.min.css","74dced8dcc41e6497118e429ec8e9ba6"],["/lib/pace/pace-theme-minimal.min.css","372406caea71293d0b030e39606d4c8c"],["/lib/pace/pace.min.js","43cb8ae4547cecb5d9908877514f89af"],["/lib/three/canvas_lines.min.js","fbb373a90d761e532e069be47b3b37d5"],["/lib/three/canvas_sphere.min.js","8215926a6026efc8e24e464c0559bb0b"],["/lib/three/three-waves.min.js","01280554e5f0fbb53fab845ff83debff"],["/lib/three/three.min.js","e3ec4aad6808ed08ea8a8b5f0ed5993a"],["/lib/ua-parser-js/dist/ua-parser.min.js","37bd5f1ef486c8917a8d159c31c8caff"],["/lib/ua-parser-js/dist/ua-parser.pack.js","cfa8e417b014ecd2b83860cb76e6589e"],["/lib/velocity/velocity.js","4a25d9d2feaa08751d5fa36fa4bb178a"],["/lib/velocity/velocity.min.js","472eea9587a35f5f7a885b23c69ee6d9"],["/lib/velocity/velocity.ui.js","3948a4e1ff1012e64c351cdf9a4a5517"],["/lib/velocity/velocity.ui.min.js","2cfc4ed8c9ce6c16e97de6ccaba8a5ae"],["/links/index.html","c06fb23321a2890c55cae191bcfaf8be"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","647c17165c06a0b587644326cb2ef24e"],["/page/3/index.html","11fb189975e63c089362ec89736dca3a"],["/page/4/index.html","7df7d6517c2179284820515e572f6ecd"],["/page/5/index.html","ba47e463a21833f886b3de555ffc361a"],["/photos/index.html","99d08469509577202b143f34ef46c9e4"],["/posts/191ddb73/index.html","6dac78077493c4b30c9662291bb1d90e"],["/posts/1a195976/index.html","ab9d934ed13ea6f7ef6efd86989acd2f"],["/posts/2292f1af/index.html","4fa6344924fee2af362a49a78ee81533"],["/posts/29d57d6/index.html","8dc5cc34e8a86e65b082f825bc1f3705"],["/posts/2fc77d95/index.html","f7230597cf057b58ec4d010487be1ade"],["/posts/2feacaf4/index.html","24489cdb1ba0a371fa27e9a7ecfeba17"],["/posts/37f2c331/index.html","65830ab57c20cb17a0ca3c67dddc5f97"],["/posts/385f0de9/index.html","772d06a92569c1925e964b10aa872c0d"],["/posts/3caecfa9/index.html","bcd97ddc0bd901b9b07057c0e5ba6b0e"],["/posts/44414303/index.html","311da7de3dc3a218dce9da672b0295a8"],["/posts/456610d0/index.html","2aebdf11e8c4c0b9244b1c03a1fe9d5e"],["/posts/45e51894/index.html","6e3a53e3a9efc5f4f09a7546686b1a03"],["/posts/4f1131af/index.html","1b3d0af467041dc8c0ce100eac91d115"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","51f4cf748d57129eb28afe0982831c16"],["/posts/517ebb95/index.html","c85af393e50a57f79a05b89f9ac7e231"],["/posts/53bf1d9d/index.html","6bf654b7155e0c1449b8a0b2a8555879"],["/posts/554c2ba0/index.html","cd0d8572be15b4e983253053facba663"],["/posts/63556f52/index.html","8300a9b01e6d70b85aaebe6e4dfd02c3"],["/posts/6d49ceec/index.html","c1e62bb9c55d514c66677fd2bdc95269"],["/posts/6de7d9db/index.html","99a83028d1fd0e9d2ce63afd98b045e9"],["/posts/6fda249f/index.html","07ebe3f9812ff7cf7b0a90c4393afb60"],["/posts/759a6740/index.html","77b1dd73d581bcad46751522faa2dcb1"],["/posts/84b87417/index.html","8ffd86fd27d3573c1fa4b18fb206b6ff"],["/posts/8a60fcb8/index.html","f8cae02cc24df6e087e97faf7e288261"],["/posts/8b4c253/index.html","fc9f9ba7e6610ab21805b45b5909b025"],["/posts/92912ddc/index.html","c16749960584b9bf622f408e187d9fce"],["/posts/97e5bc9c/index.html","8f5ea0f32cce09a488377953edb50a6d"],["/posts/9a5c7b64/index.html","eb3dbf641a38f225494e779a3aca6bd5"],["/posts/9cf9c275/index.html","c54ffac81b645164af639995a73a6cdc"],["/posts/ac7d0231/index.html","1d48ded2825002dbbe6f39e5aa574d37"],["/posts/c311b112/index.html","41b6408f5f5fef6db9ae3cc65cb5ae98"],["/posts/c620d4c2/index.html","eb0c2c61409a73e6f6ecef3eaddfc471"],["/posts/cfc54393/index.html","c02dd4fabb7826e9f716d0177e9c3fe4"],["/posts/dc5155ff/index.html","36a22b198e53870cc2e812a1a852e49a"],["/posts/e1bd836e/index.html","916ef7c1cefc3d4d4ebba11059f68531"],["/posts/e31c0293/index.html","cc4dfb760634769552e5ed5d66c30253"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","9e7f63f1140676fb03badfc5d66f7eb0"],["/posts/f8073739/index.html","3a5b199cdd8c96b1735de39e81932b8e"],["/posts/f97ef43b/index.html","5f71e9661510e7eb32f8b1fd769e33f8"],["/posts/fa84d5fc/index.html","13e6d9ff60420539d4efba2578766e00"],["/posts/fb1ab942/index.html","a7f68a3eea13835f57a4c552b48a27d0"],["/sw-register.js","3d907f325ac4786be4a04202122188d3"],["/tags/J-pop/index.html","2be991ba8c0bc00977c530ebbbbc8aee"],["/tags/index.html","235e5579f2bbab06718aca3467008a2f"],["/tags/ことば/index.html","7d3ccce3e7c8fa9ea31ae2e3f1f9467b"],["/tags/つぶやき/index.html","ba62a4aa8212300575960f47f8cd7656"],["/tags/アニメ/index.html","dd28ec9b986ecffe14eb6fa2e77a4334"],["/tags/インターネット/index.html","2f77ecad41b1414d51adaba60c566096"],["/tags/チョコレート/index.html","55915ea73c56a686b61e39e8a6d4dcaf"],["/tags/中国に関する新聞記事/index.html","1b645a0ff113910acc05d36bd4743156"],["/tags/乳製品/index.html","58b93545d12acbabdf0eae0dbfec0ad7"],["/tags/労働者保護法律/index.html","177bb95814c5ae6933a3c383b87097b0"],["/tags/心理学に関する記事/index.html","220606976e8fe9876f09815d6662de42"],["/tags/日常生活/index.html","c7519988547a3109706b77deea692a4e"],["/tags/日本のIT教育/index.html","d0d191c152505778bc916d93f0df198d"],["/tags/日本のIT現場/index.html","b7f8eb0bdd99bf95a8bf07d6a6ab5f51"],["/tags/日本のビジネスマーナ/index.html","0a69c03852576606fbc3cee1aea9dee7"],["/tags/日本の国内の人権状況/index.html","5b79310d2c863300901b96feedb14a44"],["/tags/日本の経済新聞記事/index.html","d6b3059391c0f642360551fe6b7fa071"],["/tags/日本地理/index.html","8739963ce1edc92387d9b036a47e768c"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","0497c42339160407a51485793a189caf"],["/tags/過酷な現場/index.html","095099187610aadbc11f5d47af757786"],["/tags/金融/index.html","3dd737e79dfb15a15f83db8fa8059463"],["/tags/食べ物文化/index.html","f33f22c3d4a42ad5e45f6318ad9f1d2b"],["/tags/食品工業に関する記事/index.html","831c6b19042940427ac5b763ff593a18"]];
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
