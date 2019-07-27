/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","85acae8776318f8cf2c885efaa25582b"],["/about/index.html","40ebf56d2216e8c1d009181762c1c995"],["/archives/2019/04/index.html","4ec52d7b34f908ec2bd6b276e86cb3ea"],["/archives/2019/05/index.html","19b5b27af9776e23d66126ffdeeabd83"],["/archives/2019/05/page/2/index.html","a3f4278093d1f50b6a30db6a0165ea71"],["/archives/2019/05/page/3/index.html","2d57b0622e69e7efc90083f94c9e07c7"],["/archives/2019/06/index.html","d97b1c8522767836d749b6afed2f7e9d"],["/archives/2019/07/index.html","8cc5b857423d3a1fdebd49dd81ef6efb"],["/archives/2019/index.html","51aa153004ce0ca7dc581aeceb4dd4d5"],["/archives/2019/page/2/index.html","0ced36a480fc204ebb9354e45adb32b5"],["/archives/2019/page/3/index.html","fc52acf02cf3e31b7eddf5c24827c63f"],["/archives/2019/page/4/index.html","734ebf1e0ded3bd7880bb1d8dce96c72"],["/archives/2019/page/5/index.html","199831882d32054bd6f29e7e34432c4a"],["/archives/index.html","ba87847f6774253824033f1185697198"],["/archives/page/2/index.html","70bdffbf329a63cc34d10a70ea23ae37"],["/archives/page/3/index.html","02688181f3a5abcf7e6da0e1c659f310"],["/archives/page/4/index.html","845eaad3490b83c69e5129fdd3d27f8d"],["/archives/page/5/index.html","5b1f23dfbe2d563a2551fb6e7e4d56b6"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","edaf8ccad477f1cba5928463c6b44522"],["/categories/index.html","03a0764388b6c444845ac67f358be0c9"],["/categories/ことば/index.html","034a018b6ae0d4bf33f19ee38d2a1879"],["/categories/つぶやき/index.html","b8830fbe104907707ea7595919c3fa0d"],["/categories/アニメ/index.html","566eee2aa48d6d27a5a579e8d02aeba7"],["/categories/インターネット/index.html","6d60bf60146d0b6760869b91624ad629"],["/categories/中国に関する新聞記事/index.html","7aa0cac1a345fabfec880181eebdf978"],["/categories/労働者保護法律/index.html","4ff6df2c0675af3521fb7ebe2b2b8184"],["/categories/心理学に関する記事/index.html","707daed70f57ca0fba12692e4d0b32aa"],["/categories/日常生活/index.html","6f04f04d8f2fab1f3ed316a7f262eff6"],["/categories/日本のIT教育/index.html","1e2867588b9391f885c7fe4e30de94c6"],["/categories/日本のIT現場/index.html","b0ae90fb75fc38c72223a4329513e7a0"],["/categories/日本のビジネスマーナ/index.html","b300dee14470ea89cf9d52ac8a5aa20f"],["/categories/日本の国内の人権状況/index.html","c01d3d4c8d2ed6293cd0f4cad0d14d89"],["/categories/日本の経済新聞記事/index.html","58656dc012f8b6e08558d0cbdb744a7f"],["/categories/日本地理/index.html","e81f1a8da21e98be8cd34593f4042066"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","b3f65bc10fd74b55476034e7179605b2"],["/categories/過酷な現場/index.html","aa258f969b92e803a04cbca914e04e1a"],["/categories/金融/index.html","c3d0dba7c6bc88470768ffcb7a4564f9"],["/categories/食べ物文化/index.html","73345704f2a1a71d614183cef428cdfb"],["/categories/食品工業に関する記事/index.html","7add91bc815128c0414e2014f824d0e1"],["/css/main.css","5af5d4530156e4126929a5c4200897b4"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e4da447bb99bf573f80baac367f421ab"],["/js/src/affix.js","11b203f7def3d844ee1b991c03975df7"],["/js/src/algolia-search.js","e941bf2ed735b2e72e82627897bbced4"],["/js/src/bootstrap.js","0c54f2ba123842329e0c5d5c2a38b4e3"],["/js/src/china.js","59b8e3de0b1b41f94b063e67a38da353"],["/js/src/echarts.min.js","bd91ed288fbef9ad1b1339da163fe9ee"],["/js/src/exturl.js","58e24260fc0f6ab8f888e4345e3379b4"],["/js/src/footprint.js","5815476a9a41592b5e226951836f5c29"],["/js/src/hook-duoshuo.js","b8d368ca27866c61d8ddedaa8b2b810f"],["/js/src/instantclick.min.js","5c7fe9869bd455c2adc9620c6dff4a26"],["/js/src/js.cookie.js","0983a2833165cfeb24c7b997796e8a5f"],["/js/src/motion.js","cea4986928ec6b3c2716bbe4db850991"],["/js/src/post-details.js","09dfda97a73a45bd9b45f111095e3cac"],["/js/src/schemes/pisces.js","7ada5bbe870cb050b348502f552f6d1e"],["/js/src/scroll-cookie.js","709766c3631a32fa3ca793793eb75592"],["/js/src/scrollspy.js","cda163f3873e8a4d8ef0c21cc496e922"],["/js/src/utils.js","cf0eee54252d0de82d86d14e0abfa448"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7bfe38f8e6b921972306a82bc5537e70"],["/lib/Han/dist/han.js","9e13383816c775ef8859d02671f484e9"],["/lib/Han/dist/han.min.css","7dd9b30706f7f84f6080838b8afffc9c"],["/lib/Han/dist/han.min.js","c2f51e3a5e4efcfb004a82054d0f5dd3"],["/lib/algolia-instant-search/instantsearch.min.css","a3190e12c32511a81da16e5198a1c7c5"],["/lib/algolia-instant-search/instantsearch.min.js","2426a819eda1767767c9b4ed5205db1e"],["/lib/canvas-nest/canvas-nest.min.js","a44d00063e8b2f3b2200706dd93e2df8"],["/lib/canvas-ribbon/canvas-ribbon.js","d7fda98fb9e4f8a270428a9567aa5ef5"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","65aea6dff1a2d53dbe8b660e24312bc9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","133fd8ae561bf9556772e722c8c76175"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f7d7ad6f7d11e3f5ae59cdd038037c3b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","37bbac8ebb5f5e4f971ef992967e3059"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","30fb18a3ed9d0910adf65803b995631b"],["/lib/fancybox/source/jquery.fancybox.css","1276ca8c38e8882763ce5ed722484c90"],["/lib/fancybox/source/jquery.fancybox.js","913405148ba3d518926e42ae04072b53"],["/lib/fancybox/source/jquery.fancybox.pack.js","5e8fdf4f35c9e51e9696b4813ce81287"],["/lib/fastclick/README.html","3d5986656ff526b4d42714b9ceeb2d6b"],["/lib/fastclick/lib/fastclick.js","883e677191245f29437496e3b7fb96ec"],["/lib/fastclick/lib/fastclick.min.js","d6b77a53eb39459440ea261a34720e12"],["/lib/font-awesome/css/font-awesome.css","1ace3bc6755556cb36452816c196f0ad"],["/lib/font-awesome/css/font-awesome.min.css","f5d8a32159b977efefa0b826083f0976"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","c1b76bcab961bc66092473ad678aa29f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e99c06093abd99dde11c40c4c581b5d4"],["/lib/jquery_lazyload/README.html","3418bb65af0bbcb7ff90a383193fa831"],["/lib/jquery_lazyload/jquery.lazyload.js","b3a79b03a479bffa95756b7597b63051"],["/lib/jquery_lazyload/jquery.scrollstop.js","0e7fa7d1ef8781d946660b104e75ae6e"],["/lib/needsharebutton/font-embedded.css","0b95119aed6ff213aea9dcb201c57017"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","c96117b79add25ba3f34d5f82bb77c5a"],["/lib/pace/pace-theme-barber-shop.min.css","0e9017b3d40884a008baa40374ffd90e"],["/lib/pace/pace-theme-big-counter.min.css","6bea6207bdde9263ba52b21f23c4738a"],["/lib/pace/pace-theme-bounce.min.css","cc0888de00fc40c03f1bcc9f187bc4e2"],["/lib/pace/pace-theme-center-atom.min.css","25ef55c7ba030bcb172a865c0eac65c7"],["/lib/pace/pace-theme-center-circle.min.css","b4b72c9575681c3265ac23e5ae1d5497"],["/lib/pace/pace-theme-center-radar.min.css","37dd2d9f097403543c76a14527e45791"],["/lib/pace/pace-theme-center-simple.min.css","508de083515c93a360e7d3ff26364d8c"],["/lib/pace/pace-theme-corner-indicator.min.css","e34641e33f4fbd4813e548c185b157e7"],["/lib/pace/pace-theme-fill-left.min.css","3d17a0617ed3a003e1ad1ec2d023e7d0"],["/lib/pace/pace-theme-flash.min.css","e05c0de3aad7c4f53f936a892c6503fc"],["/lib/pace/pace-theme-loading-bar.min.css","86fb67deb7bd84947b5f64bb83def2fe"],["/lib/pace/pace-theme-mac-osx.min.css","cbf8b0eea0a1475e652625756428c253"],["/lib/pace/pace-theme-minimal.min.css","c1dd159929b8628bcdf084c123cbe4ef"],["/lib/pace/pace.min.js","a7654f3f3a9de6dbd79ade79da2f24f2"],["/lib/three/canvas_lines.min.js","095dca99b0cfb54ad6151e6c5606cf05"],["/lib/three/canvas_sphere.min.js","99bdc51fdef92c1fae996aaf4002cc88"],["/lib/three/three-waves.min.js","d8396ad64730c3c08df808fc05d79b8b"],["/lib/three/three.min.js","2a352bcdb86e4a199c0ff54065225211"],["/lib/ua-parser-js/dist/ua-parser.min.js","0a16d602cd1aed5662947e43bd25681b"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a8776783c33e38bb447574581be314bb"],["/lib/velocity/velocity.js","73c15ea95616931efc71f4a8b363a1b8"],["/lib/velocity/velocity.min.js","0a15b709d84ad324cb7ff2941a03d55a"],["/lib/velocity/velocity.ui.js","9f3a6b86b1c459d24f522621d92d7a88"],["/lib/velocity/velocity.ui.min.js","29bb3a59930022cdb4a6bc786d6d6609"],["/links/index.html","fe417bdb2e94ebaf003dc2db26ca2b06"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","9bc8af694d874aa12f16a5bc41c9c903"],["/page/3/index.html","63d0be1874b0b431a6077282e41316cc"],["/page/4/index.html","ff9ae89d2d5d4ddd0cc08dda86d23b42"],["/page/5/index.html","2fae8ba4bdc0ea6021229a5aac31616d"],["/photos/index.html","8b44ea400b0c4ab0d64eb133351cddba"],["/posts/191ddb73/index.html","e9702d0cbb601f29829c80bb4bcfbc6a"],["/posts/1a195976/index.html","40b0e6246aa387e94a4dbedffb57829e"],["/posts/2292f1af/index.html","7498e402840bf3f284f2b9215efc6d76"],["/posts/29d57d6/index.html","bb17ab9275c1a55086b5f638af525dc5"],["/posts/2fc77d95/index.html","6de7d5269c993890fbfe6b17067fef3a"],["/posts/2feacaf4/index.html","48caf71e6c55be174f0c28dd16322434"],["/posts/37f2c331/index.html","f3bd8b2a6ab6145c603844e69d0bfdf8"],["/posts/385f0de9/index.html","da9affd767f880a2e62c3eaf2833a00f"],["/posts/3caecfa9/index.html","79cfbb77e995cb2e2c3b189ae10bbf32"],["/posts/44414303/index.html","c9cea87168905648840e2ddf19f9d1ff"],["/posts/456610d0/index.html","9eca11f5ddf133e538e078947d0756f0"],["/posts/45e51894/index.html","f403335b0d561264df3bac08d7d26126"],["/posts/4f1131af/index.html","5485358e2b96f0048800c20ebaaded78"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","c7830e54d088b2f1eda981c962d2586b"],["/posts/517ebb95/index.html","ce29d3b208416e0e2b6437a229848f4a"],["/posts/53bf1d9d/index.html","89b429f929106d89cbca37e0a71d8c6c"],["/posts/554c2ba0/index.html","a25b08f9a8d7a277812d14daacce7c40"],["/posts/5f093cf/index.html","0a3a2cd11b6a53edb592de45f2df2fcb"],["/posts/63556f52/index.html","1398f7de13187c25360ac6a705308de4"],["/posts/6d49ceec/index.html","19ba66426c925cd37e2d9a6b5de0c3a3"],["/posts/6de7d9db/index.html","15d66e222b1c2bfce6819afebc66b410"],["/posts/6fda249f/index.html","ee1f694d0a64130f0a874f9c0f6fa955"],["/posts/72f7a359/index.html","82b35b2326c15c50767043e750c6dbaa"],["/posts/759a6740/index.html","25aab496449b0d426198640f9b97f937"],["/posts/84b87417/index.html","5be7e14d406cf486fbe092e688f37052"],["/posts/8a60fcb8/index.html","9ee16dedb8eb0b5e631580a6f93d19d1"],["/posts/8b4c253/index.html","b74de5514772bd2dd76b2280386456cf"],["/posts/92912ddc/index.html","de311686be382b94c4d08e673b8f2f43"],["/posts/97e5bc9c/index.html","aadc0c8a9c287593ee8877b8fbdfc623"],["/posts/9a5c7b64/index.html","4c5ace10b65db9f17594a19ef4d469e2"],["/posts/9cf9c275/index.html","120d38e8d10e552fe6e27ae4c8dc24e0"],["/posts/ac7d0231/index.html","05b8d45614655e7409367bee205f639e"],["/posts/c311b112/index.html","15163d0a1986f73e2fe7f15c9239e440"],["/posts/c620d4c2/index.html","4bf761decc1211f2886eef56914105ba"],["/posts/cfc54393/index.html","ea5d432e4ca6f53becf111dc63f766eb"],["/posts/dc5155ff/index.html","12d0be05f9a762275332300d047a6a96"],["/posts/e1bd836e/index.html","dd3e7f0e028cc423de5ce553c54df583"],["/posts/e31c0293/index.html","a1f8c1174f0beafe9e4cd38b9b796b5d"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","e938a92b295dcd99da87460d68dbd8d7"],["/posts/f8073739/index.html","3153ba4023049c6ba941d7da21def20e"],["/posts/f97ef43b/index.html","8647cbcbc0a0d5aac48eef52a32fcde1"],["/posts/fa84d5fc/index.html","1bb5cfdc2f5cfa875bdea95910860ab0"],["/posts/fb1ab942/index.html","5cc3d76b0b9deff7e12b87e00f5a1ff7"],["/sw-register.js","5d854dcb6e58fd4bb236ab36522796b0"],["/tags/J-pop/index.html","3c66783a6d4c983a8de839ea19b0eb6c"],["/tags/index.html","4c168029bc4459c520080e27c3050646"],["/tags/ことば/index.html","ba4a2ec028233074672a8ad1d032932a"],["/tags/つぶやき/index.html","48ec1d28e1cc9ad2b0a95ed3da0a596c"],["/tags/アニメ/index.html","29383cc09ffbe55ca1bf5b68b1db51e8"],["/tags/インターネット/index.html","99e768a6f08a06ac2ab69bbf69ffe2e3"],["/tags/チョコレート/index.html","8f1ec17eb261ceaa14461e897de3d5be"],["/tags/中国に関する新聞記事/index.html","0b2fbb9e8537f08c99a8cfeaee7675df"],["/tags/乳製品/index.html","b8c8ff18e7529ca12e4adf0f63d71d1e"],["/tags/労働者保護法律/index.html","d345172f8052885083a0c701a62e1922"],["/tags/心理学に関する記事/index.html","4b687da258abe4a3d5d95bfd3bd85f3e"],["/tags/日常生活/index.html","349514ae665a133b0059d78d23642eee"],["/tags/日本のIT教育/index.html","d6986b30ee644d8fd4f739d580f6970a"],["/tags/日本のIT現場/index.html","5ca9cc41e61ca43844a56b5d0f9b3799"],["/tags/日本のビジネスマーナ/index.html","ba36b66c1ff915b7a66ecf7abb8f053a"],["/tags/日本の国内の人権状況/index.html","ef6caf2dbf25533817e977ffb4d5cc36"],["/tags/日本の経済新聞記事/index.html","dcefacde1064c623b7c3aad5593805f3"],["/tags/日本地理/index.html","a766a02540ce868bd8038ef2b29b29c9"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","516f7f0da9c362be94dcb57af2488386"],["/tags/過酷な現場/index.html","79c3fc8bc6295d14aae298df6304eb6e"],["/tags/金融/index.html","d7c5617f2474e91c82c39cb4706858fc"],["/tags/食べ物文化/index.html","2355b5019224818e5b52cc5e77f25625"],["/tags/食品工業に関する記事/index.html","4febdce1dd71bcf0a2b80c8cb7403118"]];
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
