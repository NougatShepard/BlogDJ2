/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","48bce1d553bca76bb7de1b3507681368"],["/about/index.html","6f3adc874066a208ee0141eb2ccfe228"],["/archives/2019/04/index.html","e9ecbd2e6a9e346026bb00f0d2bc12b6"],["/archives/2019/05/index.html","6e60c3c6bc1dd4be0159cc964837423a"],["/archives/2019/05/page/2/index.html","defaea3d6937550179d5d5b69946fdb5"],["/archives/2019/05/page/3/index.html","e143b99054a33ffcd475e3d831eec4c9"],["/archives/2019/06/index.html","353aa7e4a2ce5ae83a91020621bddc9c"],["/archives/2019/07/index.html","810753d3f24e47c6bd9c873a719e1bb7"],["/archives/2019/08/index.html","b20ef7dbbcc205de727594ad94c524d1"],["/archives/2019/09/index.html","be9ed326701f290c5aacad9badf5ec9b"],["/archives/2019/index.html","1bdc66273a0532c9b645b27728c04f7f"],["/archives/2019/page/2/index.html","7e9126363065db9d9fbbecce6bd90600"],["/archives/2019/page/3/index.html","bfdba98d8116a807c99546ac97a525e8"],["/archives/2019/page/4/index.html","49829e4c9b486de06625fbcdaa367af0"],["/archives/2019/page/5/index.html","59762612731ee3d7db4d60da8fed1584"],["/archives/index.html","ba1dc54123f10d84bff80e8557cbb6e7"],["/archives/page/2/index.html","8de960d499b464822462eb39dc933b5e"],["/archives/page/3/index.html","5198821e0e37cf3bfdf4e3288e69b27f"],["/archives/page/4/index.html","4d916012cd25e1c418bc5aaa6e8ae653"],["/archives/page/5/index.html","7420ec5d529bbcdeebad6549a71b68ce"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","e26ae3f32a83c47c4fafe7b283d82dd2"],["/categories/index.html","ab92f709bede0f880566e1f3dc1ebf7f"],["/categories/ことば/index.html","5cfb8fe921e6463b964cb929df68506f"],["/categories/つぶやき/index.html","dd4ba80a97efac76fbb04d5c53e1e263"],["/categories/アニメ/index.html","0acf214ee6654cb36d81ccbd4e53321b"],["/categories/インターネット/index.html","6b17301c24ea9f2b01d5b2e5c0d83aa1"],["/categories/中国に関する新聞記事/index.html","cef22dfa3bd7fed1a827e10fe030bc28"],["/categories/労働者保護法律/index.html","26347ca967605d469ed6f3490e18d50b"],["/categories/心理学に関する記事/index.html","f1c463a1bbfd0f02938304e1ed7df6a9"],["/categories/日常生活/index.html","cdb0e02a7e14c4781ca3e554b62bac3d"],["/categories/日本のIT教育/index.html","ea9a4f46bf0b3ce139cd4ef3e380a732"],["/categories/日本のIT現場/index.html","9f1141096e239f45f53edc5c47bf55ba"],["/categories/日本のビジネスマーナ/index.html","19fb1638da60e02bc4a156cd2f665e22"],["/categories/日本の国内の人権状況/index.html","780895a59ddb7314bb8725dc8c64fb18"],["/categories/日本の経済新聞記事/index.html","9a4b39c6005d3692777ae9c982dccf24"],["/categories/日本地理/index.html","0b3a96f3c48b8f8ebd65a3c54046da7a"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","c7d1a9733f9c5aaabd7c7b3a283be9ff"],["/categories/過酷な現場/index.html","037024ccd2da46a5f605a24f0e576cd9"],["/categories/金融/index.html","90592f09d9ef19bd3c2d80017ae93510"],["/categories/食べ物文化/index.html","22eea19530cadf72503f691f5c296a6e"],["/categories/食品工業に関する記事/index.html","03a02a543ac2b2e596eabbf30e4cf12e"],["/css/main.css","f161bda8cafec4de0d77f7d7170b1944"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","7f41640390155a162a2fc8a76229d4f7"],["/js/src/affix.js","088bfea3e7205bdd82f61c934ba18238"],["/js/src/algolia-search.js","ad965fd6e90f79ee64f2f7a94269c67b"],["/js/src/bootstrap.js","f2ae689231484e0e62fc0ea2d9392a99"],["/js/src/china.js","5835c3f8abfa0e5228e48e37d7b80169"],["/js/src/echarts.min.js","6fc4e97312a43cad22ad6525017a8e17"],["/js/src/exturl.js","55aabe8f6f23f9804089833a3c4e2aa8"],["/js/src/footprint.js","80c1fa0f4afa499a74f7984c63efb2f2"],["/js/src/hook-duoshuo.js","78ee90eaa6bc81bd7e2d164f5a4b4615"],["/js/src/instantclick.min.js","03e53e1aa9d0d0ba14f28fd3c406ec9d"],["/js/src/js.cookie.js","4ae27014162a2f996fdd2c7ea923a9df"],["/js/src/motion.js","e35810c9fc9d51ffc25e9653db0ca097"],["/js/src/post-details.js","fbadfdd52ef6537f430d1f13a47ebcf4"],["/js/src/schemes/pisces.js","7c16e1fe3f15e3288b095d5172f3f96b"],["/js/src/scroll-cookie.js","92c9acc55f1d3990d02baf0e082f0101"],["/js/src/scrollspy.js","5097acaac67859fd8e406a9ead6b2ff3"],["/js/src/utils.js","144886fe265baa5bc3ff2fe8ec4132f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","762ea0a4d7cac5cc46912e07ce73bbbf"],["/lib/Han/dist/han.js","e75a7b1eb7acc85334014b80359971fb"],["/lib/Han/dist/han.min.css","08db16ff4a6f4345f616a1ee1f863597"],["/lib/Han/dist/han.min.js","ff0b05c98bf37661239efd6902496833"],["/lib/algolia-instant-search/instantsearch.min.css","7a2575517384af0cfffb471f9f6652b1"],["/lib/algolia-instant-search/instantsearch.min.js","b2c232a9aa68844b36789c0c298437e0"],["/lib/canvas-nest/canvas-nest.min.js","89f3eab639af6128b4fbca5492e0fb30"],["/lib/canvas-ribbon/canvas-ribbon.js","edaf524f07a20d2aa317073406d6dd75"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e4bbd5016ff398aad02cc941b57f9bb7"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","1f96b6cf0304bcfe7e30e72c37a403a8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a3d0e67e2e11370baafc9b481a0e7fa7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a8da28738f8d7257a324b3baab096d2d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","66daccdbe3a7c0d7a9cea701ae3c9b5c"],["/lib/fancybox/source/jquery.fancybox.css","487c03a30dd6bbc3b81da2f42b313fd0"],["/lib/fancybox/source/jquery.fancybox.js","f793a3e491d84f0abf94d87596a46b88"],["/lib/fancybox/source/jquery.fancybox.pack.js","7d64890747bb2129b7c3596da221710c"],["/lib/fastclick/README.html","ac75a40fc4d17e37be3ccc14622176e6"],["/lib/fastclick/lib/fastclick.js","f71c743f94d8e683df193b4dcac58c5f"],["/lib/fastclick/lib/fastclick.min.js","14d8c265ffe85e3656b5c3a55f9e7753"],["/lib/font-awesome/css/font-awesome.css","6211b67568215dc20ed4bdf546f414aa"],["/lib/font-awesome/css/font-awesome.min.css","6211b67568215dc20ed4bdf546f414aa"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","219480ff0601de57b72ca3108d6c895f"],["/lib/jquery_lazyload/CONTRIBUTING.html","5aa2c5266e401c053f2e2da1f3695492"],["/lib/jquery_lazyload/README.html","8639da6f5b85d77789fbc6a2ed0bf656"],["/lib/jquery_lazyload/jquery.lazyload.js","2ad2ea303254c6f534e4a5cb69a8e628"],["/lib/jquery_lazyload/jquery.scrollstop.js","07bbee9f675aa1999d97538a9d40c4b1"],["/lib/needsharebutton/font-embedded.css","7bd7c5deb12b86478deb88c34e6f0f01"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","fb7746a8f3399bce6aa3b6696bfa23d2"],["/lib/pace/pace-theme-barber-shop.min.css","6cbe3d430c10190ed1675f25a396865b"],["/lib/pace/pace-theme-big-counter.min.css","ad605888795e042345abb1f8a6a91347"],["/lib/pace/pace-theme-bounce.min.css","5b5f3bfe755578a9cc8746f066883657"],["/lib/pace/pace-theme-center-atom.min.css","e2a1c97bc3fa3c0b55d7f5b105afdaec"],["/lib/pace/pace-theme-center-circle.min.css","9d47644200a03617a5e687b4270a9d18"],["/lib/pace/pace-theme-center-radar.min.css","34887d109486637608f69be4125ddf61"],["/lib/pace/pace-theme-center-simple.min.css","80356354c78652a86b45f3168c3d7809"],["/lib/pace/pace-theme-corner-indicator.min.css","358b3af144a2c9ed03f60ca6885d8ac0"],["/lib/pace/pace-theme-fill-left.min.css","cc9a9050c0a79d09939ff3b499dbaca2"],["/lib/pace/pace-theme-flash.min.css","51fca5d1562d50671bfd16932805f50a"],["/lib/pace/pace-theme-loading-bar.min.css","77fea04b4e868b294c8819e774db2687"],["/lib/pace/pace-theme-mac-osx.min.css","052f837b0dbbb9fd6637a489ad6238aa"],["/lib/pace/pace-theme-minimal.min.css","4afacad1b807a20417875959538025ee"],["/lib/pace/pace.min.js","d78a5e4bcdb65054f16d0c6640f594b4"],["/lib/three/canvas_lines.min.js","7de05ea4294349c33e62f7e59bd92b40"],["/lib/three/canvas_sphere.min.js","11b815d97892ac615094e51880b7f180"],["/lib/three/three-waves.min.js","63bf0cbf51e7800948d7a592dcfb7987"],["/lib/three/three.min.js","52c13c1d1ebcb7974fec5afcccc51597"],["/lib/ua-parser-js/dist/ua-parser.min.js","a795a1ef59d3aed995cd44cfb0b0fd90"],["/lib/ua-parser-js/dist/ua-parser.pack.js","66ed86b97ea67f054dce93ef126967b8"],["/lib/velocity/velocity.js","1c3bc03ffe50f48aabfbf4b58eec7b4a"],["/lib/velocity/velocity.min.js","f50235f4ded4db10800da2831ed11741"],["/lib/velocity/velocity.ui.js","f82805b6a54c935907ec0487e8c5e8db"],["/lib/velocity/velocity.ui.min.js","899524d00baf33efa653a26887415b67"],["/links/index.html","1499b650d0317b3e750c761f778121ea"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","ba7a26bc52ec5a8a3f82bfe7911ceb47"],["/page/3/index.html","d3defb9a6b976e04c43626c536f0144d"],["/page/4/index.html","67b6d673c82e199146be8af7a612c4ad"],["/page/5/index.html","e83fb7511bd85d3f3a5c44307123aaa9"],["/photos/index.html","a943b98d927b0032b030960007a31c83"],["/posts/191ddb73/index.html","569b7827848f71ed2d71d0032fac24c1"],["/posts/1a195976/index.html","d2e424586a96d3cef188254e64fedff2"],["/posts/2292f1af/index.html","a6798e6f573438fbd29b2b7984f33ffb"],["/posts/29d57d6/index.html","c5c43b080141686f75778680af7faca8"],["/posts/2fc77d95/index.html","0d66ae6bd10f99c54b545a0a699311b8"],["/posts/2feacaf4/index.html","87986ab71d3bcbd38654d2c25dab09b7"],["/posts/37f2c331/index.html","12041bf15d93729e06b9f19fa78df035"],["/posts/385f0de9/index.html","4c6c52f921e916bb15fac706b7642906"],["/posts/3caecfa9/index.html","d9ed7acd45ff5c6bdcef41d5df9b4924"],["/posts/44414303/index.html","5b75d84781867c3e71734a790aceea5d"],["/posts/456610d0/index.html","f8fd8cea3e89090f21581dbd6c13dd53"],["/posts/45e51894/index.html","139a10cbdde0c146e37be40e4772f1fe"],["/posts/4f1131af/index.html","7a6dabbd656a31bcd5ac682c7b142537"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","253e6f4d2ca3c4811350edd8f5984d79"],["/posts/517ebb95/index.html","f65743f2b884273ebb4b97b2971ded5e"],["/posts/53bf1d9d/index.html","70ee116d5d2ec5a42402a11913a59b70"],["/posts/554c2ba0/index.html","242633a95433033609eaf3d0999f6a19"],["/posts/5f093cf/index.html","1c8d6f1993557b7938778100a6c2e760"],["/posts/63556f52/index.html","c9d8cff9c3931c387dc17e61b2da4ad7"],["/posts/6d49ceec/index.html","af3c09118b9675f6e9be97baef3403bc"],["/posts/6de7d9db/index.html","f9c92c106c77b4744b3d9129be74cf4e"],["/posts/6fda249f/index.html","d26f5aa47b610f3b85af21f6cb911471"],["/posts/72f7a359/index.html","ebdb9ee690e9d895bfd2a7cd1bc2843f"],["/posts/759a6740/index.html","0fdd4b6d19968a4d02febfde12173223"],["/posts/84b87417/index.html","77686560481d164f72c07b2b5a7b090c"],["/posts/8a60fcb8/index.html","8d8e87de93a1a227732ac0576a2dc008"],["/posts/8b4c253/index.html","6a650f8c4a9021a8cb947a6554fbbf0b"],["/posts/92912ddc/index.html","81fe70ce9c5725cdd60e4505111f5c47"],["/posts/954f8e5e/index.html","721d327bae93f74bf8f3787e8c36d942"],["/posts/97e5bc9c/index.html","02122dff05d2a255aa47b33c7f24ae22"],["/posts/9a5c7b64/index.html","bbbf47087c2b532437e40258cd592452"],["/posts/9cf9c275/index.html","bd855c0d5142680275aacca3f5468d44"],["/posts/9f555f82/index.html","60897e4bfa883c90e45fcaaa9dd85372"],["/posts/ac7d0231/index.html","a5cd97ccdc44fcbc95618d9a1f5dd945"],["/posts/c311b112/index.html","5deb257f81e32cdf526cb4f4765aea4c"],["/posts/c620d4c2/index.html","da701cf09a9d7d1ccdce553e4b20e40c"],["/posts/cfc54393/index.html","297213e9fadff1e21a8271e60b19a064"],["/posts/dc5155ff/index.html","a00566e03288c445749cbb2cfbaf2d65"],["/posts/e1bd836e/index.html","bbc48202659a81bcc93a01a9369684d8"],["/posts/e248bec8/index.html","98c0edaf9b84dd82094056fd739a07e3"],["/posts/e31c0293/index.html","010b94a7a6a1cf6ca03c3ebda1c00d9e"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","ff47128346d7f4775262c28bca5ad8d2"],["/posts/f8073739/index.html","2c431fe6c38779dc14308fc8cd54a161"],["/posts/f97ef43b/index.html","c6f010a1e90c2c7c9574aa966ce5b1b3"],["/posts/fa84d5fc/index.html","4169716037acddcc74d74844df6f97b6"],["/posts/fb1ab942/index.html","92bb85f027674ed6609a78ce7a5e7cdc"],["/sw-register.js","3482d5de1129aef16ca846604160620c"],["/tags/J-pop/index.html","ba09338f1d4c9e96d7ae6fdb17668464"],["/tags/index.html","e5d2aa9f0dc46704d41e4e835e5be4cd"],["/tags/ことば/index.html","ff5d4765e303157300dba86202361257"],["/tags/つぶやき/index.html","ed083f9d31349e87ade50f0394d39601"],["/tags/アニメ/index.html","9fb0b4cd166859ae3559b1221367bf49"],["/tags/インターネット/index.html","54b24d495acf5e174fbf1d3f40807f5a"],["/tags/チョコレート/index.html","0ed17c2d861441eff4654de7ab07926f"],["/tags/中国に関する新聞記事/index.html","9d07f82cc329adf20595c9169a4b9275"],["/tags/乳製品/index.html","53b308dd9a37b16c16019535186d4fe6"],["/tags/労働者保護法律/index.html","6b85ea195fb52c1ce837c15b050c084d"],["/tags/心理学に関する記事/index.html","882d9d056534a96aacc88e3852aad30c"],["/tags/日常生活/index.html","5956aaf8943ff47cf69063b4af499020"],["/tags/日本のIT教育/index.html","f0331a8d68b7ad83b7a4fc8637fc1051"],["/tags/日本のIT現場/index.html","be5559877373c59ed8b91f6b35316451"],["/tags/日本のビジネスマーナ/index.html","f5f7a821f3bb57038622120646db8ba9"],["/tags/日本の国内の人権状況/index.html","feae3b797de178fa982999fd6dd8db4a"],["/tags/日本の経済新聞記事/index.html","f8fff2511e024d2a8efd156a0103ebc6"],["/tags/日本地理/index.html","80365d3ff38682a99cf3551586ba7ab8"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","e46d437ba0913520b9856971b478cb8d"],["/tags/過酷な現場/index.html","faecb8c1a2cc9cf908f74f2ba191b526"],["/tags/金融/index.html","3e302df3d9e1e0d9b124e2a888fda1d7"],["/tags/食べ物文化/index.html","b684ab1fd54ded8efa126f27f1706a0b"],["/tags/食品工業に関する記事/index.html","d63a3572d15bb71a1499d1560e1257ff"]];
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
