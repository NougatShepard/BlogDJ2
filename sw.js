/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","bb2a7382fdec292bc7c04dcbc9b6a4e6"],["/about/index.html","8bb6e20a5afcb537ec25c4fa550fe133"],["/archives/2019/04/index.html","5e66448173cb2b2da092c75f5dc52d74"],["/archives/2019/05/index.html","b0d1a0f525247363ee0241f49e9fd6d8"],["/archives/2019/05/page/2/index.html","96271f69b00143b9138ffaed924d96a3"],["/archives/2019/05/page/3/index.html","555a7749c134ec4530cb75f64ec8164d"],["/archives/2019/06/index.html","dfea27704faa9482432045c3f34a8b01"],["/archives/2019/07/index.html","3602ea43edfc2916f19cbb641a72477a"],["/archives/2019/index.html","4404a1e657cb8b1e1fb331c88198da0a"],["/archives/2019/page/2/index.html","2c8d790d4a18a484c0789bfb1ba7bf59"],["/archives/2019/page/3/index.html","e7bb9f244e6a2b60efab2ccb43aac589"],["/archives/2019/page/4/index.html","e4973580ecb7fbc079250dc94df6ca93"],["/archives/index.html","2f137c42120b64a91c45d6ea8121cf92"],["/archives/page/2/index.html","96a97432ed7cc9b45a46637582470cb5"],["/archives/page/3/index.html","044007cfd4a2629c60b985ddfe5a64a9"],["/archives/page/4/index.html","d7d466452b68ac9ed88fb749b1f7eb52"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","466ad3c76fcd6cbe613c8182ee412775"],["/categories/index.html","4ef6d16ae9067e0c0b86048bcb7d4711"],["/categories/ことば/index.html","c9cb06a798d47f2936ece6f0c369ba89"],["/categories/つぶやき/index.html","585890846ea17afe955076ec64c26ed7"],["/categories/アニメ/index.html","b3e27397c01715e8762b213f77179de3"],["/categories/インターネット/index.html","2131e49760010ee889bca3a3338efa54"],["/categories/中国に関する新聞記事/index.html","d0e67f1e39976b21f7bfc1c4c9321f0f"],["/categories/労働者保護法律/index.html","3bf610ef15295dbe922a067ced73d855"],["/categories/心理学に関する記事/index.html","3ef394b5bc49e27d77ce3904caf2b0b0"],["/categories/日常生活/index.html","69f98de824f37cc658b0b55b7078421e"],["/categories/日本のIT教育/index.html","e0474d86bee8e4193c5f8fdbea465409"],["/categories/日本のIT現場/index.html","d99953105c178938bfdb2514ddd6ef6e"],["/categories/日本のビジネスマーナ/index.html","d69ac7dcfdc632f7a8929cf3799eb35c"],["/categories/日本の国内の人権状況/index.html","66020014a28b257271aa94bd8053ecbe"],["/categories/日本の経済新聞記事/index.html","ee542ebf17964f33cc9f54e5bf0ce4d4"],["/categories/日本地理/index.html","43cbba1bb02c5b59615be7ec1b3c1b7d"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","262622355341bfece077dac959b3ecf9"],["/categories/過酷な現場/index.html","cfd4554ec8725fa8408f80ae86aaf01f"],["/categories/金融/index.html","6d9bf12e940c22a2dec35a4df246ea78"],["/categories/食べ物文化/index.html","e5476a8fd5cd725c0acdfeed5ced822d"],["/categories/食品工業に関する記事/index.html","ae3f81a71949f370d986d05cd9b9d6ac"],["/css/main.css","bb10d4e4afb7bda80b5b79b2b0df97d5"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","635f51a3366f534ea70e3fcba74c3f6c"],["/js/src/affix.js","1bd805ed9dbb123df72de1b6305a04f3"],["/js/src/algolia-search.js","95d564c68a1c73ebd069f6986e218b9f"],["/js/src/bootstrap.js","a912bbacdba6924d7e8977362c3068a1"],["/js/src/china.js","a12918fbdcfa459c32696e10ac3e8db6"],["/js/src/echarts.min.js","8c82c4fd9905d7df4ca17138ee6410a8"],["/js/src/exturl.js","5d31b28bf175e1c62ded44008ff114dc"],["/js/src/footprint.js","9f8cf96bd4a7cb9161f0d5ca04449b00"],["/js/src/hook-duoshuo.js","2e1e4f1cb152f5ba79db04a04f3ddc8a"],["/js/src/instantclick.min.js","24c566cab404a7deab942bb2b8854b94"],["/js/src/js.cookie.js","b78610e2cb93ee0e41d1b7004e2415e6"],["/js/src/motion.js","a38486739c9bb41bde8e37a721483f87"],["/js/src/post-details.js","20086a35729b3fe7ffc4d2f66b5d5811"],["/js/src/schemes/pisces.js","e1f3b5db409879b15f5c780c93a88fc5"],["/js/src/scroll-cookie.js","a9207ab4e9044d0d1352c191dcb3ede5"],["/js/src/scrollspy.js","00c5113610ccc2ad89287394b5e1ab8c"],["/js/src/utils.js","29fd855a12e14cc7182fbc5672f96631"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","b70f12c5a460ef063209b4ec2d3f8999"],["/lib/Han/dist/han.js","01af896a67e9c71a66ef249b72a86e83"],["/lib/Han/dist/han.min.css","11e1af30a2b242ed7723a486292ad129"],["/lib/Han/dist/han.min.js","9d8710994486186f2c1bc7a908f99481"],["/lib/algolia-instant-search/instantsearch.min.css","9be1996ae8cde01909a0172d82076b29"],["/lib/algolia-instant-search/instantsearch.min.js","471e40c50603012ba4950e9faf4b6756"],["/lib/canvas-nest/canvas-nest.min.js","928f90b4abfce51f10718ddb65257c53"],["/lib/canvas-ribbon/canvas-ribbon.js","451d67bf119d743e3eab5a2cbcacd92f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","05e188129fd9a0800fb2f2fd936252c6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9b8a333fbe3741132e8b08f0a76cec6c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d1932a904790f860733c5087f2fdba7b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3650d96e8a3ec44805618597c063ab9a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d7682ccf27b208cdd29a802c622ace59"],["/lib/fancybox/source/jquery.fancybox.css","c4f668929785e1df91d8f72f2023dff6"],["/lib/fancybox/source/jquery.fancybox.js","c97ae34d224b245f0e136a0121657f4f"],["/lib/fancybox/source/jquery.fancybox.pack.js","4a559d60cd218b8ba89b446ea4a8dab2"],["/lib/fastclick/README.html","278362f627c895ea9731602f8ba26c14"],["/lib/fastclick/lib/fastclick.js","2963d4d4097bbb5d9e65614ddc4afd41"],["/lib/fastclick/lib/fastclick.min.js","92fe4f810cbe0d6dbd75cd0a2f29fe32"],["/lib/font-awesome/css/font-awesome.css","663986892122c5819bdf351562620646"],["/lib/font-awesome/css/font-awesome.min.css","663986892122c5819bdf351562620646"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","972bb0c774f2c308b713b823824e8da0"],["/lib/jquery_lazyload/CONTRIBUTING.html","39cfdc7ece8c76c3cf79d8a7612de042"],["/lib/jquery_lazyload/README.html","19469bb8747a15b9f27eca32e30f3862"],["/lib/jquery_lazyload/jquery.lazyload.js","b75dd0553be49bd9e3c555fe885e0d4c"],["/lib/jquery_lazyload/jquery.scrollstop.js","071200a73ad5cf762d4f0119b433d952"],["/lib/needsharebutton/font-embedded.css","36b8279f6b7e9de8cb3c7f907d513a22"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","0f45396e683733f2b8b6faab9af48509"],["/lib/pace/pace-theme-barber-shop.min.css","a29b704b59f6147cea323b1607a1a7ff"],["/lib/pace/pace-theme-big-counter.min.css","921e1dbdef5d93132f690fd8356cc2c9"],["/lib/pace/pace-theme-bounce.min.css","07ce8f8ee1806890e3aa34d8293b6181"],["/lib/pace/pace-theme-center-atom.min.css","4dd025bf80ec6bb15add8be625212581"],["/lib/pace/pace-theme-center-circle.min.css","861cef2bc9d6e7bc2823c6991579740d"],["/lib/pace/pace-theme-center-radar.min.css","eedf16ab559acb24b98fa0c97a967cf1"],["/lib/pace/pace-theme-center-simple.min.css","2e747373def3ba7f584e1dd4071cdc61"],["/lib/pace/pace-theme-corner-indicator.min.css","8dd0ca0ffbe7677947e36f15b9b31ded"],["/lib/pace/pace-theme-fill-left.min.css","9f1c7d98cd6fad7cce94f4bca223aaa3"],["/lib/pace/pace-theme-flash.min.css","814cf40886871a9617b0b46e5258476c"],["/lib/pace/pace-theme-loading-bar.min.css","ac6ce7adda60f1895c59b3da53c723c0"],["/lib/pace/pace-theme-mac-osx.min.css","dc2c95b9827dab608fbffef73acb0a88"],["/lib/pace/pace-theme-minimal.min.css","53b206d68253f51761910ae29bb58007"],["/lib/pace/pace.min.js","a2c3c03cdd51841460e58f09ff28a646"],["/lib/three/canvas_lines.min.js","ee67ed93d24ea6619c6ce625bada30e0"],["/lib/three/canvas_sphere.min.js","89cfeae388efaae3217234d16c528724"],["/lib/three/three-waves.min.js","e5bd6b1707809dd1b877e206549f2e49"],["/lib/three/three.min.js","5991b567a5693410d03f3ba331e77f99"],["/lib/ua-parser-js/dist/ua-parser.min.js","369113ec7f588292f1ec8205c539f50d"],["/lib/ua-parser-js/dist/ua-parser.pack.js","778a18b7f08228a6748bcd02b55162e6"],["/lib/velocity/velocity.js","cc379b00cefc7d369c7168b27aeb370c"],["/lib/velocity/velocity.min.js","0043fb5454cb6d631598ebaf020f4814"],["/lib/velocity/velocity.ui.js","870d94cc696ea2fdbf533eb495a3b5f6"],["/lib/velocity/velocity.ui.min.js","59d0ccfd1308fbbbcbdfa8570619c5f5"],["/links/index.html","313eb98aae0c2d3fd9ff6a3ccf2a61b5"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","390b934cb8890ecb13c2da1c91dbe098"],["/page/3/index.html","bab719ec22fd81b532dcd5b0d5dd8069"],["/page/4/index.html","19fa81d4f4ab2a5e98c42faf678b39b0"],["/photos/index.html","1ca38f84a61cac8e8a405ed2484aa953"],["/posts/191ddb73/index.html","55cd9cd10f079a9d98e20a40b58e7683"],["/posts/1a195976/index.html","d7326475fa716dae809102de4f13b47d"],["/posts/2292f1af/index.html","d691a1adaa42a02ffb69da31760e200d"],["/posts/29d57d6/index.html","871dadb45146fd759b219fac9e53a3b9"],["/posts/2fc77d95/index.html","0ae0b7966b8ebedef8dad09eac90ba84"],["/posts/2feacaf4/index.html","2626b04b564066b71ace1f6fa12c0c56"],["/posts/37f2c331/index.html","62c4d5599658087644baaf9568cf6061"],["/posts/385f0de9/index.html","755cb7d0bc98cc09ab4c56c63c738996"],["/posts/3caecfa9/index.html","55439fb0b0bc2acdb4a0ce73d1da127b"],["/posts/44414303/index.html","4eb812a8cc8a4efc9939e237393e0832"],["/posts/456610d0/index.html","cb13d92b01abb494f93d36dcecf3a0a2"],["/posts/45e51894/index.html","a6b4073c98ced9649643dc93530b0c9d"],["/posts/4f1131af/index.html","2b65a1fe82d15bd48d264142151b2d68"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","320e2d89e33790213991a017b82b2e38"],["/posts/517ebb95/index.html","79f994d219ec6b511350899d07fa2161"],["/posts/53bf1d9d/index.html","d1e939a242f065d3af9d9f81b6cad339"],["/posts/554c2ba0/index.html","d8dd6089304f42d94d44a57173eda295"],["/posts/63556f52/index.html","273aebc57f3b76073b98fb1ba5fd3ad9"],["/posts/6d49ceec/index.html","4375c32dc82af8f78bbef717f7233ac7"],["/posts/6de7d9db/index.html","05de3abc88b1b746679ef214be53a41e"],["/posts/6fda249f/index.html","46e6799bce62d75dacd3d125277435d7"],["/posts/84b87417/index.html","2779fea7c75f6667adb49404b02dad33"],["/posts/8a60fcb8/index.html","55a79cd08283b58e2e8f21fed61cd228"],["/posts/8b4c253/index.html","5747382d2e03d0f254cf1fb5a1b1f890"],["/posts/92912ddc/index.html","bac0581af94ca80d97b972d2c23be729"],["/posts/97e5bc9c/index.html","7ff51fcdc444c4f383aac5168cd83b63"],["/posts/9a5c7b64/index.html","b5233308a172afaa0b43a50679fa19e6"],["/posts/ac7d0231/index.html","14b34727e66298a26247b112b5712e25"],["/posts/c311b112/index.html","33dfd53083418be791392d7c4d8ff829"],["/posts/c620d4c2/index.html","12eb3633f8c1db40053f93d271c9361d"],["/posts/cfc54393/index.html","c4abd3ec00a3a295d931bc226d524d80"],["/posts/dc5155ff/index.html","4f7b88ff0ca43047d6fefb3fb72a6cb6"],["/posts/e1bd836e/index.html","e696f177baacaaae61ad9be2d94886c0"],["/posts/e31c0293/index.html","6a120197f83c283dc0d440040515726f"],["/posts/f5fc4461/index.html","bb9c9cf199e90cce6cea277d24331b72"],["/posts/f8073739/index.html","1b96f93cadfe65a7ab8fb75587f99c3b"],["/posts/f97ef43b/index.html","b62abba1410c1d870e123e88a5f5dfef"],["/posts/fa84d5fc/index.html","88ff8a13f34d40ef270e4db8444623a4"],["/posts/fb1ab942/index.html","2da207b0571c83c57678e844467dfe0f"],["/sw-register.js","1665fa868285f7ee1d26260b5e4a685b"],["/tags/J-pop/index.html","ff8e9e2c5da3a6053835d8fb4183ce83"],["/tags/index.html","a4b2fc7447b4d83648ede7dcb41c3d42"],["/tags/ことば/index.html","139c743375314f02e770e4b0ef230d8d"],["/tags/つぶやき/index.html","f5898face80d4ceffc824a63f90afa3c"],["/tags/アニメ/index.html","3885cef663c1aec89f789cf06328547e"],["/tags/インターネット/index.html","37f0be0da60fa3116e63860ae826cf1b"],["/tags/チョコレート/index.html","4cd260a7919412848f2093b99c2c3267"],["/tags/中国に関する新聞記事/index.html","1b1aa78c0a38b4d294e8a6c44e7ebd8e"],["/tags/乳製品/index.html","3f8a70a33c79ac9881c06e63a0d92b63"],["/tags/労働者保護法律/index.html","5fde0a75af2fa9146ac2c939396816b2"],["/tags/心理学に関する記事/index.html","fb0bff058307d5c4f6c574db8e93d453"],["/tags/日常生活/index.html","34b15ef7b829c8f6c38510d9ce17ad45"],["/tags/日本のIT教育/index.html","3f040cd7d6c2f5f53d4896302705a6d9"],["/tags/日本のIT現場/index.html","5412296354917866db2eba69da9580ed"],["/tags/日本のビジネスマーナ/index.html","7b85c6def944af953a1caeeab70e251b"],["/tags/日本の国内の人権状況/index.html","5662f67009d2d580209981a1f07e26ab"],["/tags/日本の経済新聞記事/index.html","25d6fc4a12b71b6a86792bd2525417c0"],["/tags/日本地理/index.html","b59f52b251dafee97abf9938962c74eb"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","8cc7c5fda8b985c91ad1638bdaf1fa1c"],["/tags/過酷な現場/index.html","307a42e521ac98082a63251e1d4e0749"],["/tags/金融/index.html","441ca9428f3bfd313066572f37eec59f"],["/tags/食べ物文化/index.html","96239bf1cdfe3b0ddfff4285c036f723"],["/tags/食品工業に関する記事/index.html","5e2679531b780ae44871a986cd66f24e"]];
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
