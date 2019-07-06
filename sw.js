/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","4498bcf375c90298ca5c8b80c1d08970"],["/about/index.html","f914a0ad87ea5b94291e5d9e8105ee2a"],["/archives/2019/04/index.html","5c8299f06a57339e1b3cacf7a3a89293"],["/archives/2019/05/index.html","732cadb5492881589a639a1835402b98"],["/archives/2019/05/page/2/index.html","0877166c742e3d567438d97fb48dc1c5"],["/archives/2019/05/page/3/index.html","544129a416e3d2a069b3e712832f7a97"],["/archives/2019/06/index.html","d8a937e408f85f172e56970b779b8210"],["/archives/2019/07/index.html","6eb475038e221cd0bdd8ac3baca6d573"],["/archives/2019/index.html","28d958a29d8635136eeecad6d4f58da3"],["/archives/2019/page/2/index.html","038506ce1d3a5773c31cf5aa29f753f2"],["/archives/2019/page/3/index.html","208a7b1ee82b0a272c0eb1865b097080"],["/archives/2019/page/4/index.html","d53a63e7f7418fdd92fde3d8003e129e"],["/archives/index.html","4c735406429ea56b18ad3daa771702b8"],["/archives/page/2/index.html","cd2e5534e3172a5be5ef7bb3185025c4"],["/archives/page/3/index.html","0fcebe5c8f3fad402bad0b0e5c7d839a"],["/archives/page/4/index.html","e9e204c7c498865788238cf7bf23a4d6"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","a0799615f8f33f4fbb9dd8d521fe22a1"],["/categories/index.html","7414d7a0e415dadbcf7ac56525371022"],["/categories/ことば/index.html","68a90e3ba0fce49af0677bd5b0d8bc5c"],["/categories/つぶやき/index.html","de2f754aa3bb66036f81c64a43970c29"],["/categories/アニメ/index.html","7bcbe27abc801a551fc7160abcd2fa72"],["/categories/インターネット/index.html","cf02845ea3c354f369fb14a008ea97d8"],["/categories/中国に関する新聞記事/index.html","9b7f7d2e06bd08507feb555ed38c8165"],["/categories/労働者保護法律/index.html","08c395001324b0d165f3be578e7b5be9"],["/categories/心理学に関する記事/index.html","46de9bff93dc2e957b99ae6c1902ffac"],["/categories/日常生活/index.html","40d1ea8e659f345781c2e5b2d453a196"],["/categories/日本のIT教育/index.html","6cee9753270d4e4f831cf6f358f5b3aa"],["/categories/日本のIT現場/index.html","5b54265cf173d401b4aee7cc7d4f9ad9"],["/categories/日本のビジネスマーナ/index.html","9c06428573468c9590fe82cc88c14d2d"],["/categories/日本の国内の人権状況/index.html","9f9fab21a1a024054f51a14d5a923d05"],["/categories/日本の経済新聞記事/index.html","58c5ba47bb24800946a78e6e23857c5c"],["/categories/日本地理/index.html","c109e5a0247aa5b7eb750af0a6227afc"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","b3739b21214d60deecd2314b0bf8d439"],["/categories/過酷な現場/index.html","241ac31885f2a098cc524005f5566724"],["/categories/金融/index.html","205223cbec988cf94f348b01ace069ad"],["/categories/食べ物文化/index.html","a1d38dbaa0fbad94fd7c256964c40a0d"],["/categories/食品工業に関する記事/index.html","470fa30347568457a15e742fb185d2e9"],["/css/main.css","c7d179376b2b71615cfa7655c12a2351"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","07069b11744af506720666168ae95527"],["/js/src/affix.js","2c8941598165afa1943b94f659e946ae"],["/js/src/algolia-search.js","21b6e5ecde7ffb4ceceaef9b5f236476"],["/js/src/bootstrap.js","a76691a7ecb19f96f58ab61c03e85238"],["/js/src/china.js","792c63fe6f87088045cbac4f21d99478"],["/js/src/echarts.min.js","30d5ccb51a9e06ea1cb51beced7491ee"],["/js/src/exturl.js","0b6821220d629b66aadfbd3089da8b91"],["/js/src/footprint.js","84e52873b7d81d954023bb3b73bf82c7"],["/js/src/hook-duoshuo.js","3b5dade34ac355ce837011c8d0d657af"],["/js/src/instantclick.min.js","9af0d40ae1b58570329aa2f95fc2b0b6"],["/js/src/js.cookie.js","33770601570b80bb3115689fa0cc11e1"],["/js/src/motion.js","ba6b5a20f73e27a288de135ec5ecb581"],["/js/src/post-details.js","f0623a313e202e6978ec810d293483cc"],["/js/src/schemes/pisces.js","5fcd953bbe05d8c69a2f269f89241ff5"],["/js/src/scroll-cookie.js","3027b1158e164980e8f43cdc6701b38a"],["/js/src/scrollspy.js","4a85273f9a79642ee163b239425f615f"],["/js/src/utils.js","9500e8fe4eed40fb5a5683215ba0764c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","9e56dff298041677960a58cdc526b2a8"],["/lib/Han/dist/han.js","041c342102a16e5dad8bb96b32df7bdb"],["/lib/Han/dist/han.min.css","ee2efadef10ae7ae6ccc16e0ce3452ae"],["/lib/Han/dist/han.min.js","9d077ca1faea9f95a3fec88d0f0412f9"],["/lib/algolia-instant-search/instantsearch.min.css","41c457b582ef3b4347a6e30e81fecee1"],["/lib/algolia-instant-search/instantsearch.min.js","a9615ce7d0b65f81f27bb1df075707ca"],["/lib/canvas-nest/canvas-nest.min.js","77d6a64ac42af56e040dbdd21bfbd548"],["/lib/canvas-ribbon/canvas-ribbon.js","111a435c6225a5731d47d38a3329cf8f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","3b2c25c8a92561d264a07b0e1cedbdd5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fa6ce6e3eff23122c6aee02b56781388"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f54de7267cae090a8193cd18e3aac653"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f6c6b38cfe4bcd8210ab42d0ac613fe8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","714811e0f7a504143ccf00e22cf1a403"],["/lib/fancybox/source/jquery.fancybox.css","1449fcfde268398cf7a6654fa95b3162"],["/lib/fancybox/source/jquery.fancybox.js","09930205737ad2b59f0434b138ee5c8a"],["/lib/fancybox/source/jquery.fancybox.pack.js","22c96e198e964455354c7fe0e3054e05"],["/lib/fastclick/README.html","a24564ae232454df9e4341ebd05a54e3"],["/lib/fastclick/lib/fastclick.js","9ea83be27edcc035e7b64bc610969311"],["/lib/fastclick/lib/fastclick.min.js","84b14b70755718f584de1d503710651c"],["/lib/font-awesome/css/font-awesome.css","ffef4b211a9f9c58db00a8158ecd4248"],["/lib/font-awesome/css/font-awesome.min.css","668fac5ab3faa77c70d0c2982bc97b25"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","f82e46d76a0c9dbb0f4a5fda3a29fd8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","bb58f8289d9f4a79fed2115b4b824c41"],["/lib/jquery_lazyload/README.html","698675716da6dfcf9ca54b4de4173256"],["/lib/jquery_lazyload/jquery.lazyload.js","9b8d1c1d9544dc0afb751baf1773ea35"],["/lib/jquery_lazyload/jquery.scrollstop.js","b0066ab72d7eced4115f4757bf12f05f"],["/lib/needsharebutton/font-embedded.css","001c582a1b6316cf80bd794d679f0ee4"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","bd6171e7d4f498cc685b2682037793da"],["/lib/pace/pace-theme-barber-shop.min.css","8dbe4b1982457f4f058efe0690367f47"],["/lib/pace/pace-theme-big-counter.min.css","6a855b6c7b152a82eaee307d4aa8ef92"],["/lib/pace/pace-theme-bounce.min.css","28cdef466ab9d207b36afabf76f8ad8d"],["/lib/pace/pace-theme-center-atom.min.css","00e1e62014ac9edaba1d8f4fd0069448"],["/lib/pace/pace-theme-center-circle.min.css","2baf0bea7e5ed3a6538b78b40a983c0f"],["/lib/pace/pace-theme-center-radar.min.css","ab7234cc0e47e1f5624e8d9b188b5a6c"],["/lib/pace/pace-theme-center-simple.min.css","9ae002f242b145dcafa4c2318a5ce65f"],["/lib/pace/pace-theme-corner-indicator.min.css","29855f81a4720bc22853f32f5b44406e"],["/lib/pace/pace-theme-fill-left.min.css","8adfed3b46784701f304a876d8a1d2ca"],["/lib/pace/pace-theme-flash.min.css","23f7c1c63dcead9cf50f67021e5c169e"],["/lib/pace/pace-theme-loading-bar.min.css","87176dfa292bab49af6f7985553e5b6d"],["/lib/pace/pace-theme-mac-osx.min.css","5c168edff487d3abb9e372fa3074f302"],["/lib/pace/pace-theme-minimal.min.css","b1ed19b1c330c3ddf54435d623186a91"],["/lib/pace/pace.min.js","8f483098edb6ece8c60c83486941dd6f"],["/lib/three/canvas_lines.min.js","c1801c70445d262651d9b7f412af6dc1"],["/lib/three/canvas_sphere.min.js","3a4ca61f67267a8c2c9c3befa1f2148b"],["/lib/three/three-waves.min.js","43477d352200be193903a8fe143fb46f"],["/lib/three/three.min.js","8601dfc887cb8f8f5768340d0e0b09cd"],["/lib/ua-parser-js/dist/ua-parser.min.js","43f7626e6b1738de387680925019b851"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5e85350da50429b0364fba86e693178e"],["/lib/velocity/velocity.js","e89696eaced9daa72bb79ad9bf0ff396"],["/lib/velocity/velocity.min.js","36f4619be76ce258fdacad47d6b41126"],["/lib/velocity/velocity.ui.js","5d5e016dadb061d1ce401f78a306cb64"],["/lib/velocity/velocity.ui.min.js","d8f8179bd6fab623d6024b9890d76f98"],["/links/index.html","7284c1f7a2babebfbe44ca41ddb4032b"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","8eb2b6291226fd4c6a261017be078a65"],["/page/3/index.html","41fda84f20d8bb2e788259e2cb44ff13"],["/page/4/index.html","720475b1defe0adc598f031d6a443d1a"],["/photos/index.html","9b2fb7bf0653d0ab7de9d9036016f5a5"],["/posts/191ddb73/index.html","b68607416dba42deece69d02b507ae1a"],["/posts/1a195976/index.html","42a7631aae140c4ac7b08fd6348c2900"],["/posts/2292f1af/index.html","c9402365c01752421e60fb0fa96e50d3"],["/posts/29d57d6/index.html","b33e175e5f5521a352e4c9b7e1ff09e7"],["/posts/2fc77d95/index.html","b203b4f33ba9e941617bb3af71f48947"],["/posts/2feacaf4/index.html","4f8ef6462a8fedd2ad47810fb7129379"],["/posts/37f2c331/index.html","867419360cbc8ba550e676c2e7ff0302"],["/posts/385f0de9/index.html","b00298c552851dbe9ee33b1de317176c"],["/posts/3caecfa9/index.html","becd37c1b271b1c10e4532a3f723b496"],["/posts/44414303/index.html","fb6a74eba6063abd08d4ae1bc343bb85"],["/posts/456610d0/index.html","8800c61c134f93d26f4bca318775a88f"],["/posts/45e51894/index.html","64ccae5b3bea4ebaffb3cbc73557e603"],["/posts/4f1131af/index.html","50c61e15227b9d27d2b4b3a4c42629e5"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","1451758cb521ee656b1a57ce32a33516"],["/posts/517ebb95/index.html","67753d0395e38087c59a35a4b71c6bbf"],["/posts/53bf1d9d/index.html","d5c4434fc8e4d3a4589771b8ac4fc54f"],["/posts/554c2ba0/index.html","535c620ddb3032fb89a0dc3a2463cf57"],["/posts/63556f52/index.html","b6696af8ead6dafa121b3946830f06a6"],["/posts/6d49ceec/index.html","ef4466fb667dbe72b96c982233687213"],["/posts/6de7d9db/index.html","31f3aa5d02348c07cfe120495d0fb28e"],["/posts/6fda249f/index.html","6a57717f4361b420edce5876fcbf2b1b"],["/posts/84b87417/index.html","939495905d201e6d4f00ab31e5a2cf05"],["/posts/8a60fcb8/index.html","6df4c4ddf177b7fb271facee4a81ba39"],["/posts/8b4c253/index.html","e80f6112f15b6347382ead24a4ad411b"],["/posts/92912ddc/index.html","eab6e93982d102a894a537d6ed4903d2"],["/posts/97e5bc9c/index.html","c2502b0cbf03b8f3cb745b4a869c590c"],["/posts/9a5c7b64/index.html","14d7b55eede5d5dc145849059b09dc70"],["/posts/ac7d0231/index.html","506c797048248016d3a48dc6302099a9"],["/posts/c311b112/index.html","f10e5f597994f1296451325e4a3819bf"],["/posts/c620d4c2/index.html","4bbe3036d35d1286b1b905147c6c1001"],["/posts/cfc54393/index.html","abeb9ab3c918abd286a41425b10aeaed"],["/posts/dc5155ff/index.html","4eb1d6790595a6dca9374d711b473c86"],["/posts/e1bd836e/index.html","c76cf70d4cd1e0841de6dd836917f814"],["/posts/e31c0293/index.html","2532abfbe1bd295a6cb3ec3cdafbcc6c"],["/posts/f5fc4461/index.html","a4d1c7a7c3c32e661aca72e70a9a5e56"],["/posts/f8073739/index.html","a158150d7baeb97421371a397cfd79f5"],["/posts/f97ef43b/index.html","09690c5a3b0f42092ec110799268c415"],["/posts/fa84d5fc/index.html","246fb3063060e47260ae72757414e20f"],["/posts/fb1ab942/index.html","c1c42883324d8074e0637a4c7b3190e9"],["/sw-register.js","eefa6c8c5c5e66fc1c232016a995b644"],["/tags/J-pop/index.html","8b24396b12eccf2f7968ce543041ea07"],["/tags/index.html","6e0a35d1216b23a3b78af61d82863a32"],["/tags/ことば/index.html","c00e8668dc621039317b8d1499546e54"],["/tags/つぶやき/index.html","8a3b6564215f7f00afee6b33ccccf8ed"],["/tags/アニメ/index.html","f3cf2ce0bfcf04c0b211dc68787c0297"],["/tags/インターネット/index.html","cc2ecad6ad702e6b3a50bef00b13e0b9"],["/tags/チョコレート/index.html","33533b772a3a3625f5b82a6073c80a44"],["/tags/中国に関する新聞記事/index.html","08dba4d6aee6928cb02d3bee1502e5f3"],["/tags/乳製品/index.html","69725f226cff3d6e0476d30af0000787"],["/tags/労働者保護法律/index.html","b0bd9bf6d5ec5cdfbda096bf6a3afedb"],["/tags/心理学に関する記事/index.html","c01b40283d8295918893087a6fec5c8a"],["/tags/日常生活/index.html","6283d62cc1bf6062efa0a145f228d92d"],["/tags/日本のIT教育/index.html","41441393a7dbe0a5ed7ecd64fae5ad5b"],["/tags/日本のIT現場/index.html","d9604e1ee5d2429407edfa52c8c91525"],["/tags/日本のビジネスマーナ/index.html","ddfdda61358bf4cd18ad28a956dae0a2"],["/tags/日本の国内の人権状況/index.html","7b890f2cdc1dd45c1b1dcc525e6ef07d"],["/tags/日本の経済新聞記事/index.html","ee2f5fc58bf5c33935b11da9b9fdb585"],["/tags/日本地理/index.html","003ee48695b637cd73b7886b9d42d4ff"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","c9e88e762e10928f24eee8a6edc3a762"],["/tags/過酷な現場/index.html","271adb922ecc49c47153e8951bdb65b5"],["/tags/金融/index.html","7b7bdf5f499ed79ffd77d2c4061be1f3"],["/tags/食べ物文化/index.html","c07f7723a9f8359088b19db8ab649a72"],["/tags/食品工業に関する記事/index.html","77d38458c7accb3775bccf90de1b4ff7"]];
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
