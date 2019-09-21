/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","9d2bd04ae33928601763e075d684e96f"],["/about/index.html","7cd5b391ac672097fdb4fed66ce5af12"],["/archives/2019/04/index.html","1a23c7100217f433fb7c672627bd4037"],["/archives/2019/05/index.html","c97ba8e8ad0aacf2ca5547db7751ff33"],["/archives/2019/05/page/2/index.html","bd9646a5e0f9c3131ed715419361145e"],["/archives/2019/05/page/3/index.html","5c91e4f253fc94f64f9f64128a9b8f1b"],["/archives/2019/06/index.html","a468e688985ad74b4e24c7dc6ca09d44"],["/archives/2019/07/index.html","834bb831dc9094981e8eb921426b3922"],["/archives/2019/08/index.html","533db7881c5484252cc88ed1e331840e"],["/archives/2019/09/index.html","02e6134820cdf1703ef58ce5dc110726"],["/archives/2019/index.html","c1693861741357e2a51b3065260f7c3e"],["/archives/2019/page/2/index.html","fa050f6ec4b0ad78ae758de7dd9a8832"],["/archives/2019/page/3/index.html","486480c344b805768ff23663aec167c0"],["/archives/2019/page/4/index.html","a79f6c761dc43af2c6ffcd7ec88ab97d"],["/archives/2019/page/5/index.html","a1777f78e42bd0cb46fb2979d8580a32"],["/archives/index.html","d1ae339d91b75538572c0ba3268c8d60"],["/archives/page/2/index.html","816892b0ae5f80f4d142af44435d91fd"],["/archives/page/3/index.html","4ec7aa05b443b4294e945debb1b4e25e"],["/archives/page/4/index.html","f63a14a9dc37c59a036586b94c91913e"],["/archives/page/5/index.html","17d929830fbb2a6cd91622588aad0bbf"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","c5f258969d2b11ec4f630528de043ca4"],["/categories/index.html","bb38c145bc458a081082d9257c2ed951"],["/categories/ことば/index.html","29f31d25bca706bfb4cb05925838e239"],["/categories/つぶやき/index.html","673eb88461d88d1cd7325d53cbfc54fa"],["/categories/アニメ/index.html","00ae8c97582abcaa7051483cb4a018d4"],["/categories/インターネット/index.html","76357ac8b7ba66ecc39e5d99b1da1324"],["/categories/中国に関する新聞記事/index.html","4d41ede8e99a588082ce72b42629b4d8"],["/categories/労働者保護法律/index.html","9e9cf72d6c723abfda9b96a65859e1d0"],["/categories/心理学に関する記事/index.html","fc9df48f7a3a34cfcc456a5973bec369"],["/categories/日常生活/index.html","64a79b400ecf26d9a8e253ef246ada30"],["/categories/日本のIT教育/index.html","8e890130d567b44c88c9223b5884906e"],["/categories/日本のIT現場/index.html","167ed0cb2ff1edb0fccf3aa8f6d6d9ad"],["/categories/日本のビジネスマーナ/index.html","9eab034b9d04c54b3228cc979dcfe7b8"],["/categories/日本の国内の人権状況/index.html","89e1ce92003df0174f2153656260fc24"],["/categories/日本の経済新聞記事/index.html","7228ae74eaf02d8c4f9bb6f931ded023"],["/categories/日本地理/index.html","50bf448ddbd6ca59baeb794e43cdc938"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","89141ca6cbdd6bd4e5f60c0c79da92a7"],["/categories/過酷な現場/index.html","8436aa69f7f216bf4cfdd0c21e845954"],["/categories/金融/index.html","14fd3e23d65681d8aca6d3fb4e40e912"],["/categories/食べ物文化/index.html","2f635248e84c21f6549c1c80231984d1"],["/categories/食品工業に関する記事/index.html","dc79bf71b413eefcc59e34175e2d985f"],["/css/main.css","cda4547573e79d7841d9418b9f826bf7"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","1382f76adfe06d4ad51a93969b5c6e33"],["/js/src/affix.js","8fc3724fdeb60363056e238d04a1cc2d"],["/js/src/algolia-search.js","1991ccb9943a8d36bc38ea51ddd9d10f"],["/js/src/bootstrap.js","4981870f13fa5f9cb375feb0b9377fac"],["/js/src/china.js","b62262409ac09dc8744c8baa9e86256c"],["/js/src/echarts.min.js","364386e517af2b1220d08e4050de9959"],["/js/src/exturl.js","8d5ac901c30e9f33b1191ec6a0374204"],["/js/src/footprint.js","f5d66d0f2d3c735d8f189de9fbba6239"],["/js/src/hook-duoshuo.js","780443308644a0f9dbef0cc7a1c7fe5c"],["/js/src/instantclick.min.js","d408c47a0d28fc558fc3bd41ecba3068"],["/js/src/js.cookie.js","36f0f8ecf8d485fe9f0049a98fcdbe93"],["/js/src/motion.js","0a610f4885240f21c09bd4c36091fe3e"],["/js/src/post-details.js","96b51b86ef0a51ba9cb07618a4cfb6e6"],["/js/src/schemes/pisces.js","75f776dbdcde85c661957fb0e881ba66"],["/js/src/scroll-cookie.js","db202e40689e2c4248ec874527ae8974"],["/js/src/scrollspy.js","a5aa320a10937cf312c619b040faa285"],["/js/src/utils.js","121159928c94835996cc7a58fd45478e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","4e2f77f1332a24704f243edac083bcda"],["/lib/Han/dist/han.js","fafcf3e5e926251ca58c6fb628f28a9e"],["/lib/Han/dist/han.min.css","3a9bf01b4eea5f50906d568e7c99fb95"],["/lib/Han/dist/han.min.js","913c7b28043433b0649a25c1a3561f23"],["/lib/algolia-instant-search/instantsearch.min.css","424cb6ed66435244c99ea4b3659d1836"],["/lib/algolia-instant-search/instantsearch.min.js","ccbfd592e48b764c6ff1df421f662a55"],["/lib/canvas-nest/canvas-nest.min.js","9a34df3c06bc9907a66b5ae7c91b629c"],["/lib/canvas-ribbon/canvas-ribbon.js","81ca0372d90c40dae45eb303169a6616"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7e334ac8577324cc519e259a38e3380e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ce9340d761eec866274b0f376035a5bc"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","1fe3ca06be37499724939f4460e8359e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","06468c281094a706804f0c1c9be300e5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7a0642d94ff6ecfc260759fe6b1d53b7"],["/lib/fancybox/source/jquery.fancybox.css","4851957ba5e0125a87326a95edf4decd"],["/lib/fancybox/source/jquery.fancybox.js","5551c2d3d2b82352f3793ee0f404200a"],["/lib/fancybox/source/jquery.fancybox.pack.js","8b60c52bafde3ca10a648b6f11a6e6e5"],["/lib/fastclick/README.html","5544377f5cc77434749bec99320dbf97"],["/lib/fastclick/lib/fastclick.js","26ecacf50e652f67bca4fb91dea92bd8"],["/lib/fastclick/lib/fastclick.min.js","b7fdc027565d89be0ce02a73a7db8724"],["/lib/font-awesome/css/font-awesome.css","e58dfd2a1a9e3a1d249b64a18f6c992b"],["/lib/font-awesome/css/font-awesome.min.css","450d776a276d251a173df9a1097843f0"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","860c529f7fe3065e8b57b88b6beb1df5"],["/lib/jquery_lazyload/CONTRIBUTING.html","34395f874cefcf34fc2018cd633205db"],["/lib/jquery_lazyload/README.html","eb97c82d02d2138b6aeb6444658f9272"],["/lib/jquery_lazyload/jquery.lazyload.js","8e42aaf4a614e36c9733a2405388fca6"],["/lib/jquery_lazyload/jquery.scrollstop.js","82d1345d693f6b10e8b6e38fc3a210ba"],["/lib/needsharebutton/font-embedded.css","c1260a7f2ed63cec773f33df2b549876"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1fc8b8812dbbab7078e5f72a0282ae8b"],["/lib/pace/pace-theme-barber-shop.min.css","317de4f0153ce3b7a665778a3ebcba8a"],["/lib/pace/pace-theme-big-counter.min.css","f7afd63d45235cdbffc09d8f90d2db0a"],["/lib/pace/pace-theme-bounce.min.css","c9855f24663ffdf6c07b3a104423c2ae"],["/lib/pace/pace-theme-center-atom.min.css","b4be5681915c6cfa49f04b6fb4fe8243"],["/lib/pace/pace-theme-center-circle.min.css","f97b8448299982eeac35a354c7ca8bf4"],["/lib/pace/pace-theme-center-radar.min.css","ab44550bde57a80b874f8b8d5e8e8413"],["/lib/pace/pace-theme-center-simple.min.css","0059c00edef741b429ebb77c7cc4f3fb"],["/lib/pace/pace-theme-corner-indicator.min.css","5e643e440fe399f14b53b3100aee5caa"],["/lib/pace/pace-theme-fill-left.min.css","1391eb04e55372aad1985bf561d85a32"],["/lib/pace/pace-theme-flash.min.css","63d54754d4ec534d14caecc53f8e30cc"],["/lib/pace/pace-theme-loading-bar.min.css","3eb1334039ff516a52e232754c921277"],["/lib/pace/pace-theme-mac-osx.min.css","acb8a4a8bc330992a4f24332b5dd2922"],["/lib/pace/pace-theme-minimal.min.css","4a87dfa15941bfb1854ae79c5157ae7c"],["/lib/pace/pace.min.js","2d158c6deb973fd3a4b06b5172009ccd"],["/lib/three/canvas_lines.min.js","90fe87b6ba25cd88843c032fba7d3152"],["/lib/three/canvas_sphere.min.js","0997a5e582a74c3c14ee6854161af37c"],["/lib/three/three-waves.min.js","ecdc916ab5bde424bb972082a2bfc7de"],["/lib/three/three.min.js","df1af05eadc536b3b79eeab31fc063d2"],["/lib/ua-parser-js/dist/ua-parser.min.js","c892d1566d81211c3282e58bc765b641"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6923f0d39d64dcf9e504d2367ac1b433"],["/lib/velocity/velocity.js","d8dc00ac1be76d3ebb14a36a35ed5025"],["/lib/velocity/velocity.min.js","18b7c84af9af11312d06aee86a1eee46"],["/lib/velocity/velocity.ui.js","47f11b8a35653756551ff5b897b60dc2"],["/lib/velocity/velocity.ui.min.js","1f4dd1f3f389a20709cbad14d1a25e9e"],["/links/index.html","6c64fb27077cd56f91e1b5c655df55af"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","60c82337d62d79fa6e99d85787b285f1"],["/page/3/index.html","368b285339b0b5219750229f197c6451"],["/page/4/index.html","8d6c321528579d43b75bd42bc4152628"],["/page/5/index.html","b16521e22e9d982f9188ea0f1200ccbb"],["/photos/index.html","bdcf7ca6dba9afb5920ce5d0de5c6191"],["/posts/191ddb73/index.html","bace137efa87e3a5605b550b7abbe1cd"],["/posts/1a195976/index.html","7448e7b6b018476855d42ebe671d85cb"],["/posts/2292f1af/index.html","0876c1fc3510ee5524f78107ca2a81e2"],["/posts/29d57d6/index.html","007481627b2e1375d4e34bbc6fe22a80"],["/posts/2fc77d95/index.html","fb86e5b9fcfee1673cc03dfb03a6bbcf"],["/posts/2feacaf4/index.html","611b4263e5a1ff495086933eed2d44c1"],["/posts/37f2c331/index.html","bd42f2c67875898de4282c7d1eb29303"],["/posts/385f0de9/index.html","bb3cb36286799502319940dee4a16d3a"],["/posts/3caecfa9/index.html","06eefc67cf05ed0df491a0453af59f8f"],["/posts/44414303/index.html","080205d3e746c3e4fbfde3535fdc1d84"],["/posts/456610d0/index.html","5e4b2d9a55d1929bab57a08c7f989670"],["/posts/45e51894/index.html","59c8f4c7a15edcdd864881db5b9edbe5"],["/posts/4f1131af/index.html","4295f065a74398088dad016bfa3d4170"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","9e9261e120f7f73d6aafddc95315cad2"],["/posts/517ebb95/index.html","651c5827dfed16f12379e2022521bd6b"],["/posts/53bf1d9d/index.html","67b9f2aa4fb8e10db7a280b64250feb8"],["/posts/554c2ba0/index.html","e2f330c472b702ecee5be5975250ab41"],["/posts/5f093cf/index.html","79c5b78df6c6eb01c286a735b48e9d73"],["/posts/63556f52/index.html","67d7dbfab83758ccc09c3155dddf52af"],["/posts/6d49ceec/index.html","3517867dfdac766ec319bcf42696a180"],["/posts/6de7d9db/index.html","a81d72de35dbd3a2c78559b7c0645355"],["/posts/6fda249f/index.html","01d78b6000744c76374d212e9d614ff9"],["/posts/72f7a359/index.html","19145865a151c29f3a94b43b6ee4e87e"],["/posts/759a6740/index.html","f1d1b21db5700331ce7a9c9c0f8841ef"],["/posts/84b87417/index.html","4d95e4ff329b422099e0f539cbdaa9f7"],["/posts/8a60fcb8/index.html","436ab04709ed62ec2be5acd1b18fba1e"],["/posts/8b4c253/index.html","f91e10b2dab084963a60898c8b247575"],["/posts/92912ddc/index.html","7f7810710a4624a4d8c722a7665a51a0"],["/posts/954f8e5e/index.html","7b77e84ce924074fc1e59b2879e2fc5b"],["/posts/97e5bc9c/index.html","e31eaf4ff653f5977b3f312f7cc5fb0a"],["/posts/9a5c7b64/index.html","3385915d633bad5f3cb87dfe85f2fa3e"],["/posts/9cf9c275/index.html","6b7c53e673507d32e6159df9c05a11e3"],["/posts/9f555f82/index.html","d8f1271990c876e350d1e04661a67c78"],["/posts/ac7d0231/index.html","a11282abcf8169dd1e5151a737b7827c"],["/posts/c311b112/index.html","a3b39133397ebb0b67fefb69f44f800a"],["/posts/c620d4c2/index.html","c451607ef48bce0f90dd5207eae8e4da"],["/posts/cfc54393/index.html","f78b3e32872a161296f7662a50867360"],["/posts/dc5155ff/index.html","d43e2ceacb734c686956719594f765c3"],["/posts/e1bd836e/index.html","f0f2fa476dc186c1f2dbc46838c97470"],["/posts/e248bec8/index.html","4d2f30ed25e84d007d19fe424e72d857"],["/posts/e31c0293/index.html","c731b33d69b7ba261255b497e1badb88"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","6d9b6d50d5870a56d846eb23a07b7531"],["/posts/f8073739/index.html","e6c0089a97d8af26b1592706463a33c0"],["/posts/f97ef43b/index.html","6483254ae98382bee517eeebab943980"],["/posts/fa84d5fc/index.html","f01a30fc7c547137905897de6efb335e"],["/posts/fb1ab942/index.html","75a410781051d17df377f617640d5f21"],["/sw-register.js","755f7712949fa22e0e27b861a66aedc6"],["/tags/J-pop/index.html","03e7e931c6c513c4b21ca90145b66130"],["/tags/index.html","c9f0e2453b899513164b6a2874eb1a70"],["/tags/ことば/index.html","d75dc505d0e9da45fcb385727a9bedb9"],["/tags/つぶやき/index.html","9b553a116c9153b33058ae977e6b2972"],["/tags/アニメ/index.html","3e84320f16810c4d6a94c344a6dccca3"],["/tags/インターネット/index.html","2bf2fb8a8a1f6d57fbcb37a3f85cafa7"],["/tags/チョコレート/index.html","f60379beb8906a8983a8389b55bfe3c3"],["/tags/中国に関する新聞記事/index.html","fac6aa7d55e37df3c8afc13e49f8c593"],["/tags/乳製品/index.html","ae37b59a20b7b87fb00773dbb0481718"],["/tags/労働者保護法律/index.html","7ad7f8421fc337963a29d52c87ca70a2"],["/tags/心理学に関する記事/index.html","9fca8a2b79cd27d79f93e97f1a52ec46"],["/tags/日常生活/index.html","54b488372f04bb6ed748f71170043e5b"],["/tags/日本のIT教育/index.html","4952eed9551a7a6efc1418a259a9ec52"],["/tags/日本のIT現場/index.html","0208d7bb464eebb0908ba97d240ce5ad"],["/tags/日本のビジネスマーナ/index.html","59bc8bd9d617e4ad97493dfc293b614b"],["/tags/日本の国内の人権状況/index.html","677cfe802c3ac6837181bc7c2e7364d8"],["/tags/日本の経済新聞記事/index.html","28079da0283496f82349b1534f5351e3"],["/tags/日本地理/index.html","31917cae78541e4d5626217f62a04caa"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","a8837488388dab6d895a514298d76940"],["/tags/過酷な現場/index.html","f85c14ea834158f4752eb43f49430189"],["/tags/金融/index.html","f88ff7d2c5221de18a6decc07f3bf7be"],["/tags/食べ物文化/index.html","9519847ee6abd9bd3c41e4ea38d60ceb"],["/tags/食品工業に関する記事/index.html","2d7d0d7b98af122b8080164d04bf5a48"]];
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
