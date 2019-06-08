/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","1ef5cb6fbfb17646b038a8fcee72c2de"],["/about/index.html","4fb4472bbf4f59a9129228f6f6392f79"],["/archives/2019/04/index.html","d9d92c431c1ca6982de8c453b9ebf9c5"],["/archives/2019/05/index.html","063d88de8c4eadb5f460fa5198d6d12b"],["/archives/2019/05/page/2/index.html","e72cd67807e3667758178d3a46202d0a"],["/archives/2019/05/page/3/index.html","165f33206f148c7e4e3fc0db9162243a"],["/archives/2019/06/index.html","3e09185c8e2b8b02e73b45e37fe56ab4"],["/archives/2019/index.html","474212e75beff54f17ab4a7c60170ce3"],["/archives/2019/page/2/index.html","10178628c79c2a655ced5662be852927"],["/archives/2019/page/3/index.html","8ffc1788d28bdc692010231e11999f39"],["/archives/2019/page/4/index.html","cb585ec514bd7d9012c09ca84fe125ea"],["/archives/index.html","e62ede4e0fac7ca9fc82102df34fc083"],["/archives/page/2/index.html","df7f6d0703576bcd69c8d3f1df158303"],["/archives/page/3/index.html","d03140567e288a5e789a3922ae6da3c8"],["/archives/page/4/index.html","3a4a09b9f45f72c1ef184944a9076ee3"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","5ec5238c96811915fccdf4babd7830d6"],["/categories/つぶやき/index.html","b6188c7f0436989768dff2d8021e5841"],["/categories/アニメ/index.html","2719f5902ec8476813d33384e737b0c6"],["/categories/インターネット/index.html","9c3065f9fb6e6be1430b50a593f32415"],["/categories/中国に関する新聞記事/index.html","259c22654597bdb00304265fafc149d4"],["/categories/労働者保護法律/index.html","a2ba5b03c3ce423e98fe0dac2437067a"],["/categories/心理学に関する記事/index.html","e47c290ce7ff2ed95f9ade39655fa6c3"],["/categories/日常生活/index.html","20bb15d3821b06a147fd6e159471e535"],["/categories/日本のIT教育/index.html","18d78e57caa7f1efb5d62bdd095a3130"],["/categories/日本のIT現場/index.html","4316517bba33e081a626d658fc0720d6"],["/categories/日本のビジネスマーナ/index.html","377702557b8d3e4fe63dd4ca876435b3"],["/categories/日本の国内の人権状況/index.html","7d205d8b3b80a0f09ce36f5db601037f"],["/categories/日本の経済新聞記事/index.html","d63c7f518a8d7a996b5a97652bf9da86"],["/categories/日本地理/index.html","bd63a266caeaadd09a5dbd89d6824498"],["/categories/环境/index.html","c666a54babb7d2cfa95134dfe55ee03b"],["/categories/過酷な現場/index.html","140f134bfaeaea231a63907598070884"],["/categories/金融/index.html","15f6d168f37bc3c2a9144b29c3469c8c"],["/categories/食べ物文化/index.html","30e0c95f04ccf3e431ad2337f5f21398"],["/categories/食品工業に関する記事/index.html","30ce780a7499315682c927a807d88814"],["/css/main.css","b65e6c9b101a93df90090db3db2b6020"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c74ebaee9b17b36ea61aad48d2ccd684"],["/js/src/affix.js","b0e72e015c1bcce6838c8e47c485fb61"],["/js/src/algolia-search.js","23965292ce09f26d63e7d810263a62f6"],["/js/src/bootstrap.js","d8e8877f2ad7c62d1ca0455de485287c"],["/js/src/china.js","f2a6083dfcfdcb533ba57cb833b01a19"],["/js/src/echarts.min.js","f466310be3f26e18a47480c7be612980"],["/js/src/exturl.js","9cb88713d83e08cdbb76afc28a8eb468"],["/js/src/footprint.js","607e50bf2488852c8de5fbeef0b598e7"],["/js/src/hook-duoshuo.js","7b34f398d10fd7aaf13719dbe52eac6a"],["/js/src/instantclick.min.js","9cc06cefc5c2fd33e22d16a7c1981be4"],["/js/src/js.cookie.js","0280caf04f3f9f004530cd5572c4b80f"],["/js/src/motion.js","5ec2dd7e2b664c2d97b895b7ba976cff"],["/js/src/post-details.js","efd7e6d1b1f8259871522665fc78f55b"],["/js/src/schemes/pisces.js","4df297664096f287b2efd2cd5892afc8"],["/js/src/scroll-cookie.js","6977191943fa9bb425fce88f3bd4e696"],["/js/src/scrollspy.js","f5645539742f094f8c56dfab8a0d98ef"],["/js/src/utils.js","a1606d2697dac00ad709e5ba409a7842"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","79d1b44017f4f7ef20308b932bc3853e"],["/lib/Han/dist/han.js","4a996d25882d643723e4813076aa49d9"],["/lib/Han/dist/han.min.css","143a8dd32f40d2ed7eb0fdcc88d14097"],["/lib/Han/dist/han.min.js","b9b7141cdd0315f1e51b06ccfd594876"],["/lib/algolia-instant-search/instantsearch.min.css","20b00dfd15a08904988c9175fe429633"],["/lib/algolia-instant-search/instantsearch.min.js","12d1394d772c432da57dd340284ec9df"],["/lib/canvas-nest/canvas-nest.min.js","8d0b82820c03b5240a4b53490b46898f"],["/lib/canvas-ribbon/canvas-ribbon.js","3197ba7f14ec8f8e2a2ce4c4503d9f4f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","db06453f77e07065bf9c1d446bde1da4"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fc399ebcc72d799ac674aa6a0ce46e41"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6e95c5ef8c98e4e4c7da858a790cc789"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5c4d996942c85cbe4fa25744d2a638fe"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","108339721fd6d7f30fd152c7d04a6328"],["/lib/fancybox/source/jquery.fancybox.css","85a50c57032d8ba56a060167e47362f2"],["/lib/fancybox/source/jquery.fancybox.js","f050210e62b13752eaa813cb6fe73ff6"],["/lib/fancybox/source/jquery.fancybox.pack.js","2247b261c48be1e2d1a70c958fb86edd"],["/lib/fastclick/README.html","4e46a7c436d16f743445b77946c740a3"],["/lib/fastclick/lib/fastclick.js","fc11cf389bb8f507cd497ad4588f6011"],["/lib/fastclick/lib/fastclick.min.js","74244ff2fd88a02675598e80e2aaf93d"],["/lib/font-awesome/css/font-awesome.css","e4701a4f8e3c2c022bf9d8179c3febe7"],["/lib/font-awesome/css/font-awesome.min.css","464cde71209070a9cdad2396557de729"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","eedde1fba5d0130afef392d0633cf995"],["/lib/jquery_lazyload/CONTRIBUTING.html","f357ccd1192e0526c3f118e0a7f53de6"],["/lib/jquery_lazyload/README.html","263c878bd772ad8f166992c2d7a2af2e"],["/lib/jquery_lazyload/jquery.lazyload.js","5f5066bfd248cbe5fe5197ad36e4bb21"],["/lib/jquery_lazyload/jquery.scrollstop.js","f614aa68d55c3b57078411401c5aed9d"],["/lib/needsharebutton/font-embedded.css","9d8170c713902606c7bcb9e9b97cc8c1"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","29d2233dac76493763f0dc6d1986cd2c"],["/lib/pace/pace-theme-barber-shop.min.css","ce627d613ec82dcdbcebd34636082436"],["/lib/pace/pace-theme-big-counter.min.css","a12f15aee88392f86b0abeec8e00a051"],["/lib/pace/pace-theme-bounce.min.css","9302f633d1b2a2059919cf033fc6343a"],["/lib/pace/pace-theme-center-atom.min.css","3256ed9dc37ad9397169f0a3acea5b1b"],["/lib/pace/pace-theme-center-circle.min.css","ada40b5e142f7ed70fcb3822763b6b36"],["/lib/pace/pace-theme-center-radar.min.css","be07a36ac5310fd9903a7a9ced87baa9"],["/lib/pace/pace-theme-center-simple.min.css","8fb544c6cbe1f7094cc35c130e239a28"],["/lib/pace/pace-theme-corner-indicator.min.css","3fda030b22ee01e9a82b42312cf949da"],["/lib/pace/pace-theme-fill-left.min.css","d15e9337a350bc0de6e54ac0f574e2de"],["/lib/pace/pace-theme-flash.min.css","0ec1729abec9edccf3e00b4848b12914"],["/lib/pace/pace-theme-loading-bar.min.css","d85614cff677be51fdbaf3f9b009017d"],["/lib/pace/pace-theme-mac-osx.min.css","47c8062cb8bf5cc6006ae90a1aeafc3f"],["/lib/pace/pace-theme-minimal.min.css","129bf308f18e8a8aa0466a3d660b77d3"],["/lib/pace/pace.min.js","5f0befee4069d71716f8507012272251"],["/lib/three/canvas_lines.min.js","22f9256508a45df3a46bcff7ab8267ee"],["/lib/three/canvas_sphere.min.js","11131370981143cb25e4a6c6dd0bf139"],["/lib/three/three-waves.min.js","0aa8b1500426b09abca3e65c50c69fc5"],["/lib/three/three.min.js","77e009af79c82ad98a2db71cad2e2e3f"],["/lib/ua-parser-js/dist/ua-parser.min.js","4a8375a54648df76dd5d7d388c5deb9b"],["/lib/ua-parser-js/dist/ua-parser.pack.js","594a0f2bea73f6ec34187af419cb0d7f"],["/lib/velocity/velocity.js","b7ff67acb90c28813295b2c61ad3c097"],["/lib/velocity/velocity.min.js","310dc4185d4362f41117c795450db567"],["/lib/velocity/velocity.ui.js","c400b90e706432d629f9ac8523d08c89"],["/lib/velocity/velocity.ui.min.js","fe46e0711472d01f81cb279f31ef8419"],["/links/index.html","a6a46cbcde911ccd5b093925700aee8e"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","6d4e1194fcf8babded70e07fac9e039b"],["/page/3/index.html","4f63be01a76c72657b912151c8fe6c36"],["/page/4/index.html","662790b7281c18c59ada27030f702db1"],["/photos/index.html","ff094fe1b879167f3838afc4bdf9d245"],["/posts/191ddb73/index.html","c326b16720fec8b5ba07c81157ab52df"],["/posts/1a195976/index.html","ed7cf451f1b6c08f1eecf189b8d31b3b"],["/posts/2292f1af/index.html","322dd2992b9301650c514bc80d8ec264"],["/posts/2fc77d95/index.html","51fecb113d87a355dde760b2012aa391"],["/posts/2feacaf4/index.html","09215f13a66c3867e0a14fc45b6c5f0e"],["/posts/37f2c331/index.html","e427d3ea75a2c0882c52a7b39707ea5d"],["/posts/385f0de9/index.html","3d5396a87a74d3eb293076eca23fff79"],["/posts/3caecfa9/index.html","8e3b3a5f73365211da29ad7f1d3e9ffb"],["/posts/44414303/index.html","188a5f13c0c46f9ba897f3630421f3de"],["/posts/456610d0/index.html","7273c0cafbffbc623432543cae9ea8c2"],["/posts/45e51894/index.html","9b99ff3a8eeced4354ef6b7a3d2680c7"],["/posts/4f1131af/index.html","b387faeb6b57f7973ab7ef7630e0f600"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","4f43fd6e3ed530e4cffffaba7b2242d0"],["/posts/517ebb95/index.html","cf4f2f0567c95940036ef3907aa6c1fd"],["/posts/53bf1d9d/index.html","93acb1fa4c02fdc849c132b477999782"],["/posts/554c2ba0/index.html","0758079d37a06caf302c548316390ba1"],["/posts/63556f52/index.html","863c51256206919e25801a27a49d96c2"],["/posts/6d49ceec/index.html","892be005c5b22fc30c973de85797cf95"],["/posts/6de7d9db/index.html","69c96dbb04d9651efe6a3b5d9144d444"],["/posts/6fda249f/index.html","855ddae6e28939ebc5c094a03663422a"],["/posts/84b87417/index.html","7d1fb72c4e9819aba266421d6cad1d33"],["/posts/97e5bc9c/index.html","db69a3ba14a0e5bd9465c5bf26194b0f"],["/posts/c311b112/index.html","e0f00d4d0ae35da40360ecfb14623202"],["/posts/c620d4c2/index.html","140ff93735973c43386a084e3b6f38e3"],["/posts/cfc54393/index.html","afd1dbb4e321672d2b6d046cb87fec04"],["/posts/dc5155ff/index.html","31947a22234b9d0e12fedf67f80a98a5"],["/posts/e1bd836e/index.html","503a6a5dcab2903881fb7119372d3833"],["/posts/e31c0293/index.html","893c66fb9de8c9199821de17a5b6570c"],["/posts/f5fc4461/index.html","69fa4dc4a90515b4bbecbdc122e664d3"],["/posts/f8073739/index.html","35f4c544395f04e0a4192cf633bad73e"],["/posts/f97ef43b/index.html","e814976fba7a1849dc270b2475a43e82"],["/posts/fa84d5fc/index.html","d1dcced0c44a008b87cfe03ad82d3dcc"],["/sw-register.js","77f208793818163d672bbe9f8ddebdc1"],["/tags/index.html","0524eddcd642d526a88034dacf1b5e59"],["/tags/つぶやき/index.html","97c7b135d53bfc5cc7f97d3fac03c2e1"],["/tags/アニメ/index.html","20174d760420936b3c907882d8d253ca"],["/tags/インターネット/index.html","cec12b26490936f14890c74db4e7570b"],["/tags/チョコレート/index.html","ab7d336a119cce5439b551ffb7cdf11f"],["/tags/中国に関する新聞記事/index.html","a5f9eb20f928518ab75e50ae994ba1eb"],["/tags/乳製品/index.html","826ef094ad3c87776165237e13526533"],["/tags/労働者保護法律/index.html","79a817fcbb30d8eb4a22fb3ef2b25b53"],["/tags/心理学に関する記事/index.html","116f94fcd1148a9165fb82c1ecab45a8"],["/tags/日常生活/index.html","bd17372588d9d08f28ad8a716630b50b"],["/tags/日本のIT教育/index.html","a0b4e0dcf9eaa2d971d7be0adf432bec"],["/tags/日本のIT現場/index.html","3a5604182e8549e8fb6e067e6351b1f6"],["/tags/日本のビジネスマーナ/index.html","e6ca3265fccb6ffed16c4ae954295068"],["/tags/日本の国内の人権状況/index.html","6693d1b0df89ffd81f8fcf7a8036942b"],["/tags/日本の経済新聞記事/index.html","632eb260ecea5110d2238682b2893d06"],["/tags/日本地理/index.html","4bc458efa044cfd5a5706428ca8842d7"],["/tags/环境/index.html","c39e1d0ac0b6597ba2a8bb62a639bf86"],["/tags/過酷な現場/index.html","cba3913cb6c307298596701ecc6ff1a6"],["/tags/金融/index.html","50cf207aca9874e2737f96f8348c97d1"],["/tags/食べ物文化/index.html","ebe405bee090a333cbfb4f9b0d4d1369"],["/tags/食品工業に関する記事/index.html","dd81163cdb28234973d37f19a6c82789"]];
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
