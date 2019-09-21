/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","6856e214280cc566bbcf1743361e0fb6"],["/about/index.html","198f3e41adb080a17eba9bf4df33225b"],["/archives/2019/04/index.html","1e48e3848d9744bf5f27945cac018c71"],["/archives/2019/05/index.html","7f5d134968eba6d121ada73a05430349"],["/archives/2019/05/page/2/index.html","9a1f6443a63f6c1944c15687523e36e8"],["/archives/2019/05/page/3/index.html","253f31347cffbc42feabf0eb49b01ba1"],["/archives/2019/06/index.html","f4430871e84d6c853a026e3a81c2e88a"],["/archives/2019/07/index.html","6f442dea899adfa9d1dbab9a7f5c974a"],["/archives/2019/08/index.html","10216ad33ed83149ccd13f85c95f424c"],["/archives/2019/09/index.html","897f5c802fcb92ec45668e555097d6eb"],["/archives/2019/index.html","b9adbeb2a29e6f7597819e5e8cc4d330"],["/archives/2019/page/2/index.html","dc569b1d0024659e8dbb4ddf658eb14d"],["/archives/2019/page/3/index.html","09b117ec2c5948e7495a900a7880258b"],["/archives/2019/page/4/index.html","754cafde7127987f14ac4aea451eee25"],["/archives/2019/page/5/index.html","3da9fdea75f6930ef77df92115b03493"],["/archives/index.html","01e1b1f075043c1d429eb15f1a0c3240"],["/archives/page/2/index.html","ddb3585b14440dc3f06978dd4ae645b5"],["/archives/page/3/index.html","c3aaa7484dbed17478846e60f16e3ba3"],["/archives/page/4/index.html","3543e86127158b1565b641c824b2ed91"],["/archives/page/5/index.html","2f316c0aad84a0eee51e4eeff0ebf419"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","4a9fcd37f41876acbe666d815081c538"],["/categories/index.html","f305748198106f6ae6256ab930e41d6b"],["/categories/ことば/index.html","b987f9c263fa580c79d7494eeb5a1f8d"],["/categories/つぶやき/index.html","66f9e4ada4d974d8925ed282e18dd816"],["/categories/アニメ/index.html","95ca517789e5a2fa5305a7f169046db5"],["/categories/インターネット/index.html","72d9c9d79a878ef35fbf1c38085fc184"],["/categories/中国に関する新聞記事/index.html","94d48e5395a42a6fd76f52ca72ef2acd"],["/categories/労働者保護法律/index.html","9d2c217ae9864312fab0d30ea7403660"],["/categories/心理学に関する記事/index.html","14e6bb3b660f4f4436c477c83e4faeba"],["/categories/日常生活/index.html","b0d55a8999aea3a70bad7a631e5e9c3b"],["/categories/日本のIT教育/index.html","6f766c9ec11b5e10bc4c4d6a17a6da58"],["/categories/日本のIT現場/index.html","0ebafb0ce060756d7ec03af91f1e551a"],["/categories/日本のビジネスマーナ/index.html","92abd9d1babd438de6a8f6de5430aa9c"],["/categories/日本の国内の人権状況/index.html","924a7dc3b21bd8b1edc072de1ec01696"],["/categories/日本の経済新聞記事/index.html","539fbb3ceaa614c3fe14d4dda95344af"],["/categories/日本地理/index.html","1cede8563945940e3e6bb9abdd2cfef3"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","df80b39f7f1fe400d5bbe2c92aef9ed2"],["/categories/過酷な現場/index.html","d27df5ee47bd84f8ab78a9f264c4402f"],["/categories/金融/index.html","8a4ebece98d5f942ee5c103c8e1ceb89"],["/categories/食べ物文化/index.html","cb7a59d45f1d831bbd8bf19b0a5765a6"],["/categories/食品工業に関する記事/index.html","21d1f9b6cbd31bbce4992ad3428d1513"],["/css/main.css","48732d0d58e4c85135df79bc0945e4da"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8871bf5584ca5002abbc6a0dc06a1224"],["/js/src/affix.js","0e39c7e174df7d3f4b9f4cc8de39e485"],["/js/src/algolia-search.js","21c0f3b7ae5190c54dd9dce07a63d747"],["/js/src/bootstrap.js","3402b900d289582d78f9755618008497"],["/js/src/china.js","b0ecc9dc14e88155e040fb551f731992"],["/js/src/echarts.min.js","6f6b2c789796f37a37cb79729e0a252d"],["/js/src/exturl.js","ee8b659c8b5c168590c529c800a153a1"],["/js/src/footprint.js","ee190b3b9a17b5eb3b071f65109fc37f"],["/js/src/hook-duoshuo.js","8c1cf6a3bdfb300aa4d64f855aa5ecb8"],["/js/src/instantclick.min.js","ff61e9901966c4a5919f5586a28cc46f"],["/js/src/js.cookie.js","17bf88a79352fc42503a77d3ff2e736f"],["/js/src/motion.js","4a820696a13aaf25f7a7dbf7358c2427"],["/js/src/post-details.js","ba3828118d4b528850a56e6d25ff74c0"],["/js/src/schemes/pisces.js","ab021004517de4c5834d929e95720539"],["/js/src/scroll-cookie.js","2278c37b797c8d3059039384e90c9af6"],["/js/src/scrollspy.js","9106652a58a0cb8ccf3413d3e41638dd"],["/js/src/utils.js","3542ee1763d1410535cd97dc24f3a71d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","8f34e09f18d68a944431690f285d05ee"],["/lib/Han/dist/han.js","1c64f7e0abf97cd731a5471a48d8f347"],["/lib/Han/dist/han.min.css","4d1988c572552435a0f80b59f43ee3fc"],["/lib/Han/dist/han.min.js","d3090448c79e7911c7cc2638b1cdd50f"],["/lib/algolia-instant-search/instantsearch.min.css","426796175ac6530acc06598101aaceb7"],["/lib/algolia-instant-search/instantsearch.min.js","4c9f649d56895e86feca55b1d68cad16"],["/lib/canvas-nest/canvas-nest.min.js","b09b313633591081d07f2a483cd01853"],["/lib/canvas-ribbon/canvas-ribbon.js","af781fa06d221e1137e9b3d3eb1b7401"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","8b2ed64dc5d1225653edf61d48105b56"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","273cbc04b3a5d16b90a6dae0165f8438"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","1a42adb74f7980c6d62822df17b4fad2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","66e185fb1064b0cb12fa753c7d37db02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","8cf4f0ed3e7c1f6a0b231eb07183b46d"],["/lib/fancybox/source/jquery.fancybox.css","6648ab31d5354348655b17a181c847b8"],["/lib/fancybox/source/jquery.fancybox.js","1d1a505163c26bff7b167a6aa3b62845"],["/lib/fancybox/source/jquery.fancybox.pack.js","eb74264b6278eeafebf68c24978b0417"],["/lib/fastclick/README.html","29c7690125c187c313e427b670e44662"],["/lib/fastclick/lib/fastclick.js","a65e5697210eacea3860e98e81b8039e"],["/lib/fastclick/lib/fastclick.min.js","b815cc63d73e517aa49720d7aec4b37e"],["/lib/font-awesome/css/font-awesome.css","6586c0e1f432946feb32d81cda5ad420"],["/lib/font-awesome/css/font-awesome.min.css","6586c0e1f432946feb32d81cda5ad420"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","33e18de87d7f3ef8d5b8d548ea7c97a6"],["/lib/jquery_lazyload/CONTRIBUTING.html","7b0cb49031e286f0cf8a73b21f233e73"],["/lib/jquery_lazyload/README.html","9fdddb4be88788dfdbce05e52a45d0ab"],["/lib/jquery_lazyload/jquery.lazyload.js","4b28f7dc8652f02e04c6920d044cdf72"],["/lib/jquery_lazyload/jquery.scrollstop.js","511ce77159174778cb9e294263ebc32d"],["/lib/needsharebutton/font-embedded.css","bb38a40622f3f6e48155974f717c5cf0"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","5d6a4632275608cbcb38720a1ebc5c45"],["/lib/pace/pace-theme-barber-shop.min.css","99f8e4b789e86b3d7a920743817862dd"],["/lib/pace/pace-theme-big-counter.min.css","49e6b2f841cd6845dbcc22078e2df595"],["/lib/pace/pace-theme-bounce.min.css","0fc03c9df7856dbd09df7f81a0940ffd"],["/lib/pace/pace-theme-center-atom.min.css","34b90284dee04019e7131169c188fbd5"],["/lib/pace/pace-theme-center-circle.min.css","8c36abff5dbda88556395214c300f798"],["/lib/pace/pace-theme-center-radar.min.css","5b3d66ae7f521837df74636bc30fac15"],["/lib/pace/pace-theme-center-simple.min.css","fc32b12b38739e8ad4c77495f74b2214"],["/lib/pace/pace-theme-corner-indicator.min.css","96435ff0d54e6ff66dab5008e1a49106"],["/lib/pace/pace-theme-fill-left.min.css","1f76977c12704f0de1a7b86aaccb9350"],["/lib/pace/pace-theme-flash.min.css","ecf48b1f79034b94a6e2d81f391af9ae"],["/lib/pace/pace-theme-loading-bar.min.css","d43d6c20f3d7286ee3a540d6d4552bab"],["/lib/pace/pace-theme-mac-osx.min.css","4e18d6f5e97e76772347f9ab0707eb5a"],["/lib/pace/pace-theme-minimal.min.css","0524393475b75ce7f926b872741d4aea"],["/lib/pace/pace.min.js","ef6bbcfa8232435af189cb8dd391fc1f"],["/lib/three/canvas_lines.min.js","2933f884b5c7696eb09e40623d8f8ddf"],["/lib/three/canvas_sphere.min.js","490062227229287d085cbb3379caa66e"],["/lib/three/three-waves.min.js","169f7adda059000ddb6709da7c3d49d6"],["/lib/three/three.min.js","d11d04ba96404e93eddad51f36c7e30f"],["/lib/ua-parser-js/dist/ua-parser.min.js","8caf85511cc72aca4f5f34c9363fa60f"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b86d65101fd887131e35ecc8b9e179bc"],["/lib/velocity/velocity.js","55266dddb79f8dd394a53b102b25a6dc"],["/lib/velocity/velocity.min.js","b21fcd3510a8e0001f035d3531e731a4"],["/lib/velocity/velocity.ui.js","17392da3746eab3f68765441f29c1875"],["/lib/velocity/velocity.ui.min.js","cbf699d2c6d9d1dd43de6825740a7875"],["/links/index.html","54e2bb407e1fff83bb578ec23acf8720"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","3eb6e3f34ca92fedcec18632acb1bced"],["/page/3/index.html","34a6cf09e3e113c15f563e1ba4225c45"],["/page/4/index.html","b538b02ae487a0c34669fb87cdfffcbf"],["/page/5/index.html","d9a876ea378aef91ed68a2fe216ddf85"],["/photos/index.html","26a374104066eb920d39daa5ee687b10"],["/posts/191ddb73/index.html","a57bb1ab88e9c099369e1ca5929932b0"],["/posts/1a195976/index.html","359fcc3b3d72a7a296af74f73fbd263e"],["/posts/2292f1af/index.html","00f0f183b64246a6b0b56f6a4a03aafe"],["/posts/29d57d6/index.html","0511aaf88acd4cfc239ea4596f5ca86e"],["/posts/2fc77d95/index.html","e631e1bdc3659fc8ff9013106366bc50"],["/posts/2feacaf4/index.html","1251333368fce9e857d0fb63b9aeed1a"],["/posts/37f2c331/index.html","db294d982ac21acdc5f88383bffa44d4"],["/posts/385f0de9/index.html","01854eb53e697e4270c2a8dea7ea58e2"],["/posts/3caecfa9/index.html","01cb9bf2df18a81a56d7453de213589c"],["/posts/44414303/index.html","32e4a600144b3f148a376e698b42e2a2"],["/posts/456610d0/index.html","1bc027d2837e7b800349aa2949c0e167"],["/posts/45e51894/index.html","c3f3170e852674c89b18ba6a1e4e5e46"],["/posts/4f1131af/index.html","34edc0625b6d3e03a953b8b01a5f96e9"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","e28d2464b96b28800095a4c2896227e2"],["/posts/517ebb95/index.html","25aee518163cb52ceb47df3d8b3f6412"],["/posts/53bf1d9d/index.html","43a09e5120399858fee67eee77ad6fd5"],["/posts/554c2ba0/index.html","f39bb0ef02559e09661bdc27cb716d2f"],["/posts/5f093cf/index.html","62870bb2f07a6f6e698229cbb60a8dd6"],["/posts/63556f52/index.html","f772f954c8a5c0a662939b1a960f7163"],["/posts/6d49ceec/index.html","29f8afd976a9fa13b3a1dd98872bda4e"],["/posts/6de7d9db/index.html","ec69df0ce9a729f84442382085ed8bcd"],["/posts/6fda249f/index.html","845cd84526df0d3ccbff4e40739163cf"],["/posts/72f7a359/index.html","c1787ae4b7b0c7c5124a9a16ef79accd"],["/posts/759a6740/index.html","c2310d55817730e4a7b7b8a911acc65c"],["/posts/84b87417/index.html","adf04826d4dbe89c589ba54a0b44aa72"],["/posts/8a60fcb8/index.html","8662bbb7bd80c61a42fb047734a48a9e"],["/posts/8b4c253/index.html","97c2487cb1be8fb6340f16320e8a34b2"],["/posts/92912ddc/index.html","8a5750baabee28c523fc45fa8fea87f1"],["/posts/954f8e5e/index.html","c092521a6d743c080b2c5315884b71d2"],["/posts/97e5bc9c/index.html","b216a1a2996894030954c90e26731bbd"],["/posts/9a5c7b64/index.html","fb7d0ce00f76bbc88f7ce42826dd7a15"],["/posts/9cf9c275/index.html","c607a3238b60955ae4ef9cebdf2ecf12"],["/posts/9f555f82/index.html","6a97c399d829e12535e20a98890f86f6"],["/posts/ac7d0231/index.html","0f0174f22f8eb290ddd6fb0d22eba765"],["/posts/c311b112/index.html","4d6e9721deae38256d390129c06c3535"],["/posts/c620d4c2/index.html","b142519e3cac9a7dcecbfb96bb5334ca"],["/posts/cfc54393/index.html","4e6e275a9c2f9f3950e6569507c8df07"],["/posts/dc5155ff/index.html","ba0f26c8c004431feaeb7ba3e5b66495"],["/posts/e1bd836e/index.html","1d73fbaa1dded2dff3b5c2a6106d49fd"],["/posts/e248bec8/index.html","1896cfab24e4b0efa8c0128f5e04488c"],["/posts/e31c0293/index.html","5b37f833245833431460f695d47759c4"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","e64961d07d0c22029afb7628d9eec8cc"],["/posts/f8073739/index.html","fd1004da78eb784b126449e2ae51b190"],["/posts/f97ef43b/index.html","ed6c7c575ba5b9c6502b5af15cd98989"],["/posts/fa84d5fc/index.html","ee533295df05c48f2e849cc354d32842"],["/posts/fb1ab942/index.html","1eceb1196add0325fdf6ee8721ff28d2"],["/sw-register.js","5f4cde71ee47faab6b72935b9c263f63"],["/tags/J-pop/index.html","c1791802fb52b809d809c2219590901d"],["/tags/index.html","9b53ecd76cd0231676947d294a40c750"],["/tags/ことば/index.html","f996d700830b1acbd32dd121b21ff5af"],["/tags/つぶやき/index.html","974b2934f5fa94c6aa2c77b69d4c3781"],["/tags/アニメ/index.html","ede75b12458132590124c89a9a1bb06d"],["/tags/インターネット/index.html","517d16e28bc2f4a621e56c7eda91b9e1"],["/tags/チョコレート/index.html","54a7704c92e880b76bb6850f5fcf347b"],["/tags/中国に関する新聞記事/index.html","295ffb108b9bd8b5525bfc5051bb244b"],["/tags/乳製品/index.html","0099b1c2b5f50f556971969fc0c148a0"],["/tags/労働者保護法律/index.html","e96d485cdc88dc58b18dd7bb1a1aa8cc"],["/tags/心理学に関する記事/index.html","d912c7227e02dee473404ed309add560"],["/tags/日常生活/index.html","796a3b531e734a9fae8cd831c2886d1f"],["/tags/日本のIT教育/index.html","0634dcb6f3df8a255fa9c0fdd7ff4498"],["/tags/日本のIT現場/index.html","4a17e5db8eaf8417503377d0baeaa039"],["/tags/日本のビジネスマーナ/index.html","8e21afa19fdbf9e73ada9f4fe6404e31"],["/tags/日本の国内の人権状況/index.html","6522e3dcf76f8cfb31c999922f44724c"],["/tags/日本の経済新聞記事/index.html","15f841ac61970f1b80826a22ebc18465"],["/tags/日本地理/index.html","ae85ea927a69e65611409b21a32cfa37"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","0265a3e08b2d709dd1d179d319e495d6"],["/tags/過酷な現場/index.html","82886db001d98e9e4c871b37c36ae13e"],["/tags/金融/index.html","1967f95a7c0796ae0fa71202c05b3d9e"],["/tags/食べ物文化/index.html","b39aefc61e2c9dceaa13ea7c739d2270"],["/tags/食品工業に関する記事/index.html","5a1b940245229d4a4942963d8087df01"]];
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
