/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","973ebf2f711c35610224a3a619ac5b56"],["/about/index.html","be285eadff515fdd512910eb157bb894"],["/archives/2019/04/index.html","3c5b154098ac99d578bca8f941617e65"],["/archives/2019/05/index.html","4c1c89058e0df8e34a8d3fca66bdb087"],["/archives/2019/05/page/2/index.html","26fe98fe3e9166d8b78f00616058994b"],["/archives/2019/05/page/3/index.html","d13ca5b18cbc8753e8128702504afea9"],["/archives/2019/06/index.html","f71dc43354ef279ea4649770641b526e"],["/archives/2019/07/index.html","0da7a029f6e70df842ee27a04408381d"],["/archives/2019/index.html","71bc1c4f4aaa3642ab851bcc52e8f5b1"],["/archives/2019/page/2/index.html","806d0de971985e707372008e63016e5d"],["/archives/2019/page/3/index.html","671180383af43c0c7cd6f42aa13c9ec9"],["/archives/2019/page/4/index.html","43b04f406c934a886c559fb26f610b72"],["/archives/2019/page/5/index.html","53f3453079f3a9a3accd9b3e07c01828"],["/archives/index.html","4016c50ecba48f6bda7b1ce3fe8e9c05"],["/archives/page/2/index.html","cb5db514c63f38eed1280a32e6651380"],["/archives/page/3/index.html","1bb1d635a86eb128758e13eef2e075ad"],["/archives/page/4/index.html","d10a906e9a109f02243adeaa618b305c"],["/archives/page/5/index.html","2547f8a1e61c1a6b6bd7777076c2ac00"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","6b59169da5c4ba41ec39ae2029b4a064"],["/categories/index.html","72863c529723abff166b907328612fd7"],["/categories/ことば/index.html","ad1bec70ecd4a52f2d74a51e1b7c5c20"],["/categories/つぶやき/index.html","165098720021d8fe324fad1d31866d3c"],["/categories/アニメ/index.html","3bc64dbab761506759d73c73e094e55d"],["/categories/インターネット/index.html","20238db364cb12b0117605195c1c38bd"],["/categories/中国に関する新聞記事/index.html","d34425f80c44000f6ec18c7c197b9f16"],["/categories/労働者保護法律/index.html","05e3b25758421ee7054e9186b69ebe2c"],["/categories/心理学に関する記事/index.html","1f4e35c43996ce13c03956cf4b5d23f3"],["/categories/日常生活/index.html","d80d09762494986255f55178a734a530"],["/categories/日本のIT教育/index.html","e61d441e9693aa2e13aa0f22aa196181"],["/categories/日本のIT現場/index.html","097bdca1e7b1bc32b55e9e87467bc409"],["/categories/日本のビジネスマーナ/index.html","08b1499eb3cf65a6c900e94c75cf7408"],["/categories/日本の国内の人権状況/index.html","ba28b9f91ec69000238951db9707466f"],["/categories/日本の経済新聞記事/index.html","aea5f4f3866ec7d4f94a9760f8652d3a"],["/categories/日本地理/index.html","ba2158307d313e7b85c2bd783452df19"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","8ff7b96028c3c42fc1597c16f7497058"],["/categories/過酷な現場/index.html","f181852d8c48e7236d3141e805787b4d"],["/categories/金融/index.html","a811e0cb56dc8af525b568307e8d352e"],["/categories/食べ物文化/index.html","d92725117aa9b613f21b6c57d9d890ed"],["/categories/食品工業に関する記事/index.html","a1800e92ceddf230cd47ffcd6c51e147"],["/css/main.css","60aec9d15da378b21f8889d36352cf6c"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","26d302eacb684629df18121e4eec662a"],["/js/src/affix.js","29bcb0a534c7afbeb7c19621001c0df0"],["/js/src/algolia-search.js","75e69d33cc6d550bd9c9b473dc242685"],["/js/src/bootstrap.js","0dc6bd27dee73e3c6ec27ae9e2330571"],["/js/src/china.js","adbae30586d0b7eddf268ac400789d12"],["/js/src/echarts.min.js","a25ae5d54232ef457e640e753617ae63"],["/js/src/exturl.js","c82973265c55dab26f56bc2a63b96176"],["/js/src/footprint.js","634f4858b54b4bd136c5571ebd5a2f80"],["/js/src/hook-duoshuo.js","ced2a46d6362d09a0409f3c24095a3fc"],["/js/src/instantclick.min.js","f9c74a07317acd9f378f5046290a2d64"],["/js/src/js.cookie.js","348bbbd243b402f845e913bc647ec96f"],["/js/src/motion.js","f4dddd433b87705f2d4087e08160d1ec"],["/js/src/post-details.js","c522170f13f2d9d6ad70db54dc52b471"],["/js/src/schemes/pisces.js","072e2736640fc6d698cbf7652fd1bc4e"],["/js/src/scroll-cookie.js","3bdaa25197389f40f42b5b1fd339f845"],["/js/src/scrollspy.js","27dfccfeced276e6d9e41ee191c9098b"],["/js/src/utils.js","44fd443d8314690c31b90d3be76eab20"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","95a8143822bf18ddb54f3d958a1dfd27"],["/lib/Han/dist/han.js","678eb6ba1e97493c8e8a9e7f0e6e6dff"],["/lib/Han/dist/han.min.css","7a965dd6480421f9de72a664c1e8574c"],["/lib/Han/dist/han.min.js","a45e92561fb04eb8f70e457f93eccdb0"],["/lib/algolia-instant-search/instantsearch.min.css","fad703c86f208111e309f0237f7248c1"],["/lib/algolia-instant-search/instantsearch.min.js","38e8aa10a7da640491f90532153bcf4d"],["/lib/canvas-nest/canvas-nest.min.js","695557cabc1b20d249c959a1a2223bac"],["/lib/canvas-ribbon/canvas-ribbon.js","acd15c199b00a426e5299fc842dfa98a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","18a5b48667a3286fa0e7edefe4e04525"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","203d3bf217a85bc8e1783c68c54c1eab"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c59c300760e79c702781ca52cacfd18e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","76ff5003f420427e2c3b11cc4c962322"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7c656b566b8859df8a5b0fef5364f5c9"],["/lib/fancybox/source/jquery.fancybox.css","667edcff12411e603034e847721889c7"],["/lib/fancybox/source/jquery.fancybox.js","5df3e77ecdc65aa92a6e497c10a9765b"],["/lib/fancybox/source/jquery.fancybox.pack.js","3f906eb764b0cd848f20459666193e9c"],["/lib/fastclick/README.html","9927211cf5df38b4e4e034f018aca451"],["/lib/fastclick/lib/fastclick.js","824b862bb3719906c1089e38ff46c3ab"],["/lib/fastclick/lib/fastclick.min.js","c7e5bd3390d2e32688cfc073b82f1ef3"],["/lib/font-awesome/css/font-awesome.css","ec39e37c1794373f756d839a07826fda"],["/lib/font-awesome/css/font-awesome.min.css","65a8b4bbb18b83d74d4e96bcc6a31982"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","37140fc07fe7e538201899f510810a6c"],["/lib/jquery_lazyload/CONTRIBUTING.html","8f3b9048745fb2fe0ddd81e24c47b800"],["/lib/jquery_lazyload/README.html","38a9cd81799ccd95b2c70ce02e8da11c"],["/lib/jquery_lazyload/jquery.lazyload.js","0f1c136690fb121ba2cc13b78eda2158"],["/lib/jquery_lazyload/jquery.scrollstop.js","8721eea9e9921fc64404351216281628"],["/lib/needsharebutton/font-embedded.css","a76dff02bbcda9fcc0805d3d7e726bda"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","dca641c7e5a508fdc24fd6ea4349ba26"],["/lib/pace/pace-theme-barber-shop.min.css","4db33cb7635436f561c53feb3d4ef2df"],["/lib/pace/pace-theme-big-counter.min.css","9e1b6f821a32ed7c9352954c13d2d6e7"],["/lib/pace/pace-theme-bounce.min.css","0f6415575322a6a0b1e1157172fb8210"],["/lib/pace/pace-theme-center-atom.min.css","21ab989d3bd88abb4a170386cee9b2de"],["/lib/pace/pace-theme-center-circle.min.css","9726b0398efa6241baf42f455d1c76fd"],["/lib/pace/pace-theme-center-radar.min.css","8b6e8f79bcf0c3a14b440e67658783c0"],["/lib/pace/pace-theme-center-simple.min.css","6cff8f9f4e1fa12218509afd1ea1eafe"],["/lib/pace/pace-theme-corner-indicator.min.css","422886ba47ca1b25309b54642386de39"],["/lib/pace/pace-theme-fill-left.min.css","598e848bcc9c022c872780afe0434319"],["/lib/pace/pace-theme-flash.min.css","7ae47283a1fb3c0b230708e247d75b78"],["/lib/pace/pace-theme-loading-bar.min.css","aa0e80db31a6e7f0946f6695c0613985"],["/lib/pace/pace-theme-mac-osx.min.css","7c4ce71d4d9feaba7233a08c384ab4e1"],["/lib/pace/pace-theme-minimal.min.css","ef052e3c140ee2d92f1ac0a9a3e296cd"],["/lib/pace/pace.min.js","d5d37e1fb0d479cf5c2f8f25526f1ec9"],["/lib/three/canvas_lines.min.js","50623f7a2ddd2859fd362d4da463e57f"],["/lib/three/canvas_sphere.min.js","b2767c9917b4f8ff369312c943196437"],["/lib/three/three-waves.min.js","691e69d497f1a2f1dfb3a1751942ccad"],["/lib/three/three.min.js","60f207268f388f39279506dcf13e68a6"],["/lib/ua-parser-js/dist/ua-parser.min.js","9845543c857906e37d6ca61663f8fc47"],["/lib/ua-parser-js/dist/ua-parser.pack.js","227d68dea330df1dc5b238ca5fac9eab"],["/lib/velocity/velocity.js","8097c5b39c3360f1a61436ed011be883"],["/lib/velocity/velocity.min.js","be24e7db552b1a21465fabed14f98135"],["/lib/velocity/velocity.ui.js","6c0ec21f744ef449fc4d8e9a7c534ff6"],["/lib/velocity/velocity.ui.min.js","9bc5e75fc0e5971582e9d93eab89b90b"],["/links/index.html","40fc3570b9e5721f72f79799a82d7fb1"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","41cc928729ab3ef0eaa9508cb38d5eeb"],["/page/3/index.html","2c5841d2d2de3f43f7db74436808e7c5"],["/page/4/index.html","5f15f309d3e3eccbf32210879b9a975b"],["/page/5/index.html","ff5a65bf91388f046d12d25dcf329bcf"],["/photos/index.html","3a94e61443658106efa0593cc7e7a902"],["/posts/191ddb73/index.html","d5ff0c05d602246d2d36552867bc8216"],["/posts/1a195976/index.html","dfd5950de1693d995689f8f15bc42d06"],["/posts/2292f1af/index.html","af72c7e9b8895c0b43a186c3a2df0ea9"],["/posts/29d57d6/index.html","c8e7d62bfe6f8d4e3b7e43a5b88781c8"],["/posts/2fc77d95/index.html","4e97a19b7a40b9d0cc2214b62e2991e5"],["/posts/2feacaf4/index.html","be643a694b870b6b8aa01c1a62f6431e"],["/posts/37f2c331/index.html","a2b2fefdeff0c2eb936c185917dd2a79"],["/posts/385f0de9/index.html","dd6294a9405e1795b5bfd4d43d12ea2f"],["/posts/3caecfa9/index.html","e756029e510cd5e2b139c0e6739f2636"],["/posts/44414303/index.html","e725b2db27b3c4f1a33328ab022a1a94"],["/posts/456610d0/index.html","fed1ddb90c6a865950b96c993ee6861e"],["/posts/45e51894/index.html","bc210495138e2b0f9ce0f4cab3196be4"],["/posts/4f1131af/index.html","901276cb012a768bde3644325e61a7f5"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","9b8e2d2578fae52a12810fad262a3bba"],["/posts/517ebb95/index.html","a9a6966065049a48fa6893b6b85663cb"],["/posts/53bf1d9d/index.html","30b145ffc912d99befba67663e2e605f"],["/posts/554c2ba0/index.html","bc18d5d1341b7557a5e924fb6c747a95"],["/posts/63556f52/index.html","8d4cf481cc68200f6c65b465ae4da9b2"],["/posts/6d49ceec/index.html","55e1531326aba8c0776fa57c4a37253b"],["/posts/6de7d9db/index.html","d36e5c9ac93f92c926357ae2a7a95c03"],["/posts/6fda249f/index.html","fe2f76a46623cc293c8c9ae857897d81"],["/posts/759a6740/index.html","4cd0bc7d0aa68370c9e4f7027137f371"],["/posts/84b87417/index.html","620c6be429571fdbc11ad38a7f41dfcf"],["/posts/8a60fcb8/index.html","cfca67c90c5a2c1e1065a4382bee470b"],["/posts/8b4c253/index.html","d07b5fe4c4346a81f29eb47c906bbeb5"],["/posts/92912ddc/index.html","7c245458182f8dbe148627d59d8e6383"],["/posts/97e5bc9c/index.html","c8b7b41d40dd9bd9f52298d73ace772d"],["/posts/9a5c7b64/index.html","a8482eaf0c8c157f1a28a725f8ed96a7"],["/posts/ac7d0231/index.html","bded368e98ac8f0bee9f8b2e148479c6"],["/posts/c311b112/index.html","bef994d3676a42e75866b16330463d4f"],["/posts/c620d4c2/index.html","38787c03b25cf55c9e5e6d2747ad006c"],["/posts/cfc54393/index.html","2dbe74687baa9ddbd64f76f3ed5f69e4"],["/posts/dc5155ff/index.html","5b3bdde40aab89243670dc7b782c1df2"],["/posts/e1bd836e/index.html","9c6ec18a4afde9fdc744ef7585c051db"],["/posts/e31c0293/index.html","a703beb41cf1190fffaa502f51151b52"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","503093fb931dbedeaafbc84876085718"],["/posts/f8073739/index.html","f84341e2aba3d8f780aed29ac99e995a"],["/posts/f97ef43b/index.html","336318e3ab61d8f3cedc4f65b7a0faf8"],["/posts/fa84d5fc/index.html","1dda0457c2c0d1fc2c98b17bea5ef544"],["/posts/fb1ab942/index.html","97c39a0cb80bba50bf3f9cdcdd7a17f4"],["/sw-register.js","db15b5a9f0eca6556f134ca43c1b11d0"],["/tags/J-pop/index.html","5759e41563102c86cde99e67f8e2c3b4"],["/tags/index.html","315e3ce71c6fd562a6b75905f52d8960"],["/tags/ことば/index.html","97e996afe44b95b735be9d8fa8b50320"],["/tags/つぶやき/index.html","a393d0071f7af8a4263928ed620a2a5e"],["/tags/アニメ/index.html","591620fdd3a0244eca5497589eba306b"],["/tags/インターネット/index.html","21d61656d46c768c7bf6f6e6e88b41a5"],["/tags/チョコレート/index.html","5ee169d368876f2c336b7fae263508b7"],["/tags/中国に関する新聞記事/index.html","999b87ff50db9f60144700bbd017876a"],["/tags/乳製品/index.html","ddf9ebb1621326b02c5a4f71f8b34ad9"],["/tags/労働者保護法律/index.html","194d3788d34167276ef0de9d81cfd039"],["/tags/心理学に関する記事/index.html","bb039b8d9bb218d4ab9e92827a3cd7c9"],["/tags/日常生活/index.html","356e223a7c167444484d22dc262bdb3a"],["/tags/日本のIT教育/index.html","a52aed1937a73bbdf4784554606c79d9"],["/tags/日本のIT現場/index.html","4a010b66b5275bf753d349323a2af841"],["/tags/日本のビジネスマーナ/index.html","1a4f188710ed1a4e797d6f10aaf83700"],["/tags/日本の国内の人権状況/index.html","dc414d7587b6ab808475a09d334d72b6"],["/tags/日本の経済新聞記事/index.html","85e335a3a2a72eb5ae6e0a0bfa3de96d"],["/tags/日本地理/index.html","6ab51cfec6d5c541fe0dab2f3ed0dc86"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","b4de8aee4d5a1db76306cd95050e32b4"],["/tags/過酷な現場/index.html","44e04e703fbd5be9e8bbc641bba47ac3"],["/tags/金融/index.html","ec1993c0506cc04e4bfee07005a3347f"],["/tags/食べ物文化/index.html","e4f8436c83e2211f26a670bee10bbe92"],["/tags/食品工業に関する記事/index.html","b7e8c9a6f133c449dc42787e8f8ce156"]];
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
