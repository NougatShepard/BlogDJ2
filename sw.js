/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","6f5687ae7fad4325e04e793cff56cd23"],["/about/index.html","c6c1d7157935d69f9093247d80017908"],["/archives/2019/04/index.html","1d6f946d259f6e61b25fec4e2b27a98d"],["/archives/2019/05/index.html","a5aafd50e18ba1f9c422f90f48b11369"],["/archives/2019/05/page/2/index.html","e704099de02abfe8c717f20c21e6780f"],["/archives/2019/05/page/3/index.html","c7a2cad6e6af0a302d2121b684506869"],["/archives/2019/06/index.html","0c4fd1e8bbe692106421b2bac55c0cbb"],["/archives/2019/07/index.html","6e199a646c9d32b4debcf6517752cdfb"],["/archives/2019/index.html","742de1bb867aa97e6d8b708c90495fe0"],["/archives/2019/page/2/index.html","2b3780a1cbd392617d1a94161528d8a3"],["/archives/2019/page/3/index.html","8bb97405543bb8f81e8524c0c5e2b780"],["/archives/2019/page/4/index.html","d1f5c580abf6c5bd8b3ed3ab05c8f17b"],["/archives/2019/page/5/index.html","c45f40006bac7137f1395c1bc5b7ac67"],["/archives/index.html","1248102200e14b81830eb3306177ddb8"],["/archives/page/2/index.html","1f5dbedade7cb68270e0f9ca08bec553"],["/archives/page/3/index.html","ad32af2b0d68c0ebc6790cbedf0ccd4d"],["/archives/page/4/index.html","7fb37ef0b3e1c0cdb77fcde3a6baadc4"],["/archives/page/5/index.html","fe2cd8e883775824d3d50bbd8b533c03"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","dc01cce5b614b17ae77123b1c2b6d1ed"],["/categories/index.html","4ed6c0d4249f043c64bd8c3c71795221"],["/categories/ことば/index.html","7de6ebbb5a80b84f63b8828dd3aeb568"],["/categories/つぶやき/index.html","27e05e253690ff2561a11a12befa3874"],["/categories/アニメ/index.html","2c9e95278e4890f5b9cfabbe49781c1c"],["/categories/インターネット/index.html","6e10b118f8600d15d60fd312fda82685"],["/categories/中国に関する新聞記事/index.html","d739e7c9b4fd7d283e736effcf65ad0b"],["/categories/労働者保護法律/index.html","4c768a25b4aac78cd16ac558f526fbc9"],["/categories/心理学に関する記事/index.html","d8155a0b7048bcf8a7ecab5c67ad7f74"],["/categories/日常生活/index.html","39a8b47cd7c4e8a475fc80ccc09e7d6f"],["/categories/日本のIT教育/index.html","c6d17ab18e329c25f3de64fc0354c5d6"],["/categories/日本のIT現場/index.html","e38e1e5ccce97a087b6827dfb6d44e87"],["/categories/日本のビジネスマーナ/index.html","6cbf0f1024c8dd5d9a087543846fdde0"],["/categories/日本の国内の人権状況/index.html","c589e0786cfd84709192616b5d30b0e7"],["/categories/日本の経済新聞記事/index.html","e8bcc1ce5f273aa313f112246d9b1b7b"],["/categories/日本地理/index.html","cca39dc523edcfafe721347fa3c38cae"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","61246d3ad680bbf3ffa97736aaaec07e"],["/categories/過酷な現場/index.html","4ba0b443dcc8fc4b588e187fad9b99dc"],["/categories/金融/index.html","505d73c8095f45608c72f8450d7c5b41"],["/categories/食べ物文化/index.html","d0793fb95337ea562c5c7accd46d96fb"],["/categories/食品工業に関する記事/index.html","b77d29394c4b7957dd7eb2cfbe2fd97c"],["/css/main.css","2f90fa0545e73ef4433731e11006c7fa"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8dd72f58a56a2896958cc9dd8482f7d7"],["/js/src/affix.js","acc9edcb775afdbb02909ece2c87ef0c"],["/js/src/algolia-search.js","3c486f5747ed196ce84da65c187bf1d0"],["/js/src/bootstrap.js","4f72382a52a23a3c3a0799b67c8bd94f"],["/js/src/china.js","d3e270a749bf9cef235dcb0bb5c9ec94"],["/js/src/echarts.min.js","d4b367c2dc1058a158c3d658a77619c2"],["/js/src/exturl.js","8844e3a784282e377c61c69da4d596db"],["/js/src/footprint.js","7b6a7f9c94fb1ae59f02ce6b1c5a0770"],["/js/src/hook-duoshuo.js","4aaed50a902f69a877daf669d4b84a55"],["/js/src/instantclick.min.js","76d0d8a438c61bc78f479e7bf6ff2483"],["/js/src/js.cookie.js","e3ef80a77725bde5c1b6110fc7738f8f"],["/js/src/motion.js","d9a40817e84f15734bfe4acbd032b4d4"],["/js/src/post-details.js","9db7e0aed386a6a2285cdbaee34b69b4"],["/js/src/schemes/pisces.js","dbdc854c3e3be81ab8268b28cbdefbc4"],["/js/src/scroll-cookie.js","cdd46e348032d4778deec1552bf9c77b"],["/js/src/scrollspy.js","6d9418b05bc865dbcd42255d11c18267"],["/js/src/utils.js","d6e97af5034c119f8cc4787b22ffe753"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1354fb3ccc25c0e2de6ddb49aa231b9a"],["/lib/Han/dist/han.js","3c4269170fdc6e5d020a44d1d6fa7481"],["/lib/Han/dist/han.min.css","841fa652ba9976059588edda62deb873"],["/lib/Han/dist/han.min.js","63d9dd0823533782724e6992705d2e2c"],["/lib/algolia-instant-search/instantsearch.min.css","800e3672dc42085124426dafd61fae17"],["/lib/algolia-instant-search/instantsearch.min.js","c27e767c785118e145a1b10d167d229d"],["/lib/canvas-nest/canvas-nest.min.js","cc40578fef83b1a7dd8921b123d14443"],["/lib/canvas-ribbon/canvas-ribbon.js","942b00b857f969b244238f3bf9924ebb"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0cf6ee4f532b3136e0611f609ec0df83"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c25e0c11cec10ea288b0d466ea0184c8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7c0d2103a92609dc94136a8961c79f4b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c37479d806581961ff904534804c87f9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9923972bcea2906ca78b941a4f968f08"],["/lib/fancybox/source/jquery.fancybox.css","3b86828323efa784ca61d23d26e54f76"],["/lib/fancybox/source/jquery.fancybox.js","f2b68595eea94884c3c69fb7f2655973"],["/lib/fancybox/source/jquery.fancybox.pack.js","2318f442a929b1d05acf5ebab1c374de"],["/lib/fastclick/README.html","5f41486518c11091dfc64dbad27c0c37"],["/lib/fastclick/lib/fastclick.js","0419aff7f4c6fd1426d147b5b109d882"],["/lib/fastclick/lib/fastclick.min.js","f9f72acacfff3d86c25afc1f8a128e17"],["/lib/font-awesome/css/font-awesome.css","27616eba36ff77a29b758de5fafe6e7c"],["/lib/font-awesome/css/font-awesome.min.css","27616eba36ff77a29b758de5fafe6e7c"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","43789f612437efdaf266068fd2da53b2"],["/lib/jquery_lazyload/CONTRIBUTING.html","f80607e33964cc6a870e2e9aff97cf24"],["/lib/jquery_lazyload/README.html","30c93a3d7da3bb3b322b503f8f200e6f"],["/lib/jquery_lazyload/jquery.lazyload.js","b97488133e8259baed7610e525f84ae7"],["/lib/jquery_lazyload/jquery.scrollstop.js","d9b32c9308f46af3adda87785f1123d0"],["/lib/needsharebutton/font-embedded.css","5773a9ebda176148274893a07a40f56b"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","fe78fb93ac640f897e9dc03ccf4960d8"],["/lib/pace/pace-theme-barber-shop.min.css","fb430a9b2578650546b15d1875259ca9"],["/lib/pace/pace-theme-big-counter.min.css","afc201157eeeb42a7ce0d1054bae1310"],["/lib/pace/pace-theme-bounce.min.css","5261f7dad7ac3bf7b1ff940b2f0988f8"],["/lib/pace/pace-theme-center-atom.min.css","207a45f9bf2fe552133d2d0b59edb3cc"],["/lib/pace/pace-theme-center-circle.min.css","297bd937ae92ac84b29faf78a7c50688"],["/lib/pace/pace-theme-center-radar.min.css","a79c64a6c19fc52a9e2381709abec00e"],["/lib/pace/pace-theme-center-simple.min.css","298219a39119e648179fad454b28cc38"],["/lib/pace/pace-theme-corner-indicator.min.css","51f1b530eca915c0affdf412b7b0ccf6"],["/lib/pace/pace-theme-fill-left.min.css","c368af3912e1383282aeed428a950504"],["/lib/pace/pace-theme-flash.min.css","74c11df06ec4d88e4d922c399f0c8ad9"],["/lib/pace/pace-theme-loading-bar.min.css","04318fc26e8876bef88e40cd7783adfa"],["/lib/pace/pace-theme-mac-osx.min.css","499a7d4fe2e9e913cbc2f5cd064dfdca"],["/lib/pace/pace-theme-minimal.min.css","d30d0cbf8d50c84959e8e14938794e1d"],["/lib/pace/pace.min.js","f4311bb0cd6d9d3e15ea408d4cc71524"],["/lib/three/canvas_lines.min.js","87745e141cb88b28f408e7fb92e28aba"],["/lib/three/canvas_sphere.min.js","36724dabdcd118480778b812b1eda307"],["/lib/three/three-waves.min.js","f367ad648af9d2118ab33bc31b977988"],["/lib/three/three.min.js","8a7304e6dc2ece3a088a4c5aab672a24"],["/lib/ua-parser-js/dist/ua-parser.min.js","7ca89110da0509819e1e2c446bbaf0eb"],["/lib/ua-parser-js/dist/ua-parser.pack.js","840af7756f38504f8d4cc5664188b94a"],["/lib/velocity/velocity.js","14773f061e703b0424d03ce2e47fa4fe"],["/lib/velocity/velocity.min.js","95e4c233a4b901abed1a751bb24e8f7e"],["/lib/velocity/velocity.ui.js","ab9aabcb693c6e2e046ecba07432c539"],["/lib/velocity/velocity.ui.min.js","3d01c27c462737708d1f8965fa113625"],["/links/index.html","daf000cb6b16e1695aaab0a25d2f3f99"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","54892204766e450d4d203079211a8ad2"],["/page/3/index.html","7e0823e44bd9c058f8bce53da8bc17bc"],["/page/4/index.html","fb91ff90f21472dcb7ca414a4d706461"],["/page/5/index.html","cf6d7c19259ea06b478b9f38d348b945"],["/photos/index.html","f002c55b3a0d3465661d3ab4b0c7cf95"],["/posts/191ddb73/index.html","c58e33a6c5b5ef610241cac289af759f"],["/posts/1a195976/index.html","db761051e49a2c2721fe970acd85a3a4"],["/posts/2292f1af/index.html","673a77c3acac98eba5145f0b78a947fb"],["/posts/29d57d6/index.html","cd8d96b4a0e11db3f71c954412710338"],["/posts/2fc77d95/index.html","341ad9dce87519cdd203b94b3dfad31d"],["/posts/2feacaf4/index.html","957cfad924089c8b640528fa8eb0c9d6"],["/posts/37f2c331/index.html","a22b6d9300fb3a99412a3bfffed31426"],["/posts/385f0de9/index.html","e7e6be700f65409ab85cd2b52d469d1d"],["/posts/3caecfa9/index.html","45c5a40481004d355e9c7da592fed747"],["/posts/44414303/index.html","5dfeb850198e24a9c4cf2d3156cd152b"],["/posts/456610d0/index.html","a149becba9a8b14ce08e3c0bd32e124b"],["/posts/45e51894/index.html","53b0a311e5b94f1222e7e8d70f57235d"],["/posts/4f1131af/index.html","ffd76e3afb0556570bd44de9e10ef77b"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","c590a378bce51071bb94994c6af46363"],["/posts/517ebb95/index.html","56d14800ae542430d28132fb232d7198"],["/posts/53bf1d9d/index.html","8b7048a09ca26fe6c112b904ce3172e9"],["/posts/554c2ba0/index.html","874665bfb7b06c06d6b3a48bda25caf0"],["/posts/63556f52/index.html","808d00cc4692df68a2fac44542a19b08"],["/posts/6d49ceec/index.html","4b4247a53a1a4e91507e8a6b6b5ec433"],["/posts/6de7d9db/index.html","406f1feaaaabe224d0e717ee464b68c4"],["/posts/6fda249f/index.html","06cef695571cadba20c19e015e8dfacc"],["/posts/759a6740/index.html","4ea0c7bc1f7e956b29b7955a3d2e4da8"],["/posts/84b87417/index.html","6d99fec092fd0e4ef2fadda091b9f993"],["/posts/8a60fcb8/index.html","01b41d96327828ce1b9025e2324989bb"],["/posts/8b4c253/index.html","19ab22335d41351215fdda3e1338bc02"],["/posts/92912ddc/index.html","f1116dc34c64e23b682c916bf2d94fe6"],["/posts/97e5bc9c/index.html","7696b446be6fac49f52ac13661aa5dae"],["/posts/9a5c7b64/index.html","2505dc1ca3ad9296c1055ca33429130b"],["/posts/9cf9c275/index.html","5cb09c8d147f179ec2f6d0b275af824c"],["/posts/ac7d0231/index.html","ad5b4c77111d49affade5e0e06fc5c49"],["/posts/c311b112/index.html","84b0e19ecd6013bfed310e23f9b9c135"],["/posts/c620d4c2/index.html","14dae263fd0a3acd70742731fe933b69"],["/posts/cfc54393/index.html","be286379ef4e400602c159376676040d"],["/posts/dc5155ff/index.html","6e2bedb067fe990af919420741a10778"],["/posts/e1bd836e/index.html","a82da0379590fe00ed2bf903eb0e05cb"],["/posts/e31c0293/index.html","cf3b4b548a33bcd34e54a845bdae8ba1"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","cb78fd4b455b08996a4ef11628765656"],["/posts/f8073739/index.html","b271f11995652d335b9320e09872999b"],["/posts/f97ef43b/index.html","f57d04dd309e06a89d223ce7d6c09b1e"],["/posts/fa84d5fc/index.html","6e95e240e18380b878b5a6dc91521042"],["/posts/fb1ab942/index.html","073bc4436725c645cf142fc22426611c"],["/sw-register.js","529a639b89647feb4bdb164c82d51fb9"],["/tags/J-pop/index.html","46211701a1f64b3c3fa44747e5434de2"],["/tags/index.html","a47b8c5ebaf7913b1c62b10fb54395d4"],["/tags/ことば/index.html","bb6fb2c7d52ea4be0ecff650e4925cdf"],["/tags/つぶやき/index.html","434afa0a77baccca5cf70c71389bbc6d"],["/tags/アニメ/index.html","f24cedd8035a06d41bf6b54a89f4357d"],["/tags/インターネット/index.html","9d4298176e786a9e7775fbdff8ca92c8"],["/tags/チョコレート/index.html","ddf86263e5f021149a50aeb19b045a08"],["/tags/中国に関する新聞記事/index.html","d94430adede6a31b0e831682b19572c0"],["/tags/乳製品/index.html","e1761fc5d4759bd73175f1f79fb5a471"],["/tags/労働者保護法律/index.html","bea5ddd90219529de59c110ba3d95cfc"],["/tags/心理学に関する記事/index.html","6cfa44fe7e22bbc8319c05b8a9c9d9a1"],["/tags/日常生活/index.html","dd2eca49d82e540f7b47adb83ad7631e"],["/tags/日本のIT教育/index.html","09e35eb9946bc9bbe12f5a5c9a78e8bb"],["/tags/日本のIT現場/index.html","fb47e535959c8f5a45f93e1a364dfeae"],["/tags/日本のビジネスマーナ/index.html","2d500770b469e33d1e560e3a9097518d"],["/tags/日本の国内の人権状況/index.html","522bf5b18be4a4cc33461dde8339b748"],["/tags/日本の経済新聞記事/index.html","656e9ec29f655afce111a21de956034b"],["/tags/日本地理/index.html","5a0aed727b680b21ab6f51095a346c6c"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","627e2cc6d839c45b21f6e0d98912804b"],["/tags/過酷な現場/index.html","32a95be3a76b4fcc8056131fc6b92a35"],["/tags/金融/index.html","a8f1768e60e720fb2f873705eab258b3"],["/tags/食べ物文化/index.html","9cae04afb388d59389a5e4b24df7a4a1"],["/tags/食品工業に関する記事/index.html","27765287ff3e8559d7178008cb67bca0"]];
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
