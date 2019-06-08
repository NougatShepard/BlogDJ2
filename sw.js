/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","9c3e215118de7f883356ae497c701d2f"],["/about/index.html","62cb0cddfb9636f356a7f1892f5b92cf"],["/archives/2019/04/index.html","6c9ff98b3c861d5848af901fb5530a3b"],["/archives/2019/05/index.html","05c38cc1872c2af2d8b075bc13373954"],["/archives/2019/05/page/2/index.html","d8bdea2e6c225e4837907d9c239b84de"],["/archives/2019/05/page/3/index.html","2db81b5987c7b87c2b8cf1f5a3f48713"],["/archives/2019/06/index.html","6bcdaf46b49a6885a3e51350be50edb1"],["/archives/2019/index.html","d8cd9e24d2b5602ed9b129e61b062413"],["/archives/2019/page/2/index.html","b2277339491dfac54f7f8ded3c42e692"],["/archives/2019/page/3/index.html","cbe9ed2c2326afa23d9141a21ce7e964"],["/archives/2019/page/4/index.html","6d9731850914e2baddf3156afff97714"],["/archives/index.html","7322454a615697870c1cd4d88319c18f"],["/archives/page/2/index.html","57082ee343268923b11e351a55333394"],["/archives/page/3/index.html","72b0b5cc61ffcc54441e081a82a09bf2"],["/archives/page/4/index.html","01a6e8f619a23ccdfdadb5cb8f15b767"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","334a6255cae6bdb4f67c00d5fbf73e0d"],["/categories/つぶやき/index.html","5f62fec2eca4b9288e5093d5475d0627"],["/categories/アニメ/index.html","7db4cce3ddf96a31e168af95360fd88a"],["/categories/インターネット/index.html","69aa21d262936268afc50cf4844e8eb1"],["/categories/中国に関する新聞記事/index.html","e35b6ce5be1f05cccbb3de1421a337a9"],["/categories/労働者保護法律/index.html","e28e547db23d68648b630099efc9b939"],["/categories/心理学に関する記事/index.html","a312302f1c02e082c97c2e06ccdb7577"],["/categories/日常生活/index.html","444f76f7691410a227aa72de11d43866"],["/categories/日本のIT教育/index.html","eafc6e6ea33b780c0ebabc76622baf07"],["/categories/日本のIT現場/index.html","b377058eab7fc2482785ef6b12a75f44"],["/categories/日本のビジネスマーナ/index.html","66a26b244ca38233df1294fb2ccea651"],["/categories/日本の国内の人権状況/index.html","f68588be221e21e938d50a03b79318af"],["/categories/日本の経済新聞記事/index.html","96d8d69e018ca9b4410410751e21f69e"],["/categories/日本地理/index.html","0dcdb3e1d603ba9f1154ba109127dd77"],["/categories/环境/index.html","6d4feea7c30fceac0d476953454a2aba"],["/categories/過酷な現場/index.html","4f7fcea5d61d8ce4cf243a4879e76dbb"],["/categories/金融/index.html","f568d1bc2bf87be814bfb117fdb9f83d"],["/categories/食べ物文化/index.html","73f320c1101ba2435d6602ffbd3809cd"],["/categories/食品工業に関する記事/index.html","b452285c40d20171af5c9463b9e700b1"],["/css/main.css","da5bf920426d879d7989f06738abd81b"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b241220fde2a87df00d9e616feef5fba"],["/js/src/affix.js","dd51598013d70364f60c63aae0d65c8e"],["/js/src/algolia-search.js","4f1a695451483231da6895af50a7b869"],["/js/src/bootstrap.js","7b238c0bd5c5ffa9eb281bd44f877699"],["/js/src/china.js","e098cb6e92ce218932e62505f8aadeca"],["/js/src/echarts.min.js","a4876d8ecaf8fd54cfb71e8a49bdcd48"],["/js/src/exturl.js","4020a33ee9bffe9637dcad2311bd1ca9"],["/js/src/footprint.js","1a17fa271841c33f84537e5b92e3c851"],["/js/src/hook-duoshuo.js","59adcd2c025953d0e33c8b32a5eb38d2"],["/js/src/instantclick.min.js","bbb02f889a09ca60305a34b06cce140e"],["/js/src/js.cookie.js","dcb19890c098cd63f2d242966a9129e3"],["/js/src/motion.js","7ba537303a118137b14160e50464cf3b"],["/js/src/post-details.js","40392f69857642073826604b55f91b93"],["/js/src/schemes/pisces.js","711854e4df13c12411dfa3954489c341"],["/js/src/scroll-cookie.js","4b25ddfa1175d9d0759b4e9c56a8e9f0"],["/js/src/scrollspy.js","ba8739e006790f05aa80868784feb991"],["/js/src/utils.js","159e1404834ff31462333cbbf01f201d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","fbaf117dcc0ba5a47c6ea111e0c5e548"],["/lib/Han/dist/han.js","57aae399cd6eafb49a9c0f38bcdacfe1"],["/lib/Han/dist/han.min.css","2fa1010f59e189dc3b8160dae2d61eb9"],["/lib/Han/dist/han.min.js","2056d39789fcb91cdb6d17fbd6c3a808"],["/lib/algolia-instant-search/instantsearch.min.css","a467288bd62998804bc29ca6819af1ae"],["/lib/algolia-instant-search/instantsearch.min.js","46468b2dbdd27d9045c7f4166ed8c2d3"],["/lib/canvas-nest/canvas-nest.min.js","69e6d63c2e9efed272fb382a814bb239"],["/lib/canvas-ribbon/canvas-ribbon.js","5dea75574c5ffceb64c54b05aa15017d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","fc5a03e4c60ab6742e5f5d32d349d4e4"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","264d7fe7e93c5d5af8e203a702accb27"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ef7fb494adc9f24512b97edecdf42e2a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","fb1de65bef4bbcb7debe35421c8f2b08"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","dab1b66028e5a8a68ee76162f70713f9"],["/lib/fancybox/source/jquery.fancybox.css","ddb71349ea83db8ffa56659035cde187"],["/lib/fancybox/source/jquery.fancybox.js","a305fa547bd10fd3e973344c62eec44b"],["/lib/fancybox/source/jquery.fancybox.pack.js","70a59725a00025c4bc09407ebf96806a"],["/lib/fastclick/README.html","c4c7136ab57a8c91602a954cbaef880e"],["/lib/fastclick/lib/fastclick.js","6351813890fec6aecc2313005bdef3ec"],["/lib/fastclick/lib/fastclick.min.js","9ce623771e70c92c92d5756724ccc2f9"],["/lib/font-awesome/css/font-awesome.css","ebe7986b89e3ff108ed1cdb17806115d"],["/lib/font-awesome/css/font-awesome.min.css","3ecb176c26f79f06f72cec31eb59210b"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","ef1e40ee3ea6ff2172848f658aa4712c"],["/lib/jquery_lazyload/CONTRIBUTING.html","3d5158936a5bea8a515d70f80025e19f"],["/lib/jquery_lazyload/README.html","8dca31b6d5a9cc5e2b7255a38c4300f5"],["/lib/jquery_lazyload/jquery.lazyload.js","f7f74311fce308ddadae11fe076f2577"],["/lib/jquery_lazyload/jquery.scrollstop.js","c046e4ba180c434835df7397521abc96"],["/lib/needsharebutton/font-embedded.css","02ddbe61316fbb1226942b8562cbc0f8"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6d62d35ad8ea900188b06fbc11ad10d7"],["/lib/pace/pace-theme-barber-shop.min.css","c45758b55769034f7d2daf679540c3b0"],["/lib/pace/pace-theme-big-counter.min.css","5873120ba37e85d166906d74c255dbb6"],["/lib/pace/pace-theme-bounce.min.css","9667d527776bb3cda48354d492c4b4b8"],["/lib/pace/pace-theme-center-atom.min.css","487d4da5436d55fe1faf7b245e71d6d0"],["/lib/pace/pace-theme-center-circle.min.css","5763158caa4fb86b3214fee7a3319196"],["/lib/pace/pace-theme-center-radar.min.css","3250d56b0e33766e87cd8fc1924f31b0"],["/lib/pace/pace-theme-center-simple.min.css","df00d189ef3d78bd6972f085f8ef75b1"],["/lib/pace/pace-theme-corner-indicator.min.css","4cd49f41fcb4ee11613000fe7d0472e9"],["/lib/pace/pace-theme-fill-left.min.css","9b212dc60146a3fdc7db682ca2f2f0d7"],["/lib/pace/pace-theme-flash.min.css","a939d68c71a3d89a810950c06b6a3a85"],["/lib/pace/pace-theme-loading-bar.min.css","9bbbbcafcc254e617c0dce94fad8d691"],["/lib/pace/pace-theme-mac-osx.min.css","23c4abef08194ceb44a68139c53f3af8"],["/lib/pace/pace-theme-minimal.min.css","058be5551f2744fa4e0ea0d2c1c0dffa"],["/lib/pace/pace.min.js","74eac24498d5030085378931dc32fad6"],["/lib/three/canvas_lines.min.js","d2f3761de92d0b8b91d0df147225be9f"],["/lib/three/canvas_sphere.min.js","ddfec7cefd1fbe95d15f870c80e20a0a"],["/lib/three/three-waves.min.js","5795ec374248a30fc83caa022b2a9406"],["/lib/three/three.min.js","c1aa38b87b1fdccb455dccab3bbd1766"],["/lib/ua-parser-js/dist/ua-parser.min.js","ce0e3be49976100c82b7c49bad64b858"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ff7419ccb747d9f30efce389d4f127b6"],["/lib/velocity/velocity.js","f0c1e65a2c1670d185cf12adf11973aa"],["/lib/velocity/velocity.min.js","a4fc96381ecf44cd3ba5638f05333fe5"],["/lib/velocity/velocity.ui.js","cefc4414c67153cfaa1db50e57f8b596"],["/lib/velocity/velocity.ui.min.js","d8a1d94cec86a96d660d5c17ab838839"],["/links/index.html","14e77426fa987c6f530a962b29553cb8"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","c4c8e8926d2c7821c8cea4297f522ac0"],["/page/3/index.html","80d25b8a3fb938966bac27e45471e63b"],["/page/4/index.html","c24af4a9a369ba181fd0a5240638b951"],["/photos/index.html","de17aa15177fb1ecede524d3164e8461"],["/posts/191ddb73/index.html","5a5040630ed6b86b5e74a6d4ae856867"],["/posts/1a195976/index.html","b588ecf4a2a5296b20843b072b162821"],["/posts/2292f1af/index.html","1eab6de018ab13bca572b02042140f15"],["/posts/2fc77d95/index.html","e694806b328c83eed552e5a75962a715"],["/posts/2feacaf4/index.html","85e5b173812f27301c09d649108ffa57"],["/posts/37f2c331/index.html","061345a8aacfda74d6492ec8a27ab076"],["/posts/385f0de9/index.html","2d862c3c44b24b6ff0516b470ca8070e"],["/posts/3caecfa9/index.html","1ad59b00472f43ea86912ba9b4d92e1f"],["/posts/44414303/index.html","3a82c44c27da72f06536a19c5f546fa3"],["/posts/456610d0/index.html","c28492b12af5ad6cc515a349c3c6ecf4"],["/posts/45e51894/index.html","d1635c9590e69f064d52b2e3b8f1aea5"],["/posts/4f1131af/index.html","0c979549571be573fceb7deb0314e09b"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","8b43f9da2d1c74e08c7c921a77db7904"],["/posts/517ebb95/index.html","5d47aa38132591baa9407ae3938e6350"],["/posts/53bf1d9d/index.html","a978b9542b79d23b02ddd99b48c47697"],["/posts/554c2ba0/index.html","03e35378a96af655bdfef9a9d0918663"],["/posts/63556f52/index.html","39a6029376428872faeeeef74288d584"],["/posts/6d49ceec/index.html","aeb2b70e2d38f4bda48d74e64ce77024"],["/posts/6de7d9db/index.html","744a0603e30824b126c9e54b30624699"],["/posts/6fda249f/index.html","75bbc4a6ed2ed2c9e587a791085b783e"],["/posts/84b87417/index.html","5ac65cbb472bc9717b169ec220068d04"],["/posts/97e5bc9c/index.html","9eec5198b32ef2ad8374f4a5260be0ef"],["/posts/c311b112/index.html","59e2f242f98c0b1f238cccdaa92d14c6"],["/posts/c620d4c2/index.html","ede88c81b240dfc325da2d88e6051884"],["/posts/cfc54393/index.html","bf692f2e6076c85501c9ceab3939990d"],["/posts/dc5155ff/index.html","2b51260396f464d37ccce59c136f8ef1"],["/posts/e1bd836e/index.html","e4b56528dbc9c8a42be8d5fd26ad0bc6"],["/posts/e31c0293/index.html","c58a0703523055ca59ada1e345491dc0"],["/posts/f5fc4461/index.html","f205a5e6e17a9774c2141225db077b95"],["/posts/f8073739/index.html","2b1730cc30fcb2daf32d4c16478d3bec"],["/posts/f97ef43b/index.html","b7b2d114a65d414a24bdd878fd8b595f"],["/posts/fa84d5fc/index.html","bbb77e589b21b19ed960f130a6d06917"],["/sw-register.js","4f88725671b048aba434d0632288a98a"],["/tags/index.html","872ac2c2e1adc1b9056e59f983dd57a6"],["/tags/つぶやき/index.html","27515ab5803bc1fb686f941fd230f92c"],["/tags/アニメ/index.html","1262ff1635a15fabebe4bb646f5ef432"],["/tags/インターネット/index.html","6822bc23fa560c7bd6ff5f9c2bb8946a"],["/tags/チョコレート/index.html","ac88a7dcf0550be99c623cb7c3a935df"],["/tags/中国に関する新聞記事/index.html","ca3086c6e79fb15ef7bcb7aed1972a44"],["/tags/乳製品/index.html","0c425047e66a3686ccd8d44481774509"],["/tags/労働者保護法律/index.html","7f987729fab44647b39bafe5b8518eb1"],["/tags/心理学に関する記事/index.html","81266caf4dca66d1e476895109aad882"],["/tags/日常生活/index.html","9fec1def7334c613d3d18f8537a88766"],["/tags/日本のIT教育/index.html","16ddf43b4a9f1060b41a945f902c234c"],["/tags/日本のIT現場/index.html","0b672128ac397cd23702e5b70996df1d"],["/tags/日本のビジネスマーナ/index.html","5b0ef5f716956e406e4bc8e245b06bc4"],["/tags/日本の国内の人権状況/index.html","c0eba3da59de69a4b5c1f9ec0a181d13"],["/tags/日本の経済新聞記事/index.html","13b54b2bfece818468260bd83f7bc481"],["/tags/日本地理/index.html","ec6b385bd79e40b639060c193060af28"],["/tags/环境/index.html","8268195d3d9007fa52f6b0af9e1b7e53"],["/tags/過酷な現場/index.html","0ab5a2a36ae3d6d5aee44f9a323270bd"],["/tags/金融/index.html","65d464b28393d9eadde8da9c7419aa5e"],["/tags/食べ物文化/index.html","cb5e02ef922cf91455a320e81e9c16bf"],["/tags/食品工業に関する記事/index.html","4e8868680fbce1e65250d57abad85a62"]];
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
