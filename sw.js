/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","f491c3f6acd6b961ae2c07a370819aef"],["/about/index.html","caf1d6bd884ba917c80fc6d3c645f43d"],["/archives/2019/04/index.html","f48a510d11cb49d74a4fab9ed2632223"],["/archives/2019/05/index.html","c3b24d3ce5f00aaaee78d52243bf1fe2"],["/archives/2019/05/page/2/index.html","46b6b413c1dae3f557c270c4a0f6bf89"],["/archives/2019/05/page/3/index.html","9bf8f5b40b844b8d36b7d1ccbed5f600"],["/archives/2019/06/index.html","9b4ab7bcee88e7281f9a03c1ef6952b1"],["/archives/2019/index.html","285880c47ba38103592906d86e82f2db"],["/archives/2019/page/2/index.html","2c763147dc9d9078ca8e0d03f99304f2"],["/archives/2019/page/3/index.html","e0227dc0a66d75c9397462d2d93bc670"],["/archives/2019/page/4/index.html","f95fdc805b50db504119eab5b12db244"],["/archives/index.html","7a449bb0ab624a3d39fb29fbd0fcc719"],["/archives/page/2/index.html","c00b8f097929c19e94706233c706c939"],["/archives/page/3/index.html","4e406ee3be1e075583d7be88a88bcb3f"],["/archives/page/4/index.html","2bf7db3af815bf8c6d6ba48270d24df3"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","909b381b05466178a11591736e2128bf"],["/categories/つぶやき/index.html","0354433990f29c47a4c82e45275b0020"],["/categories/アニメ/index.html","bb1cb0c74ef1361e834f60fec520a37e"],["/categories/インターネット/index.html","9b12b3892786ecd869816d8f31dbe351"],["/categories/中国に関する新聞記事/index.html","cf1464fdb92eae14700d839d280f7a24"],["/categories/労働者保護法律/index.html","d6538da088861bacf7398dfe5576ae10"],["/categories/心理学に関する記事/index.html","e423cd8238993bf4a7335b7192103fca"],["/categories/日常生活/index.html","bcc8fa1d59fdc3ae859bdb85f0ce131b"],["/categories/日本のIT教育/index.html","35239ca39c1195ca640261b0e40b9781"],["/categories/日本のIT現場/index.html","32625e67a7099c2855e69ece2f933744"],["/categories/日本のビジネスマーナ/index.html","24808e9561d7be670ba5b93d91a3664c"],["/categories/日本の国内の人権状況/index.html","2bf5057cab2dce4acb11049255231199"],["/categories/日本の経済新聞記事/index.html","564ec3145569e264912b17fc1ca73cbe"],["/categories/日本地理/index.html","da455cf0557cbc8cfb745e74fd57029d"],["/categories/环境/index.html","806a23413052fde7cb0576ed5aa3d620"],["/categories/過酷な現場/index.html","7744313e5cd0069a0d1a0975e152dfea"],["/categories/金融/index.html","ef2dd5cdd91dd1b211e42b75582491b2"],["/categories/食べ物文化/index.html","846b7808bc7b9211448204ddafb5f05d"],["/categories/食品工業に関する記事/index.html","fbf798018ea45b1c794f2ed4b53a6a75"],["/css/main.css","61d7cbeae2cc5cf37c312ec53bce40ea"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","caccdd8048968f0712c595ab379eb632"],["/js/src/affix.js","7e8b77fb6893206ab29e90ade4ef2052"],["/js/src/algolia-search.js","fd20e23bccecab807e9b83b8526c6fa5"],["/js/src/bootstrap.js","a86da973140939e9080690a3ad7482f2"],["/js/src/china.js","9ec0fbc9385acf66a5ed72d6a6ac8d69"],["/js/src/echarts.min.js","226283f9697f07cdb8fcf319b13cbb7a"],["/js/src/exturl.js","6200030724ee84e5f2cccb15569c7aff"],["/js/src/footprint.js","d7fe98245f4b23fc4ab5fbaad33574ef"],["/js/src/hook-duoshuo.js","7f9c8426fa1e1928458608e2e77deb7f"],["/js/src/instantclick.min.js","e7c9e2480af3f0c19ecbb882d42642f8"],["/js/src/js.cookie.js","fd97bd9a9c4e2036b76279c39fa14e8d"],["/js/src/motion.js","807ad525ce6ed18355f28c34e7eafdb3"],["/js/src/post-details.js","50563b663e2299fe01ac6ca0aa728fdf"],["/js/src/schemes/pisces.js","c2d8a0bf58edea7596ce696023b95283"],["/js/src/scroll-cookie.js","17f78c9595cd3e2017423c06f923fc1c"],["/js/src/scrollspy.js","f3e22a972fad9518df94129f217f755c"],["/js/src/utils.js","25fcc8f94824e32829287434cb537de5"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3848e36175ae48019b15c33705b22c1f"],["/lib/Han/dist/han.js","7d2753247339be2af28f268f307a9df2"],["/lib/Han/dist/han.min.css","2a68ed3a234ff3e5c6ad30214fdeb6c6"],["/lib/Han/dist/han.min.js","68231c25acc51884fc5caa4848d1a641"],["/lib/algolia-instant-search/instantsearch.min.css","4641355c4e49f4564e10f47f0f9a0e15"],["/lib/algolia-instant-search/instantsearch.min.js","90455131481b37afd80b0eb804b771e7"],["/lib/canvas-nest/canvas-nest.min.js","fd8bab861f79f2cc9792c84d9c09d0a0"],["/lib/canvas-ribbon/canvas-ribbon.js","cf47921af6d07d0ba3f422236584cae0"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e7345e4077531f216e3250cf080daf03"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fc84330ea6bcd65c637e524437aa8cf0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f72618775a950d5a6b3a0134f8705b8e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","0ac50c9c964459fa2b681d784f3ef14d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a1dd09609aefd656b5408259f545cca1"],["/lib/fancybox/source/jquery.fancybox.css","fd9351bdc7c31ebe72e3fb1bf8b623f2"],["/lib/fancybox/source/jquery.fancybox.js","16bcfe877332dffb20ba3cdaa1450b85"],["/lib/fancybox/source/jquery.fancybox.pack.js","6fe0dd7b8c593bb8a4c25e9d38372b78"],["/lib/fastclick/README.html","9690eeb519157f2ec061c12d09996de8"],["/lib/fastclick/lib/fastclick.js","3eaea8fd16366d50f29785d7482e03b5"],["/lib/fastclick/lib/fastclick.min.js","2f02e2975401ec8a748183ddfc88368c"],["/lib/font-awesome/css/font-awesome.css","797e079e9db9bc1bca75cbbaed8358a3"],["/lib/font-awesome/css/font-awesome.min.css","3ade3f5e108dc1f017db91114ad67842"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","45c30f5755c115b87fc869c6b65b3a11"],["/lib/jquery_lazyload/CONTRIBUTING.html","775587a2d5945adcfcadc3ad208213a7"],["/lib/jquery_lazyload/README.html","c1a2465ea9dd0e4c3deaede999a73d8e"],["/lib/jquery_lazyload/jquery.lazyload.js","17274e4bd29ed7b1de81cb32c1748ba5"],["/lib/jquery_lazyload/jquery.scrollstop.js","bbe77ada9ca03156b0b499ab64a47370"],["/lib/needsharebutton/font-embedded.css","bb5e486298b7db0573f43f262445535f"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","e580b00a36b52d1f365d87dc19f4b6d5"],["/lib/pace/pace-theme-barber-shop.min.css","f5844f7f2a2797b1df4f9a370ff872b5"],["/lib/pace/pace-theme-big-counter.min.css","f9a4392bf45536400e53419a7015bcc7"],["/lib/pace/pace-theme-bounce.min.css","d1050ab345cd96ad63c5562aa7e670d9"],["/lib/pace/pace-theme-center-atom.min.css","cb76fa16a701d3bb079f6d7a3029962e"],["/lib/pace/pace-theme-center-circle.min.css","e5b0d0cc90656c14e524b91440974b9f"],["/lib/pace/pace-theme-center-radar.min.css","d4a2f8541cf462877657bbabd56a5673"],["/lib/pace/pace-theme-center-simple.min.css","71246b7ee42ecdb0160ee21e7ed93772"],["/lib/pace/pace-theme-corner-indicator.min.css","c0918a079ea0b5da0bbc12219c0b62fb"],["/lib/pace/pace-theme-fill-left.min.css","f4af8659252a347c25edf20bf7ea2c92"],["/lib/pace/pace-theme-flash.min.css","ad73ba7c54c999dabebb019d36083172"],["/lib/pace/pace-theme-loading-bar.min.css","a94df73e3addd1ee49da36203c0090ab"],["/lib/pace/pace-theme-mac-osx.min.css","14ba088e7ce7a1abf1ec216ee67919e5"],["/lib/pace/pace-theme-minimal.min.css","0156c04d8345c9f094c32449a4100be5"],["/lib/pace/pace.min.js","b3f5dfbfa46db41dd31d9891385408df"],["/lib/three/canvas_lines.min.js","569461eb5ef2a3ca7ca882ee802c2ace"],["/lib/three/canvas_sphere.min.js","4bd1db43cff6da94aafde0c945f6a538"],["/lib/three/three-waves.min.js","7346df179289f4b2b2710be3161b806c"],["/lib/three/three.min.js","bde384a91aa327a9d39cfd2eb3876c69"],["/lib/ua-parser-js/dist/ua-parser.min.js","45eba6ac7dc927de059063468bebaf63"],["/lib/ua-parser-js/dist/ua-parser.pack.js","94a6694978ceaf61eb6e65a46017e62b"],["/lib/velocity/velocity.js","aa9ba5bea55b68a18439fbc8c3420066"],["/lib/velocity/velocity.min.js","fb5de119fbb1fe90e4f1170569409c8d"],["/lib/velocity/velocity.ui.js","2b0ee9debe88f9decf47af86c1f81ac5"],["/lib/velocity/velocity.ui.min.js","771cae03dc34a7f661e3794be3c665fe"],["/links/index.html","b7d9b1886f5f5658f1ee8c5ee3ad1ede"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","0e0c76872a5cd8b2c22e94bf3392fe3d"],["/page/3/index.html","5b7ad80b04b03f25169c0f5e12855303"],["/page/4/index.html","692a8de2e26a1b9de0e96cde67cfcd51"],["/photos/index.html","bbae229bf34ed6e5b61a71acbdab2ecc"],["/posts/191ddb73/index.html","1fdd030a132fd7120df00ae37db73693"],["/posts/1a195976/index.html","e697771fff8409f35e920152da9d9ea8"],["/posts/2292f1af/index.html","f963ac75f6099eb877d0e8bad8efc237"],["/posts/2fc77d95/index.html","dba1c1f9d95b500bb52b74316ac4f8a1"],["/posts/2feacaf4/index.html","8cbbf696798f5cfc734f644fe8b77833"],["/posts/37f2c331/index.html","28ff2660293d5534f87379fb31861bb8"],["/posts/385f0de9/index.html","d290ad338ea58f9984cf8caf40d85a7e"],["/posts/3caecfa9/index.html","c0a69ee623b7f6f830209c4b7d504ab4"],["/posts/44414303/index.html","3a671888c78e5568131f56e2c61356c7"],["/posts/456610d0/index.html","f23f99d6d24394ebedb4d99996b31f19"],["/posts/45e51894/index.html","60bf5e5de106fc1ae8e4ea8671acf86e"],["/posts/4f1131af/index.html","82767e62f603861702889a07364abcdf"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","65fc0fbea38be162622db0089df00ac9"],["/posts/517ebb95/index.html","9df2b3d6aa04440a2b9c1ef312fc3b7b"],["/posts/53bf1d9d/index.html","9c2825420977c8bcb396f43ea7a752c0"],["/posts/554c2ba0/index.html","3d846c2e2d8d2f66d268e245cb03cb94"],["/posts/63556f52/index.html","f11d96722243ca1707802d859d98d3be"],["/posts/6d49ceec/index.html","d8a7e56330e3ae0af0e17d43789ca775"],["/posts/6de7d9db/index.html","073045000a54b1878b0958ecb450175b"],["/posts/6fda249f/index.html","b0f94cb2742a56229e3df261dff0e304"],["/posts/84b87417/index.html","827ea607ea6b8983de6204aef76df29c"],["/posts/97e5bc9c/index.html","d322d66b6f0fe8c83618ebd4d0bfa1c4"],["/posts/c311b112/index.html","66bf40264e7b7de654602da0d5f42530"],["/posts/c620d4c2/index.html","a1c0d7d08caaa7e6e29f878434ea4a56"],["/posts/cfc54393/index.html","f2817998b8f7bcb941d37bb4422187c5"],["/posts/dc5155ff/index.html","b15746eb2280af4b0fdfb81cc8d22151"],["/posts/e1bd836e/index.html","b078bce1aca1ecd080e9e5715f694170"],["/posts/e31c0293/index.html","1bf7e064b612bbd6d0c2e7b4efa5420f"],["/posts/f5fc4461/index.html","abd3338221b4707f1480e3570d788c88"],["/posts/f8073739/index.html","8f57a7fc098294feef5b1cab38723fbf"],["/posts/f97ef43b/index.html","896946a282f146fed7205b88669f56b5"],["/posts/fa84d5fc/index.html","9322fa8d5a23cc2222207c68bb1f1dd5"],["/sw-register.js","5000f0d0f37072666d4777887d3f820d"],["/tags/index.html","c32ca7ef4e446114f391be7115171f1e"],["/tags/つぶやき/index.html","608a2792ed3a820d68462bb57f32d4b6"],["/tags/アニメ/index.html","bbdbee4aa979ccf16b686a68f30c1dce"],["/tags/インターネット/index.html","bcd6894f6a711e65faae7122a5fdd923"],["/tags/チョコレート/index.html","6d2539acb17d7d9f264996a711405706"],["/tags/中国に関する新聞記事/index.html","e77bec73f3b38be42d6e6f5bcca93798"],["/tags/乳製品/index.html","978306ec665c8448895c15029f9dfa12"],["/tags/労働者保護法律/index.html","d36c049173da7746a3eb1262e1d2e1f0"],["/tags/心理学に関する記事/index.html","5c4251240774b809018bec15b643049b"],["/tags/日常生活/index.html","84c282dafc3dc717e5fb0c80fc985b04"],["/tags/日本のIT教育/index.html","6e6279ae48fce9495742b6b902e5ca74"],["/tags/日本のIT現場/index.html","c94146d7df5f1b26700e4a2a5483548f"],["/tags/日本のビジネスマーナ/index.html","79a03894a82f02a02a9bd5b73af23619"],["/tags/日本の国内の人権状況/index.html","a5e815b4c51dd374e0d3630ebedf5558"],["/tags/日本の経済新聞記事/index.html","7d8e68fed681fa2c8a019970a5dc4d46"],["/tags/日本地理/index.html","76c056e8f482c458f5d22ba403e470f0"],["/tags/环境/index.html","c6d7116c64a7c08a3774804163185393"],["/tags/過酷な現場/index.html","3e5ef3a4402278582ee1c592a5f4837b"],["/tags/金融/index.html","e6206a6b75ba17003297bf529a4c8ac6"],["/tags/食べ物文化/index.html","b04780aaef81a2d1d8965ca4695a55a8"],["/tags/食品工業に関する記事/index.html","303b35ed4cb1c59097595153191ee984"]];
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
