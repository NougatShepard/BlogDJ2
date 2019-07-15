/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","7a2bbb278039cc6848d41cbe06fd247a"],["/about/index.html","3340b2a0364b26fa0dde9a3cf6332416"],["/archives/2019/04/index.html","2491d7b17b55c6354391917fb816ec85"],["/archives/2019/05/index.html","c6a49c1c4a591c88cae7d19cf0f9826d"],["/archives/2019/05/page/2/index.html","882694c21690050e707990d0ecc46b66"],["/archives/2019/05/page/3/index.html","0341b1932708e5cd94f5a097d348d6e7"],["/archives/2019/06/index.html","1f85f7ca9787d56ba1f843ea6f47ac69"],["/archives/2019/07/index.html","30e30d9454ebc02ab63f084d102129d0"],["/archives/2019/index.html","c13092cc407fcd25f0fa0a6634ab03eb"],["/archives/2019/page/2/index.html","dce015dfd06a13d70cda152d614dcb21"],["/archives/2019/page/3/index.html","f5b952cec54f856b1330633a414c2793"],["/archives/2019/page/4/index.html","50e73bb7908c01f6cd9eef17a3ccf30b"],["/archives/2019/page/5/index.html","251622dab8447f3018b3df3ec00145dd"],["/archives/index.html","9f4858fa9e1b2771e240426cd105f479"],["/archives/page/2/index.html","1952b7f7754d0328c727ddeeccc628bc"],["/archives/page/3/index.html","c4b3fe829ce873f5ab822fdec14a11a8"],["/archives/page/4/index.html","d82f3130cffffdbcc02ae75db67a815e"],["/archives/page/5/index.html","f3adc04277979f6d4ae53744c213ea3a"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","f3895d3280a38b0bac00a8388a6ce1d7"],["/categories/index.html","60e1a959191321b5e5dbe43e1492308f"],["/categories/ことば/index.html","25d9c36f8bfbd86ad5cd9868b64daca6"],["/categories/つぶやき/index.html","eb4d18c5d1e9e7b743d628cc9f770b43"],["/categories/アニメ/index.html","a2d75d0373e80338c77f7d7e1587029a"],["/categories/インターネット/index.html","81035ad4bfc940d8931ad1f85b3b3f5a"],["/categories/中国に関する新聞記事/index.html","f1dd4f4f79fbdce0f356f35b2897f461"],["/categories/労働者保護法律/index.html","3bb89d7d8519bde42ccf4ed6c6698738"],["/categories/心理学に関する記事/index.html","34c54685789bb48551f3a935a7c67f33"],["/categories/日常生活/index.html","6a0d750f891469f512804e2a163aac6f"],["/categories/日本のIT教育/index.html","7acd9729e4152228b4562cf26dffd679"],["/categories/日本のIT現場/index.html","9f569c656228405d1671417970d58973"],["/categories/日本のビジネスマーナ/index.html","73ca7c488288c5056ce8c2a4baf09f17"],["/categories/日本の国内の人権状況/index.html","9f936c4d6db04acc56d5b3534bc1d63f"],["/categories/日本の経済新聞記事/index.html","18eedaa2b34a1e2d4e9d548042f567bd"],["/categories/日本地理/index.html","497b9c704787f4d049d2207af6f5362a"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","1e282fa71d4d68e3766bb909c356da55"],["/categories/過酷な現場/index.html","2bb2060cbf15ec50c45dee3d237059b9"],["/categories/金融/index.html","45bdeecca8dbdeb94d9fe033efaf51c8"],["/categories/食べ物文化/index.html","39c42fcded9febaaa451ce25bb737095"],["/categories/食品工業に関する記事/index.html","d12c859e775e1d8b6514f9d861f5bd35"],["/css/main.css","f86efeaebcf8caae8bb3155285d29cd0"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","323a70c6513571de5417fd991df07120"],["/js/src/affix.js","b6b9901fe1820ff916306c87247b1f2e"],["/js/src/algolia-search.js","3620c600ba0292d717de94f63fe783df"],["/js/src/bootstrap.js","f360c5425193c4229e46d4225057794e"],["/js/src/china.js","ecec88c4eaae95161bc145eb02b94912"],["/js/src/echarts.min.js","8f765755c128d11a10f8eef5535fc7c7"],["/js/src/exturl.js","812ca89793cab8ee644e4461bae546e3"],["/js/src/footprint.js","a60167014ea74fd7e679078ec9c68dfd"],["/js/src/hook-duoshuo.js","81509c2d4e0d29fe2149469bcfd04604"],["/js/src/instantclick.min.js","673701f6bec831a30754bd006bdfe79a"],["/js/src/js.cookie.js","cf9143a65dfaf058b6896ac6eb6efb5e"],["/js/src/motion.js","5558a1d3a936523f0244ab72e6b0c3ef"],["/js/src/post-details.js","8dd3826ac52369936a9a307ba50c27f6"],["/js/src/schemes/pisces.js","b8f030e9bd95d5fb7e3904ca570c5439"],["/js/src/scroll-cookie.js","d40ac635886573819088b81d173be33c"],["/js/src/scrollspy.js","bc2952b3e62a945c893a8d037674caa6"],["/js/src/utils.js","de4e370ebd6fc4f7b5a7d9cda04a8eb0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","34311ab8682eff2af6facdd07584ccca"],["/lib/Han/dist/han.js","c3cdce4c4f9374b2581ff14a74735b9c"],["/lib/Han/dist/han.min.css","185eb079a03414a2433dbbb621d70b58"],["/lib/Han/dist/han.min.js","c26c4e82a50f100fd83f32c3f8f283d9"],["/lib/algolia-instant-search/instantsearch.min.css","54821170f34691b44d50dea6aaa8420d"],["/lib/algolia-instant-search/instantsearch.min.js","2e959f2e2e97e1bbb57e677e5d3d2d45"],["/lib/canvas-nest/canvas-nest.min.js","c9f33637d236556031a105bccfe43aff"],["/lib/canvas-ribbon/canvas-ribbon.js","2fce9ea3bf921dffea155733b3fa73cf"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a63189991f5dede5616a80091ca8b6ff"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","1fa26dd8dddaa93ef1c69720c3147f6c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","acb156de1a5b397a79edea790c3ae4d5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","04f0bf651493f526435627a285a924b6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","62e67a1ef2f829552481581bb4073794"],["/lib/fancybox/source/jquery.fancybox.css","3f2e4926ec72d44b877934b187c1fab4"],["/lib/fancybox/source/jquery.fancybox.js","fa44e2a1ab96106dcd1a0cea039280b8"],["/lib/fancybox/source/jquery.fancybox.pack.js","d5fafba5b51a04cc3d9f0fb1104d81ab"],["/lib/fastclick/README.html","dcd2afe478addf375308deb840230f21"],["/lib/fastclick/lib/fastclick.js","437b904e75c28a2b61a5e86d1406b7db"],["/lib/fastclick/lib/fastclick.min.js","2983ea12846945ce0f5dc073699480ef"],["/lib/font-awesome/css/font-awesome.css","3c9a7e49fc7c8033df2113e40def59fb"],["/lib/font-awesome/css/font-awesome.min.css","3c9a7e49fc7c8033df2113e40def59fb"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","ee724f6186d94d57466bff6a01bb9128"],["/lib/jquery_lazyload/CONTRIBUTING.html","49f674c0a9adcaddc929caa80bd4f820"],["/lib/jquery_lazyload/README.html","ace27b24dbea38647d564eb6ac7c15e0"],["/lib/jquery_lazyload/jquery.lazyload.js","269af59272942e794b4ddd6a6e1fc2b6"],["/lib/jquery_lazyload/jquery.scrollstop.js","4d2caa70936214aa7710db70d6f2fc55"],["/lib/needsharebutton/font-embedded.css","3e8607b226d77520565121b715d0a512"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","2c754f942823c2def915d0008e8e7dbd"],["/lib/pace/pace-theme-barber-shop.min.css","13031fa837830e0af20d61f7ddc1959e"],["/lib/pace/pace-theme-big-counter.min.css","b319b17d562ae9034714dfc7fed4a18e"],["/lib/pace/pace-theme-bounce.min.css","b4a2e0ed405a28eda60cb7474b9fd31f"],["/lib/pace/pace-theme-center-atom.min.css","61f0839f8879f7834e7d3d528c5697af"],["/lib/pace/pace-theme-center-circle.min.css","1e9b141ae5fd2b8f989b88cc5dbc0c29"],["/lib/pace/pace-theme-center-radar.min.css","e5d576624edcee5e10feea8e30db67c0"],["/lib/pace/pace-theme-center-simple.min.css","55958e73fa9e6b53b466e303d6b43328"],["/lib/pace/pace-theme-corner-indicator.min.css","453f01364839a8855aba39e8c3d0d08f"],["/lib/pace/pace-theme-fill-left.min.css","68c020bd395b9b5608f66069c7f923a2"],["/lib/pace/pace-theme-flash.min.css","c9e683c97df7a99ecbe11e1e86172b41"],["/lib/pace/pace-theme-loading-bar.min.css","22f678c0143ea0675fd7ffb6238bcbf2"],["/lib/pace/pace-theme-mac-osx.min.css","b6cd70e902e7c85c5bc3e6c2606a03e0"],["/lib/pace/pace-theme-minimal.min.css","77458636bcbbc489ad847cc663b2c61d"],["/lib/pace/pace.min.js","8cd6a4e2caa1df5a60733e1c1ee7d81d"],["/lib/three/canvas_lines.min.js","df8c25320588730cef6ed87d9097ebee"],["/lib/three/canvas_sphere.min.js","bda88a6f496b8ef0efbab8d817fe66d4"],["/lib/three/three-waves.min.js","1b23d57d3ee62bc38df02c750a09b28e"],["/lib/three/three.min.js","1ad5cf30caeb5f75b4dba18a807118e3"],["/lib/ua-parser-js/dist/ua-parser.min.js","f3150da9bf4d24a3731c5a418dc49691"],["/lib/ua-parser-js/dist/ua-parser.pack.js","8a50f39d0e8b117602ee2cb07c122b3a"],["/lib/velocity/velocity.js","9dfdd5870c27f0f2f1e72605574293f7"],["/lib/velocity/velocity.min.js","d7c77b214a7a08f5d51ebca42a27fdb9"],["/lib/velocity/velocity.ui.js","c00102b87f4ce81b346c2be5a19d5bc0"],["/lib/velocity/velocity.ui.min.js","b3752e5d3d691973e34258ea08c49b14"],["/links/index.html","275114359ba56e254474078002b3c9cd"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","2b373364814e8e234ceb8e5f50316ef6"],["/page/3/index.html","5afb88964229c702040a9e2eef89da7f"],["/page/4/index.html","cf5838d72d80a3e7d233cd3082ee714e"],["/page/5/index.html","09d1e6b0ae0ad715dabfc07990ae94d9"],["/photos/index.html","7ec1ed0270ec0c8b9f81455e88935cf6"],["/posts/191ddb73/index.html","9eaf28a889f0edbaf4b5fa6edba0ceb6"],["/posts/1a195976/index.html","3250b8e7216d0450126c2e1ecba676c2"],["/posts/2292f1af/index.html","cda3d57b21869e84b5a0eb5925e0d69e"],["/posts/29d57d6/index.html","bd0cc6646ffa89f8cfbbd8e2792230d6"],["/posts/2fc77d95/index.html","ae555abb602bd30b5d09dc97d767d088"],["/posts/2feacaf4/index.html","52f8012f68913def6b2859eae6873f34"],["/posts/37f2c331/index.html","7e0dee2c305eff651202371595b02432"],["/posts/385f0de9/index.html","f234f64b34697037499711604d806f2f"],["/posts/3caecfa9/index.html","5bd253358890d1cf0d4b6e6b0921d338"],["/posts/44414303/index.html","8d9206f521bb10d7b1667def6fe571e0"],["/posts/456610d0/index.html","0a12e2641a60f9967530bf6926bd9228"],["/posts/45e51894/index.html","9b362e6d3b98114eab97479ec6b7d8c7"],["/posts/4f1131af/index.html","dfa5c0e325c60d18300e7193a246d645"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","167208654ab408696adb44ea9c81b632"],["/posts/517ebb95/index.html","dbf105c840dc0043428fb86d94508ff4"],["/posts/53bf1d9d/index.html","2b8595747aed117ef3fe47cb83fff5d7"],["/posts/554c2ba0/index.html","42cc80eaf24dbd685736ca78a04edd42"],["/posts/63556f52/index.html","6d20165f61f427748f38578530537c09"],["/posts/6d49ceec/index.html","26ed658753461c9f3669e0a8b1083a2a"],["/posts/6de7d9db/index.html","892e2caf45838726f10ba1d0f17c2ac2"],["/posts/6fda249f/index.html","060ae45034f52226a7e46d58db4bfa71"],["/posts/759a6740/index.html","ccff2ceefd02e8ac9df7e1c5f4b4134f"],["/posts/84b87417/index.html","b927da409127960b3d9be36fbeb44c80"],["/posts/8a60fcb8/index.html","1e129ec9ed8c356bf1a37b92c2dfb10f"],["/posts/8b4c253/index.html","56fcb0d6c604a5aa21dd7ae3f0a94745"],["/posts/92912ddc/index.html","ffddd1f4cfeb0df06858dcd3b3f76bb4"],["/posts/97e5bc9c/index.html","7e567bcd0f2a9f1106662d081ca70729"],["/posts/9a5c7b64/index.html","02418c0754b490a8ceec67f83feb56c7"],["/posts/9cf9c275/index.html","232cbe970381ca4b7e3eea78e4fc1c1e"],["/posts/ac7d0231/index.html","5edccbe21098ed2d012cbd1e52e1b261"],["/posts/c311b112/index.html","47bca014868f5d9ed64fe6d804559b19"],["/posts/c620d4c2/index.html","e60a5b1786cb3e1173347631e169e402"],["/posts/cfc54393/index.html","dd9cfd9a3357aee5105f9e8b553d778d"],["/posts/dc5155ff/index.html","dcb11526fe313a4d7ec4979669f16d1f"],["/posts/e1bd836e/index.html","3c704d83b7b9ad3dffd237125a8e99c9"],["/posts/e31c0293/index.html","effce19636a0941bd15390ee9ae0e700"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","69fc307d9e2c2f5add8f87afbdcb7742"],["/posts/f8073739/index.html","b074e0c3d9f4b1685d5ffe885e4f311b"],["/posts/f97ef43b/index.html","240fd0eca02a3de6046e2f298bc6f41d"],["/posts/fa84d5fc/index.html","57db63069e79aa3786714c6b807c4de7"],["/posts/fb1ab942/index.html","dcf0dbb97746c686e1746a737cfe4b71"],["/sw-register.js","1b8b0186944e6d5eb3b7df10752039a4"],["/tags/J-pop/index.html","f8dbbfb9cbf112ada75f48f96d0409b3"],["/tags/index.html","8e3753804548069877abee31dc06f54e"],["/tags/ことば/index.html","9709f97627ea391f586d2c2433d19d25"],["/tags/つぶやき/index.html","68fad6451d1905f9e26cf90d90848b86"],["/tags/アニメ/index.html","d432b2323c1dd4d595d5d7994138c04a"],["/tags/インターネット/index.html","5db526b16d42c049acc68d2fd5cd0ba7"],["/tags/チョコレート/index.html","0da26b3533cf3f8888cb1fe06779108c"],["/tags/中国に関する新聞記事/index.html","48005dbf2fa320dbf5ff3bca2f42f8af"],["/tags/乳製品/index.html","5df38dd71ab23fef2744c7e271df6fb1"],["/tags/労働者保護法律/index.html","b7aecd503705c9b0eb62ce5b1f836db7"],["/tags/心理学に関する記事/index.html","c50d8d5dd7dbd2e02a9f7ded0f1d74e0"],["/tags/日常生活/index.html","ed9f9a5d4896cb5fae0db9796c502858"],["/tags/日本のIT教育/index.html","f99c901a1fed88d87cb113a703ef644c"],["/tags/日本のIT現場/index.html","aed1e49d739aee6f247cf30c08f83a2f"],["/tags/日本のビジネスマーナ/index.html","09326f136d42baadcbc9a69d2885f7ed"],["/tags/日本の国内の人権状況/index.html","eb114f08b5664056146dae888fed7a7d"],["/tags/日本の経済新聞記事/index.html","4224ed4c8e74a3729ba878f8a3eb8f79"],["/tags/日本地理/index.html","1cdd665087ce38a49299e4f0dc0dc7c5"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","19c97a8b56ce8f51332ec00784356069"],["/tags/過酷な現場/index.html","9ab99fea1e25ec2177ae94dd130dabae"],["/tags/金融/index.html","9d66f8bbb07be3a9476f016f220b8191"],["/tags/食べ物文化/index.html","4ef2d15cc3c0c1a71c859d8466bbfaa8"],["/tags/食品工業に関する記事/index.html","9bdda423f508d8fe73a64217fdc7acc7"]];
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
