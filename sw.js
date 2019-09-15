/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","05b9d04c51c84b3fe469b58cde436a08"],["/about/index.html","e3de01dadcff6d27f5a03683bf64b015"],["/archives/2019/04/index.html","16f8a9c1058a91bfb941255304c25705"],["/archives/2019/05/index.html","a170776284dfba9ec0dd931fa54c3b99"],["/archives/2019/05/page/2/index.html","82ab7eedda5f3bcd2851eceb7cf374b6"],["/archives/2019/05/page/3/index.html","9293542ada3a66d3444ac5f865e6eaec"],["/archives/2019/06/index.html","1328d2605f133effd82c7be7fda90023"],["/archives/2019/07/index.html","bdea9047410f7647653f64f48e3fc1c5"],["/archives/2019/08/index.html","515fb4e54d24241c9e601fdbbd45ba6d"],["/archives/2019/09/index.html","bfb2b196612271ce001289f5d5b80a72"],["/archives/2019/index.html","db0c2925a13cf415aca94fdb6537ac33"],["/archives/2019/page/2/index.html","b5850aee22aa07194db95e54dd424dde"],["/archives/2019/page/3/index.html","ea5b31b899b1bb3fd883f2e56bfc1458"],["/archives/2019/page/4/index.html","e2bc3e87a834b5de8439d4ff6827b615"],["/archives/2019/page/5/index.html","6a7bf59db5c86451dc6f89412221f12f"],["/archives/index.html","0fd17d55cc2ea9cb936fb17798b5ed6f"],["/archives/page/2/index.html","d3e7dd81bd3e02b7c8b08bd47032708d"],["/archives/page/3/index.html","fd1c2720ac2322534e7277f98ddb04e3"],["/archives/page/4/index.html","916e4a7e3f3081eb7e4df93c3950e810"],["/archives/page/5/index.html","2a9c15ff68fff7be5c4fa81c70c64d4c"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","de766f502dfa113c0e35a7f6775b071d"],["/categories/index.html","801c6e8590a01b2a55dcbb10987dc0cd"],["/categories/ことば/index.html","bd0124faec4503deec1be482ba714e72"],["/categories/つぶやき/index.html","922d1eb02903c91e2d08f52300a9d885"],["/categories/アニメ/index.html","3d73c87f43a6e3c609d158e3048ce5dd"],["/categories/インターネット/index.html","a9151a32ac653c6915641f99a08bdf56"],["/categories/中国に関する新聞記事/index.html","66012ff4271beb6040e66a2dc53d0d25"],["/categories/労働者保護法律/index.html","75588cf95dc90078ff680a806fb02702"],["/categories/心理学に関する記事/index.html","837611b63c88d35021952b85d3e1a95a"],["/categories/日常生活/index.html","8b25e3f8edabf5adc450a1babd0fd9f6"],["/categories/日本のIT教育/index.html","dfc7b509ed28fbf4f2769c9578ea3b5a"],["/categories/日本のIT現場/index.html","6aa25c32d4c51ff9166fb65ccd17b178"],["/categories/日本のビジネスマーナ/index.html","f88cce7ccb1f86a50fd9b6691e1879b2"],["/categories/日本の国内の人権状況/index.html","262279aaad54e3a86839cf50c7c463f9"],["/categories/日本の経済新聞記事/index.html","b19268261ccd753a1808a9b5867c29fb"],["/categories/日本地理/index.html","5d9bbab1fe46562d01ee0fa0a231b9f8"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","98a3815f8683c218ac806f1718b32590"],["/categories/過酷な現場/index.html","c0fc93a30524b5f61776f7d0c8976e45"],["/categories/金融/index.html","03da1992df2c6b45753d76851f93e458"],["/categories/食べ物文化/index.html","519ad67f5bf5822e42b382e6f0d4ba9f"],["/categories/食品工業に関する記事/index.html","680a26eefc2bed9609d68bd69f986c45"],["/css/main.css","2e3bc7eceac1255bfecddc8827e7d359"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","1c5bb2db72726b26f9137c4720724ce6"],["/js/src/affix.js","6a7922a379f0c25855bea9ed10c7b5c2"],["/js/src/algolia-search.js","48e4c0eadcd792b0fe6021a0a80bc839"],["/js/src/bootstrap.js","14a219a2029ad38cc648bc135c89e768"],["/js/src/china.js","6bf1f2783994c9b4512762f4b15457d7"],["/js/src/echarts.min.js","4d5366c5e29d7bb756b0bf79a7f48515"],["/js/src/exturl.js","043d42c821f072177ca22f57e0560584"],["/js/src/footprint.js","31aaa427dbf6f7f3ca5b29a22d71b243"],["/js/src/hook-duoshuo.js","eb4a40bd1e74d37338dfb48c21b62d45"],["/js/src/instantclick.min.js","19683e1499f85351e76e46c42f224b46"],["/js/src/js.cookie.js","f1ec669fa57a8ad10adea9f9cea664f5"],["/js/src/motion.js","00910f6486f597edfb8fa859770329fb"],["/js/src/post-details.js","2649c2d5ca6ec4c1c1f73c32cc6e5de1"],["/js/src/schemes/pisces.js","4f3dc9c1386315d8e7bd8ab9728df6a9"],["/js/src/scroll-cookie.js","7dcd90500ef3850b6da7003129be2266"],["/js/src/scrollspy.js","f50bcca5a3f9c0f0b7410c7855def46f"],["/js/src/utils.js","2a2f735028f9ac0b5c6206f5fbb08a86"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f959fb21705eb4a21cb0242ee5dda4c1"],["/lib/Han/dist/han.js","4d034025bc252411a6410959b5489d3a"],["/lib/Han/dist/han.min.css","f2aa5e06aa5de75384cf2a3a4b96ce57"],["/lib/Han/dist/han.min.js","0295f21801fd227f76ec2ab2d1448593"],["/lib/algolia-instant-search/instantsearch.min.css","472c73c08cd0ae5ea129b6f3ed448f50"],["/lib/algolia-instant-search/instantsearch.min.js","21d302af8d5fd728451c4f5b4005da1a"],["/lib/canvas-nest/canvas-nest.min.js","81083249060c44a948bb8a65d768d90e"],["/lib/canvas-ribbon/canvas-ribbon.js","a38803cdf7268ebbf41737a642f09fb9"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","9b9ac072098fc0384b8e03ad27580549"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","32ccc92beadde4649e8dfbb37a590389"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f3c43ccbca468f0abea6957d333fea95"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2f7f9f78bc1f30f18e42fb784c32a4f1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5f533c2521a1ae157352b7cc8e81fae9"],["/lib/fancybox/source/jquery.fancybox.css","6f3a001950de7504ab1dbb713ed0a245"],["/lib/fancybox/source/jquery.fancybox.js","6acea158c50737f2653a860c132d015f"],["/lib/fancybox/source/jquery.fancybox.pack.js","dcecdf17c8f7f991561f133b684b3ecf"],["/lib/fastclick/README.html","76dcf5349436256ba77559455ee2bace"],["/lib/fastclick/lib/fastclick.js","82d514896e6eb06bc2b8fa580eca4df7"],["/lib/fastclick/lib/fastclick.min.js","eee62bb691fc8d3fb67c6f48625fa104"],["/lib/font-awesome/css/font-awesome.css","d2d7382d9ac88e89ebba7487e64594b9"],["/lib/font-awesome/css/font-awesome.min.css","d2d7382d9ac88e89ebba7487e64594b9"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","98f99fa74650944348e088f550632d98"],["/lib/jquery_lazyload/CONTRIBUTING.html","49c742864f240eb6f3503d2a414f60e4"],["/lib/jquery_lazyload/README.html","b8b47420c8cf80c1c81859e9686394e0"],["/lib/jquery_lazyload/jquery.lazyload.js","e9456ce462e8ec8abe7111d656ec652c"],["/lib/jquery_lazyload/jquery.scrollstop.js","e4877dd42437ab15cf2d7dfc649ee974"],["/lib/needsharebutton/font-embedded.css","608fcc4dc1b5f3891460bec60bfa5812"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","29eaa45ddba82e565dbf9dbc4b241b68"],["/lib/pace/pace-theme-barber-shop.min.css","753dafb720c60ca45848585d82903784"],["/lib/pace/pace-theme-big-counter.min.css","a6de5f44e83a1e26bbe14ca0cf2f118d"],["/lib/pace/pace-theme-bounce.min.css","a9b26e590da20e212da6fe5fb637b101"],["/lib/pace/pace-theme-center-atom.min.css","cbd177ae66714b6f511fadec0c6e995f"],["/lib/pace/pace-theme-center-circle.min.css","8f0e3b3309445b29543097d3e2b9543a"],["/lib/pace/pace-theme-center-radar.min.css","3d3ebdecd536692c46d0d3d357d0c229"],["/lib/pace/pace-theme-center-simple.min.css","f80955f836403e39fad672986c86baf8"],["/lib/pace/pace-theme-corner-indicator.min.css","d5aa439e97c43d276ff69e49482fdff5"],["/lib/pace/pace-theme-fill-left.min.css","a58b145c64afa29073a568b732b06c8f"],["/lib/pace/pace-theme-flash.min.css","fa4afa877854de07928da61fd7190bd4"],["/lib/pace/pace-theme-loading-bar.min.css","3ada64962b46291e9e1c9d379351e157"],["/lib/pace/pace-theme-mac-osx.min.css","7e398a8fbd1d4a6965b115a3b629db65"],["/lib/pace/pace-theme-minimal.min.css","7863e7a2f4a95c3f91e81c0efc0cb544"],["/lib/pace/pace.min.js","9577aa56a8b44bad5fd5be7bf06feef1"],["/lib/three/canvas_lines.min.js","6e7b182b371a4e23c4bec2b7e46d4c45"],["/lib/three/canvas_sphere.min.js","da8c83e00d9e5cd116c9e6e99fdb4953"],["/lib/three/three-waves.min.js","78d488a722df1d9a6cb306f34267658b"],["/lib/three/three.min.js","b180170a9f3997ad119ea2176e47559c"],["/lib/ua-parser-js/dist/ua-parser.min.js","e5e7333584412cb9427fe5a78bb7e9a4"],["/lib/ua-parser-js/dist/ua-parser.pack.js","abfb7e0aec9161ae33fecd7195016d71"],["/lib/velocity/velocity.js","357e367fba81ea9e4bee1f75b0ca34fd"],["/lib/velocity/velocity.min.js","c76a289bc65f33395b57bf970f6bec14"],["/lib/velocity/velocity.ui.js","c706ff601931168a19157288282bd552"],["/lib/velocity/velocity.ui.min.js","b9ab0caf2d9cc8f8cacfed354ec6b505"],["/links/index.html","386c43f03365d6567d0067f8c0db9f57"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","8490846de912faa6d29b717a609e3d5e"],["/page/3/index.html","54cc919f9d6bd426d9d5cf9bd931c97f"],["/page/4/index.html","7e0fa2ab6ef0dcb8311d11d8f67d903a"],["/page/5/index.html","cf4b54821c8a153893a28c39967bdbca"],["/photos/index.html","b4bfba8ba15d5c9f3db0ab0f4adf3c5c"],["/posts/191ddb73/index.html","81005b4e89196f5675ef68d0ad39d0b6"],["/posts/1a195976/index.html","3f2d020faea1fa198a1c1591956dd80b"],["/posts/2292f1af/index.html","49031052bee551a85eef67d97ceba2cf"],["/posts/29d57d6/index.html","89eef1a3a3b8aad73dd5998d5c396c0a"],["/posts/2fc77d95/index.html","9376be1c9c8e01b569b040cd5b237750"],["/posts/2feacaf4/index.html","cb69a1bf158460d78165a67a3973d13d"],["/posts/37f2c331/index.html","345cb68b25e5df47af6a3a7e912f05c5"],["/posts/385f0de9/index.html","8b9f855d31f5c34fb4b0073023f4a488"],["/posts/3caecfa9/index.html","92b731c75180aaeb4b849cf1131d198b"],["/posts/44414303/index.html","b871bbc9c69c02b10083ec692f6dd9d0"],["/posts/456610d0/index.html","194213783e69b4a55382b122b959578a"],["/posts/45e51894/index.html","717166a3c89f08bff1cc87c9c2506afc"],["/posts/4f1131af/index.html","d5974be37ca3e3f163441c15d5b8d077"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","4a8b026ad8f278294bed33844b29f6ab"],["/posts/517ebb95/index.html","6182141527965b64b9afa6992c6b87a8"],["/posts/53bf1d9d/index.html","182d4a2754b158cf5db387452f807563"],["/posts/554c2ba0/index.html","9db7781427f777f9f23b0385416443ec"],["/posts/5f093cf/index.html","fb4fec5e9d839529a9eba1c923548e06"],["/posts/63556f52/index.html","61f86e2a8bc42307bf7a649b49636f98"],["/posts/6d49ceec/index.html","3d0257368e4494ca84808882fbb1a63d"],["/posts/6de7d9db/index.html","412fd27f0b2dfe94ee3c07bc540b7156"],["/posts/6fda249f/index.html","ebf57ab8bfb0349b37448f1c7489c8e8"],["/posts/72f7a359/index.html","fde849ba91fcea91918f29fc8b5cefe0"],["/posts/759a6740/index.html","d4d6ded9e540825a2c1f3329d8efd1a5"],["/posts/84b87417/index.html","1cbdcf72572aed7c3f7efa9a10c62584"],["/posts/8a60fcb8/index.html","827662b11fedbcae5cc8007fb33f57fb"],["/posts/8b4c253/index.html","d5667a58cfee3a9b143356c7687dff8e"],["/posts/92912ddc/index.html","1a0bf035a70660e9407ff40bd60841c4"],["/posts/954f8e5e/index.html","439d92c4efaa4580d1fa894f9704ac17"],["/posts/97e5bc9c/index.html","70c399cf2760197ebc477be5a5e815bd"],["/posts/9a5c7b64/index.html","107e7c2def9d0ebb53a7552100c51b27"],["/posts/9cf9c275/index.html","4315fe0b599aad4a8c68fbbd5669bcf5"],["/posts/9f555f82/index.html","02c32a5f6486790bf643cd704e072e15"],["/posts/ac7d0231/index.html","b32afb147d7c99b74f615b7704e992e5"],["/posts/c311b112/index.html","803bea57ccc2a7e2ff303cf7c77a04d3"],["/posts/c620d4c2/index.html","76c805a956bea51a6bdaaa43fac80384"],["/posts/cfc54393/index.html","4a9af2b0775056833f6d74a323c26eaa"],["/posts/dc5155ff/index.html","54b7716ed5651c51763af6d2dd1727f4"],["/posts/e1bd836e/index.html","b56404d5b9c2ff55e351248565e15591"],["/posts/e248bec8/index.html","17960d830da4466b4f82daa738e09f6e"],["/posts/e31c0293/index.html","7e6d4a3cd24915ebf5124afa1b851965"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","c8ed3aacb89dcaca0d36d1fab2c75966"],["/posts/f8073739/index.html","6fafc3a6758c5adbd928529653fce253"],["/posts/f97ef43b/index.html","c2869fedaa86fc36010c7c6d793813d5"],["/posts/fa84d5fc/index.html","1c4f8b3e8cf0f0564294bb0f44580b16"],["/posts/fb1ab942/index.html","fef1f7cb2f62d7a1374aeffd3accc795"],["/sw-register.js","fec7fb01f9aeed2728b4602f9ed13285"],["/tags/J-pop/index.html","977d1b0113a1fd8eb81e142fcfe9ba91"],["/tags/index.html","56ea8f7fb6fb005b849ba06bb580490a"],["/tags/ことば/index.html","c23df2d9d5b7f555c33a0a74a37a71b5"],["/tags/つぶやき/index.html","beb969b16a8db88a0f8f5ce3907342a4"],["/tags/アニメ/index.html","f34d1f35d997fe89ba9037885d17645e"],["/tags/インターネット/index.html","5c5ef09fc5bdfeace4e0cb51b353489c"],["/tags/チョコレート/index.html","6f38565cacb6669298c91e3054525378"],["/tags/中国に関する新聞記事/index.html","45af3b37a0f0114381d4a02511a2606c"],["/tags/乳製品/index.html","cf19a77cf68db009295cfa4e80896a4e"],["/tags/労働者保護法律/index.html","39810393d9e618d330a619e879af275c"],["/tags/心理学に関する記事/index.html","22c4b56c8d49ac9c64a6ba78629d07e5"],["/tags/日常生活/index.html","5bacaf782daffb0c39f9e30780fe1536"],["/tags/日本のIT教育/index.html","b9ed5a6bc2f4cdc25f6cc8adb904d655"],["/tags/日本のIT現場/index.html","c1be5604ad9b0a20b2940a8f4315138e"],["/tags/日本のビジネスマーナ/index.html","75777ea57cd91453dba3c52768e4c483"],["/tags/日本の国内の人権状況/index.html","86b6a3ec1ef8cd35d71fdde3dedae348"],["/tags/日本の経済新聞記事/index.html","3e720f4a7ac25f9ef7a452f60f253bfc"],["/tags/日本地理/index.html","b67f4f2e4f40c54823feb395a1fdedc9"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","0bb2242596740c217ddfcc66e7416bbc"],["/tags/過酷な現場/index.html","7ea4bf5b3149765744b490367d1bd509"],["/tags/金融/index.html","6af4f5b4f58ae10e5afb1db17a263edc"],["/tags/食べ物文化/index.html","35e475e8c36725536bf80609399d7f7d"],["/tags/食品工業に関する記事/index.html","827f6a54d3e2cd52d570c9b149fde2d9"]];
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
