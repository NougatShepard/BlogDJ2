/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","43bcf96e54b9b5f3e801bcbf195ddbce"],["/about/index.html","640a1a72dbe44c9472ae9426907f7ae3"],["/archives/2019/04/index.html","9139241456ca568190048ba580d04dde"],["/archives/2019/05/index.html","4287f907d1cdfd67c2b89208c9c6214b"],["/archives/2019/05/page/2/index.html","76bc7a3b760d7bcef0d7ab824d9546ea"],["/archives/2019/05/page/3/index.html","93b59ef6474ea22af4e90c91c11d0ca2"],["/archives/2019/06/index.html","2ff26a077f425342e20c8e5e833ea709"],["/archives/2019/index.html","57044a5d0fe09d40b285d2750fe93b38"],["/archives/2019/page/2/index.html","2f851ccf17d573b1c25b8b2090d499a8"],["/archives/2019/page/3/index.html","cda4b62b5155f3e2eb4b618915a165ce"],["/archives/2019/page/4/index.html","ec90470b24572722ed7ffe50566c26e6"],["/archives/index.html","eb3a07ced2b963673b33d51164d1fd6a"],["/archives/page/2/index.html","1e2088551900d9e7dd479d1a14f92414"],["/archives/page/3/index.html","cab62a24c08c31f927ae1dc669839113"],["/archives/page/4/index.html","f9ff975abd2307132e30fa61b5b037f0"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/index.html","04a06cc6d8be9568e9f294ef51f56c71"],["/categories/つぶやき/index.html","031e376aaae9c38dfdbcec4dee604d20"],["/categories/アニメ/index.html","94f23e8f8a97f84a5420c9d9e49796f1"],["/categories/インターネット/index.html","f29f198774cdad67fb1205bacb06e366"],["/categories/中国に関する新聞記事/index.html","9c59d446b9dd655161f37133532fe931"],["/categories/労働者保護法律/index.html","badcc17f1ffbe23b1ec73c20d67ad087"],["/categories/心理学に関する記事/index.html","c3ceff6ef2763a167002296aa1e237ab"],["/categories/日常生活/index.html","dd2336b6455b85928e4871043de2744f"],["/categories/日本のIT教育/index.html","c9ce6145fb41e800356b459e3e9d7e25"],["/categories/日本のIT現場/index.html","8f7c04b2ed45eb2c1913b26ef8bc1732"],["/categories/日本のビジネスマーナ/index.html","7220d9f33a21723b4548b0c788a5bf5c"],["/categories/日本の国内の人権状況/index.html","aa81f9149176e76283e3af1bf96f37b8"],["/categories/日本の経済新聞記事/index.html","d98d7d51b86c52616c1bac138b699a56"],["/categories/日本地理/index.html","b43f0e22c02651b839e3762f10cec024"],["/categories/环境/index.html","1de91d3fde720cc6c5f1cbbabe1b86de"],["/categories/過酷な現場/index.html","d7080e07b44eeb7d70231d74cbed3084"],["/categories/金融/index.html","a93a4d53cea31fc27d4d3c7b6340e989"],["/categories/食べ物文化/index.html","56b121f75c1a98c91c53d242fbc14c00"],["/categories/食品工業に関する記事/index.html","b64ee74066c6e0b036b57cc48e957c2a"],["/css/main.css","22b7dc1f0955a6722c43c5fb69d9f03e"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","2b8764b9e2d3d3cb2a6434d2155b5c9f"],["/js/src/affix.js","f41449bbf6e3af45d4474c3f10ccfb4c"],["/js/src/algolia-search.js","954fc27751ec0c3ecd4a01d0fe63d4f6"],["/js/src/bootstrap.js","c00754ed6fac3494b1aacb4fe425d133"],["/js/src/china.js","3d0d7cbf9fd29d8561cec4d196ccec91"],["/js/src/echarts.min.js","6ffeb748c63aa6657a62ba83aef925c3"],["/js/src/exturl.js","bd5617bf39732f59d56f92648b69e5d4"],["/js/src/footprint.js","d338d6a120f404c9096dc9d4eaeae6e6"],["/js/src/hook-duoshuo.js","4dda8cdd345ec8ba8302ee077e3a3e2b"],["/js/src/instantclick.min.js","f5b933b47488f277255b511a9a879d76"],["/js/src/js.cookie.js","b849f2d113ff8a75465a6fef009822b0"],["/js/src/motion.js","7c184630c35bd5cfae5a2138cde8df6a"],["/js/src/post-details.js","35cc840a77b69e3aec10a37321bc7e54"],["/js/src/schemes/pisces.js","6fccb3022f4753f2812402de12fa0d4e"],["/js/src/scroll-cookie.js","7e5b11b3068f178c5f5cba3081d0cc5e"],["/js/src/scrollspy.js","783d08c6bce5f3665b14694c3928aa96"],["/js/src/utils.js","70dfe1d929255307d5fe37bc91184c34"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","42413aa609b231f726ea102cb4dcd253"],["/lib/Han/dist/han.js","5eb9fa5be99dbdbd5ee22955e55915c3"],["/lib/Han/dist/han.min.css","cfac01088b138b480f5fc62557202a15"],["/lib/Han/dist/han.min.js","09ff268a14fe26cfd18a1dde6f9b9291"],["/lib/algolia-instant-search/instantsearch.min.css","f62d8f4b35c344d37a3d2b3c35c8a212"],["/lib/algolia-instant-search/instantsearch.min.js","fc66aea6f1fadc34381c8d927034ac1c"],["/lib/canvas-nest/canvas-nest.min.js","5e691054d38688bcc598fbe239046486"],["/lib/canvas-ribbon/canvas-ribbon.js","e7ddd032991e8123759f25e71e7e1432"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1538f8778c9fce7b38d6a41e1070d76e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fb8e94a6a44522680e59d45cdd1ad223"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f2cabce5a0a3b39e6fb996542d407e2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","0a56903d01825b03ee0481ccf356f023"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e7093205e76069aebe3e39484ef56baa"],["/lib/fancybox/source/jquery.fancybox.css","0d7a01531aaa6cb6a6cdc5382c0ffcf5"],["/lib/fancybox/source/jquery.fancybox.js","013e308143d56be8fd295f7ecb046eb0"],["/lib/fancybox/source/jquery.fancybox.pack.js","d81fe01c197c78bf849a4ad69016ffb5"],["/lib/fastclick/README.html","e22bea36be513734584986c3d8f5b006"],["/lib/fastclick/lib/fastclick.js","0d4bcdaea30b254612bd0fb7a0f0b545"],["/lib/fastclick/lib/fastclick.min.js","ba1edd67cd55ee7a8258e7225e18c5bd"],["/lib/font-awesome/css/font-awesome.css","1e519b7ecd1c4cfcf61c74c83a209cce"],["/lib/font-awesome/css/font-awesome.min.css","38beb06994d64fb0d628f05e1cd97996"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","c52729c0a833d3a25475e7d7f15cbebf"],["/lib/jquery_lazyload/CONTRIBUTING.html","152a75601bfaa37e1b3d94380fe992aa"],["/lib/jquery_lazyload/README.html","2d4ef15b2d30cc237a4d3f9a98848a02"],["/lib/jquery_lazyload/jquery.lazyload.js","91965037bb95fd5ab01329e41ae71289"],["/lib/jquery_lazyload/jquery.scrollstop.js","cd8635d3686543526738a17195b6e21a"],["/lib/needsharebutton/font-embedded.css","4c9bd3c1bf04d9966865b2591dab5887"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","e84d715074268e025d089278350e57ee"],["/lib/pace/pace-theme-barber-shop.min.css","2620084b587889d611008650d5ea8946"],["/lib/pace/pace-theme-big-counter.min.css","13e5bcb0d098a6d518278ecd21532a26"],["/lib/pace/pace-theme-bounce.min.css","75be03c688ffbc86879e9adbc8075ca8"],["/lib/pace/pace-theme-center-atom.min.css","a5e3dec31f6e0d9a4ecba908af36774c"],["/lib/pace/pace-theme-center-circle.min.css","2d48b1b2770a67e70afcd83741174924"],["/lib/pace/pace-theme-center-radar.min.css","9546004c2e1eac0b76d2199e98626608"],["/lib/pace/pace-theme-center-simple.min.css","593892130a261d03ed9675d653a032c8"],["/lib/pace/pace-theme-corner-indicator.min.css","2e312358526ad215a5369867416523f8"],["/lib/pace/pace-theme-fill-left.min.css","e12b5c6f6c15c5d95ef900c320f7fd29"],["/lib/pace/pace-theme-flash.min.css","533025e6fa5c40fd9e2bc4a0ca5b5cd4"],["/lib/pace/pace-theme-loading-bar.min.css","042707c35031a974cecf370d19281aae"],["/lib/pace/pace-theme-mac-osx.min.css","f13a04426443bdbc43691e21cdd56bcf"],["/lib/pace/pace-theme-minimal.min.css","f9e74383b3588825d1a6171c09a83240"],["/lib/pace/pace.min.js","6a39009ba785e49b1d514d9db07af708"],["/lib/three/canvas_lines.min.js","5e74a74332b118874260a2254e9e307b"],["/lib/three/canvas_sphere.min.js","4b00b3f0d0418b2d53b5f14525979e65"],["/lib/three/three-waves.min.js","b5a8345240a666d4418fe0d42885ad77"],["/lib/three/three.min.js","07825ce6b03b53921fee5c255d372287"],["/lib/ua-parser-js/dist/ua-parser.min.js","d4daba8da137b18b91c39e257521d19a"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d118a36f46d6bf12041e6452fa617645"],["/lib/velocity/velocity.js","95e8a0f1a9821854690a49dfd4dda8f4"],["/lib/velocity/velocity.min.js","42fd577eb11c2ad994b936ad5347aa53"],["/lib/velocity/velocity.ui.js","479bc1100a56d251dc99bb2a63c424bc"],["/lib/velocity/velocity.ui.min.js","4199f243ba66d9b44fea89c1e5e26612"],["/links/index.html","797938e22a39d78915355a64e6696395"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","d62c2be8d121f7b1edc236292d4d98ca"],["/page/3/index.html","b7d25910a56482e07ab1cb30a03dd737"],["/page/4/index.html","79459de2e544a9dc977a201f714857cb"],["/photos/index.html","48e43e6f92610495d3da326fb1b1c42c"],["/posts/191ddb73/index.html","21e043743764fb63e18eae442e38e87c"],["/posts/1a195976/index.html","f9b76afa9bf70bf00c963dae4401fdf6"],["/posts/2292f1af/index.html","189c9b524a3216a54a7d2323040c71cb"],["/posts/2fc77d95/index.html","6fb611769ae3be8b085b9ac34b1ec008"],["/posts/2feacaf4/index.html","641d407fe9b4bd774265052260e6d959"],["/posts/37f2c331/index.html","c858dc1db0a3b6829fadc034d4dc7c19"],["/posts/385f0de9/index.html","f8f2643596b24cffe2a89a9e3ce5cf6e"],["/posts/3caecfa9/index.html","c32526805c499b1a0f728e6da558c30f"],["/posts/44414303/index.html","2d775c8cfa39a9286e3680f146924d18"],["/posts/456610d0/index.html","feac2759aa54217ef13af453a0f52b98"],["/posts/45e51894/index.html","dada22704649e26548d3cd2b3617c4f9"],["/posts/4f1131af/index.html","f002cbde66c6accdc1ca4c0a759c5039"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","be7237600fe4a4bcd6c9be3cf9b7a1d8"],["/posts/517ebb95/index.html","f7192c1ea4be4ebc722bf32454930126"],["/posts/53bf1d9d/index.html","7337221caac89e67560386d39794b2a7"],["/posts/554c2ba0/index.html","4bf59917a900c32adf757b08c7066008"],["/posts/63556f52/index.html","997c3459cd35693c260ecd35dd3461be"],["/posts/6d49ceec/index.html","cd9c4cf024bfd004a5f820f933463a54"],["/posts/6de7d9db/index.html","a53176cbe75a7a9c8d0e085de3e6849f"],["/posts/6fda249f/index.html","0bd8a44945f238239cfe8bc8485f9770"],["/posts/84b87417/index.html","d5822734573e737e270b6e2b7d25bff5"],["/posts/92912ddc/index.html","76599e58f8066a39c07f415400bb6e9e"],["/posts/97e5bc9c/index.html","a4a9853bb6a49cec43fa498abe070b4c"],["/posts/9a5c7b64/index.html","071a70013eb327b96aae2f552583265d"],["/posts/c311b112/index.html","dc88af4cf3b81ab121ec759235ac3323"],["/posts/c620d4c2/index.html","a5ca53f677a6859186f08d126d7ddba0"],["/posts/cfc54393/index.html","91cefcc98f7efd09d44b433c334ff505"],["/posts/dc5155ff/index.html","24ea7e0b5605e4529c4ed570e58b6108"],["/posts/e1bd836e/index.html","54df6a59bef3df16733337062fc6a0f2"],["/posts/e31c0293/index.html","c8fd79bbdee83a0e4dceb1f30ea90a84"],["/posts/f5fc4461/index.html","72ba13e819cf31d7b9366c8c29a8b8f9"],["/posts/f8073739/index.html","91feddc7e8fa6e27e57775eeb5087a30"],["/posts/f97ef43b/index.html","8a9f8378d3f2f6e787aaf53a573b7d5b"],["/posts/fa84d5fc/index.html","ba2c17b95efcf4d7c975674a0d2472fd"],["/sw-register.js","3f2bf39ea873eb045fcabb5106111a7a"],["/tags/index.html","05fa84ea8a7f4f5b7fc47e3520cb0a93"],["/tags/つぶやき/index.html","c8fd14377f2137e271b58b056422c7f6"],["/tags/アニメ/index.html","c189f74499def09490d95dc8275e64ae"],["/tags/インターネット/index.html","8c32aa724de3dac578ed529f22cfce08"],["/tags/チョコレート/index.html","5b812c0c201d4c6b8db995c9ce1251b9"],["/tags/中国に関する新聞記事/index.html","cb33ba2c2e0968d3ae80b4e0d27dab26"],["/tags/乳製品/index.html","661d49eae88d8581af682857c48b5142"],["/tags/労働者保護法律/index.html","753f18935ecfc05a3c39b81e66d6781a"],["/tags/心理学に関する記事/index.html","911b4b20c84847552613ea7619d3cc42"],["/tags/日常生活/index.html","eb0f537bb30b13799ead4a7e9f29e9c6"],["/tags/日本のIT教育/index.html","0506cbf348f18e796cd2e6dda55b7073"],["/tags/日本のIT現場/index.html","6e17015c6d7020ce3b93d3eabed92a7b"],["/tags/日本のビジネスマーナ/index.html","c1bd151fb20b389a928a49d7d5a680dc"],["/tags/日本の国内の人権状況/index.html","372e590c16f8ee2185c361f056c5b851"],["/tags/日本の経済新聞記事/index.html","9c28d02e760d30906dffbbe94ac592f2"],["/tags/日本地理/index.html","0fef608ae577db062243a64c023ea1d8"],["/tags/环境/index.html","b203eaf23016ec5191833568c7cbdc13"],["/tags/過酷な現場/index.html","d2e48db202306cc86378a19d8551ba53"],["/tags/金融/index.html","7c4a464a09009eedc6f692a7bb0b071e"],["/tags/食べ物文化/index.html","74721ca3d1fe69dcfa6d47d1f7be6093"],["/tags/食品工業に関する記事/index.html","ad5366305c14ddc6bf433e246c84a1b5"]];
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
