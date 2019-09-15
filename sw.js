/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","d993a1a7a01e5bbf7a2f71e206d2c0f5"],["/about/index.html","15b418c5a580af9868963959febe9c15"],["/archives/2019/04/index.html","b24b1ca288f3cb6c284a994a5821d0a4"],["/archives/2019/05/index.html","bb479f08464f4c1620bda3313179565d"],["/archives/2019/05/page/2/index.html","ca676ac19e77dc732e01f2237154151b"],["/archives/2019/05/page/3/index.html","e78e7602b060b2efff65c4986c2bb7e1"],["/archives/2019/06/index.html","8e6f3aab559e7b07da4a53ad7630ab27"],["/archives/2019/07/index.html","edc8b8a896edf6bc266e8d0764cdec98"],["/archives/2019/08/index.html","d53d204653d34b5e0fe074b4034d60d6"],["/archives/2019/09/index.html","b16464edb51eb5cf19b8f05ad798db7c"],["/archives/2019/index.html","dc94dc587e840c9bd8de166ccc55898b"],["/archives/2019/page/2/index.html","541547eb198b7c5ae70eb6b784a16ab6"],["/archives/2019/page/3/index.html","4a164ac6c238ef3653bf556720d34fa7"],["/archives/2019/page/4/index.html","4faa760b8c78475895a79640473ad25a"],["/archives/2019/page/5/index.html","8a8eaba19e8990e93a06eb421b9331ab"],["/archives/index.html","d1714635fa2293f340e722def9578347"],["/archives/page/2/index.html","4245bd1e6ee72b6610ca5aab00556591"],["/archives/page/3/index.html","e0c8ce58d4062ca18d88c5f8e1dbd3db"],["/archives/page/4/index.html","eaa182eb0377504d557f856b905c7c0b"],["/archives/page/5/index.html","6fa53c91c20bfcd033fdbc4a7513e5a9"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","06e2bdfe0f300db052b014c4e993a84d"],["/categories/index.html","b78b4dc0503cef4f9618cd68aec97c27"],["/categories/ことば/index.html","c34ae4cc2270a43ada2934e09275bf14"],["/categories/つぶやき/index.html","33afc5f22a5eee7377796f30377253d1"],["/categories/アニメ/index.html","572a90032176e31ec113f323ef787dae"],["/categories/インターネット/index.html","5d027d581a263ca4c9d6f98bbd233ae6"],["/categories/中国に関する新聞記事/index.html","15d383a8263700edcf7e11732b9e5d6b"],["/categories/労働者保護法律/index.html","6325e7b3726740eb07abb299a5d819b2"],["/categories/心理学に関する記事/index.html","4018cb4dfe1f44da404d13b42a8eada6"],["/categories/日常生活/index.html","9db4c2665b2a9c094eb6ee9c847f7e13"],["/categories/日本のIT教育/index.html","7b6dc52509833f318734d35e9b8f7efe"],["/categories/日本のIT現場/index.html","29d6a2d3212b2418b37c096d1979592b"],["/categories/日本のビジネスマーナ/index.html","142a2a395e287eccb42b4e627bfab477"],["/categories/日本の国内の人権状況/index.html","86606d100c0035074b4df97c46b4f8c6"],["/categories/日本の経済新聞記事/index.html","65ccb10afe5f74f437670f8ee025f6a3"],["/categories/日本地理/index.html","2f069dc649cae6ab3f428903ddc5d454"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","df39c26ed3f2d6f49a621c11890abad6"],["/categories/過酷な現場/index.html","fd1490e896af994868cd47ef61e39234"],["/categories/金融/index.html","c71bc5377196687c8ade7a46c3bdd27e"],["/categories/食べ物文化/index.html","16573cdfd10695080ed30bc5516dde56"],["/categories/食品工業に関する記事/index.html","fea9586a803d66c3530e256a1e6c4d37"],["/css/main.css","834f157e2123f4515ee7800c857b6727"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ab25ccd67dee6b422bcffb47926316ec"],["/js/src/affix.js","56c66a557ead4c64adc06091d9479a06"],["/js/src/algolia-search.js","8dcc8d1df3b0f082057dc0346c70c84a"],["/js/src/bootstrap.js","14c8c53d8062b2b45922a14cbd7c165d"],["/js/src/china.js","51cafd668055bd2768418816c3a3fa7b"],["/js/src/echarts.min.js","bd2b2c3f7ddc71556cb9b9dfae9c1d51"],["/js/src/exturl.js","4d13a862559990b488bad88df59dea38"],["/js/src/footprint.js","02b221ca52fe97d2e8eca10ab018e450"],["/js/src/hook-duoshuo.js","c8de773c1e4fa2149e4ec11d4739ba1c"],["/js/src/instantclick.min.js","66736a9298463b7523477e39ab159542"],["/js/src/js.cookie.js","427e67be21912d5b3e39fa9f1750c853"],["/js/src/motion.js","bad912dcf1475fa652337aa2511a40e1"],["/js/src/post-details.js","70b06af11231f705e6694d9703baa81d"],["/js/src/schemes/pisces.js","ae17a0bac759888e0774e79d5183fac2"],["/js/src/scroll-cookie.js","064ee3eab8f27198ce53be62dd99c202"],["/js/src/scrollspy.js","1513c5fc1b9c0928e3defb713f742745"],["/js/src/utils.js","bc40b434b0f2d369aad54e336e4fcb30"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","81c497afc9838ed87a6de818670c9f19"],["/lib/Han/dist/han.js","d0ce947be4ea62ad96c518791d8bdb15"],["/lib/Han/dist/han.min.css","ae408b4d7a1c523bf34a82a7dcf4b71f"],["/lib/Han/dist/han.min.js","12f22bf24f4fc6d273a33fb3e1bf6262"],["/lib/algolia-instant-search/instantsearch.min.css","ba1860ef4734ecc1132a5d13e73ffdb0"],["/lib/algolia-instant-search/instantsearch.min.js","8ef0be20da61eec9f0e9cbf03483b593"],["/lib/canvas-nest/canvas-nest.min.js","1a144842b06cdf9cb37856faf34a96a3"],["/lib/canvas-ribbon/canvas-ribbon.js","163bb98b851193c078c80ce7b1dae5de"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7c188b04b01c379b2686844bd27cc728"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0e8ff6a2d03b5590ee26da1df410771e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6e137bc9a5ce9cb1a5f7a647a4600c5f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","da9316f553d867adc5ceb145cd1054c1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b3d324917d35c39f0df2ea7f6e266905"],["/lib/fancybox/source/jquery.fancybox.css","fa66aa32ca4020d19a0997f95a3e5f82"],["/lib/fancybox/source/jquery.fancybox.js","f4b6da6ed384166f155f2be9d20d61e3"],["/lib/fancybox/source/jquery.fancybox.pack.js","8cf75b81eb10d06de87448ff532ef299"],["/lib/fastclick/README.html","d43b4b3dfd704819111fb7cde3ed5fe4"],["/lib/fastclick/lib/fastclick.js","8f3358dd343e6ede13d50a3404b888e8"],["/lib/fastclick/lib/fastclick.min.js","d1725f0bb6786593e7ff6c0bad47290e"],["/lib/font-awesome/css/font-awesome.css","a0285bef6b501ed91ca8784f5ced32ed"],["/lib/font-awesome/css/font-awesome.min.css","a0285bef6b501ed91ca8784f5ced32ed"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","65cb0a4ec69c2643d40bd3a1b63db182"],["/lib/jquery_lazyload/CONTRIBUTING.html","27c4483f9d063f6a938aabb78ad581e7"],["/lib/jquery_lazyload/README.html","b06d987a1c63a12ffda7ba2251359adc"],["/lib/jquery_lazyload/jquery.lazyload.js","03be8b2429f175c4fc82ae6d2e604c4e"],["/lib/jquery_lazyload/jquery.scrollstop.js","51a02d99855526ba30f9a2935d33e8e5"],["/lib/needsharebutton/font-embedded.css","12789fdca8057d3f5080e20c0c0c3728"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","46900cc5560e2535922cbaf3de313cd9"],["/lib/pace/pace-theme-barber-shop.min.css","8171900c24ec01c9607c7d038b4e6040"],["/lib/pace/pace-theme-big-counter.min.css","df77864a18cee9f4ef1329d4c181478e"],["/lib/pace/pace-theme-bounce.min.css","3a43b063b525d99ae4afe0fde6541a9f"],["/lib/pace/pace-theme-center-atom.min.css","fdff14cb43e1a1acdbe05be9a48e4a51"],["/lib/pace/pace-theme-center-circle.min.css","9ba9001f2bc508890ee6bb7242e8f377"],["/lib/pace/pace-theme-center-radar.min.css","27d047986ad1734cdb1da75ab03f49f4"],["/lib/pace/pace-theme-center-simple.min.css","1fc961992f2852adf15272676ea496e2"],["/lib/pace/pace-theme-corner-indicator.min.css","f7f3102f8fbefcb9a5e40f2af47e719d"],["/lib/pace/pace-theme-fill-left.min.css","185b95583bccc91f993d7faeac191664"],["/lib/pace/pace-theme-flash.min.css","c790bbfe11c0bf53531b4b6229f48d5b"],["/lib/pace/pace-theme-loading-bar.min.css","fdb81bbaf29ac25a30439e4567a1be8c"],["/lib/pace/pace-theme-mac-osx.min.css","3847e984900ac05e89e2ea3701e8e2ce"],["/lib/pace/pace-theme-minimal.min.css","eef1b17742521c14d8943d1393531405"],["/lib/pace/pace.min.js","14e906cc52d074524f625a5b46d3a93d"],["/lib/three/canvas_lines.min.js","134eb3be509a35a06e3b3de68efac19a"],["/lib/three/canvas_sphere.min.js","a3b4191778b31f0698753601ce85558f"],["/lib/three/three-waves.min.js","93a2b2461069ef50e4472e1bfe6097d8"],["/lib/three/three.min.js","e4e7800cf9c66a507062d9cf1280f7b5"],["/lib/ua-parser-js/dist/ua-parser.min.js","621bbba5afacc6d1980d8a4f2c17e882"],["/lib/ua-parser-js/dist/ua-parser.pack.js","17b27c580c5ee555b2848ce83f5d0e44"],["/lib/velocity/velocity.js","0fae43c1abc6f4c140e406d05387a848"],["/lib/velocity/velocity.min.js","528d4acaf28542af2f66404cfd8b2747"],["/lib/velocity/velocity.ui.js","5ec51f286a543bf64dfe894adab393d1"],["/lib/velocity/velocity.ui.min.js","c19ba04f6f1955831b1ae4d3e5a64179"],["/links/index.html","b109dd9d5d5a64d800f58d988b4756aa"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","d694811ef6ce9a20fc2d82780b50c47a"],["/page/3/index.html","1895e207939654621f9b4f7f029e568b"],["/page/4/index.html","84aed62f13f3dab076c449eda191cafe"],["/page/5/index.html","b9a05ddacf770895b0f57720d8c219af"],["/photos/index.html","ddc7d146d2862664fa756b4b8f44ac80"],["/posts/191ddb73/index.html","5509eb18b99ea556c30b39015d224c91"],["/posts/1a195976/index.html","d422f61210c9a9fa57bfea27562558c3"],["/posts/2292f1af/index.html","c5677b10ed22fe2cadbd529b027ecba4"],["/posts/29d57d6/index.html","d8073d1afadbeabe98e16fa93272181c"],["/posts/2fc77d95/index.html","b06e4245311d8f9685db47d2690467c0"],["/posts/2feacaf4/index.html","d1b128de3ffeb120fcb9b4cdec3509b7"],["/posts/37f2c331/index.html","5f6b8dcaf071b16b2c0d8eb8fde199d6"],["/posts/385f0de9/index.html","b30be1c2c6e233ae1e643236d4bf42e1"],["/posts/3caecfa9/index.html","3c22fdd4cd573cb2dc9cec4952a67059"],["/posts/44414303/index.html","d448037e3f21357407074725c082a4b3"],["/posts/456610d0/index.html","f1a73bf094c12574ca96eb9a7562590b"],["/posts/45e51894/index.html","0d60c13f5659c0881dc0a6c926e413aa"],["/posts/4f1131af/index.html","b74b6f82994af40189e28ca9c1b0a898"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","d3082357df3b9ad90d4d5c5a4fd54966"],["/posts/517ebb95/index.html","0d56fd7b76051d645fd7daa8176c82be"],["/posts/53bf1d9d/index.html","b87e1545250738e14b458e01c7ff57ed"],["/posts/554c2ba0/index.html","c9b9cca398734387d5a82d7e4dd3d1fd"],["/posts/5f093cf/index.html","d74d9409abcee66d32f51ceb8a3da621"],["/posts/63556f52/index.html","7ecc4eb1c178845200ff0f377450c8f9"],["/posts/6d49ceec/index.html","aa40d9b3c86229ac4250e274ecf6f570"],["/posts/6de7d9db/index.html","0c9455a14d3c09dcd70c69f268e946ba"],["/posts/6fda249f/index.html","e6553a1f44e4c4cd1cc4df7ce1ba265a"],["/posts/72f7a359/index.html","8258b965763691a3d78950e448478733"],["/posts/759a6740/index.html","0385de0e90ceb989f3b68aca7cec2004"],["/posts/84b87417/index.html","95d8725473cc92409199b5aa6d77fea9"],["/posts/8a60fcb8/index.html","295bbd3de735702e7d1341d27b042223"],["/posts/8b4c253/index.html","b5d393a46c01e2076a65dae8537788e5"],["/posts/92912ddc/index.html","a7e05946a8298f30481cb5ebea117c5a"],["/posts/954f8e5e/index.html","1a0dc5d4c414d9a37aed0bb70ea9ebe3"],["/posts/97e5bc9c/index.html","75216569c57a6667fcfb6945e882dadd"],["/posts/9a5c7b64/index.html","42d2ce8dd226e3a9747256b3865c46ca"],["/posts/9cf9c275/index.html","c692d6511f66a6e9691cdaa77adb6c45"],["/posts/9f555f82/index.html","adfbe0704ea9e7e25c74235b859fc9dd"],["/posts/ac7d0231/index.html","e60425f8084f53da1ea0e6bf376f618a"],["/posts/c311b112/index.html","2744e0697e5494042432ae07e6cc3e06"],["/posts/c620d4c2/index.html","2614e97bfe2352d29c0a904f7ecbb645"],["/posts/cfc54393/index.html","e97053af0be4489aff9147eec3c1468a"],["/posts/dc5155ff/index.html","642ef78defc13be8fcc81b5f1c5d16d0"],["/posts/e1bd836e/index.html","26e6d483e2077f400caba7090823c8e6"],["/posts/e248bec8/index.html","e265403d1621619b624ddc78f31177db"],["/posts/e31c0293/index.html","6607375ebd6f9cfed9a1b3db9a209cd6"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","7c61543f0be4bdc2ce29e4b9b62caa75"],["/posts/f8073739/index.html","da9ae9c768627133cc4710b0ddbff5f8"],["/posts/f97ef43b/index.html","bc1d0f683eca077b07a10b208b319557"],["/posts/fa84d5fc/index.html","18db09f0d1f3626ac4aed4522588584b"],["/posts/fb1ab942/index.html","1c23b36ca7befbefd8e85b58c1511472"],["/sw-register.js","ce56d559a033449f088e433a1d5b7bb8"],["/tags/J-pop/index.html","94bb6bf0c3b442c15c32f996ed07bf2c"],["/tags/index.html","282dcf4b9583d7a8f416a351f168502b"],["/tags/ことば/index.html","d310029b7ffd152d568789ffbe990dfa"],["/tags/つぶやき/index.html","5fcb85dd88a4a830b6d5b3d1e65c4030"],["/tags/アニメ/index.html","9025af7cba8a5db40651b35c44ea245a"],["/tags/インターネット/index.html","9795790912e6fcc4abe6131f664f312f"],["/tags/チョコレート/index.html","4c452ec115e5970e1e0fdceb89435c72"],["/tags/中国に関する新聞記事/index.html","82727564eb25ff526eda26f41841edbf"],["/tags/乳製品/index.html","2aab11c48241451473958097b334ab84"],["/tags/労働者保護法律/index.html","5b9a1d822448368715808af2d538c6ab"],["/tags/心理学に関する記事/index.html","df4f00331d9b6ced8930ff7408ce01c8"],["/tags/日常生活/index.html","d67a4ecfcbe53352a06145c4db0b8962"],["/tags/日本のIT教育/index.html","bfe3cd9201755c57092568fd0ef03245"],["/tags/日本のIT現場/index.html","b11a4c8f12782416b7e9de3488a0faf4"],["/tags/日本のビジネスマーナ/index.html","2db41b975bab2f5c42c3ae5e2698cc27"],["/tags/日本の国内の人権状況/index.html","080b949d0c9ec294a624c4f3166c68cd"],["/tags/日本の経済新聞記事/index.html","c9efd8adb4b62e497ef28b03c388c717"],["/tags/日本地理/index.html","178d7755c68f652d5b211ede1ac29dc7"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","ba450d3154fc9823643645fceb4a329e"],["/tags/過酷な現場/index.html","7b5f5140a6226895ac4006f813e0b605"],["/tags/金融/index.html","f186c82d3be625ccd4b583308b2a322e"],["/tags/食べ物文化/index.html","56813418d011b6e7caf26f7835c52d63"],["/tags/食品工業に関する記事/index.html","f64f5cf3ce1ec50816a690af22ef07c0"]];
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
