/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","b44c72312e6adf39b46f225ee0afd86f"],["/about/index.html","98325a919d4e551de3957cdee3e6fdeb"],["/archives/2019/04/index.html","8cbd73aa9f7c19b030add89623ceb46d"],["/archives/2019/05/index.html","fdd4c5014612f894ac2fdbcb643ef743"],["/archives/2019/05/page/2/index.html","7aec3c150471180761d47ce64b2f1c74"],["/archives/2019/05/page/3/index.html","c67cbb2eade5b875191f3408d4443766"],["/archives/2019/06/index.html","989d205a64ed83923b0154a83604db48"],["/archives/2019/index.html","69bcf27eea212626516574979929bba4"],["/archives/2019/page/2/index.html","9a8aff3d9fc2122ba20a164ae99d3703"],["/archives/2019/page/3/index.html","cd57051b660fd6bf60017901517cb4a9"],["/archives/2019/page/4/index.html","1065f354fc12399fc8ab283ab27c475f"],["/archives/index.html","30de07b246c6d2eadfd078982e38cff0"],["/archives/page/2/index.html","b8091ede3fc1497d1ad621ed8be47e1a"],["/archives/page/3/index.html","5e7997230775d0c2650dfc3df469a9ca"],["/archives/page/4/index.html","3cc02d96740f2f300cfaad81fae97c04"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","9cf4008d5783fccf956cae27b8f48372"],["/categories/つぶやき/index.html","e3d335c156d5ae7f55a0c37bbc1b7fb4"],["/categories/アニメ/index.html","009aba1ca67802c627deb3f0826f95ef"],["/categories/インターネット/index.html","0922d6b50a4fb177bb3cb239880e22fd"],["/categories/中国に関する新聞記事/index.html","53a57643430732c5fe38565d20261a73"],["/categories/労働者保護法律/index.html","d59b28e9bf6f48563f784a444dc7923e"],["/categories/心理学に関する記事/index.html","315f224418ccc777888c128f8d776dcd"],["/categories/日常生活/index.html","2ae31a1c0044cd1340e348ec9682aae1"],["/categories/日本のIT教育/index.html","12881cee0a0bb3ca6e35bf84e5393e14"],["/categories/日本のIT現場/index.html","1dfc3a869b7a41928bd11639be99315c"],["/categories/日本のビジネスマーナ/index.html","9b5149e992e742fed4abc8c87141e8e5"],["/categories/日本の国内の人権状況/index.html","f58c30da329b86686c37174a06620d6d"],["/categories/日本の経済新聞記事/index.html","45b1432b71ed8549d9257f9e656781a0"],["/categories/日本地理/index.html","35b43fc34324ab1fb1a39ba6241fbd71"],["/categories/环境/index.html","57b9af23f115252f902cb5a6eded088a"],["/categories/過酷な現場/index.html","ada7e4553665af4cf44ebedafe05b3c7"],["/categories/金融/index.html","63dadd48d232f148fd377063985439a7"],["/categories/食べ物文化/index.html","52515da039e2d4b5b12d69d918cb480c"],["/categories/食品工業に関する記事/index.html","952dd2974776c6a76047d2815dab52fe"],["/css/main.css","3c0b71bf7e1ff88bd3a7e96f93b251dc"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e126da2d531f8615b12cbd610bcfff08"],["/js/src/affix.js","a9aa89f52841678e730d1cf91ace2622"],["/js/src/algolia-search.js","5731b802b771caffc2e703c85376a70f"],["/js/src/bootstrap.js","497b5894097528cac326f29ec7490cbd"],["/js/src/china.js","b31fbd1b8d9eb831e9f71697d052cacf"],["/js/src/echarts.min.js","13d70a34936386832bab12d1c044e03e"],["/js/src/exturl.js","c9569eaa77d78765526a882334f65fd8"],["/js/src/footprint.js","024951bbf167e0550663a0c033198333"],["/js/src/hook-duoshuo.js","2451f00c7519dfb91d8279615228cb39"],["/js/src/instantclick.min.js","744ac9f3554b3a3d76f05ddfbdbf496c"],["/js/src/js.cookie.js","e926a06b8b027fac8d581b7daaa837eb"],["/js/src/motion.js","79df970155365f979f0aae8f58014fb5"],["/js/src/post-details.js","537668f5853db197ef943ae036b6db6f"],["/js/src/schemes/pisces.js","f58c802db1a9e0a37120a73e74412a97"],["/js/src/scroll-cookie.js","531acce6d3c8271af7acd22d7bb7f20e"],["/js/src/scrollspy.js","5718d668c451e6d3480df64aa5fb3d89"],["/js/src/utils.js","a57214377b99be8e6efc8bca358a8c61"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2968b2aaaec32317ac40b704814518b1"],["/lib/Han/dist/han.js","48cf2e34a63afa5b0821144cacbc541f"],["/lib/Han/dist/han.min.css","ef46fe3c747b1946fdb4dde92d638d20"],["/lib/Han/dist/han.min.js","6100833af37d54c9762bc1c0129a3847"],["/lib/algolia-instant-search/instantsearch.min.css","272e8f3805dfaf75c92e759948eb2a02"],["/lib/algolia-instant-search/instantsearch.min.js","34eac5013af55e2e85b170b28467245a"],["/lib/canvas-nest/canvas-nest.min.js","57b92ec7e17d464299c525a65b971be0"],["/lib/canvas-ribbon/canvas-ribbon.js","ffeae16cfb3800fd4b7d825351d0761c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","4f6d531ccc009bd66a61d028d88d98df"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","603ac575aa3c2b8e869dc830bfe7d808"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9486742fa69e0706d668c84f9da92179"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","49b522a76de0f959f580e4ae4e849629"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","ba907b7d95fcf52cf8cf938c5441481f"],["/lib/fancybox/source/jquery.fancybox.css","2598287a3244cef4370cb749ade2cf0b"],["/lib/fancybox/source/jquery.fancybox.js","f9ecb15a53179d423b70cbf2cbd5d3fa"],["/lib/fancybox/source/jquery.fancybox.pack.js","1ee0537ff01dc7041961a4219da32126"],["/lib/fastclick/README.html","75a35f3c52e4c612ba6c0c8150114ae6"],["/lib/fastclick/lib/fastclick.js","54e9ce6548e35bd28dee9c939f660024"],["/lib/fastclick/lib/fastclick.min.js","18174a08e3de30fff0f994680082aa0d"],["/lib/font-awesome/css/font-awesome.css","30aa37bb5b3192aca828a5065f738c54"],["/lib/font-awesome/css/font-awesome.min.css","30aa37bb5b3192aca828a5065f738c54"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","1d5a98bd4d8208eefa2cadf7c5d3502c"],["/lib/jquery_lazyload/CONTRIBUTING.html","3f0c8eeee3cfc9d9e639a803637840b4"],["/lib/jquery_lazyload/README.html","e1c25ab969eecae6c5d7962750d614ea"],["/lib/jquery_lazyload/jquery.lazyload.js","39104b55c58df170062f2f9b83d67d57"],["/lib/jquery_lazyload/jquery.scrollstop.js","093438aa06119f0811566b012ec2c589"],["/lib/needsharebutton/font-embedded.css","353e69fc81949aaf4d2b5c3e491d3740"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","0e7485e5bad9339dc991b2c39b913d72"],["/lib/pace/pace-theme-barber-shop.min.css","904b9d49c52e492b53f5c2a1b4164967"],["/lib/pace/pace-theme-big-counter.min.css","3116e2cbe681ac49a61551eff2a7e278"],["/lib/pace/pace-theme-bounce.min.css","c4f75aeeda61134a72910a59ab6cc1ea"],["/lib/pace/pace-theme-center-atom.min.css","e48abf591f71a48cf6b47bc6a2a079e7"],["/lib/pace/pace-theme-center-circle.min.css","5f9e7b01f4dcaf6548d0e8cf1df772ff"],["/lib/pace/pace-theme-center-radar.min.css","c875d27969f50379571efa3cfc6b72c8"],["/lib/pace/pace-theme-center-simple.min.css","99944a3795aa261474faaad5e5edf991"],["/lib/pace/pace-theme-corner-indicator.min.css","074bf6f333e28861ed990a4f5feb1918"],["/lib/pace/pace-theme-fill-left.min.css","d935bcbbd8463ae1eed9635a2c3fb7ae"],["/lib/pace/pace-theme-flash.min.css","237625877d698b1fbd4d1451f647ff55"],["/lib/pace/pace-theme-loading-bar.min.css","34d6468824c8f90f9068cb24d6f928c7"],["/lib/pace/pace-theme-mac-osx.min.css","f99adea813f1cbd0d46101c006fd68d7"],["/lib/pace/pace-theme-minimal.min.css","376fdfd7e3c567c993fb07e34868c722"],["/lib/pace/pace.min.js","89a096badb8fab30e3d80ffeeb9361f2"],["/lib/three/canvas_lines.min.js","1628131810ab8d498147aadb893cd97d"],["/lib/three/canvas_sphere.min.js","7f7775609459ec77414cddd0e1c5f5a3"],["/lib/three/three-waves.min.js","b14b23cf307f492dd4132e10ba7dd23d"],["/lib/three/three.min.js","c01f75f334dc6555d2a8dc371b957f88"],["/lib/ua-parser-js/dist/ua-parser.min.js","6c18fb80376d4efc7a4ae36190f43e22"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c7d3177bf3887fe52b08ef855578c497"],["/lib/velocity/velocity.js","2ce23635dbc1d9903699f252bd8e9d53"],["/lib/velocity/velocity.min.js","069dc6798e7753e8a91f253e6f4ac708"],["/lib/velocity/velocity.ui.js","22f1eb67be4592ea72026aef94ccd134"],["/lib/velocity/velocity.ui.min.js","eb32d245f44432c199bc34aeb8119d10"],["/links/index.html","aad0fec2b129a15296183b7ce176701e"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","e6f3a3e6e616f95f9713b7ce25a1efb2"],["/page/3/index.html","12d4ba0096c0c2155a40a80a4e1d9061"],["/page/4/index.html","1b5974102f361126a5293353f8f59075"],["/photos/index.html","a714ef9fa822af79a854abd4a2b0ff12"],["/posts/191ddb73/index.html","92726c8a745a4c7962e055366f720c49"],["/posts/1a195976/index.html","f4ed5cbc7c2d040d1af4b7f11e237118"],["/posts/2292f1af/index.html","247cbb826d05bb0d2db0e868fd08d04c"],["/posts/2fc77d95/index.html","3f4885855fad845abf1b7c1a4c15a6a7"],["/posts/2feacaf4/index.html","753564d3b134b90e00056e1e3dd0ef33"],["/posts/37f2c331/index.html","dc9b8c784e0028ee176c094f23d20b5a"],["/posts/385f0de9/index.html","25acef25222ba8d7ebabf0fab968001d"],["/posts/3caecfa9/index.html","ef99ab83308104f25ae3505e334fab06"],["/posts/44414303/index.html","3f114bb3ba53f0b65758ecf77aaac361"],["/posts/456610d0/index.html","a488d39a4e3a890d4d596a0bc8438049"],["/posts/45e51894/index.html","9a6c79247e82dcaccfa32bb2780883b2"],["/posts/4f1131af/index.html","118c37bfb1b6d9834ce7188b961b05f7"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","a8dc1fc02d47e7e8ce8e778fe5978326"],["/posts/517ebb95/index.html","a0e074949a45ee94b35962e90bf6f817"],["/posts/53bf1d9d/index.html","0eb48b2eba43b97204faec3951eb8572"],["/posts/554c2ba0/index.html","ba0104f02430b58f48dc323a5ed6eced"],["/posts/63556f52/index.html","0b06dd56c915acb9b5bdcd93c17a3456"],["/posts/6d49ceec/index.html","58989ebf12a5fbeb5832bebfae08de6f"],["/posts/6de7d9db/index.html","accb7d208133dd0ab3ae3a5ffc8e75cf"],["/posts/6fda249f/index.html","cdfb73adf2159f1bc8cf0adc689d0a3f"],["/posts/84b87417/index.html","f482206d11bc09ced6cf512781bd73b0"],["/posts/97e5bc9c/index.html","7554100ce3dcf6223050c055e034f06a"],["/posts/9a5c7b64/index.html","9b99363fd5d0292dd19cdc9516966cb8"],["/posts/c311b112/index.html","ae8263bf28fe62c94f299e74a0261406"],["/posts/c620d4c2/index.html","cac2e3465d3f7b5362b3374b94c74ea6"],["/posts/cfc54393/index.html","64e9fe046d4b794f53a25d2014169d4c"],["/posts/dc5155ff/index.html","5e3b51f7d69094f894b536f3647f6b2c"],["/posts/e1bd836e/index.html","656de8b3bca544f9177900cc219c73ea"],["/posts/e31c0293/index.html","ddcdbeaa5765bb317634998edf248c11"],["/posts/f5fc4461/index.html","a38adc51da0b1b4ac2b439aad8be113a"],["/posts/f8073739/index.html","ae5a61f8aef469c9bfff3c665c7f2a2c"],["/posts/f97ef43b/index.html","11e4fb1fe95d227a36fd5da36c30e9cc"],["/posts/fa84d5fc/index.html","89d4bd00a1ff15837a2f43a143312d69"],["/sw-register.js","8b96cf0dee15f304542467818d1cf8a9"],["/tags/index.html","1b7bca7883064651e71ac92104d34e99"],["/tags/つぶやき/index.html","1457cc93795543ecc1dd35e420f1c4e5"],["/tags/アニメ/index.html","021eedc10c85c4aeeb153255fb083765"],["/tags/インターネット/index.html","b50f5ddb1851a225382e630afd365adc"],["/tags/チョコレート/index.html","4d9b75247d492d32735866a7ed08de14"],["/tags/中国に関する新聞記事/index.html","ab701d9081606180fd4630400e8ad841"],["/tags/乳製品/index.html","ed603a864c547a44928c022ba7b9dba1"],["/tags/労働者保護法律/index.html","d747d9d957c0ace3aeaab8f829b90dab"],["/tags/心理学に関する記事/index.html","8af717ceb2b797dc28bced098af163e1"],["/tags/日常生活/index.html","107783018252d379ef034ce6ecc7c400"],["/tags/日本のIT教育/index.html","42a17a59a16b7f827c344bea7fb81c38"],["/tags/日本のIT現場/index.html","032b312cf67386daf3b630d84b1f0a99"],["/tags/日本のビジネスマーナ/index.html","a26e4ef2c345e932d5e93f09c4a49d54"],["/tags/日本の国内の人権状況/index.html","a9d47e654dd28d5b5a094e29796d55aa"],["/tags/日本の経済新聞記事/index.html","07a3ac1c46179d3e66542536f06c7c74"],["/tags/日本地理/index.html","173c5863c31ca505e0bf009f800de5f1"],["/tags/环境/index.html","8676df855e5e83128800d34d0316eee9"],["/tags/過酷な現場/index.html","2aae8841c0f37bb97b93bdcc296a0763"],["/tags/金融/index.html","bc5ad7b6a4adcbdd90d93a5bee8d43a5"],["/tags/食べ物文化/index.html","e13cbdb54cfe78214a2817a08250a57f"],["/tags/食品工業に関する記事/index.html","0e7dafdb6b46ce49163b813f18749878"]];
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
