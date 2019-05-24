/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","cdc0ad64b39368b684785eecb4c8777f"],["/about/index.html","acbcd5dc426d0ce7924046432b3d805d"],["/archives/2019/04/index.html","8dacc81badd5bc02e5879dce317f29b8"],["/archives/2019/05/index.html","5d71754bfa2e392519d2198ae6b47aa6"],["/archives/2019/05/page/2/index.html","d1e344673f2afb3667a97b41c31c8e35"],["/archives/2019/05/page/3/index.html","c52a5f7855281b5e64b39faf7a3cfdb9"],["/archives/2019/index.html","1c3c32e78eb6b931454c5fc7af644241"],["/archives/2019/page/2/index.html","0b9138dce1dc215d7401cf392c3611a1"],["/archives/2019/page/3/index.html","dd73040fdeb17784b8235ce96bf26ffa"],["/archives/index.html","90c73473101c34e9cfc387e58366d977"],["/archives/page/2/index.html","b625421e4ab51a80983e135fd8d4c0b8"],["/archives/page/3/index.html","b4c58a418ceb0fb220aa3b7b05e91343"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","73bd93dfe463b12056d14e424cd7b9e3"],["/categories/index.html","424d9293190304719d56465bcc30759a"],["/categories/つぶやき/index.html","9c58e1119f1703e3af7f1045b371a91b"],["/categories/アニメ/index.html","4a400cf0990335086fd3aa9333921799"],["/categories/インターネット/index.html","eb01840e32b74fcc568d914830288a21"],["/categories/中国に関する新聞記事/index.html","b3b54dbe733df24567f38c945f1ea99f"],["/categories/労働者保護法律/index.html","0481eb6fa6299af6c22c9997103841c1"],["/categories/心理学に関する記事/index.html","a5c9a0da47d6e51a500bfbba28607e56"],["/categories/日常生活/index.html","910987dfdb4d523ff7c22adeee6c1398"],["/categories/日本のIT教育/index.html","3f6c2a021f9fd3bcfa44de368077eff0"],["/categories/日本のIT現場/index.html","b3927fa1e0794a6d60b8c89e7ee1ac7b"],["/categories/日本のビジネスマーナ/index.html","d62c68453b36e1f7cee37bfc36fb3b89"],["/categories/日本の国内の人権状況/index.html","71977bfb157ed686b200a502874f2187"],["/categories/日本の経済新聞記事/index.html","14ff41d5eb0974292de8d9c03ec98900"],["/categories/环境/index.html","669fcf75f50674d38263ba32c90fcdf1"],["/categories/過酷な現場/index.html","7bf3c418d4551c58499e9b97417e4532"],["/categories/金融/index.html","b8d7e36d1c1c383e3ccc43e6bf2fb03c"],["/categories/食べ物文化/index.html","5ba367f0ac7054a6b8e9b4b9ae9b6d7e"],["/categories/食品工業に関する記事/index.html","e2bd5f4ae7aa503a7b7d9f2a541a3a5d"],["/css/main.css","7ea4ea7f78003ec94e79f39ba7641f01"],["/games/index.html","3037e8913cff554e72a35e5e4e0e4d5f"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","13a4d434168b9ab70c3567ee7a2ba6af"],["/js/src/affix.js","00d7863c70c7705bbc64abd9d1a3574a"],["/js/src/algolia-search.js","3d78f829182d812bcb84cb5a03a60ca7"],["/js/src/bootstrap.js","33c722262e5f12ea6f7d4474607ed803"],["/js/src/china.js","3e851c5127d8e5bb708cb300213d4568"],["/js/src/echarts.min.js","538b012052ab741787207c96fe035e2d"],["/js/src/exturl.js","465c4488953b0b3e46652188830dac04"],["/js/src/footprint.js","35514aeb36323324b5df3c27ca190609"],["/js/src/hook-duoshuo.js","4447628be6556d3d37c2facf94606a44"],["/js/src/instantclick.min.js","71d7c59444a55129c0036499adf34ae9"],["/js/src/js.cookie.js","dff88d6592f861642bb7fda22fe71cbd"],["/js/src/motion.js","06be3dac49ce5797a75a2716098d0e9e"],["/js/src/post-details.js","501a3d370fcb50814c6a0af6ebbaaa37"],["/js/src/schemes/pisces.js","aa3f851dc55ecbd899f3a67f37711098"],["/js/src/scroll-cookie.js","6d06f540df69c65973ffee979838f1f2"],["/js/src/scrollspy.js","6ad32b2a4f59c79b72a20f5172cf0c5b"],["/js/src/utils.js","689cae4274256a7505c9c6ef99b6781f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","e30b0cf745029c147d99c5b633f4111a"],["/lib/Han/dist/han.js","ea65701ab928dd858e97c38f20819ff5"],["/lib/Han/dist/han.min.css","5d1a4245ad663ef93d15bacc75fe9337"],["/lib/Han/dist/han.min.js","1b17587fee7e6b92e904f715e501fd16"],["/lib/algolia-instant-search/instantsearch.min.css","1c083e8c21bc48f38ecf8da1941284b8"],["/lib/algolia-instant-search/instantsearch.min.js","83e2cece679bb10f84136055c90c7805"],["/lib/canvas-nest/canvas-nest.min.js","f777236c32e74efba0668710130b53cb"],["/lib/canvas-ribbon/canvas-ribbon.js","815956493122b75dcda130d68fbe2d33"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7235347671fe1a1699934cc9f54fcaa0"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","db5038455950a39393dc6b534d1bdcf3"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","00222f49f9c444b6a1201a90b8cae557"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","0f10827add67f6c24dda9b5be5263160"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c184c7abd3f98f60740bb25dab508008"],["/lib/fancybox/source/jquery.fancybox.css","aa8b720292dc4c631514a563a0a7a53d"],["/lib/fancybox/source/jquery.fancybox.js","7d3a10f65735b2757328c7926e24aaed"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfdd32200cc1c7194ca9116e0a2e4e71"],["/lib/fastclick/README.html","97d4a477215314b00ce641f2472611d4"],["/lib/fastclick/lib/fastclick.js","266575d7a1b3db96c85fde07cc774f81"],["/lib/fastclick/lib/fastclick.min.js","1dd7ba9575ebe2efeebeb8ca479a5265"],["/lib/font-awesome/css/font-awesome.css","e084e8dd392aad31077e4af96d97bcc9"],["/lib/font-awesome/css/font-awesome.min.css","5763d86bbeb4a9c2dd5f44483865396c"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","1d82fc24b478e00fcb25b51c69a069c3"],["/lib/jquery_lazyload/CONTRIBUTING.html","c860c63a44d6d1a027deff59cef95833"],["/lib/jquery_lazyload/README.html","34f5f4e8b06f193aedbad1974003b39e"],["/lib/jquery_lazyload/jquery.lazyload.js","e32ea97a191f76714709da645a060a02"],["/lib/jquery_lazyload/jquery.scrollstop.js","b11657f960eb2d00ad3931fac692d81b"],["/lib/needsharebutton/font-embedded.css","81e770e72fa24e091094895431f93a41"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","b34da6ed97a6d245fcc217a0c9a0b261"],["/lib/pace/pace-theme-barber-shop.min.css","82ec71c08c99863c34f659a52b8cb936"],["/lib/pace/pace-theme-big-counter.min.css","755483361b27f62f33b9cac15b92c9a3"],["/lib/pace/pace-theme-bounce.min.css","21db7afe093a7eba62739dcd32e039f2"],["/lib/pace/pace-theme-center-atom.min.css","8077b6019a118662c0ff952448a46693"],["/lib/pace/pace-theme-center-circle.min.css","b31656037bf2c72085348f22b8abdcd2"],["/lib/pace/pace-theme-center-radar.min.css","417730a09f1ac11fa7899eac431cc8be"],["/lib/pace/pace-theme-center-simple.min.css","e9b39929346e0320bdbeb2442d238463"],["/lib/pace/pace-theme-corner-indicator.min.css","ec198f82b56e4751b9d12790e387a1d6"],["/lib/pace/pace-theme-fill-left.min.css","81e328206e534993b4ae981b230f3ed0"],["/lib/pace/pace-theme-flash.min.css","2f519fea99ea50183ca8dd5eace45412"],["/lib/pace/pace-theme-loading-bar.min.css","07ed94c646239d75c6834f8e10e18ff6"],["/lib/pace/pace-theme-mac-osx.min.css","b0f57bc86f1e96f8cb5324d4b342fdee"],["/lib/pace/pace-theme-minimal.min.css","a5975b55b83634d9dc0202862875c4d7"],["/lib/pace/pace.min.js","b82c9d054963ac25df8cc5870c914c0f"],["/lib/three/canvas_lines.min.js","acb29d3a2dd677f805bfcec05214fc33"],["/lib/three/canvas_sphere.min.js","51be955b58b440357dd4380ae4e18a78"],["/lib/three/three-waves.min.js","1372210c9289cb84cbcc22f6d06cc1e3"],["/lib/three/three.min.js","326a6b4d72d717981efa7e1cc55fe5f8"],["/lib/ua-parser-js/dist/ua-parser.min.js","ae8167092f6cb916fdcbfe90d98993ae"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e1900d1f29d6fb58d818ae5b36b282a1"],["/lib/velocity/velocity.js","d5aa0c06438caff457e6cf762ffc58d9"],["/lib/velocity/velocity.min.js","6c0459b5244e51a4078b54d6069898d7"],["/lib/velocity/velocity.ui.js","ee30a8e6b3959d0560b971fa0fd6005a"],["/lib/velocity/velocity.ui.min.js","97840c5fb40758f17a2cdb3d013e61da"],["/links/index.html","4278004722d5ca2582860898106789be"],["/movies/index.html","fe28ebf4688a3dbd708000270dea1712"],["/page/2/index.html","2a05ce0d643295da0855e65d3b98d111"],["/page/3/index.html","2f31403ee51320b63550eff7ee5a0b6e"],["/photos/index.html","3ec25bbe5a5cb281dda4db5feb457fa4"],["/posts/191ddb73/index.html","128f06717f319f4aa82bfd4be05b90d3"],["/posts/1a195976/index.html","e4dd55d1fdc81c0b1b5bc2ba94e9437f"],["/posts/2fc77d95/index.html","dc5b1d1df27f4805beb8f32fad647910"],["/posts/2feacaf4/index.html","65dc1672ec16d7b01fee9b24cf782a46"],["/posts/37f2c331/index.html","8a2670713f3d7fad13777daf4667d415"],["/posts/385f0de9/index.html","615fa7b266a1ffe575212535edc580d0"],["/posts/44414303/index.html","4a34ccbb5caed6219e930dc14664fc6d"],["/posts/456610d0/index.html","65b086f2ebbcb97c11be20f78ca5de78"],["/posts/45e51894/index.html","d549c120387ea89fa3181c071532e006"],["/posts/4f1131af/index.html","d3b68ab55cc4fbfc947f944b7aa724b2"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","f750ffb4a1e14bef1c30151429680c25"],["/posts/517ebb95/index.html","b7a8f8c12cff602a86f3d25196d2e5dd"],["/posts/53bf1d9d/index.html","7c02829324f3b63b8f0f6028db2607cb"],["/posts/554c2ba0/index.html","460ffa1f3d36720210c98dbe3ab77800"],["/posts/63556f52/index.html","fcb891c44b44e04bd83e86816023b7f1"],["/posts/6d49ceec/index.html","f4ab699803c7315824ea90f08fc768ce"],["/posts/6de7d9db/index.html","df95b34a075fdf3ff494c0fce70e3a32"],["/posts/6fda249f/index.html","b795c7328ae678ead1dec923fd460bf8"],["/posts/84b87417/index.html","ded53745ad690e74059556c1f587b78d"],["/posts/97e5bc9c/index.html","f5be61b3012a4c88090123eac2310246"],["/posts/c311b112/index.html","0cf573a877825ec22e8d95b5e52d979d"],["/posts/c620d4c2/index.html","09feee6546ebad7c548f83bff95487dd"],["/posts/cfc54393/index.html","9c924a7a70b923548ed0420aef9da612"],["/posts/dc5155ff/index.html","7802039ebf7d337ec5b91ba2aa119123"],["/posts/e1bd836e/index.html","d28e4613689da013c44b5d283db64157"],["/posts/e31c0293/index.html","5baa382f62896f0aecbda093fbec220b"],["/posts/f8073739/index.html","328e45ed49faac62e298bfa66eabd2e7"],["/posts/f97ef43b/index.html","104e08bc25803cbd209fe535ba62a8b0"],["/posts/fa84d5fc/index.html","ac8e8e9c7f6df85f4d1204d2007d8161"],["/sw-register.js","383564ec3c578617e3203ffb7be3b4a2"],["/tags/index.html","46f1e750f03b4d402c8e08c959eb98e2"],["/tags/つぶやき/index.html","981e49c2c08ee05a52ee2560f4f5f1e9"],["/tags/アニメ/index.html","c15d743d4b1617cd7d80d66e7f5c1b6c"],["/tags/インターネット/index.html","042b98716ad3dd5ea58c2f934c8a702a"],["/tags/チョコレート/index.html","94f082d4c8b1fd9dff6588f227b8c6c9"],["/tags/中国に関する新聞記事/index.html","d4760afc5e070aa34866931a3a1fe0f3"],["/tags/乳製品/index.html","5bf439b67956f4eacd75fa27be7d6196"],["/tags/労働者保護法律/index.html","cbbf84da00f430ce5392b089c763d191"],["/tags/心理学に関する記事/index.html","35eb865613e56b301428a87f557cf0a7"],["/tags/日常生活/index.html","77ef237d773f5a64d40cb1a095d7e152"],["/tags/日本のIT教育/index.html","a4da32de7f929bb1294bc443db598e6e"],["/tags/日本のIT現場/index.html","ca29108729f21372deb012c703dd193f"],["/tags/日本のビジネスマーナ/index.html","bf7e08c77b7737adbbcd0fb48b9c530c"],["/tags/日本の国内の人権状況/index.html","c1db81bea60bd60738e99eb5c8fb428a"],["/tags/日本の経済新聞記事/index.html","c8d596c66c590970d5d8b6bac9d97cec"],["/tags/环境/index.html","f5cc4232924d9e09a6abb1c951928936"],["/tags/過酷な現場/index.html","003e5fa5c48f84b4121c2bc105b344a1"],["/tags/金融/index.html","e24becc604262638ab28baf9f1b963a1"],["/tags/食べ物文化/index.html","cff7ea437d102674d7bc749dcbc89719"],["/tags/食品工業に関する記事/index.html","f70583547e86ad334d736b8bb3b7b7ee"]];
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
