/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","93694c63b80249a4f852f9e039c36d8c"],["/about/index.html","cd78fe1e3961145e8545852c7a98b47a"],["/archives/2019/04/index.html","80e2bffebb16d3166c2b1aa639ee7f74"],["/archives/2019/05/index.html","49fbbb160e195f0f617d0151149fcc4c"],["/archives/2019/05/page/2/index.html","005eb8c5729df5d541920e69d9ad349e"],["/archives/2019/05/page/3/index.html","8082bf217073a3c1a2747f14ec1581a5"],["/archives/2019/06/index.html","8c7733a3a06c28ca3cb82cdd3950733f"],["/archives/2019/07/index.html","41bf7983dafbb680835a24efbd80bd88"],["/archives/2019/08/index.html","c83cb5af462ee11da5fa395e659d1376"],["/archives/2019/09/index.html","2d9bb6d38646fd69a58484463d18be39"],["/archives/2019/index.html","0bb8fe882f941d24fc4b208ea965eda2"],["/archives/2019/page/2/index.html","045b743376fd99ee1aabf66099b63d30"],["/archives/2019/page/3/index.html","5c10ffd2592646f767296080c6efe65a"],["/archives/2019/page/4/index.html","6df754ad9d9c33d9cf7bd7c89d3839b1"],["/archives/2019/page/5/index.html","a364d1c062604270c8c837e6ebf298fe"],["/archives/index.html","023569d6daa946332c31c6f11ad4c43d"],["/archives/page/2/index.html","6f42d566de9008000e131ca9e10f9838"],["/archives/page/3/index.html","689ae079ffac617e8ea4d92fd7c981bd"],["/archives/page/4/index.html","edfdd9fd0d5fd25eb5845095f312a1b3"],["/archives/page/5/index.html","7174493d1bc5d73b6ede340df59dd5d8"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","5196a2add88e10a7e051385cfce08b72"],["/categories/index.html","7a5d8fcaeb0560d08d0816a2a7021d83"],["/categories/ことば/index.html","26b1ab4096d479a5933c09b4f1c046c2"],["/categories/つぶやき/index.html","0dbe4255add66601d6904e0cbba735b4"],["/categories/アニメ/index.html","d6a005c9436656c4784386922dcf8874"],["/categories/インターネット/index.html","07fcfc4000800dd35c2f41b85813367b"],["/categories/中国に関する新聞記事/index.html","aa2604dea1fd4cc29f4ba9d4e3248fd4"],["/categories/労働者保護法律/index.html","2121eb1b03e9d5aed0b37b6ce069e535"],["/categories/心理学に関する記事/index.html","e49d533b70cb449fc1994f6e2d997477"],["/categories/日常生活/index.html","6f7cfd6a59a74a21f8827c83bec2b4e5"],["/categories/日本のIT教育/index.html","143f854b86e8322092012e38e8829e55"],["/categories/日本のIT現場/index.html","ada3d11187b9b61baff3aef013acca48"],["/categories/日本のビジネスマーナ/index.html","65c9e937daa7ac17ced713de7606e16c"],["/categories/日本の国内の人権状況/index.html","c803e89ebc069a583f6a5d82516030c9"],["/categories/日本の経済新聞記事/index.html","f1d1364c4655046db66a4665d6a360b1"],["/categories/日本地理/index.html","ee7d50d13a6994da108b980b42db0538"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","aeee201dc2f2185aece0438052b630e8"],["/categories/過酷な現場/index.html","aa45c8a21f7ff9bf5bc22c1f24c29648"],["/categories/金融/index.html","f7d82145f66b220c948fb1ca52590527"],["/categories/食べ物文化/index.html","912c5a8acd88955d5ce4c1046a3e4c9e"],["/categories/食品工業に関する記事/index.html","9f920101c23a3b05902cea907e16f0cd"],["/css/main.css","ab46dfc35e36a5bfe87be58c17b18ccf"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","3f7666647222fe113a7033383e530bc4"],["/js/src/affix.js","ccc62f40743f6267147d8d189a4eab1a"],["/js/src/algolia-search.js","28a972ff76b6153f0f1a91ab55466f44"],["/js/src/bootstrap.js","9d6de63692542fd2cc69b47bb65957d7"],["/js/src/china.js","765cb27418a67b77415d80738c90a892"],["/js/src/echarts.min.js","05d1c418956139b04b69a9ba6615b81e"],["/js/src/exturl.js","b17e6a04b694a691cc7e4960ca42e7ca"],["/js/src/footprint.js","5f5115f42762815570ce593ce3ef9a9f"],["/js/src/hook-duoshuo.js","773101c5f449e93103812fa6ccb49fa6"],["/js/src/instantclick.min.js","ba57e23dcfd3444eb97cfed20c4404bb"],["/js/src/js.cookie.js","0e0f424c9171493198bc284faa21937b"],["/js/src/motion.js","e3715a3b75ad654e91f5d3b491385d68"],["/js/src/post-details.js","791188a3e7c0401f5961384aeab2cbea"],["/js/src/schemes/pisces.js","5db23ea8962cb64ba34b0bfcca64f6df"],["/js/src/scroll-cookie.js","4669ff13a5262dd16eafd9627f7f181e"],["/js/src/scrollspy.js","717846781cb4435aa88a7f5cc29a6999"],["/js/src/utils.js","ea4d7434563adf7f705c4292956f122e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","d15fc138a3cf63cfd5b98de342813db4"],["/lib/Han/dist/han.js","0c9c2dc5d7b9b6704f4ede772f74ec53"],["/lib/Han/dist/han.min.css","ec40ab226b6df0f585440d5067f2fc10"],["/lib/Han/dist/han.min.js","ec1a8fc88db38a35a7edee0c2f060fcc"],["/lib/algolia-instant-search/instantsearch.min.css","ebf47b380056cdbc56d1475df2120503"],["/lib/algolia-instant-search/instantsearch.min.js","6bd2077eaab42571276696b4169184ca"],["/lib/canvas-nest/canvas-nest.min.js","b285c64db94da1b5b09e2b74b48fa1ea"],["/lib/canvas-ribbon/canvas-ribbon.js","24e3da6cddace86e5e8ac9c438a6ecd2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","8aba2e58306616230d30a1c3037c5017"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2845164a8d348de4af2f7b8cb5f124d9"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a9ceee8b337c68f1755f6dca303ab4f9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","19c2a8f1526fca52d6320ac89926893b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","567d127f6f58e432aa2c2575ad9f729c"],["/lib/fancybox/source/jquery.fancybox.css","383c6bdec2f88a0ed48519e6383e617c"],["/lib/fancybox/source/jquery.fancybox.js","63b428b1ec1f3c26cff4c86beaa93007"],["/lib/fancybox/source/jquery.fancybox.pack.js","97d4853a0b7dc4fdd84c9c88a56dc985"],["/lib/fastclick/README.html","8679c8f69c1f239243e43ce3f86df9f7"],["/lib/fastclick/lib/fastclick.js","6575f6e2ce850d540985c124adaeb8c2"],["/lib/fastclick/lib/fastclick.min.js","626d74928489b998840e6ddb00e5d3c0"],["/lib/font-awesome/css/font-awesome.css","a14f8f5c9a1021f97c1f3639ae405a7f"],["/lib/font-awesome/css/font-awesome.min.css","797783655d34e83a7e864cf6d7fb0c5d"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","b9122382356a6c30c2340ead68c69f7a"],["/lib/jquery_lazyload/CONTRIBUTING.html","d7d5b79a8bfeced6e8cbbb018b3a4311"],["/lib/jquery_lazyload/README.html","c16823658b6eae8d4437647fe1fbb895"],["/lib/jquery_lazyload/jquery.lazyload.js","f68446d2003b37a0a36b530f6856bad6"],["/lib/jquery_lazyload/jquery.scrollstop.js","5de57a97cb37488e78182029728b1bd3"],["/lib/needsharebutton/font-embedded.css","e56f4c4ff07979e7704eea53fadd2958"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1f5c0e22db5f87dfb0c9436a38954424"],["/lib/pace/pace-theme-barber-shop.min.css","cbdc0dc997c5ff00431e3ed68549f828"],["/lib/pace/pace-theme-big-counter.min.css","07e8dc6b8daa1cdd11fa24591c14e89f"],["/lib/pace/pace-theme-bounce.min.css","b06316476454350e75364dc20998dfeb"],["/lib/pace/pace-theme-center-atom.min.css","670bac2d9155484523eb8345182046f8"],["/lib/pace/pace-theme-center-circle.min.css","4645128217159cea9d011e2406c8f6ac"],["/lib/pace/pace-theme-center-radar.min.css","b57c14cf5803a9f49185e0c6a6ae263c"],["/lib/pace/pace-theme-center-simple.min.css","bd544904c8696331fc8ecbbfc6e67b95"],["/lib/pace/pace-theme-corner-indicator.min.css","2d01a3fffd6d7417bda97346842265a4"],["/lib/pace/pace-theme-fill-left.min.css","dbf228d4a3bb294261bb0d9c5f328f3f"],["/lib/pace/pace-theme-flash.min.css","595c37985998af1dc2ff8b9a8345b64b"],["/lib/pace/pace-theme-loading-bar.min.css","c890f0a4e52673834e40029be7d4f8b5"],["/lib/pace/pace-theme-mac-osx.min.css","66361416665f789eafc31eca773b5848"],["/lib/pace/pace-theme-minimal.min.css","ca9948ed7c4752c9e982768c209f86cd"],["/lib/pace/pace.min.js","6d53cef1e307494ad96fd11e44c41aee"],["/lib/three/canvas_lines.min.js","4a1a6b280ac457416f9d00ff2672a15f"],["/lib/three/canvas_sphere.min.js","d6e96351cec81e4400639e0c16ea4739"],["/lib/three/three-waves.min.js","8c645120ee781c3609e982b040af6371"],["/lib/three/three.min.js","e9c4e55e2b7af13b5e2a47628b055192"],["/lib/ua-parser-js/dist/ua-parser.min.js","0c6f0b8b8501a34170190a5dae7c076a"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e8b5de9f97d93bcc48aac573ed7a1149"],["/lib/velocity/velocity.js","ee476a45deddfef896de2d9baabb51b8"],["/lib/velocity/velocity.min.js","bf4bd55e12ce67a7a4590ceb274d781a"],["/lib/velocity/velocity.ui.js","992dc3491d1c62778f94b68f5636094e"],["/lib/velocity/velocity.ui.min.js","c069c364b77c5198915f4a2f23f29b62"],["/links/index.html","b62402335689de9c45b18f582886fc49"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","2bc20b2b3a42cc20e18785ce9d80d257"],["/page/3/index.html","5befd0894cc8f0e50cc5574230ea52e7"],["/page/4/index.html","4d5c94efa766fa100a7bd06d599c94f2"],["/page/5/index.html","c551638950f22a808586e32846d4f9ef"],["/photos/index.html","93bc6b8d65e5e36b7b678f378818b38e"],["/posts/191ddb73/index.html","3ee1b3ca548ab2fcc1ab5c44b127ac4c"],["/posts/1a195976/index.html","0d0fa96c23f07fca38a393ecc84d6c8f"],["/posts/2292f1af/index.html","94a0b044e82dcc8378c0357ecb2ab522"],["/posts/29d57d6/index.html","60401a6a7bef3f937cd8ce670e86566a"],["/posts/2fc77d95/index.html","d5f92b3d4070dc598f99c7d6b052551e"],["/posts/2feacaf4/index.html","9160ad915c1f03944e01b3ba49018bf7"],["/posts/37f2c331/index.html","0612e83c8c20494009cdc32b37ce0c34"],["/posts/385f0de9/index.html","f79f6f30eb30af65ee69fca5034bbc41"],["/posts/3caecfa9/index.html","4764ed811e122c413937375dcefb8de5"],["/posts/44414303/index.html","2eefaee211a67f00c27afa612efc30ed"],["/posts/456610d0/index.html","56e44f7f4b429609d875e10425d9bf45"],["/posts/45e51894/index.html","bcaf6a3f61f898da4cfa4a30aea1ad02"],["/posts/4f1131af/index.html","6381d28591605598f446cf0fe71bba9e"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","573cecbd98952d3703b6753aa474dfdf"],["/posts/517ebb95/index.html","b9b5a8aa4acba9382139cb0057d73b2e"],["/posts/53bf1d9d/index.html","9a879aa5f5575ca78e3c53c5bb9776c3"],["/posts/554c2ba0/index.html","58881105fb3ba9c769fbd06379715a1a"],["/posts/5f093cf/index.html","d32c9994f3083da34bcda8e4dbf556aa"],["/posts/63556f52/index.html","36d92e853b4e0dc872477d2b7ca5eb2c"],["/posts/6d49ceec/index.html","9b88259b321fb572e1604dc50ba46d96"],["/posts/6de7d9db/index.html","261547b6f22585fbabd840a79b3f5424"],["/posts/6fda249f/index.html","ae9844928692fb8eceb26f285d2b81d4"],["/posts/72f7a359/index.html","3a45e3f613b81a2439a2dbccfa4ea273"],["/posts/759a6740/index.html","9cf4435b9fce396533cad97214c2543d"],["/posts/84b87417/index.html","ab1d075f7455a21d43deaee74d84a5cd"],["/posts/8a60fcb8/index.html","867f00431df53f7b2907f0d312563952"],["/posts/8b4c253/index.html","3a47540626dcae457b1553b94397ea88"],["/posts/92912ddc/index.html","c9a6cc946e536ec246c8253afc011aa3"],["/posts/954f8e5e/index.html","3e63acaa30f406ca1e7135436f4ace08"],["/posts/97e5bc9c/index.html","c958bb7f91e3e75746157c0d602b28e2"],["/posts/9a5c7b64/index.html","c8acb6dd81e8cd73c0e466167ec1a44e"],["/posts/9cf9c275/index.html","fbebb08ae717d01ee6166feac91c4746"],["/posts/9f555f82/index.html","42ae635ad04865855c2172c88d00a2a3"],["/posts/ac7d0231/index.html","90a688511c52406a1ad083f330265a73"],["/posts/c311b112/index.html","257dbc2c2619e4762445407e8fb2cd5c"],["/posts/c620d4c2/index.html","5c267268d9ecb053b5d449d0df063873"],["/posts/cfc54393/index.html","2268ef7ba22a49fca17bcf867b973d00"],["/posts/dc5155ff/index.html","ba4656ab6583db60ab1759c1b5811d55"],["/posts/e1bd836e/index.html","1ad764e004cc90b2b7a37c1a46f6020f"],["/posts/e248bec8/index.html","d65e34188745312f509ff12cc261b797"],["/posts/e31c0293/index.html","9de8dc01e733a41c9543578da980b0a6"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","fd2a684d5a01763318c6cc4a75aef95d"],["/posts/f8073739/index.html","520d0bb5e413fb11d7c8f41e641c652c"],["/posts/f97ef43b/index.html","9f695754e23755b7814c0540b944788b"],["/posts/fa84d5fc/index.html","5ed764e56288217add678001bc2773d6"],["/posts/fb1ab942/index.html","5c259cc891028e3f2e23d9cdc4ecd2b4"],["/sw-register.js","edf4b346b80ad7a119873658fcba3fab"],["/tags/J-pop/index.html","8a255204fba5524e570f2e327ed10318"],["/tags/index.html","88f5db400051087005a5f5cfc0fa7017"],["/tags/ことば/index.html","f4a1f43517693c07645c7b9692791414"],["/tags/つぶやき/index.html","e05f81db177f16fd5cc96169362d7d17"],["/tags/アニメ/index.html","7c8e9a5f13b56dbd5b17f4f5778055c9"],["/tags/インターネット/index.html","cdabe4021258b62a5a68e43f1bc0286e"],["/tags/チョコレート/index.html","379938acf1b03b00b04e87f2e929a09f"],["/tags/中国に関する新聞記事/index.html","cf103c0cfd1fb55c02fc4e199311a5f6"],["/tags/乳製品/index.html","4ea25ded18082a3fc5233f69d3406f16"],["/tags/労働者保護法律/index.html","ec5d0568a2f1258168e11f7a14543fee"],["/tags/心理学に関する記事/index.html","87e759a3075b3ea752377187c3ebab83"],["/tags/日常生活/index.html","1cb8085e18324d81e9c7e63f3b0a3aed"],["/tags/日本のIT教育/index.html","320acf1c3f6dfc4fc851c0988324d684"],["/tags/日本のIT現場/index.html","20633033101e54c5b8e0c41a14355266"],["/tags/日本のビジネスマーナ/index.html","3cc641f78e775774251d7e3b7022cab4"],["/tags/日本の国内の人権状況/index.html","7a661aa94a2a7dea053ba75b0aefb7cf"],["/tags/日本の経済新聞記事/index.html","4db8c12485e1989ba69c2acf84d40d9f"],["/tags/日本地理/index.html","cbac4538033b01303deaef14bf83233f"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","12f34ef0651fc59902195e940e1bc85c"],["/tags/過酷な現場/index.html","d0eb5cff45a65db54a7451df23d6891d"],["/tags/金融/index.html","f2bf8ec20552a6869ea51127c63b3be2"],["/tags/食べ物文化/index.html","15a144010377ec1371f77abc35bd9662"],["/tags/食品工業に関する記事/index.html","3fa6ad9199f4e985c1fa3f59d6d7456f"]];
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
