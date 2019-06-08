/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","ed28ff4621cc7a9ffc1fbe8bde3bbc2c"],["/about/index.html","fb6346fc7cce04718c264f91432c4b0a"],["/archives/2019/04/index.html","4a9115c36c8073130fa741a8ccbc1767"],["/archives/2019/05/index.html","798f492eaae75f14fa8d3d3e61a7a2de"],["/archives/2019/05/page/2/index.html","68a007c78a6a025b76f06dab579c0d92"],["/archives/2019/05/page/3/index.html","83437352802f7b1e335c75a96a6f07b7"],["/archives/2019/06/index.html","bcbb2f37310de29b1afa92e3607f8374"],["/archives/2019/index.html","ad348f1699f12ca1bb5f1cfb536e28bc"],["/archives/2019/page/2/index.html","b249aed3a0c831b9e4862a6c87b4e1cf"],["/archives/2019/page/3/index.html","b1cb70b51efae29b3e688549d4f83a7f"],["/archives/2019/page/4/index.html","ec0a04d09a9e1494a2a1cacc5d719c48"],["/archives/index.html","68e2029a59e36e0ae45d6fa9d72e4613"],["/archives/page/2/index.html","038aa94eb42e93b5fad9e1280456d834"],["/archives/page/3/index.html","d6c65c9890c677b6e8e17576d340cf07"],["/archives/page/4/index.html","fe0d20167bc8ef7412877df9c9e551c7"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","41e859322c44513a3862551b2aa2870c"],["/categories/つぶやき/index.html","ffa99c2c9de5808bc6463a658d93fb01"],["/categories/アニメ/index.html","a7425064690d3e3898eae75e234b7b93"],["/categories/インターネット/index.html","404994db036ea303956f06ac581a7a95"],["/categories/中国に関する新聞記事/index.html","a7a5f602ed70cabec1a850245c227381"],["/categories/労働者保護法律/index.html","a751461026bdeba3b069d080ad2f65f7"],["/categories/心理学に関する記事/index.html","8df093b30b65103d22954c81dfb89d26"],["/categories/日常生活/index.html","843c9fe7d3cb36b79bdf9a65f70edd7d"],["/categories/日本のIT教育/index.html","1eeb8ef29761c5d315ca9bd0069e9062"],["/categories/日本のIT現場/index.html","d2310f4f7e492d82d24547af82e7f6e7"],["/categories/日本のビジネスマーナ/index.html","6e3a7639b1c2efa33ccd2a1d5301c52f"],["/categories/日本の国内の人権状況/index.html","242070b153cf963ca1df48fdca899af6"],["/categories/日本の経済新聞記事/index.html","1b227234fa3d4395c98ee9f0f7ed978a"],["/categories/环境/index.html","c6ef0e556da769a66976fdb4d3b5abd3"],["/categories/過酷な現場/index.html","96d929938ab86f9c5ef5480163ef4456"],["/categories/金融/index.html","7c179623da7aee5d579755b6d24ba5da"],["/categories/食べ物文化/index.html","d5fe195c3d8444e3b5afc615360b8957"],["/categories/食品工業に関する記事/index.html","4291fb6d17facfe6fa7e2bc212b3ef9b"],["/css/main.css","298df4420fa15f49c6eb687793bd0485"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b95f3c353f74a210cc7890e10391abbf"],["/js/src/affix.js","866c46f9652cbae28ef9bc15b2f35ad8"],["/js/src/algolia-search.js","ff0bb999f21c75d50f0c9692574445d8"],["/js/src/bootstrap.js","6167bc49a8fab9456d373353b86c3fe6"],["/js/src/china.js","83be67cbbc1d25dfcaf4b2e89fd3dfc6"],["/js/src/echarts.min.js","2bb53e4ea8ba995a17617568c9c12def"],["/js/src/exturl.js","e60b4816fa15c3902090f33d3441a9f3"],["/js/src/footprint.js","ad35adfd2664b7310c4f01c48081c050"],["/js/src/hook-duoshuo.js","803ae725cad49e182ff7fb743b32bd10"],["/js/src/instantclick.min.js","aeed0cfa148b50e9384355b1c873d542"],["/js/src/js.cookie.js","e866aaa306285584946f85fdeb4025df"],["/js/src/motion.js","348ade18c064bd40ffb0822e6f7a7731"],["/js/src/post-details.js","86b3e3513cd6503891766709b55c993a"],["/js/src/schemes/pisces.js","7b67c78ad2ca5e2c11578be803e76792"],["/js/src/scroll-cookie.js","ca8beb3861692a48f427374b5c5d4638"],["/js/src/scrollspy.js","9dcbf9dddf9eaeef0ce95ab7c432a4f7"],["/js/src/utils.js","7318a060e50b9655ccc80436698dcb07"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","934cc78b8916623c9f74494712ab2e54"],["/lib/Han/dist/han.js","23ce939b90fb44e64528f3c4fbbf7d8e"],["/lib/Han/dist/han.min.css","1e41e3581cbf2b9e348a8bc88b0f8e94"],["/lib/Han/dist/han.min.js","0857cf3681a3921a4d3c4357212e4f93"],["/lib/algolia-instant-search/instantsearch.min.css","b41a2c7c5e634f168761361c305cdc64"],["/lib/algolia-instant-search/instantsearch.min.js","4bf91e40a802a84a8ebadf0869f1bb5c"],["/lib/canvas-nest/canvas-nest.min.js","a015e6769a3f60e4254d9b4a7e1948a6"],["/lib/canvas-ribbon/canvas-ribbon.js","5e1c8e3c0dbeca4eca3bbe45b2b97f9b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","869f8c5427bf4557e63682bb5eadf2c0"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a3fc65f229213993e4367cb20b1c93c1"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4565ab28386ef68855cde92a36fa61d8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","14ef8d22a69e385de2e81e0ac1ba6991"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0897fd8cb9a002bf4f63b85b91f436b4"],["/lib/fancybox/source/jquery.fancybox.css","899b44f2aa1a32af5df720497108518b"],["/lib/fancybox/source/jquery.fancybox.js","6d6ff95aaa46695ac5ac5525950dbb7e"],["/lib/fancybox/source/jquery.fancybox.pack.js","68ba5bb77fef91796e821f5569641ef6"],["/lib/fastclick/README.html","63db2c93a6d5930d85975eed8be76319"],["/lib/fastclick/lib/fastclick.js","7741b47a5dd99b2494c9569dc546d30a"],["/lib/fastclick/lib/fastclick.min.js","8541a30ecb68d96bb7b11691a2973b65"],["/lib/font-awesome/css/font-awesome.css","9cb45a9ece23e06884396647c7819bc2"],["/lib/font-awesome/css/font-awesome.min.css","7e519833a3557822c98d0dee9b5218b9"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","77bcdb20cdb5f4eab21f6b81b964fbfa"],["/lib/jquery_lazyload/CONTRIBUTING.html","89bb6a697583206053f6d66a9b3b4c82"],["/lib/jquery_lazyload/README.html","e0e7543b82776238c4729c8da717779a"],["/lib/jquery_lazyload/jquery.lazyload.js","361986abc4e8fabc4c78b178160231a2"],["/lib/jquery_lazyload/jquery.scrollstop.js","e60210dc1a84bd2bcd47059f327372f7"],["/lib/needsharebutton/font-embedded.css","2bdea9c8edbd6e94f70d83245b7742c3"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","66802beeb9de2e184b03af6792c617fb"],["/lib/pace/pace-theme-barber-shop.min.css","b5bb8416c54a89f7250a34b5c20104e5"],["/lib/pace/pace-theme-big-counter.min.css","5531ecb0e61e7536447c870fc0653a6c"],["/lib/pace/pace-theme-bounce.min.css","2a79bcc71fb3a336aa01421cb18b19d7"],["/lib/pace/pace-theme-center-atom.min.css","2dbf489f4d9a54eea3f2a50b13874bd4"],["/lib/pace/pace-theme-center-circle.min.css","e7d05e9e9b8fd08691492498509e070f"],["/lib/pace/pace-theme-center-radar.min.css","cb58ba637a8208d0cceb0c7fa3f88559"],["/lib/pace/pace-theme-center-simple.min.css","e6db5e6979bf035f1097f13b37ecc40e"],["/lib/pace/pace-theme-corner-indicator.min.css","662c845ca90ac0f4f117d9b1f8bd82cd"],["/lib/pace/pace-theme-fill-left.min.css","3977cf136b27f764cec3d70464649066"],["/lib/pace/pace-theme-flash.min.css","c76d41add409493d3a6eff9602091f2b"],["/lib/pace/pace-theme-loading-bar.min.css","da30737babf73847e8a980a28168f92d"],["/lib/pace/pace-theme-mac-osx.min.css","93fa3c444fb6eddfa46745ebbc7a382c"],["/lib/pace/pace-theme-minimal.min.css","2c4af3a1d1074694434b84311b7f8711"],["/lib/pace/pace.min.js","01939674a098012c87d708ebec86ef2a"],["/lib/three/canvas_lines.min.js","46a244a7efba90b7d6e0e2f603a6ad13"],["/lib/three/canvas_sphere.min.js","e74f820f917cc2e98438c04b1df36a88"],["/lib/three/three-waves.min.js","c47c3f4462ab3a5536b0c408a48e533f"],["/lib/three/three.min.js","3bf8c9f26581b36f99587571340132c9"],["/lib/ua-parser-js/dist/ua-parser.min.js","ed878e76fcd7fbed66be736bc8656eba"],["/lib/ua-parser-js/dist/ua-parser.pack.js","3800627a9c064c1a23b52e5fa8708d00"],["/lib/velocity/velocity.js","0f9e3e8cc9fc6c0c2057f3a744fce4ff"],["/lib/velocity/velocity.min.js","777d2be16758b3a76c41c4f7c7815cb2"],["/lib/velocity/velocity.ui.js","713bafc6dba1bbf92bc6131c6ed6800a"],["/lib/velocity/velocity.ui.min.js","935c54a56136d2cd3f95f8371ddef718"],["/links/index.html","2b85aae14ba911542d9789ee7fdbef77"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","29b36828feba2f49d9df263a4443084a"],["/page/3/index.html","7db6ca3af10270f48360e81116ca6535"],["/page/4/index.html","6d017a98130e3ac421aae4ba40b04b1b"],["/photos/index.html","26b7f6a5927b746447fb681daeb6c814"],["/posts/191ddb73/index.html","be10986ba9739435b97797fbf010e1fe"],["/posts/1a195976/index.html","2ac34081db0329b9bd0317d76e98fafc"],["/posts/2292f1af/index.html","afa3820089bcdad1e4563538e394495d"],["/posts/2fc77d95/index.html","97790d00d6664ddae9cc37b03845d7e2"],["/posts/2feacaf4/index.html","001d13d64b36a26e058942396f4326b8"],["/posts/37f2c331/index.html","a6cfa5b50da889989e6a436316d66697"],["/posts/385f0de9/index.html","f1a822a8a7668cad36a3917256e6f5b3"],["/posts/44414303/index.html","e2ad539a499540650d7058770ade764c"],["/posts/456610d0/index.html","fd39416b52c0309ce513484cb7b0726c"],["/posts/45e51894/index.html","0731812ff44e7b0b71a42714b67352ef"],["/posts/4f1131af/index.html","9dd083c4d99277b7dc41955c677b0e52"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","286fb37c17ba486866cac7019fe4add5"],["/posts/517ebb95/index.html","ef7321f7f120b3f4cd194111f9f1a863"],["/posts/53bf1d9d/index.html","0956f7cecc2359c33783b07a38e5d844"],["/posts/554c2ba0/index.html","1c366f6cde09284f66c921aa7979c1c5"],["/posts/63556f52/index.html","b26111dc2282ac6e1d9236a4e9954afd"],["/posts/6d49ceec/index.html","82808a21a25e2f1122f5b2eaf38330dd"],["/posts/6de7d9db/index.html","e46bd0aa5602224c92005686c09ec412"],["/posts/6fda249f/index.html","ec8bceb6edcd8141c83fbc4bf82541e3"],["/posts/84b87417/index.html","37db6ecd1106f1ee94d92c6fba672d3f"],["/posts/97e5bc9c/index.html","0e41a152e3c121a35f7c3d62c83e35de"],["/posts/c311b112/index.html","63e23271294432ef084561b0fe422390"],["/posts/c620d4c2/index.html","cbe86e718d65c7c2e30b54d35d3bc396"],["/posts/cfc54393/index.html","052910b49489169f86872a7adf7fcdd8"],["/posts/dc5155ff/index.html","962f6368e93122b1f530668fb2cd9360"],["/posts/e1bd836e/index.html","f1662d78fe9f2c209996731cceaf2d41"],["/posts/e31c0293/index.html","3a354e47e6a499ab8bde09a17ee6e69b"],["/posts/f5fc4461/index.html","fe55c95329bd17adadda013c0268e71a"],["/posts/f8073739/index.html","5ad61e98486abceffc9bcd3a0b097486"],["/posts/f97ef43b/index.html","54e0bf237ab806c1f672cc6a88d57da3"],["/posts/fa84d5fc/index.html","2feb94fcee86bf0d67456588570b8f28"],["/sw-register.js","ecb4be2f4be5f4007d3876e50fbcd674"],["/tags/index.html","b4e552061a113aad624e74d673c4c7f6"],["/tags/つぶやき/index.html","a5a422279af0b0fe2f3e2f823fb629d1"],["/tags/アニメ/index.html","473604384e33a67043a00c471ff2cc54"],["/tags/インターネット/index.html","fd9f5b94219fadc29ec2decc143fe00f"],["/tags/チョコレート/index.html","41557f23113b9d8809345dbd46283b08"],["/tags/中国に関する新聞記事/index.html","9a9d93670d48f7e35bac8c3364f08a48"],["/tags/乳製品/index.html","e5bb5b544dbf5c110b1c7197b058026f"],["/tags/労働者保護法律/index.html","a9f8536746fdb8e1a181273c8d7c84c6"],["/tags/心理学に関する記事/index.html","b2eb38e7a36dbe17d5d37cc72e1623e4"],["/tags/日常生活/index.html","f380a7719dd1587fd9c1ffa039eae040"],["/tags/日本のIT教育/index.html","fab39abae1151f304fc2fc2c276c9140"],["/tags/日本のIT現場/index.html","1db2aa06f1a2cfac79fbff0e0a02299c"],["/tags/日本のビジネスマーナ/index.html","d8c1f4edc4d378992e8cb7ebf2828cea"],["/tags/日本の国内の人権状況/index.html","a743292b06d99fed3cdce3ef000d7809"],["/tags/日本の経済新聞記事/index.html","1bc1b640b864d7b20b0a2af0235a1dca"],["/tags/环境/index.html","46ab8469edae9aed93fdf88e9f8c988a"],["/tags/過酷な現場/index.html","67e4865892f6a91891bad643da1fe95f"],["/tags/金融/index.html","a5cf9d9f781437fbf993984df90387fe"],["/tags/食べ物文化/index.html","c5cb4a015dac81e73fd38c597a52f56e"],["/tags/食品工業に関する記事/index.html","76720db9d291baf0fb3d2a865d67eab5"]];
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
