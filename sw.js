/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","71ac6f18d8ed7cf76dcc530de53e46b1"],["/about/index.html","1070081e32832e257fb6eaaefde1c7fc"],["/archives/2019/04/index.html","a5f31480746c5e9cf99231701e398ea4"],["/archives/2019/05/index.html","02740584a25bcbdf6930348475ac9bc2"],["/archives/2019/05/page/2/index.html","519055efe5879bdcea727ceb8e8c1ae9"],["/archives/2019/05/page/3/index.html","d378b48f370adff21ebc0cdc99216160"],["/archives/2019/06/index.html","f2a507022ac0a6709d59e60aa5bde8c9"],["/archives/2019/index.html","7b57a18176de53a756262b66323ffd5b"],["/archives/2019/page/2/index.html","e63403a77feaca82b3bab23d4717d410"],["/archives/2019/page/3/index.html","d38cd9476567ef0ed19c0eb0ec5acba0"],["/archives/2019/page/4/index.html","78ab0d34c561811bc5974dc6b8b32d42"],["/archives/index.html","0753e1f9021d8b282a31097e871a99f8"],["/archives/page/2/index.html","49c069a4c15be24cd0da7f743851f6f8"],["/archives/page/3/index.html","14e96069246e84fa7c1430f66f86a8b3"],["/archives/page/4/index.html","8acd1f73fb2ad4abeb00726c0f97d56b"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","e03920aeca8fd5cb1d32ccf3b9376ece"],["/categories/index.html","224348fea133fbc5510d50a70ab83b33"],["/categories/つぶやき/index.html","e893c00c7c91e49e8f2110aa67c3b599"],["/categories/アニメ/index.html","028a52de4464f2a2b9f10e32daac2565"],["/categories/インターネット/index.html","7ef87fb2ad77eeef64bf52a6a2042ff4"],["/categories/中国に関する新聞記事/index.html","5902aad92fdd218158167de90b08c768"],["/categories/労働者保護法律/index.html","af42a6570c8978f7ff6958816c983654"],["/categories/心理学に関する記事/index.html","166030d5657aa8fa85361d0ec7d304c0"],["/categories/日常生活/index.html","6e825ddfedbbf3efbc6257e085b64f49"],["/categories/日本のIT教育/index.html","bce560f15c6afe65b736fd9d44385b19"],["/categories/日本のIT現場/index.html","aaba02a0b5e55ca20326393a49fc0fcd"],["/categories/日本のビジネスマーナ/index.html","d011d364b5f20c32d3042f4c0dde94be"],["/categories/日本の国内の人権状況/index.html","b31d47206fa986898acb2d8120c596f5"],["/categories/日本の経済新聞記事/index.html","4ab422a485bb56e5945347508f7c83e2"],["/categories/日本地理/index.html","1f7cce615fbc553881313a0fc3034aa3"],["/categories/环境/index.html","0b37a3353895b8b3d2e20ec18ff96759"],["/categories/過酷な現場/index.html","cc9b60e5cbf98e6f18f7dfd7c0a9a76b"],["/categories/金融/index.html","fb5999f8bfc186269183c5996cb245fd"],["/categories/食べ物文化/index.html","45587b5eea15fe05c75d73e4eab45ba7"],["/categories/食品工業に関する記事/index.html","e1f4bb5ecd2246d9187293c5adeedb5d"],["/css/main.css","4d3eb405b8421e3ffcdd87b5e714e337"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","1f3d008eaa28f0a7a398f32b80c9e523"],["/js/src/affix.js","03eb30bab84e21b8d61c513da7ecb369"],["/js/src/algolia-search.js","af1eb5de18768ccdbb03912c3b85520c"],["/js/src/bootstrap.js","fa5a6d147a187e9ae53756075caf8ca2"],["/js/src/china.js","001d7dc578f49e2b624c9cfc63c0d58b"],["/js/src/echarts.min.js","917b3ce5e8ad1742295f0320fb7617d3"],["/js/src/exturl.js","55d613b41aef025040d22ae9df0c9f05"],["/js/src/footprint.js","216cae889f99d377083dd33a4c761e73"],["/js/src/hook-duoshuo.js","7f6e10263607a748697738362783306e"],["/js/src/instantclick.min.js","057e1b7ea53a32ea74ea82a002783de5"],["/js/src/js.cookie.js","0f8afaacf260b2dd7037de22a2316bc4"],["/js/src/motion.js","d2fcea4f0941c37041f0ec927bcb2d6d"],["/js/src/post-details.js","38e2c372fa075909409f7723e36618ee"],["/js/src/schemes/pisces.js","002980fa1072eed96c9e82ed743d3b40"],["/js/src/scroll-cookie.js","28a30e3b99a8e23047cf4cd666c82917"],["/js/src/scrollspy.js","4a4811cf4a7a9d5340fa58b35d58c364"],["/js/src/utils.js","93e3dada540fa55cab9a3e80de4447cc"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","0292d1957293d630debb91d985a93f7b"],["/lib/Han/dist/han.js","98cf3a0b14ec31e552ed285400e5c2c4"],["/lib/Han/dist/han.min.css","2b5094a4f808e292e2f89fafbcd11c8d"],["/lib/Han/dist/han.min.js","20459b526fb8e1771f36c66e281405ff"],["/lib/algolia-instant-search/instantsearch.min.css","d6b85eb0759046354ff66c73cb3aab7c"],["/lib/algolia-instant-search/instantsearch.min.js","dc3536eb9de84a19ccdd3a70adbecd05"],["/lib/canvas-nest/canvas-nest.min.js","43d4b3fde00c20d59abbac23e1ab138d"],["/lib/canvas-ribbon/canvas-ribbon.js","0adb4e272ec8552884c9549628815e7b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1d0a515c107d6131318a0203005d774f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","5aea1595ca5d6a1ca9f3887c2c3468f6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4b4276f31a8b67b129fdc6a6034f0de5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","285793a0a5c9652ecdfb4b63a81231b7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9d656489ac758820c864cd27479588b5"],["/lib/fancybox/source/jquery.fancybox.css","d60eafc957cb78c43ae26bea42f5d764"],["/lib/fancybox/source/jquery.fancybox.js","becebda390fffc1d5e7f4f1897e49824"],["/lib/fancybox/source/jquery.fancybox.pack.js","4527a4ea6f7da2c60bf171da211a541b"],["/lib/fastclick/README.html","bcc2bb334c23112085c0ec28d07795a6"],["/lib/fastclick/lib/fastclick.js","45d6940cfe10da8c9550dcf2666484f3"],["/lib/fastclick/lib/fastclick.min.js","4ed0d7b7d872c6f3364d4f420c5cbb62"],["/lib/font-awesome/css/font-awesome.css","3014f9f906ddfb68c7e84e91faa834df"],["/lib/font-awesome/css/font-awesome.min.css","3014f9f906ddfb68c7e84e91faa834df"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","61b307f40de3d36a4238dc300f4d1266"],["/lib/jquery_lazyload/CONTRIBUTING.html","fe9c946c01c52f2e6690787fb85e1bcf"],["/lib/jquery_lazyload/README.html","24345d0086fc83d3010daaf5468c2ca6"],["/lib/jquery_lazyload/jquery.lazyload.js","94120af3ef6dc1a79c5098553a13d8a3"],["/lib/jquery_lazyload/jquery.scrollstop.js","94cf4e3604e505199348789b1eef5766"],["/lib/needsharebutton/font-embedded.css","b7143adcb59186bbe6c2c3e7a3e22f25"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","0880454c524c8aa69bc0f1564a6e6abe"],["/lib/pace/pace-theme-barber-shop.min.css","a30fbed72242cc6424373f2b6327299f"],["/lib/pace/pace-theme-big-counter.min.css","4a97e78e468c544c7c3ce1f9e7fed257"],["/lib/pace/pace-theme-bounce.min.css","b68b01849de42c3f12d26473b7d94243"],["/lib/pace/pace-theme-center-atom.min.css","cdfda23b3f568f6043c4a549fe0f4ffc"],["/lib/pace/pace-theme-center-circle.min.css","e0e797ed0a5c6afdcaf9c36c2a79a11b"],["/lib/pace/pace-theme-center-radar.min.css","584ca797f3bb6fdefdacd7287e594959"],["/lib/pace/pace-theme-center-simple.min.css","eb316895b0c88b24fa290ff6e512062f"],["/lib/pace/pace-theme-corner-indicator.min.css","8a8935c0755201b8c4884a5053cc3e04"],["/lib/pace/pace-theme-fill-left.min.css","b936c721cfff0a3450342dba45893672"],["/lib/pace/pace-theme-flash.min.css","d44e3288b0b21569a28c428a54ce7da4"],["/lib/pace/pace-theme-loading-bar.min.css","e26e60ad722ed561f927f88c5f0e3bfe"],["/lib/pace/pace-theme-mac-osx.min.css","e78a99fe277d914b72d99c46354f5091"],["/lib/pace/pace-theme-minimal.min.css","3c6d27506e33ca3b9dd3ddcf053cc0c8"],["/lib/pace/pace.min.js","4cf1da7ace7a6e18ad7907a368d38221"],["/lib/three/canvas_lines.min.js","4b34b2ab5f796e8c0406d6326235bab4"],["/lib/three/canvas_sphere.min.js","55229f8e8aa6b9dc36a1905f1a05479e"],["/lib/three/three-waves.min.js","f7a0c37407ed1985e6a7eacf9ed8f00f"],["/lib/three/three.min.js","917139f563be96f2d1fa6036a55992f1"],["/lib/ua-parser-js/dist/ua-parser.min.js","eeded6bd74b5a246ff85f9b5c0fa6866"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5428514180392fff721f64f95631591a"],["/lib/velocity/velocity.js","2f5778ef343fbb00fc870db5ad681cac"],["/lib/velocity/velocity.min.js","f1f5feff8bed90bc33ce083d6ad63826"],["/lib/velocity/velocity.ui.js","ed829ca7e96396602cda17df50cccdd6"],["/lib/velocity/velocity.ui.min.js","11047359448d3ded558447ef184d73b0"],["/links/index.html","c7267298a1203ad864bf204a6e0631f8"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","ec5c7a7fac436d0b618ab6812b0e7923"],["/page/3/index.html","5407d1ba513b0e08e0169f7ad04efe80"],["/page/4/index.html","0326aafa2db0366075a4f984a64e75ba"],["/photos/index.html","5472a5a859f5f81b034c8ee217f567b5"],["/posts/191ddb73/index.html","1ffd892c49c2edad74d8adfc340a745e"],["/posts/1a195976/index.html","4145960768a671790c1f6dda4620476e"],["/posts/2292f1af/index.html","46d823e9571833bf9a7ff9a862d7b5cf"],["/posts/2fc77d95/index.html","d0b7e85795890f3ed6509680d2668fc4"],["/posts/2feacaf4/index.html","4822bbd93bb593fd56d00a5528d72d6c"],["/posts/37f2c331/index.html","b9be754e7367e1b7de1dba78b6ec29db"],["/posts/385f0de9/index.html","8338d73dbdaa7c6bbd052b7c5ca73d44"],["/posts/3caecfa9/index.html","b0801e1e73ba97c3cf7a42b6db863a2f"],["/posts/44414303/index.html","d0943ba837ebb54bbcd40cd9a35e8c13"],["/posts/456610d0/index.html","25d2b818359ecc89645526fdaf5d7260"],["/posts/45e51894/index.html","29ced3b0fdb902e66099ece5c215c285"],["/posts/4f1131af/index.html","bdac1c51eca76d36460af00a8bdf0628"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","5728e1b89340ccde3bfffe0b36e87262"],["/posts/517ebb95/index.html","e4c93701a68c7aa8dcbe0b5d704de0c4"],["/posts/53bf1d9d/index.html","e21e8dd7db6003c823eb3a3e596cd27a"],["/posts/554c2ba0/index.html","adf1676f83d09b1ceeaedf54fcecd41d"],["/posts/63556f52/index.html","e4c28b1096cc95ec0ae5844120159922"],["/posts/6d49ceec/index.html","d755af7f3fb508fb3625e9ff074be06c"],["/posts/6de7d9db/index.html","da0812fd83505414dea8045f664f8a48"],["/posts/6fda249f/index.html","1d01b8379dc14854f56fc8bcd8625350"],["/posts/84b87417/index.html","82cf2a951c8997193440f0d023ab8367"],["/posts/8a60fcb8/index.html","a6e6573b39bb853346aabb81c68d6a91"],["/posts/92912ddc/index.html","5355e1ebca81403a1e8bc446911de088"],["/posts/97e5bc9c/index.html","7a45ea68c79c3f89ec6b52837ede8562"],["/posts/9a5c7b64/index.html","15c83e9cf019b4aa305e52bd167247ae"],["/posts/ac7d0231/index.html","15daa86c103792462d9d315cda0fd095"],["/posts/c311b112/index.html","f81597036b3ea8bc1945a8642071507b"],["/posts/c620d4c2/index.html","b60d2ad78f6602bbf5dde37cbacdf7d8"],["/posts/cfc54393/index.html","6bcee9c5884a54d948f4be4777cfab46"],["/posts/dc5155ff/index.html","ea62e2635d44a9de225105c361bb107c"],["/posts/e1bd836e/index.html","ec9a0c004faee528d79f0ae70d71e68e"],["/posts/e31c0293/index.html","d621e44ae9f3bec610763ef799d3a81f"],["/posts/f5fc4461/index.html","1d7b81f0f8d032116d1b51b4bc4bc27c"],["/posts/f8073739/index.html","8fc27d41a3ab9ff781cebd21bc2d4403"],["/posts/f97ef43b/index.html","106bfeea8a858cb33473c65c80091273"],["/posts/fa84d5fc/index.html","fe93003167ac07d638c527d7f9429cd0"],["/posts/fb1ab942/index.html","fbe430f2b054a534ed6c6558dcf76b22"],["/sw-register.js","394dd224c3d784b71696764301f40ba2"],["/tags/J-pop/index.html","56ecb1076be75b7b5fd1055888d8b340"],["/tags/index.html","d046409dbe3442e5ee22de3c36141e0c"],["/tags/つぶやき/index.html","dda03051fc73514923b345956940d82c"],["/tags/アニメ/index.html","1c9ea58c213b29429492d47926c50af1"],["/tags/インターネット/index.html","cd7351ed05a14be85d8adf732346e7b8"],["/tags/チョコレート/index.html","ecfe80c6dd2dcdc3965bf3ae984e1e1b"],["/tags/中国に関する新聞記事/index.html","6f8a71e4b6b8f31bff45556e6c12d79f"],["/tags/乳製品/index.html","f22db12349ff996b1344ea6ea3320a70"],["/tags/労働者保護法律/index.html","dd2f6a84ee4b156dfc55fa4ad1bf3596"],["/tags/心理学に関する記事/index.html","7171f2c1512b22db876bc1f2cae38150"],["/tags/日常生活/index.html","70edcd9cef31a2fbedc0bba9f08bcbf9"],["/tags/日本のIT教育/index.html","fcc7f9340c730cee721099a5004984b1"],["/tags/日本のIT現場/index.html","998522e5fa40f68057a6176ad3cd9398"],["/tags/日本のビジネスマーナ/index.html","ca1302a68172be59e88a1cd8f4f78972"],["/tags/日本の国内の人権状況/index.html","e6cabeabeda509bbed27f9fe16d88649"],["/tags/日本の経済新聞記事/index.html","6fded46544888af65003789638a635b1"],["/tags/日本地理/index.html","cb3ce74de39bf120200d5850d600ee4e"],["/tags/环境/index.html","b4699bf6f87423e1e32e95cfe7ecfa67"],["/tags/過酷な現場/index.html","7815c607ff04b9c4fedc6c1ba5993df2"],["/tags/金融/index.html","bb07f0c48d0b04cc150a58991a010def"],["/tags/食べ物文化/index.html","6780306be1aa777270242282d1dd6a1f"],["/tags/食品工業に関する記事/index.html","ec6607fd72f7f64860dacbb3315a130e"]];
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
