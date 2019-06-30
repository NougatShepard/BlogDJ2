/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","fab3acb0a3e2675a3e5a09315570347c"],["/about/index.html","9e0eef46932817c5cecf2c11f75999a6"],["/archives/2019/04/index.html","a9e565b82107e43ad6d4b9208e331fe3"],["/archives/2019/05/index.html","0d87de42feebde2c213aa4316d5a0513"],["/archives/2019/05/page/2/index.html","6caca42d1d61a8c927fdf2fdbacf9d48"],["/archives/2019/05/page/3/index.html","203b4cd6bb19a7ba29470b646d913698"],["/archives/2019/06/index.html","8b5c385f9a46136cd87e2a7e472bd6aa"],["/archives/2019/index.html","876831e16c55c68beb48349ef6c3eca0"],["/archives/2019/page/2/index.html","670aab13e7809c3e5a4f52c75fe73541"],["/archives/2019/page/3/index.html","616dfd9bb74107853654a25ac80d7f1e"],["/archives/2019/page/4/index.html","f3847945d666dac258ba92c5179ee89c"],["/archives/index.html","44cc5d5f6034f48f552f3e9892ac4a94"],["/archives/page/2/index.html","1322919074ba1419b78f2c557098c22f"],["/archives/page/3/index.html","9093cdad3767a26058d33b4c792109d8"],["/archives/page/4/index.html","a17fcc6c21c94a139bed83a74ffc8f28"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","0dc15029f50c6294d0dab7858932de65"],["/categories/index.html","022406ef10215f3d543a85979005ded0"],["/categories/つぶやき/index.html","c2debee4593b236e4bc8059f47f40a02"],["/categories/アニメ/index.html","c338b23a8dc6d08898da036ee461f36f"],["/categories/インターネット/index.html","a8784ea9ba34c20ede13023f9e9c34a9"],["/categories/中国に関する新聞記事/index.html","32e583b46898b480914516ad3e29da80"],["/categories/労働者保護法律/index.html","21c9a06783a40a6f2331038a0c853cbb"],["/categories/心理学に関する記事/index.html","9ec43b13f08c7a26196574f99853d104"],["/categories/日常生活/index.html","c0ebee744ae1a5a2e51b4bc6923ba505"],["/categories/日本のIT教育/index.html","f475f34698cf692383d1ca010912cb15"],["/categories/日本のIT現場/index.html","40e68ec8039d16fe09a98fa11150c230"],["/categories/日本のビジネスマーナ/index.html","da902c54a3f093e612cdad631cf5781f"],["/categories/日本の国内の人権状況/index.html","7b38aaa3128ed6cf180b83527ffc75d4"],["/categories/日本の経済新聞記事/index.html","d45d433d9c36c81e61923f35e6fb7346"],["/categories/日本地理/index.html","b047b0176f3874dff8d2479aeb25c9ec"],["/categories/环境/index.html","56caac0a5b4929334f847d499f61229a"],["/categories/過酷な現場/index.html","c7bd381b4cb3c0077878c3419bb001ba"],["/categories/金融/index.html","7f539d5cb5414a3ffc5b64875100238e"],["/categories/食べ物文化/index.html","693258c388ba94bb87f5b5feaaad22d5"],["/categories/食品工業に関する記事/index.html","f6e7164559a4073b048a042523b3c3de"],["/css/main.css","4e978cf8e3fb9735f9d826d2970218a6"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","301049672120a9b0ad4034c1c1e5cf32"],["/js/src/affix.js","7b9f5dcd3c45a7b9e3def733aa24bacc"],["/js/src/algolia-search.js","d4b719f529c699d11af80adecf10d9fd"],["/js/src/bootstrap.js","43238f0a06fe2f9ce63f240bf9ab6af3"],["/js/src/china.js","b5b1de08f00560ac863a7b44d074b98b"],["/js/src/echarts.min.js","18a0d97d04e8fd2c9a2595c0734e2065"],["/js/src/exturl.js","67b419fb1dcf0aee0df6c63d64457d9a"],["/js/src/footprint.js","24dc6489664ede0b19e82115e1a9e91d"],["/js/src/hook-duoshuo.js","3b7c4535ea6d8854c8cb17a63b02255e"],["/js/src/instantclick.min.js","0f734947f4f3a5a4117b058a21941f2b"],["/js/src/js.cookie.js","6645d8d3e3a866fe456d4d674cf6cae1"],["/js/src/motion.js","453dffc0100fa62a9616765fc45398c7"],["/js/src/post-details.js","4721da3f60b98c7d926cd0998e840c7c"],["/js/src/schemes/pisces.js","2f52d16117edf815961bcf71d5152c1d"],["/js/src/scroll-cookie.js","ffa6a769246ca513f04a7aa25577a5e6"],["/js/src/scrollspy.js","2e234fc0c0793d14a8e7fb5e0b84cf05"],["/js/src/utils.js","d2038f876372a7afeb96992af18b87be"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","35eaa80aebb4c509a6bbfcd3d53adf5d"],["/lib/Han/dist/han.js","247f1abc5ab02c915773f21a243dd05d"],["/lib/Han/dist/han.min.css","088edac447fb300a42ef11e6f49653a0"],["/lib/Han/dist/han.min.js","3389a0669bdce40077902ff752147e68"],["/lib/algolia-instant-search/instantsearch.min.css","8106e379edaf5193832ad3b90217962f"],["/lib/algolia-instant-search/instantsearch.min.js","b5a47b8f08a238d6af2166b04baf289c"],["/lib/canvas-nest/canvas-nest.min.js","ed3f4f5172ab72792dab03679f1971b1"],["/lib/canvas-ribbon/canvas-ribbon.js","19b60b9b68d60989759981e83770011b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","4b88cf08bf76e2df841a30e083986314"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fd021743af8ec6dbd8a6411d262f2947"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","21490d69884a460571453147de34311f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","dbf659da93d200d319e5e63c66fd5971"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","803fd2a65674b6c5bbccdf2a23865eef"],["/lib/fancybox/source/jquery.fancybox.css","3d034d5368d5f863db17c7959289d303"],["/lib/fancybox/source/jquery.fancybox.js","257e800546fc622c985f7bd4bd38dcca"],["/lib/fancybox/source/jquery.fancybox.pack.js","e50acb5d34b738395eac6de2cb0e7dcd"],["/lib/fastclick/README.html","0ea88b8f01290e197a5aa2ac25dbc3ab"],["/lib/fastclick/lib/fastclick.js","8fb4f887ba2f0cf0bd94feb6ba182950"],["/lib/fastclick/lib/fastclick.min.js","f7b53f39c5379eee9939ea153ca23200"],["/lib/font-awesome/css/font-awesome.css","776079b0cc69f72ac6e52d28fd91db12"],["/lib/font-awesome/css/font-awesome.min.css","776079b0cc69f72ac6e52d28fd91db12"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","16bc27f09113799889302e801767de55"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ffc3f400ab452a2ac855e6fa0a75973"],["/lib/jquery_lazyload/README.html","e775b876c68f7ccc70944e2c42509b40"],["/lib/jquery_lazyload/jquery.lazyload.js","05c3c8c2e3eee4d3263cc52aba0cde3b"],["/lib/jquery_lazyload/jquery.scrollstop.js","02732d41a24ab989b844d3dbde7eaaf4"],["/lib/needsharebutton/font-embedded.css","2bbf799db539180c932f8f86fec5bb8a"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6957683f5f8bdd008ee9e61a51d8d27e"],["/lib/pace/pace-theme-barber-shop.min.css","9580eefcf2d468bcbda0af38c900168b"],["/lib/pace/pace-theme-big-counter.min.css","231d3ff4d0df6ced8fbe2df1e34e5cfb"],["/lib/pace/pace-theme-bounce.min.css","2ee48ab204c2b05d0cca57453dca83c6"],["/lib/pace/pace-theme-center-atom.min.css","1d0dfd23923eb1bf8c3414c8730d03da"],["/lib/pace/pace-theme-center-circle.min.css","cd62fff05df5b2d94984a80391ae81b3"],["/lib/pace/pace-theme-center-radar.min.css","e5cb733e4d124a56716b2a67f44fa066"],["/lib/pace/pace-theme-center-simple.min.css","66e36de94fcef6e0b77d8e737d8c9a64"],["/lib/pace/pace-theme-corner-indicator.min.css","c34b98e69c271cf912e7b9bcb257e43e"],["/lib/pace/pace-theme-fill-left.min.css","77498a0518ae161b21bdfea631301ff1"],["/lib/pace/pace-theme-flash.min.css","72646e10a165e3c1c975850a9a55a91e"],["/lib/pace/pace-theme-loading-bar.min.css","7d902875d4257abb9bfa1d0db8de989e"],["/lib/pace/pace-theme-mac-osx.min.css","78e12b575533e1bd407c508e0abdf847"],["/lib/pace/pace-theme-minimal.min.css","57d5baf5752c7e678eba9c62761198ee"],["/lib/pace/pace.min.js","7740f6665c92134f3f307c72e260d300"],["/lib/three/canvas_lines.min.js","a6c8ce0f349c279ac68c5380ade47743"],["/lib/three/canvas_sphere.min.js","bb7dcfe02c19d9033437e954349b72b1"],["/lib/three/three-waves.min.js","ca1b3870ca936f60f65db5336a56663b"],["/lib/three/three.min.js","85a214b6def985a450176b67a60041e2"],["/lib/ua-parser-js/dist/ua-parser.min.js","fcd8cf778e87be9591bd406a10dbf8ad"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f74d1a36cbf3a5307f2d0bfa44bf170f"],["/lib/velocity/velocity.js","808df72e9c6c63558748756140437c32"],["/lib/velocity/velocity.min.js","40d56c1ecf57b6452dfb1d200d262681"],["/lib/velocity/velocity.ui.js","27a7ffdbeaabae7af95e94030497a0a6"],["/lib/velocity/velocity.ui.min.js","e2a45720fa0cb86c8cd56bc737a80252"],["/links/index.html","4f595c27e0c1bdb3ea911698f5c2ed80"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","91fa94f46965f2d91935368daebea1e5"],["/page/3/index.html","be1cff98bbe15e13ec1c7f15a93048a0"],["/page/4/index.html","4e011a074c499539778cb40f2c054c03"],["/photos/index.html","11b196561927fc0992a57600ec5f3436"],["/posts/191ddb73/index.html","ee17861bacad0a3744ffe76e0cb042b3"],["/posts/1a195976/index.html","f7cf2bd79c8d59a004a5befa1b9202d4"],["/posts/2292f1af/index.html","1a75a426df262bcbabdacebf2b28b59d"],["/posts/2fc77d95/index.html","a69e791ebfba28381ba549b0d693ef35"],["/posts/2feacaf4/index.html","9ce45b1446b43a2c2923c2dec71693e1"],["/posts/37f2c331/index.html","f02c10e168b7eb827c2b18a6cff4557c"],["/posts/385f0de9/index.html","62ee3d8f0a47f7bb81a62aa2a72b4a18"],["/posts/3caecfa9/index.html","b87733d084ed7a41efc5a2a99ea54914"],["/posts/44414303/index.html","1a7dfd2cc8f80469be695d1946f51134"],["/posts/456610d0/index.html","55b80ca8b5a5e753fc74b7278b502740"],["/posts/45e51894/index.html","ba9702c8e2cd2af2e7516d911dc0fe53"],["/posts/4f1131af/index.html","87b633a4411ac7078bfb071165d9da6f"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","503f03f3af9b8ee94982f0b760b4b96f"],["/posts/517ebb95/index.html","9058153a670b50763abbe0ead3a34bc6"],["/posts/53bf1d9d/index.html","c78e4e2e36623ad313782584d7a5693a"],["/posts/554c2ba0/index.html","cf92fd1f65b71ca69b0b6144205201e1"],["/posts/63556f52/index.html","cb522f71fa7e437fecdc4228f04c9e13"],["/posts/6d49ceec/index.html","089a46877dc2caee88ebacbc9ae6089f"],["/posts/6de7d9db/index.html","080f9d0399ccf3d9a9e93bd07745e91f"],["/posts/6fda249f/index.html","8f993bde2f432b81067aa4c60e842fcc"],["/posts/84b87417/index.html","1a141a415552011644350ec850437bed"],["/posts/8a60fcb8/index.html","9a0e65088ef3c6cefaf841ef5c070756"],["/posts/92912ddc/index.html","bfec127143a3b32eb875015ae9933cd5"],["/posts/97e5bc9c/index.html","247a4fb5304852a19dc40fde096452d8"],["/posts/9a5c7b64/index.html","e73a7dfe0194166a6200a0d5535775ad"],["/posts/ac7d0231/index.html","74b42d57c7a5b03eaa9fdf305fd0ed7a"],["/posts/c311b112/index.html","9ebdd20fe49045eca06ac838a734f205"],["/posts/c620d4c2/index.html","3a20344adbfb897c6aeba58b6b7f8ccd"],["/posts/cfc54393/index.html","482dd4e83073ebb2c2238a2ce12162ae"],["/posts/dc5155ff/index.html","ccd1f28ac753b83a9f523aba5278431f"],["/posts/e1bd836e/index.html","ea1597e7f8d1b0393b38e0613ea52e55"],["/posts/e31c0293/index.html","4107e609c264fb10a6a23ec1efb2396b"],["/posts/f5fc4461/index.html","f3f755bbfa47e198780363395e9422a8"],["/posts/f8073739/index.html","cedc516fac0c5988758569dd6c838a11"],["/posts/f97ef43b/index.html","a86e1585d5fab88a9107812f9e3f5dd1"],["/posts/fa84d5fc/index.html","ce76f850c6831c306a0d163d07b2c064"],["/posts/fb1ab942/index.html","5f8a8e8015f6dea9a0895a6c45881eb4"],["/sw-register.js","58a85423c1d2633e4962a1f796b634da"],["/tags/J-pop/index.html","93d760f4948e7d5183a94cb036ee67bf"],["/tags/index.html","6b017e5b3966751b9737944d11e58483"],["/tags/つぶやき/index.html","ce49541c9c7a5325580b359c05ce5143"],["/tags/アニメ/index.html","e32732ff20a73cac18ceb050eca94183"],["/tags/インターネット/index.html","ae50f3a182309ae8bb08a312764b2d20"],["/tags/チョコレート/index.html","36e920e5a14c318aa2f3f2dcadd25122"],["/tags/中国に関する新聞記事/index.html","c4ab1c6dc0abfb2734b7462a511f57c1"],["/tags/乳製品/index.html","ebd61b549e4b207c58df5035af7fb651"],["/tags/労働者保護法律/index.html","930a5b6f6c68c0ebb5a998f658845c19"],["/tags/心理学に関する記事/index.html","f87cbed77070332440696128e1f8adff"],["/tags/日常生活/index.html","4b7df701c4a56604d0ae47b76b9fd6f4"],["/tags/日本のIT教育/index.html","700aee3c583ae7d1fb3e587c87c04018"],["/tags/日本のIT現場/index.html","519372d0a60c86fb0d08dd053d28ee6f"],["/tags/日本のビジネスマーナ/index.html","2557e54ce6c93d4e60a7deb21841a726"],["/tags/日本の国内の人権状況/index.html","203b8e821b32766b564da18b7409a9bc"],["/tags/日本の経済新聞記事/index.html","b74924d0f57a8edc13e82b51afbaf7de"],["/tags/日本地理/index.html","b402207eb0f9a0de265d6fa62fcdec33"],["/tags/环境/index.html","344e53ccabb69af4bf68599c6728c92a"],["/tags/過酷な現場/index.html","3163d70d6cbf1d79a2d9acb2c908429c"],["/tags/金融/index.html","64283ee87c9f4b9e8bdf7676f80d49fe"],["/tags/食べ物文化/index.html","2657af884237fe8cd6190616361ad410"],["/tags/食品工業に関する記事/index.html","2d8406885593f7dfa09dd46afb11fa40"]];
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
