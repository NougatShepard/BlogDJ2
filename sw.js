/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","d42e8987c50405f52fc14c4a64489591"],["/about/index.html","fccac0a6cdef752401394bce34b9a3d5"],["/archives/2019/04/index.html","6be359ff76de4d1ed0e60e4ef99db58e"],["/archives/2019/05/index.html","bd59ce1bbfd9aae6e930cabc4b567a6e"],["/archives/2019/05/page/2/index.html","47e401c9ab0afdf877b540e0d46508b6"],["/archives/2019/05/page/3/index.html","8619f39adb5cffe02daf7424e7a3ace6"],["/archives/2019/06/index.html","c6430dfee80be80ad637cb6faf0a4118"],["/archives/2019/index.html","93da521a9efaa9e278bdf1cf12fd85a8"],["/archives/2019/page/2/index.html","9c18332ebf6d8c38ed448a5346c1cf8d"],["/archives/2019/page/3/index.html","6d64ffa4d1b9d7d47f2aa41bc42ba0f9"],["/archives/2019/page/4/index.html","56ecd4a7266dccd85ff620c2a503554e"],["/archives/index.html","ecd8ec72ac4c30f722a1fa4f372b89b0"],["/archives/page/2/index.html","64b4a0c7727b5484d89a4e06bf394402"],["/archives/page/3/index.html","83598e202676755363ec4e5d9a807109"],["/archives/page/4/index.html","f8e7841bcc66080df0af826653f05665"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","08b8571ab42e734ccdd7cc108002bc51"],["/categories/index.html","14f3ffbb626449310db0229ee79eaae1"],["/categories/つぶやき/index.html","e86ee9e5ec5aedd6bb04b522c8f42b35"],["/categories/アニメ/index.html","af279d7bd1f730611e2510add6a5b98e"],["/categories/インターネット/index.html","a5dcb6408574cb0fd284578d4b2ecbbe"],["/categories/中国に関する新聞記事/index.html","a92c35fdadfefbaa2cd86b51ef91dab6"],["/categories/労働者保護法律/index.html","79f43f350698def8eae685fb3b3ac776"],["/categories/心理学に関する記事/index.html","a115db4304f4ac910437c7f6fc9dd4e2"],["/categories/日常生活/index.html","e48637f4f9bc5e6f458366ca7a64c4b5"],["/categories/日本のIT教育/index.html","d5ef3664cdb6ed9bd9efabbe519a7f34"],["/categories/日本のIT現場/index.html","af8243d1febd6dd924f8d07b6a7346b7"],["/categories/日本のビジネスマーナ/index.html","46aa2963c8ef17393980016ec8a34c63"],["/categories/日本の国内の人権状況/index.html","c56db411eaae17a3512ede86b2ef2ffb"],["/categories/日本の経済新聞記事/index.html","8b61092851e5bdd1f09361f8a5547555"],["/categories/日本地理/index.html","d2bbd5e8cf856f5eb96719ac66a307f5"],["/categories/毎日ことば/index.html","ae63495feaebc6cfcd532fb68fa77154"],["/categories/环境/index.html","e907e3707a6356f7e980346cad1a529a"],["/categories/過酷な現場/index.html","63205eb649aad3fb95220a8f63e0e58a"],["/categories/金融/index.html","e360fbef94a44dc900252224620ef5ae"],["/categories/食べ物文化/index.html","79d08d929e721a3b602a84a68ec10daf"],["/categories/食品工業に関する記事/index.html","a6184fb5a9757b7010f9e4aa977927ab"],["/css/main.css","60c037df75d5329cb6e84b93ebd28dde"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b8c7e39535be2b76b9245710dce0e745"],["/js/src/affix.js","5919fc2c9dde98bf786e77fe819d2378"],["/js/src/algolia-search.js","7c05c29c80120e4a9332baf4822d457b"],["/js/src/bootstrap.js","fe91c4f4526bedcc13d6666b87665fb7"],["/js/src/china.js","b9850ad82c43149724590ffb7a8f9448"],["/js/src/echarts.min.js","a9bfd9babbb34db815fb9784a426f60b"],["/js/src/exturl.js","4e2011d09a9ca0b62f1f70093ac84f21"],["/js/src/footprint.js","b0eec1be199bcc2f6b05d8821a5baa75"],["/js/src/hook-duoshuo.js","06a986ee1cb75b0be553f5469149a8e2"],["/js/src/instantclick.min.js","954fcac2d88e92236aafae3bc18cb5bd"],["/js/src/js.cookie.js","c1afc105c267c380d77560bc89d4f6da"],["/js/src/motion.js","2612dc13d1257516b3537719a211b892"],["/js/src/post-details.js","b12cc8377bb2354915d248f831a63afc"],["/js/src/schemes/pisces.js","2cd3e530145277fa1c7efcc373eec0f5"],["/js/src/scroll-cookie.js","dc95559c6f8b4353def96d0148a2fdce"],["/js/src/scrollspy.js","45d42bacd5ddd20a6f498bd8c58da792"],["/js/src/utils.js","c314e29d934a053f23dfd8dd6a75d8f1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","494df6fca199388ff33a959df0ad8bc5"],["/lib/Han/dist/han.js","d511743292cdb6c2c3c7771de01bb5da"],["/lib/Han/dist/han.min.css","9b91b7da551eb264b1bf0ef40aecc9d2"],["/lib/Han/dist/han.min.js","a7290f9559157381944f598732063021"],["/lib/algolia-instant-search/instantsearch.min.css","af166ff1c7b353637f39412858a3acc7"],["/lib/algolia-instant-search/instantsearch.min.js","f39d097fae9957cc73c288db8e66c371"],["/lib/canvas-nest/canvas-nest.min.js","43d2bd2628911f2dbad2d50fd26911d5"],["/lib/canvas-ribbon/canvas-ribbon.js","34586778362419285a6130487e66d362"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","640fc17673921870284b92b3af26185b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","52e2da47a95f6f34e40c13cc7a7af811"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","02080cad5eae5e10183692ffda0e155d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f55646f085c120516c4fbc5aac6ca66d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","8d8522b7672795cecc0756558809154e"],["/lib/fancybox/source/jquery.fancybox.css","ba6a8f353e8b49b13dcbaac715accc63"],["/lib/fancybox/source/jquery.fancybox.js","ea52d9a30b14f190e671bf3efcd8019d"],["/lib/fancybox/source/jquery.fancybox.pack.js","d52d50768a9e6d96f8edf7872a4fd8e5"],["/lib/fastclick/README.html","a3390b1d37db98472a1139d004353b64"],["/lib/fastclick/lib/fastclick.js","975bb2e00059b7f2ec0839ca10dc7f88"],["/lib/fastclick/lib/fastclick.min.js","0b0dc86c45a226db3f0f549c496a89e4"],["/lib/font-awesome/css/font-awesome.css","e571e940ea15df2b9c06c596d5042144"],["/lib/font-awesome/css/font-awesome.min.css","e571e940ea15df2b9c06c596d5042144"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","3be13e8d8697206dd6b4b5fef0939486"],["/lib/jquery_lazyload/CONTRIBUTING.html","36cd91105ead10404c15bcef9d7c40aa"],["/lib/jquery_lazyload/README.html","841746d460eed3954ffb5a142e8a8b13"],["/lib/jquery_lazyload/jquery.lazyload.js","3a7f4bfd92ea9ebe808739c19622041d"],["/lib/jquery_lazyload/jquery.scrollstop.js","1f6629ae435d05d67bdb16e7194ce55f"],["/lib/needsharebutton/font-embedded.css","b6f3728ef467551ab535c165936f9935"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","cd23a89bc9ce2c8e70e1b037fa74a297"],["/lib/pace/pace-theme-barber-shop.min.css","9582621c32dbe8f138ac3bd04bb183f3"],["/lib/pace/pace-theme-big-counter.min.css","8b9bc73ca19ec9693743bc06b82f7a49"],["/lib/pace/pace-theme-bounce.min.css","2b095a12b4199b3d78fee385367d9c27"],["/lib/pace/pace-theme-center-atom.min.css","ec9cbf82f7608a728cd3871a7e21b936"],["/lib/pace/pace-theme-center-circle.min.css","c63cecdd0b09328ff66ba61c61264ee4"],["/lib/pace/pace-theme-center-radar.min.css","e9fe4fb00a5b608b9cc7a5b0200eb4d1"],["/lib/pace/pace-theme-center-simple.min.css","8d107831e5191be04437e701884e27c2"],["/lib/pace/pace-theme-corner-indicator.min.css","4f62a71c03502c610d7db48c48f89ea0"],["/lib/pace/pace-theme-fill-left.min.css","b660f2af4f01c03facd1264e7120f8fe"],["/lib/pace/pace-theme-flash.min.css","cd59eb7d6ddd6c7a3523dda71439b9c5"],["/lib/pace/pace-theme-loading-bar.min.css","924e2051a24c0ce905888411f90269a2"],["/lib/pace/pace-theme-mac-osx.min.css","13aee167af05005c8a996630aeae4dbc"],["/lib/pace/pace-theme-minimal.min.css","ceab43f8293e11d6f74f90fef68a5afa"],["/lib/pace/pace.min.js","b977fa6a6b91f77207923269a19f259e"],["/lib/three/canvas_lines.min.js","1cf4547b95635c58b5e3ca1a5a496571"],["/lib/three/canvas_sphere.min.js","80725055ea157aefb0baafb9010caa0a"],["/lib/three/three-waves.min.js","588aa6143638e0cf1080b4598c822a7d"],["/lib/three/three.min.js","5cf880be30d4802b0dc33c153d274b9d"],["/lib/ua-parser-js/dist/ua-parser.min.js","2c88d665d936324bd61ceb7296ef8768"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4c26b48090fdfed9b2ca1a0e48bb6fc3"],["/lib/velocity/velocity.js","c5758fb2a4f3e08be50408820ad14fb8"],["/lib/velocity/velocity.min.js","e9eff1419bef238ca00a7d16f6ed2dd7"],["/lib/velocity/velocity.ui.js","c4b90f26efb27907a1eb2122a9f04290"],["/lib/velocity/velocity.ui.min.js","cd5747656f2ad8b8447c5fc0e29c01ac"],["/links/index.html","87ba2fbaf9b8d2e4097a424ccb39a059"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","28b2435a9f23239a70928c57f8b873da"],["/page/3/index.html","4c49b81b5bea18d0ad254aa5afbe9d4f"],["/page/4/index.html","29c317a8bdb53cb47fea0c1ea18b5cf6"],["/photos/index.html","f95b9d8fb0440a4b85060a82cbdadcaa"],["/posts/191ddb73/index.html","54ff1c73683c6b1f64469d699efd44ae"],["/posts/1a195976/index.html","c8c4266301f11c1e7085ba6d7942f2ed"],["/posts/2292f1af/index.html","b0f1a9225d4ba25521612fe2650edc0b"],["/posts/2fc77d95/index.html","5bdab0e70a29102fbd2cd4d0c930917c"],["/posts/2feacaf4/index.html","ee6fa8d8e61afec6ae34adaf731d527c"],["/posts/37f2c331/index.html","2814c010f9eddb774bdd13a366b824c0"],["/posts/385f0de9/index.html","29336ae76c6cda9876641ec2a1fb7d77"],["/posts/3caecfa9/index.html","ea76c8843a0012fe104838ed5279d590"],["/posts/44414303/index.html","dca1f261a0c2238bc59956df5ba48707"],["/posts/456610d0/index.html","8d85a27ee936ae651488fd47456ec11d"],["/posts/45e51894/index.html","40ff213dc92aef355955a609e4e0a3a5"],["/posts/4f1131af/index.html","4775b6cb63dba587e81cbb048605250f"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","6845baa28a84264aadfb62da47872900"],["/posts/517ebb95/index.html","476d0fbdbd21e62306bc012183ef7f6c"],["/posts/53bf1d9d/index.html","1f9bf8264466355372598723c29b69e9"],["/posts/554c2ba0/index.html","3d8fce80767f90804cdc8de7d6d2cfe5"],["/posts/63556f52/index.html","4af8e3292392647e224c06b03ddf2a31"],["/posts/6d49ceec/index.html","3a5d224389d6d699e2e35df7c49f1a20"],["/posts/6de7d9db/index.html","cf0de832cf541b303ede97b62e0f84d2"],["/posts/6fda249f/index.html","5196d99fa816181188ea12cba453b132"],["/posts/84b87417/index.html","8adace604a40b787f5bc500fe6bdef32"],["/posts/8a60fcb8/index.html","9bff86e736ddce79b927efe0b818f3b7"],["/posts/8b4c253/index.html","a60eadfb348982a775a764ddc12331e4"],["/posts/92912ddc/index.html","60bca006470c68fea122d544d342a5e8"],["/posts/97e5bc9c/index.html","68d834d95926e18a4351de00a7be32a7"],["/posts/9a5c7b64/index.html","f80adcb7ceae76df087958e3c8ae327c"],["/posts/ac7d0231/index.html","9d98822075cf73d7b5b8ec3096430a05"],["/posts/c311b112/index.html","d878ee57c0ae8b8920bd5ed0ab01186b"],["/posts/c620d4c2/index.html","dc15c5978abbad56f2241833210e1629"],["/posts/cfc54393/index.html","d123b7c4c280b950f9d1a977f090e720"],["/posts/dc5155ff/index.html","088f1e18c5056abaeba9620fd0fd8e8a"],["/posts/e1bd836e/index.html","0d875da55d8d1c9c9839832deb594361"],["/posts/e31c0293/index.html","3a8781c1d4295906cca9b9192dbeedb4"],["/posts/f5fc4461/index.html","4a65ee7efff4fb6a09b62e358c0aa0c4"],["/posts/f8073739/index.html","0da23cb4df622b2fa646af8031a1d8db"],["/posts/f97ef43b/index.html","f7e25b25742212fc6e722ab2b79b4637"],["/posts/fa84d5fc/index.html","26e9b43538891fb68804a3bc9a5a6931"],["/posts/fb1ab942/index.html","39c70f55ade6b458a2acfcad63a88bfc"],["/sw-register.js","c0b5ecb9b8c85d65da68f46de1c85d26"],["/tags/J-pop/index.html","a9dd93b1b74f3a1aa0457116515dfd21"],["/tags/index.html","d547483593254c6b6b848252a09378dd"],["/tags/つぶやき/index.html","2e0d10411dee5cdb1026ed10a6b1193b"],["/tags/アニメ/index.html","b1761ba55485f84cfb31922c4662c176"],["/tags/インターネット/index.html","3c881cea3b3a90bf8422fb086b07a281"],["/tags/チョコレート/index.html","8487ce85335441830d9a7c0ae8c74eaf"],["/tags/中国に関する新聞記事/index.html","c906bcd5b5b25edfbcae139f48ab2f85"],["/tags/乳製品/index.html","79015e7142ad4f30116c9340bc05c649"],["/tags/労働者保護法律/index.html","940f70f8db00d16a4e1c99a9455abf67"],["/tags/心理学に関する記事/index.html","9fd7acc1d2692cb95cca306c7178c558"],["/tags/日常生活/index.html","f5d7cde74aa29ca35c5c300aca5b3048"],["/tags/日本のIT教育/index.html","e811a90e4e69cbfdbec60fa1cbc47cc0"],["/tags/日本のIT現場/index.html","8ad9eaaef8cd0a8011327964fddf2014"],["/tags/日本のビジネスマーナ/index.html","bd392ce6fa45a701e6b26d4182adaa1e"],["/tags/日本の国内の人権状況/index.html","89c8878ed184b7955c3b38557d23cc76"],["/tags/日本の経済新聞記事/index.html","23ccb3a6fcfbf26e7754597a029f2968"],["/tags/日本地理/index.html","09f8719013f97cc56e4176a60b97d6c7"],["/tags/毎日ことば/index.html","7f8fe3475a9df71970105d3031e0efda"],["/tags/环境/index.html","1bbad2e4dabd4af35deeebcac4a6759c"],["/tags/過酷な現場/index.html","14767f6023a54dcb52ad86f96c83f61c"],["/tags/金融/index.html","2c6bd45d510f6cffbd8e9dcd7016e735"],["/tags/食べ物文化/index.html","8711aaa33e01e81281c4ea88a9a4972b"],["/tags/食品工業に関する記事/index.html","850eba52ee26828e79a9d77d1d73bd4b"]];
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
