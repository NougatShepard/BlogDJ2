/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","0a04cd1ce99e1f466516f3eb3ffb065f"],["/about/index.html","0a3cb835fe03c2520d5d6a5ac8ffbbb2"],["/archives/2019/04/index.html","943386a0886aa6b5cd2fe2a1df49b86c"],["/archives/2019/05/index.html","eb4ddeb1f6d9689a1e7234396e86bb80"],["/archives/2019/05/page/2/index.html","3f4d8c0f8c8fe58c171c388c9eeea05f"],["/archives/2019/05/page/3/index.html","281898c735f9f445c0ee1e1179b3e889"],["/archives/2019/06/index.html","4265e7ca2cde6297171402d6ac5fe28c"],["/archives/2019/07/index.html","4084c6f758e62c74d2a794d113d75751"],["/archives/2019/index.html","c0fd41f3ff143fdceb8ad8597514f8e7"],["/archives/2019/page/2/index.html","660fab10b513dc4f68a4578ccdb62d8c"],["/archives/2019/page/3/index.html","c99679f86ec5ecf6dd72979d24e54c6f"],["/archives/2019/page/4/index.html","3a109419bceddf713ce857e89d2c7f4a"],["/archives/2019/page/5/index.html","b7f3e773112113c7ec2be7f1383d8ea0"],["/archives/index.html","196dd42ae3ba8fb080bc572e504fd0a5"],["/archives/page/2/index.html","4d667fe1cd564d769248fb3427c43863"],["/archives/page/3/index.html","d7bb35fba6f0f02ae5f27e65604a2d4b"],["/archives/page/4/index.html","d2b4baf6e9bf43c96794a3e0372d2eda"],["/archives/page/5/index.html","9de19b1ad6ea5bc5788435c4a63207ab"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","851ef0184fd9ecb45313afcfb5b35318"],["/categories/index.html","72c57d43071c39ce0f54fd9283dd408c"],["/categories/ことば/index.html","5a68335379f4cebe1ec194d758ec16a4"],["/categories/つぶやき/index.html","fa9de708b230ad6ce5df9d6fbe64e5ce"],["/categories/アニメ/index.html","71a5b336c5d48d8c725e4b2553050934"],["/categories/インターネット/index.html","32b4dd830f207c5888019f56e019ac48"],["/categories/中国に関する新聞記事/index.html","28bc0769b35fa388fd64298d668adc2c"],["/categories/労働者保護法律/index.html","38639aed6aa6286a83be4afa6cf21928"],["/categories/心理学に関する記事/index.html","928420de07c643d8a079a6c1d8a58498"],["/categories/日常生活/index.html","cbb48f6ebc36ed5a0de021b190a2d8b5"],["/categories/日本のIT教育/index.html","26a75bd2c9bdc7a547deb289a0daf99d"],["/categories/日本のIT現場/index.html","4267237ca6ea093d629cb6fcf53ffcd9"],["/categories/日本のビジネスマーナ/index.html","c423589eae8ba2da5d350d75265c9e29"],["/categories/日本の国内の人権状況/index.html","98d6b4b21005a0c9c77c8695ea642ac8"],["/categories/日本の経済新聞記事/index.html","303fba5deb8fccbf4d4b918c6c345d1f"],["/categories/日本地理/index.html","3fea922e5b6d558f17ee2627a55bba79"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","806c68884218e2fce87c31b823d9e5e1"],["/categories/過酷な現場/index.html","2881b17f04b821494b066d10f30f489f"],["/categories/金融/index.html","703e28650ad91b9795127ec30ff7c286"],["/categories/食べ物文化/index.html","ba6b851def6b4d23b23ea7d8deeaf55f"],["/categories/食品工業に関する記事/index.html","f61a7a02cf76f64e44b6db7dace5d141"],["/css/main.css","872e6a294a8442bf2df3cf003ac93870"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ccc88ddbb25135f0471d4587737bce44"],["/js/src/affix.js","e03be2a3b4c003df4d177a721a14672a"],["/js/src/algolia-search.js","cbe8d275a3d87c28490852be6ec441a5"],["/js/src/bootstrap.js","d27e707a6dd62796c43208008b087187"],["/js/src/china.js","71cab36e5324502e042c7b7f4dfd9ad1"],["/js/src/echarts.min.js","3b79ffbcc14b62cfeca6d9fe6308da38"],["/js/src/exturl.js","eb1b1fa557a9abdb2b0aef33a705fd60"],["/js/src/footprint.js","eeccd70a605ae51cc75acfb34b9e5a7a"],["/js/src/hook-duoshuo.js","17b067490be99b1e41af05c91b4719a1"],["/js/src/instantclick.min.js","3cbec0340ddc351a04d77c548a43251d"],["/js/src/js.cookie.js","8de242e058da9fdb030d929380d1861f"],["/js/src/motion.js","6e4b45ffec14836548795f8c424b4220"],["/js/src/post-details.js","a286b45b3588b2efd0dc6ffdcb6f7a77"],["/js/src/schemes/pisces.js","30eed33aef77321032e877cfb7ced2d8"],["/js/src/scroll-cookie.js","cccb1eb6ac455e2f1cb1cf828563cb74"],["/js/src/scrollspy.js","83e93dbbcb40c46bb13203451c762ef0"],["/js/src/utils.js","749d470ef99f2d38046969643133ef7f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","749083e9689195d4d6d981e9f7ec50ad"],["/lib/Han/dist/han.js","4efc8fff66c3c3744d023158a4bf2ad7"],["/lib/Han/dist/han.min.css","14b949f9ef2e1c2dab082888d23ba3dc"],["/lib/Han/dist/han.min.js","24538319b18caaa9652f1e2be28185e4"],["/lib/algolia-instant-search/instantsearch.min.css","63558464cbb151f9c842c67eeba18a2a"],["/lib/algolia-instant-search/instantsearch.min.js","e4a64f1f496ab28a4631e15dc72a6191"],["/lib/canvas-nest/canvas-nest.min.js","01f3a3e322c261ca14d812ad31af0987"],["/lib/canvas-ribbon/canvas-ribbon.js","1f2994420f590068a15b01bbd4b05491"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","60aaef73825daa16081f01fbd47cffdf"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a667cf932d6b007789c0a216edf584eb"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","93c9db04012a9321767135a36e824384"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3b7a7d4e01fd6cdbaedd42bbaa66a264"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3d4977349db2fc5b8514e020c69b719c"],["/lib/fancybox/source/jquery.fancybox.css","3e65f33d0c6c35ff8aeb79f626490488"],["/lib/fancybox/source/jquery.fancybox.js","5ba918f8dda7cd1f99fe3ea8ec5eaca6"],["/lib/fancybox/source/jquery.fancybox.pack.js","9310653542e73bca0b15b2baa8830af1"],["/lib/fastclick/README.html","e6b56e38c5f1bb93e94fb6f9bc24829a"],["/lib/fastclick/lib/fastclick.js","626658d986415128d24bf4d7d9884d10"],["/lib/fastclick/lib/fastclick.min.js","e7e9dc99601b86059b6ceda57bb18dba"],["/lib/font-awesome/css/font-awesome.css","b05eb7d1b8676ca7cb5005be2dbd22aa"],["/lib/font-awesome/css/font-awesome.min.css","3290b48b0635abbb2647c9a8a57a2fca"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","80ff71968a954897665bb34654af16c5"],["/lib/jquery_lazyload/CONTRIBUTING.html","3d1864893c522700a633e40e4dc615a6"],["/lib/jquery_lazyload/README.html","3c11e50c6f732d9b1b8105f2de5a4b4f"],["/lib/jquery_lazyload/jquery.lazyload.js","6b4f07fd60b921c05ec842a2e2c0421e"],["/lib/jquery_lazyload/jquery.scrollstop.js","18a420c7624c0adba8db93ed96244fd4"],["/lib/needsharebutton/font-embedded.css","1afdb61b5f3bb941be7017ce504ccf5c"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","df68e2f90357205be2506b33b59802a1"],["/lib/pace/pace-theme-barber-shop.min.css","07db86a98a2782e3726b0ac56fc4f235"],["/lib/pace/pace-theme-big-counter.min.css","9b32a16e238192000266165c3ac7957f"],["/lib/pace/pace-theme-bounce.min.css","369af12a9aa7bb6374377f5a8d1906c1"],["/lib/pace/pace-theme-center-atom.min.css","3d858dbeed8b4673dac7ddf7c3aa643c"],["/lib/pace/pace-theme-center-circle.min.css","fc1a8e795b065fb6535562bf5e22e52c"],["/lib/pace/pace-theme-center-radar.min.css","844622368ce654438f57c96dd207bba7"],["/lib/pace/pace-theme-center-simple.min.css","b07f848432462b4b815b46813a077544"],["/lib/pace/pace-theme-corner-indicator.min.css","3b83d68d8edeb62c0bf7091bb798379d"],["/lib/pace/pace-theme-fill-left.min.css","70e67cea5ed86c743abe0f6eea1919b3"],["/lib/pace/pace-theme-flash.min.css","025cd9f7aee668bb7bc97bca23bb16b8"],["/lib/pace/pace-theme-loading-bar.min.css","155c1af0697e520f9a2c3e34e1afae42"],["/lib/pace/pace-theme-mac-osx.min.css","005d79b5cf7f128eec2b5ac14a537339"],["/lib/pace/pace-theme-minimal.min.css","cfce24ea21317b7f5562b74299711f34"],["/lib/pace/pace.min.js","90eb1b13a068f26bf0843d10d71fee66"],["/lib/three/canvas_lines.min.js","11bd85d8eed6819b72054489a60e5cbf"],["/lib/three/canvas_sphere.min.js","43e15288be983762ec2de6b8e10af7bd"],["/lib/three/three-waves.min.js","359a533a9c20497e03692beb895906a6"],["/lib/three/three.min.js","2a66f0c69b6e5176fde7cdc17b02513e"],["/lib/ua-parser-js/dist/ua-parser.min.js","de1c4f95d841e25a14dfc5270bb57eae"],["/lib/ua-parser-js/dist/ua-parser.pack.js","44c47db8f46db3f1df43a0bd1d04177d"],["/lib/velocity/velocity.js","c3b3a1511cf57c6dec4e314369a0a6a9"],["/lib/velocity/velocity.min.js","74371f8c81499102e68d762697bae349"],["/lib/velocity/velocity.ui.js","dfd32f72faed824417b0f3268a8ec111"],["/lib/velocity/velocity.ui.min.js","b9917ee59dcd072794ba09c891a6eb9c"],["/links/index.html","c8658811c30891c3c6a1ab956f9c5824"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","a2055032d992804142ff9480123f2ad1"],["/page/3/index.html","4007d80a49b175a1e6b33f0e40149487"],["/page/4/index.html","16f159fd872eceb6487cb0d52b9ded39"],["/page/5/index.html","40b83d41adb0d6116e238351470ec635"],["/photos/index.html","7cc235cca8df8e4613ea34ce2282a96f"],["/posts/191ddb73/index.html","cb7f1de8d1bf5615541ccbb39e2aed05"],["/posts/1a195976/index.html","d0e3ac1cde42f1f8e3463c61ea881b17"],["/posts/2292f1af/index.html","59d831123249c8216751ed37be04356a"],["/posts/29d57d6/index.html","7f10b756503961973678e92cdc5c22a5"],["/posts/2fc77d95/index.html","ab5cb67f5fed2c2d557f6e0a59efea72"],["/posts/2feacaf4/index.html","21f8076ef9f8018d130a6f67a93ba060"],["/posts/37f2c331/index.html","05f23a8ae39861a6b013e2da18048c20"],["/posts/385f0de9/index.html","611c9dfe4d147df851943c5f8518dee0"],["/posts/3caecfa9/index.html","24e8b7a74e71d9d8577f4a8263119e1d"],["/posts/44414303/index.html","a28fc8d3e4587b1be1951685f01fae47"],["/posts/456610d0/index.html","573946a6e69d4a45f0752db15a5a6be5"],["/posts/45e51894/index.html","a2a580cb8b341ed86c8d302bae622665"],["/posts/4f1131af/index.html","b881aaf9f85b53917a58fb3f6a8ddc04"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","ac735ce0f4b1e3a959fcd650121a14bc"],["/posts/517ebb95/index.html","4b1a654311d12c1639e54904a9ac2a61"],["/posts/53bf1d9d/index.html","c77577d1fa6fba8952832aa31b65c176"],["/posts/554c2ba0/index.html","779cdc856c00d84009cd3877c78d88f3"],["/posts/63556f52/index.html","41ded8cf17d91fedc1dfccb448370a52"],["/posts/6d49ceec/index.html","2e3d5c9123598c76e38ce79693fd1458"],["/posts/6de7d9db/index.html","bd34aab41870e693c794e711d3d71ac1"],["/posts/6fda249f/index.html","f07bcb0844cef7c37c62c7f261ec44c4"],["/posts/759a6740/index.html","b5143e63316893834538bd90a618c4eb"],["/posts/84b87417/index.html","439ad021c89be4a10dedd4b795a73a67"],["/posts/8a60fcb8/index.html","602f154d020c1fb0906fa5245c08ab75"],["/posts/8b4c253/index.html","7223d90ba53e0e066f17934d6b841c29"],["/posts/92912ddc/index.html","7fad266c986e2a75a8215e4466909d99"],["/posts/97e5bc9c/index.html","7e3632d57d4112614fdb16e67bee8849"],["/posts/9a5c7b64/index.html","2cb6fcc09ebeaf0f5456b403abb4147b"],["/posts/9cf9c275/index.html","b487a3bd836f67752a20137960ba80f1"],["/posts/ac7d0231/index.html","1e21eef3b4dffe02b8857fb313a81139"],["/posts/c311b112/index.html","b2f2870db124b4180bef26171a02ae88"],["/posts/c620d4c2/index.html","15c902ba818d574bd24738d762370902"],["/posts/cfc54393/index.html","abbf92c2e7d744c801c26e2647893289"],["/posts/dc5155ff/index.html","cc22d48ffae54edc9e4c5830a2703c4d"],["/posts/e1bd836e/index.html","efc8eae9c4d46191c56f04523658bba4"],["/posts/e31c0293/index.html","c89d04004dc7a5970de4f1c7dcacbf02"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","5574b0ccfee15741576c1deed91473c6"],["/posts/f8073739/index.html","bdf15d88940ea403349dd93818333787"],["/posts/f97ef43b/index.html","e46a6dd718ec14ffe7ad51cb28f4d8e5"],["/posts/fa84d5fc/index.html","6ecb8c3db8503c3b5055d1505b6bea46"],["/posts/fb1ab942/index.html","26012e5412d4dfa1a794ea59b325ada6"],["/sw-register.js","7f095b060e03611a8c9c9830a895f6c5"],["/tags/J-pop/index.html","a4df4a5451b85b9a9742daf2a713b5c6"],["/tags/index.html","9cd0bfe0bb33a026065db5b6e9e98c3d"],["/tags/ことば/index.html","e8f9635436ad74b0058360df47c21612"],["/tags/つぶやき/index.html","74e0f2f37072fc8f1e711aed47034dbf"],["/tags/アニメ/index.html","1a9487ff7de0bd7cd4c446ba783ff53c"],["/tags/インターネット/index.html","220484bbbf28ad68c702ff6df2e84913"],["/tags/チョコレート/index.html","c687b52fe337e24adbdb7def96c1104e"],["/tags/中国に関する新聞記事/index.html","1a10085ea6cabc86f362244962721b05"],["/tags/乳製品/index.html","f030def402dc0037d7cb394e73f605c3"],["/tags/労働者保護法律/index.html","19ec08257d640ee21c9415caa3a84671"],["/tags/心理学に関する記事/index.html","4eb237c76a42fac67ca687ed63e0e784"],["/tags/日常生活/index.html","8dcc8d955e16368e73368e9f14f9f26a"],["/tags/日本のIT教育/index.html","cb9c63ef5beb555fdb1a6b9e98f0bd79"],["/tags/日本のIT現場/index.html","bda72eae923ee8e263c05d5dffaeac43"],["/tags/日本のビジネスマーナ/index.html","6e0f79190ae6e54a56264a10a7e1dad9"],["/tags/日本の国内の人権状況/index.html","43513ff6f243cbd35639758fa7f28166"],["/tags/日本の経済新聞記事/index.html","4ea005c402f65331bc12cf604e98f261"],["/tags/日本地理/index.html","832cd98185ee850d03f767b7bcb452b9"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","5802cb838fce5890c2be7e0488ed847b"],["/tags/過酷な現場/index.html","5cbf460bc2527807e84622b693e39676"],["/tags/金融/index.html","9425f01dc11a3e0f4707c23c3a789c9e"],["/tags/食べ物文化/index.html","e844b832c04a962176fcc1ba70e69542"],["/tags/食品工業に関する記事/index.html","7871e4da295e97bbb5817853ee1d5009"]];
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
