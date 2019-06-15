/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","50366519979cbde04bfa41868867e61d"],["/about/index.html","2fe1fd3c6cc27e44566921122b30fe01"],["/archives/2019/04/index.html","92b42ec8494165dae9442c1eedb1f4d2"],["/archives/2019/05/index.html","23fee77cb1e2624317d427f165f67541"],["/archives/2019/05/page/2/index.html","340c97b1d79d4fdd8c0243fc29eaaa52"],["/archives/2019/05/page/3/index.html","ef1a40b41c87d0ad5ba5d1c7d5c3a310"],["/archives/2019/06/index.html","49a5f1aaafd0352f0c3745ef5f0ad91a"],["/archives/2019/index.html","fb566570da88851365629a24db99851b"],["/archives/2019/page/2/index.html","d92c582f3f04b7a47a5c3f931073376b"],["/archives/2019/page/3/index.html","207c32bee6328d59ee7b5d3aa511e880"],["/archives/2019/page/4/index.html","f72319c3ab5c0356ebc1d6c150edc7d6"],["/archives/index.html","3277187f0a3ea75c00d10d985475f51d"],["/archives/page/2/index.html","24b86b1ac0107f98073d84621f94e81c"],["/archives/page/3/index.html","ee75d84b5740f1370c955cd5e0e15b52"],["/archives/page/4/index.html","2477e30e65f9851e0370ba31c43d54c7"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","8cfe652bd48c84041aee9666e14daef6"],["/categories/つぶやき/index.html","7747f8c040f69bda59fff47eddd77573"],["/categories/アニメ/index.html","82af1fb7c9e547b8433814f691ff59c2"],["/categories/インターネット/index.html","3fa40b955dc5ec0b8ce9b92ec00bfb0e"],["/categories/中国に関する新聞記事/index.html","dcba3a508f8b391e50c7d6b6c1a2895f"],["/categories/労働者保護法律/index.html","2eb31d18a9cac36549a1d26a159e3c03"],["/categories/心理学に関する記事/index.html","2552927ae2b1dc0c734a760733f5e705"],["/categories/日常生活/index.html","8659da7d55f87549ab5a766e3c6585ed"],["/categories/日本のIT教育/index.html","fc1cdb06db2854fdbd10848d64a37330"],["/categories/日本のIT現場/index.html","e5c7d56c0622f1c8c394d8031f3269a3"],["/categories/日本のビジネスマーナ/index.html","7d3a3a269a2bf3a8373fe24baf49ad9e"],["/categories/日本の国内の人権状況/index.html","81e2cd673ed649d9fd6e4337d8c626fe"],["/categories/日本の経済新聞記事/index.html","bd8021f08a5b46a36365ff95dc6b4af9"],["/categories/日本地理/index.html","dba85f5221c1bb64a6b03264edcfd812"],["/categories/环境/index.html","edf64f388c34f2e46369a88506e8f15c"],["/categories/過酷な現場/index.html","e56ca5b9f5122d0f0b3f5bfb2f29d000"],["/categories/金融/index.html","69d01679d32f26d22ecf96ac6be655e7"],["/categories/食べ物文化/index.html","6cec7664b149a0b3360f900234882695"],["/categories/食品工業に関する記事/index.html","6c4a8e9a1a70ddb5c0b9456191d0ef8f"],["/css/main.css","4a9cc447a051f6b5e52c9dc603d05c87"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b6ae4123ebf30eeafa2cdb101afd72b4"],["/js/src/affix.js","086505751bf8c341d59cb354ee14479c"],["/js/src/algolia-search.js","459900c404f9b91896b41543b1e0183a"],["/js/src/bootstrap.js","bce28246b57cb3aa97ecbe6bf6e90f9e"],["/js/src/china.js","05e183cc689e887ca698d8833731cc82"],["/js/src/echarts.min.js","b57aa94a54a3c1b9462a74a312d8b22d"],["/js/src/exturl.js","9b6bd665a9b152bb7cff784f2378f381"],["/js/src/footprint.js","2b1ee12da5be7fbfc5b9ec34411df3fc"],["/js/src/hook-duoshuo.js","435877b4333ebd601aed0c1f6288b81d"],["/js/src/instantclick.min.js","5c8ed5c2008c63a325f0b195f7d59d6a"],["/js/src/js.cookie.js","63e124473c92b7df7d2ce81cc79d4c2d"],["/js/src/motion.js","d55960f8e2cc93ea6342ed4985089c2a"],["/js/src/post-details.js","2fb0aaa05ca1db76c12e3e28969501ea"],["/js/src/schemes/pisces.js","2ccd003c6019ddba9a1d01da7ff0ac9a"],["/js/src/scroll-cookie.js","d117b0c5627fd486b5489a4e257c446c"],["/js/src/scrollspy.js","d5bf47660f41463081a155e78442b5c1"],["/js/src/utils.js","90cf2ab7153775018f9ea4c38dd91478"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","42751d843f19178424492cb88cd3f2ad"],["/lib/Han/dist/han.js","77ea30a311b1dc23be469234226e5162"],["/lib/Han/dist/han.min.css","58f9bad84b7c63dee07eae9b4706e1d0"],["/lib/Han/dist/han.min.js","fed783bbac873594615cda677ed931d2"],["/lib/algolia-instant-search/instantsearch.min.css","f8e13b702c32af1e59d6f0fedea7184b"],["/lib/algolia-instant-search/instantsearch.min.js","30659c6d62c38148aff53eb23b889c04"],["/lib/canvas-nest/canvas-nest.min.js","a133fb3aa2bef54039ffde00b77cf95a"],["/lib/canvas-ribbon/canvas-ribbon.js","33c964278eba711a3a2feebebadb7705"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","51a1c420148847889d306e3baaf322e6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0e58b53dc04f9c04259bd5d272eef04c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","70e3057c26c564cc4e13cb7e36b41332"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a67ada28c1c768cbdc5a7775314ade85"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6c392df184d81eec678dfd645172dd4c"],["/lib/fancybox/source/jquery.fancybox.css","dac542b41c0e8c61ad67565841175da0"],["/lib/fancybox/source/jquery.fancybox.js","3e0dd01aa4737c2e05de42495fd7d2eb"],["/lib/fancybox/source/jquery.fancybox.pack.js","77e3093d23028799bcaa21eccb03dad0"],["/lib/fastclick/README.html","727464588655c17c44037c9593dec94a"],["/lib/fastclick/lib/fastclick.js","f5097630622be7481faa945ffe2221d6"],["/lib/fastclick/lib/fastclick.min.js","32d7791083e4399837921ea425aa4f91"],["/lib/font-awesome/css/font-awesome.css","e13edebfd810dff16a2887de48d62b23"],["/lib/font-awesome/css/font-awesome.min.css","85c8ee007b3cb7155b6bc589dd14d94b"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","e4faa739fd28be05e919a7fc5c900860"],["/lib/jquery_lazyload/CONTRIBUTING.html","9b17a129936ee9cac4cfa0d7dd20abec"],["/lib/jquery_lazyload/README.html","8dc52605a08340f1e28d89ac52a4d5af"],["/lib/jquery_lazyload/jquery.lazyload.js","c54cc65e5362b00a9b101955205f01c1"],["/lib/jquery_lazyload/jquery.scrollstop.js","d8d9fad0dc4e1dce82a2db5e62f3ddeb"],["/lib/needsharebutton/font-embedded.css","60141b7e5c7a719e01d12cd678f695ff"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","32fbe7f3c63e1933272d5e4c773cc2d6"],["/lib/pace/pace-theme-barber-shop.min.css","d09a401e510f82446b7193faee000a63"],["/lib/pace/pace-theme-big-counter.min.css","e7fc7ef9a4721325d132dd6e587c91c4"],["/lib/pace/pace-theme-bounce.min.css","e07a0194619de31b765754b8c64dc2c8"],["/lib/pace/pace-theme-center-atom.min.css","58ecaff15cbdc7ed71bdc0718be2ad54"],["/lib/pace/pace-theme-center-circle.min.css","e9d815b90ce2e44dac36c7d3fc1c73cf"],["/lib/pace/pace-theme-center-radar.min.css","523e9714e2f5e21d564889df421d53ef"],["/lib/pace/pace-theme-center-simple.min.css","a6f002c55c7a2ff00dc9c27a9bf7140f"],["/lib/pace/pace-theme-corner-indicator.min.css","53ec371cec0ef75b7d539c9d9c373210"],["/lib/pace/pace-theme-fill-left.min.css","a5c15f3a8f13eb65b703ca0cb886112c"],["/lib/pace/pace-theme-flash.min.css","b1feb6859b7831d5cb5e13d81919bd25"],["/lib/pace/pace-theme-loading-bar.min.css","d913f3507e63a92e9189ab002184ce35"],["/lib/pace/pace-theme-mac-osx.min.css","1d4f6be348ea1fb5581920aac16037e2"],["/lib/pace/pace-theme-minimal.min.css","0afd980dcf61d72adf340a2c2eeed78b"],["/lib/pace/pace.min.js","36a0e78fff91cd4f9454638e411f0058"],["/lib/three/canvas_lines.min.js","f9ef49c3a3b8ed2c44fcbf54349d5e98"],["/lib/three/canvas_sphere.min.js","f82f61f19d12a1dfeadcfd1f858585c1"],["/lib/three/three-waves.min.js","c00bf9335a655182258d18b367ad8656"],["/lib/three/three.min.js","74d492465ff1b3d49428d32c8ce15e4e"],["/lib/ua-parser-js/dist/ua-parser.min.js","cc7d26c4b4155e9d9d55869d329c52b5"],["/lib/ua-parser-js/dist/ua-parser.pack.js","22b590ce8518b0fbbb2f93b8ef521c82"],["/lib/velocity/velocity.js","3ac63ca42f20f376ce3081468fb2a421"],["/lib/velocity/velocity.min.js","c1aec2e0a216e1917077eeb2ea3e1d20"],["/lib/velocity/velocity.ui.js","b0c26c23ba992d13fefedfa8d8c7efc4"],["/lib/velocity/velocity.ui.min.js","c952cd4e0b9e32acbd28b5f7ee027ed4"],["/links/index.html","5495c67b6ee13f9e02b35e0873dc90cf"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","83bf9af335a9b8f6f0d7915f77359938"],["/page/3/index.html","c8622eeb919146e06842ba5f23d103aa"],["/page/4/index.html","a90f3193e72b096e78b608ed17e341c4"],["/photos/index.html","68c99812f9a0a26690123a8314465f1b"],["/posts/191ddb73/index.html","69662a2acddeafedbb8278b1ff0010a6"],["/posts/1a195976/index.html","da9f7f2072d0c57651a2e1be6360e35a"],["/posts/2292f1af/index.html","fe6cf42bcb90fa8a0abc50b771ff5345"],["/posts/2fc77d95/index.html","d52805eec82c6b2a3a6a1cf79dc98bcc"],["/posts/2feacaf4/index.html","79250509091d6fd83c9e9a10bec6b12a"],["/posts/37f2c331/index.html","ab89b15141c5564a5e3197304f07c58b"],["/posts/385f0de9/index.html","6047fe8d49209205669536e7a9faf088"],["/posts/3caecfa9/index.html","b037d1fde111ed03d99f48fd0f520b1c"],["/posts/44414303/index.html","e502ec090bd3a72ad16424296bd6fb61"],["/posts/456610d0/index.html","4fc68c302a6c2d35cf6291b24ba98465"],["/posts/45e51894/index.html","352fb6af05c2df0fb5e73a1cc07c5a20"],["/posts/4f1131af/index.html","8ddcdc6ae5ae353a2b89e26e15ad9bd8"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","00a659d93616b2e056ee582037caf52c"],["/posts/517ebb95/index.html","491b3cc90c96575cb6bc9f01a6ebb576"],["/posts/53bf1d9d/index.html","954df9d677663ce45917efa82b16c3d4"],["/posts/554c2ba0/index.html","9c31304fed0a165975cff37449ed215d"],["/posts/63556f52/index.html","63a3fe2d492a8c2c85b74a0edb46de1d"],["/posts/6d49ceec/index.html","a7da86d734ee83d552d30a1141795aef"],["/posts/6de7d9db/index.html","0f62bafb804971ed6bffa1d70a09261a"],["/posts/6fda249f/index.html","9289e38c02f3277c4e388f87cdec6d44"],["/posts/84b87417/index.html","7d7766c387c306d2237f520e66eccf98"],["/posts/92912ddc/index.html","fb10f99e933835b45c8db448e738e8dd"],["/posts/97e5bc9c/index.html","7bdf41e3c0eb333968233ec73a218c2a"],["/posts/9a5c7b64/index.html","5f30762177d4128c5ddcf5475486c886"],["/posts/c311b112/index.html","29d90da005f8ca68cdaf742f11aa8868"],["/posts/c620d4c2/index.html","39bd177c89981e44c48bc8847dfe98eb"],["/posts/cfc54393/index.html","44f4f2e418d33992ba7b9677bc94760d"],["/posts/dc5155ff/index.html","d0dc962d0c7e4a143e220dc3ec97f3d3"],["/posts/e1bd836e/index.html","feb57f3fe88f7c7b2a298881ae4b29c3"],["/posts/e31c0293/index.html","e72f7c29b5bd7524cd85f6c3222f8f4e"],["/posts/f5fc4461/index.html","0f362deaa05475e12a727a738fe2bdae"],["/posts/f8073739/index.html","8890b68933a9e30ac353d1171d6cac9f"],["/posts/f97ef43b/index.html","9571ad154ac68961547e840b0f913bcf"],["/posts/fa84d5fc/index.html","7c50d22ec7a7a20664e43b0ce9df75dc"],["/sw-register.js","81f67e515f5c6f4883465a26bb8b93da"],["/tags/index.html","874787b48e0053bffdcd6f3a9caf7b15"],["/tags/つぶやき/index.html","6fb99457d0d92e44e669561f5f6126e8"],["/tags/アニメ/index.html","70aa0642d00e2425c82288be9322fae4"],["/tags/インターネット/index.html","373afbb241bec65aaab0bcfb09b68f4b"],["/tags/チョコレート/index.html","d30cb769581f8efabcc94c4dd3e250da"],["/tags/中国に関する新聞記事/index.html","8a9fcd74f8cab005fd4ea53b77cfa012"],["/tags/乳製品/index.html","64c8f51ff642b302c6b200026205cf93"],["/tags/労働者保護法律/index.html","710b440eb3c372695d746791b0532b54"],["/tags/心理学に関する記事/index.html","e1a7b390dd6f785d63620eee38c07efa"],["/tags/日常生活/index.html","53484035357faba45b5ce231f562cc50"],["/tags/日本のIT教育/index.html","d08993506f6ab91b17bddb770f9a73a8"],["/tags/日本のIT現場/index.html","890ba1fd35cc84c5f6380ecf5c69b76f"],["/tags/日本のビジネスマーナ/index.html","d114a2a03f7571b4ef73db18bf297612"],["/tags/日本の国内の人権状況/index.html","f9f66ab26791ef436b82d786579488de"],["/tags/日本の経済新聞記事/index.html","cbcd5abef4450f6c46b1fff23614d22e"],["/tags/日本地理/index.html","6495fdcec8d37e7de92607f6607ee627"],["/tags/环境/index.html","5c5d289ed29fc5dee5ddb70858d161f5"],["/tags/過酷な現場/index.html","e84c1c262cbc30250dc13a69d01b96ab"],["/tags/金融/index.html","6fa124cf471eee237cee9204dda9e712"],["/tags/食べ物文化/index.html","1eed48c1f98b30db4cc8776a8f270920"],["/tags/食品工業に関する記事/index.html","5c4023aa50c756868829ed1e5b2c85b9"]];
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
