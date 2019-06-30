/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","8e1314e498aeca0b14838c01cde3365c"],["/about/index.html","06f6795bc725e85b01e27eab3a028dde"],["/archives/2019/04/index.html","4f0b7d14f2239cecef48a657f16f24a0"],["/archives/2019/05/index.html","0cd639e846cac7044b63f04ca12261f4"],["/archives/2019/05/page/2/index.html","09b38f3bd61185e5b53c38e132617c28"],["/archives/2019/05/page/3/index.html","706ddd067751f14075acd1cd84558d7b"],["/archives/2019/06/index.html","af5416fa1eb3448947ef72cac3e770f9"],["/archives/2019/index.html","045c9ca948a9340939f3613ec24b28a1"],["/archives/2019/page/2/index.html","5a62a7538f60ed47afcffa4176752884"],["/archives/2019/page/3/index.html","fb296ca2b232f5f2f5486f492c709a3a"],["/archives/2019/page/4/index.html","a6f6cc908383ff8ceb657a2aa205a690"],["/archives/index.html","3d2520ceb5a21563e392138ea80cfa60"],["/archives/page/2/index.html","fba1b2861381fa62f60453cc0234f28c"],["/archives/page/3/index.html","dcb22a1e263de726f9f9b681e1755d59"],["/archives/page/4/index.html","ec75ae27a3384be561c2272b247920d8"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","91b47faef4583b8b9cccf5020becc693"],["/categories/index.html","7400b459de75641b82c1f5112f622f54"],["/categories/つぶやき/index.html","1fcdfccd5aedb78d50314eb778f06bc6"],["/categories/アニメ/index.html","91a3b69baf9b845b72c6d91384abfd95"],["/categories/インターネット/index.html","909d851543b1c319a80a9329a54c7b66"],["/categories/中国に関する新聞記事/index.html","05c52a83931d8d92bbc637458f999ae5"],["/categories/労働者保護法律/index.html","5d689fa5941e54e2c302fb3dca1bbae6"],["/categories/心理学に関する記事/index.html","6648816cbd37779c95023211806b1c93"],["/categories/日常生活/index.html","a67a897e8cce8e663bf97cb63e82db84"],["/categories/日本のIT教育/index.html","00394ac8761f0ce1ff19b4a973bfb614"],["/categories/日本のIT現場/index.html","d60f5e74b2836756f70ad2876b699f5c"],["/categories/日本のビジネスマーナ/index.html","637c265c73e78cd63771ab4b533da23b"],["/categories/日本の国内の人権状況/index.html","1a1e3f8ef90a3bda6d6a6e92c0764efb"],["/categories/日本の経済新聞記事/index.html","40efe1148aaa842a1b02d24aa4b26751"],["/categories/日本地理/index.html","7f1182caddee845c3802dbb9a329ba0c"],["/categories/毎日ことば/index.html","b850643e5519b223b84121cfe9beec12"],["/categories/环境/index.html","8d15f8412af1df66493ba160e5b78551"],["/categories/過酷な現場/index.html","cedfe5c3fe881809a3bb79c27fbe5fc0"],["/categories/金融/index.html","9ac2d11cdb6bb27a2cfc232250454918"],["/categories/食べ物文化/index.html","d21724a6b2958b40248d9e957497d65f"],["/categories/食品工業に関する記事/index.html","fc0d86cf50b0355d0ef19d1cab719634"],["/css/main.css","4a145c9e1459500f2295285b33d93901"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","37a77bbe33aba192e9cb6a273d7dd63d"],["/js/src/affix.js","0cfc416bf30f545bc9a4a51f71f0bb66"],["/js/src/algolia-search.js","f477c783d462acf42a8285ed3dbdd4a1"],["/js/src/bootstrap.js","fbcfdab30b46f2b8d8077fe74d82c740"],["/js/src/china.js","a5dcbc3c0b2b08e0c98e9f9efc0ea182"],["/js/src/echarts.min.js","6c06da8b68b48945625290e069dfd5fc"],["/js/src/exturl.js","818b565dde28919f47725c2269d22e02"],["/js/src/footprint.js","c45ce2431ed7f4ca1d48517e23c59bc2"],["/js/src/hook-duoshuo.js","ebba6fc4f349f6e543e6162a94cda44a"],["/js/src/instantclick.min.js","3d21e1090827850c2b480f5200f56686"],["/js/src/js.cookie.js","24aec4148353151dc7f0bf3a4f461c77"],["/js/src/motion.js","b6dd7ba0f3d3067054031f45d3cd4815"],["/js/src/post-details.js","786e048c0fb5146be88e3d2aef7e878f"],["/js/src/schemes/pisces.js","88fa71abae6671e7ffa50af7493c3a80"],["/js/src/scroll-cookie.js","dbffd24193bfe0cd517685efa15c86b2"],["/js/src/scrollspy.js","a8b5879a96cef63c7b19e23c76062466"],["/js/src/utils.js","e43af35e0f012837b3be15df4dee72ce"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","5824e9583bffde1ac538f77843c5351e"],["/lib/Han/dist/han.js","1e98cf6e3b3c3bf7bdf694e9995fcc16"],["/lib/Han/dist/han.min.css","12fa43eb75afde6d1ee2ae0cce033800"],["/lib/Han/dist/han.min.js","4afed6cefeea184b2ac54891435a1d51"],["/lib/algolia-instant-search/instantsearch.min.css","088338b34beea39f4200750d93181241"],["/lib/algolia-instant-search/instantsearch.min.js","1244c007fffbb06329f00c768c94e3b4"],["/lib/canvas-nest/canvas-nest.min.js","4c76fce787a4bb8558c4908a0b25a261"],["/lib/canvas-ribbon/canvas-ribbon.js","264d50bf09e4b015dab9144a0298d102"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","537d9c478b578bac5420569e802f69b6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b86d916b73916816a5a6da3ca89c0635"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","290c76f71d5c997fb892f3d7ef17b49b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1a8981bd6a6b4cee4f31b360f22fbc67"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d2a773307206b43d6fe1c240ddaf935b"],["/lib/fancybox/source/jquery.fancybox.css","b79213b0f1fc6ce0d35c309d9fd9720c"],["/lib/fancybox/source/jquery.fancybox.js","fe95bbde6c575cc850eb1a83525fcec8"],["/lib/fancybox/source/jquery.fancybox.pack.js","4f8d0d4225ddf3e6305f173c83e58294"],["/lib/fastclick/README.html","d91887f82332863265d8be1ec9ad6048"],["/lib/fastclick/lib/fastclick.js","d6e6394659e2e341bf5925d79a3cc61a"],["/lib/fastclick/lib/fastclick.min.js","87bcf8d8d06f66b71b64835efd276b0c"],["/lib/font-awesome/css/font-awesome.css","124dfb131d94c3e086339bb815719409"],["/lib/font-awesome/css/font-awesome.min.css","4dce88b205aaaa81d45dd62452877ce5"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","5a682dfdf422ba38aac1eff3b9a877d6"],["/lib/jquery_lazyload/CONTRIBUTING.html","4bc33bc73eb80159c660e2fa7acc4bba"],["/lib/jquery_lazyload/README.html","a0836d99b2b25ecf20fd0ae1b4ca8763"],["/lib/jquery_lazyload/jquery.lazyload.js","50c307a8504ae937b29847af2401cc4f"],["/lib/jquery_lazyload/jquery.scrollstop.js","c84f12738c71099de737b5c7f068382e"],["/lib/needsharebutton/font-embedded.css","51f105bd576e6c653fb06e1697dae9e7"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","e81b5b4f12b5ddda51d37fb90ed9d6ca"],["/lib/pace/pace-theme-barber-shop.min.css","c4dc4b46cfc1c6daffe6e74981c60edc"],["/lib/pace/pace-theme-big-counter.min.css","5ea42c3fcef659398d9a3a88c06376b1"],["/lib/pace/pace-theme-bounce.min.css","a93419c75abce5bc8ed6d92f7b6eca0f"],["/lib/pace/pace-theme-center-atom.min.css","383ed2c4c8624c63ec996b9c4753c542"],["/lib/pace/pace-theme-center-circle.min.css","3288f275414c8b794d18acc2ce965fc5"],["/lib/pace/pace-theme-center-radar.min.css","03466ad3fbe1e9bba49de549572b6755"],["/lib/pace/pace-theme-center-simple.min.css","682be3e13a67cdf72164c3d8dbcea89b"],["/lib/pace/pace-theme-corner-indicator.min.css","4c9d25be991dd246427aab119ea873d2"],["/lib/pace/pace-theme-fill-left.min.css","24da8931dc7195f6c67efdc8e3841112"],["/lib/pace/pace-theme-flash.min.css","a9f604134c2e172a4f355266a7b47180"],["/lib/pace/pace-theme-loading-bar.min.css","f7f270e76862ba59a4fe445069c3b06a"],["/lib/pace/pace-theme-mac-osx.min.css","67f4236d3980e40caebc1cd725a7ec7b"],["/lib/pace/pace-theme-minimal.min.css","950cf747cbbfed3626ba06dc78fda92d"],["/lib/pace/pace.min.js","794435526d3c2bb8e1ee6885ff0cdecf"],["/lib/three/canvas_lines.min.js","5643bb14b308fd60c592e8e99ce9cab2"],["/lib/three/canvas_sphere.min.js","9054dec0262514a06d7f286f822fd097"],["/lib/three/three-waves.min.js","815847ce23d7c880ba440f3b9607781c"],["/lib/three/three.min.js","3024d44c421f1ec23045fc338ddb84db"],["/lib/ua-parser-js/dist/ua-parser.min.js","b778c0c9420b55f0ff7c37e16dcb325d"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4ce13b9e6a22eba2ef81db3d145b33b1"],["/lib/velocity/velocity.js","09516118b98a195077342d667c989129"],["/lib/velocity/velocity.min.js","75dae8d7df83a3af089153a6aa9b77d5"],["/lib/velocity/velocity.ui.js","8528ec89a52c51a205373ee49ff1d22e"],["/lib/velocity/velocity.ui.min.js","7d80f9875457b0c6187a9600f2703953"],["/links/index.html","d82716b345043afd5e2811e0e2823a3b"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","a7b470ecba183dc22a16628b5a46649c"],["/page/3/index.html","14a7396496b70ee847feb2c8883aefd8"],["/page/4/index.html","d8c1f95ac41d202eb5d9a28f8a279263"],["/photos/index.html","abcc38f60c314763c79827ae369edead"],["/posts/191ddb73/index.html","22aa346ac34113aaff9fe1dc864620b9"],["/posts/1a195976/index.html","aed7f79eb73ec8c753af50a41e6c8b63"],["/posts/2292f1af/index.html","01688657eb4e57391e251694bc4ad466"],["/posts/2fc77d95/index.html","ace43f5dc5af45624031d58d343b8dac"],["/posts/2feacaf4/index.html","43d63bd08e77434acedf0887e8c8058c"],["/posts/37f2c331/index.html","b8521f9aeacd2b0a39d31505f0c75d7d"],["/posts/385f0de9/index.html","d9804609664838bf8e5ebb13f9289471"],["/posts/3caecfa9/index.html","39d334804df226128a6a7e2e16e820d9"],["/posts/44414303/index.html","5552fe3edf27601b2c3412057dca9f3d"],["/posts/456610d0/index.html","1cfa60e0b4323553250740ca7daf9c0b"],["/posts/45e51894/index.html","2471e346ccbf4c9002411b4510ef14c8"],["/posts/4f1131af/index.html","b44bb0bdb6fa7dc611894c1538729b09"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","fd00fb3c17608d8a21134b81ab68400d"],["/posts/517ebb95/index.html","19240dea7fcb153b4d8388a795b7014e"],["/posts/53bf1d9d/index.html","d3b955fe19745af45f142709b6f34889"],["/posts/554c2ba0/index.html","19e9b862f785721578f01ecc50e4d417"],["/posts/63556f52/index.html","b3fd0d7d61d932e3b74dca8cb34b6f83"],["/posts/6d49ceec/index.html","d726738168291cb9c134fb90d8bfc5c9"],["/posts/6de7d9db/index.html","790e898079a8ef7b9171cec0bd34d6dd"],["/posts/6fda249f/index.html","677b1a5f116913cea6fc5d12660ff247"],["/posts/84b87417/index.html","f67887d612479bab171332150e7a2261"],["/posts/8a60fcb8/index.html","c55de510c7290c1ae40b072c108ccfec"],["/posts/8b4c253/index.html","9aee5b68e41c7269b7cb311d96f070d7"],["/posts/92912ddc/index.html","d92446049f347a0a4e7f62853e511c19"],["/posts/97e5bc9c/index.html","f06b79a999e2bfd408e65e7bec2a7581"],["/posts/9a5c7b64/index.html","4e402fbe77456b924df412c180b36b9c"],["/posts/ac7d0231/index.html","96dfee0d934b6c3be824bf1554af3733"],["/posts/c311b112/index.html","6b84d36705c727385b2a6e5f35a0159c"],["/posts/c620d4c2/index.html","38023e7ad40106ad63a577f8811010cb"],["/posts/cfc54393/index.html","0350f2600f51327b1697f412297b525c"],["/posts/dc5155ff/index.html","c43e8c365b76e7b09ac249135a5336ba"],["/posts/e1bd836e/index.html","5dbec4de0dafa780032c67eb589e6d58"],["/posts/e31c0293/index.html","37effeb7a4736cc51d5e1d6f0c6918f6"],["/posts/f5fc4461/index.html","8a7e464e3c9e5c873079ee91fdcdd62b"],["/posts/f8073739/index.html","d56dbe02b18e344776710ca00ca22412"],["/posts/f97ef43b/index.html","bf8a85e7f158c1b39822e4366c174f12"],["/posts/fa84d5fc/index.html","478bfed4389bb44c90ac16cef199261d"],["/posts/fb1ab942/index.html","298519eb3a688a369011bf41055764ac"],["/sw-register.js","62627cea3b263b89181f6ff17bc4b134"],["/tags/J-pop/index.html","45917aeaa4c101d3ca17c2b4592000f1"],["/tags/index.html","84de348ec0d9ff31f4823e6e4aa2f8e2"],["/tags/つぶやき/index.html","36f724138d0cc240be6a0b7d1c5947d6"],["/tags/アニメ/index.html","5cbd37880046cb48f27290d066b5739f"],["/tags/インターネット/index.html","d4676948dd27dc9f378438ba14e896e0"],["/tags/チョコレート/index.html","b8affedd68fed608885f649f9a16e049"],["/tags/中国に関する新聞記事/index.html","547b7d06504170f57d3222f019257168"],["/tags/乳製品/index.html","4b5369fb40c7e62067d52f6691abceb5"],["/tags/労働者保護法律/index.html","9aa0e6123450d3bc47c51b58c354f7fa"],["/tags/心理学に関する記事/index.html","25b05b5923979c61810f257373db4329"],["/tags/日常生活/index.html","0419fe4a1021fc7ed47ff7ee8a35f2d1"],["/tags/日本のIT教育/index.html","5ad223019a054a4acadf538318ff342b"],["/tags/日本のIT現場/index.html","a1dbd18dd32fc4a67c4a2c15d7b8c585"],["/tags/日本のビジネスマーナ/index.html","c63cd4a08e288d1de17f99242dacd9fb"],["/tags/日本の国内の人権状況/index.html","1fa01de6612e265d09a60e0908d89ff3"],["/tags/日本の経済新聞記事/index.html","70ce1f2d315898d78306a92fe3010d26"],["/tags/日本地理/index.html","2f71dbf8b3864900d67e77a591bdc404"],["/tags/毎日ことば/index.html","6f06b0e68504a3823888ea53d8afca1e"],["/tags/环境/index.html","e5767b4dbb0e59a43b7c819ea510422a"],["/tags/過酷な現場/index.html","acccbb0655d1866f3b9abd984874c541"],["/tags/金融/index.html","514e72b067e0961a6e662830a8cb0a7f"],["/tags/食べ物文化/index.html","0b5bf4bc660dbdc6927fecf22c0a3a57"],["/tags/食品工業に関する記事/index.html","aee1c608ae45d58b998bb6a299fd3581"]];
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
