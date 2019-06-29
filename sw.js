/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","32a834c88ef3f415bf332835ab36a789"],["/about/index.html","c1d1187197181ae65cdccfa6142fb533"],["/archives/2019/04/index.html","d8fed33ebd9aca7312733b45c901fe5d"],["/archives/2019/05/index.html","0cf32450b6a26a4744a6b7407b9741a2"],["/archives/2019/05/page/2/index.html","4c08237c493daf1ac1f387f4f821d2d6"],["/archives/2019/05/page/3/index.html","1397fb2af14639e3f322665904216c10"],["/archives/2019/06/index.html","e117e42035a7a6a901d7231de8283e38"],["/archives/2019/index.html","457465b643bfc0cfe6fa2fdf8c5e220b"],["/archives/2019/page/2/index.html","002c5eee4f06a82fd0056a9b212c8779"],["/archives/2019/page/3/index.html","d2d20ade3550258f53b68f64fcff5b86"],["/archives/2019/page/4/index.html","af5112dbe6fd5b53eb6f194e49660755"],["/archives/index.html","4dc42ab4f37d9364ab5154a423dc44ac"],["/archives/page/2/index.html","f36c83934c7f4ab696a12048a288b4ef"],["/archives/page/3/index.html","4041447550d2af942070a2df94e17d66"],["/archives/page/4/index.html","953b149ba39cc9ade8c07325f9a75fc0"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","17235c864baa8b9ccc8f2e395ce84f53"],["/categories/index.html","f8afd48866f80348e8ef77be883220a2"],["/categories/つぶやき/index.html","1e8d87a04055f904bc0343a8b1777313"],["/categories/アニメ/index.html","e664da57163e23d9d9cb7285a6b7ccda"],["/categories/インターネット/index.html","71f3c7eefec9c9328975fd8116d4082a"],["/categories/中国に関する新聞記事/index.html","b8104faa8f83db213ac34a8b763f1a2a"],["/categories/労働者保護法律/index.html","e9259a04ead03576ed878bce6230c76d"],["/categories/心理学に関する記事/index.html","b7088d7665195a86efade66ee7571b40"],["/categories/日常生活/index.html","78357ba26730aa58367ca24a8063752b"],["/categories/日本のIT教育/index.html","1a6d80c62710917caaf9f41a65eaa010"],["/categories/日本のIT現場/index.html","8377021d647e4f436a15d9aa522437cf"],["/categories/日本のビジネスマーナ/index.html","7bca07c7e832d2fdac2f154c7f6663bb"],["/categories/日本の国内の人権状況/index.html","d9ef0453bd74ee9a428a307361910b36"],["/categories/日本の経済新聞記事/index.html","61da926c377bd6342af41598e793fd43"],["/categories/日本地理/index.html","84affb73069293f58c0453fbff634e64"],["/categories/环境/index.html","46dd345f4df498b2abaa3168fd668a2f"],["/categories/過酷な現場/index.html","ee33698f014a466ff39667f0b6645f5d"],["/categories/金融/index.html","e54cd3263a027f6b0061eac43caa2a3e"],["/categories/食べ物文化/index.html","49f7b4255de03e137e5f1c37fa1843b9"],["/categories/食品工業に関する記事/index.html","9eff2e726b3e4b0d54cfc90f9e954660"],["/css/main.css","8a43533e5b36c4f27aaa66860ed47600"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","1b88d4b71acf1840669cdbbb902d598a"],["/js/src/affix.js","2ba4a97e22322e900e458ebe7f227932"],["/js/src/algolia-search.js","1095dc6442d38690e92b16569656a9fa"],["/js/src/bootstrap.js","96756d6884435b4ad13e5db9dbb90df3"],["/js/src/china.js","9c91d0a55f78f1bc55b83289f804077b"],["/js/src/echarts.min.js","e828fc020656efa062f034610181d3b1"],["/js/src/exturl.js","3e13cf6b946b9baaa1f715a259ba3183"],["/js/src/footprint.js","a56d8f0ee201b3e29d77a6b03f497502"],["/js/src/hook-duoshuo.js","3ada02dace1356d263b3c1c29b2dcc80"],["/js/src/instantclick.min.js","7e5bc2beceb34cf65251af3dff8cd228"],["/js/src/js.cookie.js","f313a45de74daae3be13c6a0c64a2142"],["/js/src/motion.js","65df0af0d58bafc28f27e98050e3a2c9"],["/js/src/post-details.js","0ea289182dc99458f03354916a8d871d"],["/js/src/schemes/pisces.js","157528cacbc0519214e881fe43c30f71"],["/js/src/scroll-cookie.js","b7e86efaa01063abae28d3a0869e55cf"],["/js/src/scrollspy.js","2ec26850042ec28d782fdb868db727f8"],["/js/src/utils.js","73618bdac25eb6d8c14eeca740331e97"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","67f5212c048b14cfb4f1e6ecbc8e8ca1"],["/lib/Han/dist/han.js","64b716f094f473adcaa4d6699e9c1a7e"],["/lib/Han/dist/han.min.css","7f60f5940386e9f37a9d3aad793b7210"],["/lib/Han/dist/han.min.js","fedb7316e71205822d9c1bd8f9ddf733"],["/lib/algolia-instant-search/instantsearch.min.css","47ea7e71c66a7a88c792cedc7a54a677"],["/lib/algolia-instant-search/instantsearch.min.js","2286805fbc5569f22c774e441e23cbf6"],["/lib/canvas-nest/canvas-nest.min.js","113b0eeb68391af847e07cc5d3a1418c"],["/lib/canvas-ribbon/canvas-ribbon.js","d71430b6ff23fbf852ffc73cc59ac3b6"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","387b863f8ed50fb52809b09c1901a552"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c801a954fd57edaece38c5316771bdc2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7c1a3832c9be22d3fd651adaa06a1aa1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","edcc7c49bf1008eec5b093b75ff55a40"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e0ed852fe686e74511e081133d71e7d5"],["/lib/fancybox/source/jquery.fancybox.css","0310c8826a668be9df092ac33f6eeecd"],["/lib/fancybox/source/jquery.fancybox.js","32cb2c736b66afaac5cfbdf6a5407333"],["/lib/fancybox/source/jquery.fancybox.pack.js","dd26536fb7fcdac1a809494e548a0d42"],["/lib/fastclick/README.html","7017dcf119305a0d0a5213af4b885515"],["/lib/fastclick/lib/fastclick.js","6a79bb5349b8205ad13a7bb221bffbc8"],["/lib/fastclick/lib/fastclick.min.js","990f7f68a9204a117df0528d19868110"],["/lib/font-awesome/css/font-awesome.css","2e56943caeebfc360465adaf070a3d1c"],["/lib/font-awesome/css/font-awesome.min.css","2e56943caeebfc360465adaf070a3d1c"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","813e144cb0880636a8218eb2ac6d8435"],["/lib/jquery_lazyload/CONTRIBUTING.html","abdc7819aba7f0e6b35115661e72ff58"],["/lib/jquery_lazyload/README.html","0fe0cf73f99edd01738b5c21dccd248b"],["/lib/jquery_lazyload/jquery.lazyload.js","af4ef70a3f8a2fd4baa57e1a6f0a4a44"],["/lib/jquery_lazyload/jquery.scrollstop.js","b4d0b4bee0bfebc3427feaf020fa1734"],["/lib/needsharebutton/font-embedded.css","b792f569b993c8cb17cc42bf2998cfe2"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","74c80fdbecc8219ba5fa7b16f3379cb7"],["/lib/pace/pace-theme-barber-shop.min.css","5887df84fdcee868167fcf18c2c30337"],["/lib/pace/pace-theme-big-counter.min.css","a22150c176de3d3cc9fdacbd4843cad3"],["/lib/pace/pace-theme-bounce.min.css","066dc4f82ff0e45105460db0a0e62d4b"],["/lib/pace/pace-theme-center-atom.min.css","48ec4620ede2d4714610c0c186246848"],["/lib/pace/pace-theme-center-circle.min.css","a153ed474261095cbe8a2e1b98fc9957"],["/lib/pace/pace-theme-center-radar.min.css","c2d9c0b4b2a08c91f0f0a88a28d60969"],["/lib/pace/pace-theme-center-simple.min.css","e6876dd0ac38ec65b20cb0daa94d8c71"],["/lib/pace/pace-theme-corner-indicator.min.css","91b1a04fe200a8f6d823ee0297f1a72a"],["/lib/pace/pace-theme-fill-left.min.css","626afff5bc2a50e12f11ecefa9ccd583"],["/lib/pace/pace-theme-flash.min.css","190122c2ccb80c55795d4ebd100c4356"],["/lib/pace/pace-theme-loading-bar.min.css","bb2c23ea8e2fe0fee83711cfeb29ce56"],["/lib/pace/pace-theme-mac-osx.min.css","810b537167634ee7a41babf9df58fbe7"],["/lib/pace/pace-theme-minimal.min.css","ec0289b940b76728c818133e0ce3e791"],["/lib/pace/pace.min.js","18c71a5c907af45581568736545d6c6a"],["/lib/three/canvas_lines.min.js","5daac43788e7800a1118743a960be937"],["/lib/three/canvas_sphere.min.js","4a5f319679f2ba6dcb2e26b4e076f329"],["/lib/three/three-waves.min.js","13282d3f51f78a40166cc8212850354e"],["/lib/three/three.min.js","18bc004fd9a1ea65156fca7fea85821a"],["/lib/ua-parser-js/dist/ua-parser.min.js","6373358119d9543de4ed34dd20016a4f"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f986e767854d6865f2219c6331a37bba"],["/lib/velocity/velocity.js","034455959fa5c91d2f30b2e1733c33d6"],["/lib/velocity/velocity.min.js","5d6130857e8a19c5c7ce0f54e6ea4485"],["/lib/velocity/velocity.ui.js","92e670059edce0cef4d67c9f4c0a4c62"],["/lib/velocity/velocity.ui.min.js","b7cbc38f78ba9bf691193fe002e2c761"],["/links/index.html","de8252d72c9c557c13d134c812fded34"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","d35f4dba713794a02c72bb9a94f5dbb3"],["/page/3/index.html","5372db2c04b52708aeceb90ccf426b09"],["/page/4/index.html","dfeee96f3e2bf3501ca24b0bb53186e8"],["/photos/index.html","97f2ef01bbe16e3ca26ebfe2fbdb1f33"],["/posts/191ddb73/index.html","e1be8d4d7663361ebe5b0058d4afd5a8"],["/posts/1a195976/index.html","23b80a2b45914ab5edbe1bbf129d1265"],["/posts/2292f1af/index.html","ddccb2ced9ee84ec020819ee91221ab6"],["/posts/2fc77d95/index.html","40c6db930f45c70d1bf896fa5b1a15b1"],["/posts/2feacaf4/index.html","3e57c4ec1fea2e611a595085fd5e89a0"],["/posts/37f2c331/index.html","116f49bc859e6bf139c000eb3b9468f5"],["/posts/385f0de9/index.html","3682de5d715acd4e1706e0b3028d24ad"],["/posts/3caecfa9/index.html","f5ee980a6c58f9cb1cc6b163f088472c"],["/posts/44414303/index.html","d6b47c5ebbe87bb98cb649facac675b3"],["/posts/456610d0/index.html","999d6f83dfb210bacb6ae45176d94b9e"],["/posts/45e51894/index.html","6417b41686fcd71f9c7ea8ce56fc5a19"],["/posts/4f1131af/index.html","0e4b667130720785cc6162d9a98ad6cc"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","c9831cc3341a11f1de72b474d5021753"],["/posts/517ebb95/index.html","be0c469cbe76c687ebdf561eae318a7f"],["/posts/53bf1d9d/index.html","16144ecef32dad67a6284d8bada2d2f9"],["/posts/554c2ba0/index.html","1855d0769191143adfcff038210d25ca"],["/posts/63556f52/index.html","03c50d09c6cb0bf05ceb9f61fae05f83"],["/posts/6d49ceec/index.html","8ae50e51c75b66a316db77636db215f6"],["/posts/6de7d9db/index.html","550f5180a6a0bb6c528ab987c9fa669c"],["/posts/6fda249f/index.html","9f0b05f0e93827c6448c8d824fc8529e"],["/posts/84b87417/index.html","303b23c73718908066907d90724de3d6"],["/posts/8a60fcb8/index.html","93c9792b2684b30efa01dce0b306388e"],["/posts/92912ddc/index.html","6a357449003ddca0e367022dade13a0a"],["/posts/97e5bc9c/index.html","e99e65602dfa134fc20dfcd8c82b5f7a"],["/posts/9a5c7b64/index.html","2fa16b9efddfc3aca5e3de5b71208691"],["/posts/c311b112/index.html","62c9861b0f07db9b9cee0c1bc9570694"],["/posts/c620d4c2/index.html","fa7f705e86aba1f1a3ccd6a510ddd5fd"],["/posts/cfc54393/index.html","4bc33359362c818ae7274db7efbaf741"],["/posts/dc5155ff/index.html","f5d7f039e17e1853589e010c075b9e0c"],["/posts/e1bd836e/index.html","4140db9a60cacc4139d8fbd2d24155bf"],["/posts/e31c0293/index.html","3f5d2d217adc66257829e3a007f91ed2"],["/posts/f5fc4461/index.html","010a21d165611f1b83f060ee58169cfe"],["/posts/f8073739/index.html","4f6bcf5b748c18bcd8a073637dc4bfc4"],["/posts/f97ef43b/index.html","fffdd25938ebce56b2935abc3f692301"],["/posts/fa84d5fc/index.html","4bc6da51514ea45cd79e860cd171136e"],["/posts/fb1ab942/index.html","d817f643c88be202d3a5eaa3c3d4676f"],["/sw-register.js","d43931dd32cec6737b3d36faccd30e0a"],["/tags/J-pop/index.html","a8db87882138690ce65cf48069f05143"],["/tags/index.html","3bbf6540c3d637b1a8fec20996c4f96e"],["/tags/つぶやき/index.html","3b9f2b629d91e33b8d3cdd11d3f1a14e"],["/tags/アニメ/index.html","30993f454fa8c038d6a2f34aaebb00f5"],["/tags/インターネット/index.html","4577a39a96c1333aaec522b1e7e373b3"],["/tags/チョコレート/index.html","332b649f4ce243f22938a5723636f785"],["/tags/中国に関する新聞記事/index.html","fb0b474b810adcef2fa6f561fcee6aa7"],["/tags/乳製品/index.html","292413d229fd8394e16a4138b3e74784"],["/tags/労働者保護法律/index.html","dde0b7bca012728de92e82c3e6b7ee67"],["/tags/心理学に関する記事/index.html","dfadbcd41bf3fe86942c08e96db67c0a"],["/tags/日常生活/index.html","7bc4544cc46b60c1cbbe5e82b0d4923f"],["/tags/日本のIT教育/index.html","b109249a14da41e0d825d585144bc5b1"],["/tags/日本のIT現場/index.html","7abb43f076ccc11be5eb5a507d86dc72"],["/tags/日本のビジネスマーナ/index.html","be7ab7252f837c17f50f677e31c78561"],["/tags/日本の国内の人権状況/index.html","68f3c654a2c512d8311783d7408c2a0f"],["/tags/日本の経済新聞記事/index.html","d74a1562a9b81db08407f33c4031cabc"],["/tags/日本地理/index.html","fdc73b5b8ff67c713c178cc1760f374f"],["/tags/环境/index.html","adebf8a4bb52c0ae8ada1f99f47ff9b5"],["/tags/過酷な現場/index.html","86e8b6399842a1c6e91849598f7d29bf"],["/tags/金融/index.html","87776566909f3ca3fe114544fc2425ce"],["/tags/食べ物文化/index.html","66f68b10ecd5b434fdca001328abec08"],["/tags/食品工業に関する記事/index.html","03cb302d8d8c1cc31607fa94aa8418b1"]];
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
