/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","e8638490e20bad8f73fcd0cc7cff2510"],["/about/index.html","29036f4f5162e239f192096329f3ee1a"],["/archives/2019/04/index.html","3a6a5e0a00fbb09ca1799c7be2606210"],["/archives/2019/05/index.html","6cd0a9b3c2b374445846eb97238e7792"],["/archives/2019/05/page/2/index.html","52ea35d23847346af6f7f6822684810c"],["/archives/2019/05/page/3/index.html","bfdaad5abae9c6b5d916d2f7fe7440da"],["/archives/2019/06/index.html","7f94d1e46629534397789826650e65c2"],["/archives/2019/index.html","5987e6a28ab7f76eb9b882ab1e62a795"],["/archives/2019/page/2/index.html","bceb8e8ba6ea43200f8e60cfe608fe84"],["/archives/2019/page/3/index.html","cc89fd22d70da3e13b1ccb6931837a58"],["/archives/2019/page/4/index.html","25bd793402ad584d083274ea046e2669"],["/archives/index.html","c9ffe316e3e2fe750456cc8ddba14ee6"],["/archives/page/2/index.html","569fa39525a6f1306efe2016030591a8"],["/archives/page/3/index.html","6c1c41d2d21044151d5bb12b7ead8a57"],["/archives/page/4/index.html","b9a968a1cecfaa015c302831b4d7f023"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","5eb2e80e98e653ac9b50efce8db01d80"],["/categories/つぶやき/index.html","2cf978716ed3a38ec1214246fd406639"],["/categories/アニメ/index.html","3ddaaa2d9630095a4edf76389abde927"],["/categories/インターネット/index.html","b8e781d799fa6110eaff8a810024db69"],["/categories/中国に関する新聞記事/index.html","26c79d727a14d295d3f5bbc4a6d87ba2"],["/categories/労働者保護法律/index.html","ce994174a7263c7a7be1756da1689050"],["/categories/心理学に関する記事/index.html","926e0aed189b24f5f5eaa8917ededb7f"],["/categories/日常生活/index.html","7b14bdd1685fda7078de3501dca1ce19"],["/categories/日本のIT教育/index.html","a5fd22c5f87f9fa1ccbf917eb2ab50c8"],["/categories/日本のIT現場/index.html","fefa9d4d360c5510e72977a23c27ec5a"],["/categories/日本のビジネスマーナ/index.html","482740cd62f49f88d56ee9064ba83f1c"],["/categories/日本の国内の人権状況/index.html","c6833f4470470bd1ac09d8789beceed1"],["/categories/日本の経済新聞記事/index.html","a50e12f423fd77166c48a686e7250d74"],["/categories/日本地理/index.html","adb68069332488b0238e3dbde92b5407"],["/categories/环境/index.html","360a673e5205359ba3e5bd7d4497d458"],["/categories/過酷な現場/index.html","9908a21fda51614a1a2cdf6b57cdb54c"],["/categories/金融/index.html","053cab5b780f936a02db7dbdfdb06bb8"],["/categories/食べ物文化/index.html","a192a9c030976f5612d062f43d39de68"],["/categories/食品工業に関する記事/index.html","58ee53012a3678ca5cdd856c51b2fba3"],["/css/main.css","30a8eb934472d6babb0d48deb3cf7c5b"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","9688e7adb4a932b93bc2db363eb77c77"],["/js/src/affix.js","76cea60e446326123ca782857bdd8aba"],["/js/src/algolia-search.js","778c43fadb49853b1de757a59927b621"],["/js/src/bootstrap.js","d696e34d99f9decb21de01934d0fce5a"],["/js/src/china.js","227909076a4efa307cea1b9e0ef59ba2"],["/js/src/echarts.min.js","3c264cd30d2f1ee01e7b2b29147dd23d"],["/js/src/exturl.js","febfe23106c1c5465bdef981397aa03b"],["/js/src/footprint.js","5ccf472dd3a588e50e3d12d72b77323f"],["/js/src/hook-duoshuo.js","5e45ada3f23f2a8a7917323e5aee19a7"],["/js/src/instantclick.min.js","b8e777e00f2c02dda20f169fac0f3f5f"],["/js/src/js.cookie.js","30de6758f5b076682915bf432b08dde8"],["/js/src/motion.js","3a13817ccd9f6745affa8dd082cf82be"],["/js/src/post-details.js","3c8ed7503bf4c0ed4198d2f20ea02845"],["/js/src/schemes/pisces.js","d610c54a62d9b967e007609fa044e480"],["/js/src/scroll-cookie.js","7ddaef671fb82d5c3bf48f690d29c1b2"],["/js/src/scrollspy.js","8dded7db2450a61ac620849121ae0844"],["/js/src/utils.js","d7269cb9c4373fad6e109c280b43f359"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7f284ac3e30f29edc665a5b906bafb04"],["/lib/Han/dist/han.js","1d1d301f095d546bbe4af8f2bcd587c6"],["/lib/Han/dist/han.min.css","448866f9c4f5bc46f1dcd2f5ed5240f2"],["/lib/Han/dist/han.min.js","15cf17752b5db59c1f9a6db38da99da9"],["/lib/algolia-instant-search/instantsearch.min.css","f142e31c7fa992f1e9b9c04bc95aebdc"],["/lib/algolia-instant-search/instantsearch.min.js","b9ffe824e69db007db4ed1ee2cae3101"],["/lib/canvas-nest/canvas-nest.min.js","a1af9efb1c9dda629a1c4184231d49d8"],["/lib/canvas-ribbon/canvas-ribbon.js","bdfc7f966edce4a1a984887cec7652db"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","add0289f741fa102d72a74aa3936dd62"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","51cd80541fb8115cb7ffc9467ac34281"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","1d0c5e63e58ee96ee74724c2f153e0e8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","44fddea83a9646d117c0bf7f0a1c0014"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","260dce6f28991d9651eda64acc89c0ee"],["/lib/fancybox/source/jquery.fancybox.css","b7ed0b6945bf029ef585cc3c2be095f6"],["/lib/fancybox/source/jquery.fancybox.js","8a9b2a669e91d1df19af61f8fe347a0a"],["/lib/fancybox/source/jquery.fancybox.pack.js","65cb415ed45dd02d48d414c889d261af"],["/lib/fastclick/README.html","c1a9ae96d1ab87fed0ce2813cf2cdaea"],["/lib/fastclick/lib/fastclick.js","ba409e8ce62f45b6a1c0c416d12b111c"],["/lib/fastclick/lib/fastclick.min.js","ab4241ec6c2bf2889f1d512634acbd8b"],["/lib/font-awesome/css/font-awesome.css","62a6c1fe90d0047e87ba282a569c1c97"],["/lib/font-awesome/css/font-awesome.min.css","62a6c1fe90d0047e87ba282a569c1c97"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","07c962e9a859ace8dab4f92c323a5749"],["/lib/jquery_lazyload/CONTRIBUTING.html","c95a3946f2d4249b7b0ef35ff35a30dc"],["/lib/jquery_lazyload/README.html","109de47c84e63214e282e0036c76211b"],["/lib/jquery_lazyload/jquery.lazyload.js","77eeba267f1ea08f1b197f65022d3b3a"],["/lib/jquery_lazyload/jquery.scrollstop.js","8aab13b4b4965db800e1893975fedbab"],["/lib/needsharebutton/font-embedded.css","b7dcd74437b7e853106b6039c396f571"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","471773fed9adb640254c214bf001a251"],["/lib/pace/pace-theme-barber-shop.min.css","6cf49cdfae7e6ba3d8182bd4798a6502"],["/lib/pace/pace-theme-big-counter.min.css","890430de8886b7f6a79eb58643be6d10"],["/lib/pace/pace-theme-bounce.min.css","37103134af411c328ed6c7b2dd194eb1"],["/lib/pace/pace-theme-center-atom.min.css","fb494071b77c314cbe7df5a3fee02c35"],["/lib/pace/pace-theme-center-circle.min.css","475c4695a369c22f7225f92cada6df0a"],["/lib/pace/pace-theme-center-radar.min.css","5bce3c2f4ccbebd072ff0464fd37e9a0"],["/lib/pace/pace-theme-center-simple.min.css","6b9daa11feac3889d0ae133bd83c6b18"],["/lib/pace/pace-theme-corner-indicator.min.css","1d734c4e0cc11e358141411fc8dcf91a"],["/lib/pace/pace-theme-fill-left.min.css","6b3d421fe59e2ef4b098345821b00f08"],["/lib/pace/pace-theme-flash.min.css","e0a77a5751a8bf2d1aca371025e60639"],["/lib/pace/pace-theme-loading-bar.min.css","cd0095f355b29e50342fbb38337616b0"],["/lib/pace/pace-theme-mac-osx.min.css","14967372828a26a367272b3339ebe6bc"],["/lib/pace/pace-theme-minimal.min.css","0dc058a4bd094203dd760711b0695461"],["/lib/pace/pace.min.js","b2b7e72e2d9c8f8a2daa6ce302973c7a"],["/lib/three/canvas_lines.min.js","51f555c350804a03a47d6fef0d20d242"],["/lib/three/canvas_sphere.min.js","407cf6dbc534181dc32986264b9219a3"],["/lib/three/three-waves.min.js","0188894bdd160a2facacbf3f8a703684"],["/lib/three/three.min.js","2a156141066cd2b2116ca61b7b990cfb"],["/lib/ua-parser-js/dist/ua-parser.min.js","7aeeae7c6d95bde18115fd5f12b3ad06"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c625ff7a360201405ca5c3d0b83449ec"],["/lib/velocity/velocity.js","2f313410056c0f8d7f569918002e29c6"],["/lib/velocity/velocity.min.js","886abc0199774220f85ba9730f08b5fd"],["/lib/velocity/velocity.ui.js","df1511b9e93a61302b7d1dd19be71d2c"],["/lib/velocity/velocity.ui.min.js","5926f53e8d14b9cccb380ec1ae9d9682"],["/links/index.html","36e0d5a940b1a9b0153b7f6d8726ec20"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","85c25bcb9ff79fe926361bf55f8fdc79"],["/page/3/index.html","6ad978ff90d2bb145a7ef9a4e1447611"],["/page/4/index.html","2b50ecf0aa65a98f458a48a615df0aa8"],["/photos/index.html","9988be58aae390e2aee22de733235b1a"],["/posts/191ddb73/index.html","7dcc4524eee17b393cc2a95fcfa26110"],["/posts/1a195976/index.html","c9184350dcf40ae1d3b1cffca81891ce"],["/posts/2292f1af/index.html","fef9a248174460b32dbad4ae24eefb56"],["/posts/2fc77d95/index.html","8030e91647aef569f004479a1fdb1c12"],["/posts/2feacaf4/index.html","498aa19b36941c6ff25dce7ae24364e3"],["/posts/37f2c331/index.html","3c1b4866b45208cffeb0a9197e815eea"],["/posts/385f0de9/index.html","67d49bef167bb932529e151521584db8"],["/posts/3caecfa9/index.html","2dcbce5f9a5df189d3ebca5e6be97f0c"],["/posts/44414303/index.html","1f6f49403ba550b188ab96cc419f5452"],["/posts/456610d0/index.html","c60608820412f10067ceabb7618b331e"],["/posts/45e51894/index.html","4e6d369ed89f74a5107776272e706748"],["/posts/4f1131af/index.html","96923d0a339a19bd35b9c2dc018ea2bf"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","f43aa84a8e8e44e4612a96f4241d3c20"],["/posts/517ebb95/index.html","254480131bd08a0428a01fcb61a9127d"],["/posts/53bf1d9d/index.html","b6492b7d9668ce234d6d4526b5c67e18"],["/posts/554c2ba0/index.html","f4fb5f878b038f4128fecdf229902c32"],["/posts/63556f52/index.html","9e904af27d5b0255c356f536f108fbb6"],["/posts/6d49ceec/index.html","d2692a16b99ccf98a702039cd47b3c61"],["/posts/6de7d9db/index.html","52b223d758bc1ae5707d458c0dcf3739"],["/posts/6fda249f/index.html","00dcda66630cbf84481a7d271245ed40"],["/posts/84b87417/index.html","37546e6fcfaaa12293950f4e26a00c5a"],["/posts/92912ddc/index.html","c98742d3e823a82d70a6090d5495a0ba"],["/posts/97e5bc9c/index.html","eeea681e95af6ae9026a730e4c94fce4"],["/posts/9a5c7b64/index.html","5bb6d439f167dc5ec1addae23570b205"],["/posts/c311b112/index.html","df6a4009d3684345dfa17cf11a31aab2"],["/posts/c620d4c2/index.html","2324dfe98167cf190072bc5df665df1b"],["/posts/cfc54393/index.html","86afae56e8197ddffd2be5997cfd6c31"],["/posts/dc5155ff/index.html","376697d9ce6d305dcdaf704a06f30f50"],["/posts/e1bd836e/index.html","cd7a97139965516bc7e5e9cf32191431"],["/posts/e31c0293/index.html","5c9e0daabe3fa3ae2bc3b7f2cc3dbd34"],["/posts/f5fc4461/index.html","6609034eea6d48255527b14951795520"],["/posts/f8073739/index.html","12f19c0495f040cd30fc12d04019c0b4"],["/posts/f97ef43b/index.html","17e1dfd911e5bf34ce142872fcf9f2b9"],["/posts/fa84d5fc/index.html","67443175c06c3eab05168d883f0d6aeb"],["/sw-register.js","bf67eeaf327335d4f2d1d88aa4ff6b82"],["/tags/index.html","62a84e4af2e0903e1ba13ba384756d79"],["/tags/つぶやき/index.html","60fc06cdb0439fcbf0c661f4efe5f146"],["/tags/アニメ/index.html","d1c853fee5037cb47f67fc30757222d9"],["/tags/インターネット/index.html","8e2246bb6ab4e6e9b6fcba21a3834566"],["/tags/チョコレート/index.html","595570d5aa2b10b6925b7a09d451f0a0"],["/tags/中国に関する新聞記事/index.html","39d2bee6edf2eacdd0c1854b910a557f"],["/tags/乳製品/index.html","989161339d2605b27b58d40a7837922f"],["/tags/労働者保護法律/index.html","49d695ca686417050ace5ad2cca87761"],["/tags/心理学に関する記事/index.html","962fa58fa0fc5dce3ba6e4f100300130"],["/tags/日常生活/index.html","14fa56af77846f9bd32493b3496ad039"],["/tags/日本のIT教育/index.html","66392be6e529c296cf212f4a214eb409"],["/tags/日本のIT現場/index.html","b08ec3947b7cd1a24945090d3fd81fd1"],["/tags/日本のビジネスマーナ/index.html","cc4030d0be6384d1e9ee2b651ce0664c"],["/tags/日本の国内の人権状況/index.html","94d110dbe54ec7dad26493fcf9e21af3"],["/tags/日本の経済新聞記事/index.html","0be0925694eb3ab2fc6e69c3331a0150"],["/tags/日本地理/index.html","909b8708070c53c254bd50c9b29675ff"],["/tags/环境/index.html","d926499c6464fe39cfbb8e49d60da569"],["/tags/過酷な現場/index.html","33f34e6d1f7ce2bcf15559ac6f95034c"],["/tags/金融/index.html","af7c93ca5a69726db788972bb1d741e5"],["/tags/食べ物文化/index.html","db03c8058dd130070fd929cff7ca1d26"],["/tags/食品工業に関する記事/index.html","d9967e2cce0acc860c5094933e348620"]];
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
