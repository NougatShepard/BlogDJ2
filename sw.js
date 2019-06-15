/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","a399e0ef0c39ed326b0d39f1eed9f07a"],["/about/index.html","76771d86bdc70148b30762ecacca928f"],["/archives/2019/04/index.html","a3d8b97920716f89db5f329764e904e2"],["/archives/2019/05/index.html","9ce94ac0bbe528e27e63926fa7dc44ad"],["/archives/2019/05/page/2/index.html","b55f61b2a6720e53b4260fbc3469ab42"],["/archives/2019/05/page/3/index.html","87354675910cf1d123c7704d928f5f13"],["/archives/2019/06/index.html","bbd50fa00acecd8fe9f08f36ba8f082a"],["/archives/2019/index.html","4117e6c1e910bf8543d2c0a9f2aeb499"],["/archives/2019/page/2/index.html","65eddd6010075d1adfeb6ab13adb6ae4"],["/archives/2019/page/3/index.html","04ec4458b16ce355670f7055cc9aa5ba"],["/archives/2019/page/4/index.html","a48181a08fa775e7d560f9bd7beecfcf"],["/archives/index.html","0c56abd4a5263df178c10ed7e7873972"],["/archives/page/2/index.html","347fa757334a0d685f396dc6c40ac8fe"],["/archives/page/3/index.html","2fee119ba3cfe304600cdea62a418165"],["/archives/page/4/index.html","2d771936dbdd84e3a369e68cf413a87a"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","0117736b5788aaf4d00fb2807bbb45c3"],["/categories/つぶやき/index.html","8bc39ba09dad7ea1d31297d00fcb2ac8"],["/categories/アニメ/index.html","60c9624f095c0718b7364cd09f23f992"],["/categories/インターネット/index.html","e937583bd085ceb64e2c967c83e6f639"],["/categories/中国に関する新聞記事/index.html","8d6027b698d02cf47b8a879d14732ef4"],["/categories/労働者保護法律/index.html","5e2b1947b4b24151105ed50b2377f78a"],["/categories/心理学に関する記事/index.html","03b7ce9d89fab9779fdc571352b843d0"],["/categories/日常生活/index.html","32fa9d3344a5a9d110d523038df09847"],["/categories/日本のIT教育/index.html","d74e1b1231e3a4800a9e7aaa1c93ae93"],["/categories/日本のIT現場/index.html","674a18ecf36a4a4c1ddab985b3bde41c"],["/categories/日本のビジネスマーナ/index.html","524c250bf387a6c3501ecdfe558ef0cd"],["/categories/日本の国内の人権状況/index.html","30809ea6788b867e1f922768877323af"],["/categories/日本の経済新聞記事/index.html","9d8fe705265ec25034222e0983dc3c22"],["/categories/日本地理/index.html","4b92e2f72f8e0fd6410d81edae60c74f"],["/categories/环境/index.html","6d6ed9cde3921f00eb302c21633d25e5"],["/categories/過酷な現場/index.html","5df85439506d6fa5121183b616aed889"],["/categories/金融/index.html","25ccd1a72a63af7a36677e39f9ecbb71"],["/categories/食べ物文化/index.html","c22fd92af2361742347230601f2a0f5d"],["/categories/食品工業に関する記事/index.html","33cfabba3ab52beffe0913b8158aca24"],["/css/main.css","8b259d996a51f01fb42dc215c67401a7"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b2bfbb946050e97c60ba52e072f99ef7"],["/js/src/affix.js","a429dbd0100bb3ce46684d46c0cc5dd0"],["/js/src/algolia-search.js","47305fdf462824735b9839c83322c2e0"],["/js/src/bootstrap.js","5779a811e99773969cd86be8762e77f1"],["/js/src/china.js","55c8d7af482222d59cd4ce2f5292207b"],["/js/src/echarts.min.js","0c744d8b5a771b08f2a896f15d34d9ef"],["/js/src/exturl.js","f7063b486af906208e97567442b32655"],["/js/src/footprint.js","817b69d0344ac80834085ba8649c1959"],["/js/src/hook-duoshuo.js","21e1792caad39be738f832dcb093ff27"],["/js/src/instantclick.min.js","b92f14e6111ab1e5c080f883c87a0524"],["/js/src/js.cookie.js","ea6a0b128dfdaa02def2f1c9fd14c7da"],["/js/src/motion.js","1d32c65ee0d876f8bcaae9d5f5f8262e"],["/js/src/post-details.js","f790db5183bdeda996ab27d6512439fd"],["/js/src/schemes/pisces.js","be88b78eca57b0c7d6c27a333cb8c3b4"],["/js/src/scroll-cookie.js","e748cf296d4a2ff8bb2790d1745fed5c"],["/js/src/scrollspy.js","960e6aeaff6043d52ea725c70e5976b8"],["/js/src/utils.js","f97373b9c0dbd9ac0ca283fe3cfaab57"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3d11997c8d18605c0935edd9438e2b4d"],["/lib/Han/dist/han.js","ff58f0c95e3e51558eb5e06ca538e4d0"],["/lib/Han/dist/han.min.css","a83e415169bebb7fae7a3bd6ccc1f580"],["/lib/Han/dist/han.min.js","315bbce241297cad20ecbdffca8a1368"],["/lib/algolia-instant-search/instantsearch.min.css","b3f9c020a34cc2f7cb3d20cdbd2e5b2b"],["/lib/algolia-instant-search/instantsearch.min.js","1a32af84eac4111266c6fbe305e6f0f7"],["/lib/canvas-nest/canvas-nest.min.js","60e2091133e2fc980118fc608d8e64c4"],["/lib/canvas-ribbon/canvas-ribbon.js","bd62b92323bf03868a620d9ba1177c6c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","145e65c1e8a3432da3e47632ddeca422"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b57e811e276564655b90ffddf8cbde33"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9a3bd8b42f55c3483427f5edcd56456a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","06f9b9b02e1f30985a7585eea63247da"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b786663c9255325333b546951f04a359"],["/lib/fancybox/source/jquery.fancybox.css","71dbdcb9fe59970792dad79e696d3231"],["/lib/fancybox/source/jquery.fancybox.js","12c08b3b930e8d3a8faa8fc7c69ec867"],["/lib/fancybox/source/jquery.fancybox.pack.js","0ea9847b7fb8a22af31dd0c39d74a50e"],["/lib/fastclick/README.html","5e5ea3a80e1334ed35be7b8b78bd6d7d"],["/lib/fastclick/lib/fastclick.js","af96d085d072815136c756231107eed0"],["/lib/fastclick/lib/fastclick.min.js","8d47018a91b812e7b11b43692f477b90"],["/lib/font-awesome/css/font-awesome.css","e58a71a28de407e75fbca24f281034f6"],["/lib/font-awesome/css/font-awesome.min.css","73d48ca97642774bafe9b71d457e721a"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","5831779d6f570db2fe749fa7d7788e71"],["/lib/jquery_lazyload/CONTRIBUTING.html","caa904b32925acd8f5b68c8ab54db96f"],["/lib/jquery_lazyload/README.html","e680380a0ce63d2af3b3219e7f8cf562"],["/lib/jquery_lazyload/jquery.lazyload.js","bfdd92cab71f89aa52c723419ceebc0e"],["/lib/jquery_lazyload/jquery.scrollstop.js","9a4bd9f4b8c825f9511f627397b625ea"],["/lib/needsharebutton/font-embedded.css","24a14c3bdd2fa10e49756286686c8033"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","fbd072449421f68f893ab252dc1ad617"],["/lib/pace/pace-theme-barber-shop.min.css","a3302d88182d5983c94d2e44c7b5dbc8"],["/lib/pace/pace-theme-big-counter.min.css","c9b82e1949df43eccdda0102c8c434c8"],["/lib/pace/pace-theme-bounce.min.css","ec7818dbf01075cc1c960846f49fab36"],["/lib/pace/pace-theme-center-atom.min.css","9cae17f51c236b21815c4bad40c3b10c"],["/lib/pace/pace-theme-center-circle.min.css","899ef6436d9235839b9435374d516bf2"],["/lib/pace/pace-theme-center-radar.min.css","93daef67ab5ec87a946154fe06716eea"],["/lib/pace/pace-theme-center-simple.min.css","b39bd9aec6656861a1cae9366d9bfcb9"],["/lib/pace/pace-theme-corner-indicator.min.css","7ea40be964a9c2ed55169724a5920567"],["/lib/pace/pace-theme-fill-left.min.css","202603cd328e2cb9d1623cecb905e4cd"],["/lib/pace/pace-theme-flash.min.css","c1951348ac5b208693d89195af654777"],["/lib/pace/pace-theme-loading-bar.min.css","408c85c60333cf24362ae8b888a916c9"],["/lib/pace/pace-theme-mac-osx.min.css","778e890dcf0400607c588612f4de22b5"],["/lib/pace/pace-theme-minimal.min.css","ecda7139bd14999e1eecf468aa6824c8"],["/lib/pace/pace.min.js","275c0b8eea5135f0699a6421800cfe52"],["/lib/three/canvas_lines.min.js","415a4916aa061a22c9fa0f9a6f614c5c"],["/lib/three/canvas_sphere.min.js","57259721ed944aa68b66e8814cd57ee6"],["/lib/three/three-waves.min.js","8fbb9d4cf0d86c0ba5226603f075240d"],["/lib/three/three.min.js","85a932e2cad32438ff1869cce6c04a8a"],["/lib/ua-parser-js/dist/ua-parser.min.js","16bba4f62e43d7c828c17b900d862bdb"],["/lib/ua-parser-js/dist/ua-parser.pack.js","23af34ac3b01073d746f97d8b2dc7d35"],["/lib/velocity/velocity.js","328084b6ebf9b4160e075abd37275608"],["/lib/velocity/velocity.min.js","4edc6520ba4caefaddd474e17f54a874"],["/lib/velocity/velocity.ui.js","f964d835234d169405c98ddac4d2275e"],["/lib/velocity/velocity.ui.min.js","14c2820f81558e76f43487156e87cc96"],["/links/index.html","146cff35bd78fe96206db8306b011566"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","bd8e28d53165388c57f65ab4d94e075a"],["/page/3/index.html","38380715b5aed7394cc4f14ebf9539d4"],["/page/4/index.html","7d97e31fb764c7956cdbb146a24ee73f"],["/photos/index.html","40d61077b6fde9b6cc687f2be6088e42"],["/posts/191ddb73/index.html","25c331f98f283e9c6553b0b989548926"],["/posts/1a195976/index.html","4137343d7773b385ace5d1d5c9bca262"],["/posts/2292f1af/index.html","71c4cdae3729bcee140c3dbca9d9d042"],["/posts/2fc77d95/index.html","cae866b882c84d328c3779cfc8849e25"],["/posts/2feacaf4/index.html","29fda97cef9096a4dfeb1589cf4e3bcb"],["/posts/37f2c331/index.html","12059de1547c31074101d8920e1472e7"],["/posts/385f0de9/index.html","bf3c2eb02c15860030fe0c182fbf0a94"],["/posts/3caecfa9/index.html","e2fd6c255e0e10303af6ae7ba408e506"],["/posts/44414303/index.html","08c51df7bf1d3619fc33b485647e5e37"],["/posts/456610d0/index.html","980ab047785c4d8126f19afc040acd7e"],["/posts/45e51894/index.html","4b07f9adc3de2d1072280922cbc4af34"],["/posts/4f1131af/index.html","099ca31dfffc3c5809ca5abee622533e"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","d2dd4a286130f7aa4fb666b1f43f0b0a"],["/posts/517ebb95/index.html","db25a96951ebeeacc3a48e2b22c464d0"],["/posts/53bf1d9d/index.html","5f10fc1018ab119b1a20f9ff334f1b1f"],["/posts/554c2ba0/index.html","72edf9199f807d7823e88b05609e513c"],["/posts/63556f52/index.html","8819bc3eb542c9174508c57c8293489d"],["/posts/6d49ceec/index.html","e18608b3bee35873558399562fb7d7ec"],["/posts/6de7d9db/index.html","dba08730b5062352856f42e6dfe25614"],["/posts/6fda249f/index.html","e3b93bcc32b52c0c662cd6bb0ea1f512"],["/posts/84b87417/index.html","e42efaa6e57bbe2b5a8a3e07b01ddf3e"],["/posts/92912ddc/index.html","20c80c4ef427a2355b5ac83d07f22c6e"],["/posts/97e5bc9c/index.html","0ef18aebe5a003e8e9340c1ba782b87f"],["/posts/9a5c7b64/index.html","4076e7633ac8bab5c8e14d50903d3fd7"],["/posts/c311b112/index.html","d9b57043bdfe6c371d2f2fe547d8d534"],["/posts/c620d4c2/index.html","b23b2ad1c79228101d4435cd71f05405"],["/posts/cfc54393/index.html","5bef89041bb3d52c6e216e717a44602a"],["/posts/dc5155ff/index.html","49f4313bde541233485f341997e5d90f"],["/posts/e1bd836e/index.html","bf231ad5b8d6d5d94c82df0457b8ef11"],["/posts/e31c0293/index.html","cf011d9773c5e7d6a05c728709a68a27"],["/posts/f5fc4461/index.html","bbabe1ed8e88cf665dd62a262e49d449"],["/posts/f8073739/index.html","d28779de28a88bc1965cd9e35cbab243"],["/posts/f97ef43b/index.html","9647eebe2b7b5d52dd9bd01939a761be"],["/posts/fa84d5fc/index.html","02884e55f1801b2651dbb31d7a302ad2"],["/sw-register.js","8d83349faf1aeb0254d2f4102b5d45ea"],["/tags/index.html","73acd0aa6d9da0f5c592c81707ae0012"],["/tags/つぶやき/index.html","f7f90a2f2e44940e267e3292d2248dc8"],["/tags/アニメ/index.html","fed0a28caa4c9b03bbaee22a6d424c8f"],["/tags/インターネット/index.html","b5bccb737fcc6d717b949475734881ec"],["/tags/チョコレート/index.html","908c79ca98fee14be00da71d5ffd4624"],["/tags/中国に関する新聞記事/index.html","e8001893c29cf0b32db6518a44ccff9a"],["/tags/乳製品/index.html","fabd02556da044ed209207166d7b81c3"],["/tags/労働者保護法律/index.html","602eab1e0180504f91a599c5023b096c"],["/tags/心理学に関する記事/index.html","930ea33ef4d8394295ceb3e9ad0cdafe"],["/tags/日常生活/index.html","8a452c3fe282a7d6db7e668882f08b28"],["/tags/日本のIT教育/index.html","eb6e03b1ef5bc3d706537e37c4f5f0ad"],["/tags/日本のIT現場/index.html","105e143a5adc65f62c1e319433ab0d1b"],["/tags/日本のビジネスマーナ/index.html","2d8628cda3de36e6585dc0b49bc88edb"],["/tags/日本の国内の人権状況/index.html","77389ed7cf78723ec3c8852898fa17f8"],["/tags/日本の経済新聞記事/index.html","63ef42fad75d08aa4f26925d248f1392"],["/tags/日本地理/index.html","48ddfb1050c05a1e7b1ec3ebfaacc573"],["/tags/环境/index.html","859104ca772e422b30f5593056d828e2"],["/tags/過酷な現場/index.html","746c9e87c5761a41e85997f2c75d06fc"],["/tags/金融/index.html","697555307a8cb0c3d81e43eaab8846bd"],["/tags/食べ物文化/index.html","b5b8bc8f100c722b571130b99ef3ba7a"],["/tags/食品工業に関する記事/index.html","9f77740c24a660a8be43a3951b6357e3"]];
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
