/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","27bf02a438e357034469083560fc4604"],["/about/index.html","1e845690d2ef6a4fbab3f6641474e7c7"],["/archives/2019/04/index.html","6fddc723aec20a52d38aaf4f4a6bde23"],["/archives/2019/05/index.html","0fe7b26933da183710fe20e2ed668b04"],["/archives/2019/05/page/2/index.html","4581006a7ab11f228148a2878f351d34"],["/archives/2019/05/page/3/index.html","ca696b99d12e4bb8ee29ff3492721ad5"],["/archives/2019/06/index.html","ebb4119cc6e5f4c3c5d6b85aa6d8e3bf"],["/archives/2019/index.html","cc29345c2b19aa944e12826c9742b85e"],["/archives/2019/page/2/index.html","3490dd9370322139fa83c3a786cff79a"],["/archives/2019/page/3/index.html","607f9e050f1043a0dda14d80da9403ca"],["/archives/2019/page/4/index.html","0d21a528266f8e77bc5acc4725f2af8a"],["/archives/index.html","100b77dfc814dc601edb52a03211b1f0"],["/archives/page/2/index.html","8c0b0d891d287e797562023adf42beba"],["/archives/page/3/index.html","8d6a6c1303c0085966217507eceb2c8e"],["/archives/page/4/index.html","2bdb2c42280ebd5e187a44d6dbe443b8"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","14176f94bc7207017aa4818b2d1b2847"],["/categories/index.html","1304f7d4a93ab12f52dcbbd2cb2d0d09"],["/categories/つぶやき/index.html","893e5baedff38f4c65b1acb8cda25fe6"],["/categories/アニメ/index.html","09c94e8a1f75fa5b11352b835cb4622a"],["/categories/インターネット/index.html","15613c71f8b3faebae26af5cc637ad23"],["/categories/中国に関する新聞記事/index.html","48f2a4798c5b0f6510ffcaa09f28a8b1"],["/categories/労働者保護法律/index.html","3488ed245309b0a1ff0f74dd4b1699a7"],["/categories/心理学に関する記事/index.html","73548a5740ee6aaceb913bb706f67a55"],["/categories/日常生活/index.html","6e0e2d86304b54cdf179f7ead68ac7e2"],["/categories/日本のIT教育/index.html","61f1a51e2f9c2731f6aaf6c075d3dcca"],["/categories/日本のIT現場/index.html","43228db9633e35d1033b70eae02abfa9"],["/categories/日本のビジネスマーナ/index.html","3bc40ee6ecf216b066ac6e1316d7a3e0"],["/categories/日本の国内の人権状況/index.html","7596fd9592ea6a964b98a7048a99c721"],["/categories/日本の経済新聞記事/index.html","b07f5a2247b8db747d9aeb5d920546c3"],["/categories/日本地理/index.html","3611e5f121f3f69d8efd37ee2f46a001"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","0d36e05cb36bd8a6d2c2e3bad0df1904"],["/categories/過酷な現場/index.html","07982dd1acab6a964b21aa1ce295117a"],["/categories/金融/index.html","babc0ff2df75f4e51dba9f5978753c48"],["/categories/食べ物文化/index.html","d18b7d6dd0082c2c84ebc15f230b95ed"],["/categories/食品工業に関する記事/index.html","fdfc4e3c8aef376c196d84b35276de58"],["/css/main.css","7bb95257380bf0d637b65edbdd0370bd"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","4c697fcd5b234d46b42044a3676baf8b"],["/js/src/affix.js","29fb38d331a74337739803c09936c0b6"],["/js/src/algolia-search.js","a1f367f30f552a9b503d84341f3dfe40"],["/js/src/bootstrap.js","11eb7b17ad00e225f05c7c7d9a81794a"],["/js/src/china.js","032b73aa6db4bf45369ff9fe023211ba"],["/js/src/echarts.min.js","0b11b9cc5caadafdb8dffad7e0605588"],["/js/src/exturl.js","4cce311e9e89c0b0dee806bf578cd70d"],["/js/src/footprint.js","81a3c44b8f682742885973cb6ae58124"],["/js/src/hook-duoshuo.js","8271be380e443b6cc309875b3e70c4f8"],["/js/src/instantclick.min.js","60b835c67ede8324556bb289980b1b4f"],["/js/src/js.cookie.js","689929c356812f2962a55e551e7ca07f"],["/js/src/motion.js","9c714b833b7743c2f4836fe1f76329ff"],["/js/src/post-details.js","5b3fea47aaa30e1c41328cd83df4a365"],["/js/src/schemes/pisces.js","61b7110b175e49e285dc2b5b5b2e8867"],["/js/src/scroll-cookie.js","15da85877d77b35988106517efc6cba0"],["/js/src/scrollspy.js","690306c366e016e2cf6d5208d5b7d033"],["/js/src/utils.js","2f2c7e2844922e999f72f680a70d552e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","77001b59d1af285c0ac23fb1b5f418ad"],["/lib/Han/dist/han.js","c8327a0774056d4c388879bf32f87e00"],["/lib/Han/dist/han.min.css","3dac8480e54eaeca8cb6bcc380d2d028"],["/lib/Han/dist/han.min.js","f1b25d5a720c154853bc6ed3a29b1a05"],["/lib/algolia-instant-search/instantsearch.min.css","76d80c046999df105233a62d65d223cf"],["/lib/algolia-instant-search/instantsearch.min.js","6558f596c27b5b269d21bf9643691a76"],["/lib/canvas-nest/canvas-nest.min.js","6972d2ee78f2b3982155aac3046e9e2b"],["/lib/canvas-ribbon/canvas-ribbon.js","e42ae3e35b1035d4a19440a69e44d3ef"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","fd2392c310b991813e5817340dab7c4e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d547d47ad4e5a2d695e7196592463e8b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2b7a90d024f4f585c32eb782c9b14b48"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9f2691dfb4e7dec98d37fbb06f7375be"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7c87837c99aa7f45072d799e884b445a"],["/lib/fancybox/source/jquery.fancybox.css","8a24a3372c5c54590864a48802d961ae"],["/lib/fancybox/source/jquery.fancybox.js","c5fcfcffc0d7d048e6818d2055ed6586"],["/lib/fancybox/source/jquery.fancybox.pack.js","4ee4148d5abe7f4b36ac64c623a6b868"],["/lib/fastclick/README.html","84278efaadb2706f97cd250313b7b345"],["/lib/fastclick/lib/fastclick.js","b3a35d061efd1b55f07d151ccf72edcc"],["/lib/fastclick/lib/fastclick.min.js","a586e1f3a3130758bf34f39f67d820ac"],["/lib/font-awesome/css/font-awesome.css","b951133f7f3eebb14d6ed7bb7f04bc78"],["/lib/font-awesome/css/font-awesome.min.css","b951133f7f3eebb14d6ed7bb7f04bc78"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","6766ef173852f492fb6023371ca96405"],["/lib/jquery_lazyload/CONTRIBUTING.html","00bb8b5fd8a0238498ccdd3f655ba639"],["/lib/jquery_lazyload/README.html","dc46471a6b9273291305f3708be68a83"],["/lib/jquery_lazyload/jquery.lazyload.js","bbd719b1edea58bedd07f3226cd52ae6"],["/lib/jquery_lazyload/jquery.scrollstop.js","86e102e857817876925cde0563cf29c5"],["/lib/needsharebutton/font-embedded.css","61e972b8fa1bbdab88f4fe0762ae5413"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","0e8fa12ef04e17a39d1da49d07b22160"],["/lib/pace/pace-theme-barber-shop.min.css","b1320d0564eda371f3afbd455a79212e"],["/lib/pace/pace-theme-big-counter.min.css","4ffe82fb11495c3a31c2bedf79792c27"],["/lib/pace/pace-theme-bounce.min.css","de22f57d880211f591505397f52fd8b6"],["/lib/pace/pace-theme-center-atom.min.css","b3d1762154406375fb49532207934044"],["/lib/pace/pace-theme-center-circle.min.css","52180d8e0b6953cdf426da291ff01b15"],["/lib/pace/pace-theme-center-radar.min.css","63b9a45f4367212a5dfe9ab86df66c9e"],["/lib/pace/pace-theme-center-simple.min.css","ed2547c6fc899480d0b8c57ba4c77203"],["/lib/pace/pace-theme-corner-indicator.min.css","8c599094b78f4aa17102242a93f92a93"],["/lib/pace/pace-theme-fill-left.min.css","7bcdd27c347c89c34886ba5c1eae17a8"],["/lib/pace/pace-theme-flash.min.css","add3e8c04eed4e552bf12ac76bb33b5d"],["/lib/pace/pace-theme-loading-bar.min.css","431f37bf1479f18dcbbe85e4b3cc556b"],["/lib/pace/pace-theme-mac-osx.min.css","8cf7a92086ac12f2a2314c2e56c4c13c"],["/lib/pace/pace-theme-minimal.min.css","00dfb55d5359a8c3c2750cfeb42dd827"],["/lib/pace/pace.min.js","ae24edf340170ecdca81554502804a4c"],["/lib/three/canvas_lines.min.js","407a6a4283d66fd6c9818f6808b06ee9"],["/lib/three/canvas_sphere.min.js","50ffa6601d9c7aab4d91fb35493d1255"],["/lib/three/three-waves.min.js","53bb0c349e034f0c711e4a97d6004dec"],["/lib/three/three.min.js","38b0a1ed984299dcf8e42b27aae66ff1"],["/lib/ua-parser-js/dist/ua-parser.min.js","cd7e9e08ebd2a2b21e36ddd92bae3d5e"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f663cf1e5b9f1fba9ae97d40c8bf8852"],["/lib/velocity/velocity.js","ad8a630d1ca7f16828baeacd8afc30ea"],["/lib/velocity/velocity.min.js","d8356e41ac0a3600b56b7a1f466fb684"],["/lib/velocity/velocity.ui.js","0106ca4941582c239b75985e6e8cb1f2"],["/lib/velocity/velocity.ui.min.js","63891fc321e39015fc4a522db1dc2db3"],["/links/index.html","054baaa4036e7dbba031bdb763475744"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","8a11e404627ac2ab663c887e53c25ab7"],["/page/3/index.html","93e346e4da357d0a5b5acf667136155e"],["/page/4/index.html","eca46063a85a155d9f9d833ce20b2582"],["/photos/index.html","21f6844d41facedb972df3acd5f11bf5"],["/posts/191ddb73/index.html","d58ac8f8946f1ab56c858ddf3ffd3778"],["/posts/1a195976/index.html","1bb3839136a8170941b94dbe5b2c7732"],["/posts/2292f1af/index.html","089514127ec4ead0d99f18742251eea3"],["/posts/2fc77d95/index.html","9cfaa079c92e1ba5da7ed5e7e6d81853"],["/posts/2feacaf4/index.html","3ece3763b21f9f833e3098fb6daf97da"],["/posts/37f2c331/index.html","39a345faaa2fd4e617975ddf8c9efab2"],["/posts/385f0de9/index.html","90360974caea748da784f22d6349729f"],["/posts/3caecfa9/index.html","aafefda8d068a739a9225ed26effb8c3"],["/posts/44414303/index.html","6d865efbad9987a66188cc145c17022e"],["/posts/456610d0/index.html","9efe94b7f46c7424ab5b72ca1901b86c"],["/posts/45e51894/index.html","bb00bd5857be922aafad3d6e6c09191e"],["/posts/4f1131af/index.html","4824447cae59ccae8c5239c0a91dbb5f"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","055415f81bfd412223065dd101b47443"],["/posts/517ebb95/index.html","77e7d9588b742a8968a43080b4a41ca0"],["/posts/53bf1d9d/index.html","8f12f7df80f9aa3d3dd03afb422a4f79"],["/posts/554c2ba0/index.html","9c624d3cdbaa5810c4c29bb225ee4d70"],["/posts/63556f52/index.html","0f782988dcdfcd65b02bab0b3c9b83ad"],["/posts/6d49ceec/index.html","0ee34f1af6c6c892d34af6ff8e9fdc9c"],["/posts/6de7d9db/index.html","7624b09d6f20daac83c0db4cbc25b40c"],["/posts/6fda249f/index.html","21dde00360a568e5a25a3feb7394902f"],["/posts/84b87417/index.html","fe4121f83f1e1143e01b16142a697b0f"],["/posts/8a60fcb8/index.html","18883a05e9e4751b7262aa35822a44ff"],["/posts/8b4c253/index.html","7b34dea095ef6cd7418b08c3f872a915"],["/posts/92912ddc/index.html","1350456217932f27ed527501597bcc92"],["/posts/97e5bc9c/index.html","425ab6af09ad374d78bd6adf04cc872e"],["/posts/9a5c7b64/index.html","dec6c7a75b3695acb533488b6dd5fa8d"],["/posts/ac7d0231/index.html","aa8ae4b10253aa029739d2cfd2a1c813"],["/posts/c311b112/index.html","1e4a20b080208c5600d58ddc0b354201"],["/posts/c620d4c2/index.html","6fa7a9ab05b57c79fe615798a56b2f6c"],["/posts/cfc54393/index.html","0feb7e954d0d8208578183992ecfd8d4"],["/posts/dc5155ff/index.html","f3cdf5e5ddf10d552b757ddaa461d2aa"],["/posts/e1bd836e/index.html","753de5a704714030885c994f2c3ae849"],["/posts/e31c0293/index.html","6c6b57dbc353674e18a9e0b4a4206f79"],["/posts/f5fc4461/index.html","3916fdddea71eadc369c7fe267aaf4c9"],["/posts/f8073739/index.html","9bac8bb17c64d60b04608a9d4b15e01e"],["/posts/f97ef43b/index.html","e0298ca75ae7a456e8a2c31155e1907e"],["/posts/fa84d5fc/index.html","5ae240eabf0a114e6fbc389df656f72e"],["/posts/fb1ab942/index.html","0d18ab8a044c3b4a58321218b402825b"],["/sw-register.js","ab4780598e924841ed19267660f10d95"],["/tags/J-pop/index.html","74e13396bb3ed3438362ef3d9de4216d"],["/tags/index.html","cb312a1ff16a50be0ec3353f1cd4b29a"],["/tags/つぶやき/index.html","445f80d0c56b30c115d32ffc843c89bc"],["/tags/アニメ/index.html","92dd92ac65cec6ba7cc270cc81d27397"],["/tags/インターネット/index.html","db00691497096223a6ddfb136f2380ca"],["/tags/チョコレート/index.html","f94997415b379257566633f8aeefabf7"],["/tags/中国に関する新聞記事/index.html","59c35c8032f7e6f8f4392890661e8c49"],["/tags/乳製品/index.html","fc5e91bafc8f905654d5e68696d4a361"],["/tags/労働者保護法律/index.html","caaff4ab872975656e843fbe5e5380a3"],["/tags/心理学に関する記事/index.html","08d3dc6bde41d4f1a614a7d67e83479e"],["/tags/日常生活/index.html","d98bef4638ef6673e3f58ea1eaeac439"],["/tags/日本のIT教育/index.html","8fdfcc7f8a516343b4998fa2040508b7"],["/tags/日本のIT現場/index.html","a9809763ca17b2d4a6d713686684a3cc"],["/tags/日本のビジネスマーナ/index.html","7506eaf0cdb1b73c2459c681123a504a"],["/tags/日本の国内の人権状況/index.html","383f77b0faeb62548d6f97faeaadfd0f"],["/tags/日本の経済新聞記事/index.html","d18aa74a05795b7bca020085ef5664f9"],["/tags/日本地理/index.html","c4e4ba157bed438af99ddae55134cba3"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","f986020b6d15a5737f9e1fbbe02b2640"],["/tags/過酷な現場/index.html","730219cc11569e53bd45255d543efe60"],["/tags/金融/index.html","2f3e180dcc806d5743ddbc43aa9c308c"],["/tags/食べ物文化/index.html","f0d5c9870eb39c93ae0077046ce17685"],["/tags/食品工業に関する記事/index.html","3bc2a13c2e53ff9f74d156f2f2afdb1b"]];
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
