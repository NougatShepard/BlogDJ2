/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","327b597b85946cadecf51535c508bd02"],["/about/index.html","3b82e557574dd721840b81a99f05563d"],["/archives/2019/04/index.html","7af46abb147d409fd6afdd8dbde0fcbf"],["/archives/2019/05/index.html","7af84285489da7e49750c5c98dcc1c50"],["/archives/2019/05/page/2/index.html","27aba78fd52ad56e38ce1546ebf8cc54"],["/archives/2019/05/page/3/index.html","454e22cb0ea695a9a57bc4b35d968d06"],["/archives/2019/06/index.html","2d57a12f4ecadba94bf471f8bcf08068"],["/archives/2019/index.html","a9c07db497d0af33a599ab957972b7c7"],["/archives/2019/page/2/index.html","ed208b9ad63d936903c3e39373ccc7c5"],["/archives/2019/page/3/index.html","db694211ffb1e76bb43dd3a96769b52e"],["/archives/2019/page/4/index.html","23429486fdc50453f9c63b6ae1e9a20f"],["/archives/index.html","2c9e13029b5261fc1c160a987640e1d5"],["/archives/page/2/index.html","f104f812325cd857afb7b0ece94e3858"],["/archives/page/3/index.html","0b372ca4c4259ef2f65cc4011659807c"],["/archives/page/4/index.html","c640580a447cc5cf8f2e4ce677fb0a33"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","fdbfd306a322858a0a119af24c189f05"],["/categories/index.html","6fa0b8d12c5c6bb8d9fc7b034b0a04d3"],["/categories/つぶやき/index.html","6d0e700388af91513f4f4f6d137f513e"],["/categories/アニメ/index.html","d2c951d08177454823bf4a93c2719bae"],["/categories/インターネット/index.html","c31afe9d7272c382b4c29ce6d0fbabce"],["/categories/中国に関する新聞記事/index.html","eca82c2b6ce227aa1a7e876ab02ae206"],["/categories/労働者保護法律/index.html","272a6d3c9b77123ab5752a228727d35b"],["/categories/心理学に関する記事/index.html","189e114100acb11b9835fe2b4a4a245d"],["/categories/日常生活/index.html","6273cb8f980ee7a9995dee4afcbc2703"],["/categories/日本のIT教育/index.html","779302cd562118b66b71bac4e73a7aa8"],["/categories/日本のIT現場/index.html","13d295ca0772007972d50142046cd363"],["/categories/日本のビジネスマーナ/index.html","f6c0b0032c1e8bece89e65885323297d"],["/categories/日本の国内の人権状況/index.html","cc6d063443f519f89d471e8fda4d3574"],["/categories/日本の経済新聞記事/index.html","3d8fba6b29b8af9423df3bad4403b447"],["/categories/环境/index.html","585cc45dc73b77f55c7048568fc4313d"],["/categories/過酷な現場/index.html","b54f97691a919468a6ad117d64efe411"],["/categories/金融/index.html","e0adf88344c0875ba6b342461ac11f00"],["/categories/食べ物文化/index.html","0917733c96f5b92bc1dac1c87f5f3948"],["/categories/食品工業に関する記事/index.html","de6e6faad6a25671363af54f0831a8f8"],["/css/main.css","5c550ac29da85a79dbad93ecb004209c"],["/games/index.html","9955d0125f2111e44ab2f3e7071e5b0d"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","32226d0124d625800806bb858694c332"],["/js/src/affix.js","bd132947102cd41a5881759d295619ea"],["/js/src/algolia-search.js","b058a5c1350443c3c66371318e782275"],["/js/src/bootstrap.js","b5428578852b15fa8a6833a05fb41e99"],["/js/src/china.js","f45b0789c17a46a5032b92bcdbfd7ca2"],["/js/src/echarts.min.js","abd25ace0b2e2204e9fa3c16e17a8f4a"],["/js/src/exturl.js","162fc4b07cb513ee54bd3c75a48f5f97"],["/js/src/footprint.js","ac1a1e81240b247937d641f6cab4d112"],["/js/src/hook-duoshuo.js","8435e76c11aa487ba455cde72a1409cd"],["/js/src/instantclick.min.js","1588694fb364e58396ba6878ac17447f"],["/js/src/js.cookie.js","471a245e73bbadd074997a7b744922dd"],["/js/src/motion.js","9a9f4db11193aa6d79e6cf0fee2f28c4"],["/js/src/post-details.js","58165750a04a6823ea81b96ccc05e288"],["/js/src/schemes/pisces.js","b83aef0beda4ae94fce26eee1bb5a1ec"],["/js/src/scroll-cookie.js","4ffc61b2a1b9501850c20c7a8de92e2a"],["/js/src/scrollspy.js","4ba7ea84929acb1bd4326bbf2eb35c7f"],["/js/src/utils.js","0dd307afe42438586c28b5836ecb8e19"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f73f3feb6c15dafb2816c6be653f547d"],["/lib/Han/dist/han.js","0c61a8a119b704fb3d3f280de6d60903"],["/lib/Han/dist/han.min.css","5d9f8241dc46b05f3732df38b958756b"],["/lib/Han/dist/han.min.js","54f960bb62d2b66a50838ba3af7e7ecf"],["/lib/algolia-instant-search/instantsearch.min.css","d11f669838905317681d20951e226336"],["/lib/algolia-instant-search/instantsearch.min.js","8055df830dbe712956931f7aa5f9769a"],["/lib/canvas-nest/canvas-nest.min.js","f5db9628c2323b1c0ab8732b45beac66"],["/lib/canvas-ribbon/canvas-ribbon.js","1a5570f069e353c5c8f6783325f29667"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","3fc4ab0c03c1f2e8a4c11bd463f864be"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e2e0bf8ebd0f9430cd95043d0a7b4240"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","760e20df1e1e78f4aae760338eacd47c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f0b0ed2de5d2df1396a8b11f6a0105bb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","8d0a9f05da1ce49dd5b26fe426210802"],["/lib/fancybox/source/jquery.fancybox.css","72f93fea6462872a9e5db395c95bb383"],["/lib/fancybox/source/jquery.fancybox.js","115a3e763b1006dd628a0c63384898fe"],["/lib/fancybox/source/jquery.fancybox.pack.js","622d60aa30f4482d68a3945b86fbed84"],["/lib/fastclick/README.html","b994446e028d0fba87adea861b2fe0cb"],["/lib/fastclick/lib/fastclick.js","c9b1e3db3fbfd4af710d168db43a37bf"],["/lib/fastclick/lib/fastclick.min.js","5df0d2f2a2f4b3cce9a08d89a7386987"],["/lib/font-awesome/css/font-awesome.css","08c7f4704cbad7fd390f7215c8b5efcb"],["/lib/font-awesome/css/font-awesome.min.css","08c7f4704cbad7fd390f7215c8b5efcb"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","d6c30ee95c6bfbcd18801df47abe121a"],["/lib/jquery_lazyload/CONTRIBUTING.html","95e5d3cc56c71646e2c5b6f850cf5225"],["/lib/jquery_lazyload/README.html","cf0dece334ca50a5f9f2be45d8376fdb"],["/lib/jquery_lazyload/jquery.lazyload.js","96be62ce3a3e409ff41dce8525fc8827"],["/lib/jquery_lazyload/jquery.scrollstop.js","9266fbeb7d9db89e321c59db74d169ec"],["/lib/needsharebutton/font-embedded.css","520ce1a93e4df2f9e95b434ac4925a8e"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","ed733c2e2f1c10c1deb778d3c255dcd4"],["/lib/pace/pace-theme-barber-shop.min.css","af456be9a9894768e31afe5bbc3884f3"],["/lib/pace/pace-theme-big-counter.min.css","9847b9783c31952143d845d6764ea40d"],["/lib/pace/pace-theme-bounce.min.css","afb3bc1f741fc08a0443eab2ebdd2c5b"],["/lib/pace/pace-theme-center-atom.min.css","3fc4de291ea9f5de3f6e44ed23756461"],["/lib/pace/pace-theme-center-circle.min.css","f5c39c3281891b138e2938b91d44c1f3"],["/lib/pace/pace-theme-center-radar.min.css","a3c5355623470321dfa7919bf5386d96"],["/lib/pace/pace-theme-center-simple.min.css","2298aaffad638353c1da7ff8a6827be6"],["/lib/pace/pace-theme-corner-indicator.min.css","b06d07c4af5eadcbb0fa7082ac98943c"],["/lib/pace/pace-theme-fill-left.min.css","509e177e302d7d47c2ceb2c4fbe0cc1e"],["/lib/pace/pace-theme-flash.min.css","c76362f3f7938a89fe9c255b40fd21fb"],["/lib/pace/pace-theme-loading-bar.min.css","d38a42a0e515e751396b70a08c8db6d3"],["/lib/pace/pace-theme-mac-osx.min.css","a4de434b77ead2f7f8b19651575e25ed"],["/lib/pace/pace-theme-minimal.min.css","fb05e31b30ac02e8d806751d0c47a433"],["/lib/pace/pace.min.js","b47b569efec6c4ed0800792c22578c50"],["/lib/three/canvas_lines.min.js","687827a837306641b343c3eb956eed9e"],["/lib/three/canvas_sphere.min.js","63660e76e3f1f325dd9f1d60cb901827"],["/lib/three/three-waves.min.js","8bf36648a81d9821429782d92a51f11e"],["/lib/three/three.min.js","b1245974ecafff29639ef364bde9511d"],["/lib/ua-parser-js/dist/ua-parser.min.js","89b347f91cd97e374ad428f8a93ed357"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b19f4cd330cc552fb038d9127cce665b"],["/lib/velocity/velocity.js","730d06c9cebfc631c91ebff23d01d290"],["/lib/velocity/velocity.min.js","5943b6d7958e10de4a9ad768c785f6dc"],["/lib/velocity/velocity.ui.js","1077f7a670579bae8324a63a3249979b"],["/lib/velocity/velocity.ui.min.js","4879ca549e0fd88f9ac88dafe308124d"],["/links/index.html","875c3fcf61d224840223c500eec8d78a"],["/movies/index.html","5f31d8dde2888c12fe116f2654500382"],["/page/2/index.html","c1ca84f8625ef6c191a0179bd373bea5"],["/page/3/index.html","ebf6421d7f0a512e1523faa868b2a57c"],["/page/4/index.html","84b2664597a5d014f4227cbc9bcb3085"],["/photos/index.html","37cff1331eb2319905fffac434209726"],["/posts/191ddb73/index.html","fafe84ca0a867a1f821ede26d4b4558b"],["/posts/1a195976/index.html","4102a8a78669b0b8a33dd6a7521157dc"],["/posts/2292f1af/index.html","ae0f84a682466a277257caab499b26b0"],["/posts/2fc77d95/index.html","1fdd6b33ed343f9ff86a079b191f038c"],["/posts/2feacaf4/index.html","6d958ee1325bc839c634860e4f1fce46"],["/posts/37f2c331/index.html","4aebffe04fbb6e3ac01b1415f2c1e3b9"],["/posts/385f0de9/index.html","f0b5a5ab97dde6268b2f10dccaf20cc9"],["/posts/44414303/index.html","bc7d6b6496e4b74ce05397c1409d9eae"],["/posts/456610d0/index.html","03a22cc4ae0f31fb257147b9209d8c87"],["/posts/45e51894/index.html","5f3ff8ecd3232ba8bb215368d7ee0769"],["/posts/4f1131af/index.html","03fcf895d30b52487026829cf0c0fba2"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","2d3833d5c21bab69a7056659f07577e0"],["/posts/517ebb95/index.html","5cb0e293416e99d5a32c8de220f89eee"],["/posts/53bf1d9d/index.html","cd5b4ee7cdd0846f0262906c00abe7a1"],["/posts/554c2ba0/index.html","0b5cb4f8cc3683b1cd275e95673ca9a9"],["/posts/63556f52/index.html","4f7c90fdad1db1ec2b370be551ce6d33"],["/posts/6d49ceec/index.html","4c0ed1f0820a8858c45f11677216dd79"],["/posts/6de7d9db/index.html","d32373c18686c547fd909eb7c524dbf5"],["/posts/6fda249f/index.html","1825a4ed22d27feca02d4d2c8f9d1124"],["/posts/84b87417/index.html","2377c3bc62a4c0158ae94a703675a90c"],["/posts/97e5bc9c/index.html","5d0ca5bb5f7a25fca2e489bdbde22531"],["/posts/c311b112/index.html","f1b25140f1917f44ac7670363d11ca5c"],["/posts/c620d4c2/index.html","3c85da806a1017f4fec5eb6fbd3b5b0b"],["/posts/cfc54393/index.html","4af3210bb430c9736b4d14ea3be3c8b8"],["/posts/dc5155ff/index.html","081e40d7cc32596d0d2ad5256192cc32"],["/posts/e1bd836e/index.html","f465333c98a6ebf1404130200a7d9ae9"],["/posts/e31c0293/index.html","57bb4099d34670eca8a998e9e4cc3cb7"],["/posts/f5fc4461/index.html","277cbddacaef8a3c19687b62597cc458"],["/posts/f8073739/index.html","48b157dc4cbc97d46c960e58cc350893"],["/posts/f97ef43b/index.html","3659851462113f92e94e869f5849c54f"],["/posts/fa84d5fc/index.html","104ed9808cd70c96c11b036b1718fa56"],["/sw-register.js","6af24d19ce62bfcda178eae486d9f29f"],["/tags/index.html","4110278fce93ecdd9abbb4242fcb6e69"],["/tags/つぶやき/index.html","1b5eb54eb16dd17ade8a2d86ca6975c7"],["/tags/アニメ/index.html","6704c2565f7138cb222d2919ca1ab6ea"],["/tags/インターネット/index.html","2a21b0e4b044cff977248bd6f5917a9b"],["/tags/チョコレート/index.html","e30f6d0c9226c69c0dc5bcf40834ebfe"],["/tags/中国に関する新聞記事/index.html","4220d6f65ddcbe4588a9b61e0ca6eec4"],["/tags/乳製品/index.html","3a3182f6a43af881f85a836688655ac9"],["/tags/労働者保護法律/index.html","e698206f37b208a5b4e4abc3d19b7036"],["/tags/心理学に関する記事/index.html","94c70879fee2d4b774643e28fc2b7661"],["/tags/日常生活/index.html","37b5c7aefa21b7c8e2a370c6bf0c6dd5"],["/tags/日本のIT教育/index.html","b3e377ccc31186e56ab86efdbd1b40b5"],["/tags/日本のIT現場/index.html","236a617cc03d613d643c4665bca0ca38"],["/tags/日本のビジネスマーナ/index.html","1946e7afb03e7e44c5475ff38e38c8b5"],["/tags/日本の国内の人権状況/index.html","1811de7a5580abfa61e5e60c9d877260"],["/tags/日本の経済新聞記事/index.html","71d2021a8da3928104bc40748d97958a"],["/tags/环境/index.html","f307ac0940cb9ef69f33ebe1308e10d4"],["/tags/過酷な現場/index.html","2387420dc4859612e8bc49d42aa67f70"],["/tags/金融/index.html","f203dee0ba18c305ffd03c8911c988d1"],["/tags/食べ物文化/index.html","55aa32948cd5be07024d0c3c9a9b21fd"],["/tags/食品工業に関する記事/index.html","c9586f88777e005ef617cf516e3a346a"]];
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
