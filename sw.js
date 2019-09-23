/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","4e612ca47716543bb2eee3d3435a79fd"],["/about/index.html","e47ee013f3360da5f4b018f08a7a9e88"],["/archives/2019/04/index.html","75a89ffd392c05e73540a6b37d369966"],["/archives/2019/05/index.html","e8a3a98866a226875ae086913220c7c9"],["/archives/2019/05/page/2/index.html","74cc2f72e2c3f32d56582fa396f3a81c"],["/archives/2019/05/page/3/index.html","550cbb58a563c10aefde3e2c04ded299"],["/archives/2019/06/index.html","e167b13c762eed8e09191709883f2d90"],["/archives/2019/07/index.html","b8b0c3ef1ec7d3b2be1f4e0b0bf1bf45"],["/archives/2019/08/index.html","ed32b8dba1a4b5e6e1804fac46594ff3"],["/archives/2019/09/index.html","772b92960d1ecd839be194a96f5e67a6"],["/archives/2019/index.html","cea23336f27bbce7740bdc04ccdf549d"],["/archives/2019/page/2/index.html","9f5bba7f04d6e2f152d4356d3f770011"],["/archives/2019/page/3/index.html","63abe5b7cc79bc41e956498944be1bda"],["/archives/2019/page/4/index.html","87143d9575520a9b0ade7b412276a1b5"],["/archives/2019/page/5/index.html","5a9980c4a370c85364dc721f73b8e1fa"],["/archives/index.html","773ff447de1fe5d9bf64462074d2176e"],["/archives/page/2/index.html","f4a36f8bb6a36a38742082a10c129454"],["/archives/page/3/index.html","dacc773dd73babc5a1573bd08f6513fc"],["/archives/page/4/index.html","6ec989472dfe712a22f247e67038ed35"],["/archives/page/5/index.html","2da5ba36d98a15ae438ad5ebcfe7c230"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","07758bb0ab280f677d938f7ba9a39375"],["/categories/index.html","4717733093b77c109e9672c9b8a51c29"],["/categories/ことば/index.html","35ade6e190b4f2ac51dff2b016098d4f"],["/categories/つぶやき/index.html","d06b201dedfa4aeeef07a74993a55bff"],["/categories/アニメ/index.html","ae1f8c7c669a6386f1fbe20b44e24281"],["/categories/インターネット/index.html","1236796471c0cab8eb3612a367182084"],["/categories/中国に関する新聞記事/index.html","b5ea0b1123600f6826d7ee132047a7eb"],["/categories/労働者保護法律/index.html","174fa46ea45f3b54223faa6317be8cb7"],["/categories/心理学に関する記事/index.html","6756a0c6afc5053d9782fb18075a3216"],["/categories/日常生活/index.html","b9c74164a22a753e4f81710db28f8b9e"],["/categories/日本のIT教育/index.html","7b5d27341a71ec7e560afe34f86bdb85"],["/categories/日本のIT現場/index.html","974b9c270edc6a10814ce0e552e2e2ac"],["/categories/日本のビジネスマーナ/index.html","ce84e70b69a111b09d946ce3254ce145"],["/categories/日本の国内の人権状況/index.html","e3189337bee670f84d17f023ea4b0c63"],["/categories/日本の経済新聞記事/index.html","07a860bf8e8017f7d320f18512b1d405"],["/categories/日本地理/index.html","216127fffca668e51f4505791654bbed"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","7fa0fe2341a9a4e45289e1e335e03c66"],["/categories/過酷な現場/index.html","d39b78dba354231a1081192a6579a57c"],["/categories/金融/index.html","2c4204a7c099d3d90bfc24bab93025b5"],["/categories/食べ物文化/index.html","69dbfd0032ff51a82236257f34c4134d"],["/categories/食品工業に関する記事/index.html","fd67bca45e630b355edb17d9f63da319"],["/css/main.css","83ed64b6fdd56c2315d0b2e98c894018"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","bdb0b56169fcb698411784c480424d6f"],["/js/src/affix.js","aad05b9904ed3f13a4f4f96c648daebb"],["/js/src/algolia-search.js","bb5371213a31c97d8088fe86ae66cf76"],["/js/src/bootstrap.js","c7cf0bc3606bdc72b913d11c4b20117a"],["/js/src/china.js","663f52505460a883223d171206ee7148"],["/js/src/echarts.min.js","7568e5c2a5b4b27f53863ebd21251c14"],["/js/src/exturl.js","b7dde8d8ad87aa3053fabfc5b435942e"],["/js/src/footprint.js","d61d34c48ea9d5224669ddf27d539879"],["/js/src/hook-duoshuo.js","8bc62d77d655fc64c857843b24e0db8c"],["/js/src/instantclick.min.js","e74582ab4d2aefebf28d2308bc5b9530"],["/js/src/js.cookie.js","ce8e18ca5dcbedb6a7d769336ebc245c"],["/js/src/motion.js","0a6353e4bf1a4f567595a49f3bc1e92c"],["/js/src/post-details.js","7702115d541480747a3257bdb4c2fde9"],["/js/src/schemes/pisces.js","3e482344a69abd7e9ca330b87c942a0b"],["/js/src/scroll-cookie.js","dbf4fa1d2e939e42536e286a411ca3e0"],["/js/src/scrollspy.js","80247c2a239957ac41bbe329d73aaf5c"],["/js/src/utils.js","ef430ddbd7ce025c80d8e8c351465816"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3b96b23449d1e95e6e794d6c1a84e762"],["/lib/Han/dist/han.js","12022c06879861236b56ffcc13973963"],["/lib/Han/dist/han.min.css","96365918ff9062fb28b7f647a141b881"],["/lib/Han/dist/han.min.js","3293fd79dd744da3bebb8c2c3dfe7089"],["/lib/algolia-instant-search/instantsearch.min.css","f22bc62ec0320a6a71d8c83e341c493c"],["/lib/algolia-instant-search/instantsearch.min.js","e68cf791f11f3044d2e8ac8c4b0eb7c3"],["/lib/canvas-nest/canvas-nest.min.js","2c72b73091a1a7e2f75a3c37f7267ee1"],["/lib/canvas-ribbon/canvas-ribbon.js","d5d456a1ff88dfa5ee684cbaa7e5fce4"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","46a7a7831d282e21b6459c6fe0c0e991"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","cbc765b82666ff6c22518d3aa6116cdb"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f5b69f0babbd2a18abbc49c254e04cfa"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","01565fd528b52f5d92c62f4b5a73c438"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3c8107536be2a2931ec8ee939b346159"],["/lib/fancybox/source/jquery.fancybox.css","46f1814cfe622f099fb75fb6f5627542"],["/lib/fancybox/source/jquery.fancybox.js","4d8307990b99713435607fed3a529474"],["/lib/fancybox/source/jquery.fancybox.pack.js","c0b82e93a5aee3d308adb012584ca69c"],["/lib/fastclick/README.html","a7140e7344cd39e625acdeb9968e899a"],["/lib/fastclick/lib/fastclick.js","af1a1bb856c3663befa223c2c91d92c8"],["/lib/fastclick/lib/fastclick.min.js","c181554908263158b212296b0aeba3ad"],["/lib/font-awesome/css/font-awesome.css","61fda6f4a65e600e16bcab1ba1daa601"],["/lib/font-awesome/css/font-awesome.min.css","61fda6f4a65e600e16bcab1ba1daa601"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","53341e3b80ead538c403d435eb615da9"],["/lib/jquery_lazyload/CONTRIBUTING.html","23c0bcd3616ad9d9f3f6407561c9aa93"],["/lib/jquery_lazyload/README.html","82db5124725fde59084fcdf44b9175f7"],["/lib/jquery_lazyload/jquery.lazyload.js","193edef10a44a4118002f7480deb4a7d"],["/lib/jquery_lazyload/jquery.scrollstop.js","10eba61b3b271fa46f1d098e53c9ae77"],["/lib/needsharebutton/font-embedded.css","2d46bc210c126da8a203823c02d0cc96"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","8625e742419cac3dcc09aa23978ed2cb"],["/lib/pace/pace-theme-barber-shop.min.css","9d702b268c157a8168c0a4b8d865d4b1"],["/lib/pace/pace-theme-big-counter.min.css","3c2fb1f5869e7ebfda713e4a794287f5"],["/lib/pace/pace-theme-bounce.min.css","c2f7699861067b2af9e253c58419c929"],["/lib/pace/pace-theme-center-atom.min.css","eec790e54f22552cbfbe7aa7a15f1fda"],["/lib/pace/pace-theme-center-circle.min.css","01a9350fe9d801d59eba67e3c0842602"],["/lib/pace/pace-theme-center-radar.min.css","aed59b42889c5c00ab63b5c0bb87908a"],["/lib/pace/pace-theme-center-simple.min.css","d97a0f7f41165ec99b27e7c6d002d702"],["/lib/pace/pace-theme-corner-indicator.min.css","5b4e82f086cf621c2ffcc1433ae72f91"],["/lib/pace/pace-theme-fill-left.min.css","5e5d7938ff7da55da45ad6e73b073c41"],["/lib/pace/pace-theme-flash.min.css","2fe377460d6f24855320c11ffca67d48"],["/lib/pace/pace-theme-loading-bar.min.css","84cac0b1d93d7b65660191d78ec5c742"],["/lib/pace/pace-theme-mac-osx.min.css","ce7349f331ad87faa06cc76036384470"],["/lib/pace/pace-theme-minimal.min.css","3f498ea372680e9b47968f21cbef5fa1"],["/lib/pace/pace.min.js","5cfe6dfde2e96246e2b194e68c49f54c"],["/lib/three/canvas_lines.min.js","15c8b0685177c428f794dc5ba5f53d87"],["/lib/three/canvas_sphere.min.js","a9dd7826cf83aaa1194110edb068d4a2"],["/lib/three/three-waves.min.js","15be786f2b1a978392c65adac5d58538"],["/lib/three/three.min.js","34f3c079d2066995949b56933eeb7ccd"],["/lib/ua-parser-js/dist/ua-parser.min.js","304721fdd2125b15eb96bd623024457f"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f22263f4099f9dd8aa8ca385116ea25e"],["/lib/velocity/velocity.js","d68148abc2e91b9f5875be693aa2b1b3"],["/lib/velocity/velocity.min.js","697db1a235325500916640653b0ccd75"],["/lib/velocity/velocity.ui.js","0817a0f61acf104b77c061793e41f88d"],["/lib/velocity/velocity.ui.min.js","4420a55818c0ff656927af8c06ed897c"],["/links/index.html","b4bfce3f08868664e902d94342d2dde8"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","5f8d333d41da36b105a52660a0325f77"],["/page/3/index.html","95a1afc970f55b016cafa18a983892f2"],["/page/4/index.html","c7f928df55d08cc865be8ea050721dbb"],["/page/5/index.html","801ca07acddd1c570f60ac17abfba3df"],["/photos/index.html","fe6024859b043ddbbc5501288a5640df"],["/posts/191ddb73/index.html","340831a98e5924242ad47f9cb1d4ae63"],["/posts/1a195976/index.html","54eb535d0d446cbd27bb9383c8c75bf5"],["/posts/2292f1af/index.html","1ec950e66ffcb17c8a03846a2098cfd8"],["/posts/29d57d6/index.html","769781e2d9cc21d13aa233fc1559dc62"],["/posts/2fc77d95/index.html","1b2b04df2c2fd7f1655e7e87810999a9"],["/posts/2feacaf4/index.html","83178b182f8e1bcfec346401281b7cf1"],["/posts/37f2c331/index.html","db6fef6449a754092bb5b5160387de93"],["/posts/385f0de9/index.html","36228b1e86bfb4cc5578d36a20726035"],["/posts/3caecfa9/index.html","481adeced0c22e92f8814039ea7ae68e"],["/posts/44414303/index.html","af18c7bea0e213ae6e1e5fd02efcaa12"],["/posts/456610d0/index.html","733fda030ab82cd9d00593deeb45b278"],["/posts/45e51894/index.html","ec0a58c98a2cfe737cd9a4f9435115ff"],["/posts/4f1131af/index.html","b2730ad713db0182c1efa3c1fb53f280"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","4e252243ffc5066c41f2866c191147f7"],["/posts/517ebb95/index.html","da4089fcfc4027011b6dcfb4ff0c78be"],["/posts/53bf1d9d/index.html","080da82b7ddcae77b858f9f087dc463e"],["/posts/554c2ba0/index.html","2a2711437c3517ef7bfaa0d0c6b9c597"],["/posts/5f093cf/index.html","8e0125c5bd35dcc80c66dd3083bf57a6"],["/posts/63556f52/index.html","3fc2678b5ead572f3eb78f433906c019"],["/posts/6d49ceec/index.html","d9fd755ede394c561256b5c2b5fce673"],["/posts/6de7d9db/index.html","1775d2d45609ee1f31e2111dfab5e62d"],["/posts/6fda249f/index.html","3de6b57fe0187f60b31e6dc8dfbeec1f"],["/posts/72f7a359/index.html","fbfcc49ea34705166de246f55412fe43"],["/posts/759a6740/index.html","16a01a84d3c9d18c9b1832bbb4cc0259"],["/posts/84b87417/index.html","ce2376c31642e8c0126d7f3ec217108a"],["/posts/8a60fcb8/index.html","b4d4f8ba905fac58d40c4f218a020f26"],["/posts/8b4c253/index.html","ef1f9195976cd8ef494c24add9fb7812"],["/posts/92912ddc/index.html","9e6bde2c0784bb8981570ae5b2dbd192"],["/posts/954f8e5e/index.html","3472a46adb54e0268d8bc8e7e024bf47"],["/posts/97e5bc9c/index.html","1fc0ccc0fa648a84613f4fa04d23b98c"],["/posts/9a5c7b64/index.html","9f172bc960f9dd221bf0cc532c56110e"],["/posts/9cf9c275/index.html","d70d2c0dff6bbf6368b666561e2185e7"],["/posts/9f555f82/index.html","917420bcffac03fb751c2f4d983c39dd"],["/posts/ac7d0231/index.html","64441af9022ec65182b735314a647a18"],["/posts/c311b112/index.html","ef787444c037406f3a256e1f27b927c1"],["/posts/c620d4c2/index.html","8380d6968cf79da3ecca0383cf9dc7ae"],["/posts/cfc54393/index.html","f977f7ab759f89be127d1ce97970df0e"],["/posts/dc5155ff/index.html","4a51114c7a97c463208a22fcd45c4d17"],["/posts/e1bd836e/index.html","55fdcccd94b51bd29db0bddb36b0393a"],["/posts/e248bec8/index.html","d2bef9bdf0cbb2b01536366c946df0e7"],["/posts/e31c0293/index.html","b61d9e92a31ecdde36fc637fc2e99fa1"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","43aa59a94e453099940a021cd945d970"],["/posts/f8073739/index.html","561ffe9ef3302631a0162049aab5efd5"],["/posts/f97ef43b/index.html","d4613518baa6ba4cda826494ad6386ac"],["/posts/fa84d5fc/index.html","600bdc109c8d1bd716c344bc5d3a8f41"],["/posts/fb1ab942/index.html","2ea57ed95e524ec8df076e365a3d0ba9"],["/sw-register.js","ae3c5bc2517b1b069620aaa18ae2f7ac"],["/tags/J-pop/index.html","fd010b0763d457a2d87faf013b0d4754"],["/tags/index.html","632f7e355fff57ddc3b36610ddf8b60e"],["/tags/ことば/index.html","a3b4d2861a7b96cee38eb0dab095567b"],["/tags/つぶやき/index.html","f1099be6177a12f1d628ef1c9097ed5b"],["/tags/アニメ/index.html","374701704e1798f20f94dce72e939291"],["/tags/インターネット/index.html","a3daecc4d8a00a29de45e4e3dc186257"],["/tags/チョコレート/index.html","202429818200e34131be9446b726a9a4"],["/tags/中国に関する新聞記事/index.html","079bc819bf0a425d81935532c25d938e"],["/tags/乳製品/index.html","1cb8c6209dfecfdd137a83b505e09d5f"],["/tags/労働者保護法律/index.html","3ce6f40c5b3b3e0c3974f17310f50a95"],["/tags/心理学に関する記事/index.html","a7106abb8dd5bf5e49ad35d6eb2842b0"],["/tags/日常生活/index.html","bc11bf3aef64d2fa2b833993ca790709"],["/tags/日本のIT教育/index.html","a14392765bdf727cc02c70ef4e50ac05"],["/tags/日本のIT現場/index.html","ee66c7d463673d3c732bad8897615c82"],["/tags/日本のビジネスマーナ/index.html","50251f618ec605eb220dcf87d3f174ab"],["/tags/日本の国内の人権状況/index.html","4c116cca87ab1360f852930849258724"],["/tags/日本の経済新聞記事/index.html","ce46799cfb96773a11298aecd4648609"],["/tags/日本地理/index.html","08cf5eaf617bac6400c814cd90b1750c"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","77909b31d456794d5ca6e29de212d423"],["/tags/過酷な現場/index.html","834a9e7d39770d83b9f28a921a4c0039"],["/tags/金融/index.html","3ebffdbe5a80c6bf65e01db2c12b9602"],["/tags/食べ物文化/index.html","72c6c16685c3b1a153c3c155ed3af40f"],["/tags/食品工業に関する記事/index.html","8249ce86ac2c229b74f7aca286384ca1"]];
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
