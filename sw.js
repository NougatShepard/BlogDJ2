/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","01da995250c91fef430b68e0c2111491"],["/about/index.html","1c8371dc9a0437dd2faf41a54ba1afd5"],["/archives/2019/04/index.html","2c385b9a272af54edd9f839df742077b"],["/archives/2019/05/index.html","783136130975eb7be2a539e94e840a8c"],["/archives/2019/05/page/2/index.html","27c262abc3a914355f24ecea40c7bf16"],["/archives/2019/05/page/3/index.html","8e3066af57cea5561059e7c03a7b24e5"],["/archives/2019/06/index.html","29fa764c7a945bbb440cf9a8afbbf602"],["/archives/2019/07/index.html","66eae1e9f596993f3af3a1462b0b3ac3"],["/archives/2019/index.html","3184ca218f301926de24682f217e1245"],["/archives/2019/page/2/index.html","87491a28206cef6b1ed1345526b9c328"],["/archives/2019/page/3/index.html","541efa9f0da0753eec8d221861b60aac"],["/archives/2019/page/4/index.html","81279ff60c78191ac7433b33f39f1e80"],["/archives/2019/page/5/index.html","6b4ba53c80e50f3ee608d85e74c84574"],["/archives/index.html","cbce67080700db3b8a7b2919f7a3d21f"],["/archives/page/2/index.html","2cf73100b77296a733e0705c53492e24"],["/archives/page/3/index.html","8ea8deb74b0237654897183d4f90e02d"],["/archives/page/4/index.html","33f6c9f33b04eb07bfa82e54a7ebcffc"],["/archives/page/5/index.html","00126a9103db672fa63c3b0e2abeb1fb"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","391f49e3c833e45125c7f283b70c9da6"],["/categories/index.html","f7464a28b8508ce5bb56f86cd008d0e7"],["/categories/ことば/index.html","a030629e58bd53e7e43af444ecadb894"],["/categories/つぶやき/index.html","19b6a336d3dd3bee1f9c3d9c76adc95d"],["/categories/アニメ/index.html","5146bb133f78bb3fbb9f14d4a5ef2571"],["/categories/インターネット/index.html","8d3543d0912e26cc6c89bdbe8a63eae0"],["/categories/中国に関する新聞記事/index.html","3d195b2d2bafa9f11f72f78e4f96952b"],["/categories/労働者保護法律/index.html","ff6d178b6bd8d1e7d17ca26dfaaa5271"],["/categories/心理学に関する記事/index.html","099a03d44c4d2ae34852012875a34a48"],["/categories/日常生活/index.html","90044c07c78ccb556995347826930fe3"],["/categories/日本のIT教育/index.html","aec812a463a51c37dc319b48945eef05"],["/categories/日本のIT現場/index.html","da484d234c170bbb22f7abd394a8df54"],["/categories/日本のビジネスマーナ/index.html","b163bcf92e4fe021aa6e2a94941a0451"],["/categories/日本の国内の人権状況/index.html","5df01501ca23e1138d2ac332cb8a1257"],["/categories/日本の経済新聞記事/index.html","d2ae8d05f0f23a466ffcda6063a897d6"],["/categories/日本地理/index.html","a42c6ee001f6b74d3a60a1bc4e59fcc2"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","93b47423e9b63784137e2b54550ba367"],["/categories/過酷な現場/index.html","7596ed63538a70f0402ed846bd4d285c"],["/categories/金融/index.html","45a993e3962c99c0baf0ace31a005c33"],["/categories/食べ物文化/index.html","93913b00c4ca86b3df147a6943f78125"],["/categories/食品工業に関する記事/index.html","1b1e088abeb1fa55c9c6cfe8e5503af3"],["/css/main.css","b694f8e080ea538e839f1361cc142261"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f01e8493f90ad308e08bec65965f6229"],["/js/src/affix.js","81650f5a8e8f9ba6b759dd6d5903969b"],["/js/src/algolia-search.js","f8fae16d00cbed1c2b17284b19d12a47"],["/js/src/bootstrap.js","f71b4b9d0a87e83c4f8bb12a5b7f8148"],["/js/src/china.js","1be8981f6b295cca66eaac09e15a492b"],["/js/src/echarts.min.js","0fe8275e34ed78fc6168cba89aa55f46"],["/js/src/exturl.js","a3e7179a7323a4837b38a7ad8195ffc1"],["/js/src/footprint.js","a1b45f666abac7bcbd62f674786e6fdc"],["/js/src/hook-duoshuo.js","d7dbd6650af43e02e0e48a2c78d2f047"],["/js/src/instantclick.min.js","1a48a2191a91586a49d0834c1862af43"],["/js/src/js.cookie.js","86520157ea4fa4b8d0e04c5a1a396791"],["/js/src/motion.js","faae54558ae23dbf27bebb4a04e7e819"],["/js/src/post-details.js","725334093ead1b1731adb3fb786b1a36"],["/js/src/schemes/pisces.js","d7cfd4db450a8c2e5f7a4938490c72f7"],["/js/src/scroll-cookie.js","2c0dc9af3c5e23c6ed20ef17aec78171"],["/js/src/scrollspy.js","6520115235fb16bea54d058d1c939247"],["/js/src/utils.js","3889443c4add169eb60540c753061dc1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","fca795583216d17cf72e3e5babcc48cb"],["/lib/Han/dist/han.js","b5bfa7643f5cef6c31209a2848196ec2"],["/lib/Han/dist/han.min.css","fcffc5e65fdd6605259fc901c8110fcb"],["/lib/Han/dist/han.min.js","21f26f98eb82244673fad78331f01043"],["/lib/algolia-instant-search/instantsearch.min.css","5ec0a3c8bad9f99e71a60e81ed18a4b9"],["/lib/algolia-instant-search/instantsearch.min.js","235b552ce2aad5f291b1a4918345b420"],["/lib/canvas-nest/canvas-nest.min.js","92ddc6b2c01e6f37fe675132f25a2c32"],["/lib/canvas-ribbon/canvas-ribbon.js","ef17bb5776f614a5db49a58184ce2319"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0f0fd84d7be5af6d72090d4ab22fb480"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e9e2bb6925bbe7672835e550bbab792a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","95bf16f53e32deb9a89656d604b888a1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","34e207a555252e7f81e15c65556ecfac"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c96204a651e0b0849575238e4e9177d1"],["/lib/fancybox/source/jquery.fancybox.css","ffe3b9ae2dd71cc3979259d2ec366b5c"],["/lib/fancybox/source/jquery.fancybox.js","6107a0ba0549299a381c594487a060c3"],["/lib/fancybox/source/jquery.fancybox.pack.js","f453c215f206b66cc216ba8900006107"],["/lib/fastclick/README.html","e07a8afad9e922945b00cbd966bedf61"],["/lib/fastclick/lib/fastclick.js","ee96669ad9e405d14ad6f8aff88010dc"],["/lib/fastclick/lib/fastclick.min.js","383685a7a2eb4a2a020bf9ec77330033"],["/lib/font-awesome/css/font-awesome.css","09e6d30c98cdb1a0a6d6a1ca1d1a3b71"],["/lib/font-awesome/css/font-awesome.min.css","bba403374b0c5b074985ad26487bea64"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","35d6a0fed38249ed2f82612f55743844"],["/lib/jquery_lazyload/CONTRIBUTING.html","9fea44c2e6afaf4ebaeffb65cb9d7e4a"],["/lib/jquery_lazyload/README.html","bed08e5c293869f084d31a6a0b487eb1"],["/lib/jquery_lazyload/jquery.lazyload.js","975db5b5b6d781471522c98d1b004958"],["/lib/jquery_lazyload/jquery.scrollstop.js","10c766cb2ebee6660a93f32d639640a3"],["/lib/needsharebutton/font-embedded.css","58842851e40a5f52d4fd277bfde1261e"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","f6746e28282c3ca6b9b64d0e5f7341e1"],["/lib/pace/pace-theme-barber-shop.min.css","2161be9111e82e26ddb7cf5e5ff7b779"],["/lib/pace/pace-theme-big-counter.min.css","fed0ef3a9449f026d06f18edda73e0c7"],["/lib/pace/pace-theme-bounce.min.css","e5cfa0f9de5795c0fafaf51dfd41f44c"],["/lib/pace/pace-theme-center-atom.min.css","197a30517234c4f3b00cabef8850a658"],["/lib/pace/pace-theme-center-circle.min.css","42eeed7056e20f1271bb8da6ec1fd655"],["/lib/pace/pace-theme-center-radar.min.css","7d9abce7fe4078cd41254928f32a89f5"],["/lib/pace/pace-theme-center-simple.min.css","7bc3aa0ed3652a12f1f950a1d912ab0d"],["/lib/pace/pace-theme-corner-indicator.min.css","4a1877d58065183b6765f1ac5f794512"],["/lib/pace/pace-theme-fill-left.min.css","0968cf140dfc02a04fe8f8a6debe7bbe"],["/lib/pace/pace-theme-flash.min.css","242da179fe54f0a95035fc9500e94990"],["/lib/pace/pace-theme-loading-bar.min.css","025d88e1d21bda49a3011cd4bcae49fb"],["/lib/pace/pace-theme-mac-osx.min.css","23f76caba699ed5fc19950d2dffd46cb"],["/lib/pace/pace-theme-minimal.min.css","644a7304b0e983bc13e9d076249c2c65"],["/lib/pace/pace.min.js","a44e8ab1704f949fca5f052615846564"],["/lib/three/canvas_lines.min.js","0a515c69238f90d299931e92dcf256b0"],["/lib/three/canvas_sphere.min.js","09652bd769fa5b3adc8aa8a1432d924d"],["/lib/three/three-waves.min.js","3cb2b8627a068a37e09b7880aa7f7bfc"],["/lib/three/three.min.js","98b940f57045d369a3a90e172d564821"],["/lib/ua-parser-js/dist/ua-parser.min.js","ccf35105dcacd0bc5cca65db033b716f"],["/lib/ua-parser-js/dist/ua-parser.pack.js","dbfa1c2446a9518aa432b2e3d9560ca8"],["/lib/velocity/velocity.js","458fc483cba751b4e0b9dce8f6040cc0"],["/lib/velocity/velocity.min.js","378773f22e3fed8aabc8ba79204fb620"],["/lib/velocity/velocity.ui.js","d3ff78ad0018cbe07d823705d722c64b"],["/lib/velocity/velocity.ui.min.js","a111a92f33587dfefcfa0cae9deb0845"],["/links/index.html","51bf9c1a355d4fe9c493909567043c58"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","a1e495cb62a8387328bb1cdc15e17b08"],["/page/3/index.html","27307db896996d46b93488907f2c5f62"],["/page/4/index.html","918ce143a3d43a3326eb0857f5f3061c"],["/page/5/index.html","2a0f6ae73b5f5937f1b7e7b38fec7221"],["/photos/index.html","4d202e5b02609eaa03b886f7cda31ba6"],["/posts/191ddb73/index.html","795f6dda8e69ca2db88c4b5976902c8d"],["/posts/1a195976/index.html","a2053584fe93e0f070c34bf21a6a0a2a"],["/posts/2292f1af/index.html","35ae0afc226491a8730761da702cd5c9"],["/posts/29d57d6/index.html","7487309489cbfc3d5f7ffc7ada449674"],["/posts/2fc77d95/index.html","e37deee0c8ded8e3bbfba093984676e0"],["/posts/2feacaf4/index.html","cc824bcf85662c633e0d4d6d1f6da46a"],["/posts/37f2c331/index.html","cd2a0f2d145565943e1060cd591457c7"],["/posts/385f0de9/index.html","3f4cfd328fee77b3ff8a2ae907da18cd"],["/posts/3caecfa9/index.html","374c3844da2fce4692cd3511c5f07cb8"],["/posts/44414303/index.html","610db90b796967349912a5fc076d0398"],["/posts/456610d0/index.html","d8b9be5d656a0e735962d22d5d38ae06"],["/posts/45e51894/index.html","1ab36827ab6e926a2dfa5759573e258c"],["/posts/4f1131af/index.html","4faf8bc65a09706c94b6743e4814fb1e"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","a5e0518e03fcb3d35af34b44d5139f72"],["/posts/517ebb95/index.html","1718db6d2c1eeeb6565faccf59665e3a"],["/posts/53bf1d9d/index.html","36aebe8cf49f31ed53b63221c625189d"],["/posts/554c2ba0/index.html","63ed18483c3f5f80c75ffbd82f411bbc"],["/posts/5f093cf/index.html","00160a19be05e91356e85350d624f1f6"],["/posts/63556f52/index.html","a100d02be99df8c70854ec87eefd7003"],["/posts/6d49ceec/index.html","d71ef150aafa67667290c59f21d1b424"],["/posts/6de7d9db/index.html","fd24423e6d1054988c852cb4f64a474d"],["/posts/6fda249f/index.html","1b44516cfcd3bd91e67666f275437577"],["/posts/759a6740/index.html","d831724e911ac26043fc20af587d3a4e"],["/posts/84b87417/index.html","72781f1ba9b3e5c68d0eb3fa7a2b363e"],["/posts/8a60fcb8/index.html","787b7e10e23be303146620d36477297f"],["/posts/8b4c253/index.html","945a0426bf11ca88b2f50445c4e92f0a"],["/posts/92912ddc/index.html","e87f58e320cefadfce77547e205a340f"],["/posts/97e5bc9c/index.html","046336b501f8284d185f6bb160f14296"],["/posts/9a5c7b64/index.html","9a352880a7808412c5bc8b0791bbddf3"],["/posts/9cf9c275/index.html","ad44199325c35892ecdd2e18ca27c07d"],["/posts/ac7d0231/index.html","6248f032255c3ee2a5bb9a2e1a75049c"],["/posts/c311b112/index.html","050adc6350cdd388346f96fcdb9eff93"],["/posts/c620d4c2/index.html","95803d4faf6df0da70511953b868e87b"],["/posts/cfc54393/index.html","f87f59ef500c8fafbf8506971557b43c"],["/posts/dc5155ff/index.html","130a6969329936e1fa9c15288eea9696"],["/posts/e1bd836e/index.html","0b389a90555fc948db327527447dd135"],["/posts/e31c0293/index.html","37fd5d5a859ccae48d6292d69c5acd77"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","1e34f0201cd9d406eb8e3906eaacf260"],["/posts/f8073739/index.html","b7932df57803131e6c80bdc344501083"],["/posts/f97ef43b/index.html","425d71c43df0980d2235b73070c49336"],["/posts/fa84d5fc/index.html","b678db668859b8b0cc826b76bea20e30"],["/posts/fb1ab942/index.html","6ff39d0cf35ad936950113dc1104a23c"],["/sw-register.js","81710f4c38c58211ff61a068e5d1bf82"],["/tags/J-pop/index.html","d344c82100da2088b56952bff45b53b6"],["/tags/index.html","305d2899e9356a155bb6aa1f1ae544e4"],["/tags/ことば/index.html","117ebb1962e34c957d78799adc6d6198"],["/tags/つぶやき/index.html","63fb362133249a268781b3bc58fb3a61"],["/tags/アニメ/index.html","4074189800f528205852306ba79657f8"],["/tags/インターネット/index.html","c8cb18e60c393e16cce4e57133e9e0bc"],["/tags/チョコレート/index.html","0d6348807e07699755a5b5dce7641518"],["/tags/中国に関する新聞記事/index.html","ca319e1317bd1d2f760650413e634074"],["/tags/乳製品/index.html","e1bba921ff0ad70db64df65968bc8f2d"],["/tags/労働者保護法律/index.html","8f719968d9787ecda4c20673915284c9"],["/tags/心理学に関する記事/index.html","613d79cb4ad6d2f967c0230aeb69e559"],["/tags/日常生活/index.html","2f39db7ada1e19af87aa95cab7a1deb3"],["/tags/日本のIT教育/index.html","b11633db926b2e4ad7b9d1a8410ec8c5"],["/tags/日本のIT現場/index.html","d79ad140fcbb669639c8c09b200c44bc"],["/tags/日本のビジネスマーナ/index.html","d7bca5ba236f028526e5141fe989e4a9"],["/tags/日本の国内の人権状況/index.html","082ea04012d3d8c8d688ac0f9ac7e5bf"],["/tags/日本の経済新聞記事/index.html","600e7ea3c70a1957e106020bbeb75569"],["/tags/日本地理/index.html","645bf656182fd528640c495ca5a99612"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","a3c57cdfc5d7925d380bb77ed3b6e005"],["/tags/過酷な現場/index.html","5248eaa2fa7603b8a533cae7aa4748b9"],["/tags/金融/index.html","b7a66bb708a6ac057e227cc32cc8e280"],["/tags/食べ物文化/index.html","a109e77dd5ddeb767a289a33a66cf33a"],["/tags/食品工業に関する記事/index.html","4f476a359ae915c6be5f09b7e391def6"]];
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
