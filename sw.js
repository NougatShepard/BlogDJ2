/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","413e8f3eeccf17c4c844c4c4864d6cc3"],["/about/index.html","111c301515e61b0e92a4d3deac86ed52"],["/archives/2019/04/index.html","d2e922b71c2382434d03f6c457bd103f"],["/archives/2019/05/index.html","32b7b4e3ef31fde3d55e3fd6754c019b"],["/archives/2019/05/page/2/index.html","dbc93c42b541782be3e7607a2873e174"],["/archives/2019/05/page/3/index.html","74d588d9e8f6c490777d2fe81c23e267"],["/archives/2019/06/index.html","7f7e5a142c2277c59accb5be4a7e9e48"],["/archives/2019/index.html","52b016f3370b89f647f2e498670ac0eb"],["/archives/2019/page/2/index.html","d8884b3c9977745c74a6ac4082f5c88d"],["/archives/2019/page/3/index.html","e9c06d5e6df7f46441501150a8ffe43d"],["/archives/2019/page/4/index.html","35604e1bc615bef771e8aff9e7ff4955"],["/archives/index.html","103ee1bd494c078a811a6374c6977e6f"],["/archives/page/2/index.html","e272df2f40bbae0b02d973af34df2d40"],["/archives/page/3/index.html","db2b9d9f9060c3f9d5978b8ee9b3052e"],["/archives/page/4/index.html","c7ff3590ff32658c167975cc5f67d66e"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","ea5bafdaafa7bcea5e6371fcf9c56c5b"],["/categories/つぶやき/index.html","7729c45cecfe58e3332d6239085f1647"],["/categories/アニメ/index.html","8afa16cc0e3ed80b8b1221b0e0e11ca9"],["/categories/インターネット/index.html","3a73cdab9bc2fe14148c5e33149b6ec8"],["/categories/中国に関する新聞記事/index.html","c176e373cddb782790b9f39637d3d55c"],["/categories/労働者保護法律/index.html","65e0e7502807691bd9739bc56612f4af"],["/categories/心理学に関する記事/index.html","435d6c7919c53af44e92d3c8f89258cb"],["/categories/日常生活/index.html","32336ccbff0432bce22289ceb464e534"],["/categories/日本のIT教育/index.html","62ec4bc52512fc1d635821b0390f94c4"],["/categories/日本のIT現場/index.html","2c328b3ef3764ae9c9484e828efe00c4"],["/categories/日本のビジネスマーナ/index.html","32b69209dfeadefa38e764ad955cdf70"],["/categories/日本の国内の人権状況/index.html","9d51198891d8364b7072c2bd3bbb30c1"],["/categories/日本の経済新聞記事/index.html","fb0ad937254d2acbe6230f1dcfaaa025"],["/categories/日本地理/index.html","292340c1e4d12369d5334408377344d2"],["/categories/环境/index.html","c5aba2e6d652fe923d43fd0f57c49c40"],["/categories/過酷な現場/index.html","79513e4f484f4ab91188020fd672a24a"],["/categories/金融/index.html","fa0824de37953809a8bb78c6e972f738"],["/categories/食べ物文化/index.html","ca867af14338b3e135d8d481b2dac2a3"],["/categories/食品工業に関する記事/index.html","81853d0c6dc6905255e45d426db78ba3"],["/css/main.css","42d3a8c25cdfbcdc14f948ad78607727"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","83cd2c0de47e2f6f2076e2963df8a344"],["/js/src/affix.js","277ca29908fe444badbcb9bbd8ec40b4"],["/js/src/algolia-search.js","99ed8ae8cecba0bbeb582c6b84741724"],["/js/src/bootstrap.js","5cff6aed572403b93698037a735b47f2"],["/js/src/china.js","b51167a0083a98e15889792ef93b36c9"],["/js/src/echarts.min.js","4eb6a0db1bbb9401c2281c5a36f405d5"],["/js/src/exturl.js","5f9af88f19cbc183b06b634fb3b48c3d"],["/js/src/footprint.js","9b3a7f51224c290b6320baf7644abe88"],["/js/src/hook-duoshuo.js","460bc1d42dc29e1a8ca901e315e839e6"],["/js/src/instantclick.min.js","20c5d8c1028100bb3c896ff4bf0de47e"],["/js/src/js.cookie.js","6eea0cadf514af259235765a9031060f"],["/js/src/motion.js","a244101f50d256843a97e20f0b2dae7b"],["/js/src/post-details.js","2bcc5c4f278d0e95d13b6ce0556813bf"],["/js/src/schemes/pisces.js","8a112b0fab1c298e35fe4287a412435a"],["/js/src/scroll-cookie.js","6b40d807e04aac8d4873d5762084c5a3"],["/js/src/scrollspy.js","e6f875ce7c0eecc95abc704d1fbe2bff"],["/js/src/utils.js","222b4e2409d55edbfceea38ed2361850"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","d3abc16d4ecd2a171e7f41def0ae3f81"],["/lib/Han/dist/han.js","37eb8c4fea2b30fb1817ca9b6e87162f"],["/lib/Han/dist/han.min.css","d4c89a0889146b2425241b0af8547380"],["/lib/Han/dist/han.min.js","a233ceea5fac9317de19c39cfd452ffe"],["/lib/algolia-instant-search/instantsearch.min.css","52cb299638ad25a959c2087f43f3a9e5"],["/lib/algolia-instant-search/instantsearch.min.js","74c645a73e512070e0decbbb82962242"],["/lib/canvas-nest/canvas-nest.min.js","1f4003bbfa48471d6f86dae979a07e4d"],["/lib/canvas-ribbon/canvas-ribbon.js","ae45fc65d268e217712986f56b95e935"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0a24e119586447893d39bd735a47f64a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","dc4e937cd4f812541cda973bfcb29bcc"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0580d1f01a9e9415b2ff019abdfb8b7b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b2a1b14c3029832a27528b19779ace66"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","8777132848c21611d7ed99ddf3ec6e9e"],["/lib/fancybox/source/jquery.fancybox.css","316d741c491e8e11cae07bc45b40b9f7"],["/lib/fancybox/source/jquery.fancybox.js","448af4b80562488d1def13671e9e36b7"],["/lib/fancybox/source/jquery.fancybox.pack.js","29779e45401c32d6879aefd7be4c8cbe"],["/lib/fastclick/README.html","b8709c4fe89a172a9ecaca1084744703"],["/lib/fastclick/lib/fastclick.js","90d679b07677c3e88d10ae52bbe58b3b"],["/lib/fastclick/lib/fastclick.min.js","03d7232ffdb4781eb1549e5adf4259da"],["/lib/font-awesome/css/font-awesome.css","cd4437cc988f811f853ee4e657dab863"],["/lib/font-awesome/css/font-awesome.min.css","bb9f2ef5edd5cc5eb567a9528aab0c4d"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","23c35037db64a406b2f72d5df5fab59b"],["/lib/jquery_lazyload/CONTRIBUTING.html","ca998cdc27eaa4eed546a11d2a4b5fee"],["/lib/jquery_lazyload/README.html","f5acbdb2eae9451e1729983e17f1d944"],["/lib/jquery_lazyload/jquery.lazyload.js","6cdffa196dd0537e30c0328722777b71"],["/lib/jquery_lazyload/jquery.scrollstop.js","a41e696a0692dc0f600b663acb0184bb"],["/lib/needsharebutton/font-embedded.css","efb0c69461b3aaf25bd79b4afa986583"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","fb6bdd84218ca2438745a28a13acf0fc"],["/lib/pace/pace-theme-barber-shop.min.css","a1ab13871c80fac61d9b7553372e6259"],["/lib/pace/pace-theme-big-counter.min.css","13c363c3eca61199b3a65c7ae5b96bfc"],["/lib/pace/pace-theme-bounce.min.css","a7bbc3952e413df0994f2d341e9eda98"],["/lib/pace/pace-theme-center-atom.min.css","7bebff371959c9e546dd96bf6a260037"],["/lib/pace/pace-theme-center-circle.min.css","877313ae9001383b4e9697e5479e0955"],["/lib/pace/pace-theme-center-radar.min.css","1227dc4c83c9c5130e79a9a895ed8292"],["/lib/pace/pace-theme-center-simple.min.css","ec453a3a8497702ba97c964efd8bae85"],["/lib/pace/pace-theme-corner-indicator.min.css","d3bef54cea4c5a8d7fe4c4fb0f7a285d"],["/lib/pace/pace-theme-fill-left.min.css","8d6e3c3afd6a8493d4571d4ae452e4c8"],["/lib/pace/pace-theme-flash.min.css","686ce098a4885f7c30a7a6a46c383a86"],["/lib/pace/pace-theme-loading-bar.min.css","9b27a253db946787eee04dff4310e41e"],["/lib/pace/pace-theme-mac-osx.min.css","7fb1321070c12bb6b27246869b2d39ad"],["/lib/pace/pace-theme-minimal.min.css","54ff4a0583e4ed19726304ce247e854b"],["/lib/pace/pace.min.js","f6c47cd2403ec735328d4b2596d691ab"],["/lib/three/canvas_lines.min.js","3deb1e92d6218931f433fc7bbfd0cb2b"],["/lib/three/canvas_sphere.min.js","98225f57e5d70e798cd2460a422a678c"],["/lib/three/three-waves.min.js","5be33310f8a0693b7f57a246464c5958"],["/lib/three/three.min.js","4446e3c3c9f5e3853b794258b980f6f9"],["/lib/ua-parser-js/dist/ua-parser.min.js","23e6703db5696fb50ef733113fc173fb"],["/lib/ua-parser-js/dist/ua-parser.pack.js","68019165310428d1f21fb477f176a8c1"],["/lib/velocity/velocity.js","95783e70ad7378abb9af27df57e79600"],["/lib/velocity/velocity.min.js","0ac8b1621df7200f7fa2efbdec6ccbfb"],["/lib/velocity/velocity.ui.js","8d4e09f52f3b0ffecd8b4a6d982bb236"],["/lib/velocity/velocity.ui.min.js","a70a4f27f77c0ed09802e3a60a984bfc"],["/links/index.html","20bbcba2a742760a6324f74de93662ac"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","06499f93a6770a952c3a20da838fbcf1"],["/page/3/index.html","04ce26883123e2939dbeac090c39de29"],["/page/4/index.html","8677c52aab272732dba4a0b8166af530"],["/photos/index.html","8eac28a1df6702b02d1f17db3861d177"],["/posts/191ddb73/index.html","3eabe6d935ff9fcc7a7ccf9cacacba14"],["/posts/1a195976/index.html","eb10e4f3a3b8438fde286acfd6a56e4c"],["/posts/2292f1af/index.html","2c1858b4d5d235ad2d966c8ef2fad84c"],["/posts/2fc77d95/index.html","9628379241b6328bc553285e619daf67"],["/posts/2feacaf4/index.html","9d9cb7cac1a87e3f4e6e9549e24f7181"],["/posts/37f2c331/index.html","ee7a2ee750fe9c4d0fcbfc207afdfea9"],["/posts/385f0de9/index.html","9cee64e0a5481c423a10b0fd1f18c2ac"],["/posts/3caecfa9/index.html","1e87d18fc5b25227b75e280b7332aad9"],["/posts/44414303/index.html","2c152f9a32a380d94ed3ea4307226128"],["/posts/456610d0/index.html","54cb104edb8734ce3ff383d8ac353bf5"],["/posts/45e51894/index.html","08b2c131ab955ae98b54988a5b2c54b1"],["/posts/4f1131af/index.html","75ec97b914050b5222aa9da7d4d8f3b6"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","51bd40ad3afbc0cfe3f8751faba91603"],["/posts/517ebb95/index.html","765f4a4f0171b75580a2df4a5e902e3a"],["/posts/53bf1d9d/index.html","e06b3fae4432874e5709bc46bc06c1d8"],["/posts/554c2ba0/index.html","ea74ff90b7181a26009b91ca6e7995f9"],["/posts/63556f52/index.html","43999b62cdde8326eda64fbc88db9dc7"],["/posts/6d49ceec/index.html","e3f03b542a50f3d21ff5b8f9ccf1e4ad"],["/posts/6de7d9db/index.html","13d57000406ba7f8f257efeea1fd9f7b"],["/posts/6fda249f/index.html","bd693164a8ce4bfb8ad26ce2fa9cb07c"],["/posts/84b87417/index.html","5190676744362621cb0dc340a0bb32e3"],["/posts/92912ddc/index.html","28b5766242897ce9c60e4bfb74e7198f"],["/posts/97e5bc9c/index.html","c3354ddcaf039f22d4ae8c4f776ddedb"],["/posts/9a5c7b64/index.html","d6d307d7ddc59feef90c6ef878763f12"],["/posts/c311b112/index.html","093784a362b68065624eb482075b9ac4"],["/posts/c620d4c2/index.html","bfbb7a6006b309ff924b723c067b8a67"],["/posts/cfc54393/index.html","1c31b4439ca18b62ec971c64a74b5de4"],["/posts/dc5155ff/index.html","4cd2d9cbcd004406e0e647600c8e090c"],["/posts/e1bd836e/index.html","a1c226066273883f110de07c50a30f62"],["/posts/e31c0293/index.html","e915f71fdc3b33aa440718a84d2877fc"],["/posts/f5fc4461/index.html","474226ece66a630d663cf419dbbb74f4"],["/posts/f8073739/index.html","6cb1cc4ee2b79edf4d88c0d1c6c0a63f"],["/posts/f97ef43b/index.html","7780fbcc5986c7128542b47d303deedd"],["/posts/fa84d5fc/index.html","62c2b62cc9d5d050aca5c32c62589981"],["/sw-register.js","a6fe0620e6cd21715ef1e8062b2156b1"],["/tags/index.html","b3dc2f94ffefbb5c19a18dd2d1ff4a82"],["/tags/つぶやき/index.html","49bbb624ed85af0a50b58aad90dfe76b"],["/tags/アニメ/index.html","2cb66bf39699ee96740081dfc7d6350b"],["/tags/インターネット/index.html","e6eb3075c75a6cfc7f7c68c89defb4f4"],["/tags/チョコレート/index.html","e11d47dc8d85cd88656ec1f3e2efbec7"],["/tags/中国に関する新聞記事/index.html","674bb32dcff64bdca80e35d97f4adf99"],["/tags/乳製品/index.html","bfe1445298e6dbcd2a605bcb184d8bc0"],["/tags/労働者保護法律/index.html","212e5e5fd05c83253595f9f95842ddf5"],["/tags/心理学に関する記事/index.html","1c5f3b49655ad077fef8e0506c6eee3b"],["/tags/日常生活/index.html","8c012c3039880b95edf352d64a2856ea"],["/tags/日本のIT教育/index.html","5781c5b627961f723de80c3c8ac0a1bc"],["/tags/日本のIT現場/index.html","138ee95f1dd3e11d4da55e0bd7692e37"],["/tags/日本のビジネスマーナ/index.html","2cd1c5356fab639c3bcdf95a492fa350"],["/tags/日本の国内の人権状況/index.html","f0f3434ef861cddef10c3c732f68aa08"],["/tags/日本の経済新聞記事/index.html","3a847fbe7d1fc344043c5cfbf7baaca9"],["/tags/日本地理/index.html","8a99476a48731c4f562d8668b80e55e5"],["/tags/环境/index.html","83ca31140b76d907188b0b514d376c75"],["/tags/過酷な現場/index.html","b8275c261bed8fa90b4f246db42b552d"],["/tags/金融/index.html","fda67c353bfd9e13208a8b92c50c44e0"],["/tags/食べ物文化/index.html","fbf5c44e15484fad5cc7dc3228e6014c"],["/tags/食品工業に関する記事/index.html","9a6d88a6ae542fbae7bc72a5c6f9a5f8"]];
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
