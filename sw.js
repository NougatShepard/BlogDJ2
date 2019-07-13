/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","e2f619dea600e903b9905335d3bf28fb"],["/about/index.html","ce914fc23767aa072214ac6053bd4678"],["/archives/2019/04/index.html","895c1532ec1a6740585a77aac9fed845"],["/archives/2019/05/index.html","308aa67129a42596cb791f995c2871e0"],["/archives/2019/05/page/2/index.html","2efc9d36319c48201ca81e9a880c418d"],["/archives/2019/05/page/3/index.html","db1e9d3d5a7e093821fa5db891cdea98"],["/archives/2019/06/index.html","655b3277e3e6f46b28ce6f7488a2ff8c"],["/archives/2019/07/index.html","408f28da2aa4bc4fe24544d077dbf544"],["/archives/2019/index.html","71524ffd25e010eea3c037aff57592ca"],["/archives/2019/page/2/index.html","fad82d5d3476ef94ae82054c7e42d84a"],["/archives/2019/page/3/index.html","5364c085fd2968c2bfaa298aa3e96c20"],["/archives/2019/page/4/index.html","5be1002273db7a41d0d5ab3d0ca2364c"],["/archives/index.html","e411fc75d8e23ce100893b173b4ed7a5"],["/archives/page/2/index.html","f7ba98e96ee89aa720d1391fffb542ba"],["/archives/page/3/index.html","3a491a80af29354dafc779b00d53835d"],["/archives/page/4/index.html","b555775dc09afb8275b6de4966646525"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","010bf55f5e80d8646367fcf9195d20de"],["/categories/index.html","cac73cca67614cf8f6ba5001244d5a34"],["/categories/ことば/index.html","0ecdc92ad50eb904429bcdf66425a1f7"],["/categories/つぶやき/index.html","69cb7b123f9566685b42f3943f90c03b"],["/categories/アニメ/index.html","deeb742c9b37be98031b4b9d2badbd60"],["/categories/インターネット/index.html","4d3ab2e326cf93a324635555518b3262"],["/categories/中国に関する新聞記事/index.html","ff4eeffcdd6f26f271b3010fd8bfb45c"],["/categories/労働者保護法律/index.html","d97efdaf69b4cac00c43e284e3b561c9"],["/categories/心理学に関する記事/index.html","86ded49eaf2fa5922cc9d78a50aadbf5"],["/categories/日常生活/index.html","002606517f48bba515e0a1dc388299dc"],["/categories/日本のIT教育/index.html","5700a9553c9bc37deb3d6cda7ed0ea74"],["/categories/日本のIT現場/index.html","052edd8d76b3de51d8bb991794630f7f"],["/categories/日本のビジネスマーナ/index.html","93b0136e0013ad1eece4086885543f31"],["/categories/日本の国内の人権状況/index.html","9e2948d69653739a143b8353faa9edce"],["/categories/日本の経済新聞記事/index.html","c8a4c59479533a2bb27276f4a812d7e9"],["/categories/日本地理/index.html","424215c27bec30f3d06cdaccd3913b84"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","112e98bca5793b9681c87e90dce0aae7"],["/categories/過酷な現場/index.html","0863acf5c33052a3c8ab2573b4f1ebc7"],["/categories/金融/index.html","b7e53ef69bae1103f47211d3cc489705"],["/categories/食べ物文化/index.html","99f6d694494327bfa736bc2e19c79d23"],["/categories/食品工業に関する記事/index.html","a5ee7c7b71c3d232b90d121a458fa688"],["/css/main.css","c7acad4fef15d32948275e58564af232"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","88b9b9a24969458a4308f56ddc753de5"],["/js/src/affix.js","3e2d592e854f2d59dd2cdfc967551abb"],["/js/src/algolia-search.js","9083a669242ee204b2ad488256057034"],["/js/src/bootstrap.js","c6c5f6e1cd059c0622ab54942d06c93c"],["/js/src/china.js","fe1455dd92088cb4bcd72ff7bc9fe75f"],["/js/src/echarts.min.js","b3bfc2dd5fbec223a8b265dc18902b1b"],["/js/src/exturl.js","f8e72438261158dce88d102d6d974e76"],["/js/src/footprint.js","efa57b5c85833c64332703986478613f"],["/js/src/hook-duoshuo.js","62e0654913ff8715c42469c5c459b16a"],["/js/src/instantclick.min.js","d468130bacf1d322783d643b3a02ef0c"],["/js/src/js.cookie.js","68816addf2ffec22d11d53f30f54e2b3"],["/js/src/motion.js","f0027a7431191eea31ddbfaa707e5606"],["/js/src/post-details.js","e10701a80d4e79715f898fa19b0aae9a"],["/js/src/schemes/pisces.js","b19252a97f7789460d895a83b723d0d0"],["/js/src/scroll-cookie.js","152e39d69da3ab1d77efe75c09954b0e"],["/js/src/scrollspy.js","27a1930ede18b78d4edb492912575546"],["/js/src/utils.js","320e211cc47c19c84b33ebf24875f3bc"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","23ff7b2dd49dbc6a7d5a612f57a3606a"],["/lib/Han/dist/han.js","29377ddfe60519799b6c245a4316f558"],["/lib/Han/dist/han.min.css","2aebb03c04026ac13530c5bdfc1abde9"],["/lib/Han/dist/han.min.js","ab13a168c5de2b36d272bad3ffe1bf76"],["/lib/algolia-instant-search/instantsearch.min.css","21f60fb19e7d2093fdad06212bf836c1"],["/lib/algolia-instant-search/instantsearch.min.js","7ee53ffe677637e486fd1d8a9b483ed3"],["/lib/canvas-nest/canvas-nest.min.js","90b517e63c616f3babf6658d7c2cacb1"],["/lib/canvas-ribbon/canvas-ribbon.js","6b127e23e8a0e07460d2ebf0324c0fea"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","648352a4c1975b1417eb6c72111e869d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e18e2ac2a4660cca77ce8c9740c845e7"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d9a7131c6295f02527420da0b7602e74"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4456e1b70a3fd2e1d9d272fc4fed2c19"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","616c4b9e395b344b1adbcda3275e2c2f"],["/lib/fancybox/source/jquery.fancybox.css","f22910549c38e8cf9d1bd240188c3e6a"],["/lib/fancybox/source/jquery.fancybox.js","3b678e6d5826b4c7c814922eba815cb2"],["/lib/fancybox/source/jquery.fancybox.pack.js","e0a0cca8b64ca838db773399677300d5"],["/lib/fastclick/README.html","dd5c0c0a70b275c5cd5040742126c726"],["/lib/fastclick/lib/fastclick.js","db1aab00d8e4c6d8a70cea82ab0ee555"],["/lib/fastclick/lib/fastclick.min.js","fa4a5a59ecebab715d1bba2f253eb26a"],["/lib/font-awesome/css/font-awesome.css","ed1020042252f00993b1d6d9dd7b5bea"],["/lib/font-awesome/css/font-awesome.min.css","2077825d2563eab8947fe1d6fd1b5c20"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","d2bb895f7613afc6d98f1acbf52ac764"],["/lib/jquery_lazyload/CONTRIBUTING.html","a1867f2f8f4da8ac4bed1699083d8f10"],["/lib/jquery_lazyload/README.html","9e7b0c2d04987a0cc650eb57261b1c09"],["/lib/jquery_lazyload/jquery.lazyload.js","d361d2f8bb7b2b74ce37d185e03dd150"],["/lib/jquery_lazyload/jquery.scrollstop.js","65d7e1dfcb1778cd1b4ce265e6d00b3e"],["/lib/needsharebutton/font-embedded.css","91fdb79a1783d59255278aaf4124cbc5"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","d006c4e75b107dea916188e5c7a1bd16"],["/lib/pace/pace-theme-barber-shop.min.css","8139b9a50978e86291e5caa196f1e0cc"],["/lib/pace/pace-theme-big-counter.min.css","eddcd8df9bdf81764adc5fcb1ebaada8"],["/lib/pace/pace-theme-bounce.min.css","f1ad3cc5c75e0f5272020f18e0239834"],["/lib/pace/pace-theme-center-atom.min.css","a947ea0dd7bc1e154807905f47fccb57"],["/lib/pace/pace-theme-center-circle.min.css","9ec61bebc8eaa0acb4754a50b68b9fd8"],["/lib/pace/pace-theme-center-radar.min.css","81b03c17332aad63c49e4b8c0280b4c5"],["/lib/pace/pace-theme-center-simple.min.css","e69eb22ce7871dad261c78e860319465"],["/lib/pace/pace-theme-corner-indicator.min.css","e153a44d37018d6d36d40594e319a62f"],["/lib/pace/pace-theme-fill-left.min.css","0ae122213ffa3d12af2ff4b08867ca03"],["/lib/pace/pace-theme-flash.min.css","4bb77bf7f67575484262ecf1e777f201"],["/lib/pace/pace-theme-loading-bar.min.css","bd913e4ec7544e17087c861bb7819ae0"],["/lib/pace/pace-theme-mac-osx.min.css","55310a010964c9f7b37dd97b155acbfa"],["/lib/pace/pace-theme-minimal.min.css","dee11d88ace4caa12c1dc7440f0e9049"],["/lib/pace/pace.min.js","7178073507c642898cf572033b4f6273"],["/lib/three/canvas_lines.min.js","7304bfa3909b519fe1c865c8a598c250"],["/lib/three/canvas_sphere.min.js","82f90d958c193bd3cdf9b09e874bd53f"],["/lib/three/three-waves.min.js","42f1d9bf5f5de6c045a194912298e16f"],["/lib/three/three.min.js","7f4e21ee1a4ce8ffe32733bb8d8234d1"],["/lib/ua-parser-js/dist/ua-parser.min.js","f64e21cd4914b69712b4f7d9cf632615"],["/lib/ua-parser-js/dist/ua-parser.pack.js","52697c6b267affecee7b7c9b46e6a8fc"],["/lib/velocity/velocity.js","c1604f8476ed42c06c250603c6fe0077"],["/lib/velocity/velocity.min.js","299bc3b1dcf720550a877eb2ec71e1de"],["/lib/velocity/velocity.ui.js","e8f8e4c80090d982f8d564b3aac93d92"],["/lib/velocity/velocity.ui.min.js","d53bb221c95a00cd93f5bc0fe2c0acb8"],["/links/index.html","2b591d5c35757d889940a3e725f6d7c2"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","2663bbcacbb4c2de0da0af4b58b5a3dd"],["/page/3/index.html","46abb77e1763c64bdf92a79373c21208"],["/page/4/index.html","c8430e3240cfd0adf199a933a3e0e83e"],["/photos/index.html","00939acf94fd021b59daa248be6cb1fb"],["/posts/191ddb73/index.html","0e52ca21aafa5a67b4f7642857b0e089"],["/posts/1a195976/index.html","b51faebe8d4378af951fb5105924709b"],["/posts/2292f1af/index.html","c3d6bad4697bac1f7e5bf615772ab768"],["/posts/29d57d6/index.html","a456746a91a00d5822b68c0a5ea73a43"],["/posts/2fc77d95/index.html","b1234ea35b29d7647ec9c62c2cfee937"],["/posts/2feacaf4/index.html","ef2eaf6208640bd7a5dbc75308e18a90"],["/posts/37f2c331/index.html","f90d3734a53e6b54a9ed9ae5b201c9c3"],["/posts/385f0de9/index.html","fcd5bf58ff2ddd950f4ba690ba23ef71"],["/posts/3caecfa9/index.html","5753087947f37be24fb4b68c45c3a302"],["/posts/44414303/index.html","09940327f402a843deb5d7b7fc6a08aa"],["/posts/456610d0/index.html","44490e7f7bb642ae01a039bf2d40d9b9"],["/posts/45e51894/index.html","190cc496b688941608d54cf9b40de74a"],["/posts/4f1131af/index.html","ca3a1df4252e1bef8bea94dd2ca7fb7f"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","c0d51531153c2217a7f25022a9d57709"],["/posts/517ebb95/index.html","46be308cf5f35cfcd23b4f233a454fe2"],["/posts/53bf1d9d/index.html","ed19650e8921eaa0d6c4fdf30ae56ae0"],["/posts/554c2ba0/index.html","5e53d3aaaba57d30d69fa991f6a9e659"],["/posts/63556f52/index.html","bf4698c6388c40a650450a9f1e998ea6"],["/posts/6d49ceec/index.html","7cb22cc5825e0a67b7d958df117024c8"],["/posts/6de7d9db/index.html","bb3fa00d77559276fb9a35d8867fc779"],["/posts/6fda249f/index.html","6e562c8a6726e1b9472ff0b8154335a7"],["/posts/759a6740/index.html","85a40f3e705300a8c6286ccc15bd93d3"],["/posts/84b87417/index.html","7d8f434dce5611da76568b31b3584cfa"],["/posts/8a60fcb8/index.html","d6eec8e00be3d5a84bd1397204670ba2"],["/posts/8b4c253/index.html","0554bbdeeb249c6deb11a2eaffdc1a4b"],["/posts/92912ddc/index.html","159badce829f5dbbb8c6a61ab1e316b8"],["/posts/97e5bc9c/index.html","4a9991c901b261ceb624f4a755447455"],["/posts/9a5c7b64/index.html","05fa8c6286c018e8b5254ae904f5ec0e"],["/posts/ac7d0231/index.html","578c46a032a55fb5c4c40e65d105c7c0"],["/posts/c311b112/index.html","98939c2fbdd856a851681bb1855e098e"],["/posts/c620d4c2/index.html","6690c8f004b6b67fee00481a44e52099"],["/posts/cfc54393/index.html","3043a7ad455fdffc4a3d46a8d1a759fb"],["/posts/dc5155ff/index.html","30a50c52379670e22ccee6443f9c3a78"],["/posts/e1bd836e/index.html","ff7502e6a955913b015fa83d2d918f3a"],["/posts/e31c0293/index.html","42a06b5b1b1438011be8c94fc4318988"],["/posts/f5fc4461/index.html","dd29a7b37788bfa4896f9c1a3af79611"],["/posts/f8073739/index.html","002750e18f683a896bcb06c7c775c9ba"],["/posts/f97ef43b/index.html","0386a495dd7c7856c779f0abc4218048"],["/posts/fa84d5fc/index.html","309f567ddcc626846cb11cdd09fb1fb4"],["/posts/fb1ab942/index.html","28ad4280aebc70c2872644ec95f76922"],["/sw-register.js","0392cc150dc9cea5f471167c41278be8"],["/tags/J-pop/index.html","9728865cb597f9d1def15f90aa857011"],["/tags/index.html","abf10b34097442c903dfdf8087a66572"],["/tags/ことば/index.html","7854e5ef90ae3938fd3b5897a8177114"],["/tags/つぶやき/index.html","1d88d1f1ddb2beef2d6ff2ea7f666d5b"],["/tags/アニメ/index.html","767b06dfbf04e43b2b678f89b1bd4ad3"],["/tags/インターネット/index.html","2988eafb05737b8551368183345170a4"],["/tags/チョコレート/index.html","042bf76f3f2577846844bd6cac7d7bcd"],["/tags/中国に関する新聞記事/index.html","20aee18425adc1fa7d00ac1de59f76d6"],["/tags/乳製品/index.html","3e9a6a75f8b94b1a476377bf7907d195"],["/tags/労働者保護法律/index.html","0c0ab0a316f1f0c59340b8cc7e45d5c8"],["/tags/心理学に関する記事/index.html","82ea2f8a68c8db42440cb1bd776ea19a"],["/tags/日常生活/index.html","f90d782dbcda136999d9fc0515f1f209"],["/tags/日本のIT教育/index.html","8e408e9cb3a9f036780b07af967b0636"],["/tags/日本のIT現場/index.html","7ccfea624261502273c34bd69d3a7af1"],["/tags/日本のビジネスマーナ/index.html","cd065076a634b9df6f63c5ac2a949d34"],["/tags/日本の国内の人権状況/index.html","515f42e0a7db26aa6346cc8924a63137"],["/tags/日本の経済新聞記事/index.html","4db06a31abd2d145b994a1a9bf476cba"],["/tags/日本地理/index.html","bf71261832fb2e9bc486a691f603b99d"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","c7a97571c49d5b22bae8800ebc9fb60e"],["/tags/過酷な現場/index.html","0081be1da254fd3df290b11ab1eb3a5c"],["/tags/金融/index.html","dd719de58c5aab6fc13d9e04897306eb"],["/tags/食べ物文化/index.html","9cdb9a254a19e4f595fdec2a1e390f10"],["/tags/食品工業に関する記事/index.html","e8ef3d8fbc8e6c37c14706cdd7500b11"]];
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
