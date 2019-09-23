/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","a991c8a6d12ea54f513d19a566163677"],["/about/index.html","9b1fea42f14cd412b111164cf8991faa"],["/archives/2019/04/index.html","518a188b4e938da72b91a57f99ca0721"],["/archives/2019/05/index.html","86c2a585610f07b0382b570f2fb65a2d"],["/archives/2019/05/page/2/index.html","cb93dafe4607d20cc42b3bc9244cbdcd"],["/archives/2019/05/page/3/index.html","a332c7a0983041da22f49e05ad65c372"],["/archives/2019/06/index.html","e3d3ddb6a4442326fee402538f8ea2d3"],["/archives/2019/07/index.html","7e14fba5fe4d822d82fdaae7442c4658"],["/archives/2019/08/index.html","d208be73a52cf8fcbb36314b770ff250"],["/archives/2019/09/index.html","d3a388b0da87626e6e91ab890b21f414"],["/archives/2019/index.html","0cb335024aa37208e5421c8783586525"],["/archives/2019/page/2/index.html","1d0d89695e57c9c030d4f97e67d4eb91"],["/archives/2019/page/3/index.html","2a12d82e1c65ee96ec3aad4868bd7e84"],["/archives/2019/page/4/index.html","bc5bc81f0ce28b997d2fd210a9fc29ac"],["/archives/2019/page/5/index.html","9e37548ebeb1158f5b14a9fa57ffc927"],["/archives/index.html","d13fd6bd5b0968c592af8dca16728519"],["/archives/page/2/index.html","fc964d591bbd17fb4a7b4d4b08f70ef9"],["/archives/page/3/index.html","70bce7fae6ad698be397d7f3c67e59fa"],["/archives/page/4/index.html","396d64855e8dfb127e5edc4e59276608"],["/archives/page/5/index.html","ac1f2af39c4c498fddacedf199976124"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","7884aef89b2adfebf343eef389599090"],["/categories/index.html","3646b8f135fbb21463b1d2891d6c0ec1"],["/categories/ことば/index.html","96b61d1f9c0e424acd4c790deb7bcca1"],["/categories/つぶやき/index.html","d620e63020ba86cbcaa030431c0d2854"],["/categories/アニメ/index.html","b0ca35d668ff3f8feb79b9aec97e581d"],["/categories/インターネット/index.html","fd0997bae1a7ddca04f425e8d895b587"],["/categories/中国に関する新聞記事/index.html","ccfd98c091ab21f945e41e5602e4ec69"],["/categories/労働者保護法律/index.html","50362091141bda0c74a91bab8051363a"],["/categories/心理学に関する記事/index.html","3dc27b594f277aebd0eb9d7d63d66187"],["/categories/日常生活/index.html","52c0ddee066b4a463114f4923be4d554"],["/categories/日本のIT教育/index.html","d45291ce73d58ad7e08141f0c25c9062"],["/categories/日本のIT現場/index.html","4c66e326f96fdbc4efad49db41d42d58"],["/categories/日本のビジネスマーナ/index.html","115c92cc65f0b84a1710ec00ece69583"],["/categories/日本の国内の人権状況/index.html","e4c3169a47d910de251f85ea89be0ccb"],["/categories/日本の経済新聞記事/index.html","4cae8eeec5fdafa0943613b87f4c50a1"],["/categories/日本地理/index.html","0b862c68132e22f45a36098a8631308a"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","fa361d88732a79df8adffa2b8c75e71a"],["/categories/過酷な現場/index.html","090ace10f15c6882968cce1506e2b55b"],["/categories/金融/index.html","96537ce51764efc77828875e4f11b919"],["/categories/食べ物文化/index.html","79065a3782421c1aa9b85590a27335a9"],["/categories/食品工業に関する記事/index.html","e8d7c45ce71fce4eec35026d025628c0"],["/css/main.css","c6705e7a9772d32ab1622a650546c83a"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","53a2a5e38124b42edd1b7adb5986e811"],["/js/src/affix.js","04e01067a3252ba98dc34b3fa32fb52a"],["/js/src/algolia-search.js","9d2366dd74a77da8e523e38bbb4bb61b"],["/js/src/bootstrap.js","197cde9d8d431047a64bd7c72bdc6ce9"],["/js/src/china.js","04fd7185a902983a79a3b65d6cb1d176"],["/js/src/echarts.min.js","0f8e9a056221c5ca35ded5f59adfa683"],["/js/src/exturl.js","7c4771c2e54257789d66e562bba044be"],["/js/src/footprint.js","81f14546256fc255d64aa967f3cd5191"],["/js/src/hook-duoshuo.js","7442a5a596a6d2246815ec5e9e854a50"],["/js/src/instantclick.min.js","d0e521545a97170c62973bcb85b2efc1"],["/js/src/js.cookie.js","e8673c5887af5195ccacf02be3d1ca0a"],["/js/src/motion.js","a950e4f60d00ddd7a11cf91c6c727f46"],["/js/src/post-details.js","bb890df046d0dd9b161a8128c8d46ea1"],["/js/src/schemes/pisces.js","fc3edca1a644b936c8fdb06cf9a10a0b"],["/js/src/scroll-cookie.js","f78431c4ad7b78d1afccf515ce9bf831"],["/js/src/scrollspy.js","c4c3a7f77df8e2293e03291b65fc7861"],["/js/src/utils.js","c150a79ad1716c733be49c4a9f37a30c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","54eba85e979e36188cbc5c996b5c048c"],["/lib/Han/dist/han.js","f7feb872f277d3b6225f6cccdc87e666"],["/lib/Han/dist/han.min.css","bfb607ebb9d04688c00154a178c8ca36"],["/lib/Han/dist/han.min.js","dea756f6dc34b059e3a88d411ce1cfc9"],["/lib/algolia-instant-search/instantsearch.min.css","6d9a2bff1f0973589ae8a42173b7b3ee"],["/lib/algolia-instant-search/instantsearch.min.js","c77e1b335dd08d709a1c734aaf78602f"],["/lib/canvas-nest/canvas-nest.min.js","67a827a23fe0a3a541b3646d9ea10642"],["/lib/canvas-ribbon/canvas-ribbon.js","6d48d2d96355682fe1c789899f90d8df"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7cc9c8a82d65b72bb62afbae1ef0ce35"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f35706a06cd022b94c444c17f935eafc"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","74e22c743164d79181e4372c4bd15cea"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","eaf7942a34436ce1c150f9eb2deadf52"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","ce2af7f754e8e2887da0b8de88fec932"],["/lib/fancybox/source/jquery.fancybox.css","277ce8c387b0d701e8774854e0dfe719"],["/lib/fancybox/source/jquery.fancybox.js","30afd602503c5a8224bd63fc5f3d9c41"],["/lib/fancybox/source/jquery.fancybox.pack.js","494276b91e7a7e2b20e2e02373e7cf64"],["/lib/fastclick/README.html","48fff95bdfd19d00ab9a6b4032ce4bb0"],["/lib/fastclick/lib/fastclick.js","9c456923eefe6217147f7105bf119b13"],["/lib/fastclick/lib/fastclick.min.js","c21cb64724885f5e520012beb1a76928"],["/lib/font-awesome/css/font-awesome.css","ef96270bb64cc0696dd4ca10d264f626"],["/lib/font-awesome/css/font-awesome.min.css","ef96270bb64cc0696dd4ca10d264f626"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","a53443f6f469cac506ec3576cf1bf5f1"],["/lib/jquery_lazyload/CONTRIBUTING.html","0a8c661eb78c25f03341bd75839fac40"],["/lib/jquery_lazyload/README.html","e3b9259c656e7b6133691c90e9cdd156"],["/lib/jquery_lazyload/jquery.lazyload.js","36847a5fcc8e2f08b9a6c84e96fac514"],["/lib/jquery_lazyload/jquery.scrollstop.js","4c335bacceec45a8368d977d71e85cf0"],["/lib/needsharebutton/font-embedded.css","1f69dec7bed37bebfb002ab001f0ab91"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","a1d06e94be4614f5357fb3aa745e3f35"],["/lib/pace/pace-theme-barber-shop.min.css","a4fc649fbdf89f619af82013d3d8d7f4"],["/lib/pace/pace-theme-big-counter.min.css","5e10f4d2beb9e23c1a7cbc65c27334e5"],["/lib/pace/pace-theme-bounce.min.css","07802820485b87864c45073629724b29"],["/lib/pace/pace-theme-center-atom.min.css","dafcbaf89d1b0fd4a059780ddb29c4ff"],["/lib/pace/pace-theme-center-circle.min.css","d85437ecd41fd33495d1c85591e998c8"],["/lib/pace/pace-theme-center-radar.min.css","fec8304fee73628555005b7cabeed942"],["/lib/pace/pace-theme-center-simple.min.css","e9cdcec8cfede652189967656de1673e"],["/lib/pace/pace-theme-corner-indicator.min.css","af542ad286bfba5f8e1f44923fd491e4"],["/lib/pace/pace-theme-fill-left.min.css","64eb41d53472ae4a3b3d700dfab0afda"],["/lib/pace/pace-theme-flash.min.css","d77dd5b0491a35b9ad59171496537fdc"],["/lib/pace/pace-theme-loading-bar.min.css","8042f9e2ca08ca9ceca2c7235b8d0663"],["/lib/pace/pace-theme-mac-osx.min.css","87c6562834e5ed6cf30b46052850cbee"],["/lib/pace/pace-theme-minimal.min.css","4a2fceb8ebb755366eabe076dfc83431"],["/lib/pace/pace.min.js","97d0867edd0797528f8622cad8331606"],["/lib/three/canvas_lines.min.js","9b1b317fd4fb34c6afc8e42d1963481c"],["/lib/three/canvas_sphere.min.js","d7e15ba807b80ab95bb937f68c9e70cd"],["/lib/three/three-waves.min.js","ca2ee90b408250d5a50f8423de9efa73"],["/lib/three/three.min.js","0b6f2f67fba36b3de550de81e111b7ec"],["/lib/ua-parser-js/dist/ua-parser.min.js","f3ca8fd9226b36a8fbf7d450833000ab"],["/lib/ua-parser-js/dist/ua-parser.pack.js","43a0df6ccad24bbc789a4367bb0eb572"],["/lib/velocity/velocity.js","94377a370f1db36f42f27cf55e975436"],["/lib/velocity/velocity.min.js","4f5ede566aa925471c64f6a8b34d7c4d"],["/lib/velocity/velocity.ui.js","57915987db773e396a2c31603bb40751"],["/lib/velocity/velocity.ui.min.js","5d2e72d69f472d3074f96f9426fc5442"],["/links/index.html","29fa0e3c978efdc3a1e9bdf0240d1e3d"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","b843adf0fac9b89dbc89454601865cdd"],["/page/3/index.html","f4500a121824f2be97f9b2ebc33c777d"],["/page/4/index.html","2519c30a3db01b71641e4d24ca381b62"],["/page/5/index.html","d928a261648764565aa6b193c6f44e6c"],["/photos/index.html","d33e40bfefcb535ee7c54d5fed993385"],["/posts/191ddb73/index.html","02ae6864f02b1a8c26ffece57bf23369"],["/posts/1a195976/index.html","8fda4b4a6d0af5b410ce2091242312cf"],["/posts/2292f1af/index.html","d4a8ffa5094e5682cc75bf640db9e151"],["/posts/29d57d6/index.html","2536999c75060918b9e041a58595ff74"],["/posts/2fc77d95/index.html","f056f22c9d7df90fe7643f1a6ade1c1c"],["/posts/2feacaf4/index.html","e2a1aa16a3bbb6350f3334ed4cd9bb14"],["/posts/37f2c331/index.html","9872b08eb5ad8e3f42a86d1fb28a6333"],["/posts/385f0de9/index.html","13e7d0cb5b6e6e05043c3f3a57df997e"],["/posts/3caecfa9/index.html","3560a0d0187faa91b192f258634ec9dc"],["/posts/44414303/index.html","873fa330214d038fe4bb4b772c9aeb10"],["/posts/456610d0/index.html","4ff11ebfc6223bd4170179d96f39374d"],["/posts/45e51894/index.html","cbf8555ac97babeb540571d631e36d4e"],["/posts/4f1131af/index.html","e7a2eebf9956d65b2c323639b89875b1"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","8fde17938b5677e2efc3b14a29be5fd1"],["/posts/517ebb95/index.html","00b3325e56e394926c5c2cc910b7b32f"],["/posts/53bf1d9d/index.html","bfbe8079fcca7d3c06543264ab97c135"],["/posts/554c2ba0/index.html","967afb8b47dd3b33b001d8d67d5a500e"],["/posts/5f093cf/index.html","b951f091760fa0f7867f0d8a22e9ff90"],["/posts/63556f52/index.html","51be5d75d7aa4ed0de5f4efadfa058e1"],["/posts/6d49ceec/index.html","b99a81bc93bcfd25dc4e97ade171d5b2"],["/posts/6de7d9db/index.html","671dc915f5a068d0b3812828d3589cb5"],["/posts/6fda249f/index.html","696c3b5048408e7dd70ee1debc5072f8"],["/posts/72f7a359/index.html","94184600016d5bc4a5cab8633061e876"],["/posts/759a6740/index.html","323a4345e03dbf3135f6f0090739b1ec"],["/posts/84b87417/index.html","94c06cd7332c206a9fb5b9df2718ef43"],["/posts/8a60fcb8/index.html","2a1cecc68d28e892be22b5cc4814a46b"],["/posts/8b4c253/index.html","274d5b27b590672af1af7c795f890c54"],["/posts/92912ddc/index.html","3fb550b628f888964ec364e773421612"],["/posts/954f8e5e/index.html","75d584cfec31da86569697ef59d1b2df"],["/posts/97e5bc9c/index.html","53c1a51a96c4e72ebf308b7adbcb1d7b"],["/posts/9a5c7b64/index.html","bfb5b23e30bc7f853d23600ac19fca2e"],["/posts/9cf9c275/index.html","2fa94293761cde0071bb80ab12ee7299"],["/posts/9f555f82/index.html","13ce8b23c9ab16c71e33c10ecd334c65"],["/posts/ac7d0231/index.html","60cac5a734bc6f3c9a2b7bff6d8b5c4a"],["/posts/c311b112/index.html","5e3c2f0f49a83b48b84757999d6cff3f"],["/posts/c620d4c2/index.html","7f719e15dc2b40db996f0e4495bf9979"],["/posts/cfc54393/index.html","76f30147ebd52493e51097589eec5831"],["/posts/dc5155ff/index.html","9743a2af47dd5db8d9fddba18bbd7528"],["/posts/e1bd836e/index.html","63ded23b3a58b0bd5a6c889438862516"],["/posts/e248bec8/index.html","08851cf18e9564efefa59c720e44fc5c"],["/posts/e31c0293/index.html","e606a6c718c683f222d762aaa4284c58"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","8d9ef715f9b8e50d07ffc2a41ee73a4e"],["/posts/f8073739/index.html","ef0b638d08513e75ead23a72d4dc907f"],["/posts/f97ef43b/index.html","ea11ed9050b542132c535ca85c847955"],["/posts/fa84d5fc/index.html","3004ab4faa7f1b615539e7b1046ef7c7"],["/posts/fb1ab942/index.html","87ae87561c13840cd38fe917c6f93386"],["/sw-register.js","9e5b8537ca006250577727ffca7f6533"],["/tags/J-pop/index.html","e97ab9bd902fdb792c19e4414500dd9f"],["/tags/index.html","ffb71228cdd4c69199dd6a1d6c18b262"],["/tags/ことば/index.html","228a979fd4714c6276e2572be9dc76e3"],["/tags/つぶやき/index.html","c5a253ca4782158562b90aff61141de9"],["/tags/アニメ/index.html","bcaae0fc5552e9b7c81df0a6627b0fb2"],["/tags/インターネット/index.html","e4e95924660709862a23dbc5c9fbcc08"],["/tags/チョコレート/index.html","80c1657d3786b9130bd742cef5f65157"],["/tags/中国に関する新聞記事/index.html","e5db0964c42f23938fcef99c5198d0af"],["/tags/乳製品/index.html","d31a90a1472995eddc60c55072544912"],["/tags/労働者保護法律/index.html","19150af68617b1cf4c7e1b548bd16d9e"],["/tags/心理学に関する記事/index.html","fd1ba9fb4facee1c2e330e0b98485500"],["/tags/日常生活/index.html","ff586d26c2949e7a817335642ecf8bac"],["/tags/日本のIT教育/index.html","a1fe984044863a85a52ab8edc6b4d5e6"],["/tags/日本のIT現場/index.html","320aa9e680993b93a58b488c27a61652"],["/tags/日本のビジネスマーナ/index.html","c10eaf2a7b1b37265d957b2c2bda2c62"],["/tags/日本の国内の人権状況/index.html","fb5f1950efcdd7c88d1cf178426d1e3a"],["/tags/日本の経済新聞記事/index.html","1c78d78528b9c62e403e53bce54b5fa3"],["/tags/日本地理/index.html","0087c1209f431ffa38cb8cc715439940"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","04fcc3949f44a270fad068f6f09ae4c9"],["/tags/過酷な現場/index.html","6e7201550ba360aeb45f18f9b8a80922"],["/tags/金融/index.html","cc8b25aaed4654063e6c024a63e089d1"],["/tags/食べ物文化/index.html","8eac53702027cfb3ea47c3710e7fe95e"],["/tags/食品工業に関する記事/index.html","4c5dbd03f8ef8b73349a5c51c3272657"]];
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
