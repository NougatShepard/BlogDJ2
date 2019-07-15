/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","0fe31fd20351739fd2db0ab7fa1969f1"],["/about/index.html","e7f2201562ac8df71777bfbad9f28c51"],["/archives/2019/04/index.html","bb435da71695e17771748fe1385c8e21"],["/archives/2019/05/index.html","816421f96ecac2f575c6f6f4995c6a4c"],["/archives/2019/05/page/2/index.html","b5a6a6f6be77a4f525a914ac2fc36999"],["/archives/2019/05/page/3/index.html","ca4dbb3c87624f6f19f4be7d409b7a68"],["/archives/2019/06/index.html","0b3ece7dc507b53ba21cb4c3ef929360"],["/archives/2019/07/index.html","7f566e3add4a17fc5913d9f262f5b7fd"],["/archives/2019/index.html","a202be775eff3798717a9d587171a673"],["/archives/2019/page/2/index.html","7edefc1bf441baed37ffa118b7037a0d"],["/archives/2019/page/3/index.html","fa1b2c612266e32675981a8a71562764"],["/archives/2019/page/4/index.html","7bbf1aff2e3edd35d4a3484b5d0327eb"],["/archives/2019/page/5/index.html","41e9959515ee3891e71d19bb6d2ea7fb"],["/archives/index.html","2f57ef08ca793a5c8db572f4e272efd4"],["/archives/page/2/index.html","740b2a083b1817da8c56f2840017fc89"],["/archives/page/3/index.html","e6695c6e1c11652bef74eed6f0c00f25"],["/archives/page/4/index.html","55be62bc755079e8f9c53a25d005211d"],["/archives/page/5/index.html","6ebbab73bbd83978e5d43722e3776bce"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","878ec34e5267865803c347adab3ce6db"],["/categories/index.html","01393073b8f5c20f4cdab5b19a8e8874"],["/categories/ことば/index.html","a6433f22cd0cd9c4b63996f17a602a4b"],["/categories/つぶやき/index.html","3d5cc9fa1811de9937a274032daf0ad9"],["/categories/アニメ/index.html","bc7c0ae79b093734c8e7df97a5aa5b30"],["/categories/インターネット/index.html","c8ff09fe224b834356858519ba6e51cc"],["/categories/中国に関する新聞記事/index.html","1d41ba2ac29cca16fba51cf8f2c12a5e"],["/categories/労働者保護法律/index.html","6d8c948206269e5c8466c1aafe2721ae"],["/categories/心理学に関する記事/index.html","37ca344b260cf41cda61704d0f0b9eda"],["/categories/日常生活/index.html","45236732deab42b20249ee37c4ef7a93"],["/categories/日本のIT教育/index.html","57f3f75d2f25168da6f411d62112dd37"],["/categories/日本のIT現場/index.html","966ac7969aee70b36f85af1af2a128bd"],["/categories/日本のビジネスマーナ/index.html","168e2eb5e05863b55cdad4609af0dedb"],["/categories/日本の国内の人権状況/index.html","01246bc6de0fba07d40b68a7bf733889"],["/categories/日本の経済新聞記事/index.html","2fd3ec536e3a3cbb4f8e2374dd1669a8"],["/categories/日本地理/index.html","df5942f1803cbecd9f220d1c182ba50f"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","10f0d5ea293fcfea200b84c3d58573b7"],["/categories/過酷な現場/index.html","7b3af5db38f352a3259f3d70631c6095"],["/categories/金融/index.html","94c0b72b08676dccf0c4dea00678e7ca"],["/categories/食べ物文化/index.html","e807bdc4fee2ec518c37132b2ac5b1a8"],["/categories/食品工業に関する記事/index.html","4cc0a9532cb0600552a37f8c5dd65fde"],["/css/main.css","fce65e1fc3036ce410c88ba1a8648c9a"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","1ca46a061f7454d2ce963f977d23ee6e"],["/js/src/affix.js","38aa363747a41810897aef15834a1a49"],["/js/src/algolia-search.js","34366aea0dc827df29f8b7272c0e007a"],["/js/src/bootstrap.js","ce6b93e298ad6a97d7bf16c41b3cc7d8"],["/js/src/china.js","805f77821a647ee72c28c712b7bc9de0"],["/js/src/echarts.min.js","842c5f0e4f271ace3be5b77562b126e9"],["/js/src/exturl.js","200f0f35f810aa9d98d5f0a2f444ec5f"],["/js/src/footprint.js","574ef22821a4436b4ab5533b59cad2b3"],["/js/src/hook-duoshuo.js","cd6ce67637d369fb930a03db7c4f1dcc"],["/js/src/instantclick.min.js","2a2f63ecda386d74edd2dcc4b76d90e1"],["/js/src/js.cookie.js","ab1e2d752f6c0409c3b9c9f718bc535b"],["/js/src/motion.js","623d103071eab9d2e877ad3beeee4fb9"],["/js/src/post-details.js","50bd61ce6678dc0a8c43566e99b9ce76"],["/js/src/schemes/pisces.js","a5256a7d45d2081ded5028ebb30a4cb6"],["/js/src/scroll-cookie.js","a7d889677b3b8ee59b9225eab32d3241"],["/js/src/scrollspy.js","688816710ba59b9d131698202b7b50d7"],["/js/src/utils.js","eee38b6cb6915a66f9774809e1cc9168"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","4345ccb4a4633326dffa9f32d2776943"],["/lib/Han/dist/han.js","b098e29d50a1ca1ead01a5e7456bbf23"],["/lib/Han/dist/han.min.css","8005284bd37341f22863d633a4c19ab7"],["/lib/Han/dist/han.min.js","b7d12fbf41d7196f0a9dae4f13553587"],["/lib/algolia-instant-search/instantsearch.min.css","46e40d2270b0d5ec01b95ef90e2573e7"],["/lib/algolia-instant-search/instantsearch.min.js","05b034714f8a34a200e2a718c6b4d2c5"],["/lib/canvas-nest/canvas-nest.min.js","0cb6aa369263f954ce0f52a58bb3e532"],["/lib/canvas-ribbon/canvas-ribbon.js","674a7cc9e5e753f4878185229e9de23b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","3f43c798cc06fb53bb4b0d9aebaacdc1"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e9be0dc044f28e3be3c78770ecad08c4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6d8434aa1a796f3f134396dae44daa3b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","e2ccc5988bfeaf9fee81f3eca8e9091c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","da770305171ecdf5a3c585b8ad240803"],["/lib/fancybox/source/jquery.fancybox.css","4648d5ca949d12b8b7607210b0eae9a8"],["/lib/fancybox/source/jquery.fancybox.js","307aa72c86323ab89378e25be483b2c8"],["/lib/fancybox/source/jquery.fancybox.pack.js","47e7560ed1d97a98ad011b2c6522854e"],["/lib/fastclick/README.html","ed6ce1038f7c0e442e3f849c24ccd130"],["/lib/fastclick/lib/fastclick.js","bcb229bbb123af6983e5091686e3ffaf"],["/lib/fastclick/lib/fastclick.min.js","a62a8e024d4313aa60ed1f95b84622eb"],["/lib/font-awesome/css/font-awesome.css","2f269c6de648e8cd068cc370f52a3366"],["/lib/font-awesome/css/font-awesome.min.css","2f269c6de648e8cd068cc370f52a3366"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","b99c7fc214785471df845a898fe6920f"],["/lib/jquery_lazyload/CONTRIBUTING.html","fccc79791a27e41d3fd71107640c54b7"],["/lib/jquery_lazyload/README.html","45a9481eaf10ce7515c614346d9fdbfe"],["/lib/jquery_lazyload/jquery.lazyload.js","9f0a62ca2a4fd97a937c68827e30c4bc"],["/lib/jquery_lazyload/jquery.scrollstop.js","2127955eeb9602c446254eaed4bce78e"],["/lib/needsharebutton/font-embedded.css","cf12cdd27f07ba2f3fb607ee6bac1ebc"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","7ebc2ea1f2942f4cf77c8e69fb262134"],["/lib/pace/pace-theme-barber-shop.min.css","ebb1a8f1766e009adf27e33c706d54b6"],["/lib/pace/pace-theme-big-counter.min.css","d559a9548b39eec92ad4003d521a62df"],["/lib/pace/pace-theme-bounce.min.css","ead405d19833d45513c0b4264aaecc36"],["/lib/pace/pace-theme-center-atom.min.css","816a592e76d3ad3d6bbe264aaff9402d"],["/lib/pace/pace-theme-center-circle.min.css","49d79abc4c1711b3ccf3764ada5c3f46"],["/lib/pace/pace-theme-center-radar.min.css","f27cf34f8f2830d56f08d8b1a283921a"],["/lib/pace/pace-theme-center-simple.min.css","6a96d71883bbc403ae3da8e769940981"],["/lib/pace/pace-theme-corner-indicator.min.css","3072021213e3b2acf94bfd23402fb3a6"],["/lib/pace/pace-theme-fill-left.min.css","1a0b397d72a10e74f3753b514d0221fc"],["/lib/pace/pace-theme-flash.min.css","951ab40131dd287ad7164f8d9804c9f6"],["/lib/pace/pace-theme-loading-bar.min.css","7f8f9f52bfe8adf9298afa54786725e9"],["/lib/pace/pace-theme-mac-osx.min.css","4f7374abe345ed3392542bb87a1545f3"],["/lib/pace/pace-theme-minimal.min.css","e326f1345b9a32488fbf195a727097f2"],["/lib/pace/pace.min.js","ac03969e130cc481f4ad0aea5fe20cae"],["/lib/three/canvas_lines.min.js","719b062e3ab0b4765b07868bb5790e9c"],["/lib/three/canvas_sphere.min.js","2b32bc70cbcd591bee850f3689bc5308"],["/lib/three/three-waves.min.js","5cc7afd1520181131ccd0fd0e83fba3d"],["/lib/three/three.min.js","240e381845a88559083adeb664e32c59"],["/lib/ua-parser-js/dist/ua-parser.min.js","dce773aa415f77b7110dc00011a21407"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c84ad3a16a6c7e9dcd166f74eaa1c455"],["/lib/velocity/velocity.js","0bb3d34c6f17ca95fa4ea29e666f8d90"],["/lib/velocity/velocity.min.js","c648fc622985283d8dd14341b0bb309f"],["/lib/velocity/velocity.ui.js","5a112b98fdbbfd978c24bb669817cb4b"],["/lib/velocity/velocity.ui.min.js","c2eedb768c3de5eb04b5faf9b7691e54"],["/links/index.html","7bbaac25dd3dc79216c572d2188ab7c0"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","a4fcaee91c26fc11916d06144ca83b83"],["/page/3/index.html","c56b4be71df3e9898e4ecc67a5a36c3c"],["/page/4/index.html","790be4f27a69f466c95d31c002be7f0f"],["/page/5/index.html","d08676a06338a5b8cdeaf1774157cb91"],["/photos/index.html","fddf794d8d5836c2b137d4fdf2cae2fd"],["/posts/191ddb73/index.html","7fbbc29ebcbf2601a9a32955013156bf"],["/posts/1a195976/index.html","f50ae4e559e8db0f1dbb30fe5cf0b93a"],["/posts/2292f1af/index.html","d5ad92ac206e82e5b5ea6a25f3d95677"],["/posts/29d57d6/index.html","a3dfbf95cf63a09cc58e0b513f218ca7"],["/posts/2fc77d95/index.html","63df1d4df7e1691536de08d779c02583"],["/posts/2feacaf4/index.html","4c05aa3cb17bee936cabf666e293602d"],["/posts/37f2c331/index.html","8edd3237db6c0d5a2dc10356a5a3e4f0"],["/posts/385f0de9/index.html","402f579515a787734a45899e15b0f6ac"],["/posts/3caecfa9/index.html","142b4aa64289048e26ccd563d39bb816"],["/posts/44414303/index.html","a327865a822dfde4ed62de4fdc013441"],["/posts/456610d0/index.html","0e08b8f3a6e429b60a4a70cfbbf4578a"],["/posts/45e51894/index.html","3ef8c9e7d238b089be46c343c8f27f8f"],["/posts/4f1131af/index.html","77e99727ab88d60294111f19a436491f"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","3810241d10bd84d5fd16ebcac156c1d1"],["/posts/517ebb95/index.html","ad85665d51229ac47a71c2181d455dfc"],["/posts/53bf1d9d/index.html","473c88a70c4ee8df128727d2771ee5de"],["/posts/554c2ba0/index.html","f0a859550de465bb9f04898c3e450372"],["/posts/63556f52/index.html","082813e3baeb38f5f096edb045165f8b"],["/posts/6d49ceec/index.html","fe22f6aaa9a3d10789b042644bb08a77"],["/posts/6de7d9db/index.html","db9daaf1d0794ca267eb07cea7703b18"],["/posts/6fda249f/index.html","465f9fb10e4690713fe6912224f17bbf"],["/posts/759a6740/index.html","ef095f8e730450f1dc824bc68497b734"],["/posts/84b87417/index.html","7cf2c12dfe0bbeabea1272a6c23a34b7"],["/posts/8a60fcb8/index.html","dce47f4d4aae10ddcc38315f271e06f7"],["/posts/8b4c253/index.html","c87c42568750b1b59271415a0d73063f"],["/posts/92912ddc/index.html","7c60f6cab39a60cf8bda062dd1b26a24"],["/posts/97e5bc9c/index.html","f8c85d6fa717371e47fc5328d5722af7"],["/posts/9a5c7b64/index.html","14c11f3748b00f46a13f16e2005926c6"],["/posts/9cf9c275/index.html","54d5c0725bc60991f2b1d903a5270ed3"],["/posts/ac7d0231/index.html","4448f028c8e0515e065a1ddc06e7065f"],["/posts/c311b112/index.html","b9031d266ddd71464ac64e1795118cc4"],["/posts/c620d4c2/index.html","0272d6e17bc7c384363c1380778394f1"],["/posts/cfc54393/index.html","c4dd9638fbfdfb13394fe479ef3f6454"],["/posts/dc5155ff/index.html","f154d87254b7d86051486c362f9a7679"],["/posts/e1bd836e/index.html","5faeffb11ef55960307c8389f37ea1e3"],["/posts/e31c0293/index.html","3c67e14bbdaf645ba69b67f8b61a7413"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","d07e7877e458d320d92fa1be74766a89"],["/posts/f8073739/index.html","8296489b5bd2ef43c0fdc525484d5e37"],["/posts/f97ef43b/index.html","ec4de59e7915941a4b78b1b7601dd364"],["/posts/fa84d5fc/index.html","85a99a940878037975f6ee49186e2a79"],["/posts/fb1ab942/index.html","ac6b3d522f6007ee592d071531b9f203"],["/sw-register.js","83f5099f7dfaa5d5780348206cf31014"],["/tags/J-pop/index.html","b34b58822bf03ad373493b32b15ec8da"],["/tags/index.html","d48e45eaa9ef446a28deb2833753a116"],["/tags/ことば/index.html","222e5e6426f8e9d6fbb7c5bd0a0a7b53"],["/tags/つぶやき/index.html","e27d4596b365158cc1eb53779d8188ad"],["/tags/アニメ/index.html","ea12fc25f89562bfe258f4a287ba41c0"],["/tags/インターネット/index.html","3f36d45ae5751dc8e7af6371115992fd"],["/tags/チョコレート/index.html","69e092fe42dbe6a53f2581ef70c7b983"],["/tags/中国に関する新聞記事/index.html","ef38502eee13b9c657dafb5cb7ef7054"],["/tags/乳製品/index.html","bb2344bbc609c68a43684b4a32e6496c"],["/tags/労働者保護法律/index.html","58a3682e3cf9337df8ff9f3da40a8f43"],["/tags/心理学に関する記事/index.html","e520ad44a13ecd6dd72a815b26c62411"],["/tags/日常生活/index.html","156bf1a13bdc94df5906132761927cd6"],["/tags/日本のIT教育/index.html","3ca297160bbf69d779efb3fa721b7d27"],["/tags/日本のIT現場/index.html","6ab09d0ce3fca70fa428c4ddb0430859"],["/tags/日本のビジネスマーナ/index.html","9cac466616d7e4eab292a9247650a070"],["/tags/日本の国内の人権状況/index.html","ed1b7a7a984fc910ce582233c2606c93"],["/tags/日本の経済新聞記事/index.html","75744d7d32ccf3dc0e2ee17ecad36988"],["/tags/日本地理/index.html","38662359b7557aec30ef308bb3b08ec3"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","5b8e64e9d6dc844f517be3b5f43a0b90"],["/tags/過酷な現場/index.html","b8039a8b25d8337e8b5718632dd5e43d"],["/tags/金融/index.html","4843c9a26d4b14cb39e7aef2976be9e9"],["/tags/食べ物文化/index.html","b200117aedb8d8ffb4ad490c14ea84a3"],["/tags/食品工業に関する記事/index.html","ce017d4c53894402f7397b6c26bb676a"]];
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
