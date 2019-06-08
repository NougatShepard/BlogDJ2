/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","3bc28a1d4e52d420fc8a214a9f368b01"],["/about/index.html","a38c04e1c609f4e045ecd067c1979269"],["/archives/2019/04/index.html","fd6c9939ea1091a4147bd3fe9baf677b"],["/archives/2019/05/index.html","598a1ef9fedc746585ea42f48bcc9734"],["/archives/2019/05/page/2/index.html","9c540971baa146d6f5ba80cbb1b43354"],["/archives/2019/05/page/3/index.html","ba06b76464d4b7bae9dcd6094b52334d"],["/archives/2019/06/index.html","f1f05eee2fb6dfc1761e2ce5ff33cf87"],["/archives/2019/index.html","d745fe597d31338e47e6987eaa3ec618"],["/archives/2019/page/2/index.html","5db3ba5a74c9bbc135dfadd47e6c25da"],["/archives/2019/page/3/index.html","f421e194c86aee9a1def4e995beb5748"],["/archives/2019/page/4/index.html","0481e851a5b27dd487602f8e0d0d977a"],["/archives/index.html","714d4dee569695d839edacaa612be165"],["/archives/page/2/index.html","f574534b03f4be68b92c390cecef1cc9"],["/archives/page/3/index.html","a91220395e1adfe2a64e05caa80a1d09"],["/archives/page/4/index.html","0e1a6d8d940536fb7c52c64aae98fcc4"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","f4811eef30ba6768210cf5d2cdb928b1"],["/categories/つぶやき/index.html","c7cd640a82e67270f68b3d4f637eb368"],["/categories/アニメ/index.html","dede3884681549dc8a912c935fdbd21c"],["/categories/インターネット/index.html","1228c4550c9dc5c4cdbcd7a26b40c608"],["/categories/中国に関する新聞記事/index.html","381d45a0f01e8e0e81c3ff0dd5e1f815"],["/categories/労働者保護法律/index.html","091e856d1cb59a6c36749118eb2513c3"],["/categories/心理学に関する記事/index.html","9acaa8018aaa4a79757d988984401bd2"],["/categories/日常生活/index.html","6eee4f5187e5fc1205cd1ca15a2712a0"],["/categories/日本のIT教育/index.html","462c2ebc058eeb8114df5d7fbc967bf1"],["/categories/日本のIT現場/index.html","652cff46fd345e267c6b10e2c63f68a0"],["/categories/日本のビジネスマーナ/index.html","3fe885033131dee6deb5db92987bd795"],["/categories/日本の国内の人権状況/index.html","43e641b718c6fd97f4d4444da29308a5"],["/categories/日本の経済新聞記事/index.html","47481e514d3b04de414aea38c65818f4"],["/categories/环境/index.html","9c62117ca580f852338f1382603f0134"],["/categories/過酷な現場/index.html","413091d1a4ebba5af86fcb37bb2dd84f"],["/categories/金融/index.html","d42208f2836b569eb01c420e6fe6bacc"],["/categories/食べ物文化/index.html","19d6feed8b6aba22faa1bd5a3e7625cf"],["/categories/食品工業に関する記事/index.html","4db28e936c05e7143b69c9b6a58db382"],["/css/main.css","131ba1402fadfef4be0e462d5004ad88"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d1ebb25de873dd90de51056dfe7961f2"],["/js/src/affix.js","d48bc8cb6d0907ce52b9bbdfeda4ac00"],["/js/src/algolia-search.js","390a7e4e2c15596134f3437e9c2f99d4"],["/js/src/bootstrap.js","9af77463c3f1fd413f9b006d7400b78c"],["/js/src/china.js","950f49067732ba1fd7c67fd15ad3f559"],["/js/src/echarts.min.js","3c7e10531b0b1ae84462dc2872abe4f9"],["/js/src/exturl.js","43b86ebea1be41e3580b963386554a5f"],["/js/src/footprint.js","46363fbe6c4cc52ccddf2b6a79a614b4"],["/js/src/hook-duoshuo.js","c1dee4f7e35c9937004e368154e92e9e"],["/js/src/instantclick.min.js","69d60bd02510275e469d4c0df92e6bae"],["/js/src/js.cookie.js","66c7e4fb10715120ef6601abde93421b"],["/js/src/motion.js","5540e010b93587edf828e254e869ff50"],["/js/src/post-details.js","1b23f81ca609fd30266e7631bf9b23c0"],["/js/src/schemes/pisces.js","e033caaf99d060830df46fd33d7a7b65"],["/js/src/scroll-cookie.js","7fb344bea44db151f57c11c8a9cff49b"],["/js/src/scrollspy.js","a384c63d4253c1eff1a165804db76bf8"],["/js/src/utils.js","4de50a62d564c676fe806a30d92643ec"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","04cb83bb4a2d09ba01c51a1bf84ce416"],["/lib/Han/dist/han.js","a01e3cc454867b997831c2ad689f5d15"],["/lib/Han/dist/han.min.css","915e3db32f983b075ea8e129f471a395"],["/lib/Han/dist/han.min.js","c5d7382d242c52b6766775e5d22ed5c3"],["/lib/algolia-instant-search/instantsearch.min.css","6263957d937e51a51a4c338e1c1561a5"],["/lib/algolia-instant-search/instantsearch.min.js","545ebc36a2b18373c345e2c75c0effde"],["/lib/canvas-nest/canvas-nest.min.js","a0bb6505e553437d22b9a7b542780c7b"],["/lib/canvas-ribbon/canvas-ribbon.js","5595be6d32dab1ca7e43f682cf56bebb"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","53cb7e8082472fc9540cb136e56b3fc0"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","65822706455676e94c1d61d175654616"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","fe27301201a4eb869910a150edd156b5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a628ceda6b5c4e8a194306567a2ee224"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3dad3ab8666258b465f6cc18285ed014"],["/lib/fancybox/source/jquery.fancybox.css","9d739da68632afdbec596c97eb519566"],["/lib/fancybox/source/jquery.fancybox.js","44c4aa6528543e3a5817096752a4b639"],["/lib/fancybox/source/jquery.fancybox.pack.js","34d1ee45676c892fce2d07bfcc2e0609"],["/lib/fastclick/README.html","44235968df2b9f4242f09b276edac254"],["/lib/fastclick/lib/fastclick.js","0c9ef10fb2ffe36f05bfe5ab62649bb3"],["/lib/fastclick/lib/fastclick.min.js","99d48b1a751af41b0a52142b9405606e"],["/lib/font-awesome/css/font-awesome.css","7834518e929603cad5c5990cf6910f76"],["/lib/font-awesome/css/font-awesome.min.css","7834518e929603cad5c5990cf6910f76"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","33770d985a7b153dcff636583c975e88"],["/lib/jquery_lazyload/CONTRIBUTING.html","49c3b6266bd700be68e2690e963e8862"],["/lib/jquery_lazyload/README.html","bf8526ede6232037438afed9338c82e4"],["/lib/jquery_lazyload/jquery.lazyload.js","4346b3f8acb724d7b11beb783604fddf"],["/lib/jquery_lazyload/jquery.scrollstop.js","5aa5123a10c9f41f5817dffdda73eded"],["/lib/needsharebutton/font-embedded.css","0148b3ac2d36b87807d7d35229b79211"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","ba24e4aa298b7242dd4fcad6e3658748"],["/lib/pace/pace-theme-barber-shop.min.css","bb94dfe5d3bd0d3c75324847f942f755"],["/lib/pace/pace-theme-big-counter.min.css","5570302ba498d040fa697737366e03f2"],["/lib/pace/pace-theme-bounce.min.css","d9f6ec581368c3c0615b62aee1c53e4c"],["/lib/pace/pace-theme-center-atom.min.css","7dc83f0eb15ab8465d017d4d2cdf4f6d"],["/lib/pace/pace-theme-center-circle.min.css","55a1510dd5674e9a6c38242cd05cef11"],["/lib/pace/pace-theme-center-radar.min.css","3f615faa60ed8767b30f31776347c675"],["/lib/pace/pace-theme-center-simple.min.css","5f1c1300f56b6a06afd5493c78d1542b"],["/lib/pace/pace-theme-corner-indicator.min.css","f80989c947e7a362d9ce69e504ee408f"],["/lib/pace/pace-theme-fill-left.min.css","698738e485203c2b4cc325536ac70d9e"],["/lib/pace/pace-theme-flash.min.css","af32d8cd6eff98dd86bd426beec5c92c"],["/lib/pace/pace-theme-loading-bar.min.css","a918f11652397bc4fdf802209483142e"],["/lib/pace/pace-theme-mac-osx.min.css","22826d0a2121a36cc11206b6b4d10e20"],["/lib/pace/pace-theme-minimal.min.css","70b623643b559d574fed8ed29c242343"],["/lib/pace/pace.min.js","479065fce74ab19ea569e2af90fd5c10"],["/lib/three/canvas_lines.min.js","61918ba13d238120bb53be5adcc3ab3f"],["/lib/three/canvas_sphere.min.js","3bc174543683b66711a481ccc5a8fb15"],["/lib/three/three-waves.min.js","f26d261d2b904518017a8d6abe8313ca"],["/lib/three/three.min.js","d8c35669fa09d3550e38a364005a5e4b"],["/lib/ua-parser-js/dist/ua-parser.min.js","06a6c14a0a73c5db449ff4a2792e77cc"],["/lib/ua-parser-js/dist/ua-parser.pack.js","284d975dec7b29f1a85cefa7bfe85095"],["/lib/velocity/velocity.js","cba994601d0c99315e03245e28665486"],["/lib/velocity/velocity.min.js","b23a49f78963336055c74e3a27cfd674"],["/lib/velocity/velocity.ui.js","427184fe1e38c8c86f1390f74c5d4e30"],["/lib/velocity/velocity.ui.min.js","c1674910d1c3aff3401bf60c22401d73"],["/links/index.html","2b392aa11d8d68a515cb1f385c0576d3"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","b5e347e7765dc1ab9a3af4f5c6281248"],["/page/3/index.html","7036b0068a224dfbad1df93439f4ee38"],["/page/4/index.html","06ce06a5d4ee1b0b724d1af830030d52"],["/photos/index.html","aafa825586b80a6161777d26a4608c07"],["/posts/191ddb73/index.html","9ff73db4c3612a2dda60d1a7dfdae57c"],["/posts/1a195976/index.html","41069ed8f584e2de7039723e75217417"],["/posts/2292f1af/index.html","70146d405619208d4de07a43aee62571"],["/posts/2fc77d95/index.html","59792d9dcf93a3ecf4042d518a681498"],["/posts/2feacaf4/index.html","ffaeb2ef27de90913034e6c4f1cc1e90"],["/posts/37f2c331/index.html","869970df6c6b79090f5345ed8d755f88"],["/posts/385f0de9/index.html","c5e435466a3f5e975ad543cc61faf8d5"],["/posts/44414303/index.html","bada2291cb9b4e26d14a3d7dfe5781ac"],["/posts/456610d0/index.html","e1f4a973a3c434f19843bb2e2be601db"],["/posts/45e51894/index.html","e16df317bcfb47aeef57560a35cb2d1a"],["/posts/4f1131af/index.html","5a5788e5644f20d39d154870a889cddb"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","3b6e8f3ba9daf6e3d7ee7f9d3580144e"],["/posts/517ebb95/index.html","9dfbc754aaaa1304599d72b19ba923eb"],["/posts/53bf1d9d/index.html","f14ebe773db444b15e88efef329990da"],["/posts/554c2ba0/index.html","8fc4102ef3b434f10088755f8a313dbf"],["/posts/63556f52/index.html","9d3e953cad94dd04bf8d07764c6e7f97"],["/posts/6d49ceec/index.html","943861c6f01dd6c1e752acf87ca0c265"],["/posts/6de7d9db/index.html","2055815b974536c3b3a2c91e0cc54cb2"],["/posts/6fda249f/index.html","e03fa60bdd514f88ce70ce00c88984f7"],["/posts/84b87417/index.html","498161c544855831b783fc7da80d99fe"],["/posts/97e5bc9c/index.html","947ea837ddd39d60dd21ab1d47079a25"],["/posts/c311b112/index.html","2cf891ebd6b5c43e32bc9c770a1b3bf6"],["/posts/c620d4c2/index.html","b3af7d69ec0ee95eb1c1ae194dca3fad"],["/posts/cfc54393/index.html","f2963e94f4b633c380a4588faa96c551"],["/posts/dc5155ff/index.html","9922c7afe5a931d6be3ee4d4d17e43b8"],["/posts/e1bd836e/index.html","b605bf29049d9575505fad2718a6c15e"],["/posts/e31c0293/index.html","a1b1558cb1222bfb4860a4ce4176a8a4"],["/posts/f5fc4461/index.html","ec040ec22a17126c247d10de187905d1"],["/posts/f8073739/index.html","14fb984b142c596e26f14a2e43e94623"],["/posts/f97ef43b/index.html","8c8720fe87af52cfff91a7efe3506ec7"],["/posts/fa84d5fc/index.html","da8c13522fc6457adf217ca2a163620f"],["/sw-register.js","26ee6756b13433dbc5786d5aa7c2ac5a"],["/tags/index.html","88d8aa5ffcb6b107789abb0101e18c8c"],["/tags/つぶやき/index.html","cec909e1f41f38e6eea1f59f252e8754"],["/tags/アニメ/index.html","9f9a79829b59b692b26f3da5348604ba"],["/tags/インターネット/index.html","4f7a035a26c0dbb0dceab8234e1c70bd"],["/tags/チョコレート/index.html","88794e15c17d5890bfa901d763ca88ad"],["/tags/中国に関する新聞記事/index.html","f23f38440b8babc5f7fddfc460312442"],["/tags/乳製品/index.html","13a099baccd45d65407ce75c4c99d234"],["/tags/労働者保護法律/index.html","f49ce1b80293319f2b4e604adb25c492"],["/tags/心理学に関する記事/index.html","f8a486d9ad203ff78bbf87c5b4b6f93c"],["/tags/日常生活/index.html","6d374f1530453821593331ff9441d72d"],["/tags/日本のIT教育/index.html","d322c4035bb2e5aebe41ad11ffd0c37f"],["/tags/日本のIT現場/index.html","9c7d85a1783d1f723ec3d3dbae5daac0"],["/tags/日本のビジネスマーナ/index.html","20d9803bd5e54d8a77f21df8ced569b4"],["/tags/日本の国内の人権状況/index.html","1aa5e17ff56d829dc5c8ab09ad79c74d"],["/tags/日本の経済新聞記事/index.html","f2365c2ea8af41de33513cb6654bc5f1"],["/tags/环境/index.html","cda63b909486b7b9d31f23f09eaf0efc"],["/tags/過酷な現場/index.html","d5d3cbbaf8c2fec520194736525d52a4"],["/tags/金融/index.html","4a9e386c24860b6cc0b8645ce204b386"],["/tags/食べ物文化/index.html","a741e977782cd75d9225d33fb02a60df"],["/tags/食品工業に関する記事/index.html","cb6166fa8a1a813c1fa4941bc4e83f65"]];
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
