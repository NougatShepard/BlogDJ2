/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","8e5646015863c08da86dcc1d7799fb83"],["/about/index.html","ff89411be6f961b4848bdfdc2ccdadbf"],["/archives/2019/04/index.html","60fe619e54c4cd63b2744dc17e863db2"],["/archives/2019/05/index.html","042fbe28c8bfc44043ed75b787cadc24"],["/archives/2019/05/page/2/index.html","7f9812f7cd8a47312362a9a7afe112a0"],["/archives/2019/05/page/3/index.html","beff50f15f352b83885e49a523b55803"],["/archives/2019/06/index.html","6ae5a3a4474acca0b0692faee0f9ae2e"],["/archives/2019/07/index.html","1889001c7f1bd108a9e430c729c937bc"],["/archives/2019/08/index.html","02c652966e0b268c59c77a0a80937ff4"],["/archives/2019/09/index.html","91299f6e5169922228512b89c50d6513"],["/archives/2019/index.html","a82025a9c3f411150d69da103f811d0d"],["/archives/2019/page/2/index.html","e88311a0f0062ae2603d176c5441a095"],["/archives/2019/page/3/index.html","68de310f9e83cde1b85865ee7a7115bc"],["/archives/2019/page/4/index.html","495db0fdbbc5881472f5b3d5e429ef94"],["/archives/2019/page/5/index.html","815353def315b068fecd69a308d14ad3"],["/archives/index.html","f52e5175f51f18a77d5325aed06ef6fe"],["/archives/page/2/index.html","b20ba96ab79902ec4344f51d32989bab"],["/archives/page/3/index.html","2e9f5f337feda3069c362d3e95b37169"],["/archives/page/4/index.html","33bf41c10590a2fe3d3f8d9e62d3c456"],["/archives/page/5/index.html","31ebde3cd662e876e9a167dae60e6e32"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","d7d01a88c173a6c3727137d100df0648"],["/categories/index.html","4c6f2b8427cedc5d1049fda52ca57bc1"],["/categories/ことば/index.html","2798b0bcbb76119c3f06d6d1ebeb1919"],["/categories/つぶやき/index.html","b58a60f62c82416a2b8e5a323cea53be"],["/categories/アニメ/index.html","e3a12c2978637ab9f7c262de0a745f7e"],["/categories/インターネット/index.html","2117fd0c36b456e3253996727af2c8ef"],["/categories/中国に関する新聞記事/index.html","266b41963de64574b6afb003cacde0d6"],["/categories/労働者保護法律/index.html","69ed1f5542f9729adc319f65d64b0390"],["/categories/心理学に関する記事/index.html","5cd980cb4a26fa8c08d5ef0f11a3c02f"],["/categories/日常生活/index.html","0658dfa1c014ecafd852108db78e67e7"],["/categories/日本のIT教育/index.html","6fc62bf318c1fa1c14da97cc26bbb01c"],["/categories/日本のIT現場/index.html","e950f999a213fc79aecadaac2a6b13f6"],["/categories/日本のビジネスマーナ/index.html","56ab6241d6fa172210ee252a43650197"],["/categories/日本の国内の人権状況/index.html","51adb10a2147e7f229e3192c7c4cfdb6"],["/categories/日本の経済新聞記事/index.html","02f0214de5be09dffe0887697ad82c72"],["/categories/日本地理/index.html","4077b86516b994f419225f618e90fa24"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","ffad8d5f1134b7023211fee7d1010df8"],["/categories/過酷な現場/index.html","699859d5674be74db155038b9457e5fe"],["/categories/金融/index.html","e57b316a043f6fc1df6ee058d5d159ef"],["/categories/食べ物文化/index.html","eb96739e60b37b9b0f8be68a146d39cb"],["/categories/食品工業に関する記事/index.html","9081b4d9714c744ebada36451aa79af9"],["/css/main.css","64a6ab614cd7a48dfde58f6c14da05dd"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","118afbc41ea41bfa21bbc1d4e68fc37c"],["/js/src/affix.js","97cd5791abb3a09a6cd81b6738fede27"],["/js/src/algolia-search.js","673a6e9abffd366f364efa3dde3b0dea"],["/js/src/bootstrap.js","c59a8b0e7e5d786572466dca5c973ce9"],["/js/src/china.js","02bf85d7640c304d424a83f161806e9c"],["/js/src/echarts.min.js","e6d6c18fd0582a6c99ced2147feda5cc"],["/js/src/exturl.js","77f222cdafe238d37a1de563746c35fd"],["/js/src/footprint.js","f6804f217bd5bec6e8f5e2d37fab3080"],["/js/src/hook-duoshuo.js","57e7f18273c3ee7539e34a35727b1b0d"],["/js/src/instantclick.min.js","c32c564899ad492cd0a90353d2325727"],["/js/src/js.cookie.js","892754a19337ff205a35228e22f7244d"],["/js/src/motion.js","1f5d0487fcb06e1c745d754a24118e4b"],["/js/src/post-details.js","1cbe019bfacdb7c2f8ba6c60609a4f88"],["/js/src/schemes/pisces.js","8ae7def6232a9f90c1fcbd6a5419ac16"],["/js/src/scroll-cookie.js","d97bb5a8b6c988888dff65e4327234c8"],["/js/src/scrollspy.js","535f3c0c4d2690d76de0fcf4a3857e01"],["/js/src/utils.js","4b27f6496fe72b8802ac5801d726e1aa"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","e08778f68ced290c9aae2f2e1620db4c"],["/lib/Han/dist/han.js","0d3786e62d9a95bfdc2d9171ec3e2d52"],["/lib/Han/dist/han.min.css","797acb4d398e36a8681b6a2ddb3eb20c"],["/lib/Han/dist/han.min.js","6b71d2a7ff94a05a6b18f07c07c3e438"],["/lib/algolia-instant-search/instantsearch.min.css","7ed8934386326153d3551f74072c26df"],["/lib/algolia-instant-search/instantsearch.min.js","7e6aa2a6a375224e0d23c14e6c9f6b83"],["/lib/canvas-nest/canvas-nest.min.js","f0c14a5ba7e31db5502ad9af0fcfa92d"],["/lib/canvas-ribbon/canvas-ribbon.js","729558e86e8da719e6b11bba592ba148"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","76e77b778f6e72311b5c3ac8b164898f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4958deba93fa22e9da18485509cdb95f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","cccc5adb659831726423009971710e79"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","8fa38d109a2f8615ea85c5f9d1807703"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9e1aea698643312825324e4b2b56be67"],["/lib/fancybox/source/jquery.fancybox.css","18d131ec09032110a919f254a88d9791"],["/lib/fancybox/source/jquery.fancybox.js","001da7c946d0a066374c72dc50ecfd89"],["/lib/fancybox/source/jquery.fancybox.pack.js","063215428fa9cebe1a72e89ab894c117"],["/lib/fastclick/README.html","993ec4422922fa80e278ff8a06d0b829"],["/lib/fastclick/lib/fastclick.js","a2868f469c32d3cd12f04ed3eab926fc"],["/lib/fastclick/lib/fastclick.min.js","4cbb1af380e4c14bb8908c7a593c5c5d"],["/lib/font-awesome/css/font-awesome.css","1b99f91b60147e60d714304fc844988d"],["/lib/font-awesome/css/font-awesome.min.css","a108a3d4471922375e8ff03b09d47f0b"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","2f64c54cbb70f4800df79d84a4a8e59d"],["/lib/jquery_lazyload/CONTRIBUTING.html","99f3f2d9dc36bbc053d671706430eb6d"],["/lib/jquery_lazyload/README.html","ecc23cbefd3c2d0b9ef752d86125ef48"],["/lib/jquery_lazyload/jquery.lazyload.js","ce99aaad96dcd178a43e07b9b2ffab4c"],["/lib/jquery_lazyload/jquery.scrollstop.js","b2d53662bd5a4ed8b851f9da235dc751"],["/lib/needsharebutton/font-embedded.css","c043fb34b942440ce0ebeeefef3f210f"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1ddcf31cc8ac6f8481b8e823b44c21b4"],["/lib/pace/pace-theme-barber-shop.min.css","2a9c49cf8d2cb324b3c007c6f27a9052"],["/lib/pace/pace-theme-big-counter.min.css","5e1aa3a3454c0fdb9504a707db1e7b22"],["/lib/pace/pace-theme-bounce.min.css","ac1135ad95f69dc9d12842deb7b14498"],["/lib/pace/pace-theme-center-atom.min.css","8bcee3f69b2b194d16da8177d23ccc48"],["/lib/pace/pace-theme-center-circle.min.css","4dd38a80165fa85767efffc4742febcb"],["/lib/pace/pace-theme-center-radar.min.css","7329e583874d84981619e390caa7a12a"],["/lib/pace/pace-theme-center-simple.min.css","0c533c5e749f400848de142f0f7b584d"],["/lib/pace/pace-theme-corner-indicator.min.css","52cb6c3026ec36084e3bb81ec1bbb6fe"],["/lib/pace/pace-theme-fill-left.min.css","959cde9a471dc7be23656e98db9d150b"],["/lib/pace/pace-theme-flash.min.css","6a603000f86902d1d948fd9a7d9234de"],["/lib/pace/pace-theme-loading-bar.min.css","6283e712a6c554e797f2ddd6aca63ea2"],["/lib/pace/pace-theme-mac-osx.min.css","8c964ba812d4333bea662bbd82a12c52"],["/lib/pace/pace-theme-minimal.min.css","36df5b11de26e4d3511d85ac207130a0"],["/lib/pace/pace.min.js","729866a58a2752ba05589b76539d28f7"],["/lib/three/canvas_lines.min.js","3bd8a9d892c4191126b9443c7e3ce575"],["/lib/three/canvas_sphere.min.js","426ec4dae4c44cd1826eb43fa488b8a7"],["/lib/three/three-waves.min.js","99962db48005bebab75c5d9820558f7e"],["/lib/three/three.min.js","48df775df3a12637905dfed59adf7fff"],["/lib/ua-parser-js/dist/ua-parser.min.js","f58939b0bd46a7291cfabcf0de9fdc95"],["/lib/ua-parser-js/dist/ua-parser.pack.js","201b8eabd2309e88d4c4fd8c83cd2e0c"],["/lib/velocity/velocity.js","3504a49667949cd5435d8f6463c9e5ca"],["/lib/velocity/velocity.min.js","b30547245cbfeb4ee9fbcde927c4b536"],["/lib/velocity/velocity.ui.js","2b5c93f436dcc5798ff1b66f57838b61"],["/lib/velocity/velocity.ui.min.js","ac5e96335f7d9b345842c705fe2a9a6c"],["/links/index.html","b59cb3da2a4f0bc119fefa14cde5ef7e"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","6613d73ef6ec5038e92f5a00cbc64b60"],["/page/3/index.html","96d0ba28e148b040861443d56accd2a6"],["/page/4/index.html","8a7f4b336e89934105feac5424156ac7"],["/page/5/index.html","345290ee378889abc401f31cc1314767"],["/photos/index.html","f2e61d5fa7616a9f3eda8a7be96a31ca"],["/posts/191ddb73/index.html","6a6fb90ebfd03ae2bbba3fe7845d06dd"],["/posts/1a195976/index.html","d58ab26b831f68f5410914b0d4510989"],["/posts/2292f1af/index.html","e8fb3e52eb27f17c723718522df98edf"],["/posts/29d57d6/index.html","071ad0c80627691705463e30ade7a911"],["/posts/2fc77d95/index.html","a9a74672311a5c2b3f097b95388d5b63"],["/posts/2feacaf4/index.html","1fe6be51ac0d579db316e3caf8ea51d3"],["/posts/37f2c331/index.html","87bba8b07a17c321045314315c3fdf65"],["/posts/385f0de9/index.html","4196b85dc5d87d2ccf3a33431aacdd2d"],["/posts/3caecfa9/index.html","d77072a4a3412a6134a9e104ec2f2a80"],["/posts/44414303/index.html","c9c922073f60dfd7428bec369c2a777f"],["/posts/456610d0/index.html","1040a45f306659fa94f856c34c6e1006"],["/posts/45e51894/index.html","9906eb3b2fc38b683b45e4ed84b58169"],["/posts/4f1131af/index.html","7ffbcc480e3e9f9b8e9d48dc0b34dafe"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","3abf5c38d787940a390c06645638fae5"],["/posts/517ebb95/index.html","e3ca26e13dae7450a078b7a1014cd6e8"],["/posts/53bf1d9d/index.html","3186f5a477a219c85a49290dc83830e6"],["/posts/554c2ba0/index.html","a606b41f56f6e6bf117c620de773f82c"],["/posts/5f093cf/index.html","77454515104b8779f7184a491e59843c"],["/posts/63556f52/index.html","5b4fb4281d2c284e950a490248f05257"],["/posts/6d49ceec/index.html","b2eed7090db06737fb2a1115bab4e95b"],["/posts/6de7d9db/index.html","c0f53c0a45a753c52eaa923a70554e22"],["/posts/6fda249f/index.html","27f3642f12e37c7a5df7e98c3e669b56"],["/posts/72f7a359/index.html","68905dc16c910bbb1965308903216d09"],["/posts/759a6740/index.html","b3900346a80050cd7de9bdef4d0eb959"],["/posts/84b87417/index.html","edd2f82159c1153dcd77fa67a007c245"],["/posts/8a60fcb8/index.html","91ead89ca9933191ff0837d1ad2da3dc"],["/posts/8b4c253/index.html","8dddf77fd188b8d49d6d58f768799aac"],["/posts/92912ddc/index.html","cc0e8beda080f6aa49b517dc590081c9"],["/posts/954f8e5e/index.html","a6ed841d22bdbbd3425839b73f23d43f"],["/posts/97e5bc9c/index.html","7176b365bff879de2bf736cb8a77285b"],["/posts/9a5c7b64/index.html","e6cb0d2088e802b0d94808d3d800a179"],["/posts/9cf9c275/index.html","7c02f22c58053c138f153e1fde4c292c"],["/posts/9f555f82/index.html","f4de63c699c79b0a37a4c46e30f4259e"],["/posts/ac7d0231/index.html","5fb9a4540ce2cd9e6a16d5bf06af4a2e"],["/posts/c311b112/index.html","169ebea94bc144bc9568a77fdfab0890"],["/posts/c620d4c2/index.html","1fe1393287d9816adbaef197cb533ae3"],["/posts/cfc54393/index.html","309dec0ff39a9a43b421518fcbbc710d"],["/posts/dc5155ff/index.html","e5d1d3d61193ce507be6b950453f2c2f"],["/posts/e1bd836e/index.html","7de2e25100e8a4d7102ba9f83b601e93"],["/posts/e248bec8/index.html","196c205299a0b4da76f04bae8b108f44"],["/posts/e31c0293/index.html","acac5a7e5ddd330bbacdde32552cd22c"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","e466d811ae84868fb846445b1d133ec3"],["/posts/f8073739/index.html","46e993acb9d9fd0d959e85b311e43871"],["/posts/f97ef43b/index.html","c831c18fac3be426d6a24df2e73214f7"],["/posts/fa84d5fc/index.html","b093f27e836a410e656874a0d4642af4"],["/posts/fb1ab942/index.html","a739bfc4ade128cdbad86cee7ec6353a"],["/sw-register.js","263362744f2e466fe9e43742d173eb70"],["/tags/J-pop/index.html","03f8a30279edead5f0094b25e07f6c93"],["/tags/index.html","9b3c52674585275c093961787f5d9da9"],["/tags/ことば/index.html","0402fba4fe34d8aaa88021b46b0fd878"],["/tags/つぶやき/index.html","12aba344dd135ef9dba797a6be9e68de"],["/tags/アニメ/index.html","2470646f89c858febc43615dd0e3d706"],["/tags/インターネット/index.html","06db42af37b287cdd950ce8ede610870"],["/tags/チョコレート/index.html","db271d1772a89b7909d86152247d1e80"],["/tags/中国に関する新聞記事/index.html","9ef870c4ef7dfe5a09b88cfea797369f"],["/tags/乳製品/index.html","8bdc8b5d0ec687ab13883c85785d9fb5"],["/tags/労働者保護法律/index.html","a6ee19f4f86f47c58b55901c09cdafa7"],["/tags/心理学に関する記事/index.html","843bec57ccf092e1fd8af2a39bb7a85a"],["/tags/日常生活/index.html","05e88230c4cbba58bd722c117647cb00"],["/tags/日本のIT教育/index.html","3f5f873efae288a63f527813794dc053"],["/tags/日本のIT現場/index.html","150dd2f056cd7094de8aacc7faeb3d29"],["/tags/日本のビジネスマーナ/index.html","1c45129284ccd60ef45d0e4cf674d742"],["/tags/日本の国内の人権状況/index.html","f30dffabc992d849c12f60aa9da4db86"],["/tags/日本の経済新聞記事/index.html","c33ba78378e44135574f08a4560e5ea1"],["/tags/日本地理/index.html","aef8b400d01f64d11497f8272bfec7cd"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","14135131db40f900a8670d2842beae19"],["/tags/過酷な現場/index.html","053d305436c9c5a3c852eb03b4c1f744"],["/tags/金融/index.html","b89e2f79cb944cbb839ea79526a7cf8a"],["/tags/食べ物文化/index.html","fe511e77776192215028764dd22f82e6"],["/tags/食品工業に関する記事/index.html","38ea7f4386a7aad0bbd8c8c8384fdc14"]];
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
