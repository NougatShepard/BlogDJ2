/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","1993ca8f4f09aab585dcc093e32bae26"],["/about/index.html","ffde10c088dd9f0440e81b34b2f96026"],["/archives/2019/04/index.html","6bed1cc2ad26cc30ee276ddb18c8d563"],["/archives/2019/05/index.html","e58a183c8f7aa1c8a70c3660746beb09"],["/archives/2019/05/page/2/index.html","4e1830842b037ee9af96de4cc11ce467"],["/archives/2019/05/page/3/index.html","e82449312bcd546bd85c3821d7c1450f"],["/archives/2019/06/index.html","982c91d14844ab40142b47edbb7cf839"],["/archives/2019/07/index.html","38ddeb7eb35554830a9c56b5770342fa"],["/archives/2019/index.html","2d09ea73c19318b4fc549a605e252771"],["/archives/2019/page/2/index.html","372436eb342ae780782c4205ac0e9d6d"],["/archives/2019/page/3/index.html","09db08f3f7ec892236e5497d1f50b772"],["/archives/2019/page/4/index.html","2f3b6d0bb869bee42e81a2a2e5a8b5f4"],["/archives/2019/page/5/index.html","822588d946a3ad97b269ab40afe2e91b"],["/archives/index.html","1e902d8db0d03753c6cc795d88622dd9"],["/archives/page/2/index.html","243565add330b2ef70387b0f9ab75122"],["/archives/page/3/index.html","08ad8a478670ac1a38c79fd65aaf196a"],["/archives/page/4/index.html","ad1b412f1461b7b388096210bcede99a"],["/archives/page/5/index.html","1425e3423d3873261cceeba9f16810fd"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","b018f527dd11a6d8827f63f50b6d6965"],["/categories/index.html","fb06a5063856ed44cf228b8cdf025d72"],["/categories/ことば/index.html","270a530829956c12541f253e1802c7da"],["/categories/つぶやき/index.html","719c2b37df103631e5c97a4378c0b72e"],["/categories/アニメ/index.html","011d9f96e4889096c4007181d48f18be"],["/categories/インターネット/index.html","a85fe2f243849fb956e7980bbed2771c"],["/categories/中国に関する新聞記事/index.html","bf64e1618248f88f315d6270b5f52b2a"],["/categories/労働者保護法律/index.html","7277b4e0e3b9bcd850a11dd0fc813160"],["/categories/心理学に関する記事/index.html","a57b0cd15db979cbc5f16d608bbf763d"],["/categories/日常生活/index.html","c141338af9ecb003b721acb865afd60f"],["/categories/日本のIT教育/index.html","b0cc4667538cd03d130ed2349b981384"],["/categories/日本のIT現場/index.html","69a1e1fd46e5d93842cb9b29427a54af"],["/categories/日本のビジネスマーナ/index.html","6bddcb821563340c5cf860a89b562a02"],["/categories/日本の国内の人権状況/index.html","0d9c1fde722c0c52dc723805594e167a"],["/categories/日本の経済新聞記事/index.html","44f637d252388419b9d7b863c7cab01a"],["/categories/日本地理/index.html","93008b2a4ab881cacc59ef9ab472002d"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","9c895a6cfa1895e38e671a25fe786882"],["/categories/過酷な現場/index.html","a772ab6735f5039885574418993d8ab7"],["/categories/金融/index.html","c4f6e965d1120d16cad5e9b2a5c13492"],["/categories/食べ物文化/index.html","2212d7e4538abbd2d9c7554757910d13"],["/categories/食品工業に関する記事/index.html","fdab3d88c6fe09851eb11c4ff4b6492c"],["/css/main.css","e8c2346846dfa3e09f3d272e20b984ef"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","2c4f5c1c144001c0e4402798db509c2c"],["/js/src/affix.js","2dbe0f7ba71edbf68ff197e251e67684"],["/js/src/algolia-search.js","1c44a32d9e0f975a92985abbdb3b72b3"],["/js/src/bootstrap.js","1bc8fb74a11ba13d8b7b988fff1f5ec9"],["/js/src/china.js","9874e2154d3def8b3809a6715fe64fdd"],["/js/src/echarts.min.js","aa4227e2282410bc18e913dd7d867336"],["/js/src/exturl.js","54a187c048e56a01803b23b0eda67a0a"],["/js/src/footprint.js","15cdc6287ba85a65337f7eabd46447ac"],["/js/src/hook-duoshuo.js","97321b67f10eb2f855c3c7f5df26c018"],["/js/src/instantclick.min.js","5e449aef8f5e7499f3f3976423dd28cb"],["/js/src/js.cookie.js","6b462495dd6e385dfbcf676a74fe38af"],["/js/src/motion.js","bdc9333925762c887f86d4b98bf381b7"],["/js/src/post-details.js","146dbb4d68a3c7643132aa8232d05b6b"],["/js/src/schemes/pisces.js","e667256e81a830a1ffea56259d7327c8"],["/js/src/scroll-cookie.js","69c7b18dc233551f5974fb6c4dbd3155"],["/js/src/scrollspy.js","c2f53799fed9be3ca6331d6cf359c54f"],["/js/src/utils.js","420843cf4e178bbfc1be99463fcb2587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","554a30a3e316701e80cdd728e8d7f309"],["/lib/Han/dist/han.js","fbdfbcde028775f18e456447f715f884"],["/lib/Han/dist/han.min.css","fc9ad819943cd56edcc9de1aea02b0b6"],["/lib/Han/dist/han.min.js","4bdf279b5bf9d9a5d82f3ac11ef99684"],["/lib/algolia-instant-search/instantsearch.min.css","ffe596c4180a8a1300a43ee8628e5593"],["/lib/algolia-instant-search/instantsearch.min.js","eee7b9cd7e8f34cdb5619a16c442296f"],["/lib/canvas-nest/canvas-nest.min.js","5582c70d03259b667355d69f9af684b6"],["/lib/canvas-ribbon/canvas-ribbon.js","8ee6a77318c9096c22b8b00c38d64ee3"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2797313eb6e2059c6bc839283db52993"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c84f0acb407e620be0cb32bb78aadf9b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2b2a67d08f47eead2b7d698a9698fdf3"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","8d52d21dc978dcfa3d95d26f26741482"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f604658601ddccece254c43a7f138941"],["/lib/fancybox/source/jquery.fancybox.css","2d74af7943bcaee69f453a398028105e"],["/lib/fancybox/source/jquery.fancybox.js","417ca94f519bfda9d17cfd757f741b4b"],["/lib/fancybox/source/jquery.fancybox.pack.js","2c2f645d537217a896793dec9cb2f82e"],["/lib/fastclick/README.html","54c3245119503de81e5c79f7f76b6189"],["/lib/fastclick/lib/fastclick.js","88278dd712fa465c71badbefc4c2d1c9"],["/lib/fastclick/lib/fastclick.min.js","431ec66c7a052316b87e26d6805cbba5"],["/lib/font-awesome/css/font-awesome.css","d8d9d4ef6944bfd5078aee4d4dc72d1c"],["/lib/font-awesome/css/font-awesome.min.css","d8d9d4ef6944bfd5078aee4d4dc72d1c"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","2c97e77978f19dcd02d8d7e918854a16"],["/lib/jquery_lazyload/CONTRIBUTING.html","31e17f1027de29f3b622a4124797623e"],["/lib/jquery_lazyload/README.html","85e6299b66379943a092ef664ea1284a"],["/lib/jquery_lazyload/jquery.lazyload.js","1c061b55a12eb786053fbed86b576a54"],["/lib/jquery_lazyload/jquery.scrollstop.js","a563971acd5c582f7ac556eaa35e8773"],["/lib/needsharebutton/font-embedded.css","070dfa86d6e0d6d4483be9a9f55097fb"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","4d3fee25611791daa2110de3f8cadde8"],["/lib/pace/pace-theme-barber-shop.min.css","8ad751fb59355469adf7175143c5a717"],["/lib/pace/pace-theme-big-counter.min.css","0e113bc18bd39f432eda51c1b3eaf7c3"],["/lib/pace/pace-theme-bounce.min.css","5177a705411081ca2bc3fb9c90638fa0"],["/lib/pace/pace-theme-center-atom.min.css","9ef66f52123f8727511326e1fe23df07"],["/lib/pace/pace-theme-center-circle.min.css","9ee1ca5145fd8b170b68ce46bc09363b"],["/lib/pace/pace-theme-center-radar.min.css","21bff4cfdfe070c881d30ff6e91ca8c9"],["/lib/pace/pace-theme-center-simple.min.css","086960f7ee63556b65d3607d5f9f2a58"],["/lib/pace/pace-theme-corner-indicator.min.css","11a7ac780444f76cafc4a0386f1f9073"],["/lib/pace/pace-theme-fill-left.min.css","27b3ad9da2081b3e2e897b17e7f9a7df"],["/lib/pace/pace-theme-flash.min.css","27f3c53e345546bdee79b11299a1e484"],["/lib/pace/pace-theme-loading-bar.min.css","d49334df0802ed0c3abff97454b2bd0d"],["/lib/pace/pace-theme-mac-osx.min.css","5558491243c4872455aec2083326d190"],["/lib/pace/pace-theme-minimal.min.css","4fde6f65bdb1d5e487b7d684efa47534"],["/lib/pace/pace.min.js","6c571d669f41e8201001a706edfcd2d8"],["/lib/three/canvas_lines.min.js","90be539dd9b3bd52660f2dcd4aedc83a"],["/lib/three/canvas_sphere.min.js","c9b3e4e4bb8c5af37beb1069830f59b4"],["/lib/three/three-waves.min.js","82e59d384f99dbce32bd00717f2df869"],["/lib/three/three.min.js","49db7dd33e882209a9d46ed7ff566015"],["/lib/ua-parser-js/dist/ua-parser.min.js","91542addb44f3f395a4dccebefb0580f"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d7172964ebb6e27413afb46fc5dca4b4"],["/lib/velocity/velocity.js","b26183dcd66473923f40b6456ab42b00"],["/lib/velocity/velocity.min.js","f1e037a7d1b3b1a90a8188a2a2cff211"],["/lib/velocity/velocity.ui.js","cad6b891697b2053102cc2ab7c32f212"],["/lib/velocity/velocity.ui.min.js","3d49b3f2eb3190a1ebac134e53fdfe01"],["/links/index.html","74b1aa79a676ce64522e931de6a0eff5"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","8e93766e41ba4f0618b472aaf7852fb2"],["/page/3/index.html","e7585361937e4aabb91610f8513d5861"],["/page/4/index.html","7a37021056d4d62c658ea50c12877eed"],["/page/5/index.html","56860a4c71b564a43116091afb2c6e18"],["/photos/index.html","c9aed92208f13071ffe16f1c5beba3f0"],["/posts/191ddb73/index.html","5eaf73d3e7ad4295421f3189cf403863"],["/posts/1a195976/index.html","3a0029075ba5e31e863a0a4e1bb613e0"],["/posts/2292f1af/index.html","1734dc4ab68c9415724c36602c908384"],["/posts/29d57d6/index.html","626925538ed16e1db1e7ce99dce38c63"],["/posts/2fc77d95/index.html","66fdb5511e5df5dd72cafc09f50fa88d"],["/posts/2feacaf4/index.html","38260899287c3cee9f0772fed691b2e6"],["/posts/37f2c331/index.html","28e71273b99e7dda64f3e28429a29631"],["/posts/385f0de9/index.html","6f832ffd04b431afdf23002cb9253e21"],["/posts/3caecfa9/index.html","bc35045ff383f74bf351b3e570e58da2"],["/posts/44414303/index.html","8d5a4025d8c75f27068f6b3fff950d54"],["/posts/456610d0/index.html","1e08f76557176e8bb942badad084fc87"],["/posts/45e51894/index.html","bf5aca510e9a5251ad6942e2360a6cfa"],["/posts/4f1131af/index.html","04cf4612c60f0d68faa2bc41894c52bc"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","e5d48a55cccf045584c5dcef676768cf"],["/posts/517ebb95/index.html","3d7cfda731fcecd062fc5ff90716db56"],["/posts/53bf1d9d/index.html","34847943b8b42ec4005e79834e9d4651"],["/posts/554c2ba0/index.html","80ca0d754939f5628f81e82386f7f8f6"],["/posts/5f093cf/index.html","b08437c7c3591269bcea105412cb4c88"],["/posts/63556f52/index.html","e43e9ca157b4af0f27ea5d5ea2e883c8"],["/posts/6d49ceec/index.html","dd8f44809c9ebc8d3e85a09de93178bc"],["/posts/6de7d9db/index.html","547076e9c4cf6bf1b118b41b8e385863"],["/posts/6fda249f/index.html","3adc7739291e670ef8317c063dc53cf0"],["/posts/72f7a359/index.html","1af25e0b59609e6f0382a9a7e553d6b7"],["/posts/759a6740/index.html","744f18093d171580540f023d7d4a7325"],["/posts/84b87417/index.html","234a058eed9563a9307f997870766172"],["/posts/8a60fcb8/index.html","2c41ae48afc2049f948aa7fdde30e28e"],["/posts/8b4c253/index.html","89072fcf57612406f048a6af1eed987a"],["/posts/92912ddc/index.html","8a26d33865c144fce6b2ad1703f9a5dd"],["/posts/97e5bc9c/index.html","46fd35e25e88222f1f47cf29decf43d9"],["/posts/9a5c7b64/index.html","433ff10fe63186460b7f14769511d29b"],["/posts/9cf9c275/index.html","630aa94bbbe66cc6d3f0126c0234424d"],["/posts/ac7d0231/index.html","3aa4f3a1a54ecd8f7a8ca093666c6304"],["/posts/c311b112/index.html","726b3c6011f42d1089cf68941d90cdaf"],["/posts/c620d4c2/index.html","9971daa57d73d6170b952cb811aa58db"],["/posts/cfc54393/index.html","4ca4badba7040599295f651904d0171d"],["/posts/dc5155ff/index.html","ac605b30a73ba8a4a04caa5a3f382f36"],["/posts/e1bd836e/index.html","ce3a41ae0cd1444f5af632d4a2fa8fc0"],["/posts/e31c0293/index.html","d14a8c5ee6d936df443d9c3c9138f79c"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","3f960ddbf387319217e2797034aac175"],["/posts/f8073739/index.html","1423d790e631abf47336ecc104aa7a75"],["/posts/f97ef43b/index.html","50a266decb87f04c5cc96271f6dab7a2"],["/posts/fa84d5fc/index.html","7ed8a4a18943fe6090201e5f870b1521"],["/posts/fb1ab942/index.html","0a181815169cf64f8cdbf8c19613a2b7"],["/sw-register.js","3527529cbb15bd460bd3b931dfead5ae"],["/tags/J-pop/index.html","d0a8ffecb2548259400b1776ce7ae1a8"],["/tags/index.html","00cce84f130b5f5f9a09697e9ee9efb0"],["/tags/ことば/index.html","41ad0a49b8833a86d26bde542c750212"],["/tags/つぶやき/index.html","e71eaccf6b5fc92a48e9524df3c54ea8"],["/tags/アニメ/index.html","2c251b8430483e7f2d2a83426d8f99fb"],["/tags/インターネット/index.html","ef5b3208b57a5634243063cc6e828d8d"],["/tags/チョコレート/index.html","8f035c0797910736b61faa94b1a50d7d"],["/tags/中国に関する新聞記事/index.html","6b896f6a4490e5458aadf6479d88e4de"],["/tags/乳製品/index.html","7f4b8e7eca6bb630889c03145407cc22"],["/tags/労働者保護法律/index.html","723fc3699bd1708588408b03f917cdb2"],["/tags/心理学に関する記事/index.html","c4592a8bf0004061add96bdfd5966ce2"],["/tags/日常生活/index.html","b9d0e6f8f470e9f18d482b4a1d86a7a6"],["/tags/日本のIT教育/index.html","682decf7c08b62fe50500826c4af778c"],["/tags/日本のIT現場/index.html","279faa319190645de85e8e08f83b0acb"],["/tags/日本のビジネスマーナ/index.html","fe027236b72ed579d643c730e0f2ee1a"],["/tags/日本の国内の人権状況/index.html","442750411b77306be6687aa2949c9842"],["/tags/日本の経済新聞記事/index.html","aeefaf89f865503155498ec4a48bc8e0"],["/tags/日本地理/index.html","23cab9954db4fb40040bd992b53da51a"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","1ca5c52517e3ce9545a0752f35323cc7"],["/tags/過酷な現場/index.html","9e03963698db0991ca72843f1448fc6f"],["/tags/金融/index.html","564a31eb7f63fe3db18d825f4f52dac0"],["/tags/食べ物文化/index.html","05b6dc1215967021c67ca5286e8adfb8"],["/tags/食品工業に関する記事/index.html","c9113dd661f7a8db2d5bdf95d0966f4c"]];
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
