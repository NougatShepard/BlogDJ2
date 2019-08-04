/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","d7e3965badd9f89a0c84c58983e36380"],["/about/index.html","7b1ae2d1af26e2a14dfbc1bea1c9703c"],["/archives/2019/04/index.html","be927ccb60fd622cccce67647ce3ea6d"],["/archives/2019/05/index.html","139aa1ba0e8bab7fc2bc094e424178fb"],["/archives/2019/05/page/2/index.html","e8152cd49b6c140bb90c1c76b06c5b08"],["/archives/2019/05/page/3/index.html","a4d31d94977a7499868411e863941d97"],["/archives/2019/06/index.html","5073d9d464582af994912ec88b8b98d3"],["/archives/2019/07/index.html","4c6ce33c3ab8824ee4f8ede550dcfbd0"],["/archives/2019/08/index.html","39b609c30749aebe9be0281078b542e0"],["/archives/2019/index.html","2fb53e43f86743b338b91915c636a6b9"],["/archives/2019/page/2/index.html","40cfbb286cb0622a56e6690a02afd806"],["/archives/2019/page/3/index.html","13542359760b5d07a19e5a4d1f969ce5"],["/archives/2019/page/4/index.html","3fd0da8c5cfd9651774e33a29e7ebffb"],["/archives/2019/page/5/index.html","4e01a2b633912f9ebc6965c81f6b4d06"],["/archives/index.html","976308d8b26a885a7b0d51398b85f943"],["/archives/page/2/index.html","d39c6cca963591aea6c6bdcbee40486c"],["/archives/page/3/index.html","fc8ee1439b283391258b33c6d4f2a88b"],["/archives/page/4/index.html","25767a125f22d79c672b4b00c3af3a59"],["/archives/page/5/index.html","cdc09058a7e077f3e32512afe3621cb8"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","c57b7e3e9f19f7dc4477d02226211c34"],["/categories/index.html","ea73588e4545c902ce8dc6a01b7739fe"],["/categories/ことば/index.html","ae902759c5fa486e4cf51b70599e6091"],["/categories/つぶやき/index.html","288f6d37b85bd55b0cf0cdecba1d8807"],["/categories/アニメ/index.html","e855703e8f50e5fb23c9c60df3ac3393"],["/categories/インターネット/index.html","c96f2e0b7d1ee225df31448e4f01248d"],["/categories/中国に関する新聞記事/index.html","53c415abc279f2950934e126d25a3200"],["/categories/労働者保護法律/index.html","ac992820ce568525b1927ecedc1f00e2"],["/categories/心理学に関する記事/index.html","b85118094556be2433243dc1f2118f28"],["/categories/日常生活/index.html","f757d5370eb9ae5ac0914d8f64d1c143"],["/categories/日本のIT教育/index.html","077f075e6994820e2e1cbc14d59d25dd"],["/categories/日本のIT現場/index.html","cd6ccf264627c7b5d44fde9f76c317bd"],["/categories/日本のビジネスマーナ/index.html","f9cda3718627a36ac9e0ac8a0f6057d8"],["/categories/日本の国内の人権状況/index.html","3e03c79596d704cba34e78d5673d5639"],["/categories/日本の経済新聞記事/index.html","a08037914882a0159cdc8b4127d1fcd4"],["/categories/日本地理/index.html","0e89f677025f6cbf93552def8db13aec"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","eabf99b8a1b48759a88f73bebdf624ed"],["/categories/過酷な現場/index.html","b665a1b1a02caff4900a8944d6fdf3d2"],["/categories/金融/index.html","3c90bf6b4e7e62ed0b167f96494b4d36"],["/categories/食べ物文化/index.html","794a77e131ee40c9a593babbd0b8ebb6"],["/categories/食品工業に関する記事/index.html","b455c266b2ef2a106d87153db5dc5273"],["/css/main.css","50acb72221d6cbad7ceac39a8e1d6e88"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f5182ef4ebc7047abcb46073573bbb1a"],["/js/src/affix.js","2bcf0e00e131f8cb31fea37d6f74e39d"],["/js/src/algolia-search.js","7cde8e954a243d899f10949b3cd10751"],["/js/src/bootstrap.js","c51730d86330a29de685c630ff2c4ac3"],["/js/src/china.js","77d50395edd6e2691dfbb9c214ae2de5"],["/js/src/echarts.min.js","619adf79c3048bf85a4b6b71ce39fd3a"],["/js/src/exturl.js","22c6201e76afbd6a42410ba57dbd9997"],["/js/src/footprint.js","6f491b78af89510983ef8c73b73980ae"],["/js/src/hook-duoshuo.js","9798ba4345c77bf79ca8d324b0a6570c"],["/js/src/instantclick.min.js","f42dbf0941ca7abc5a858a632a67b67c"],["/js/src/js.cookie.js","488e30fcf11940602dbbfd427ea3a112"],["/js/src/motion.js","3cb4926924320f65c5bb9e136b9c2f69"],["/js/src/post-details.js","07e0d0855b9127f287ffe37c2f88339a"],["/js/src/schemes/pisces.js","934c4bf2fe0728f6e46296a6b81e2000"],["/js/src/scroll-cookie.js","13816a3060d6c0dd69bc791e23e340d6"],["/js/src/scrollspy.js","6ceb7aebe0ac32131b5bcda19b2d1d24"],["/js/src/utils.js","8b3ca1e4f50931f62def27ceb923e2a1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","0c47ff195b0b2e4733e19e01762ac962"],["/lib/Han/dist/han.js","6240bfd5ea733afa641167300282515a"],["/lib/Han/dist/han.min.css","90a23411be7c12fe05c56497c1b245a9"],["/lib/Han/dist/han.min.js","0d32b953d4d68a273cdd0ceb587218c0"],["/lib/algolia-instant-search/instantsearch.min.css","34c4b12436e5e182ad002850d25ecbdf"],["/lib/algolia-instant-search/instantsearch.min.js","6cab711d58c044167ac23b42806c71c4"],["/lib/canvas-nest/canvas-nest.min.js","8b0c2ba08562bed0fae299d50beb7e4f"],["/lib/canvas-ribbon/canvas-ribbon.js","cdbe8ecce78122313d3acc1dcd4debac"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","69657aa9014d45ea7859c8fdd29de250"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","8d27711d633b655d3c3e472041c748b7"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","23ff5ef31dd42a1f40cec315e07cdebd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","78b68630ecada9a41de70fb0c7250121"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","29e49c1739f4f077990ecfed56cd901e"],["/lib/fancybox/source/jquery.fancybox.css","949b40bd4336d33c097d91e6f3583a18"],["/lib/fancybox/source/jquery.fancybox.js","04ce92f7a829bf3865ee6cf6b402a76f"],["/lib/fancybox/source/jquery.fancybox.pack.js","079b312ef2d20e24c2b17cfde792bbb6"],["/lib/fastclick/README.html","f0c6b246c8bb9ca2dea68362f61d69c5"],["/lib/fastclick/lib/fastclick.js","e4ec08cb1a08336fa4741cb4d72e2a71"],["/lib/fastclick/lib/fastclick.min.js","68a3472e3527faa11fbf8b81028516ae"],["/lib/font-awesome/css/font-awesome.css","7bc7239ffcd578e26c09bb9562bc2750"],["/lib/font-awesome/css/font-awesome.min.css","88bc4607ef6afc4522a3bef2e791ca74"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","3ad7ca384a03a75a506d75ee5658894b"],["/lib/jquery_lazyload/CONTRIBUTING.html","059e197cb89133265ee2a1469e333604"],["/lib/jquery_lazyload/README.html","c4a6bb6a098602e5cb7225a17938e93f"],["/lib/jquery_lazyload/jquery.lazyload.js","42e6c40e25926e4f28eb5d3067b00e69"],["/lib/jquery_lazyload/jquery.scrollstop.js","181aa25d474d96c4286950fbbc3d2258"],["/lib/needsharebutton/font-embedded.css","0040a4ba40d51b8fac20f59e0d4a67f6"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","3eefc8174110cc6e82e83e37f941ff7a"],["/lib/pace/pace-theme-barber-shop.min.css","ecee8c7afb095dcc8668fd1b38b9b2f0"],["/lib/pace/pace-theme-big-counter.min.css","0ef7b8abc4333623c217837685836a35"],["/lib/pace/pace-theme-bounce.min.css","fc838972e92c0fecc02ba343b1caf383"],["/lib/pace/pace-theme-center-atom.min.css","702c08e589534c7c157f92f696f34db4"],["/lib/pace/pace-theme-center-circle.min.css","30cdffbde5b45552f206db062b925895"],["/lib/pace/pace-theme-center-radar.min.css","f2ceb0c50b1f50959dcf0aa67e9bc8d8"],["/lib/pace/pace-theme-center-simple.min.css","4c2171a52873ad4393a05d9d0088f823"],["/lib/pace/pace-theme-corner-indicator.min.css","c799cb2cea4a902973a53a6cf10cdf8c"],["/lib/pace/pace-theme-fill-left.min.css","464c86cd4923dd1dadfd98fdd543b2ce"],["/lib/pace/pace-theme-flash.min.css","c9deb47aff0588f43b3f66315815d875"],["/lib/pace/pace-theme-loading-bar.min.css","c25d9722c5fa7aaeb0e566548053ff87"],["/lib/pace/pace-theme-mac-osx.min.css","d9b4376677962ac3f9c6b8579c9404ed"],["/lib/pace/pace-theme-minimal.min.css","3e487d1c949a5bfbae199122f846e0e6"],["/lib/pace/pace.min.js","2f2d9bdeef5dc8a2fc0e4ca3b2e34092"],["/lib/three/canvas_lines.min.js","3644d8408d9fa4e7101e6c8c51af56d1"],["/lib/three/canvas_sphere.min.js","57ad61c1067bbbd81be4684feaa9dd10"],["/lib/three/three-waves.min.js","b21b8b5d906bb54a26c2d2c40bdf518f"],["/lib/three/three.min.js","3125283217eb0e8e08ba27f417618dad"],["/lib/ua-parser-js/dist/ua-parser.min.js","2c0c741992965880cb734bfcd44291bb"],["/lib/ua-parser-js/dist/ua-parser.pack.js","bc99b33b6f13ce183d72ce69a6ea39a2"],["/lib/velocity/velocity.js","1b2e5dac3e4d0c1317aedeb9b7e249f0"],["/lib/velocity/velocity.min.js","b227c156d9e701c6f273599c53cb34b8"],["/lib/velocity/velocity.ui.js","775ff287f08e325f35ff268d0e8d2433"],["/lib/velocity/velocity.ui.min.js","e35e142ae3421423f4d6421fbc04d04b"],["/links/index.html","9f84ab742db248b354f71aa96186f368"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","9831908e75460fe19939cb3738d7b39d"],["/page/3/index.html","ee62f092ad8db8e211728bde5ffe621d"],["/page/4/index.html","aa5a23c609f838e7dcb7f211ce43fb4d"],["/page/5/index.html","74f2c22628dfd8bc640862c0fede4f7c"],["/photos/index.html","deee45948e9bc470ec625c07777d5715"],["/posts/191ddb73/index.html","d11f5bb4b22c5e09b743182c711c29d9"],["/posts/1a195976/index.html","9080c7a970c1e9bdb891ecd7579d65ae"],["/posts/2292f1af/index.html","e7603c2d0f5f72c25ee9615adca75b6a"],["/posts/29d57d6/index.html","acfa83478950257d84448f758d035e68"],["/posts/2fc77d95/index.html","2d3e440f9bfd94a8556af335f94e298c"],["/posts/2feacaf4/index.html","703ae27ab5d54e7b28393316893af939"],["/posts/37f2c331/index.html","203183f30895dc1d2eb2dae8104fd5c2"],["/posts/385f0de9/index.html","63b78863076aa0eca26ee0259f8a3e83"],["/posts/3caecfa9/index.html","7a4482804d6067ca06f8ebb56860b37c"],["/posts/44414303/index.html","a2b58eee9263f338760cd74627a109ac"],["/posts/456610d0/index.html","adb959cc93e97070bc69bbe8e959843a"],["/posts/45e51894/index.html","52c65a016c12fcbb1e6b759a56b006d1"],["/posts/4f1131af/index.html","86f4f1279b8eb87734de9cc221572eaa"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","fc7b24ad5851ef1794b5bbbb2b2e5708"],["/posts/517ebb95/index.html","62b6461344849807265d38d31563cbac"],["/posts/53bf1d9d/index.html","910fee9007d881c0037ec9adf6f0a3b9"],["/posts/554c2ba0/index.html","27c448c16743bbb0ee9dfe6ff4146a68"],["/posts/5f093cf/index.html","e0e6c92264532424454ea30e5a85f162"],["/posts/63556f52/index.html","f118624a219131fe80924a8a7a4444d8"],["/posts/6d49ceec/index.html","953c000ae54fd97a50f8737bfc5698fb"],["/posts/6de7d9db/index.html","a4468e819e6ac8e5b646634c538bc60c"],["/posts/6fda249f/index.html","2c10a233d08d45accaa06a2537b17bb9"],["/posts/72f7a359/index.html","5bd82fd7b43a9d71c4b07046c4938d94"],["/posts/759a6740/index.html","ef16d3c56fc13c7cc10e05435f711d8b"],["/posts/84b87417/index.html","bd386a8d3e9be91bc3bed1c33d2da17d"],["/posts/8a60fcb8/index.html","c020414e88ea36c622b1f7d3717c9776"],["/posts/8b4c253/index.html","f0e8006963be03448e2c00367b86cfc7"],["/posts/92912ddc/index.html","7d76548720b3c3f210270f244c01b281"],["/posts/97e5bc9c/index.html","8d61fef9b836533e38bf44e5ec28f836"],["/posts/9a5c7b64/index.html","177e1501ae9a8f8eaad9646093b63ab8"],["/posts/9cf9c275/index.html","606200b196164e436bdb609b42c5d846"],["/posts/ac7d0231/index.html","949a8e4b306f26926b9706c39d1fb00b"],["/posts/c311b112/index.html","2b829c606116a8e634d5ec5a37bb839f"],["/posts/c620d4c2/index.html","6eb64a9b7435fdbb9544789e34965248"],["/posts/cfc54393/index.html","72ee9b9e0adb6840a5176329d4e081ac"],["/posts/dc5155ff/index.html","4058f47dc8ab756a6913c556a0829a8a"],["/posts/e1bd836e/index.html","5075073d7e8d31240f2fefb6bbea1a9a"],["/posts/e248bec8/index.html","783a6baa0955f5fe99dd1741f98e8976"],["/posts/e31c0293/index.html","104277afcb7228dcb33ba8428c705212"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","bcdb755acc8132acef1d240176809c40"],["/posts/f8073739/index.html","9de3dc650fb3b67c2996bbb871c8336b"],["/posts/f97ef43b/index.html","bf6c4ece3aba58935c5e8247aa0971cf"],["/posts/fa84d5fc/index.html","a38f8bcb8efd533fa125bcff11573a45"],["/posts/fb1ab942/index.html","4ab560dc95bc417406888b28b3401a86"],["/sw-register.js","45df45be7316a4567dde765c5533fa95"],["/tags/J-pop/index.html","ec65d81af3897fa308b7790e311ea5a2"],["/tags/index.html","8a9059b1f45c9e5d1ee57fdc7a43a47c"],["/tags/ことば/index.html","15d8254c8a0bc1ed4ee4cced6f0cc698"],["/tags/つぶやき/index.html","134ca0a9ddb3218c6ccecf0eabe29fc1"],["/tags/アニメ/index.html","b9f08056d34061f0dd6debf7c2355f61"],["/tags/インターネット/index.html","6a3454c5bddf80904a2aa2087dbb73ca"],["/tags/チョコレート/index.html","abac810ca81a0fb8383d733efe34d4c2"],["/tags/中国に関する新聞記事/index.html","0f1dec7840094cf3ac0fdd4f683b884b"],["/tags/乳製品/index.html","692b9eb5721dc9268c04847e38d7b3a4"],["/tags/労働者保護法律/index.html","47428d6d2205853e2a5aac51d9fa1b86"],["/tags/心理学に関する記事/index.html","2783de25a63c14cfe513d35e4563dd18"],["/tags/日常生活/index.html","8f50ac5dcbc18ab8df1ca0a65a766ffa"],["/tags/日本のIT教育/index.html","e6472c131884c44721cb1ca0b2c7a363"],["/tags/日本のIT現場/index.html","3aff266d5e5a3f6f9e24e739205d7ec3"],["/tags/日本のビジネスマーナ/index.html","77ca154507edc3c528e7db0561d9fc79"],["/tags/日本の国内の人権状況/index.html","1ed1639efcc387b357e4c893fb1707d0"],["/tags/日本の経済新聞記事/index.html","6c9573f9bd3f3d23c1fa1d9ca9e1fb0f"],["/tags/日本地理/index.html","14997d2a3eb144924d7bc9d2e08fb616"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","f0494d86d6e757d5ae775b3932d5027e"],["/tags/過酷な現場/index.html","b71103f9c5412ff77f9864bc211b57ea"],["/tags/金融/index.html","efdf45081ce359ca6da77339a182ad53"],["/tags/食べ物文化/index.html","3b8968378685c033e4ccb9143e693d76"],["/tags/食品工業に関する記事/index.html","3b7ab89c4e5bb4aba5814b18b5ff4ab7"]];
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
