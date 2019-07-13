/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","2ba96afa7a4cbf6fd3aeecc32ac13343"],["/about/index.html","a5d37127eb252a1245eb1d9e4b54003f"],["/archives/2019/04/index.html","36e87a1ca493039056109d13735da10b"],["/archives/2019/05/index.html","34416edbd4fb27f33e69a8dc30fe9a15"],["/archives/2019/05/page/2/index.html","ecbd4f4e07b64aed129cf505d0d62902"],["/archives/2019/05/page/3/index.html","87079b417a47fa2016f97ccfee8fe245"],["/archives/2019/06/index.html","78702453d5501c9ba4d956875439453d"],["/archives/2019/07/index.html","a13872c121fb376818e352851503ed5e"],["/archives/2019/index.html","72f2a2492724fa249953f55004508d2b"],["/archives/2019/page/2/index.html","75094dc374ec8b22ee20be050220d37e"],["/archives/2019/page/3/index.html","49a784bf9c416a25f54c798a277eb771"],["/archives/2019/page/4/index.html","29ef68cedb02f2a915af34fb7d3dc209"],["/archives/index.html","c497704cf16270ac08237fc522b6dcd4"],["/archives/page/2/index.html","064695f5871b9e08b42639d9e1cdc0c7"],["/archives/page/3/index.html","ce6dc62cd78a5ac72f6bd47a2fd97ae1"],["/archives/page/4/index.html","1d174f6be48b7cad5deadc0c5878e062"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","ba7282c9d5476a3ec1ec577f3f562f14"],["/categories/index.html","62801242b6d75acb0c73646d353f06cc"],["/categories/ことば/index.html","b10e380e264d37051016618c3f37c647"],["/categories/つぶやき/index.html","53825daae76ebb2a07106794dfd731a9"],["/categories/アニメ/index.html","48da0329ed7fce28efe800dc2faead22"],["/categories/インターネット/index.html","556956cbd7778304a6006c9ba4e7d5e2"],["/categories/中国に関する新聞記事/index.html","e54ea3f1fae7d5a1d030493157ac399c"],["/categories/労働者保護法律/index.html","d55b275c3e2bd9a660e8dd26b9b70751"],["/categories/心理学に関する記事/index.html","ec1d77b5358274603a97d4b681747521"],["/categories/日常生活/index.html","8d5412553a6f1c7527b0d4dcb79511bf"],["/categories/日本のIT教育/index.html","5a49cfdbd4dd96c2029ee719c2c99b53"],["/categories/日本のIT現場/index.html","7d91611d3c81501513be95cab16cbc99"],["/categories/日本のビジネスマーナ/index.html","48d165309d4a59d6d75dd9b22b0b0823"],["/categories/日本の国内の人権状況/index.html","82a857a66e5acb278fd40b549dd1c3c1"],["/categories/日本の経済新聞記事/index.html","4f91551dab6eece4ac9d84719d165a4d"],["/categories/日本地理/index.html","e19aebfa8de226b71d0094874c58a4dd"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","559bfcf9f27cbb32540a42dd1fbef0ef"],["/categories/過酷な現場/index.html","9603e87af3d75f1bec686e9dd2b87736"],["/categories/金融/index.html","06c7fd7983ebb2433599f9fb73363d28"],["/categories/食べ物文化/index.html","9147eb1daa12c9cb7f6309913783c16d"],["/categories/食品工業に関する記事/index.html","cffb84a5738f49986f342a2402be3a8e"],["/css/main.css","836b92e33b3422e6abd961916245fc2c"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","aec063c216512f7bb90a664af61a4d42"],["/js/src/affix.js","ab9bd3f7b989088d0e2a47b7acc5b13e"],["/js/src/algolia-search.js","4bd744e4385b6ada3247e907970035fc"],["/js/src/bootstrap.js","b5945259b39acea69f0a1f59f6ec4147"],["/js/src/china.js","fefca27ddd2b60c40bbb8161c8300333"],["/js/src/echarts.min.js","02427947108428b53491ccff2079113e"],["/js/src/exturl.js","fd2944c7b49b5d898b850b7e7bf5adb0"],["/js/src/footprint.js","1a91a052665434a607bd76a68bbcbea2"],["/js/src/hook-duoshuo.js","3c65471662e4c37185fe8990967d970a"],["/js/src/instantclick.min.js","f25cf45aec4f47c411886a4754fbfeb0"],["/js/src/js.cookie.js","0efd169936ea80c7c98cbaceb962f28d"],["/js/src/motion.js","398a65ea293d67279ba0b36a9c959463"],["/js/src/post-details.js","c3d6cbab7a19c6a5733621a903e5c222"],["/js/src/schemes/pisces.js","dbbf2c6c747214d54943ed542d66314f"],["/js/src/scroll-cookie.js","dc88562d133a7b96157fee1695c61bde"],["/js/src/scrollspy.js","509e9d20f6ec6a508c412e21ac5ecb3f"],["/js/src/utils.js","1de2a90033ab7745f31847c01c7e5c69"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","8593cb66585689fb69b3602c424aff0c"],["/lib/Han/dist/han.js","a4946322f438a6901c32d6ae9b76ea0c"],["/lib/Han/dist/han.min.css","690ac5995de1ae5bf215d5f971b22827"],["/lib/Han/dist/han.min.js","587f3489ec38b82c83a9162790e2b399"],["/lib/algolia-instant-search/instantsearch.min.css","7bf95489112ea853a479c3f0d25a47e4"],["/lib/algolia-instant-search/instantsearch.min.js","db7a5857682dc159df2dfb18ae799dec"],["/lib/canvas-nest/canvas-nest.min.js","19b983bed67972340284898d306c03d5"],["/lib/canvas-ribbon/canvas-ribbon.js","8a71f66b863f8713065456b81150224d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","08226b457e973a9ea9af5480fb3584af"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","8cc3c47b497882131c6c67a304f989a4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","95770401b5e54f5f50343c707b55daf5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2f495bbc54deb884ad4cf06931999d1f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b8c3e0b9a1de0131144d5e5c7e9bcbce"],["/lib/fancybox/source/jquery.fancybox.css","1ce1bdfa87f3ee420c9d17846ffda40f"],["/lib/fancybox/source/jquery.fancybox.js","fdd3b56cddd398320f3d62e26bc27e0a"],["/lib/fancybox/source/jquery.fancybox.pack.js","6df8b2674b9a4faa0f3fd1e11dc400cf"],["/lib/fastclick/README.html","951e27701bbb379794e3464cd4a1cc2f"],["/lib/fastclick/lib/fastclick.js","77395d7b5089ef381ddb945b99e4094b"],["/lib/fastclick/lib/fastclick.min.js","a777df62b65ce9feaa252cdafd21d592"],["/lib/font-awesome/css/font-awesome.css","44119ea990802a064a74688d3259ecc7"],["/lib/font-awesome/css/font-awesome.min.css","44119ea990802a064a74688d3259ecc7"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","6925429168435d11ea3e42c557c0b8d6"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf9be9d3febbfceed4acad198efb0e31"],["/lib/jquery_lazyload/README.html","fed55d3debe34c3e3ed5c609b28be3e0"],["/lib/jquery_lazyload/jquery.lazyload.js","cb28747b970b5b3570fbf979d70ebafd"],["/lib/jquery_lazyload/jquery.scrollstop.js","34b9d63bf4eabe2d3244d88aff447884"],["/lib/needsharebutton/font-embedded.css","0f4134ee1830a9dfd8088e91b3f3e579"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","d736428cca866149d7c545266eb48fc1"],["/lib/pace/pace-theme-barber-shop.min.css","76f6d0709fc0a1f5703f0e53b8cea5fe"],["/lib/pace/pace-theme-big-counter.min.css","06e6e4c52855d5241ddc879c9a277bcf"],["/lib/pace/pace-theme-bounce.min.css","b7a08efaa81a3cce88e34ebc9bd302c7"],["/lib/pace/pace-theme-center-atom.min.css","85b7372250f08228f843ce4dae1bf34e"],["/lib/pace/pace-theme-center-circle.min.css","3a74f4dc48ed112d96611ecfaf53863c"],["/lib/pace/pace-theme-center-radar.min.css","872aa1b1673ec0c18f9fc781cd72d327"],["/lib/pace/pace-theme-center-simple.min.css","e66050e1617a43618d146b402041b516"],["/lib/pace/pace-theme-corner-indicator.min.css","c6d276b9b719478726bb77a301c9f17a"],["/lib/pace/pace-theme-fill-left.min.css","6c19656f14c02ea180140ac826112d7b"],["/lib/pace/pace-theme-flash.min.css","c64194dcdffb4b01e7cda7a56744f19b"],["/lib/pace/pace-theme-loading-bar.min.css","b98b304dfe445eb5dc55efcd762c7f63"],["/lib/pace/pace-theme-mac-osx.min.css","ef1b68cfd3121c4570288ea9aedaae51"],["/lib/pace/pace-theme-minimal.min.css","7ad4a4ed42976e04d51aabdeee3563d0"],["/lib/pace/pace.min.js","3fbfc0b279194f081a9e124ba6516a3e"],["/lib/three/canvas_lines.min.js","3845c7267a0a5371bc55103dc0a264c6"],["/lib/three/canvas_sphere.min.js","c015ca8b3659e2680f4283634a8ec7ad"],["/lib/three/three-waves.min.js","65696a429699a06ac75cf57d494333d4"],["/lib/three/three.min.js","638fde33cba1d5c4d3cb6c45f199f4ef"],["/lib/ua-parser-js/dist/ua-parser.min.js","384f9090e1379ebfdaca2262cdade5eb"],["/lib/ua-parser-js/dist/ua-parser.pack.js","442d62598051e0da9b63585c2f2a2d6e"],["/lib/velocity/velocity.js","0e1a706a2857a290837ac371a811702a"],["/lib/velocity/velocity.min.js","11c67108ba3c1fb8ed6f6cd08ed3735a"],["/lib/velocity/velocity.ui.js","fe21e2ccf414b2c784de0c6624ba8bb5"],["/lib/velocity/velocity.ui.min.js","25d53a676102ac82c2b8c3cf24d252ba"],["/links/index.html","1866939e736c1c461e3b9b5e9f07778c"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","16856ca169df351927077ba2b25cffbb"],["/page/3/index.html","1d80afebcbda5273aa56aa111ac4bc2d"],["/page/4/index.html","ac6d195c362e551ba05399274797dd12"],["/photos/index.html","75725019c3aec349b8463392a35ce9b3"],["/posts/191ddb73/index.html","4cb02ef49425e851de6f93d84edbb74a"],["/posts/1a195976/index.html","d18a81f7062c36d5171aa3e00e70ff21"],["/posts/2292f1af/index.html","ab9e6ed9a57d7fdcef03f3bb6947f42e"],["/posts/29d57d6/index.html","b928843bb7b9eb35083584fbfa7c9bb8"],["/posts/2fc77d95/index.html","6ccd2175703a9be635c95615a925b0b3"],["/posts/2feacaf4/index.html","3cef10ba54a448867d84d5004732f4c8"],["/posts/37f2c331/index.html","b123ee13125f77dc9ba6a0c01d2a9421"],["/posts/385f0de9/index.html","f2dd50c87284370c0925fb364b2e426e"],["/posts/3caecfa9/index.html","0be38e107cba5e2ecac8aff5e0df16ca"],["/posts/44414303/index.html","7b3a00fd5ad53aaeab7b1fb8c5adaf40"],["/posts/456610d0/index.html","b3c42ff70e52eab6080df3b468376dfd"],["/posts/45e51894/index.html","cf4a9e9c00efbf34987cff76120c1ac0"],["/posts/4f1131af/index.html","7673d79fe318c61520ed92b9bf05a509"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","08dd6e365607e135cd98b496f01f751c"],["/posts/517ebb95/index.html","24d8a740a0eab9c3fb61aafb8822f1fd"],["/posts/53bf1d9d/index.html","f49d1c289b89291b25d6b7c628eed701"],["/posts/554c2ba0/index.html","f348b71cad8a0ebffe089dfda977a671"],["/posts/63556f52/index.html","f5618fd3ddb82edb636cf423a1948672"],["/posts/6d49ceec/index.html","54785ce6d54dcb7cac4b9b2764748a94"],["/posts/6de7d9db/index.html","c92cfde030846cad98740471df1e9df9"],["/posts/6fda249f/index.html","6b4213e81d90fcf4d53e67034fa25fa7"],["/posts/759a6740/index.html","13fe7e4763ba5d8e27931b14098bd218"],["/posts/84b87417/index.html","f3ad2d7f1cb6cd9a78515a0144df745a"],["/posts/8a60fcb8/index.html","7202e509d8e3c4d019dbf7e80e088aee"],["/posts/8b4c253/index.html","4d84faab91041b0824028604f7ec51d7"],["/posts/92912ddc/index.html","cc1ddfb4051d3ee1f0d64115861c875c"],["/posts/97e5bc9c/index.html","f833ebd41832799b81e472ccfb370a77"],["/posts/9a5c7b64/index.html","6e3828ca95ab525ee202f0c20441c91e"],["/posts/ac7d0231/index.html","f789aa618d5ce507fb3b69a406dcc53c"],["/posts/c311b112/index.html","982dfb54d26a79a8eba3ebb79b004903"],["/posts/c620d4c2/index.html","5275b4a4f5476d016fc225f143321580"],["/posts/cfc54393/index.html","b6f5ae54c2592d61aa6de98cc48665a2"],["/posts/dc5155ff/index.html","575c94186af7d2ad8172ebfeb7bd0843"],["/posts/e1bd836e/index.html","828961e3d6a55496134d84a0afacb8b1"],["/posts/e31c0293/index.html","1816fff8750cd5f37b9a43df84f3b422"],["/posts/f5fc4461/index.html","f510e208f0260b444b2d07468e823d76"],["/posts/f8073739/index.html","6c2cd58ed7920cf370bb41776e5a8b38"],["/posts/f97ef43b/index.html","dda14ada2f025dcc51e97fa6be563f76"],["/posts/fa84d5fc/index.html","3f7ef2bdf1c5b3e968a5e21231727b91"],["/posts/fb1ab942/index.html","d7031cb9e31470cdeb2e5870768e534a"],["/sw-register.js","f5fbb973d699fd54e7e63f9c39662ff8"],["/tags/J-pop/index.html","74ad33673056f887a8d78edb057fe2ac"],["/tags/index.html","e11ebd20e121ad69a4bca5678649a789"],["/tags/ことば/index.html","56f33330933dbeda4e172b33e0fd4644"],["/tags/つぶやき/index.html","334bbef4e59a6626565da233bfaedaf4"],["/tags/アニメ/index.html","927177b87d9a9053e3395f56e66e877c"],["/tags/インターネット/index.html","df8fe982d7456d2e0c5166d2e4aa45bd"],["/tags/チョコレート/index.html","b9955ffc36a96bfa4ed0e5d4e0c87445"],["/tags/中国に関する新聞記事/index.html","6994bd001ba3c2f7a148373ef95a44c5"],["/tags/乳製品/index.html","36fef8599c6b3ccbeab39b20fb628807"],["/tags/労働者保護法律/index.html","ee0faecad09d288b89474f672e92388a"],["/tags/心理学に関する記事/index.html","5f8e292917a7bec3b8eea1ae873bed0e"],["/tags/日常生活/index.html","2f0702bc91c8639b193aa963702c5bd5"],["/tags/日本のIT教育/index.html","9975e9b0f587418a52d041203466af49"],["/tags/日本のIT現場/index.html","589bd4692641d7ac2e9a2c7f9670a6db"],["/tags/日本のビジネスマーナ/index.html","c09ec4cb0caf93cad1297707af753198"],["/tags/日本の国内の人権状況/index.html","5a7c95b66bb91ea3e6ed33bde0c970c1"],["/tags/日本の経済新聞記事/index.html","90b7e1db245164fdea1bbb8e20f483ef"],["/tags/日本地理/index.html","a127ebafa1182bdde22369261bb70558"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","bffafb2eefe1cb850e36e2b6a343a5aa"],["/tags/過酷な現場/index.html","30a9fbafabd93da09cb79fbea99670cc"],["/tags/金融/index.html","1baaf0b2db9bbc6fdc043713446cecb6"],["/tags/食べ物文化/index.html","bc8f3b896aaf4a8058e9b399911a68e4"],["/tags/食品工業に関する記事/index.html","cb1edbe01e3b4126970bd1eeac464119"]];
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
